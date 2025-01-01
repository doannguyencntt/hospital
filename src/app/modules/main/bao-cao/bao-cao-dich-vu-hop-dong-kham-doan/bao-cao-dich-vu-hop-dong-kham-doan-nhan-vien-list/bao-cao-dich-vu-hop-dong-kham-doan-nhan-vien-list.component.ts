import { BaoCaoDichVuHopDongKhamDoanTheoHopDong, InBaoCaoDichVuHopDongKhamDoanTheoNhanVien } from '../bao-cao-dich-vu-hop-dong-kham-doan.model';
import {
  Component,
  OnInit,
  ViewChild,
  TemplateRef,
  ChangeDetectorRef,
} from "@angular/core";
import { DocumentType } from "src/app/shared/enum/document-type.enum";
import { GridComponent } from "src/app/shared/component/grid/grid.component";
import { SortDescriptor } from "@progress/kendo-data-query";
import { ApiService } from "src/app/core/services/api.service";
import { CommonService } from "src/app/core/utilities/common.helper";
import { AuthService } from "src/app/core/services/auth.service";
import { ActivatedRoute, Router } from "@angular/router";
import { NotificationService } from "src/app/core/services/notification.service";
import { SystemMessage } from "src/app/shared/configdata/system-message";
import { SecurityOperation } from "src/app/shared/enum/security-operation.enum";
import { MatDialog } from "@angular/material";
import icFileExcel from '@iconify/icons-fa-solid/file-excel';
import { LoadingComponent } from 'src/app/shared/component/dialogs/loading/loading.component';
import { Location } from '@angular/common';
import { ApiError } from 'src/app/shared/models/api-error.model';
import { PhieuInCongKhaiThuocPopupComponent } from '../../../dieu-tri-noi-tru/danh-sach-dieu-tri-noi-tru/phieu-dieu-tri/phieu-in-cong-khai-thuoc-popup/phieu-in-cong-khai-thuoc-popup.component';
import { LocalStorageHelper } from 'src/app/core/utilities/local-storage.helper';
@Component({
  selector: 'app-bao-cao-dich-vu-hop-dong-kham-doan-nhan-vien-list',
  templateUrl: './bao-cao-dich-vu-hop-dong-kham-doan-nhan-vien-list.component.html',
  styleUrls: ['./bao-cao-dich-vu-hop-dong-kham-doan-nhan-vien-list.component.scss']
})
export class BaoCaoDichVuHopDongKhamDoanNhanVienListComponent implements OnInit {
  documentType: DocumentType = DocumentType.BaoCaoDichVuTrongGoiKhamDoan;
  baseRoute: string = "/bao-cao/bao-cao-benh-nhan-kham-suc-khoe-doan";
  gridColumns: any[] = [];
  @ViewChild('thoiDiemThucHienTemplate', { static: true }) thoiDiemThucHienTemplate: TemplateRef<any>;
  @ViewChild('gridChildNhanVien', { read: GridComponent, static: false }) gridChildNhanVien: GridComponent;
  addtionStringDefault: string = null;
  baoCaoDichVuHopDongKhamDoanTheoHopDong: BaoCaoDichVuHopDongKhamDoanTheoHopDong = new BaoCaoDichVuHopDongKhamDoanTheoHopDong();
  tinhTrang: number = 0;
  validationErrors: any;
  inBaoCaoDichVuHopDongKhamDoanTheoNhanVien: InBaoCaoDichVuHopDongKhamDoanTheoNhanVien = new InBaoCaoDichVuHopDongKhamDoanTheoNhanVien();
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private dialog: MatDialog,
    private authService: AuthService,
    private apiService: ApiService,
    private ref: ChangeDetectorRef,
    private notificationService: NotificationService
  ) { }

  ngOnInit() {
    this.route.queryParams.subscribe(param => {
      this.baoCaoDichVuHopDongKhamDoanTheoHopDong.HopDongKhamSucKhoeId = param['Id'];
      var additionalSearchString = LocalStorageHelper.getItem<string>("additionalSearchStringBaoCaoDVTrongGoi");
      if (additionalSearchString != null && additionalSearchString != "") {
        let baoCaoDichVuHopDong = JSON.parse(additionalSearchString);
        this.baoCaoDichVuHopDongKhamDoanTheoHopDong.FromDate1 = baoCaoDichVuHopDong.FromDate1;
        this.baoCaoDichVuHopDongKhamDoanTheoHopDong.ToDate1 = baoCaoDichVuHopDong.ToDate1;
      }
      this.tinhTrang = parseInt(param['F']);
      if (this.tinhTrang == 0) {
        this.baoCaoDichVuHopDongKhamDoanTheoHopDong.ChuaKhamNhanVien = true;
        this.baoCaoDichVuHopDongKhamDoanTheoHopDong.DangKhamNhanVien = false;
        this.baoCaoDichVuHopDongKhamDoanTheoHopDong.DaKhamNhanVien = false;
      } else {
        this.baoCaoDichVuHopDongKhamDoanTheoHopDong.ChuaKhamNhanVien = false;
        this.baoCaoDichVuHopDongKhamDoanTheoHopDong.DangKhamNhanVien = false;
        this.baoCaoDichVuHopDongKhamDoanTheoHopDong.DaKhamNhanVien = true;
      }
      this.addtionStringDefault = JSON.stringify(this.baoCaoDichVuHopDongKhamDoanTheoHopDong);
    });
    this.gridColumns = [
      { Field: 'MaNV', Title: 'mã nhân viên', Width: 120, Sortable: true },
      { Field: 'MaBN', Title: 'mã bệnh nhân', Width: 120, Sortable: false },
      { Field: 'MaTN', Title: 'mã tiếp nhận', Width: 120, Sortable: false },
      { Field: 'HoTen', Title: 'Họ tên', Width: 195, Sortable: false },
      { Field: 'NamSinh', Title: 'ns', Width: 100, Sortable: false },
      { Field: 'GioiTinhDisplay', Title: 'gt', Width: 100, Sortable: false },
      {
        Field: 'ThoiDiemThucHien', Title: 'Ngày bn đến khám', Width: 100, Sortable: true,
        Template: this.thoiDiemThucHienTemplate
      },

    ];
  }

  exportExcel() {
    if (this.authService.hasPermission(this.documentType, SecurityOperation.Process)) {
      this.dialog.open(LoadingComponent, {
        disableClose: true,
        width: '200px',
        height: '90px',
        data: { Title: 'Đang xuất excel...' }
      });
      this.baoCaoDichVuHopDongKhamDoanTheoHopDong.TinhTrang = this.tinhTrang;
      this.gridChildNhanVien._gridQueryInfo.additionalSearchString = JSON.stringify(this.baoCaoDichVuHopDongKhamDoanTheoHopDong);
      this.apiService.postExportExcel<string>("BaoCaoKhamDoanHopDong/ExportBaoCaoDichVuTrongGoiKhamDoanChiTiet", this.gridChildNhanVien._gridQueryInfo).subscribe(res => {
        let dateTimeNow = new Date();
        CommonService.downLoadFile(res, "application/vnd.ms-excel", "BaoCaoDichVuTrongGoiKhamDoan" + dateTimeNow.getFullYear() + ".xlsx");
        this.dialog.closeAll();
      }, err => {
        this.notificationService.showError(err.Message);
        this.dialog.closeAll();
      })
    } else {
      this.notificationService.showError(SystemMessage.UnAuthorizedMessage);
    }
  }

  In() {
    this.inBaoCaoDichVuHopDongKhamDoanTheoNhanVien.Datas = this.gridChildNhanVien.getAllDataFromDatasource();
    this.inBaoCaoDichVuHopDongKhamDoanTheoNhanVien.HostingName = window.location.protocol + "//" + window.location.host;
    this.inBaoCaoDichVuHopDongKhamDoanTheoNhanVien.Loai = this.tinhTrang;
    if (this.tinhTrang == 0) {
      this.inBaoCaoDichVuHopDongKhamDoanTheoNhanVien.TrangThai = "chưa khám";
    } else {
      this.inBaoCaoDichVuHopDongKhamDoanTheoNhanVien.TrangThai = "đã khám";
    }
    var showDialog = this.dialog.open(LoadingComponent, {
      disableClose: true,
      width: '200px',
      height: '90px',
      data: { Title: 'Đang tải dữ liệu...' }
    });
    this.ref.detectChanges();
    this.apiService.post<any>("BaoCaoKhamDoanHopDong/InDanhSachNhanVien", this.inBaoCaoDichVuHopDongKhamDoanTheoNhanVien).subscribe(
      (res) => {
        showDialog.close()
        this.dialog
          .open(PhieuInCongKhaiThuocPopupComponent, {
            disableClose: true,
            width: "1200px",
            data: { Html: res, Title: "DANH SÁCH NGƯỜI BỆNH KHÁM SỨC KHỎE THEO HỢP ĐỒNG", LaPhieuThucHien: false },
          });
      },
      (err: ApiError) => {
        this.validationErrors = err.ValidationErrors;
        if (err.Message != "Validation Failed") {
          this.notificationService.showError(err.Message);
          showDialog.close()
        };
        showDialog.close()
      });
  }
  quayLai() {
    this.router.navigate(["/bao-cao/bao-cao-benh-nhan-kham-suc-khoe-doan"], { queryParams: { holdQuery: true } })
  }
}
