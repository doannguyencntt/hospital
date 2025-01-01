import { Component, Input, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDialog } from '@angular/material';
import { ActivatedRoute } from '@angular/router';
import icSearch from '@iconify/icons-ic/twotone-search';
import { ApiService } from 'src/app/core/services/api.service';
import { AuthService } from 'src/app/core/services/auth.service';
import { NotificationService } from 'src/app/core/services/notification.service';
import { CommonService } from 'src/app/core/utilities/common.helper';
import { ConfirmComponent } from 'src/app/shared/component/dialogs/confirm/confirm.component';
import { LoadingComponent } from 'src/app/shared/component/dialogs/loading/loading.component';
import { GridComponent } from 'src/app/shared/component/grid/grid.component';
import { SystemMessage } from 'src/app/shared/configdata/system-message';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import { EnumTypeLoadingData } from 'src/app/shared/enum/kham-benh.enum';
import { SecurityOperation } from 'src/app/shared/enum/security-operation.enum';
import { LaiHangDoiTiemVacxin } from 'src/app/shared/enum/tiem-vacxin.enum';
import { HoanThanhKhamTiemChungTimKiemNangCao } from '../../tiem-chung.model';
import { HoanThanhKhamTiemChungDetailPopupComponent } from '../hoan-thanh-kham-tiem-chung-detail-popup/hoan-thanh-kham-tiem-chung-detail-popup.component';
import icMoreHoriz from '@iconify/icons-ic/twotone-more-horiz';
import icPrint from '@iconify/icons-ic/twotone-print';
import { PopupInBanKiemTruocTiemComponent } from '../thong-tin-tiem-chung-shared/popup-in-ban-kiem-truoc-tiem/popup-in-ban-kiem-truoc-tiem.component';
import { ApiError } from 'src/app/shared/models/api-error.model';

@Component({
  selector: 'app-hoan-thanh-kham-list-shared',
  templateUrl: './hoan-thanh-kham-list-shared.component.html',
  styleUrls: ['./hoan-thanh-kham-list-shared.component.scss']
})
export class HoanThanhKhamListSharedComponent implements OnInit {

  gridColumns: any[] = [];
  searchString: string;
  icSearch = icSearch;
  hangDoiThucHienTiem: LaiHangDoiTiemVacxin = LaiHangDoiTiemVacxin.ThucHienTiem;

  urlGetData: string = "TiemChung/GetDataForGridHoanThanhKhamSangLoc";
  urlGetTotalPage: string = "TiemChung/GetTotalPageForGridHoanThanhKhamSangLoc";
  searchCtrl = new FormControl();
  timKiemNangCaoObj: HoanThanhKhamTiemChungTimKiemNangCao = new HoanThanhKhamTiemChungTimKiemNangCao();
  strAdditionalSearchString: string = "";
  popupLoadingData: any;

  icPrint =icPrint;
  icMoreHoriz =icMoreHoriz;

  @ViewChild("gridDaKham", { static: true }) gridChild: GridComponent;
  @ViewChild("maTiepNhanTemplate", { static: true }) maTiepNhanTemplate: TemplateRef<any>;
  @ViewChild("hoTenTemplate", { static: true }) hoTenTemplate: TemplateRef<any>;
  @ViewChild("actionTemplate", { static: true }) actionTemplate: TemplateRef<any>;
  @ViewChild("thoiDiemKhamTemplate", { static: true }) thoiDiemKhamTemplate: TemplateRef<any>;
  @ViewChild("vacxinTemplate", { static: true }) vacxinTemplate: TemplateRef<any>;

  @Input() documentType: DocumentType = DocumentType.TiemChungKhamSangLoc;
  @Input() isReadOnly: boolean = false;
  @Input() loaiHangDoi: LaiHangDoiTiemVacxin = LaiHangDoiTiemVacxin.KhamSangLoc;
  constructor(
    private dialog: MatDialog, 
    private apiService: ApiService, 
    private notificationService: NotificationService,
    private route: ActivatedRoute,
    private authService: AuthService
  ) { }

