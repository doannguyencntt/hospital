import { Component, OnInit, ViewChild, TemplateRef, Input, ChangeDetectorRef } from '@angular/core';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import icDelete from '@iconify/icons-ic/twotone-delete';
import icEdit from '@iconify/icons-ic/border-color';
import { KeToaItem, DuocPhamTonKhos, ListThuocReOrder } from '../../../kham-benh.model';
import { GridComponent } from 'src/app/shared/component/grid/grid.component';
import { MatDialog } from '@angular/material';
import { ApiService } from 'src/app/core/services/api.service';
import { CommonService } from 'src/app/core/utilities/common.helper';
import { NotificationService } from 'src/app/core/services/notification.service';
import { ApiError } from 'src/app/shared/models/api-error.model';
import { SecurityOperation } from 'src/app/shared/enum/security-operation.enum';
import { ConfirmComponent } from 'src/app/shared/component/dialogs/confirm/confirm.component';
import { SystemMessage } from 'src/app/shared/configdata/system-message';
import { AuthService } from 'src/app/core/services/auth.service';
import { parseNumber } from '@progress/kendo-angular-intl';
import { ComboboxComponent } from 'src/app/shared/component/dropdowns/combobox/combobox.component';
import { LoadingComponent } from 'src/app/shared/component/dialogs/loading/loading.component';
import { SuaThuocTuVanKhamDoanPopupComponent } from '../sua-thuoc-tu-van-kham-doan-popup/sua-thuoc-tu-van-kham-doan-popup.component';
import { InThuocTuVanKhamDoanPopupComponent } from '../in-thuoc-tu-van-kham-doan-popup/in-thuoc-tu-van-kham-doan-popup.component';

@Component({
  selector: 'app-lan-kham-hien-tai-tu-van-thuoc-kham-doan',
  templateUrl: './lan-kham-hien-tai-tu-van-thuoc-kham-doan.component.html',
  styleUrls: ['./lan-kham-hien-tai-tu-van-thuoc-kham-doan.component.scss']
})
export class LanKhamHienTaiTuVanThuocKhamDoanComponent implements OnInit {

  keToaNew: KeToaItem = new KeToaItem();
  keToaEdit: KeToaItem = new KeToaItem();
  keToaDelete: KeToaItem = new KeToaItem();
  thongTinDuocPham: DuocPhamTonKhos = new DuocPhamTonKhos();
  inTuVanThuoc: ListThuocReOrder = new ListThuocReOrder();
  isSelectDuocPham: boolean = false;
  icEdit = icEdit;
  icDelete = icDelete;
  isDisabled: boolean = false;
  thoiGianDonThuocDataSource: any;
  gridToaThuocColumns: any[] = [];
  validationErrors: any;
  popupLoadingData: any = null;
  popupAddingData: any = null;
  popupDeletingData: any = null;
  @ViewChild('sangTemplate', { static: true }) sangTemplate: TemplateRef<any>;
  @ViewChild('truaTemplate', { static: true }) truaTemplate: TemplateRef<any>;
  @ViewChild('chieuTemplate', { static: true }) chieuTemplate: TemplateRef<any>;
  @ViewChild('chieuTemplate', { static: true }) toiTemplate: TemplateRef<any>;
  @ViewChild('soLuongTemplate', { static: true }) soLuongTemplate: TemplateRef<any>;
  @ViewChild('actionToaThuocTemplate', { static: true }) actionToaThuocTemplate: TemplateRef<any>;
  @ViewChild('isFocus', { static: false }) isFocus: ComboboxComponent;
  @ViewChild('gridThuoc', { static: false }) gridThuoc: GridComponent;
  @ViewChild('sttTemplate', { static: true }) sttTemplate: TemplateRef<any>;


  @Input() YeuCauTiepNhanId: number;
  @Input() YeuCauKhamBenhId: number;
  @Input() documentType: DocumentType = DocumentType.KhamBenh;
  @Input() isKhamDoanTatCa: boolean= false;
  @Input() isReadOnly: boolean = false;

  constructor(
    private dialog: MatDialog,
    private apiService: ApiService,
    private notificationService: NotificationService,
    private ref: ChangeDetectorRef,
    private authService: AuthService,
  ) { }

