import {
  Component,
  OnInit,
  ViewChild,
  TemplateRef,
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
import { BaoCaoDichVuHopDongKhamDoanNgoaiHopDong } from "../bao-cao-dich-vu-ngoai-hop-dong-kham-doan.model";
declare var jQuery: any;
@Component({
  selector: 'app-bao-cao-dich-vu-ngoai-hop-dong-kham-doan-list',
  templateUrl: './bao-cao-dich-vu-ngoai-hop-dong-kham-doan-list.component.html',
  styleUrls: ['./bao-cao-dich-vu-ngoai-hop-dong-kham-doan-list.component.scss']
})
export class BaoCaoDichVuNgoaiHopDongKhamDoanListComponent implements OnInit {
  baseRoute: string = "/kham-doan/ket-luan-kham-suc-khoe-doan";
  documentType: DocumentType = DocumentType.BaoCaoDichVuNgoaiGoiKhamDoan;
  baoCaoDichVuHopDongKhamDoanNgoaiHopDong: BaoCaoDichVuHopDongKhamDoanNgoaiHopDong = new BaoCaoDichVuHopDongKhamDoanNgoaiHopDong();
  @ViewChild(GridComponent, { static: true }) gridChild: GridComponent;
  @ViewChild('thanhTienTemplate', { static: true }) thanhTienTemplate: TemplateRef<any>;
  @ViewChild('donGiaTemplate', { static: true }) donGiaTemplate: TemplateRef<any>;
  @ViewChild('donGiaMoiTemplate', { static: true }) donGiaMoiTemplate: TemplateRef<any>;
  @ViewChild('tienMienGiamTemplate', { static: true }) tienMienGiamTemplate: TemplateRef<any>;
  @ViewChild('congNoTemplate', { static: true }) congNoTemplate: TemplateRef<any>;

  addtionStringDefault: string = null;
  gridColumns: any[] = [];
  icFileExcel = icFileExcel;
  lanDauLoadData: boolean = true;
  changeDataCongTy: boolean = false;
  sort: SortDescriptor[] = [
    {
      field: "MaBN",
      dir: "desc",
    },
  ];
  constructor(
    private authService: AuthService,
    private router: Router,
    private apiService: ApiService,
    private dialog: MatDialog,
    private location: Location,
    private notificationService: NotificationService,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.gridColumns = [
      { Field: "MaNV", Title: "Mã NV", Width: 70, Sortable: true, ShowTooltip: true },
      { Field: "MaBN", Title: "Mã NB", Width: 80, Sortable: true, ShowTooltip: true },
      { Field: "MaTN", Title: "Mã TN", Width: 90, Sortable: true },
      { Field: "HoTen", Title: "Họ tên", Width: 120, Sortable: true, ShowTooltip: true },
      { Field: "GioiTinhDisplay", Title: "GIỚI TÍNH", Width: 50, Sortable: false },
      { Field: "NamSinh", Title: "NĂM SINH", Width: 50, Sortable: true },
      { Field: "TenDichVu", Title: "Dịch vụ", MinWidth: 100, Sortable: true, ShowTooltip: true },
      // { Field: "SoLan", Title: "SL", Width: 15, Sortable: true },
      { Field: "DonGiaBV", Title: "Đơn giá BV", Width: 100, Sortable: true, Template: this.donGiaTemplate },
      { Field: "DonGiaMoi", Title: "Đơn giá mới", Width: 40, Sortable: true, Template: this.donGiaMoiTemplate },
      { Field: "SoTienMienGiam", Title: "Số tiền được miễn giảm", Width: 100, Sortable: true, Template: this.tienMienGiamTemplate },
      { Field: "ThanhTienThucThu", Title: "Số tiền Thực thu", Width: 100, Sortable: true, Template: this.thanhTienTemplate },
      { Field: "TongSoTienCongNo", Title: "Công nợ", Width: 100, Sortable: true, Template: this.congNoTemplate },

    ];
    this.lanDauLoadData = false;

  }

  onDataBound(dataSource: any) {
    if (dataSource != undefined && dataSource.Data.length > 0) {
      setTimeout(function () {
        var maTnOld = "";
        var idOld = "";
        dataSource.Data.forEach(element => {
          if (element.MaTN == maTnOld && jQuery("." + element.MaTN + "." + element.Id).length > 0) {
            jQuery("." + maTnOld + "." + idOld).parent().css({ "border-bottom": "none" });
            jQuery("." + element.MaTN + "." + element.Id).parent().css({ "border-left": "1px solid rgba(0,0,0,0.12)" });
          }
          else{
            if(maTnOld!="" && idOld!="" && jQuery("." + maTnOld + "." + idOld).length > 0)
            {
              jQuery("." + maTnOld + "." + idOld).parent().css({ "border-bottom": "1px solid rgba(0,0,0,0.12)"  });
              jQuery("." + element.MaTN + "." + element.Id).parent().css({ "border-left": "none"  });
            }
          }
          maTnOld = element.MaTN;
          idOld = element.Id;
        });
      });
    }
  }
  congTyKhamSucKhoeChange(id: any) {
    this.changeDataCongTy = true;
    if (id != undefined && id != null) {

    } else {
      this.baoCaoDichVuHopDongKhamDoanNgoaiHopDong.HopDongKhamSucKhoeId = null;
    }
  }
  timKiem() {
    // if (this.baoCaoDichVuHopDongKhamDoanNgoaiHopDong.RangeFromDate != null && this.baoCaoDichVuHopDongKhamDoanNgoaiHopDong.RangeFromDate.startDate != null) {
    //   this.baoCaoDichVuHopDongKhamDoanNgoaiHopDong.RangeFromDate.TuNgay = CommonService.formatDateTime(this.baoCaoDichVuHopDongKhamDoanNgoaiHopDong.RangeFromDate.startDate, "mm/dd/yyyy");
    // }
    // else {
    //   this.baoCaoDichVuHopDongKhamDoanNgoaiHopDong.RangeFromDate.TuNgay = null;
    // }
    // if (this.baoCaoDichVuHopDongKhamDoanNgoaiHopDong.RangeFromDate != null && this.baoCaoDichVuHopDongKhamDoanNgoaiHopDong.RangeFromDate.endDate != null) {
    //   this.baoCaoDichVuHopDongKhamDoanNgoaiHopDong.RangeFromDate.DenNgay = CommonService.formatDateTime(this.baoCaoDichVuHopDongKhamDoanNgoaiHopDong.RangeFromDate.endDate, "mm/dd/yyyy");
    // }
    // else {
    //   this.baoCaoDichVuHopDongKhamDoanNgoaiHopDong.RangeFromDate.DenNgay = null;
    // }
    if (this.baoCaoDichVuHopDongKhamDoanNgoaiHopDong.ThoiDiemTiepNhanTuFormat != null) {
      this.baoCaoDichVuHopDongKhamDoanNgoaiHopDong.FromDate = CommonService.formatDateTime(
        this.baoCaoDichVuHopDongKhamDoanNgoaiHopDong.ThoiDiemTiepNhanTuFormat,
        "dd/mm/yyyy"
      );
    } else {
      this.baoCaoDichVuHopDongKhamDoanNgoaiHopDong.FromDate = null;
    }

    if (this.baoCaoDichVuHopDongKhamDoanNgoaiHopDong.ThoiDiemTiepNhanDenFormat != null) {
      this.baoCaoDichVuHopDongKhamDoanNgoaiHopDong.ToDate = CommonService.formatDateTime(
        this.baoCaoDichVuHopDongKhamDoanNgoaiHopDong.ThoiDiemTiepNhanDenFormat,
        "dd/mm/yyyy"
      );
    } else {
      this.baoCaoDichVuHopDongKhamDoanNgoaiHopDong.ToDate = null;
    }

    var queryString = JSON.stringify(this.baoCaoDichVuHopDongKhamDoanNgoaiHopDong);
    this.gridChild._additionalSearchString = queryString;
    this.gridChild.search();
  }

  changeLookupHopDong(event) {
    if (!this.lanDauLoadData && this.changeDataCongTy) {
      if (event && event.length > 0 && this.baoCaoDichVuHopDongKhamDoanNgoaiHopDong.CongTyKhamSucKhoeId) {
        if (!this.baoCaoDichVuHopDongKhamDoanNgoaiHopDong.HopDongKhamSucKhoeId) {
          this.baoCaoDichVuHopDongKhamDoanNgoaiHopDong.HopDongKhamSucKhoeId = event[0].KeyId;
        } else {
          this.baoCaoDichVuHopDongKhamDoanNgoaiHopDong.HopDongKhamSucKhoeId = event[0].KeyId;
        }
        this.changeDataCongTy = false;
        this.timKiem();
      }
      else {
        this.baoCaoDichVuHopDongKhamDoanNgoaiHopDong.HopDongKhamSucKhoeId = null;
        this.changeDataCongTy = false;
        this.timKiem();
      }
    }
  }

  xuatExcel() {
    if (this.authService.hasPermission(this.documentType, SecurityOperation.Process)) {
      this.dialog.open(LoadingComponent, {
        disableClose: true,
        width: '200px',
        height: '90px',
        data: { Title: 'Đang xuất excel...' }
      });
      this.apiService.postExportExcel<string>("BaoCaoKhamDoanHopDong/ExportBaoCaoDichVuTrongGoiKhamDoan", this.gridChild._gridQueryInfo).subscribe(res => {
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
}
