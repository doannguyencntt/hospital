import { ChangeDetectorRef, Component, EventEmitter, Input, OnInit, Output, SimpleChanges, TemplateRef, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material';
import { GridComponent } from 'src/app/shared/component/grid/grid.component';
import { GroupDescriptor } from '@progress/kendo-data-query';
import { ApiService } from 'src/app/core/services/api.service';
import { AuthService } from 'src/app/core/services/auth.service';
import { NotificationService } from 'src/app/core/services/notification.service';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import icDelete from '@iconify/icons-ic/twotone-delete';
import icEdit from '@iconify/icons-ic/border-color';
import { CapNhatKhongTinhPhi, ChiTietDieuTriNoiTruViewModel, HoanTraVatTuVo, InPhieuCongKhaiThuocVatTu, KeVatTuDieuTriNoiTru, LstYearOrderByModel, YearModel } from '../../../dieu-tri-noi-tru.model';
import { ComboboxComponent } from 'src/app/shared/component/dropdowns/combobox/combobox.component';
import { VatTuTonKhos } from 'src/app/modules/main/kham-benh/kham-benh.model';
import { ConfirmComponent } from 'src/app/shared/component/dialogs/confirm/confirm.component';
import { SecurityOperation } from 'src/app/shared/enum/security-operation.enum';
import { CommonService } from 'src/app/core/utilities/common.helper';
import { SystemMessage } from 'src/app/shared/configdata/system-message';
import { ApiError } from 'src/app/shared/models/api-error.model';
import { SuaVatTuPopupComponent } from '../sua-vat-tu-popup/sua-vat-tu-popup.component';
import { LoadingComponent } from "src/app/shared/component/dialogs/loading/loading.component";
import { EnumLoaiKho } from 'src/app/shared/enum/loai-kho.enum';
import icReturn from '@iconify/icons-ic/arrow-upward';
import { HoanTraVatTuPopupComponent } from '../hoan-tra-vat-tu-popup/hoan-tra-vat-tu-popup.component';
import { PhieuInCongKhaiVatTuPopupComponent } from '../phieu-in-cong-khai-vat-tu-popup/phieu-in-cong-khai-vat-tu-popup.component';
import { parseNumber } from '@progress/kendo-angular-intl';
import { ApDungDonVtytCacNgayPopupComponent } from '../ap-dung-don-vtyt-cac-ngay-popup/ap-dung-don-vtyt-cac-ngay-popup.component';
import { SaoChepVtytPopupComponent } from '../sao-chep-vtyt-popup/sao-chep-vtyt-popup.component';

@Component({
  selector: 'app-phieu-dieu-tri-vat-tu',
  templateUrl: './phieu-dieu-tri-vat-tu.component.html',
  styleUrls: ['./phieu-dieu-tri-vat-tu.component.scss']
})
export class PhieuDieuTriVatTuComponent implements OnInit {
  inPhieuCongKhaiThuocVatTu: InPhieuCongKhaiThuocVatTu = new InPhieuCongKhaiThuocVatTu();
  documentType: DocumentType = DocumentType.DanhSachDieuTriNoiTru;
  thongTinVatTu: VatTuTonKhos = new VatTuTonKhos();
  thongTinTraVT: HoanTraVatTuVo = new HoanTraVatTuVo();
  keVatTuNew: KeVatTuDieuTriNoiTru = new KeVatTuDieuTriNoiTru();
  keVatTuEdit: KeVatTuDieuTriNoiTru = new KeVatTuDieuTriNoiTru();
  keVatTuDelete: KeVatTuDieuTriNoiTru = new KeVatTuDieuTriNoiTru();
  capNhatKhongTinhPhi: CapNhatKhongTinhPhi = new CapNhatKhongTinhPhi();

  popupAddingData: any = null;
  popupDeletingData: any = null;
  icReturn = icReturn;
  icDelete = icDelete;
  icEdit = icEdit;
  isSelectDuocPham: boolean = false;
  yeuCauTiepNhanId: number = null;
  additionString: any = null;
  isShowKhoLe: boolean = null;
  isShowKhoTong: boolean = null;
  dataToSumThanhTienKhoLe: any[] = [];
  dataToSumThanhTienKhoTong: any[] = [];
  format = "n2";

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

  validationErrors: any;
  popupLoadingData: any;
  popupSavingData: any = null;

  gridVatTuColumns: any[] = [];
  gridVatTuKhoTongColumns: any[] = [];
  laKhoaKhamBenhChiDinh: boolean = true;

  groups: GroupDescriptor[] = [{ field: 'Nhom', aggregates: [{ field: 'ThanhTien', aggregate: 'sum' }] }];
  @ViewChild('isFocus', { static: false }) isFocus: ComboboxComponent;

  @ViewChild('actionVTTemplate', { static: true }) actionVTTemplate: TemplateRef<any>;
  @ViewChild('nhomGroupHeaderTemplate', { static: true }) nhomGroupHeaderTemplate: TemplateRef<any>;
  @ViewChild('slTemplate', { static: true }) slTemplate: TemplateRef<any>;

  @ViewChild('gridVatTu', { static: false }) gridVatTu: GridComponent;

  //Thành tiền đơn giá
  @ViewChild('donGiaFooterTemplate', { static: true }) donGiaFooterTemplate: TemplateRef<any>;
  @ViewChild('donGiaTemplate', { static: true }) donGiaTemplate: TemplateRef<any>;
  @ViewChild('donGiaGroupFooterTemplate', { static: true }) donGiaGroupFooterTemplate: TemplateRef<any>;

  @ViewChild('thanhTienTemplate', { static: true }) thanhTienTemplate: TemplateRef<any>;
  @ViewChild('thanhTienFooterTemplate', { static: true }) thanhTienFooterTemplate: TemplateRef<any>;
  @ViewChild('thanhTienGroupFooterTemplate', { static: true }) thanhTienGroupFooterTemplate: TemplateRef<any>;

  //end Thành tiền  đơn giá

  //Kho Tong
  @ViewChild('actionVTKhoTongTemplate', { static: true }) actionVTKhoTongTemplate: TemplateRef<any>;
  @ViewChild('gridVatTuKhoTong', { static: false }) gridVatTuKhoTong: GridComponent;

  @ViewChild('donGiaKhoTongFooterTemplate', { static: true }) donGiaKhoTongFooterTemplate: TemplateRef<any>;
  @ViewChild('donGiaKhoTongTemplate', { static: true }) donGiaKhoTongTemplate: TemplateRef<any>;
  @ViewChild('donGiaKhoTongGroupFooterTemplate', { static: true }) donGiaKhoTongGroupFooterTemplate: TemplateRef<any>;
  @ViewChild('thanhTienKhoTongTemplate', { static: true }) thanhTienKhoTongTemplate: TemplateRef<any>;
  @ViewChild('thanhTienKhoTongFooterTemplate', { static: true }) thanhTienKhoTongFooterTemplate: TemplateRef<any>;
  @ViewChild('thanhTienKhoTongGroupFooterTemplate', { static: true }) thanhTienKhoTongGroupFooterTemplate: TemplateRef<any>;

  @ViewChild('checkBoxTemplate', { static: true }) checkBoxTemplate: TemplateRef<any>;

  @Input() khoaChiDinh: any;
  @Input() phieuDieuTriHienTaiId: any;
  @Input() dataBenhNhan: any;
  @Input() lstYear: Array<YearModel> = new Array<YearModel>();
  @Input() lstYearOrderBy: LstYearOrderByModel[] = new Array<LstYearOrderByModel>();
  @Input() dieuTriNoiTruModel: ChiTietDieuTriNoiTruViewModel;
  @Output() disabledInPhieu: EventEmitter<any> = new EventEmitter<any>();

  constructor(
    private dialog: MatDialog,
    private ref: ChangeDetectorRef,
    private authService: AuthService,
    private apiService: ApiService,
    private notificationService: NotificationService) { }

  ngOnInit() {
    const id: number = this.dieuTriNoiTruModel.Id;
    if (id !== undefined && id !== null) {
      this.yeuCauTiepNhanId = id;
      this.additionString = this.yeuCauTiepNhanId + ";" + this.phieuDieuTriHienTaiId;
    }
    if (this.khoaChiDinh === this.dieuTriNoiTruModel.Khoa) {
      this.laKhoaKhamBenhChiDinh = true;
    }
    else {
      this.laKhoaKhamBenhChiDinh = false;
    }

    if (this.dataBenhNhan.CoBHYT == true) {
      this.keVatTuNew.LaVatTuBHYT = 2;
    }
    else if (this.dataBenhNhan.CoBHYT != true) {
      this.keVatTuNew.LaVatTuBHYT = 1;
    }
    this.keVatTuNew.KhongTinhPhi = true;
    this.gridVatTuColumns = [
      { Field: "Action", Title: "", Width: 50, Sortable: false, Template: this.actionVTTemplate, Hidden: this.dataBenhNhan.KetThucBenhAn },
      // { Field: "STT", Title: "#", Width: 20, Sortable: false },
      { Field: "Ma", Title: "Mã", Width: 50, Sortable: false, ShowTooltip: true },
      { Field: "Ten", Title: "Tên Vật Tư", Width: 200, Sortable: false, ShowTooltip: true },
      { Field: "SoLuong", Title: "SL", Width: 40, Sortable: false, Template: this.slTemplate },
      { Field: "DVT", Title: "ĐVT", Width: 50, Sortable: false },
      { Field: "TenKho", Title: "Tên Kho", Width: 70, Sortable: false, ShowTooltip: true },
      { Field: "TenDVKT", Title: "DVKT", Width: 50, Sortable: false, ShowTooltip: true },
      { Field: "Nhom", Title: "Nhóm", Width: 50, Sortable: true, Hidden: true, TemplateGroupHeader: this.nhomGroupHeaderTemplate },
      { Field: "TenNhanVienChiDinh", Title: "Người chỉ định", Width: 50, Sortable: false, ShowTooltip: true },
      { Field: "ThoiDiemChiDinhDisplay", Title: "Thời gian chỉ định", Width: 50, Sortable: false, ShowTooltip: true },
      { Field: "KhongTinhPhi", Title: "Tính phí", Width: 35, Template: this.checkBoxTemplate },
      { Field: "DonGia", Title: "Đơn Giá", Width: 50, Sortable: false, TemplateFooter: this.donGiaFooterTemplate, Template: this.donGiaTemplate, TemplateGroupFooter: this.donGiaGroupFooterTemplate },
      { Field: "ThanhTien", Title: "T.Tiền", Width: 90, Sortable: false, Template: this.thanhTienTemplate, TemplateFooter: this.thanhTienFooterTemplate, TemplateGroupFooter: this.thanhTienGroupFooterTemplate },
      { Field: "TinhTrangDisplay", Title: "Tình trạng", Width: 50, Sortable: false, ShowTooltip: true },

    ];

    this.gridVatTuKhoTongColumns = [
      { Field: "Action", Title: "", Width: 55, Sortable: false, Template: this.actionVTKhoTongTemplate, Hidden: this.dataBenhNhan.KetThucBenhAn },
      // { Field: "STT", Title: "#", Width: 20, Sortable: false },
      { Field: "Ma", Title: "Mã", Width: 50, Sortable: false, ShowTooltip: true },
      { Field: "Ten", Title: "Tên Vật Tư", Width: 200, Sortable: false, ShowTooltip: true },
      { Field: "SoLuong", Title: "SL", Width: 40, Sortable: false, Template: this.slTemplate },
      { Field: "DVT", Title: "ĐVT", Width: 50, Sortable: false },
      { Field: "TenKho", Title: "Tên Kho", Width: 70, Sortable: false, ShowTooltip: true },
      { Field: "TenDVKT", Title: "DVKT", Width: 50, Sortable: false, ShowTooltip: true },
      { Field: "Nhom", Title: "Nhóm", Width: 50, Sortable: true, Hidden: true, TemplateGroupHeader: this.nhomGroupHeaderTemplate },
      { Field: "TenNhanVienChiDinh", Title: "Người chỉ định", Width: 50, Sortable: false, ShowTooltip: true },
      { Field: "ThoiDiemChiDinhDisplay", Title: "Thời gian chỉ định", Width: 50, Sortable: false, ShowTooltip: true },
      { Field: "KhongTinhPhi", Title: "Tính phí", Width: 35, Template: this.checkBoxTemplate },
      { Field: "DonGia", Title: "Đơn Giá", Width: 50, Sortable: false, TemplateFooter: this.donGiaKhoTongFooterTemplate, Template: this.donGiaKhoTongTemplate, TemplateGroupFooter: this.donGiaKhoTongGroupFooterTemplate },
      { Field: "ThanhTien", Title: "T.Tiền", Width: 90, Sortable: false, Template: this.thanhTienKhoTongTemplate, TemplateFooter: this.thanhTienKhoTongFooterTemplate, TemplateGroupFooter: this.thanhTienKhoTongGroupFooterTemplate },
      { Field: "TinhTrangDisplay", Title: "Tình trạng", Width: 50, Sortable: false, ShowTooltip: true },
      { Field: "PhieuLinh", Title: "Phiếu lĩnh", Width: 50, Sortable: false, ShowTooltip: true },
      { Field: "PhieuXuat", Title: "Phiếu xuất", Width: 50, Sortable: false, ShowTooltip: true },
    ];
    this.kiemTraCoDonVT();
    this.kiemTraPhieuDieuTriTheoKhoaChiDinh(this.yeuCauTiepNhanId, this.phieuDieuTriHienTaiId);
    this.getNgayDieuTri(this.yeuCauTiepNhanId);
    this.getNgayNhapVien(this.yeuCauTiepNhanId);
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['phieuDieuTriHienTaiId'] && changes['phieuDieuTriHienTaiId'].previousValue != null && changes['phieuDieuTriHienTaiId'].previousValue != changes['phieuDieuTriHienTaiId'].currentValue) {
      if (this.dataBenhNhan.CoBHYT == true) {
        this.keVatTuNew.LaVatTuBHYT = 2;
      }
      else if (this.dataBenhNhan.CoBHYT != true) {
        this.keVatTuNew.LaVatTuBHYT = 1;
      }
      this.phieuDieuTriHienTaiId = changes.phieuDieuTriHienTaiId.currentValue;
      this.additionString = this.yeuCauTiepNhanId + ";" + this.phieuDieuTriHienTaiId;
      this.kiemTraPhieuDieuTriTheoKhoaChiDinh(this.yeuCauTiepNhanId, this.phieuDieuTriHienTaiId);
      this.kiemTraCoDonVT();
      this.gridVatTu._additionalSearchString = this.additionString;
      this.gridVatTu.search();

      this.gridVatTuKhoTong._additionalSearchString = this.additionString;
      this.gridVatTuKhoTong.search();

    }
  }
  khoaChiDinhHienTaiId: number = 0;
  kiemTraPhieuDieuTriTheoKhoaChiDinh(yeuCauTiepNhanId: number, phieuDieuTriId: number) {
    let params = {
      yeuCauTiepNhanId: yeuCauTiepNhanId,
      phieuDieuTriId: phieuDieuTriId
    };

    this.apiService.post<any>("DieuTriNoiTru/GetThongTinPhieuKham", params).subscribe(
      resultData => {
        if (resultData != null && resultData != undefined) {
          this.khoaChiDinh = resultData.KhoaChiDinh;
          this.khoaChiDinhHienTaiId = resultData.KhoaChiDinhId;
          if (this.khoaChiDinh === this.dieuTriNoiTruModel.Khoa) {
            this.laKhoaKhamBenhChiDinh = true;
          }
          else {
            this.laKhoaKhamBenhChiDinh = false;
          }
        }
      },
      (err: ApiError) => {
      });
  }

  kiemTraCoDonVT() {
    this.apiService.post<any>("DieuTriNoiTru/KiemTraCoDonVT?noiTruPhieuDieuTriId=" + this.phieuDieuTriHienTaiId).subscribe(
      resultData => {
        if (resultData != undefined && resultData != null) {
          this.isShowKhoLe = resultData.CoDonThuocKhoLe;
          this.isShowKhoTong = resultData.CoDonThuocKhoTong;
        }
      }
    )
  }


  onkeyFocus() {
    this.isFocus.onKeytoFocus();
  }

  onKey(event: any) {
    if (event.key == "Enter") {
      if (this.isSelectDuocPham != true) {
        this.themVatTu();
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
      //self.closePopupLoadingData();
      if (event.TotalRowCount == 0) {
        this.isShowKhoLe = false;
      }
      else {
        this.isShowKhoLe = true;
      }
      for (let i = 0; i < this.lstYearOrderBy.length; i++) {
        if (this.lstYearOrderBy[i].PhieuDieuTriId == this.phieuDieuTriHienTaiId) {
          if (event.Data.length > 0) {
            this.lstYearOrderBy[i].CoDonVTYTNoiTru = true;
            break;
          }
          else {
            this.lstYearOrderBy[i].CoDonVTYTNoiTru = false;
            break;
          }
        }
      }
    }
  }

  onDataBoundChildKhoTong(event: any) {
    if (event != undefined && event != null) {
      //self.closePopupLoadingData();
      this.dataToSumThanhTienKhoTong = event.Data;
      if (event.TotalRowCount == 0) {
        this.isShowKhoTong = false;
      }
      else {
        this.isShowKhoTong = true;
      }
      for (let i = 0; i < this.lstYearOrderBy.length; i++) {
        if (this.lstYearOrderBy[i].PhieuDieuTriId == this.phieuDieuTriHienTaiId) {
          if (event.Data.length > 0) {
            this.lstYearOrderBy[i].CoDonVTYTNoiTru = true;
            break;
          }
          else {
            this.lstYearOrderBy[i].CoDonVTYTNoiTru = false;
            break;
          }
        }
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
  chonKho(dataItem: any) {
    //console.log("dataItem: ", dataItem)
    if (dataItem != undefined && dataItem != null) {
      this.keVatTuNew.LoaiKho = dataItem.LoaiKho;
    } else {
      this.keVatTuNew.LoaiKho = null;
    }
    this.clearVatTu();

  }


  clearVatTu() {
    this.validationErrors = [];
    // this.keVatTuNew.LaVatTuBHYT = 2;
    this.keVatTuNew.VatTuBenhVienId = null;
    this.keVatTuNew.SoLuong = null;
    this.keVatTuNew.KhongTinhPhi = true;
  }

  huy() {
    this.validationErrors = [];
    this.thongTinVatTu = new VatTuTonKhos();
    //this.keVatTuNew.LaVatTuBHYT = 2;
    this.keVatTuNew.VatTuBenhVienId = null;
    this.keVatTuNew.SoLuong = null;
    this.keVatTuNew.KhongTinhPhi = true;
  }

  chonVatTu(vatTuBenhVienId: number) {
    if (vatTuBenhVienId != undefined && vatTuBenhVienId != null) {
      let objThongTinVatTu = {
        YeuCauTiepNhanId: this.yeuCauTiepNhanId,
        VatTuBenhVienId: this.keVatTuNew.VatTuBenhVienId,
        LoaiVatTu: this.keVatTuNew.LaVatTuBHYT,
        KhoId: this.keVatTuNew.KhoId,
        NoiTruPhieuDieuTriId: this.phieuDieuTriHienTaiId
      };

      this.apiService.post<any>("DieuTriNoiTru/ThongTinVatTu", objThongTinVatTu).subscribe(
        resultData => {
          if (resultData != null) {
            this.thongTinVatTu = resultData;
            console.log("this.thongTinVatTu: ", this.thongTinVatTu)
          }
        });
    } else {
      this.clearVatTu();
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

  themVatTu() {
    var self = this;
    self.keVatTuNew.YeuCauTiepNhanId = self.yeuCauTiepNhanId;
    self.keVatTuNew.Id = self.phieuDieuTriHienTaiId;
    self.keVatTuNew.PhieuDieuTriHienTaiId = self.phieuDieuTriHienTaiId;
    self.validationErrors = null;
    self.ref.detectChanges();
    if (self.thongTinVatTu.FlagVatTuDaKe == true
      && self.thongTinVatTu.FlagVatTuDaKeTrungKho == true
      && self.keVatTuNew.SoLuong != 0
      && self.keVatTuNew.SoLuong != null
      && self.keVatTuNew.LoaiKho != EnumLoaiKho.KhoLe

    ) {
      self.notificationService.showError("Vật tư này đã kê trong đơn vật tư (trùng kho).");
    }
    else if (self.thongTinVatTu.FlagVatTuDaKe == true) {
      self.dialog.open(ConfirmComponent, {
        disableClose: false,
        width: '500px',
        data: { Title: "Cảnh báo", Message: "Vật tư này đã kê trong đơn vật tư, bạn có muốn thêm vật tư này không ?" }
      }).afterClosed().subscribe(result => {
        if (result == "Yes") {
          self.them();
        }
        else {
          self.keVatTuNew.VatTuBenhVienId = null;
          self.keVatTuNew.SoLuong = null;
          self.thongTinVatTu = new VatTuTonKhos();
        }
      });
    } else {
      self.them();
    }
  }

  dangXuLy:boolean=false;
  them() {
    var self = this;
    self.validationErrors = null;
    self.ref.detectChanges();
    self.onkeyFocus();
    if (self.authService.hasPermission(self.documentType, SecurityOperation.Add)) {
      if(this.dangXuLy)
          return;
      this.dangXuLy=true;
      self.addingPage();
      self.apiService.post<any>("DieuTriNoiTru/ThemVatTu", self.keVatTuNew).subscribe(
        () => {
          if (self.keVatTuNew.LoaiKho == EnumLoaiKho.KhoLe) {
            self.isShowKhoLe = true;
          }
          if (self.keVatTuNew.LoaiKho == EnumLoaiKho.KhoTongVTYTCap2) {
            self.isShowKhoTong = true;
          }
          if (!self.isShowKhoLe && !self.isShowKhoTong) {
            self.disabledInPhieu.emit(false);
          } else {
            self.disabledInPhieu.emit(true);
          }
          self.closePopupAddingData();
          let mess = CommonService.format(SystemMessage.ActionSuccessfully, ["Thêm"]);
          self.notificationService.showSuccess(mess);
          self.gridVatTu.search();
          self.gridVatTuKhoTong.search();
          //self.gridThuoc.ngOnDestroy();
          self.clearVatTu();
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

  suaVatTu(dataItem: any) {
    // console.log("data: ", dataItem)
    var self = this;
    self.validationErrors = null;
    self.ref.detectChanges();
    self.keVatTuEdit = Object.assign({}, dataItem);
    self.keVatTuEdit.YeuCauTiepNhanId = self.yeuCauTiepNhanId;
    self.keVatTuEdit.PhieuDieuTriHienTaiId = self.phieuDieuTriHienTaiId;
    if (self.authService.hasPermission(self.documentType, SecurityOperation.Update)) {
      self.dialog.open(SuaVatTuPopupComponent, {
        disableClose: false,
        width: '600px',
        data: self.keVatTuEdit,
      }).afterClosed().subscribe(() => {
        self.gridVatTu.search();
        self.gridVatTuKhoTong.search();
      });
    } else {
      self.notificationService.showError(SystemMessage.UnAuthorizedMessage);
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


  xoaVatTu(dataItem: any) {
    var self = this;
    self.validationErrors = null;
    self.ref.detectChanges();
    //self.gridThuoc.ngOnDestroy();
    self.keVatTuDelete = dataItem;
    self.keVatTuDelete.LaVatTuBHYT = 1;
    self.keVatTuDelete.YeuCauTiepNhanId = self.yeuCauTiepNhanId;
    let comfirm = "xóa";
    if (self.authService.hasPermission(self.documentType, SecurityOperation.Delete)) {
      self.dialog.open(ConfirmComponent, {
        disableClose: false,
        width: '400px',
        data: { Title: "Xác nhận", Message: CommonService.format(SystemMessage.MessLockTemplate, [comfirm, "vật tư"]) }
      }).afterClosed().subscribe(result => {
        if (result == "Yes") {
          this.deletingPage();
          self.apiService.post("DieuTriNoiTru/XoaVatTu", self.keVatTuDelete).subscribe(
            () => {
              this.closePopupDeletingData();
              self.notificationService.showSuccess(CommonService.format(SystemMessage.ActionSuccessfully, ["Xóa"]));
              self.gridVatTu.search();
              self.gridVatTuKhoTong.search();
              self.clearVatTu();
              let dataThuoc = this.gridVatTu.getAllDataFromDatasource().filter(z => z.Id != this.keVatTuDelete.Id);
              let dataDichTruyen = this.gridVatTuKhoTong.getAllDataFromDatasource().filter(z => z.Id != this.keVatTuDelete.Id);
              let dataAll = dataThuoc.concat(dataDichTruyen);
              for (let i = 0; i < this.lstYearOrderBy.length; i++) {
                if (this.lstYearOrderBy[i].PhieuDieuTriId == this.phieuDieuTriHienTaiId) {
                  if (dataAll.length > 0) {
                    this.lstYearOrderBy[i].CoDonVTYTNoiTru = true;
                    break;
                  }
                  else {
                    this.lstYearOrderBy[i].CoDonVTYTNoiTru = false;
                    break;
                  }
                }
              }
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
  hoanTra(dataItem: any) {
    var self = this;
    self.validationErrors = null;
    self.ref.detectChanges();
    self.thongTinTraVT.Ids = dataItem.Ids;
    self.thongTinTraVT.KhoId = dataItem.KhoId;
    self.thongTinTraVT.CoYeuCauTraVTTuBenhNhanChiTiet = dataItem.CoYeuCauTraVTTuBenhNhanChiTiet;
    self.thongTinTraVT.YeuCauTiepNhanId = self.yeuCauTiepNhanId;
    self.thongTinTraVT.LaVatTuBHYT = dataItem.LaVatTuBHYT;
    self.thongTinTraVT.YeuCauVatTuBenhVienId = dataItem.Id;
    self.thongTinTraVT.LaTuTruc = dataItem.LaTuTruc;
    self.thongTinTraVT.SoLuong = dataItem.SoLuong;
    // console.log(dataItem)
    if (self.authService.hasPermission(self.documentType, SecurityOperation.Update)) {
      self.dialog.open(HoanTraVatTuPopupComponent, {
        disableClose: false,
        height: '500px',
        width: '1000px',
        data: self.thongTinTraVT,
      }).afterClosed().subscribe(() => {
        self.gridVatTu.search();
        self.gridVatTuKhoTong.search();
      });
    } else {
      self.notificationService.showError(SystemMessage.UnAuthorizedMessage);
    }
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

  inPhieuCongKhaiVatTu() {
    var self = this;
    self.loadingPage();
    self.inPhieuCongKhaiThuocVatTu.HostingName = window.location.protocol + "//" + window.location.host;
    self.inPhieuCongKhaiThuocVatTu.LoaiThuocVatTu = 2;
    self.inPhieuCongKhaiThuocVatTu.NoiTruPhieuDieuTriId = self.phieuDieuTriHienTaiId;
    self.inPhieuCongKhaiThuocVatTu.YeuCauTiepNhanId = parseNumber(self.yeuCauTiepNhanId);
    self.apiService.post<any>("DieuTriNoiTru/InPhieuCongKhaiThuocVatTu", self.inPhieuCongKhaiThuocVatTu).subscribe(
      resData => {
        if (resData != undefined && resData != null) {
          self.closePopupLoadingData();
          if (resData == undefined || resData == null) {
            self.notificationService.showError("Không có dịch vụ nào để in");
          }
          else {
            self.dialog.open(PhieuInCongKhaiVatTuPopupComponent, {
              disableClose: false,
              width: '1200px',
              data: { Html: resData, Title: "PHIẾU CÔNG KHAI VẬT TƯ TIÊU HAO", LaPhieuThucHien: false },

            }
            ).afterClosed().subscribe(() => {
              self.closePopupLoadingData();
            });
          }
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

  inPhieuThucHienVatTu() {
    var self = this;
    self.loadingPage();
    self.inPhieuCongKhaiThuocVatTu.HostingName = window.location.protocol + "//" + window.location.host;
    self.inPhieuCongKhaiThuocVatTu.LoaiThuocVatTu = 2;
    self.inPhieuCongKhaiThuocVatTu.NoiTruPhieuDieuTriId = self.phieuDieuTriHienTaiId;
    self.inPhieuCongKhaiThuocVatTu.YeuCauTiepNhanId = parseNumber(self.yeuCauTiepNhanId);
    self.apiService.post<any>("DieuTriNoiTru/InPhieuThucHienThuocVatTu", self.inPhieuCongKhaiThuocVatTu).subscribe(
      resData => {
        if (resData != undefined && resData != null) {
          self.closePopupLoadingData();
          if (resData == undefined || resData == null) {
            self.notificationService.showError("Không có dịch vụ nào để in");
          }
          else {
            self.dialog.open(PhieuInCongKhaiVatTuPopupComponent, {
              disableClose: false,
              width: '1200px',
              data: { Html: resData, Title: "PHIẾU THỰC HIỆN VTYT", LaPhieuThucHien: true },

            }
            ).afterClosed().subscribe(() => {
              self.closePopupLoadingData();
            });
          }
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

  savingPage() {
    this.popupSavingData = this.dialog.open(LoadingComponent, {
      disableClose: true,
      width: "200px",
      height: "90px",
      data: { Title: "Đang lưu dữ liệu..." },
    });
  }

  closepopupSavingData() {
    if (this.popupSavingData != undefined && this.popupSavingData != null) {
      this.popupSavingData.close();
    }
  }

  khongTinhPhiChange(khongTinhPhi: boolean, dataItem: any) {
    var self = this;
    self.savingPage();
    self.capNhatKhongTinhPhi.Id = dataItem.Id;
    self.capNhatKhongTinhPhi.YeuCauTiepNhanId = self.yeuCauTiepNhanId;
    self.capNhatKhongTinhPhi.KhongTinhPhi = khongTinhPhi;
    self.capNhatKhongTinhPhi.LaThuoc = false;
    self.apiService.post<any>("DieuTriNoiTru/CapNhatKhongTinhPhi", self.capNhatKhongTinhPhi).subscribe(
      () => {
        self.closepopupSavingData();
        self.notificationService.showSuccess(CommonService.format(SystemMessage.ActionSuccessfully, ["Cập nhật"]));
        this.gridVatTu.search();
        this.gridVatTuKhoTong.search();
      },
      (err: ApiError) => {
        self.validationErrors = err.ValidationErrors;
        if (err.Message != "Validation Failed") {
          self.notificationService.showError(err.Message);
        }
        self.closepopupSavingData();
      }
    );
  }



  getNgayDieuTri(yeuCauTiepNhanId: number) {
    this.apiService.post<any>("DieuTriNoiTru/GetNgayDieuTri?yeuCauTiepNhanId=" + yeuCauTiepNhanId).subscribe(
      resultData => {
        if (resultData != null && resultData != undefined && resultData.LstYearOrderBy.length > 0) {
          this.lstYear = resultData.LstYear;
          this.lstYearOrderBy = resultData.LstYearOrderBy;
        }
      },
      (err: ApiError) => {

      });
  }
  ngayNhapVien: Date = null;
  getNgayNhapVien(yeuCauTiepNhanId: number) {
    this.apiService.post<any>("DieuTriNoiTru/GetNgayNhapVien?yeuCauTiepNhanId=" + yeuCauTiepNhanId).subscribe(
      resultData => {
        if (resultData != null && resultData != undefined) {
          this.ngayNhapVien = resultData;
        }
      },
      (err: ApiError) => {

      });
  }

  apDungDonVTYTChoCacNgaySau() {
    var self = this;
    let dataVTTong = self.gridVatTuKhoTong.getAllDataFromDatasource();
    let dataVTLe = self.gridVatTu.getAllDataFromDatasource();
    let dataAll = dataVTLe.concat(dataVTTong);
    this.lstYearOrderBy.filter(z => z.KhoaId == this.khoaChiDinhHienTaiId).forEach(item => {
      if (item.PhieuDieuTriId == self.phieuDieuTriHienTaiId) {
        if (dataAll.length > 0) {
          item.CoDonVTYTNoiTru = true;
        }
        else {
          item.CoDonVTYTNoiTru = false;
        }
      }
    });
    let lstYear = this.lstYear;
    lstYear.forEach(y => {
      y.Months.forEach(m => {
        m.Days.filter(z => z.KhoaId == this.khoaChiDinhHienTaiId).forEach(d => {
          if (d.PhieuDieuTriId == this.phieuDieuTriHienTaiId) {
            if (dataAll.length > 0) {
              d.CoDonVTYTNoiTru = true;
            }
            else {
              d.CoDonVTYTNoiTru = false;
            }
          }
        });
      });
    });
    if (dataVTLe.length == 0 && dataVTTong.length == 0) {
      self.notificationService.showError("Ngày điều trị hiện tại chưa có đơn VTYT.");
    }
    else {
      self.dialog.open(ApDungDonVtytCacNgayPopupComponent, {
        disableClose: false,
        width: '450px',
        height: '475px',
        data: {
          thuocs: dataAll,
          lstYear: lstYear,
          lstYearOrderBy: this.lstYearOrderBy.filter(z => z.KhoaId == this.khoaChiDinhHienTaiId),
          yeuCauTiepNhanId: this.yeuCauTiepNhanId,
          phieuDieuTriHienTaiId: this.phieuDieuTriHienTaiId,
          ngayNhapVien: this.ngayNhapVien,
          isCopy: false
        },
      }).afterClosed().subscribe(resData => {
        if (resData == "OK" || resData == "Confirm") {
          self.notificationService.showSuccess(CommonService.format(SystemMessage.ActionSuccessfully, ["Lưu"]));
          window.location.reload();
        }
      });
    }
  }

  saoChepDonVTYTNgayKhacApDungNgayHienTai() {
    var self = this;
    let dataVTYTLe = self.gridVatTu.getAllDataFromDatasource();
    let dataVTYTTong = self.gridVatTuKhoTong.getAllDataFromDatasource();
    let dataAll = dataVTYTLe.concat(dataVTYTTong);
    let ngayDieuTriDuocChon = null;
    this.lstYearOrderBy.filter(z => z.KhoaId == this.khoaChiDinhHienTaiId).forEach(item => {
      if (item.PhieuDieuTriId == self.phieuDieuTriHienTaiId) {
        ngayDieuTriDuocChon = new Date(item.Date);
        if (dataAll.length > 0) {
          item.CoDonVTYTNoiTru = true;
        }
        else {
          item.CoDonVTYTNoiTru = false;
        }
      }
    });
    if (this.lstYearOrderBy.some(z => z.CoDonVTYTNoiTru)) {
      let lstNgayCoDonThuoc = this.lstYearOrderBy.filter(z => z.CoDonVTYTNoiTru && z.KhoaId == this.khoaChiDinhHienTaiId);
      let phieuDieuTriCoDonThuocId = 0;
      if (lstNgayCoDonThuoc.length > 0) {
        phieuDieuTriCoDonThuocId = lstNgayCoDonThuoc[0].PhieuDieuTriId;
      }
      let lstYear = this.lstYear;
      lstYear.forEach(y => {
        y.Months.forEach(m => {
          m.Days.filter(z => z.KhoaId == this.khoaChiDinhHienTaiId).forEach(d => {
            if (d.PhieuDieuTriId == this.phieuDieuTriHienTaiId) {
              if (dataAll.length > 0) {
                d.CoDonVTYTNoiTru = true;
              }
              else {
                d.CoDonVTYTNoiTru = false;
              }
            }
          });
        });
      });
      lstYear.forEach(y => {
        y.Months.forEach(m => {
          const days = [];
          m.Days.forEach(val => days.push(Object.assign({}, val)));
          m.DayCopies = days.filter(z => z.CoDonVTYTNoiTru);
        });
      });
      self.dialog.open(SaoChepVtytPopupComponent, {
        disableClose: false,
        width: '1000px',
        height: '650px',
        data: {
          lstYear: lstYear,
          lstYearOrderBy: lstNgayCoDonThuoc,
          lstYearOrderByFull: this.lstYearOrderBy,
          yeuCauTiepNhanId: this.yeuCauTiepNhanId,
          phieuDieuTriHienTaiId: this.phieuDieuTriHienTaiId,
          ngayNhapVien: this.ngayNhapVien,
          ngayDieuTriDuocChon: ngayDieuTriDuocChon,
          isCopy: true
        },
      }).afterClosed().subscribe(resData => {
        if (resData == undefined || resData === 'NoAnswer') {

        }
        else if (resData === "OK" || resData === "Confirm" || resData === "CopyApDung") {
          self.notificationService.showSuccess(CommonService.format(SystemMessage.ActionSuccessfully, ["Lưu"]));
          window.location.reload();
        }
        else {
          self.notificationService.showSuccess(CommonService.format(SystemMessage.ActionSuccessfully, ["Lưu"]));
          this.gridVatTu.search();
          this.gridVatTuKhoTong.search();
        }
      });
    }
    else {
      self.notificationService.showError("Các ngày điều trị chưa có đơn VTYT.");
    }
  }
}
