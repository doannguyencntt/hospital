import { ChangeDetectorRef, Component, Input, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { ChiTietDieuTriNoiTruViewModel, InThuocRaVienVo, NoiTruKeToaItem } from '../../../dieu-tri-noi-tru.model';
import icDelete from '@iconify/icons-ic/twotone-delete';
import icEdit from '@iconify/icons-ic/border-color';
import { MatDialog } from '@angular/material';
import { ApiService } from 'src/app/core/services/api.service';
import { NotificationService } from 'src/app/core/services/notification.service';
import { AuthService } from 'src/app/core/services/auth.service';
import { DuocPhamTonKhos, KeToaItem } from 'src/app/modules/main/kham-benh/kham-benh.model';
import { ComboboxComponent } from 'src/app/shared/component/dropdowns/combobox/combobox.component';
import { ConfirmComponent } from 'src/app/shared/component/dialogs/confirm/confirm.component';
import { LoadingComponent } from 'src/app/shared/component/dialogs/loading/loading.component';
import { SecurityOperation } from 'src/app/shared/enum/security-operation.enum';
import { CommonService } from 'src/app/core/utilities/common.helper';
import { SystemMessage } from 'src/app/shared/configdata/system-message';
import { ApiError } from 'src/app/shared/models/api-error.model';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import { GridComponent } from 'src/app/shared/component/grid/grid.component';
import { LookupQueryInfo } from 'src/app/shared/models/common.model';
import { GroupDescriptor, SortDescriptor } from '@progress/kendo-data-query';
import { parseNumber } from '@progress/kendo-angular-intl';
import { SuaThuocRaVienComponent } from '../sua-thuoc-ra-vien/sua-thuoc-ra-vien.component';
import { ThuocRaVienPopupComponent } from '../thuoc-ra-vien-popup/thuoc-ra-vien-popup.component';
import { PhieuInCongKhaiThuocPopupComponent } from '../../phieu-dieu-tri/phieu-in-cong-khai-thuoc-popup/phieu-in-cong-khai-thuoc-popup.component';

@Component({
  selector: 'app-thuoc-ra-vien-list',
  templateUrl: './thuoc-ra-vien-list.component.html',
  styleUrls: ['./thuoc-ra-vien-list.component.scss']
})
export class ThuocRaVienListComponent implements OnInit {
  thongTinDuocPham: DuocPhamTonKhos = new DuocPhamTonKhos();
  keToaNew: NoiTruKeToaItem = new NoiTruKeToaItem();
  keToaEdit: NoiTruKeToaItem = new NoiTruKeToaItem();
  keToaDelete: NoiTruKeToaItem = new NoiTruKeToaItem();
  inThuocRaVienVo: InThuocRaVienVo = new InThuocRaVienVo();
  popupAddingData: any = null;
  popupDeletingData: any = null;
  loaiKhoThuoc: number = 0;
  khoThuocDaChon: number = 0;
  queryInfo: LookupQueryInfo = new LookupQueryInfo();
  documentType: DocumentType = DocumentType.DanhSachDieuTriNoiTru;
  @ViewChild('gridToaThuocNoiTru', { static: true }) gridToaThuocNoiTru: GridComponent;

  @ViewChild('actionToaThuocTemplate', { static: true }) actionToaThuocTemplate: TemplateRef<any>;
  @ViewChild('nhomGroupHeaderTemplate', { static: true }) nhomGroupHeaderTemplate: TemplateRef<any>;
  @ViewChild('sangTemplate', { static: true }) sangTemplate: TemplateRef<any>;
  @ViewChild('truaTemplate', { static: true }) truaTemplate: TemplateRef<any>;
  @ViewChild('chieuTemplate', { static: true }) chieuTemplate: TemplateRef<any>;
  @ViewChild('toiTemplate', { static: true }) toiTemplate: TemplateRef<any>;
  @ViewChild('soLuongTemplate', { static: true }) soLuongTemplate: TemplateRef<any>;
  @ViewChild('donGiaFooterTemplate', { static: true }) donGiaFooterTemplate: TemplateRef<any>;
  @ViewChild('donGiaGroupFooterTemplate', { static: true }) donGiaGroupFooterTemplate: TemplateRef<any>;
  @ViewChild('donGiaTemplate', { static: true }) donGiaTemplate: TemplateRef<any>;
  @ViewChild('thanhTienTemplate', { static: true }) thanhTienTemplate: TemplateRef<any>;
  @ViewChild('thanhTienFooterTemplate', { static: true }) thanhTienFooterTemplate: TemplateRef<any>;
  @ViewChild('thanhTienGroupFooterTemplate', { static: true }) thanhTienGroupFooterTemplate: TemplateRef<any>;
  @ViewChild('isFocus', { static: false }) isFocus: ComboboxComponent;
  @ViewChild('checkBoxInTemplate', { static: true }) checkBoxInTemplate: TemplateRef<any>;
  @ViewChild('checkBoxHeaderTemplate', { static: true }) checkBoxHeaderTemplate: TemplateRef<any>;
  groupsChild: GroupDescriptor[] = [{ field: 'Nhom', aggregates: [{ field: 'ThanhTien', aggregate: 'sum' }] }];

  isSelectDuocPham: boolean = false;
  icDelete = icDelete;
  icEdit = icEdit;
  thoiGianDonThuocDataSource: any;
  dataToSumThanhTien: any[] = [];
  coHienThiLoiDan: boolean = false;
  gridToaThuocColumns: any[] = [];
  urlGetDataGridToaThuoc: string = "DieuTriNoiTru/GetDataForGridDanhSachNoiTruDonThuoc";
  urlGetTotalPageGridToaThuoc: string = "DieuTriNoiTru/GetTotalPageForGridDanhSachNoiTruDonThuoc";
  validationErrors: any;
  public totalThanhTien(field: any) {
    switch (field) {
      case 'ThanhTien':
        return this.dataToSumThanhTien.reduce((sum: any, item: { ThanhTien: any; }) => sum + item.ThanhTien, 0);
    }
  };

  @Input() dieuTriNoiTruModel: ChiTietDieuTriNoiTruViewModel;
  constructor(
    private dialog: MatDialog,
    private apiService: ApiService,
    private notificationService: NotificationService,
    private ref: ChangeDetectorRef,
    private authService: AuthService,
  ) { }

  ngOnInit() {
    this.getThoiGianDonThuoc();
    this.chonKhoThuocBanDauTheoBHYT();
    this.inThuocRaVienVo.YeuCauTiepNhanId = this.dieuTriNoiTruModel.Id;
    this.keToaNew.KhuVuc = 3;
    this.gridToaThuocColumns = [
      { Field: 'CheckBox', Title: '', Width: 50, Sortable: false, Template: this.checkBoxInTemplate, TemplateHeader: this.checkBoxHeaderTemplate },
      { Field: "Action", Title: "", Width: 70, Template: this.actionToaThuocTemplate, },
      { Field: "STT", Title: "#", Width: 45, Sortable: true },
      { Field: "Ma", Title: "Mã", Width: 45, Sortable: false, ShowTooltip: true },
      { Field: "Ten", Title: "TÊN", Width: 95, Sortable: false, ShowTooltip: true },
      { Field: "HoatChat", Title: "Hoạt chất", Width: 80, Sortable: false, ShowTooltip: true },
      { Field: "DVT", Title: "ĐVT", Width: 60, Sortable: false },
      // { Field: "Nhom", Title: "Nhóm", Width: 100, Sortable: true, Hidden: true, TemplateGroupHeader: this.nhomGroupHeaderTemplate },
      { Field: "Nhom", Title: "Loại thuốc", Width: 60, Sortable: false, ShowTooltip: true },
      { Field: "SangDisplay", Title: "Sáng", Width: 55, Sortable: false, Template: this.sangTemplate },
      { Field: "TruaDisplay", Title: "Trưa", Width: 55, Sortable: false, Template: this.truaTemplate },
      { Field: "ChieuDisplay", Title: "Chiều", Width: 55, Sortable: false, Template: this.chieuTemplate },
      { Field: "ToiDisplay", Title: "Tối", Width: 55, Sortable: false, Template: this.toiTemplate },
      { Field: "SoNgayDung", Title: "Số ngày", Width: 80, Sortable: false, },
      { Field: "SoLuong", Title: "SL", Width: 40, Sortable: false, Template: this.soLuongTemplate },
      { Field: "TenDuongDung", Title: "Đ.Dùng", Width: 70, Sortable: false },
      { Field: "DonGia", Title: "Đơn giá", Width: 90, Sortable: false, TemplateFooter: this.donGiaFooterTemplate, Template: this.donGiaTemplate, TemplateGroupFooter: this.donGiaGroupFooterTemplate },
      { Field: "ThanhTien", Title: "T.Tiền", Width: 80, Sortable: false, Template: this.thanhTienTemplate, TemplateFooter: this.thanhTienFooterTemplate, TemplateGroupFooter: this.thanhTienGroupFooterTemplate },
      { Field: "TuongTacThuoc", Title: "Tương tác thuốc", Width: 65, Sortable: false },
      { Field: "DiUngThuocDisplay", Title: "Dị ứng", Width: 65, Sortable: false },
      { Field: "GhiChu", Title: "Cách dùng", Width: 90, Sortable: false, ShowTooltip: true },
    ];

  }

  chonKhoThuocBanDauTheoBHYT() {
    this.queryInfo = new LookupQueryInfo();
    let coBHYT = this.dieuTriNoiTruModel.CoBHYT;
    if (coBHYT == true) {
      this.keToaNew.KhoThuoc = 1;
      this.loaiKhoThuoc = 1;
      let loaiKhoThuocBHYT = "1";
      this.queryInfo.ParameterDependencies = loaiKhoThuocBHYT;

    }
    if (coBHYT == false || coBHYT == null) {
      this.keToaNew.KhoThuoc = 2;
      this.keToaNew.KhoThuocKhongBHYT = 3;
      this.loaiKhoThuoc = 2;
      let loaiKhoThuocKhongBHYT = "2";
      this.queryInfo.ParameterDependencies = loaiKhoThuocKhongBHYT;

    }
  }

  chonKhoThuoc(event: any) {
    if (event != undefined && event != null) {
      if (event == 1) {
        this.loaiKhoThuoc = 1;
        this.queryInfo = new LookupQueryInfo();
        let loaiKhoThuoc1 = "1";
        this.queryInfo.ParameterDependencies = loaiKhoThuoc1;
        this.keToaNew.DuocPhamId = null;
        this.keToaNew.KhoThuocKhongBHYT = null;
        this.thongTinDuocPham = new DuocPhamTonKhos();

        var ketoanew = this.keToaNew;
        ketoanew.LieuDung = null;
        ketoanew.SoNgayDung = null;
        ketoanew.SangDisplay = null;
        ketoanew.TruaDisplay = null;
        ketoanew.ChieuDisplay = null;
        ketoanew.ToiDisplay = null;
        ketoanew.SoLuong = null;
        ketoanew.GhiChu = null;
        ketoanew.ThoiGianDungSang = null;
        ketoanew.ThoiGianDungTrua = null;
        ketoanew.ThoiGianDungChieu = null;
        ketoanew.ThoiGianDungToi = null;
      }
      else if (event == 3) {
        this.queryInfo = new LookupQueryInfo();
        let loaiKhoThuoc2 = "2";
        this.queryInfo.ParameterDependencies = loaiKhoThuoc2;
        this.loaiKhoThuoc = 2;
        this.khoThuocDaChon = 2;
        this.keToaNew.DuocPhamId = null;
        this.thongTinDuocPham = new DuocPhamTonKhos();

        var ketoanew = this.keToaNew;
        ketoanew.LieuDung = null;
        ketoanew.SoNgayDung = null;
        ketoanew.SangDisplay = null;
        ketoanew.TruaDisplay = null;
        ketoanew.ChieuDisplay = null;
        ketoanew.ToiDisplay = null;
        ketoanew.SoLuong = null;
        ketoanew.GhiChu = null;
        ketoanew.ThoiGianDungSang = null;
        ketoanew.ThoiGianDungTrua = null;
        ketoanew.ThoiGianDungChieu = null;
        ketoanew.ThoiGianDungToi = null;
      }
      else if (event == 4) {
        this.loaiKhoThuoc = 3;
        this.queryInfo = new LookupQueryInfo();
        let loaiKhoThuoc3 = "3";
        this.queryInfo.ParameterDependencies = loaiKhoThuoc3;
        this.keToaNew.DuocPhamId = null;
        this.khoThuocDaChon = 4;
        this.thongTinDuocPham = new DuocPhamTonKhos();

        var ketoanew = this.keToaNew;
        ketoanew.LieuDung = null;
        ketoanew.SoNgayDung = null;
        ketoanew.SangDisplay = null;
        ketoanew.TruaDisplay = null;
        ketoanew.ChieuDisplay = null;
        ketoanew.ToiDisplay = null;
        ketoanew.SoLuong = null;
        ketoanew.GhiChu = null;
        ketoanew.ThoiGianDungSang = null;
        ketoanew.ThoiGianDungTrua = null;
        ketoanew.ThoiGianDungChieu = null;
        ketoanew.ThoiGianDungToi = null;
      }
      else {
        this.loaiKhoThuoc = 2;
        this.queryInfo = new LookupQueryInfo();
        let loaiKhoThuoc2 = "2";
        this.queryInfo.ParameterDependencies = loaiKhoThuoc2;
        this.keToaNew.KhoThuocKhongBHYT = 3;
        this.khoThuocDaChon = 3;
        this.keToaNew.DuocPhamId = null;
        this.thongTinDuocPham = new DuocPhamTonKhos();

        var ketoanew = this.keToaNew;
        ketoanew.LieuDung = null;
        ketoanew.SoNgayDung = null;
        ketoanew.SangDisplay = null;
        ketoanew.TruaDisplay = null;
        ketoanew.ChieuDisplay = null;
        ketoanew.ToiDisplay = null;
        ketoanew.SoLuong = null;
        ketoanew.GhiChu = null;
        ketoanew.ThoiGianDungSang = null;
        ketoanew.ThoiGianDungTrua = null;
        ketoanew.ThoiGianDungChieu = null;
        ketoanew.ThoiGianDungToi = null;
      }
    }
  }

  openCombobox(event: any) {
    if (event) {
      this.isSelectDuocPham = true;
    }
    else {
      this.isSelectDuocPham = false;
    }
  }

  onDataBoundChild(data: any) {
    if (data != undefined && data.Data.length > 0) {
      this.dataToSumThanhTien = data.Data;
      this.coHienThiLoiDan = true;
      this.inThuocRaVienVo.GhiChu = data.Data[0].GhiChuDonThuoc;
    } else {
      this.dataToSumThanhTien = [];
      this.inThuocRaVienVo.GhiChu = null;
      this.coHienThiLoiDan = false;
    }
    // this.dataToIsDisabledButtonPrint = event.Data;

  }
  getThoiGianDonThuoc() {
    this.apiService.get<Array<string>>("KhamBenh/ThoiGianDonThuoc").subscribe(
      resultData => {
        this.thoiGianDonThuocDataSource = resultData;
      }
    )
  }
  onkeyFocus() {
    this.isFocus.onKeytoFocus();
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

  themKeToa() {
    var self = this;
    self.checkAll = true;
    self.keToaNew.LoaiKhoThuoc = self.loaiKhoThuoc;
    self.keToaNew.YeuCauTiepNhanId = self.dieuTriNoiTruModel.Id;
    if (self.thongTinDuocPham.FlagDiUng == true) {
      self.keToaNew.TuongTacThuoc = self.thongTinDuocPham.TuongTacThuoc;
    }

    self.isSelectDuocPham = true;
    self.validationErrors = null;
    self.ref.detectChanges();
    if (self.thongTinDuocPham.FlagThuocDaKe == true) {
      self.dialog.open(ConfirmComponent, {
        disableClose: false,
        width: '500px',
        data: { Title: "Cảnh báo", Message: "Thuốc này đã kê trong đơn thuốc, bạn có muốn thêm thuốc này không ?" }
      }).afterClosed().subscribe(result => {
        if (result == "Yes") {
          self.themKeToaDuocPham();
          self.keToaNew.DiUngThuocDisplay = self.thongTinDuocPham.DiUngThuoc;
          self.keToaNew.TuongTacThuoc = self.thongTinDuocPham.TuongTacThuoc;
        }
        else {
          self.keToaNew.DuocPhamId = null;
          self.keToaNew.SoLuong = null;
          self.thongTinDuocPham = new DuocPhamTonKhos();
        }
      }
      );
    } else {
      //this.thongTinDuocPham = resultData;
      self.isSelectDuocPham = false;
      self.themKeToaDuocPham();
      self.xoaCacFieldKeToaNew();
      self.thongTinDuocPham = new DuocPhamTonKhos();
      self.keToaNew.DiUngThuocDisplay = self.thongTinDuocPham.DiUngThuoc;
      self.keToaNew.TuongTacThuoc = self.thongTinDuocPham.TuongTacThuoc;
    }
    self.onkeyFocus();
  }

  xoaKeToa(item: NoiTruKeToaItem) {
    var self = this;
    self.checkAll = true;
    self.keToaDelete = item;
    let comfirm = "xóa";
    if (self.authService.hasPermission(self.documentType, SecurityOperation.Delete)) {
      self.dialog.open(ConfirmComponent, {
        disableClose: false,
        width: '400px',
        data: { Title: "Xác nhận", Message: CommonService.format(SystemMessage.MessLockTemplate, [comfirm, "thuốc"]) }
      }).afterClosed().subscribe(result => {
        if (result == "Yes") {
          self.deletingPage();
          self.apiService.post("DieuTriNoiTru/XoaNoiTruDonThuocChiTiet", self.keToaDelete).subscribe(
            () => {
              self.closePopupDeletingData();
              self.notificationService.showSuccess(CommonService.format(SystemMessage.ActionSuccessfully, ["Xóa"]));
              // self.keToaNew = new NoiTruKeToaItem();
              self.xoaCacFieldKeToaNew();
              self.gridToaThuocNoiTru.search();
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

  suaKeToa(item: NoiTruKeToaItem) {
    // console.log("this Edit: ", item);
    var self = this;
    self.checkAll = true;
    self.keToaEdit = item;
    self.keToaEdit.DonThuocChiTietId = item.Id;
    self.keToaEdit.LoaiDonThuoc = item.LoaiDonThuoc;
    let keToaEditobj = Object.assign({}, item);
    self.validationErrors = null;
    self.ref.detectChanges();
    if (self.authService.hasPermission(self.documentType, SecurityOperation.Update)) {
      self.dialog.open(SuaThuocRaVienComponent, {
        disableClose: false,
        width: '1500px',
        data: keToaEditobj,
      }).afterClosed().subscribe(result => {
        if (result != undefined && result.Status == "CapNhat") {
          let mess = CommonService.format(SystemMessage.ActionSuccessfully, ["Chỉnh sửa"]);
          if (result.MucTranChiPhi == "NotOK") {
            mess += "Toa thuốc hiện tại đang vượt mức trần chi phí kê toa.";
            self.notificationService.showWarning(mess);
          } else {
            self.notificationService.showSuccess(mess);
          }
          self.gridToaThuocNoiTru.search();
        }
      });
    } else {
      self.notificationService.showError(SystemMessage.UnAuthorizedMessage);
    }
  }

  xoaCacFieldKeToaNew() {
    this.keToaNew.DuocPhamId = null;
    this.keToaNew.SoLuong = null;
    this.keToaNew.LieuDung = null;
    this.keToaNew.SangDisplay = null;
    this.keToaNew.TruaDisplay = null;
    this.keToaNew.ChieuDisplay = null;
    this.keToaNew.ToiDisplay = null;
    this.keToaNew.ThoiGianDungSang = null;
    this.keToaNew.ThoiGianDungTrua = null;
    this.keToaNew.ThoiGianDungChieu = null;
    this.keToaNew.ThoiGianDungToi = null;
    this.keToaNew.SoNgayDung = null;
    this.keToaNew.GhiChu = null;
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

  dangXuLy:boolean=false;
  themKeToaDuocPham() {
    var self = this;
    self.validationErrors = null;
    self.ref.detectChanges();
    if (self.authService.hasPermission(self.documentType, SecurityOperation.Add)) {
      if(this.dangXuLy)
          return;
      this.dangXuLy=true;
      self.addingPage();
      self.apiService.post<any>("DieuTriNoiTru/ThemNoiTruDonThuocChiTiet", self.keToaNew).subscribe(
        (res) => {
          self.closePopupAddingData();
          let mess = CommonService.format(SystemMessage.ActionSuccessfully, ["Thêm"]);
          if (res == "NotOK") {
            mess += "Toa thuốc hiện tại đang vượt mức trần chi phí kê toa.";
            self.notificationService.showWarning(mess);
          } else {
            self.notificationService.showSuccess(mess);
          }

          // self.keToaNew.GhiChuDonThuoc = self.loiDanDonThuoc;
          self.gridToaThuocNoiTru.search();
          self.xoaCacFieldKeToaNew();
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
  clearDuocPham() {
    this.validationErrors = [];
    this.thongTinDuocPham = new DuocPhamTonKhos();
    this.keToaNew.DuocPhamId = null;
    this.keToaNew.SoLanDungTrongNgayString = null;
    this.keToaNew.SoLuong = null;
    this.keToaNew.DungSang = null;
    this.keToaNew.DungTrua = null;
    this.keToaNew.DungChieu = null;
    this.keToaNew.DungToi = null;
    this.keToaNew.ThoiGianDungSang = null;
    this.keToaNew.ThoiGianDungTrua = null;
    this.keToaNew.ThoiGianDungChieu = null;
    this.keToaNew.ThoiGianDungToi = null;
    this.keToaNew.GhiChu = null;
  }

  chonDuoc(event: any) {
    if (event != undefined && event != null) {
      let duocPhamHoacVatTuId = event.KeyId;
      let loaiDuocPham = 0;
      if (this.keToaNew.KhoThuoc == 1) { // Loại BHYT
        loaiDuocPham = this.keToaNew.KhoThuoc; // Thuốc BV
      }
      if (this.keToaNew.KhoThuoc == 2) {  // Loại ko BHYT
        if (this.keToaNew.KhuVuc == 3) { // Thuốc BV
          loaiDuocPham = 2
        }
        if (this.keToaNew.KhuVuc == 4) {// Thuốc ngoài BV
          loaiDuocPham = 3
        }
      }
      let objThongTinThuoc = {
        YeuCauTiepNhanId: this.dieuTriNoiTruModel.Id,
        DuocPhamId: duocPhamHoacVatTuId,
        LoaiDuocPham: loaiDuocPham
      };
      this.thongTinDuocPham = new DuocPhamTonKhos();
      this.apiService.post<any>("DieuTriNoiTru/GetNoiTruDuocPhamInfoById", objThongTinThuoc).subscribe(
        resultData => {
          if (resultData != null) {
            this.thongTinDuocPham = resultData;
          }
        });

    }
    else {
      this.clearDuocPham();
      this.thongTinDuocPham = new DuocPhamTonKhos();
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

      // this.apiService.post<any>("KhamBenh/FormatNumber?inputNumber=" + lieuDung).subscribe(
      //   resultData => {
      //     if (resultData != null) {
      //       this.keToaNew.LieuDung = resultData;
      //     }
      //   })
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

  //dùng sáng, trưa, chiều, tối
  nhapDungCacBuoiTrongNgayThem(event: any, buoi: any) {
    switch (buoi) {
      case "Sang":
        if ((event == undefined && this.keToaNew.TruaDisplay == undefined && this.keToaNew.ChieuDisplay == undefined && this.keToaNew.ToiDisplay == undefined)
          || (event == "" && this.keToaNew.TruaDisplay == "" && this.keToaNew.ChieuDisplay == "" && this.keToaNew.ToiDisplay == "")
          || (event == "" && this.keToaNew.TruaDisplay == "" && this.keToaNew.ChieuDisplay == "" && this.keToaNew.ToiDisplay == null)
          || (event == "" && this.keToaNew.TruaDisplay == "" && this.keToaNew.ChieuDisplay == null && this.keToaNew.ToiDisplay == null)
          || (event == "" && this.keToaNew.TruaDisplay == null && this.keToaNew.ChieuDisplay == null && this.keToaNew.ToiDisplay == null)
        ) {
          this.keToaNew.SoNgayDung = this.TongSoNgaySuDung(this.keToaNew.SoLuong, event, this.keToaNew.TruaDisplay, this.keToaNew.ChieuDisplay, this.keToaNew.ToiDisplay);
          return null;
        }
        else {
          this.keToaNew.SoNgayDung = this.TongSoNgaySuDung(this.keToaNew.SoLuong, event, this.keToaNew.TruaDisplay, this.keToaNew.ChieuDisplay, this.keToaNew.ToiDisplay);
          return null;

        }
      case "Trua":
        if (
          (event == undefined && this.keToaNew.SangDisplay == undefined && this.keToaNew.ChieuDisplay == undefined && this.keToaNew.ToiDisplay == undefined)
          || (event == "" && this.keToaNew.SangDisplay == "" && this.keToaNew.ChieuDisplay == "" && this.keToaNew.ToiDisplay == "")
          || (event == "" && this.keToaNew.SangDisplay == "" && this.keToaNew.ChieuDisplay == "" && this.keToaNew.ToiDisplay == null)
          || (event == "" && this.keToaNew.SangDisplay == "" && this.keToaNew.ChieuDisplay == null && this.keToaNew.ToiDisplay == null)
          || (event == "" && this.keToaNew.SangDisplay == null && this.keToaNew.ChieuDisplay == null && this.keToaNew.ToiDisplay == null)
        ) {
          this.keToaNew.SoNgayDung = this.TongSoNgaySuDung(this.keToaNew.SoLuong, this.keToaNew.SangDisplay, event, this.keToaNew.ChieuDisplay, this.keToaNew.ToiDisplay);
          return null;

        }
        else {
          this.keToaNew.SoNgayDung = this.TongSoNgaySuDung(this.keToaNew.SoLuong, this.keToaNew.SangDisplay, event, this.keToaNew.ChieuDisplay, this.keToaNew.ToiDisplay);
          return null;

        }
      case "Chieu":
        if ((event == undefined && this.keToaNew.TruaDisplay == undefined && this.keToaNew.SangDisplay == undefined && this.keToaNew.ToiDisplay == undefined)
          || (event == "" && this.keToaNew.TruaDisplay == "" && this.keToaNew.SangDisplay == "" && this.keToaNew.ToiDisplay == "")
          || (event == "" && this.keToaNew.TruaDisplay == "" && this.keToaNew.SangDisplay == "" && this.keToaNew.ToiDisplay == null)
          || (event == "" && this.keToaNew.TruaDisplay == "" && this.keToaNew.SangDisplay == null && this.keToaNew.ToiDisplay == null)
          || (event == "" && this.keToaNew.TruaDisplay == null && this.keToaNew.SangDisplay == null && this.keToaNew.ToiDisplay == null)
        ) {
          this.keToaNew.SoNgayDung = this.TongSoNgaySuDung(this.keToaNew.SoLuong, this.keToaNew.SangDisplay, this.keToaNew.TruaDisplay, event, this.keToaNew.ToiDisplay);
          return null;

        }
        else {
          this.keToaNew.SoNgayDung = this.TongSoNgaySuDung(this.keToaNew.SoLuong, this.keToaNew.SangDisplay, this.keToaNew.TruaDisplay, event, this.keToaNew.ToiDisplay);
          return null;

        }
      case "Toi":
        if ((event == undefined && this.keToaNew.SangDisplay == undefined && this.keToaNew.ChieuDisplay == undefined && this.keToaNew.TruaDisplay == undefined)
          || (event == "" && this.keToaNew.SangDisplay == "" && this.keToaNew.ChieuDisplay == "" && this.keToaNew.TruaDisplay == "")
          || (event == "" && this.keToaNew.SangDisplay == "" && this.keToaNew.ChieuDisplay == "" && this.keToaNew.TruaDisplay == null)
          || (event == "" && this.keToaNew.SangDisplay == "" && this.keToaNew.ChieuDisplay == null && this.keToaNew.TruaDisplay == null)
          || (event == "" && this.keToaNew.SangDisplay == null && this.keToaNew.ChieuDisplay == null && this.keToaNew.TruaDisplay == null)
        ) {
          this.keToaNew.SoNgayDung = this.TongSoNgaySuDung(this.keToaNew.SoLuong, this.keToaNew.SangDisplay, this.keToaNew.TruaDisplay, this.keToaNew.ChieuDisplay, event);
          return null;

        }
        else {
          this.keToaNew.SoNgayDung = this.TongSoNgaySuDung(this.keToaNew.SoLuong, this.keToaNew.SangDisplay, this.keToaNew.TruaDisplay, this.keToaNew.ChieuDisplay, event);
          return null;

        }
    }
  }

  TongSoNgaySuDung(soLuong: number, dungSang: string, dungTrua: string, dungChieu: string, dungToi: string) {
    let sang: number, trua: number, chieu: number, toi: number, sum: number, result: number;
    if (dungSang == "" || dungSang == null || dungSang == undefined) {
      sang = 0;
    }
    else {
      sang = CommonService.FormatStringFractionToFloat(dungSang);
    }

    if (dungTrua == "" || dungTrua == null || dungTrua == undefined) {
      trua = 0;
    }
    else {
      trua = CommonService.FormatStringFractionToFloat(dungTrua);
    }

    if (dungChieu == "" || dungChieu == null || dungChieu == undefined) {
      chieu = 0;
    }
    else {
      chieu = CommonService.FormatStringFractionToFloat(dungChieu);
    }

    if (dungToi == "" || dungToi == null || dungToi == undefined) {
      toi = 0;
    }
    else {
      toi = CommonService.FormatStringFractionToFloat(dungToi);
    }
    sum = sang + trua + chieu + toi;
    if (sum > this.keToaNew.SoLuong) {
      this.keToaNew.SoLuong = sum;
      soLuong = this.keToaNew.SoLuong;
    }

    this.apiService.post<any>("KhamBenh/FormatNumber?inputNumber=" + sum).subscribe(
      resultData => {
        if (resultData != null) {
          if (resultData == "0") {
            this.keToaNew.LieuDung = null;
            //this.keToaNew.SoLuong = null;
          }
          else {
            this.keToaNew.LieuDung = resultData;
            if (soLuong != null) {
              let soNgayDung = (soLuong / parseNumber(CommonService.FormatStringFractionToFloat(this.keToaNew.LieuDung)));
              result = Math.ceil(soNgayDung);
              this.keToaNew.SoNgayDung = result;
            }
          }
          return result;
        }
      }
    );
    return null;
  }

  convertInt() {
    if (this.keToaNew.SoNgayDung != null)
      this.keToaNew.SoNgayDung = parseInt(this.keToaNew.SoNgayDung.toString());
  }

  onValueChangeAdd(buoi: any) {
    if (buoi === "Sang" && this.validationErrors != undefined && this.validationErrors != null) {
      let lenValidate = this.validationErrors.length;
      if (lenValidate > 0 && lenValidate != undefined) {
        for (let i = 0; i < lenValidate; i++) {
          if (this.validationErrors[i].Field === "SoLuong") {
            this.validationErrors.splice(i, 1);
            break;
          }
        }
      }
      else {
        return null;
      }
    }
    else if (buoi === "Trua" && this.validationErrors != undefined && this.validationErrors != null) {
      let lenValidate = this.validationErrors.length;
      if (lenValidate > 0 && lenValidate != undefined) {
        for (let i = 0; i < lenValidate; i++) {
          if (this.validationErrors[i].Field === "SoLuong") {
            this.validationErrors.splice(i, 1);
            break;
          }
        }
      }
      else {
        return null;
      }
    }
    else if (buoi === "Chieu" && this.validationErrors != undefined && this.validationErrors != null) {
      let lenValidate = this.validationErrors.length;
      if (lenValidate > 0 && lenValidate != undefined) {
        for (let i = 0; i < lenValidate; i++) {
          if (this.validationErrors[i].Field === "SoLuong") {
            this.validationErrors.splice(i, 1);
            break;
          }
        }
      }
      else {
        return null;
      }
    }
    else if (buoi === "Toi" && this.validationErrors != undefined && this.validationErrors != null) {
      let lenValidate = this.validationErrors.length;
      if (lenValidate > 0 && lenValidate != undefined) {
        for (let i = 0; i < lenValidate; i++) {
          if (this.validationErrors[i].Field === "SoLuong") {
            this.validationErrors.splice(i, 1);
            break;
          }
        }
      }
      else {
        return null;
      }
    } else {
      return null;
    }

  }

  inToaThuoc() {
    var self = this;
    if (self.gridToaThuocNoiTru.getAllDataFromDatasource().every(c => !c.CheckBox)) {
      self.notificationService.showError("Vui lòng chọn ít nhất 1 thuốc để in.");
    }
    else {
      var showDialog = self.dialog.open(LoadingComponent, {
        disableClose: true,
        width: '200px',
        height: '90px',
        data: { Title: 'Đang tải dữ liệu...' }
      });
      self.validationErrors = [];
      self.inThuocRaVienVo.HostingName = window.location.protocol + "//" + window.location.host;
      self.inThuocRaVienVo.Ids = [];
      if (self.gridToaThuocNoiTru.getAllDataFromDatasource() != undefined && self.gridToaThuocNoiTru.getAllDataFromDatasource() != null) {
        self.gridToaThuocNoiTru.getAllDataFromDatasource().filter(c => c.CheckBox).forEach(e => {
          self.inThuocRaVienVo.Ids.push(e.Id);
        });
      }
      self.ref.detectChanges();
      self.apiService.post<any>("DieuTriNoiTru/InDonThuocRaVien", self.inThuocRaVienVo).subscribe(
        (res) => {
          showDialog.close()
          self.dialog
            .open(PhieuInCongKhaiThuocPopupComponent, {
              disableClose: true,
              width: "1200px",
              data: { Html: res, Title: "TOA THUỐC RA VIỆN", LaPhieuThucHien: false },
            });
        },
        (err: ApiError) => {
          this.validationErrors = err.ValidationErrors;
          if (err.Message != "Validation Failed") {
            self.notificationService.showError(err.Message);
            showDialog.close()
          };
          showDialog.close()
        });
    }
  }
  checkAll: boolean = true;

  checkBoxThuocVatTu(dataItem: any, event: boolean) {

    dataItem.CheckBox = event;
    let lstDataCurrent = this.gridToaThuocNoiTru.getAllDataFromDatasource();
    if (lstDataCurrent.some(c => !c.CheckBox)) {
      this.checkAll = false;
    } else {
      this.checkAll = true;
    }
  }

  checkBoxAllChange(event: boolean) {
    let lstDataCurrent = this.gridToaThuocNoiTru.getAllDataFromDatasource();
    this.checkAll = event;
    lstDataCurrent.forEach(element => {
      element.CheckBox = event;
    });

  }

}