  ngOnInit() {

    this.gridToaThuocColumns = [
      { Field: "Action", Title: "", Width: 70, Template: this.actionToaThuocTemplate, Hidden: this.isReadOnly},
      { Field: "STT", Title: "#", Width: 45, Sortable: true, Template: this.sttTemplate },
      { Field: "Ma", Title: "Mã", Width: 45, Sortable: true, ShowTooltip: true },
      { Field: "Ten", Title: "TÊN", Width: 95, Sortable: true, ShowTooltip: true },
      { Field: "HoatChat", Title: "Hoạt chất", Width: 80, Sortable: true, ShowTooltip: true },
      { Field: "DVT", Title: "ĐVT", Width: 60, Sortable: true },
      { Field: "SangDisplay", Title: "Sáng", Width: 55, Sortable: true, Template: this.sangTemplate },
      { Field: "TruaDisplay", Title: "Trưa", Width: 55, Sortable: true, Template: this.truaTemplate },
      { Field: "ChieuDisplay", Title: "Chiều", Width: 55, Sortable: true, Template: this.chieuTemplate },
      { Field: "ToiDisplay", Title: "Tối", Width: 55, Sortable: true, Template: this.toiTemplate },
      { Field: "SoNgayDung", Title: "Số ngày", Width: 80, Sortable: true },
      { Field: "SoLuong", Title: "SL", Width: 40, Sortable: true, Template: this.soLuongTemplate },
      { Field: "TenDuongDung", Title: "Đ.Dùng", Width: 70, Sortable: true },
      { Field: "TuongTacThuoc", Title: "Tương tác thuốc", Width: 65, Sortable: true },
      { Field: "DiUngThuocDisplay", Title: "Dị ứng", Width: 65, Sortable: true },
      { Field: "GhiChu", Title: "Cách dùng", Width: 90, Sortable: true, ShowTooltip: true },
    ];
    this.getThoiGianDonThuoc();
  }

  onKey(event: any) {
    if (event.key == "Enter") {
      if (this.isSelectDuocPham != true) {
        this.themKeToa();
        this.onkeyFocus();
      }
      else {
        this.isSelectDuocPham = false;
      }
    }
  }

  onkeyFocus() {
    this.isFocus.onKeytoFocus();
  }

  openCombobox(event: any) {
    if (event) {
      this.isSelectDuocPham = true;
    }
    else {
      this.isSelectDuocPham = false;
    }
  }

  clearDuocPham() {
    this.keToaNew = new KeToaItem();
  }

  getThoiGianDonThuoc() {
    this.apiService.get<Array<string>>("KhamBenh/ThoiGianDonThuoc").subscribe(
      resultData => {
        this.thoiGianDonThuocDataSource = resultData;
      }
    )
  }

  addingPage() {
    this.popupAddingData = this.dialog.open(LoadingComponent, {
      disableClose: true,
      width: "200px",
      height: "90px",
      data: { Title: "Đang thêm dữ liệu..." },
    });
  }

  closePopupAddingData() {
    if (this.popupAddingData != undefined && this.popupAddingData != null) {
      this.popupAddingData.close();
    }
  }

  deletingPage() {
    this.popupDeletingData = this.dialog.open(LoadingComponent, {
      disableClose: true,
      width: "200px",
      height: "90px",
      data: { Title: "Đang xóa dữ liệu..." },
    });
  }

  closePopupDeletingData() {
    if (this.popupDeletingData != undefined && this.popupDeletingData != null) {
      this.popupDeletingData.close();
    }
  }

  chonDuoc(duocPhamBenhVien: any) {
    if (duocPhamBenhVien != undefined && duocPhamBenhVien != null) {
      this.keToaNew.LaDuocPhamBenhVien = duocPhamBenhVien.LaDuocPhamBenhVien;
      let objThongTinThuoc = {
        YeuCauTiepNhanId: this.YeuCauTiepNhanId,
        DuocPhamId: duocPhamBenhVien.KeyId,
      };
      this.apiService.post<any>("KhamBenh/InfoTonKhoDuocPhamTuVan", objThongTinThuoc).subscribe(
        resultData => {
          if (resultData != null) {
            this.thongTinDuocPham = resultData;
          }
        });
    } else {
      this.clearDuocPham();
    }
  }

  themKeToa() {
    var self = this;
    self.validationErrors = null;
    self.ref.detectChanges();
    if (self.thongTinDuocPham.FlagThuocDaKe == true) {
      self.dialog.open(ConfirmComponent, {
        disableClose: false,
        width: '500px',
        data: { Title: "Cảnh báo", Message: "Thuốc này đã kê trong đơn thuốc, bạn có muốn thêm thuốc này không ?" }
      }).afterClosed().subscribe(result => {
        if (result == "Yes") {
          self.themThuocTuVan();
        }
        else {
          self.clearDuocPham();
        }
      });
    } else {
      self.themThuocTuVan();
    }
  }