  ngOnInit() {
    if(this.loaiHangDoi == this.hangDoiThucHienTiem)
    {
      this.urlGetData = "TiemChung/GetDataForGridHoanThanhThucHienTiem";
      this.urlGetTotalPage = "TiemChung/GetTotalPageForGridHoanThanhThucHienTiem";
    }

    this.timKiemNangCaoObj.LoaiHangDoi = this.loaiHangDoi;
    let now = new Date();
    let currentDate = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    this.timKiemNangCaoObj.TuNgayDenNgay.startDate = this.timKiemNangCaoObj.TuNgayDenNgay.endDate = currentDate;
    this.timKiemNangCaoObj.TuNgayDenNgay.TuNgay = this.timKiemNangCaoObj.TuNgayDenNgay.DenNgay = CommonService.formatDateTime(this.timKiemNangCaoObj.TuNgayDenNgay.startDate, "mm/dd/yyyy");
    this.gridChild.additionalSearchString = JSON.stringify(this.timKiemNangCaoObj);

    this.gridColumns = [
      { Field: "MaYeuCauTiepNhan", Title: "Mã TN", Width: 80, Sortable: false, Template: this.maTiepNhanTemplate },
      { Field: "MaBN", Title: "Mã NB", Width: 80, Sortable: false },
      { Field: "HoTen", Title: "Tên NB", Width: 120, Sortable: false, Template: this.hoTenTemplate },
      { Field: "NamSinhDisplay", Title: "Năm sinh", Width: 70, Sortable: false },
      { Field: "DiaChiDayDu", Title: "Địa chỉ", Width: 160, Sortable: false },
      { Field: "ThoiDiemKhamDisplay", Title: "Thời điểm khám", Width: 90, Sortable: false, Template: this.thoiDiemKhamTemplate },
      { Field: "BacSiKhamDisplay", Title: "Bác sĩ khám", Width: 100, Sortable: false },
      { Field: "MuiTiem", Title: "Mũi tiêm", Width: 100, Sortable: false, Template: this.vacxinTemplate , Hidden: this.loaiHangDoi != this.hangDoiThucHienTiem},
      { Field: "NoiTheoDoiSauTiem", Title: "Nơi theo dõi sau tiêm", Width: 100, Sortable: false , Hidden: this.loaiHangDoi != this.hangDoiThucHienTiem},
      { Field: "Action", Title: "", Width: 130, Template: this.actionTemplate, Hidden: this.isReadOnly },   
    ];
  }

  timeoutSearchChange: any;
  searchChanges(event) {
    var self = this;
    if ((event == null || event == "") && this.strAdditionalSearchString != "") {
      this.timKiemNangCao();
    }
  }

  onKey(event: any) {
    if (event.key == "Enter") {
      this.timKiemNangCao();
    }
  }

  clearSearch() {
    this.timKiemNangCaoObj.SearchString = null;
    this.gridChild.searchString = null;
    this.timKiemNangCao();
  }

  timKiemNangCao() {
    if (this.timKiemNangCaoObj.TuNgayDenNgay != null && this.timKiemNangCaoObj.TuNgayDenNgay.startDate != null) {
      this.timKiemNangCaoObj.TuNgayDenNgay.TuNgay = CommonService.formatDateTime(this.timKiemNangCaoObj.TuNgayDenNgay.startDate, "mm/dd/yyyy");
    }
    else {
      this.timKiemNangCaoObj.TuNgayDenNgay.TuNgay = null;
    }
    if (this.timKiemNangCaoObj.TuNgayDenNgay != null && this.timKiemNangCaoObj.TuNgayDenNgay.endDate != null) {
      this.timKiemNangCaoObj.TuNgayDenNgay.DenNgay = CommonService.formatDateTime(this.timKiemNangCaoObj.TuNgayDenNgay.endDate, "mm/dd/yyyy");
    }
    else {
      this.timKiemNangCaoObj.TuNgayDenNgay.DenNgay = null;
    }

    var queryString = JSON.stringify(this.timKiemNangCaoObj);
    this.gridChild._additionalSearchString = this.strAdditionalSearchString = queryString;
    this.gridChild.search();
  }

  xemLichSuKham(dataItem) {
    let dialogRef = this.dialog.open(HoanThanhKhamTiemChungDetailPopupComponent, {
      disableClose: false,
      width: '1500px',
      height: 'auto',
      data: {
        "DocumentType": this.documentType,
        "YeuCauKhamTiemChungId": dataItem.Id,
        "LoaiHangDoi": this.loaiHangDoi
      },
    });
    dialogRef.afterClosed().subscribe(result => {
    });
  }

