import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/core/services/api.service';
import { AuthService } from 'src/app/core/services/auth.service';
import { NotificationService } from 'src/app/core/services/notification.service';
import { CommonService } from 'src/app/core/utilities/common.helper';
import { ConfirmComponent } from 'src/app/shared/component/dialogs/confirm/confirm.component';
import { SystemMessage } from 'src/app/shared/configdata/system-message';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import { SecurityOperation } from 'src/app/shared/enum/security-operation.enum';
import { ApiError } from 'src/app/shared/models/api-error.model';
import { DuyetYeuCauChayLaiTuChoiPopupComponent } from '../duyet-yeu-cau-chay-lai-tu-choi-popup/duyet-yeu-cau-chay-lai-tu-choi-popup.component';
import { DanhSachGoiXetNghiemLai, DuyetYeuCauGoiLaiXetNghiem, ThongTinHanhChinhXN, TuChoiYeuCauGoiLaiXetNghiem } from '../duyet-yeu-cau-chay-lai.model';

import icSearch from '@iconify/icons-ic/twotone-search';
import { FormControl } from '@angular/forms';
import { GridComponent } from 'src/app/shared/component/grid/grid.component';

@Component({
  selector: 'app-duyet-yeu-cau-chay-lai-duyet',
  templateUrl: './duyet-yeu-cau-chay-lai-duyet.component.html',
  styleUrls: ['./duyet-yeu-cau-chay-lai-duyet.component.scss']
})
export class DuyetYeuCauChayLaiDuyetComponent implements OnInit {
  documentType: DocumentType;
  baseRoute: string = "xet-nghiem/duyet-yeu-cau-chay-lai";

  gridNhomXetNghiemColumns: any[] = [];
  gridDichVuColumns: any[] = [];

  id: number = 0;
  phienXetNghiemId: number = 0;
  thongTinHanhChinhXN = {} as ThongTinHanhChinhXN;
  danhSachGoiXetNghiemLai = {} as DanhSachGoiXetNghiemLai;

  urlGetDataGridParentAsync = "XetNghiem/GetDanhSachKQChiTietXetNghiemForGrid";
  urlGetTotalPageParentAsync = "XetNghiem/GetTotalDanhSachKQChiTietXetNghiemForGrid";

  icSearch = icSearch;
  searchCtrl = new FormControl;
  searchString: string = null;

  @ViewChild('sttTemplate', { static: true }) sttTemplate: TemplateRef<any>;
  @ViewChild('damKetQuaTemplate', { static: true }) damKetQuaTemplate: TemplateRef<any>;
  @ViewChild('trangThaiTemplate', { static: true }) trangThaiTemplate: TemplateRef<any>;
  @ViewChild('gridDuyetYeuCauChayLaiXN', { static: false }) gridDuyetYeuCauChayLaiXN: GridComponent;

  gridDataXNChayLaiSource: any = {
    Data: [],
    TotalRowCount: 0
  };

  constructor(private router: Router,
    private authService: AuthService,
    private route: ActivatedRoute,
    private notificationService: NotificationService,
    private dialog: MatDialog,
    private apiService: ApiService) { }

  ngOnInit() {
    this.documentType = DocumentType.DuyetYeuCauChayLaiXetNghiem;
    this.id = this.route.snapshot.params.id;
    this.phienXetNghiemId = this.route.snapshot.params.phienXetNghiemId;
    if (this.phienXetNghiemId != undefined && this.phienXetNghiemId != null) {
      this.getThongTinHanhChinhXN(this.phienXetNghiemId);
    }

    this.gridNhomXetNghiemColumns = [
      { Field: "TenNhomDichVuBenhVien", Title: "Nhóm XN", Width: 160, Sortable: true },
      { Field: "Barcode", Title: "Mã Barcode", Width: 120, Sortable: true },
      { Field: "NguoiYeuCau", Title: "Người yêu cầu", Width: 120, Sortable: true },
      { Field: "NgayYeuCauDisplay", Title: "Ngày yêu cầu", Width: 80, Sortable: true },
      { Field: "LyDoYeuCau", Title: "Lý do yêu cầu", Width: 120, Sortable: true },
      { Field: "TinhTrang", Title: "Tình Trạng", Width: 120, Sortable: true, Template: this.trangThaiTemplate },
      { Field: "NguoiDuyet", Title: "Người duyệt", Width: 120, Sortable: true },
      { Field: "NgayDuyetDisplay", Title: "Ngày duyệt", Width: 80, Sortable: true },
      { Field: "LyDo", Title: "Lý do", Width: 120, Sortable: true }
    ];

    // gán màu cho row trong api get datasource, thêm properties HighLightClass
    this.gridDichVuColumns = [
      { Field: "STT", Title: "#", Width: 30, Sortable: false, Template: this.sttTemplate },
      { Field: "TenDichVu", Title: "Tên", Width: 160, Sortable: true },
      { Field: "KetQuaCu", Title: "KQ cũ", Width: 80, Sortable: true },
      { Field: "KetQuaTuMay", Title: "KQ từ máy", Width: 100, Sortable: true },
      { Field: "KetQuaNhapTay", Title: "KQ nhập tay", Width: 100, Sortable: true },
      { Field: "KetQuaDuyet", Title: "KQ duyệt", Width: 100, Sortable: true },
      { Field: "DamKetQua", Title: "Đậm KQ", Width: 50, Sortable: true, Template: this.damKetQuaTemplate },
      { Field: "ChiSoBinhThuong", Title: "CSBT", Width: 80, Sortable: true },
      { Field: "DVT", Title: "DVT", Width: 60, Sortable: true },
      { Field: "GioTiepNhanMau", Title: "Giờ tiếp nhận mẫu", Width: 100, Sortable: true },
      { Field: "GioNhanKetQua", Title: "Giờ nhận KQ", Width: 100, Sortable: true },
      { Field: "MayXetNghiem", Title: "Máy XN", Width: 100, Sortable: true },
      { Field: "NguoiDuyet", Title: "Người duyệt", Width: 120, Sortable: true },
      { Field: "NgayDuyet", Title: "Ngày duyệt", Width: 80, Sortable: true }
    ];
  }