  dangXuLy:boolean=false;
  themThuocTuVan() {
    var self = this;
    self.onkeyFocus();
    self.keToaNew.YeuCauTiepNhanId = self.YeuCauTiepNhanId;
    self.keToaNew.YeuCauKhamBenhId = self.YeuCauKhamBenhId;
    self.keToaNew.IsKhamDoanTatCa = self.isKhamDoanTatCa;
    if (self.authService.hasPermission(self.documentType, SecurityOperation.Add)) {
      if(this.dangXuLy)
          return;
      this.dangXuLy=true;
      self.addingPage();
      self.apiService.post<any>("KhamBenh/ThemDonThuocTuVanSucKhoe", self.keToaNew).subscribe(
        () => {
          self.closePopupAddingData();
          let mess = CommonService.format(SystemMessage.ActionSuccessfully, ["Thêm"]);
          self.notificationService.showSuccess(mess);
          self.gridThuoc.search();
          self.clearDuocPham();
          self.dangXuLy=false;
        },
        (err: ApiError) => {
          self.validationErrors = err.ValidationErrors;
          if (err.Message != "Validation Failed") {
            self.notificationService.showError(err.Message);
          }
          self.closePopupAddingData();
          self.dangXuLy=false;
        });
    } else {
      self.notificationService.showError(SystemMessage.UnAuthorizedMessage);
    }
  }

  xoaKeToa(item: KeToaItem) {
    var self = this;
    self.keToaDelete = item;
    self.keToaDelete.YeuCauKhamBenhId = self.YeuCauKhamBenhId;
    // self.keToaNew.IsKhamDoanTatCa = self.isKhamDoanTatCa;
    self.keToaDelete.IsKhamDoanTatCa = self.isKhamDoanTatCa;
    let comfirm = "xóa";
    if (self.authService.hasPermission(self.documentType, SecurityOperation.Delete)) {
      self.dialog.open(ConfirmComponent, {
        disableClose: false,
        width: '400px',
        data: { Title: "Xác nhận", Message: CommonService.format(SystemMessage.MessLockTemplate, [comfirm, "thuốc"]) }
      }).afterClosed().subscribe(result => {
        if (result == "Yes") {
          self.deletingPage();
          self.apiService.post("KhamBenh/XoaDonThuocTuVanSucKhoe", self.keToaDelete).subscribe(
            () => {
              self.closePopupDeletingData();
              self.notificationService.showSuccess(CommonService.format(SystemMessage.ActionSuccessfully, ["Xóa"]));
              self.keToaNew = new KeToaItem();
              self.gridThuoc.search();
            },
            (err: ApiError) => {
              self.validationErrors = err.ValidationErrors;
              if (err.Message != "Validation Failed") {
                self.notificationService.showError(err.Message);
              }
              self.closePopupDeletingData();
            });
        }
      });
    }
    else {
      self.notificationService.showError(SystemMessage.UnAuthorizedMessage);
    }
  }

  suaKeToa(dataItem: any) {
    var self = this;
    self.keToaEdit = dataItem;
    self.keToaEdit.DonThuocChiTietId = dataItem.Id;
    self.keToaEdit.YeuCauKhamBenhId = self.YeuCauKhamBenhId;
    self.keToaEdit.YeuCauTiepNhanId = self.YeuCauTiepNhanId;
    self.keToaEdit.IsKhamDoanTatCa = self.isKhamDoanTatCa;
    let keToaEditobj = Object.assign({}, dataItem);
    self.validationErrors = null;
    self.ref.detectChanges();
    if (self.authService.hasPermission(self.documentType, SecurityOperation.Update)) {
      self.dialog.open(SuaThuocTuVanKhamDoanPopupComponent, {
        disableClose: false,
        width: '1500px',
        data: keToaEditobj,
      }).afterClosed().subscribe(() => {
        self.gridThuoc.search();
      });
    } else {
      self.notificationService.showError(SystemMessage.UnAuthorizedMessage);
    }
  }

  SoLuongChange() {
    if (this.keToaNew.SoLuong != null && this.keToaNew.LieuDung != null && this.keToaNew.LieuDung != "") {
      let lieuDung = parseNumber(CommonService.FormatStringFractionToFloat(this.keToaNew.LieuDung));
      this.keToaNew.SoNgayDung = Math.ceil(this.keToaNew.SoLuong / lieuDung);
      this.keToaNew.SangDisplay = null;
      this.keToaNew.ThoiGianDungSang = null;
      this.keToaNew.TruaDisplay = null;
      this.keToaNew.ThoiGianDungTrua = null;
      this.keToaNew.ChieuDisplay = null;
      this.keToaNew.ThoiGianDungChieu = null;
      this.keToaNew.ToiDisplay = null;
      this.keToaNew.ThoiGianDungToi = null;
    }
    else if (this.keToaNew.SoLuong == null) {
      this.keToaNew.LieuDung = null;
      this.keToaNew.SoNgayDung = null;
      this.keToaNew.SangDisplay = null;
      this.keToaNew.ThoiGianDungSang = null;
      this.keToaNew.TruaDisplay = null;
      this.keToaNew.ThoiGianDungTrua = null;
      this.keToaNew.ChieuDisplay = null;
      this.keToaNew.ThoiGianDungChieu = null;
      this.keToaNew.ToiDisplay = null;
      this.keToaNew.ThoiGianDungToi = null;
    }
  }

