import { ChangeDetectorRef, Component, EventEmitter, Input, OnInit, Output, TemplateRef, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material';
import { ActivatedRoute } from '@angular/router';
import { GroupDescriptor } from '@progress/kendo-data-query';
import { ApiService } from 'src/app/core/services/api.service';
import { AuthService } from 'src/app/core/services/auth.service';
import { NotificationService } from 'src/app/core/services/notification.service';
import { GridComponent } from 'src/app/shared/component/grid/grid.component';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import icDelete from '@iconify/icons-ic/twotone-delete';
import icEdit from '@iconify/icons-ic/border-color';
import { ComboboxComponent } from 'src/app/shared/component/dropdowns/combobox/combobox.component';
import { CommonService } from 'src/app/core/utilities/common.helper';
import { SecurityOperation } from 'src/app/shared/enum/security-operation.enum';
import { SystemMessage } from 'src/app/shared/configdata/system-message';
import { ApiError } from 'src/app/shared/models/api-error.model';
import { ConfirmComponent } from 'src/app/shared/component/dialogs/confirm/confirm.component';
import { parseNumber } from '@progress/kendo-angular-intl';
import { LoadingComponent } from "src/app/shared/component/dialogs/loading/loading.component";
import { ChiTietDieuTriNoiTruViewModel, KeToaThuocTruyenDichDieuTriNoiTru } from '../../../dieu-tri-noi-tru.model';
import { DuocPhamTonKhos } from 'src/app/modules/main/kham-benh/kham-benh.model';
import { SuaTruyenDichPopupComponent } from '../sua-truyen-dich-popup/sua-truyen-dich-popup.component';

@Component({
  selector: 'app-phieu-dieu-tri-truyen-dich',
  templateUrl: './phieu-dieu-tri-truyen-dich.component.html',
  styleUrls: ['./phieu-dieu-tri-truyen-dich.component.scss']
})
export class PhieuDieuTriTruyenDichComponent implements OnInit {

  documentType: DocumentType = DocumentType.DanhSachDieuTriNoiTru;
  thongTinDuocPham: DuocPhamTonKhos = new DuocPhamTonKhos();
  keToaNew: KeToaThuocTruyenDichDieuTriNoiTru = new KeToaThuocTruyenDichDieuTriNoiTru();
  keToaEdit: KeToaThuocTruyenDichDieuTriNoiTru = new KeToaThuocTruyenDichDieuTriNoiTru();
  keToaDelete: KeToaThuocTruyenDichDieuTriNoiTru = new KeToaThuocTruyenDichDieuTriNoiTru();
  validationErrors: any;
  isSelectDuocPham: boolean = false;
  yeuCauTiepNhanId: number = null;
  popupAddingData: any = null;
  icDelete = icDelete;
  icEdit = icEdit;
  //
  thoiGianBDChange: any = null;
  cachGioChange: any = null;
  thoiGianConLai: number = null;
  cachGioMax: number = 9999;
  soLanChange: any = null;
  soLanMax: number = 9999;
  format = "n2";

  //

  loaiKho: number = null;
  isShowKhoLe: boolean = null;
  isShowKhoTong: boolean = null;
  popupDeletingData: any = null;
  loaiDuocPhamHoacVatTu: number = 1;
  additionString: any = null;
  dataToSumThanhTienKhoLe: any[] = [];
  dataToSumThanhTienKhoTong: any[] = [];


  public totalThanhTienKhoLe(field: any) {
    switch (field) {
      case 'ThanhTien':
        return this.dataToSumThanhTienKhoLe.reduce((sum: any, item: { ThanhTien: any; }) => sum + item.ThanhTien, 0);
    }
  };

  public totalThanhTienKhoTong(field: any) {
    switch (field) {
      case 'ThanhTien':
        return this.dataToSumThanhTienKhoTong.reduce((sum: any, item: { ThanhTien: any; }) => sum + item.ThanhTien, 0);
    }
  };

  gridTruyenDichKhoLeColumns: any[] = [];
  gridTruyenDichKhoTongColumns: any[] = [];
  groups: GroupDescriptor[] = [{ field: 'Nhom', aggregates: [{ field: 'ThanhTien', aggregate: 'sum' }] }];

  @ViewChild('actionTemplate', { static: true }) actionTemplate: TemplateRef<any>;
  @ViewChild('tenNhomGroupHeaderTemplate', { static: false }) tenNhomGroupHeaderTemplate: TemplateRef<any>;

  @ViewChild('gridTruyenDich', { static: false }) gridTruyenDich: GridComponent;
  @ViewChild('isFocus', { static: false }) isFocus: ComboboxComponent;

  //Thành tiền đơn giá
  @ViewChild('donGiaFooterTemplate', { static: true }) donGiaFooterTemplate: TemplateRef<any>;
  @ViewChild('donGiaTemplate', { static: true }) donGiaTemplate: TemplateRef<any>;
  @ViewChild('donGiaGroupFooterTemplate', { static: true }) donGiaGroupFooterTemplate: TemplateRef<any>;

  @ViewChild('thanhTienTemplate', { static: true }) thanhTienTemplate: TemplateRef<any>;
  @ViewChild('thanhTienFooterTemplate', { static: true }) thanhTienFooterTemplate: TemplateRef<any>;
  @ViewChild('thanhTienGroupFooterTemplate', { static: true }) thanhTienGroupFooterTemplate: TemplateRef<any>;

  //end Thành tiền  đơn giá
  @ViewChild('nhomGroupHeaderTemplate', { static: true }) nhomGroupHeaderTemplate: TemplateRef<any>;
  @ViewChild('lieuDungTemplate', { static: true }) lieuDungTemplate: TemplateRef<any>;

  @ViewChild('trangThaiTemplate', { static: true }) trangThaiTemplate: TemplateRef<any>;


  @ViewChild('actionKhoTongTemplate', { static: true }) actionKhoTongTemplate: TemplateRef<any>;
  @ViewChild('gridThuocKhoTong', { static: false }) gridThuocKhoTong: GridComponent;
  //Thành tiền đơn giá kho tổng
  @ViewChild('donGiaKhoTongFooterTemplate', { static: true }) donGiaKhoTongFooterTemplate: TemplateRef<any>;
  @ViewChild('donGiaKhoTongTemplate', { static: true }) donGiaKhoTongTemplate: TemplateRef<any>;
  @ViewChild('donGiaKhoTongGroupFooterTemplate', { static: true }) donGiaKhoTongGroupFooterTemplate: TemplateRef<any>;
  @ViewChild('thanhTienKhoTongTemplate', { static: true }) thanhTienKhoTongTemplate: TemplateRef<any>;
  @ViewChild('thanhTienKhoTongFooterTemplate', { static: true }) thanhTienKhoTongFooterTemplate: TemplateRef<any>;
  @ViewChild('thanhTienKhoTongGroupFooterTemplate', { static: true }) thanhTienKhoTongGroupFooterTemplate: TemplateRef<any>;

  @Input() phieuDieuTriHienTaiId: any;
  @Input() dataBenhNhan: any;
  @Input() dieuTriNoiTruModel: ChiTietDieuTriNoiTruViewModel;
  @Output() disabledInPhieu: EventEmitter<any> = new EventEmitter<any>();

  constructor(private route: ActivatedRoute,
    private dialog: MatDialog,
    private ref: ChangeDetectorRef,
    private authService: AuthService,
    private apiService: ApiService,
    private notificationService: NotificationService) { }

  ngOnInit() {
    const id: number = this.route.snapshot.params.id;
    if (id !== undefined && id !== null) {
      this.yeuCauTiepNhanId = id;
      this.additionString = this.yeuCauTiepNhanId + ";" + this.phieuDieuTriHienTaiId;
    }
    if (this.dataBenhNhan.CoBHYT == true) {
      this.keToaNew.LaDuocPhamBHYT = 2;
    }
    else if (this.dataBenhNhan.CoBHYT != true) {
      this.keToaNew.LaDuocPhamBHYT = 1;
    }
    this.gridTruyenDichKhoLeColumns = [
      { Field: "Nhom", Title: "Nhóm", Width: 50, Sortable: true, Hidden: true, TemplateGroupHeader: this.nhomGroupHeaderTemplate },
      { Field: "Action", Title: "", Width: 60, Sortable: false, Template: this.actionTemplate },
      { Field: "STT", Title: "#", Width: 20, Sortable: false },
      { Field: "Ma", Title: "Mã", Width: 30, Sortable: false, ShowTooltip: true },
      { Field: "Ten", Title: "Tên", Width: 30, Sortable: false, ShowTooltip: true },
      { Field: "HoatChat", Title: "Hoạt Chất", Width: 30, Sortable: false, ShowTooltip: true },
      { Field: "DVT", Title: "ĐVT", Width: 30, Sortable: false, ShowTooltip: true },
      { Field: "TenKho", Title: "Tên Kho", Width: 50, Sortable: false, ShowTooltip: true },
      { Field: "TenNhanVienChiDinh", Title: "Người chỉ định", Width: 50, Sortable: false, ShowTooltip: true },
      { Field: "ThoiDiemChiDinhDisplay", Title: "Thời gian chỉ định", Width: 50, Sortable: false, ShowTooltip: true },
      { Field: "SoLuong", Title: "SL", Width: 20, Sortable: false },
      { Field: "DonGia", Title: "Đơn Giá", Width: 70, Sortable: false, TemplateFooter: this.donGiaFooterTemplate, Template: this.donGiaTemplate, TemplateGroupFooter: this.donGiaGroupFooterTemplate },
      { Field: "ThanhTien", Title: "T.Tiền", Width: 90, Sortable: false, Template: this.thanhTienTemplate, TemplateFooter: this.thanhTienFooterTemplate, TemplateGroupFooter: this.thanhTienGroupFooterTemplate },
      { Field: "TenDuongDung", Title: "Đ.Dùng", Width: 30, Sortable: false },
      { Field: "GhiChu", Title: "Cách Dùng", Width: 50, Sortable: false, ShowTooltip: true },
      { Field: "TuongTacThuoc", Title: "Tương Tác Thuốc", Width: 30, Sortable: false },
      { Field: "DiUngThuocDisplay", Title: "Dị Ứng Thuốc", Width: 30, Sortable: false },
      { Field: "TocDoTruyen", Title: "Tốc độ truyền", Width: 30, Sortable: false },
      { Field: "DonViTocDoTruyenDisplay", Title: "Đơn vị tốc độ truyền", Width: 50, Sortable: false },
      { Field: "GioSuDung", Title: "Giờ sử dụng", Width: 50, Sortable: false, ShowTooltip: true },
      { Field: "TrangThai", Title: "Trạng Thái", Width: 50, Sortable: false, Template: this.trangThaiTemplate },
    ];

    this.gridTruyenDichKhoTongColumns = [
      { Field: "Action", Title: "", Width: 60, Sortable: false, Template: this.actionKhoTongTemplate },
      { Field: "STT", Title: "#", Width: 20, Sortable: false },
      { Field: "Ma", Title: "Mã", Width: 50, Sortable: false, ShowTooltip: true },
      { Field: "Ten", Title: "Tên", Width: 50, Sortable: false, ShowTooltip: true },
      { Field: "HoatChat", Title: "Hoạt Chất", Width: 50, Sortable: false, ShowTooltip: true },
      { Field: "DVT", Title: "ĐVT", Width: 50, Sortable: false },
      { Field: "Nhom", Title: "Nhóm", Width: 50, Sortable: true, Hidden: true, TemplateGroupHeader: this.nhomGroupHeaderTemplate },
      { Field: "TenKho", Title: "Tên Kho", Width: 50, Sortable: false, ShowTooltip: true },
      { Field: "ThoiDiemChiDinhDisplay", Title: "Thời gian chỉ định", Width: 50, Sortable: false, ShowTooltip: true },
      { Field: "SoLuong", Title: "SL", Width: 30, Sortable: false },
      { Field: "DonGia", Title: "Đơn Giá", Width: 70, Sortable: false, TemplateFooter: this.donGiaKhoTongFooterTemplate, Template: this.donGiaKhoTongTemplate, TemplateGroupFooter: this.donGiaKhoTongGroupFooterTemplate },
      { Field: "ThanhTien", Title: "T.Tiền", Width: 90, Sortable: false, Template: this.thanhTienKhoTongTemplate, TemplateFooter: this.thanhTienKhoTongFooterTemplate, TemplateGroupFooter: this.thanhTienKhoTongGroupFooterTemplate },
      { Field: "TenDuongDung", Title: "Đ.Dùng", Width: 50, Sortable: false },
      { Field: "GhiChu", Title: "Cách Dùng", Width: 50, Sortable: false, ShowTooltip: true },
      { Field: "TuongTacThuoc", Title: "Tương Tác Thuốc", Width: 50, Sortable: false },
      { Field: "DiUngThuocDisplay", Title: "Dị Ứng Thuốc", Width: 50, Sortable: false },
      { Field: "TinhTrangDisplay", Title: "Tình trạng", Width: 50, Sortable: false, ShowTooltip: true },
      { Field: "TocDoTruyen", Title: "Tốc độ truyền", Width: 30, Sortable: false },
      { Field: "DonViTocDoTruyenDisplay", Title: "Đơn vị tốc độ truyền", Width: 50, Sortable: false },
      { Field: "GioSuDung", Title: "Giờ sử dụng", Width: 50, Sortable: false, ShowTooltip: true },
      { Field: "PhieuLinh", Title: "Phiếu lĩnh", Width: 50, Sortable: false, ShowTooltip: true },
      { Field: "PhieuXuat", Title: "Phiếu xuất", Width: 50, Sortable: false, ShowTooltip: true },
    ];
    this.kiemTraCoDonTruyenDich();
  }
  kiemTraCoDonTruyenDich() {
    this.apiService.post<any>("DieuTriNoiTru/KiemTraCoDonTruyenDich?noiTruPhieuDieuTriId=" + this.phieuDieuTriHienTaiId).subscribe(
      resultData => {
        if (resultData != undefined && resultData != null) {
          this.isShowKhoLe = resultData.CoDonThuocKhoLe;
          this.isShowKhoTong = resultData.CoDonThuocKhoTong;
        }
      }
    )
  }

  onKey(event: any) {
    if (event.key == "Enter") {
      if (this.isSelectDuocPham != true) {
        this.themDuocPham();
        this.onkeyFocus();
      }
      else {
        this.isSelectDuocPham = false;
      }
    }
  }

  onDataBoundChild(event: any) {
    if (event != undefined && event != null) {
      this.dataToSumThanhTienKhoLe = event.Data;
      if (event.TotalRowCount == 0) {
        this.isShowKhoLe = false;
      }
      if (!this.isShowKhoLe && !this.isShowKhoTong) {
        this.disabledInPhieu.emit(false);
      } else {
        this.disabledInPhieu.emit(true);
      }
    }
  }

  onDataBoundChildKhoTong(event: any) {
    if (event != undefined && event != null) {
      this.dataToSumThanhTienKhoTong = event.Data;
      if (event.TotalRowCount == 0) {
        this.isShowKhoTong = false;
      }
      if (!this.isShowKhoLe && !this.isShowKhoTong) {
        this.disabledInPhieu.emit(false);
      } else {
        this.disabledInPhieu.emit(true);
      }
    }
  }

  chonKho(dataItem: any) {
    //console.log("dataItem: ", dataItem)
    if (dataItem != undefined && dataItem != null) {
      this.loaiKho = dataItem.LoaiKho;
    } else {
      this.loaiKho = null;
    }
    this.clearDuocPham();
  }
  chonDuoc(duocPhamBenhVien: any) {
    if (duocPhamBenhVien != undefined && duocPhamBenhVien != null) {
      this.keToaNew.TheTich = duocPhamBenhVien.TheTich;
      let objThongTinThuoc = {
        YeuCauTiepNhanId: this.yeuCauTiepNhanId,
        DuocPhamBenhVienId: duocPhamBenhVien.KeyId,
        LoaiDuocPham: this.keToaNew.LaDuocPhamBHYT,
        KhoId: this.keToaNew.KhoId,
        NoiTruPhieuDieuTriId: this.phieuDieuTriHienTaiId
      };

      this.apiService.post<any>("DieuTriNoiTru/ThongTinDuocPham", objThongTinThuoc).subscribe(
        resultData => {
          if (resultData != null) {
            this.thongTinDuocPham = resultData;
          }
        });
    } else {
      this.clearDuocPham();
    }
  }
  clearDuocPham() {
    this.validationErrors = [];
    this.keToaNew.DuocPhamBenhVienId = null;
    this.keToaNew.SoLuong = null;
    this.keToaNew.TocDoTruyen = null;
    this.keToaNew.DonViTocDoTruyen = null;
    this.keToaNew.ThoiGianBatDauTruyen = null;
    this.keToaNew.CachGioTruyenDich = null;
    this.keToaNew.SoLanDungTrongNgay = null;
    this.keToaNew.GhiChu = null;
    this.keToaNew.GioSuDung = null;
    this.thongTinDuocPham.TheTich = null;
  }

  huy() {
    this.clearDuocPham();
    this.thongTinDuocPham = new DuocPhamTonKhos();
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

  hienThiGioSuDung() {
    if (this.thoiGianBDChange != undefined && this.thoiGianBDChange != null
      && this.cachGioChange != undefined && this.cachGioChange != null
      && this.soLanChange != undefined && this.soLanChange != null) {
      var thoiGian = this.thoiGianBDChange;
      for (let i = 1; i <= this.soLanChange; i++) {
        let conVertTimeSACH = CommonService.convertTimeSACH(CommonService.sec2time((thoiGian)));
        thoiGian += (this.cachGioChange * 3600);
        if(thoiGian == 86400){
          thoiGian = thoiGian - 60; // trừ đi 1p tránh trường hợp đúng 0:00 giờ
        }
        if (this.keToaNew.GioSuDung == null) {
          this.keToaNew.GioSuDung = "";
        }
        this.keToaNew.GioSuDung += conVertTimeSACH + "; ";
      }
    }
  }

  thoiGianBatDauTruyenChange(dataItem: any) {
    this.keToaNew.GioSuDung = null;
    this.keToaNew.CachGioTruyenDich = null;
    this.keToaNew.SoLanDungTrongNgay = null;
    this.cachGioChange = null;
    this.soLanChange = null;
    if (dataItem != undefined && dataItem != null) {
      this.thoiGianBDChange = dataItem;
      // 86400s = 1 day
      let timeRemain = (86400 - dataItem) / 3600;
      if (timeRemain > 12) {
        timeRemain = 12;
      }
      this.thoiGianConLai = timeRemain;
      this.cachGioMax = parseNumber(timeRemain.toFixed(1));
    } else {
      this.thoiGianBDChange = null;
      this.cachGioMax = 9999;
    }
    this.hienThiGioSuDung();
  }

  cachGioTruyenDichChange(dataItem: any) {
    this.keToaNew.GioSuDung = null;
    this.keToaNew.SoLanDungTrongNgay = null;
    this.soLanChange = null;
    if (dataItem != undefined && dataItem != null) {
      this.cachGioChange = dataItem;
      let timeRemain = (86400 - this.thoiGianBDChange) / 3600; // thời gian còn lại trong ngày
      if (timeRemain / dataItem == 1) {
        this.soLanMax = 2;
      } else {
        if (timeRemain / dataItem < 2) { // chia ra kết quả từ 1.1 ~ 1.9
          this.soLanMax = 2;
        } else {
          this.soLanMax = parseNumber((timeRemain / dataItem + 1).toFixed(0));
        }
      }
    } else {
      this.cachGioChange = null;
      this.soLanMax = 9999;
    }
    this.hienThiGioSuDung();
  }

  soLanDungTrongNgayChange(dataItem: any) {
    this.keToaNew.GioSuDung = null;
    if (dataItem != undefined && dataItem != null) {
      this.soLanChange = dataItem;
    } else {
      this.soLanChange = null;
    }
    this.hienThiGioSuDung();
  }

  themDuocPham() {
    var self = this;
    self.keToaNew.YeuCauTiepNhanId = self.yeuCauTiepNhanId;
    self.keToaNew.Id = self.phieuDieuTriHienTaiId;
    self.validationErrors = null;
    self.ref.detectChanges();
    if (self.thongTinDuocPham.FlagDichDaKe == true) {
      self.dialog.open(ConfirmComponent, {
        disableClose: false,
        width: '500px',
        data: { Title: "Cảnh báo", Message: "Thuốc này đã kê trong đơn thuốc, bạn có muốn thêm thuốc này không ?" }
      }).afterClosed().subscribe(result => {
        if (result == "Yes") {
          self.themThuoc();
        }
        else {
          self.keToaNew.DuocPhamBenhVienId = null;
          self.keToaNew.SoLuong = null;
          self.thongTinDuocPham = new DuocPhamTonKhos();
        }
      });
    } else {
      self.themThuoc();
    }
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

  dangXuLy:boolean=false;
  themThuoc() {
    var self = this;
    self.validationErrors = null;
    self.ref.detectChanges();
    if (self.authService.hasPermission(self.documentType, SecurityOperation.Add)) {
      if(this.dangXuLy)
          return;
      this.dangXuLy=true;
      self.addingPage();
      self.apiService.post<any>("DieuTriNoiTru/ThemThuocTruyenDich", self.keToaNew).subscribe(
        () => {
          self.closePopupAddingData();
          if (!this.isShowKhoLe && !this.isShowKhoTong) {
            this.disabledInPhieu.emit(false);
          } else {
            this.disabledInPhieu.emit(true);
          }
          let mess = CommonService.format(SystemMessage.ActionSuccessfully, ["Thêm"]);
          self.notificationService.showSuccess(mess);
          self.gridTruyenDich.search();
          self.gridThuocKhoTong.search();
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

  suaThuoc(dataItem: any) {
    var self = this;
    self.validationErrors = null;
    self.ref.detectChanges();
    self.keToaEdit = Object.assign({}, dataItem);
    self.keToaEdit.YeuCauTiepNhanId = self.yeuCauTiepNhanId;
    if (self.authService.hasPermission(self.documentType, SecurityOperation.Update)) {
      self.dialog.open(SuaTruyenDichPopupComponent, {
        disableClose: false,
        width: '1500px',
        data: self.keToaEdit,
      }).afterClosed().subscribe(() => {
        self.gridTruyenDich.search();
        self.gridThuocKhoTong.search();
      });
    } else {
      self.notificationService.showError(SystemMessage.UnAuthorizedMessage);
    }
  }


  xoaThuoc(dataItem: any) {
    //console.log("data Thuoc Xoa: ", dataItem);
    var self = this;
    self.validationErrors = null;
    self.ref.detectChanges();
    //self.gridThuoc.ngOnDestroy();
    self.keToaDelete = dataItem;
    self.keToaDelete.LaDuocPhamBHYT = 1;
    self.keToaDelete.YeuCauTiepNhanId = self.yeuCauTiepNhanId;
    let comfirm = "xóa";
    if (self.authService.hasPermission(self.documentType, SecurityOperation.Delete)) {
      self.dialog.open(ConfirmComponent, {
        disableClose: false,
        width: '400px',
        data: { Title: "Xác nhận", Message: CommonService.format(SystemMessage.MessLockTemplate, [comfirm, "thuốc"]) }
      }).afterClosed().subscribe(result => {
        if (result == "Yes") {
          this.deletingPage();
          self.apiService.post("DieuTriNoiTru/XoaThuoc", self.keToaDelete).subscribe(
            () => {
              this.closePopupDeletingData();
              self.notificationService.showSuccess(CommonService.format(SystemMessage.ActionSuccessfully, ["Xóa"]));
              self.gridTruyenDich.search();
              self.gridThuocKhoTong.search();
            },
            (err: ApiError) => {
              self.validationErrors = err.ValidationErrors;
              if (err.Message != "Validation Failed") {
                self.notificationService.showError(err.Message);
              }
              this.closePopupDeletingData();
            });
        }
      });
    }
    else {
      self.notificationService.showError(SystemMessage.UnAuthorizedMessage);
    }
  }
}