  getThongTinHanhChinhXN(id: number) {
    this.apiService.get<any>("XetNghiem/ThongTinHanhChinhXN/" + id)
      .subscribe((resultData) => {
        if (resultData !== null && resultData !== undefined) {
          this.thongTinHanhChinhXN = resultData;
        }
      });
  }

  xuLyTuChoi() {
    this.dialog.open(DuyetYeuCauChayLaiTuChoiPopupComponent, {
      disableClose: false,
      width: '400px',
      data: { Title: "Xác nhận", Message: "Bạn có chắc muốn từ chối yêu cầu chạy lại xét nghiệm này không?" }
    }).afterClosed().subscribe(result => {
      if (result !== null) {
        let tuChoiYeuCauGoiLaiXetNghiem = new TuChoiYeuCauGoiLaiXetNghiem();
        tuChoiYeuCauGoiLaiXetNghiem.PhienXetNghiemId = this.phienXetNghiemId;
        tuChoiYeuCauGoiLaiXetNghiem.LyDoTuChoi = result;
        this.apiService.post("XetNghiem/TuChoiXetNghiemLai", tuChoiYeuCauGoiLaiXetNghiem)
          .subscribe((resultData) => {
            this.notificationService.showSuccess(CommonService.format(SystemMessage.ActionSuccessfully, ["Từ chối"]));
            this.quayLai();
          },
            (err: ApiError) => {
              if (err.Message != "Validation Failed") {
                this.notificationService.showError(err.Message);
              }
            });
      }
    });
  }

  danhSachChoDuyetlais: any[] = [];
  data = null;
  onDataBound(event) {
    if (event != undefined && event.Data.length > 0) {
      this.danhSachChoDuyetlais = [...event.Data];
      this.data = JSON.stringify(event.Data);
    }
  }

  xuLyDuyet() {
    if (this.authService.hasPermission(this.documentType, SecurityOperation.Update)) {
      var self = this;
      self.dialog.open(ConfirmComponent, {
        disableClose: false,
        width: '400px',
        data: { Title: "Xác nhận", Message: "Bạn có chắc chắn muốn duyệt yêu cầu chạy lại xét nghiệm này không?" }
      }).afterClosed().subscribe(result => {
        if (result == "Yes") {
          this.danhSachGoiXetNghiemLai.DuyetYeuCauGoiLaiXetNghiems = [];
          this.danhSachChoDuyetlais.forEach((element) => {
            let duyet = new DuyetYeuCauGoiLaiXetNghiem();
            duyet.Id = element.Id,
              duyet.NhanVienYeuCauId = element.NhanVienYeuCauId,
              this.danhSachGoiXetNghiemLai.DuyetYeuCauGoiLaiXetNghiems.push(duyet);
          });
          self.apiService.post("XetNghiem/DuyetXetNghiemLai", this.danhSachGoiXetNghiemLai).subscribe(resultData => {
            self.notificationService.showSuccess(CommonService.format(SystemMessage.ActionSuccessfully, ["Duyệt"]));
            this.quayLai();
          },
            (err: ApiError) => {
              if (err.Message != "Validation Failed") {
                self.notificationService.showError(err.Message);
              }
            });
        }
      });
    } else {
      self.notificationService.showError(SystemMessage.UnAuthorizedMessage);
    }
  }

  quayLai() {
    this.router.navigate([this.baseRoute], { queryParams: { holdQuery: true } });
  }

  searchChanges(event) {
    this.searchString = event;
    if(!event) {
      this.gridDuyetYeuCauChayLaiXN.searchString = this.searchString;
      this.gridDuyetYeuCauChayLaiXN.search();
    }
  }

  onKeySearchChanges(event) {
    if (event.keyCode == 13) {
      this.gridDuyetYeuCauChayLaiXN.searchString = this.searchString;
      this.gridDuyetYeuCauChayLaiXN.search();
    }
  }
}