  LieuDungChange() {
    if (this.keToaNew.SoLuong != null && this.keToaNew.LieuDung != null && this.keToaNew.LieuDung != "") {
      let lieuDung = parseNumber(CommonService.FormatStringFractionToFloat(this.keToaNew.LieuDung));
      if (lieuDung > this.keToaNew.SoLuong) {
        this.keToaNew.SoLuong = lieuDung;
      }
      this.keToaNew.SoNgayDung = Math.ceil(this.keToaNew.SoLuong / lieuDung);
      this.keToaNew.SangDisplay = null;
      this.keToaNew.ThoiGianDungSang = null;
      this.keToaNew.TruaDisplay = null;
      this.keToaNew.ThoiGianDungTrua = null;
      this.keToaNew.ChieuDisplay = null;
      this.keToaNew.ThoiGianDungChieu = null;
      this.keToaNew.ToiDisplay = null;
      this.keToaNew.ThoiGianDungToi = null;
    } else if (this.keToaNew.SoLuong == null && this.keToaNew.SoNgayDung != null && (this.keToaNew.LieuDung != null && this.keToaNew.LieuDung != "")) {
      let lieuDung = parseNumber(CommonService.FormatStringFractionToFloat(this.keToaNew.LieuDung));
      this.keToaNew.SoLuong = this.keToaNew.SoNgayDung * lieuDung;
    } else if (this.keToaNew.SoLuong != null && (this.keToaNew.LieuDung == null || this.keToaNew.LieuDung == "")) {
      this.keToaNew.SoNgayDung = null;
    }
  }

  SoNgayDungChange() {
    if (this.keToaNew.SoLuong != null && this.keToaNew.SoNgayDung != null && this.keToaNew.SoNgayDung > 0) {
      let lieuDung = Math.ceil(this.keToaNew.SoLuong / this.keToaNew.SoNgayDung);
      this.keToaNew.LieuDung = lieuDung.toString();
      this.keToaNew.SangDisplay = null;
      this.keToaNew.ThoiGianDungSang = null;
      this.keToaNew.TruaDisplay = null;
      this.keToaNew.ThoiGianDungTrua = null;
      this.keToaNew.ChieuDisplay = null;
      this.keToaNew.ThoiGianDungChieu = null;
      this.keToaNew.ToiDisplay = null;
      this.keToaNew.ThoiGianDungToi = null;
    } else if (this.keToaNew.SoLuong == null && this.keToaNew.SoNgayDung != null && (this.keToaNew.LieuDung != null && this.keToaNew.LieuDung != "")) {
      let lieuDung = parseNumber(CommonService.FormatStringFractionToFloat(this.keToaNew.LieuDung));
      this.keToaNew.SoLuong = this.keToaNew.SoNgayDung * lieuDung;
    } else if (this.keToaNew.SoLuong != null && this.keToaNew.SoNgayDung == null) {
      this.keToaNew.LieuDung = null;
    }
  }

  convertInt() {
    if (this.keToaNew.SoNgayDung != null)
      this.keToaNew.SoNgayDung = parseInt(this.keToaNew.SoNgayDung.toString());
  }

  loadingPage() {
    this.popupLoadingData = this.dialog.open(LoadingComponent, {
      disableClose: true,
      width: "200px",
      height: "90px",
      data: { Title: "Đang tải dữ liệu..." },
    });
  }

  closePopupLoadingData() {
    if (this.popupLoadingData != undefined && this.popupLoadingData != null) {
      this.popupLoadingData.close();
    }
  }
  
  onDataBound(event: any) {
    if (event != undefined && event != null) {
      if (event.Data.length > 0) {
        this.isDisabled = true;
      } else {
        this.isDisabled = false;
      }
    }
  }

  inPhieuTuVanThuoc() {
    var self = this;
    self.loadingPage();
    self.inTuVanThuoc.YeuCauKhamBenhId = self.YeuCauKhamBenhId;
    self.inTuVanThuoc.YeuCauTiepNhanId = self.YeuCauTiepNhanId;
    self.inTuVanThuoc.HostingName = window.location.protocol + "//" + window.location.host;
    self.apiService.post<any>("KhamBenh/InTuVanThuoc", self.inTuVanThuoc).subscribe(
      resData => {
        if (resData != undefined && resData != null) {
          self.closePopupLoadingData();
          self.dialog.open(InThuocTuVanKhamDoanPopupComponent, {
            disableClose: false,
            width: '1200px',
            data: resData,
          }
          ).afterClosed().subscribe(() => {
          });
        }
      },
      (err: ApiError) => {
        self.validationErrors = err.ValidationErrors;
        if (err.Message != "Validation Failed") {
          self.notificationService.showError(err.Message);
        }
        self.closePopupLoadingData();
      }
    );
  }


}