  showPopupLoadingData(typeLoading: EnumTypeLoadingData = EnumTypeLoadingData.View) {
    let mess = ""; //typeLoading == EnumTypeLoadingData.View ? "Đang tải dữ liệu..." : "Đang lưu dữ liệu...";
    switch (typeLoading) {
      case EnumTypeLoadingData.View:
        mess = "Đang tải dữ liệu..."; break;
      case EnumTypeLoadingData.Update:
        mess = "Đang lưu dữ liệu..."; break;
      case EnumTypeLoadingData.Delete:
        mess = "Đang xóa dữ liệu..."; break;
      case EnumTypeLoadingData.Cancel:
        mess = "Đang hủy dữ liệu..."; break;
      default: mess = "Đang tải dữ liệu...";
    }
    this.popupLoadingData = this.dialog.open(LoadingComponent, {
      disableClose: true,
      width: '200px',
      height: '90px',
      data: { Title: mess }
    });
  }

  closePopupLoadingData() {
    if (this.popupLoadingData != undefined && this.popupLoadingData != null) {
      this.popupLoadingData.close();
    }
  }

  CapNhatKhamLaiKhamSangLoc(dataItem: any) {
    if (this.authService.hasPermission(this.documentType, SecurityOperation.Update)) {
      this.dialog.open(ConfirmComponent, {
        disableClose: false,
        width: '400px',
        data: { Title: "Xác nhận", Message: "Bạn chắc chắn muốn khám lại bênh nhân này?" }
      }).afterClosed().subscribe(result => {/* result is a string:Yes,No,No answer*/
        if (result == "Yes") {
          this.showPopupLoadingData(EnumTypeLoadingData.Update);
          var obj = {
            YeuCauKhamTiemChungId: dataItem.Id,
            PhongBenhVienId: dataItem.PhongBenhVienId
          }
          this.apiService.put<any>("TiemChung/CapNhatKhamLaiKhamSangLocTiemChung", obj).subscribe(
            resultData => {
              this.closePopupLoadingData();
              this.notificationService.showSuccess(CommonService.format(SystemMessage.ActionSuccessfully, ["Khám lại"]));
              this.timKiemNangCao();
            },
            (err: any) => {
              if (err.Message != "Validation Failed") {
                this.notificationService.showError(err.Message);
              }
              this.closePopupLoadingData();
            });
        }
      });
    }
    else {
      this.notificationService.showError(SystemMessage.UnAuthorizedMessage);
    }
  }

  CapNhatKhamLaiThucHienTiemTheoPhong(dataItem: any) {
    if (this.authService.hasPermission(this.documentType, SecurityOperation.Update)) {
      this.dialog.open(ConfirmComponent, {
        disableClose: false,
        width: '400px',
        data: { Title: "Xác nhận", Message: "Bạn chắc chắn muốn tường trình lại bênh nhân này?" }
      }).afterClosed().subscribe(result => {/* result is a string:Yes,No,No answer*/
        if (result == "Yes") {
          this.showPopupLoadingData(EnumTypeLoadingData.Update);
          var obj = {
            YeuCauKhamTiemChungId: dataItem.Id,
            PhongBenhVienId: dataItem.PhongBenhVienId
          }
          this.apiService.put<any>("TiemChung/CapNhatKhamLaiThucHienTiemTheoPhong", obj).subscribe(
            resultData => {
              this.closePopupLoadingData();
              this.notificationService.showSuccess(CommonService.format(SystemMessage.ActionSuccessfully, ["Trường trình lại"]));
              this.timKiemNangCao();
            },
            (err: any) => {
              if (err.Message != "Validation Failed") {
                this.notificationService.showError(err.Message);
              }
              this.closePopupLoadingData();
            });
        }
      });
    }
    else {
      this.notificationService.showError(SystemMessage.UnAuthorizedMessage);
    }
  }

  inPhieuKhamSangLoc(dataItem) {
    if (this.authService.hasPermission(this.documentType, SecurityOperation.Process)) {
      this.showPopupLoadingData(EnumTypeLoadingData.View);

      let inBanKiemTruocTiemChung = {
        YeuCauDichVuKyThuatKhamSangLocId: dataItem.KhamSangLocTiemChungId,
        Hosting: window.location.protocol + "//" + window.location.host
      }

      this.apiService.post<any>(`TiemChung/InBanKiemTruocTiemChungDoiVoiTreEm`, inBanKiemTruocTiemChung).subscribe((res) => {
        this.closePopupLoadingData();

        this.dialog.open(PopupInBanKiemTruocTiemComponent, {
          disableClose: true,
          width: '1200px',
          // height: "550px",
          data: res
        }).afterClosed().subscribe(() => {
        });
      }, (err: ApiError) => {
        if (err.Message != "Validation Failed") {
          this.notificationService.showError(err.Message);
        }
        this.closePopupLoadingData();
      });
    } else {
      this.notificationService.showError(SystemMessage.UnAuthorizedMessage);
    }
  }
}
