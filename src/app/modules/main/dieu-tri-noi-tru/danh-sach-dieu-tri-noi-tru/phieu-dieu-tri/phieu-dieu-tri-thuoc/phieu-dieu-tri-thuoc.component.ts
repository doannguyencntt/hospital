import { ChangeDetectorRef, Component, EventEmitter, Input, OnInit, Output, SimpleChanges, TemplateRef, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material';
import { ActivatedRoute } from '@angular/router';
import { GroupDescriptor, SortDescriptor } from '@progress/kendo-data-query';
import { ApiService } from 'src/app/core/services/api.service';
import { AuthService } from 'src/app/core/services/auth.service';
import { NotificationService } from 'src/app/core/services/notification.service';
import { GridComponent } from 'src/app/shared/component/grid/grid.component';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import icDelete from '@iconify/icons-ic/twotone-delete';
import icEdit from '@iconify/icons-ic/border-color';
import icArrowUpward from '@iconify/icons-ic/arrow-upward';
import icArrowDownward from '@iconify/icons-ic/arrow-downward';

import { ComboboxComponent } from 'src/app/shared/component/dropdowns/combobox/combobox.component';
import { DuocPhamTonKhos } from 'src/app/modules/main/kham-benh/kham-benh.model';
import { CapNhatKhongTinhPhi, CapNhatKhongTinhPhiTiemHoacTruyen, ChiTietDieuTriNoiTruViewModel, HoanTraThuocVo, InPhieuCongKhaiThuocVatTu, KeToaThuocDieuTriNoiTru, LstYearOrderByModel, NoiTruChiDinhDuocPham, NoiTruChiDinhPhaThuocTiem, NoiTruChiDinhPhaThuocTruyen, ThongTinThuocPhieuDieuTri, YearModel } from '../../../dieu-tri-noi-tru.model';
import { CommonService } from 'src/app/core/utilities/common.helper';
import { SecurityOperation } from 'src/app/shared/enum/security-operation.enum';
import { SystemMessage } from 'src/app/shared/configdata/system-message';
import { ApiError } from 'src/app/shared/models/api-error.model';
import { ConfirmComponent } from 'src/app/shared/component/dialogs/confirm/confirm.component';
import { SuaThuocPopupComponent } from '../sua-thuoc-popup/sua-thuoc-popup.component';
import { parseNumber } from '@progress/kendo-angular-intl';
import { LoadingComponent } from "src/app/shared/component/dialogs/loading/loading.component";
import { EnumLoaiKho } from 'src/app/shared/enum/loai-kho.enum';
import { SuaTruyenDichPopupComponent } from '../sua-truyen-dich-popup/sua-truyen-dich-popup.component';
import { HoanTraThuocPopupComponent } from '../hoan-tra-thuoc-popup/hoan-tra-thuoc-popup.component';
import { PhieuInCongKhaiThuocPopupComponent } from '../phieu-in-cong-khai-thuoc-popup/phieu-in-cong-khai-thuoc-popup.component';
import icUndo from "@iconify/icons-ic/undo";
import icAdd from '@iconify/icons-ic/twotone-add';
import { SuaPhaThuocTiemPopupComponent } from '../sua-pha-thuoc-tiem-popup/sua-pha-thuoc-tiem-popup.component';
import { SuaPhaThuocTruyenPopupComponent } from '../sua-pha-thuoc-truyen-popup/sua-pha-thuoc-truyen-popup.component';
import { ApDungDonThuocCacNgayPopupComponent } from '../ap-dung-don-thuoc-cac-ngay-popup/ap-dung-don-thuoc-cac-ngay-popup.component';
import { SaoChepDonThuocPopupComponent } from '../sao-chep-don-thuoc-popup/sao-chep-don-thuoc-popup.component';
import { ThrowStmt } from '@angular/compiler';

@Component({
  selector: 'app-phieu-dieu-tri-thuoc',
  templateUrl: './phieu-dieu-tri-thuoc.component.html',
  styleUrls: ['./phieu-dieu-tri-thuoc.component.scss']
})
export class PhieuDieuTriThuocComponent implements OnInit {

  documentType: DocumentType = DocumentType.DanhSachDieuTriNoiTru;
  popupLoadingData: any;
  popupSavingData: any = null;
  thongTinDuocPham: DuocPhamTonKhos = new DuocPhamTonKhos();
  keToaNew: KeToaThuocDieuTriNoiTru = new KeToaThuocDieuTriNoiTru();
  keToaEdit: KeToaThuocDieuTriNoiTru = new KeToaThuocDieuTriNoiTru();
  keToaDelete: KeToaThuocDieuTriNoiTru = new KeToaThuocDieuTriNoiTru();

  //THUỐC TIÊM
  keToaThuocTiemNew: NoiTruChiDinhPhaThuocTiem = new NoiTruChiDinhPhaThuocTiem();
  keToaThuocTiemEdit: NoiTruChiDinhPhaThuocTiem = new NoiTruChiDinhPhaThuocTiem();
  keToaThuocTiemDelete: NoiTruChiDinhPhaThuocTiem = new NoiTruChiDinhPhaThuocTiem();
  //THUỐC TRUYỀN
  keToaThuocTruyenNew: NoiTruChiDinhPhaThuocTruyen = new NoiTruChiDinhPhaThuocTruyen();
  keToaThuocTruyenEdit: NoiTruChiDinhPhaThuocTruyen = new NoiTruChiDinhPhaThuocTruyen();
  keToaThuocTruyenDelete: NoiTruChiDinhPhaThuocTruyen = new NoiTruChiDinhPhaThuocTruyen();
  //---------------------------------
  hoanTraThuocVo: HoanTraThuocVo = new HoanTraThuocVo();
  inPhieuCongKhaiThuocVatTu: InPhieuCongKhaiThuocVatTu = new InPhieuCongKhaiThuocVatTu();
  thongTinThuocPhieuDieuTri: ThongTinThuocPhieuDieuTri = new ThongTinThuocPhieuDieuTri();
  capNhatKhongTinhPhi: CapNhatKhongTinhPhi = new CapNhatKhongTinhPhi();
  capNhatKhongTinhPhiTiemHoacTruyen: CapNhatKhongTinhPhiTiemHoacTruyen = new CapNhatKhongTinhPhiTiemHoacTruyen();

  popupAddingData: any = null;
  popupOrderingData: any = null;
  popupDeletingData: any = null;
  icDelete = icDelete;
  icEdit = icEdit;
  icArrowDownward = icArrowDownward;
  icArrowUpward = icArrowUpward;
  // icArrowBack = icArrowBack;
  icUndo = icUndo;
  icAdd = icAdd;
  coThuocBHYT: boolean = false;
  isShowKhoLeThuoc: boolean = false;
  isShowKhoTongThuoc: boolean = false;
  isShowKhoLeDichTruyen: boolean = false;
  isShowKhoTongDichTruyen: boolean = false;
  isShowDichTruyenNgoai: boolean = false;
  isShowThuocNgoai: boolean = false;
  isSelectDuocPham: boolean = false;
  isShowPhaThuocTiem: boolean = false;
  isShowPhaThuocTruyen: boolean = false;
  isShowPhaThuocTiemNgoai: boolean = false;
  isShowPhaThuocTruyenNgoai: boolean = false;
  yeuCauTiepNhanId: number = null;
  thoiGianDonThuocDataSource: any;
  loaiDuocPhamHoacVatTu: number = 1;
  additionString: any = null;
  dataToSumThanhTienKhoLe: any[] = [];
  dataToSumThanhTienKhoTong: any[] = [];
  dataToSumThanhTienKhoLeDichTruyen: any[] = [];
  dataToSumThanhTienKhoTongDichTruyen: any[] = [];
  coThucHienYLenh: boolean = false;
  dataToSumThanhTienPhaThuocTiem: any[] = [];
  dataToSumThanhTienPhaThuocTruyen: any[] = [];
  /// DỊCH TRUYỀN
  thoiGianBDChange: any = null;
  cachGioChange: any = null;
  thoiGianConLai: number = null;
  cachGioMax: number = 9999;
  soLanChange: any = null;
  soLanMax: number = 9999;
  format = "n2";
  // END
  checkAll: boolean = true;
  checkAllDichTruyen: boolean = true;
  sortToaThuoc: SortDescriptor[] = [{
    field: 'SoThuTu',
    dir: 'asc'
  }];

  laKhoaKhamBenhChiDinh: boolean = true;
  public totalThanhTienKhoLe(field: any) {
    switch (field) {
      case 'ThanhTien':
        let thanhTienKhoLe = null;
        if (this.dataToSumThanhTienKhoLe != undefined && this.dataToSumThanhTienKhoLe != null) {
          this.dataToSumThanhTienKhoLe.forEach((element: { ThanhTiens: any[]; }) => {
            element.ThanhTiens.forEach((tt: any) => {
              thanhTienKhoLe += tt;
            });
          });
        }
        return thanhTienKhoLe;
    }
  };

  public totalThanhTienKhoTong(field: any) {
    switch (field) {
      case 'ThanhTien':
        let thanhTienKhoLe = null;
        if (this.dataToSumThanhTienKhoTong != undefined && this.dataToSumThanhTienKhoTong != null) {
          this.dataToSumThanhTienKhoTong.forEach((element: { ThanhTiens: any[]; }) => {
            element.ThanhTiens.forEach((tt: any) => {
              thanhTienKhoLe += tt;
            });
          });
        }
        return thanhTienKhoLe;
    }
  };

  // DỊCH TRUYỀN

  public totalThanhTienKhoLeDichTruyen(field: any) {
    switch (field) {
      case 'ThanhTien':
        let thanhTienKhoLe = null;
        if (this.dataToSumThanhTienKhoLeDichTruyen != undefined && this.dataToSumThanhTienKhoLeDichTruyen != null) {
          this.dataToSumThanhTienKhoLeDichTruyen.forEach((element: { ThanhTiens: any[]; }) => {
            element.ThanhTiens.forEach((tt: any) => {
              thanhTienKhoLe += tt;
            });
          });
        }
        return thanhTienKhoLe;

    }
  };

  public totalThanhTienKhoTongDichTruyen(field: any) {
    switch (field) {
      case 'ThanhTien':
        let thanhTienKhoLe = null;
        if (this.dataToSumThanhTienKhoTongDichTruyen != undefined && this.dataToSumThanhTienKhoTongDichTruyen != null) {
          this.dataToSumThanhTienKhoTongDichTruyen.forEach((element: { ThanhTiens: any[]; }) => {
            element.ThanhTiens.forEach((tt: any) => {
              thanhTienKhoLe += tt;
            });
          });
        }
        return thanhTienKhoLe;
    }
  };

  //THUỐC TIÊM

  public totalThanhTienPhaThuocTiem(field: any) {
    switch (field) {
      case 'ThanhTien':
        let thanhTienPhaThuocTiem = null;
        if (this.dataToSumThanhTienPhaThuocTiem != undefined && this.dataToSumThanhTienPhaThuocTiem != null) {
          this.dataToSumThanhTienPhaThuocTiem.forEach((element: { ThanhTiens: any[]; }) => {
            element.ThanhTiens.forEach((tt: any) => {
              thanhTienPhaThuocTiem += tt;
            });
          });
        }
        return thanhTienPhaThuocTiem;

    }
  };

  //THUỐC TRUYỀN

  public totalThanhTienPhaThuocTruyen(field: any) {
    switch (field) {
      case 'ThanhTien':
        let thanhTienPhaThuocTiem = null;
        if (this.dataToSumThanhTienPhaThuocTruyen != undefined && this.dataToSumThanhTienPhaThuocTruyen != null) {
          this.dataToSumThanhTienPhaThuocTruyen.forEach((element: { ThanhTiens: any[]; }) => {
            element.ThanhTiens.forEach((tt: any) => {
              thanhTienPhaThuocTiem += tt;
            });
          });
        }
        return thanhTienPhaThuocTiem;

    }
  };


  validationErrors: any;
  validationErrorsTiem: any;
  validationErrorsTruyen: any;


  gridThuocKhoLeColumns: any[] = [];
  gridThuocKhoTongColumns: any[] = [];
  gridTruyenDichKhoLeColumns: any[] = [];
  gridTruyenDichKhoTongColumns: any[] = [];

  gridThuocNgoaiColumns: any[] = [];
  gridTruyenDichNgoaiColumns: any[] = [];

  gridThuocTiemColumns: any[] = [];
  gridThuocTruyenColumns: any[] = [];

  gridThuocTiemNgoaiBVColumns: any[] = [];
  gridThuocTruyenNgoaiColumns: any[] = [];

  groups: GroupDescriptor[] = [{ field: ' ', aggregates: [{ field: 'ThanhTien', aggregate: 'sum' }] }];
  @ViewChild('gridDichTruyen', { static: false }) gridDichTruyen: GridComponent;
  @ViewChild('gridDichTruyenKhoTong', { static: false }) gridDichTruyenKhoTong: GridComponent;
  @ViewChild('gridThuocNgoai', { static: false }) gridThuocNgoai: GridComponent;
  @ViewChild('gridTruyenDichNgoai', { static: false }) gridTruyenDichNgoai: GridComponent;
  @ViewChild('gridThuocTiem', { static: false }) gridThuocTiem: GridComponent;
  @ViewChild('gridThuocTruyen', { static: false }) gridThuocTruyen: GridComponent;
  @ViewChild('gridThuocTiemNgoaiBV', { static: false }) gridThuocTiemNgoaiBV: GridComponent;
  @ViewChild('gridThuocTruyenNgoaiBV', { static: false }) gridThuocTruyenNgoaiBV: GridComponent;
  @ViewChild('gridThuocKhoLe', { static: false }) gridThuocKhoLe: GridComponent;


  @ViewChild('actionTemplate', { static: true }) actionTemplate: TemplateRef<any>;
  @ViewChild('actionThuocTiemTemplate', { static: true }) actionThuocTiemTemplate: TemplateRef<any>;
  @ViewChild('actionThuocTruyenTemplate', { static: true }) actionThuocTruyenTemplate: TemplateRef<any>;
  @ViewChild('nhomGroupHeaderTemplate', { static: true }) nhomGroupHeaderTemplate: TemplateRef<any>;
  @ViewChild('isFocus', { static: false }) isFocus: ComboboxComponent;

  ////////////////THUỐC
  //Thành tiền đơn giá
  @ViewChild('donGiaFooterTemplate', { static: true }) donGiaFooterTemplate: TemplateRef<any>;
  @ViewChild('donGiaTemplate', { static: true }) donGiaTemplate: TemplateRef<any>;
  @ViewChild('donGiaGroupFooterTemplate', { static: true }) donGiaGroupFooterTemplate: TemplateRef<any>;
  @ViewChild('thanhTienTemplate', { static: true }) thanhTienTemplate: TemplateRef<any>;
  @ViewChild('thanhTienFooterTemplate', { static: true }) thanhTienFooterTemplate: TemplateRef<any>;
  @ViewChild('thanhTienGroupFooterTemplate', { static: true }) thanhTienGroupFooterTemplate: TemplateRef<any>;
  @ViewChild('thanhTienPTTGroupFooterTemplate', { static: true }) thanhTienPTTGroupFooterTemplate: TemplateRef<any>;
  @ViewChild('thanhTienPTTruyenGroupFooterTemplate', { static: true }) thanhTienPTTruyenGroupFooterTemplate: TemplateRef<any>;


  //end Thành tiền  đơn giá

  //Thành tiền đơn giá kho tổng
  @ViewChild('donGiaKhoTongFooterTemplate', { static: true }) donGiaKhoTongFooterTemplate: TemplateRef<any>;
  @ViewChild('donGiaKhoTongTemplate', { static: true }) donGiaKhoTongTemplate: TemplateRef<any>;
  @ViewChild('donGiaKhoTongGroupFooterTemplate', { static: true }) donGiaKhoTongGroupFooterTemplate: TemplateRef<any>;
  @ViewChild('thanhTienKhoTongTemplate', { static: true }) thanhTienKhoTongTemplate: TemplateRef<any>;
  @ViewChild('thanhTienKhoTongFooterTemplate', { static: true }) thanhTienKhoTongFooterTemplate: TemplateRef<any>;
  @ViewChild('thanhTienKhoTongGroupFooterTemplate', { static: true }) thanhTienKhoTongGroupFooterTemplate: TemplateRef<any>;
  //end Thành tiền  đơn giá

  ////////////////DỊCH TRUYỀN
  //Thành tiền đơn giá
  @ViewChild('donGiaDichTruyenFooterTemplate', { static: true }) donGiaDichTruyenFooterTemplate: TemplateRef<any>;
  @ViewChild('donGiaDichTruyenTemplate', { static: true }) donGiaDichTruyenTemplate: TemplateRef<any>;
  @ViewChild('donGiaDichTruyenGroupFooterTemplate', { static: true }) donGiaDichTruyenGroupFooterTemplate: TemplateRef<any>;
  @ViewChild('thanhTienDichTruyenTemplate', { static: true }) thanhTienDichTruyenTemplate: TemplateRef<any>;
  @ViewChild('thanhTienDichTruyenFooterTemplate', { static: true }) thanhTienDichTruyenFooterTemplate: TemplateRef<any>;
  @ViewChild('thanhTienDichTruyenGroupFooterTemplate', { static: true }) thanhTienDichTruyenGroupFooterTemplate: TemplateRef<any>;
  //end Thành tiền  đơn giá

  //Thành tiền đơn giá kho tổng
  @ViewChild('donGiaKhoTongDichTruyenFooterTemplate', { static: true }) donGiaKhoTongDichTruyenFooterTemplate: TemplateRef<any>;
  @ViewChild('donGiaKhoTongDichTruyenTemplate', { static: true }) donGiaKhoTongDichTruyenTemplate: TemplateRef<any>;
  @ViewChild('donGiaKhoTongDichTruyenGroupFooterTemplate', { static: true }) donGiaKhoTongDichTruyenGroupFooterTemplate: TemplateRef<any>;
  @ViewChild('thanhTienKhoTongDichTruyenTemplate', { static: true }) thanhTienKhoTongDichTruyenTemplate: TemplateRef<any>;
  @ViewChild('thanhTienKhoTongDichTruyenFooterTemplate', { static: true }) thanhTienKhoTongDichTruyenFooterTemplate: TemplateRef<any>;
  @ViewChild('thanhTienPTTFooterTemplate', { static: true }) thanhTienPTTFooterTemplate: TemplateRef<any>;
  @ViewChild('thanhTienPTTruyenFooterTemplate', { static: true }) thanhTienPTTruyenFooterTemplate: TemplateRef<any>;


  @ViewChild('thanhTienKhoTongDichTruyenGroupFooterTemplate', { static: true }) thanhTienKhoTongDichTruyenGroupFooterTemplate: TemplateRef<any>;
  //end Thành tiền  đơn giá


  @ViewChild('checkBoxTemplate', { static: true }) checkBoxTemplate: TemplateRef<any>;
  @ViewChild('checkBoxPTTiemTemplate', { static: true }) checkBoxPTTiemTemplate: TemplateRef<any>;
  @ViewChild('checkBoxPTTruyenTemplate', { static: true }) checkBoxPTTruyenTemplate: TemplateRef<any>;


  @ViewChild('sangTemplate', { static: true }) sangTemplate: TemplateRef<any>;
  @ViewChild('truaTemplate', { static: true }) truaTemplate: TemplateRef<any>;
  @ViewChild('chieuTemplate', { static: true }) chieuTemplate: TemplateRef<any>;
  @ViewChild('toiTemplate', { static: true }) toiTemplate: TemplateRef<any>;
  @ViewChild('lieuDungTemplate', { static: true }) lieuDungTemplate: TemplateRef<any>;

  @ViewChild('actionKhoTongTemplate', { static: true }) actionKhoTongTemplate: TemplateRef<any>;
  @ViewChild('gridThuocKhoTong', { static: false }) gridThuocKhoTong: GridComponent;
  @ViewChild('trangThaiTemplate', { static: true }) trangThaiTemplate: TemplateRef<any>;
  @ViewChild('checkBoxInTemplate', { static: true }) checkBoxInTemplate: TemplateRef<any>;
  @ViewChild('checkBoxHeaderTemplate', { static: true }) checkBoxHeaderTemplate: TemplateRef<any>;

  @ViewChild('checkBoxInDichTruyenTemplate', { static: true }) checkBoxInDichTruyenTemplate: TemplateRef<any>;
  @ViewChild('checkBoxHeaderDichTruyenTemplate', { static: true }) checkBoxHeaderDichTruyenTemplate: TemplateRef<any>;
  @ViewChild('SLTemplate', { static: true }) SLTemplate: TemplateRef<any>;
  @Input() lstYear: Array<YearModel> = new Array<YearModel>();
  @Input() lstYearOrderBy: LstYearOrderByModel[] = new Array<LstYearOrderByModel>();
  @Input() khoaChiDinh: any;
  @Input() phieuDieuTriHienTaiId: any;
  @Input() dataBenhNhan: any;
  @Input() dieuTriNoiTruModel: ChiTietDieuTriNoiTruViewModel;
  @Output() disabledInPhieu: EventEmitter<any> = new EventEmitter<any>();

  constructor(private dialog: MatDialog,
    private ref: ChangeDetectorRef,
    private authService: AuthService,
    private apiService: ApiService,
    private notificationService: NotificationService) { }

  ngOnInit() {
    const id: number = this.dieuTriNoiTruModel.Id;
    this.checkAll = true;
    this.checkAllDichTruyen = true;
    // console.log("khoaChiDinh", this.khoaChiDinh)
    // console.log("dieuTriNoiTruModel", this.dieuTriNoiTruModel.Khoa)
    if (this.khoaChiDinh === this.dieuTriNoiTruModel.Khoa) {
      this.laKhoaKhamBenhChiDinh = true;
    }
    else {
      this.laKhoaKhamBenhChiDinh = false;
    }

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
    this.keToaNew.KhongTinhPhi = true;
    this.keToaThuocTiemNew.KhongTinhPhi = true;
    this.keToaThuocTruyenNew.KhongTinhPhi = true;
    this.keToaNew.KhuVuc = 1;
    this.getThoiGianDonThuoc();

    this.gridThuocKhoTongColumns = [
      // { Field: 'CheckBox', Title: '', Width: 50, Sortable: false, Template: this.checkBoxInTemplate, TemplateHeader: this.checkBoxHeaderTemplate },
      { Field: "Action", Title: "", Width: 150, Sortable: false, Template: this.actionKhoTongTemplate, Hidden: this.dataBenhNhan.KetThucBenhAn },
      { Field: "SoThuTu", Title: "#", Width: 30, Sortable: true },
      { Field: "Ma", Title: "Mã", Width: 50, Sortable: false, ShowTooltip: true },
      { Field: "Ten", Title: "Tên", Width: 200, Sortable: false, ShowTooltip: true },
      { Field: "HoatChat", Title: "Hoạt Chất", Width: 100, Sortable: false, ShowTooltip: true },
      { Field: "SoLuong", Title: "SL", Width: 40, Sortable: false, Template: this.SLTemplate },
      { Field: "DVT", Title: "ĐVT", Width: 50, Sortable: false },
      { Field: "TenDuongDung", Title: "Đ.Dùng", Width: 50, Sortable: false, ShowTooltip: true },
      { Field: "KhongTinhPhi", Title: "Tính phí", Width: 35, Template: this.checkBoxTemplate },
      { Field: "DungSang", Title: "Sáng", Width: 50, Sortable: false, Template: this.sangTemplate },
      { Field: "DungTrua", Title: "Trưa", Width: 50, Sortable: false, Template: this.truaTemplate },
      { Field: "DungChieu", Title: "Chiều", Width: 50, Sortable: false, Template: this.chieuTemplate },
      { Field: "DungToi", Title: "Tối", Width: 50, Sortable: false, Template: this.toiTemplate },
      { Field: "TenKho", Title: "Tên Kho", Width: 50, Sortable: false, ShowTooltip: true },
      { Field: "Nhom", Title: "Là BHYT", Width: 50, Sortable: false, ShowTooltip: true },
      { Field: "LoaiKhoDisplay", Title: "Loại Kho", Width: 50, Sortable: false, ShowTooltip: true },
      { Field: "TenNhanVienChiDinh", Title: "Người chỉ định", Width: 50, Sortable: false, ShowTooltip: true },
      { Field: "ThoiDiemChiDinhDisplay", Title: "Thời gian chỉ định", Width: 50, Sortable: false, ShowTooltip: true },
      { Field: "DonGia", Title: "Đơn Giá", Width: 70, Sortable: false, TemplateFooter: this.donGiaKhoTongFooterTemplate, Template: this.donGiaKhoTongTemplate, TemplateGroupFooter: this.donGiaKhoTongGroupFooterTemplate },
      { Field: "ThanhTien", Title: "T.Tiền", Width: 90, Sortable: false, Template: this.thanhTienKhoTongTemplate, TemplateFooter: this.thanhTienKhoTongFooterTemplate, TemplateGroupFooter: this.thanhTienKhoTongGroupFooterTemplate },
      { Field: "GioSuDung", Title: "Giờ sử dụng", Width: 50, Sortable: false, ShowTooltip: true },
      { Field: "SoLanTrenVien", Title: "Lần/viên", Width: 50, Sortable: false, ShowTooltip: true },
      { Field: "SoLanTrenNgay", Title: "Liều Dùng", Width: 50, Sortable: false, Template: this.lieuDungTemplate },
      { Field: "GhiChu", Title: "Cách Dùng", Width: 50, Sortable: false, ShowTooltip: true },
      { Field: "TuongTacThuoc", Title: "Tương Tác Thuốc", Width: 50, Sortable: false },
      { Field: "DiUngThuocDisplay", Title: "Dị Ứng Thuốc", Width: 50, Sortable: false },
      { Field: "TinhTrangDisplay", Title: "Tình trạng", Width: 50, Sortable: false, ShowTooltip: true },
      { Field: "PhieuLinh", Title: "Phiếu lĩnh", Width: 50, Sortable: false, ShowTooltip: true },
      { Field: "PhieuXuat", Title: "Phiếu xuất", Width: 50, Sortable: false, ShowTooltip: true },
    ];

    this.gridTruyenDichKhoTongColumns = [
      // { Field: 'CheckBox', Title: '', Width: 50, Sortable: false, Template: this.checkBoxInDichTruyenTemplate, TemplateHeader: this.checkBoxHeaderDichTruyenTemplate },
      { Field: "Action", Title: "", Width: 150, Sortable: false, Template: this.actionKhoTongTemplate, Hidden: this.dataBenhNhan.KetThucBenhAn },
      { Field: "SoThuTu", Title: "#", Width: 30, Sortable: true },
      { Field: "Ma", Title: "Mã", Width: 50, Sortable: false, ShowTooltip: true },
      { Field: "Ten", Title: "Tên", Width: 200, Sortable: false, ShowTooltip: true },
      { Field: "HoatChat", Title: "Hoạt Chất", Width: 100, Sortable: false, ShowTooltip: true },
      { Field: "SoLuong", Title: "SL(/ml)", Width: 40, Sortable: false, Template: this.SLTemplate },
      { Field: "DVT", Title: "ĐVT", Width: 50, Sortable: false },
      { Field: "TenDuongDung", Title: "Đ.Dùng", Width: 50, Sortable: false, ShowTooltip: true },
      { Field: "KhongTinhPhi", Title: "Tính phí", Width: 35, Template: this.checkBoxTemplate },
      { Field: "TenKho", Title: "Tên Kho", Width: 50, Sortable: false, ShowTooltip: true },
      { Field: "Nhom", Title: "Là BHYT", Width: 50, Sortable: false, ShowTooltip: true },
      { Field: "LoaiKhoDisplay", Title: "Loại Kho", Width: 50, Sortable: false, ShowTooltip: true },
      { Field: "TenNhanVienChiDinh", Title: "Người chỉ định", Width: 50, Sortable: false, ShowTooltip: true },
      { Field: "ThoiDiemChiDinhDisplay", Title: "Thời gian chỉ định", Width: 50, Sortable: false, ShowTooltip: true },
      { Field: "DonGia", Title: "Đơn Giá", Width: 70, Sortable: false, TemplateFooter: this.donGiaKhoTongDichTruyenFooterTemplate, Template: this.donGiaKhoTongDichTruyenTemplate, TemplateGroupFooter: this.donGiaKhoTongDichTruyenGroupFooterTemplate },
      { Field: "ThanhTien", Title: "T.Tiền", Width: 90, Sortable: false, Template: this.thanhTienKhoTongDichTruyenTemplate, TemplateFooter: this.thanhTienKhoTongDichTruyenFooterTemplate, TemplateGroupFooter: this.thanhTienKhoTongDichTruyenGroupFooterTemplate },
      { Field: "GioSuDung", Title: "Giờ sử dụng", Width: 50, Sortable: false, ShowTooltip: true },
      { Field: "SoLanTrenMui", Title: "Lần/mũi", Width: 50, Sortable: false, ShowTooltip: true },
      { Field: "TheTich", Title: "Thể tích(ml)", Width: 30, Sortable: false },
      { Field: "TocDoTruyen", Title: "Tốc độ truyền", Width: 30, Sortable: false },
      { Field: "DonViTocDoTruyenDisplay", Title: "Đơn vị tốc độ truyền", Width: 50, Sortable: false },
      { Field: "SoLanTrenNgay", Title: "Liều Dùng", Width: 50, Sortable: false, Template: this.lieuDungTemplate },
      { Field: "GhiChu", Title: "Cách Dùng", Width: 50, Sortable: false, ShowTooltip: true },
      { Field: "TuongTacThuoc", Title: "Tương Tác Thuốc", Width: 50, Sortable: false },
      { Field: "DiUngThuoc", Title: "Dị Ứng Thuốc", Width: 50, Sortable: false },
      { Field: "TinhTrangDisplay", Title: "Tình trạng", Width: 50, Sortable: false, ShowTooltip: true },
      { Field: "PhieuLinh", Title: "Phiếu lĩnh", Width: 50, Sortable: false, ShowTooltip: true },
      { Field: "PhieuXuat", Title: "Phiếu xuất", Width: 50, Sortable: false, ShowTooltip: true },
    ];

    this.gridThuocNgoaiColumns = [
      { Field: "Action", Title: "", Width: 80, Sortable: false, Template: this.actionTemplate, Hidden: this.dataBenhNhan.KetThucBenhAn },
      // { Field: "STT", Title: "#", Width: 20, Sortable: false },
      { Field: "Ma", Title: "Mã", Width: 50, Sortable: false, ShowTooltip: true },
      { Field: "Ten", Title: "Tên", Width: 50, Sortable: false, ShowTooltip: true },
      { Field: "HoatChat", Title: "Hoạt Chất", Width: 50, Sortable: false, ShowTooltip: true },
      { Field: "DVT", Title: "ĐVT", Width: 50, Sortable: false },
      { Field: "TenNhanVienChiDinh", Title: "Người chỉ định", Width: 50, Sortable: false, ShowTooltip: true },
      { Field: "ThoiDiemChiDinhDisplay", Title: "Thời gian chỉ định", Width: 50, Sortable: false, ShowTooltip: true },
      { Field: "SoLuong", Title: "SL", Width: 30, Sortable: false },
      { Field: "DungSang", Title: "Sáng", Width: 50, Sortable: false, Template: this.sangTemplate },
      { Field: "DungTrua", Title: "Trưa", Width: 50, Sortable: false, Template: this.truaTemplate },
      { Field: "DungChieu", Title: "Chiều", Width: 50, Sortable: false, Template: this.chieuTemplate },
      { Field: "DungToi", Title: "Tối", Width: 50, Sortable: false, Template: this.toiTemplate },
      { Field: "TenDuongDung", Title: "Đ.Dùng", Width: 50, Sortable: false },
      { Field: "SoLanDungTrongNgay", Title: "Liều Dùng", Width: 50, Sortable: false, Template: this.lieuDungTemplate },
      { Field: "GhiChu", Title: "Cách Dùng", Width: 50, Sortable: false, ShowTooltip: true },
      { Field: "TuongTacThuoc", Title: "Tương Tác Thuốc", Width: 50, Sortable: false },
      { Field: "DiUngThuocDisplay", Title: "Dị Ứng Thuốc", Width: 50, Sortable: false },
    ];

    this.gridTruyenDichNgoaiColumns = [
      { Field: "Action", Title: "", Width: 80, Sortable: false, Template: this.actionKhoTongTemplate, Hidden: this.dataBenhNhan.KetThucBenhAn },
      // { Field: "STT", Title: "#", Width: 20, Sortable: false },
      { Field: "Ma", Title: "Mã", Width: 50, Sortable: false, ShowTooltip: true },
      { Field: "Ten", Title: "Tên", Width: 50, Sortable: false, ShowTooltip: true },
      { Field: "HoatChat", Title: "Hoạt Chất", Width: 50, Sortable: false, ShowTooltip: true },
      { Field: "DVT", Title: "ĐVT", Width: 50, Sortable: false },
      { Field: "TenNhanVienChiDinh", Title: "Người chỉ định", Width: 50, Sortable: false, ShowTooltip: true },
      { Field: "ThoiDiemChiDinhDisplay", Title: "Thời gian chỉ định", Width: 50, Sortable: false, ShowTooltip: true },
      { Field: "SoLuong", Title: "SL", Width: 30, Sortable: false },
      { Field: "TheTich", Title: "Thể tích(ml)", Width: 30, Sortable: false },
      { Field: "TenDuongDung", Title: "Đ.Dùng", Width: 50, Sortable: false },
      { Field: "GhiChu", Title: "Cách Dùng", Width: 50, Sortable: false, ShowTooltip: true },
      { Field: "TuongTacThuoc", Title: "Tương Tác Thuốc", Width: 50, Sortable: false },
      { Field: "DiUngThuoc", Title: "Dị Ứng Thuốc", Width: 50, Sortable: false },
      { Field: "TocDoTruyen", Title: "Tốc độ truyền", Width: 30, Sortable: false },
      { Field: "DonViTocDoTruyenDisplay", Title: "Đơn vị tốc độ truyền", Width: 50, Sortable: false },
      { Field: "GioSuDung", Title: "Giờ sử dụng", Width: 50, Sortable: false, ShowTooltip: true },
    ];

    this.kiemTraPhieuDieuTriTheoKhoaChiDinh(this.yeuCauTiepNhanId, this.phieuDieuTriHienTaiId);
    this.noiTruChiDinhDuocPhamTiemMacDinh();
    this.noiTruChiDinhDuocPhamTruyenMacDinh();
    this.getNgayDieuTri(this.yeuCauTiepNhanId);
    this.getNgayNhapVien(this.yeuCauTiepNhanId);

  }


  ngOnChanges(changes: SimpleChanges) {
    if (changes['phieuDieuTriHienTaiId'] && changes['phieuDieuTriHienTaiId'].previousValue != null && changes['phieuDieuTriHienTaiId'].previousValue != changes['phieuDieuTriHienTaiId'].currentValue) {
      this.getThoiGianDonThuoc();
      this.checkAll = true;
      this.checkAllDichTruyen = true;
      if (this.dataBenhNhan.CoBHYT == true) {
        this.keToaNew.LaDuocPhamBHYT = 2;
      }
      else if (this.dataBenhNhan.CoBHYT != true) {
        this.keToaNew.LaDuocPhamBHYT = 1;
      }
      this.phieuDieuTriHienTaiId = changes.phieuDieuTriHienTaiId.currentValue;
      this.additionString = this.yeuCauTiepNhanId + ";" + this.phieuDieuTriHienTaiId;
      this.kiemTraPhieuDieuTriTheoKhoaChiDinh(this.yeuCauTiepNhanId, this.phieuDieuTriHienTaiId);

      this.gridThuocKhoTong._additionalSearchString = this.additionString;
      this.gridThuocKhoTong.search();

      this.gridDichTruyenKhoTong._additionalSearchString = this.additionString;
      this.gridDichTruyenKhoTong.search();

      this.gridThuocNgoai._additionalSearchString = this.additionString;
      this.gridThuocNgoai.search();

      this.gridTruyenDichNgoai._additionalSearchString = this.additionString;
      this.gridTruyenDichNgoai.search();

      this.clearDuocPhamTheoKhuVuc();
    }
  }

  noiTruChiDinhDuocPhamTruyenMacDinh() {
    this.validationErrorsTiem = [];
    let noiTruChiDinhDuocPham1 = new NoiTruChiDinhDuocPham()
    if (this.dataBenhNhan.CoBHYT == true) {
      noiTruChiDinhDuocPham1.LaDuocPhamBHYT = 2;
    }
    else if (this.dataBenhNhan.CoBHYT != true) {
      noiTruChiDinhDuocPham1.LaDuocPhamBHYT = 1;
    }
    let noiTruChiDinhDuocPham2 = new NoiTruChiDinhDuocPham()
    if (this.dataBenhNhan.CoBHYT == true) {
      noiTruChiDinhDuocPham2.LaDuocPhamBHYT = 2;
    }
    else if (this.dataBenhNhan.CoBHYT != true) {
      noiTruChiDinhDuocPham2.LaDuocPhamBHYT = 1;
    }
    this.keToaThuocTruyenNew.NoiTruChiDinhDuocPhams.push(noiTruChiDinhDuocPham1);
    this.keToaThuocTruyenNew.NoiTruChiDinhDuocPhams.push(noiTruChiDinhDuocPham2);
  }

  noiTruChiDinhDuocPhamTiemMacDinh() {
    this.validationErrorsTiem = [];
    let noiTruChiDinhDuocPham1 = new NoiTruChiDinhDuocPham()
    if (this.dataBenhNhan.CoBHYT == true) {
      noiTruChiDinhDuocPham1.LaDuocPhamBHYT = 2;
    }
    else if (this.dataBenhNhan.CoBHYT != true) {
      noiTruChiDinhDuocPham1.LaDuocPhamBHYT = 1;
    }
    let noiTruChiDinhDuocPham2 = new NoiTruChiDinhDuocPham()
    if (this.dataBenhNhan.CoBHYT == true) {
      noiTruChiDinhDuocPham2.LaDuocPhamBHYT = 2;
    }
    else if (this.dataBenhNhan.CoBHYT != true) {
      noiTruChiDinhDuocPham2.LaDuocPhamBHYT = 1;
    }
    this.keToaThuocTiemNew.NoiTruChiDinhDuocPhams.push(noiTruChiDinhDuocPham1);
    this.keToaThuocTiemNew.NoiTruChiDinhDuocPhams.push(noiTruChiDinhDuocPham2);
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
      () => {
      });
  }

  getThoiGianDonThuoc() {
    this.apiService.get<Array<string>>("KhamBenh/ThoiGianDonThuoc").subscribe(
      resultData => {
        this.thoiGianDonThuocDataSource = resultData;
      }
    )
  }

  onKey(event: any) {
    if (event.key == "Enter") {
      if (this.isSelectDuocPham != true) {
        if (this.keToaNew.KhuVuc == 1) {
          if (!this.keToaThuocTiemNew.LaThuocTiem && !this.keToaThuocTiemNew.LaThuocTruyen) {
            this.themDuocPham();
          }
          else if (this.keToaThuocTiemNew.LaThuocTiem) {
            this.themThuocTiems();
          } else if (this.keToaThuocTiemNew.LaThuocTruyen) {
            this.themThuocTruyens();
          }
        }
        else {
          if (!this.keToaThuocTiemNew.LaThuocTiem && !this.keToaThuocTiemNew.LaThuocTruyen) {
            this.themThuocHoacDichTruyenNgoai();
          }
          else if (this.keToaThuocTiemNew.LaThuocTiem) {
            this.themThuocTiemNgoais();
          } else if (this.keToaThuocTiemNew.LaThuocTruyen) {
            this.themThuocTruyenNgoais();
          }
        }
        this.onkeyFocus();
      }
      else {
        this.isSelectDuocPham = false;
      }
    }
  }

  onDataBoundChild(data: any) {
    this.dataToSumThanhTienKhoLe = data.Data;
    if (data != undefined && data.Data.length > 0) {
      this.isShowKhoLeThuoc = true;
    }
    else {
      this.isShowKhoLeThuoc = false;
    }
  }

  onDataBoundChildKhoTong(event: any) {
    var self = this;
    self.coThuocBHYT = false;
    if (event != undefined && event != null) {
      self.dataToSumThanhTienKhoTong = event.Data;
      //self.closePopupLoadingData();
      for (let i = 0; i < event.Data.length; i++) {
        if (event.Data[i].LaDuocPhamBHYT == true) {
          self.coThuocBHYT = true;
          break;
        }
      }
      if (event.Data.length > 0) {
        self.isShowKhoTongThuoc = true;
      }
      else {
        self.isShowKhoTongThuoc = false;
      }
    }
    for (let i = 0; i < self.lstYearOrderBy.length; i++) {
      if (self.lstYearOrderBy[i].PhieuDieuTriId == self.phieuDieuTriHienTaiId) {
        if (event.Data.length > 0) {
          self.lstYearOrderBy[i].CoDonThuocNoiTru = true;
          break;
        }
        else {
          self.lstYearOrderBy[i].CoDonThuocNoiTru = false;
          break;
        }
      }
    }
    // var self = this;
    // setTimeout(function () {
    //   self.closePopupLoadingData();
    // }, 15000);

  }

  onDataBoundChildKhoTongDichTruyen(event: any) {
    if (event != undefined && event != null) {
      this.dataToSumThanhTienKhoTongDichTruyen = event.Data;
      if (event.Data.length > 0) {
        this.isShowKhoTongDichTruyen = true;
        //self.closePopupLoadingData();
      }
      else {
        this.isShowKhoTongDichTruyen = false;
      }
    }
    // var self = this;
    // setTimeout(function () {
    //   self.closePopupLoadingData();
    // }, 15000);

  }


  chonKho(dataItem: any) {
    // console.log("dataItem: ", dataItem)
    if (dataItem != undefined && dataItem != null) {
      this.keToaNew.LoaiKho = dataItem.LoaiKho;
    } else {
      this.keToaNew.LoaiKho = null;
    }
    this.clearDuocPham();
  }

  chonDuoc(duocPhamBenhVien: any) {
    console.log("duocPhamBenhVien :", duocPhamBenhVien)
    if (duocPhamBenhVien != undefined && duocPhamBenhVien != null) {
      this.thongTinThuocPhieuDieuTri.YeuCauTiepNhanId = this.yeuCauTiepNhanId;
      this.thongTinThuocPhieuDieuTri.DuocPhamBenhVienId = duocPhamBenhVien.KeyId;
      this.thongTinThuocPhieuDieuTri.NoiTruPhieuDieuTriId = this.phieuDieuTriHienTaiId;
      this.thongTinThuocPhieuDieuTri.KhuVuc = this.keToaNew.KhuVuc;
      if (this.keToaNew.KhuVuc == 1) {
        this.thongTinThuocPhieuDieuTri.KhoId = this.keToaNew.KhoId;
        this.thongTinThuocPhieuDieuTri.LoaiDuocPham = this.keToaNew.LaDuocPhamBHYT;
      }
      else {
        this.thongTinThuocPhieuDieuTri.KhoId = 0;
        this.thongTinThuocPhieuDieuTri.LoaiDuocPham = 0;
      }
      this.keToaNew.TheTich = duocPhamBenhVien.TheTich;
      this.apiService.post<any>("DieuTriNoiTru/ThongTinDuocPham", this.thongTinThuocPhieuDieuTri).subscribe(
        resultData => {
          if (resultData != null) {
            this.thongTinDuocPham = resultData;
          }
        });
    } else {
      this.clearDuocPham();
    }
  }

  themDuocPham() {
    var self = this;
    self.keToaNew.YeuCauTiepNhanId = self.yeuCauTiepNhanId;
    self.keToaNew.Id = self.phieuDieuTriHienTaiId;
    self.keToaNew.PhieuDieuTriHienTaiId = self.phieuDieuTriHienTaiId;


    self.validationErrors = null;
    self.ref.detectChanges();
    if (self.keToaNew.LaDichTruyen == true) {
      if (self.thongTinDuocPham.FlagDichDaKe == true
        && self.thongTinDuocPham.FlagDichDaKeTrungKho == true
        && self.keToaNew.SoLuong != 0
        && self.keToaNew.SoLuong != null
        && self.keToaNew.LoaiKho != EnumLoaiKho.KhoLe) {
        self.notificationService.showError("Dịch truyền này đã kê trong đơn thuốc (trùng kho).");
      }
      else if (self.thongTinDuocPham.FlagDichDaKe == true) {
        self.dialog.open(ConfirmComponent, {
          disableClose: false,
          width: '500px',
          data: { Title: "Cảnh báo", Message: "Dịch truyền này đã kê trong đơn thuốc, bạn có muốn thêm dịch truyền này không ?" }
        }).afterClosed().subscribe(result => {
          if (result == "Yes") {
            self.themThuoc();
          }
          else {
            self.clearDuocPham();
          }
        });
      } else {
        self.themThuoc();
      }
    } else {

      if (self.thongTinDuocPham.FlagThuocDaKe == true
        && self.thongTinDuocPham.FlagThuocDaKeTrungKho == true
        && self.keToaNew.SoLuong != 0
        && self.keToaNew.SoLuong != null
        && self.keToaNew.LoaiKho != EnumLoaiKho.KhoLe) {
        self.notificationService.showError("Thuốc này đã kê trong đơn thuốc (trùng kho).");
      }
      else if (self.thongTinDuocPham.FlagThuocDaKe == true) {
        self.dialog.open(ConfirmComponent, {
          disableClose: false,
          width: '500px',
          data: { Title: "Cảnh báo", Message: "Thuốc này đã kê trong đơn thuốc, bạn có muốn thêm thuốc này không ?" }
        }).afterClosed().subscribe(result => {
          if (result == "Yes") {
            self.themThuoc();
          }
          else {
            self.clearDuocPham();
          }
        });
      } else {
        self.themThuoc();
      }
    }

  }

  themThuocHoacDichTruyenNgoai() {
    var self = this;
    self.keToaNew.YeuCauTiepNhanId = self.yeuCauTiepNhanId;
    self.keToaNew.Id = 0;
    self.keToaNew.PhieuDieuTriHienTaiId = self.phieuDieuTriHienTaiId;
    self.validationErrors = null;
    self.ref.detectChanges();
    if (self.keToaNew.LaDichTruyen == true) {
      if (self.thongTinDuocPham.FlagDichDaKe == true) {
        self.dialog.open(ConfirmComponent, {
          disableClose: false,
          width: '500px',
          data: { Title: "Cảnh báo", Message: "Dịch truyền này đã kê trong đơn thuốc ngoài, bạn có muốn thêm dịch truyền này không ?" }
        }).afterClosed().subscribe(result => {
          if (result == "Yes") {
            self.themThuocNgoai();
          }
          else {
            self.clearDuocPham();
          }
        });
      } else {
        self.themThuocNgoai();
      }
    } else {
      if (self.thongTinDuocPham.FlagThuocDaKe == true) {
        self.dialog.open(ConfirmComponent, {
          disableClose: false,
          width: '500px',
          data: { Title: "Cảnh báo", Message: "Thuốc này đã kê trong đơn thuốc ngoài, bạn có muốn thêm thuốc này không ?" }
        }).afterClosed().subscribe(result => {
          if (result == "Yes") {
            self.themThuocNgoai();
          }
          else {
            self.clearDuocPham();
          }
        });
      } else {
        self.themThuocNgoai();
      }
    }
  }

  themThuocNgoai() {
    if(this.dangXuLy)
        return;
    this.dangXuLy=true;
    var self = this;
    self.validationErrors = null;
    self.ref.detectChanges();
    self.onkeyFocus();
    if (self.authService.hasPermission(self.documentType, SecurityOperation.Add)) {
      self.addingPage();
      self.apiService.post<any>("DieuTriNoiTru/ThemThuocNgoaiBenhVien", self.keToaNew).subscribe(
        () => {
          // if (self.keToaNew.KhuVuc == 2) {
          //   if (self.keToaNew.LaDichTruyen == true) {
          //     this.isShowDichTruyenNgoai = true;
          //   } else {
          //     this.isShowThuocNgoai = true;
          //   }
          // }
          self.closePopupAddingData();
          let mess = CommonService.format(SystemMessage.ActionSuccessfully, ["Thêm"]);
          self.notificationService.showSuccess(mess);
          self.gridThuocNgoai.search();
          self.gridTruyenDichNgoai.search();
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
  themThuoc() {
    var self = this;
    self.validationErrors = null;
    self.keToaNew.SoThuTu = self.keToaNew.LaDichTruyen != true ? self.gridThuocKhoTong.getAllDataFromDatasource().length + 1 : self.gridDichTruyenKhoTong.getAllDataFromDatasource().length + 1;
    self.ref.detectChanges();
    self.onkeyFocus();
    if (self.authService.hasPermission(self.documentType, SecurityOperation.Add)) {
      if(this.dangXuLy)
          return;
      this.dangXuLy=true;
      self.addingPage();
      self.apiService.post<any>("DieuTriNoiTru/ThemThuoc", self.keToaNew).subscribe(
        () => {
          self.closePopupAddingData();
          let mess = CommonService.format(SystemMessage.ActionSuccessfully, ["Thêm"]);
          self.notificationService.showSuccess(mess);
          // self.gridThuocKhoLe.search();
          if (self.keToaNew.LaDichTruyen != true) {
            self.gridThuocKhoTong.search();
          } else {
            self.gridDichTruyenKhoTong.search();
          }
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
    self.keToaEdit.PhieuDieuTriHienTaiId = self.phieuDieuTriHienTaiId;
    if (self.authService.hasPermission(self.documentType, SecurityOperation.Update)) {
      if (dataItem.LaDichTruyen == true) { //DỊCH TRUYỀN
        self.dialog.open(SuaTruyenDichPopupComponent, {
          disableClose: false,
          width: '1500px',
          data: self.keToaEdit,
        }).afterClosed().subscribe(() => {
          // self.gridDichTruyen.search();
          self.gridDichTruyenKhoTong.search();
          self.gridTruyenDichNgoai.search();
        });
      } else { // THUỐC
        self.dialog.open(SuaThuocPopupComponent, {
          disableClose: false,
          width: '1500px',
          data: self.keToaEdit,
        }).afterClosed().subscribe(() => {
          // self.gridThuocKhoLe.search();
          self.gridThuocKhoTong.search();
          self.gridThuocNgoai.search();
        });
      }
    } else {
      self.notificationService.showError(SystemMessage.UnAuthorizedMessage);
    }
  }

  xoaThuoc(dataItem: any) {
    var self = this;
    self.validationErrors = null;
    self.ref.detectChanges();
    self.keToaDelete = dataItem;
    self.keToaDelete.LaDuocPhamBHYT = 1;
    self.keToaDelete.YeuCauTiepNhanId = self.yeuCauTiepNhanId;
    self.keToaDelete.PhieuDieuTriHienTaiId = self.phieuDieuTriHienTaiId;
    self.keToaDelete.IsDelete = true;

    let comfirm = "xóa";
    if (dataItem.KhuVuc == 1) {
      if (self.authService.hasPermission(self.documentType, SecurityOperation.Delete)) {
        self.dialog.open(ConfirmComponent, {
          disableClose: false,
          width: '400px',
          data: { Title: "Xác nhận", Message: CommonService.format(SystemMessage.MessLockTemplate, [comfirm, "thuốc"]) }
        }).afterClosed().subscribe(result => {
          if (result == "Yes") {
            self.deletingPage();
            self.apiService.post("DieuTriNoiTru/XoaThuoc", self.keToaDelete).subscribe(
              () => {
                self.closePopupDeletingData();
                self.keToaDelete.IsDelete = false;
                self.notificationService.showSuccess(CommonService.format(SystemMessage.ActionSuccessfully, ["Xóa"]));
                // self.gridThuocKhoLe.search();
                self.gridThuocKhoTong.search();
                // self.gridDichTruyen.search();
                self.gridDichTruyenKhoTong.search();
                self.clearDuocPham();

                let dataThuoc = this.gridThuocKhoTong.getAllDataFromDatasource().filter(z => z.Id != this.keToaDelete.Id);
                let dataDichTruyen = this.gridDichTruyenKhoTong.getAllDataFromDatasource().filter(z => z.Id != this.keToaDelete.Id);
                let dataAll = dataThuoc.concat(dataDichTruyen);
                for (let i = 0; i < this.lstYearOrderBy.length; i++) {
                  if (this.lstYearOrderBy[i].PhieuDieuTriId == this.phieuDieuTriHienTaiId) {
                    if (dataAll.length > 0) {
                      this.lstYearOrderBy[i].CoDonThuocNoiTru = true;
                      break;
                    }
                    else {
                      this.lstYearOrderBy[i].CoDonThuocNoiTru = false;
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
                self.closePopupDeletingData();
              });
          }
        });
      }
      else {
        self.notificationService.showError(SystemMessage.UnAuthorizedMessage);
      }
    }
    else {
      if (self.authService.hasPermission(self.documentType, SecurityOperation.Delete)) {
        self.dialog.open(ConfirmComponent, {
          disableClose: false,
          width: '400px',
          data: { Title: "Xác nhận", Message: CommonService.format(SystemMessage.MessLockTemplate, [comfirm, "thuốc"]) }
        }).afterClosed().subscribe(result => {
          if (result == "Yes") {
            self.deletingPage();
            self.apiService.post("DieuTriNoiTru/XoaThuocNgoaiBenhVien", self.keToaDelete).subscribe(
              () => {
                self.closePopupDeletingData();
                self.keToaDelete.IsDelete = false;
                self.notificationService.showSuccess(CommonService.format(SystemMessage.ActionSuccessfully, ["Xóa"]));
                self.gridThuocNgoai.search();
                self.gridTruyenDichNgoai.search();
                self.clearDuocPham();
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

  }

  clearDuocPhamTheoKhuVuc() {
    this.clearDuocPham();
    this.keToaNew.KhoId = null;
    if (this.dataBenhNhan.CoBHYT == true) {
      this.keToaNew.LaDuocPhamBHYT = 2;
    }
    else if (this.dataBenhNhan.CoBHYT != true) {
      this.keToaNew.LaDuocPhamBHYT = 1;
    }
  }

  clearDuocPham() {
    this.validationErrors = [];
    this.thongTinDuocPham = new DuocPhamTonKhos();
    this.keToaNew.DuocPhamBenhVienId = null;
    this.keToaNew.SoLanDungTrongNgayString = null;
    this.keToaNew.SoLuong = null;
    this.keToaNew.SoLanDungTrongNgay = null;
    this.keToaNew.DungSang = null;
    this.keToaNew.DungTrua = null;
    this.keToaNew.DungChieu = null;
    this.keToaNew.DungToi = null;
    this.keToaNew.ThoiGianDungSang = null;
    this.keToaNew.ThoiGianDungTrua = null;
    this.keToaNew.ThoiGianDungChieu = null;
    this.keToaNew.ThoiGianDungToi = null;
    this.keToaNew.GhiChu = null;
    this.keToaNew.KhongTinhPhi = true;
    this.keToaNew.SoLanTrenVien = null;
    this.keToaNew.LieuDungTrenNgayDisplay = null;
    this.keToaNew.LieuDungTrenNgay = null;
    this.keToaNew.CachGioDungThuoc = null;

    //DỊCH TRUYỀN
    this.keToaNew.TocDoTruyen = null;
    this.keToaNew.DonViTocDoTruyen = null;
    this.keToaNew.ThoiGianBatDauTruyen = null;
    this.keToaNew.CachGioTruyenDich = null;
    this.keToaNew.SoLanDungTrongNgay = null;
    this.keToaNew.GioSuDung = null;
    this.keToaNew.IsDelete = false;
    this.thongTinDuocPham.TheTich = null;


  }

  checkLaDichTruyen() {
    this.validationErrors = [];
    this.keToaNew.SoLuong = null;
    this.keToaNew.SoLanDungTrongNgay = null;
    this.keToaNew.DungSang = null;
    this.keToaNew.DungTrua = null;
    this.keToaNew.DungChieu = null;
    this.keToaNew.DungToi = null;
    this.keToaNew.ThoiGianDungSang = null;
    this.keToaNew.ThoiGianDungTrua = null;
    this.keToaNew.ThoiGianDungChieu = null;
    this.keToaNew.ThoiGianDungToi = null;
    this.keToaNew.GhiChu = null;
    //DỊCH TRUYỀN
    this.keToaNew.TocDoTruyen = null;
    this.keToaNew.DonViTocDoTruyen = null;
    this.keToaNew.ThoiGianBatDauTruyen = null;
    this.keToaNew.CachGioTruyenDich = null;
    this.keToaNew.SoLanDungTrongNgay = null;
    this.keToaNew.GioSuDung = null;
    // this.thongTinDuocPham.TheTich = null;
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

  SoLuongChange(event: any) {
    if (event == null) {
      this.keToaNew.LieuDungTrenNgayDisplay = null;
      this.keToaNew.LieuDungTrenNgay = null;
      this.keToaNew.SoLanDungTrongNgayString = null;
      this.keToaNew.SoLanTrenVien = null;
      this.keToaNew.SoLanDungTrongNgay = null;
      this.keToaNew.DungSang = null;
      this.keToaNew.ThoiGianDungSang = null;
      this.keToaNew.DungTrua = null;
      this.keToaNew.ThoiGianDungTrua = null;
      this.keToaNew.DungChieu = null;
      this.keToaNew.ThoiGianDungChieu = null;
      this.keToaNew.DungToi = null;
      this.keToaNew.ThoiGianDungToi = null;
    }
  }
  SoLanLieuDungDisplayChange(event: any, text: any) {
    if (text == 'SoLanVien') {
      if (event != null && event != "") {
        this.keToaNew.SoLanTrenVien = event;
      }
      else {
        this.keToaNew.SoLanDungTrongNgay = null;
      }
    } else if (text == 'LieuDung') {
      if (event != null && event != "") {
        this.keToaNew.LieuDungTrenNgay = parseNumber(CommonService.FormatStringFractionToFloat(event));
      }
      else {
        this.keToaNew.SoLanDungTrongNgay = null;
      }
    }

    if (this.keToaNew.SoLuong != null && this.keToaNew.SoLanTrenVien != null && this.keToaNew.LieuDungTrenNgay != null) {
      this.keToaNew.SoLanDungTrongNgay = Math.ceil(this.keToaNew.SoLuong / (this.keToaNew.SoLanTrenVien * this.keToaNew.LieuDungTrenNgay));
    }

  }

  ////////////////////// DỊCH TRUYỀN

  hienThiGioSuDung() {
    if (this.thoiGianBDChange != undefined && this.thoiGianBDChange != null
      && this.cachGioChange != undefined && this.cachGioChange != null
      && this.soLanChange != undefined && this.soLanChange != null) {
      this.keToaNew.GioSuDung = "";
      var thoiGian = this.thoiGianBDChange;

      for (let i = 1; i <= this.soLanChange; i++) {
        let conVertTimeSACH = CommonService.secToHourAndMinute(thoiGian);
        thoiGian += (this.cachGioChange * 3600);
        if (thoiGian == 86400) {
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
      let conVertTimeSACH = CommonService.secToHourAndMinute(dataItem);

      this.keToaNew.GioSuDung = conVertTimeSACH;
      this.thoiGianBDChange = dataItem;
      // 86400s = 1 day
      let timeRemain = (86400 - dataItem) / 3600;
      this.thoiGianConLai = parseNumber(timeRemain.toFixed(1));
    } else {
      this.keToaNew.GioSuDung = null;
      this.thoiGianBDChange = null;
    }
    this.hienThiGioSuDung();
  }

  soLanDungTrongNgayChange(dataItem: any) {
    this.keToaNew.SoLanDungTrongNgay = null;
    this.keToaNew.CachGioTruyenDich = null;
    this.cachGioChange = null;
    if (dataItem != undefined && dataItem != null) {
      this.soLanChange = dataItem;
      if (dataItem == 2) {
        this.cachGioMax = this.thoiGianConLai
      } else {
        this.cachGioMax = parseNumber((this.thoiGianConLai / dataItem).toFixed(1));
      }
      if (this.keToaNew.CachGioTruyenDich == null) {
        this.keToaNew.GioSuDung = CommonService.secToHourAndMinute(this.thoiGianBDChange);

      }
    } else {
      this.keToaNew.GioSuDung = CommonService.secToHourAndMinute(this.thoiGianBDChange);

      this.cachGioMax = null;
      this.soLanChange = null;
    }
    this.hienThiGioSuDung();
  }

  cachGioTruyenDichChange(dataItem: any) {
    if (dataItem != undefined && dataItem != null) {
      if (dataItem == 0) {
        this.cachGioChange = null;
        this.keToaNew.GioSuDung = CommonService.secToHourAndMinute(this.thoiGianBDChange);

      } else {
        this.cachGioChange = dataItem;
      }
    } else {
      this.cachGioChange = null;
      this.keToaNew.GioSuDung = CommonService.secToHourAndMinute(this.thoiGianBDChange);

    }
    this.hienThiGioSuDung();
  }



  hoanTra(dataItem: any) {
    var self = this;
    self.validationErrors = null;
    self.ref.detectChanges();
    self.hoanTraThuocVo.NoiTruChiDinhDuocPhamId = dataItem.Id;
    self.hoanTraThuocVo.KhoId = dataItem.KhoId;
    self.hoanTraThuocVo.LaDichTruyen = dataItem.LaDichTruyen;
    self.hoanTraThuocVo.YeuCauTiepNhanId = self.yeuCauTiepNhanId;
    self.hoanTraThuocVo.LaDuocPhamBHYT = dataItem.LaDuocPhamBHYT;
    self.hoanTraThuocVo.CoYeuCauTraDuocPhamTuBenhNhanChiTiet = dataItem.CoYeuCauTraDuocPhamTuBenhNhanChiTiet;
    self.hoanTraThuocVo.LaTuTruc = dataItem.LaTuTruc;
    self.hoanTraThuocVo.SoLuong = dataItem.SoLuong;
    self.hoanTraThuocVo.LoaiKho = dataItem.LoaiKho;
    if (self.authService.hasPermission(self.documentType, SecurityOperation.Update)) {
      self.dialog.open(HoanTraThuocPopupComponent, {
        disableClose: false,
        width: '1000px',
        data: self.hoanTraThuocVo,
      }).afterClosed().subscribe(() => {
        // self.gridThuocKhoLe.search();
        self.gridThuocKhoTong.search();
        // self.gridDichTruyen.search();
        self.gridDichTruyenKhoTong.search();
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

  onDataBoundChildThuocNgoai(data: any) {
    if (data != undefined && data.Data.length > 0) {
      this.isShowThuocNgoai = true;
      //self.closePopupLoadingData();
    }
    else {
      this.isShowThuocNgoai = false;
    }
    // var self = this;
    // setTimeout(function () {
    //   self.closePopupLoadingData();
    // }, 15000);
  }

  onDataBoundChildDichTruyenNgoai(data: any) {
    if (data != undefined && data.Data.length > 0) {
      this.isShowDichTruyenNgoai = true;
      //self.closePopupLoadingData();
    }
    else {
      this.isShowDichTruyenNgoai = false;
    }
    // var self = this;
    // setTimeout(function () {
    //   self.closePopupLoadingData();
    // }, 15000);
  }

  inPhieuThuocNgoaiBenhVien() {
    var self = this;
    self.loadingPage();
    self.inPhieuCongKhaiThuocVatTu.NoiTruPhieuDieuTriId = self.phieuDieuTriHienTaiId;
    self.inPhieuCongKhaiThuocVatTu.YeuCauTiepNhanId = parseNumber(self.yeuCauTiepNhanId);
    self.inPhieuCongKhaiThuocVatTu.HostingName = window.location.protocol + "//" + window.location.host;
    self.apiService.post<any>("DieuTriNoiTru/InNoiTruPhieuDieuTriTuVanThuoc", self.inPhieuCongKhaiThuocVatTu).subscribe(
      resData => {
        if (resData != undefined && resData != null) {
          self.closePopupLoadingData();
          self.dialog.open(PhieuInCongKhaiThuocPopupComponent, {
            disableClose: false,
            width: '1200px',
            data: { Html: resData, Title: "PHIẾU THUỐC/ DỊCH TRUYỀN MUA NGOÀI", LaPhieuThucHien: false },
          }
          ).afterClosed().subscribe(() => {
            self.closePopupLoadingData();
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
  inPhieuCongKhaiThuoc() {
    var self = this;
    self.loadingPage();
    self.inPhieuCongKhaiThuocVatTu.NoiTruPhieuDieuTriId = self.phieuDieuTriHienTaiId;
    self.inPhieuCongKhaiThuocVatTu.YeuCauTiepNhanId = parseNumber(self.yeuCauTiepNhanId);
    self.inPhieuCongKhaiThuocVatTu.HostingName = window.location.protocol + "//" + window.location.host;
    self.inPhieuCongKhaiThuocVatTu.LoaiThuocVatTu = 1;
    // self.inPhieuCongKhaiThuocVatTu.Ids = [];
    // if (self.gridDichTruyenKhoTong.getAllDataFromDatasource() != undefined && self.gridDichTruyenKhoTong.getAllDataFromDatasource() != null) {
    //   self.gridDichTruyenKhoTong.getAllDataFromDatasource().filter(c => c.CheckBox).forEach(e => {
    //     self.inPhieuCongKhaiThuocVatTu.Ids.push(e.Id);
    //   });
    // }
    // if (self.gridThuocKhoTong.getAllDataFromDatasource() != undefined && self.gridThuocKhoTong.getAllDataFromDatasource() != null) {
    //   self.gridThuocKhoTong.getAllDataFromDatasource().filter(c => c.CheckBox).forEach(e => {
    //     self.inPhieuCongKhaiThuocVatTu.Ids.push(e.Id);
    //   });
    // }
    self.apiService.post<any>("DieuTriNoiTru/InPhieuCongKhaiThuocVatTu", self.inPhieuCongKhaiThuocVatTu).subscribe(
      resData => {
        if (resData != undefined && resData != null) {
          self.closePopupLoadingData();
          self.dialog.open(PhieuInCongKhaiThuocPopupComponent, {
            disableClose: false,
            width: '1200px',
            data: { Html: resData, Title: "PHIẾU CÔNG KHAI THUỐC", LaPhieuThucHien: false },
          }
          ).afterClosed().subscribe(() => {
            self.closePopupLoadingData();
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

  inPhieuThucHienThuoc() {
    var self = this;
    self.loadingPage();
    self.inPhieuCongKhaiThuocVatTu.NoiTruPhieuDieuTriId = self.phieuDieuTriHienTaiId;
    self.inPhieuCongKhaiThuocVatTu.YeuCauTiepNhanId = parseNumber(self.yeuCauTiepNhanId);
    self.inPhieuCongKhaiThuocVatTu.HostingName = window.location.protocol + "//" + window.location.host;
    self.inPhieuCongKhaiThuocVatTu.LoaiThuocVatTu = 1;

    self.apiService.post<any>("DieuTriNoiTru/InPhieuThucHienThuocVatTu", self.inPhieuCongKhaiThuocVatTu).subscribe(
      resData => {
        if (resData != undefined && resData != null) {
          self.closePopupLoadingData();
          self.dialog.open(PhieuInCongKhaiThuocPopupComponent, {
            disableClose: false,
            width: '1200px',
            data: { Html: resData, Title: "PHIẾU THỰC HIỆN THUỐC", LaPhieuThucHien: true },
          }
          ).afterClosed().subscribe(() => {
            self.closePopupLoadingData();
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
    self.capNhatKhongTinhPhi.LaThuoc = true;
    self.apiService.post<any>("DieuTriNoiTru/CapNhatKhongTinhPhi", self.capNhatKhongTinhPhi).subscribe(
      () => {
        self.closepopupSavingData();
        self.notificationService.showSuccess(CommonService.format(SystemMessage.ActionSuccessfully, ["Cập nhật"]));
        // this.gridThuocKhoLe.search();
        this.gridThuocKhoTong.search();
        // this.gridDichTruyen.search();
        this.gridDichTruyenKhoTong.search();
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

  tangGiamSTT(dataItem: any, text: string) {
    var self = this;
    var messTang = "Tăng STT";
    var messGiam = "Giảm STT";
    var mess = "";
    let thuocEditobj = Object.assign({}, dataItem);
    if (text == 'tang') {
      thuocEditobj.LaTangSTT = true;
      mess = CommonService.format(SystemMessage.ActionSuccessfully, [messTang]);
    } else if (text == 'giam') {
      thuocEditobj.LaTangSTT = false;
      mess = CommonService.format(SystemMessage.ActionSuccessfully, [messGiam]);
    }
    thuocEditobj.YeuCauTiepNhanId = self.yeuCauTiepNhanId;
    thuocEditobj.PhieuDieuTriHienTaiId = self.phieuDieuTriHienTaiId;;
    if (self.authService.hasPermission(self.documentType, SecurityOperation.Update)) {
      self.savingPage();
      self.apiService.post<any>("DieuTriNoiTru/TangHoacGiamSTTDonThuocChiTiet", thuocEditobj).subscribe(
        () => {
          if (dataItem.LaDichTruyen == true) {
            // self.gridDichTruyen.search();
            self.gridDichTruyenKhoTong.search();
          } else {
            // self.gridThuocKhoLe.search();
            self.gridThuocKhoTong.search();
          }
          self.closepopupSavingData();
          self.notificationService.showSuccess(mess);
        },
        (err: ApiError) => {
          self.validationErrors = err.ValidationErrors;
          if (err.Message != "Validation Failed") {
            self.notificationService.showError(err.Message);
          }
          self.closepopupSavingData();
        });
    } else {
      self.notificationService.showError(SystemMessage.UnAuthorizedMessage);
    }
  }

  // ----------------------------------------------------------------------// PHA THUỐC TIÊM

  laThuocTiemHoacTruyen(event: any, text: string) {
    this.validationErrorsTiem = [];
    this.validationErrorsTruyen = [];
    if (text == 'Tiem') {
      if (event == true) {
        this.keToaNew.KhuVuc = 1;
        this.keToaThuocTiemNew.LaThuocTiem = event;
        this.keToaThuocTiemNew.LaThuocTruyen = null;
      }
    } else {
      if (event == true) {
        this.keToaNew.KhuVuc = 1;
        this.keToaThuocTiemNew.LaThuocTruyen = event;
        this.keToaThuocTiemNew.LaThuocTiem = null;
      }
    }
  }

  chonKhoTiem(dataItem: any, index: number) {
    // console.log("dataItem: ", dataItem)
    if (dataItem != undefined && dataItem != null) {
      this.keToaThuocTiemNew.NoiTruChiDinhDuocPhams[index].LoaiKho = dataItem.LoaiKho;
      if (index == 0) {
        this.keToaThuocTiemNew.NoiTruChiDinhDuocPhams[1].KhoId = dataItem.KeyId;
        this.keToaThuocTiemNew.NoiTruChiDinhDuocPhams[1].LoaiKho = dataItem.LoaiKho;
      }
    } else {
      this.keToaThuocTiemNew.NoiTruChiDinhDuocPhams[index].LoaiKho = null;
    }
    this.clearThuocTiem(index);
  }

  clearThuocTiem(index: number) {
    this.validationErrorsTiem = [];
    this.keToaThuocTiemNew.NoiTruChiDinhDuocPhams[index].DuocPhamBenhVienId = null;
    this.keToaThuocTiemNew.NoiTruChiDinhDuocPhams[index].SoLuong = null;
  }

  huyThuocTiem() {
    this.validationErrorsTiem = [];
    this.keToaThuocTiemNew.NoiTruChiDinhDuocPhams.forEach(element => {
      element.DuocPhamBenhVienId = null;
      element.SoLuong = null;
    });

    this.keToaThuocTiemNew.ThoiGianBatDauTiem = null;
    this.keToaThuocTiemNew.CachGioTiem = null;
    this.keToaThuocTiemNew.GioSuDung = null;
    this.keToaThuocTiemNew.SoLanTrenMui = null;
    this.keToaThuocTiemNew.SoLanTrenNgay = null;
    this.keToaThuocTiemNew.GhiChu = null;
    this.keToaThuocTiemNew.KhongTinhPhi = true;

  }

  themThuocTiemHoacTruyen(LaThuocTiem: boolean) {
    if (LaThuocTiem) {
      this.validationErrorsTiem = [];
      let noiTruChiDinhDuocPham1 = new NoiTruChiDinhDuocPham()
      if (this.dataBenhNhan.CoBHYT == true) {
        noiTruChiDinhDuocPham1.LaDuocPhamBHYT = 2;
        noiTruChiDinhDuocPham1.KhuVuc = this.keToaNew.KhuVuc;
      }
      else if (this.dataBenhNhan.CoBHYT != true) {
        noiTruChiDinhDuocPham1.LaDuocPhamBHYT = 1;
        noiTruChiDinhDuocPham1.KhuVuc = this.keToaNew.KhuVuc;
      }
      this.keToaThuocTiemNew.NoiTruChiDinhDuocPhams.push(noiTruChiDinhDuocPham1);
    } else {
      this.validationErrorsTruyen = [];
      let noiTruChiDinhDuocPham1 = new NoiTruChiDinhDuocPham()
      if (this.dataBenhNhan.CoBHYT == true) {
        noiTruChiDinhDuocPham1.LaDuocPhamBHYT = 2;
        noiTruChiDinhDuocPham1.KhuVuc = this.keToaNew.KhuVuc;
      }
      else if (this.dataBenhNhan.CoBHYT != true) {
        noiTruChiDinhDuocPham1.LaDuocPhamBHYT = 1;
        noiTruChiDinhDuocPham1.KhuVuc = this.keToaNew.KhuVuc;
      }
      this.keToaThuocTruyenNew.NoiTruChiDinhDuocPhams.push(noiTruChiDinhDuocPham1);
    }
  }

  xoaThuocTiemHoacTruyen(viTri: any, text: string) {
    if (text == 'Tiem') {
      if (this.keToaThuocTiemNew.NoiTruChiDinhDuocPhams.length > 2) {
        this.dialog.open(ConfirmComponent, {
          disableClose: false,
          width: '400px',
          data: { Title: "Xác nhận", Message: CommonService.format(SystemMessage.MessConfirm, ["xóa"]) }
        }).afterClosed().subscribe(result => {
          if (result === 'Yes') {
            this.keToaThuocTiemNew.NoiTruChiDinhDuocPhams.splice(viTri, 1);
            this.notificationService.showSuccess(CommonService.format(SystemMessage.ActionSuccessfully, ["Xóa"]));
          }
        });
      }
    }
    else {
      if (this.keToaThuocTruyenNew.NoiTruChiDinhDuocPhams.length > 2) {
        this.dialog.open(ConfirmComponent, {
          disableClose: false,
          width: '400px',
          data: { Title: "Xác nhận", Message: CommonService.format(SystemMessage.MessConfirm, ["xóa"]) }
        }).afterClosed().subscribe(result => {
          if (result === 'Yes') {
            this.keToaThuocTruyenNew.NoiTruChiDinhDuocPhams.splice(viTri, 1);
            this.notificationService.showSuccess(CommonService.format(SystemMessage.ActionSuccessfully, ["Xóa"]));
          }
        });
      }
    }
  }

  thoiGianBatDauPhaThuocTiemChange(dataItem: any) {
    this.keToaThuocTiemNew.GioSuDung = null;
    this.keToaThuocTiemNew.CachGioTiem = null;
    this.keToaThuocTiemNew.SoLanTrenNgay = null;
    this.cachGioChange = null;
    this.soLanChange = null;
    if (dataItem != undefined && dataItem != null) {
      let conVertTimeSACH = CommonService.secToHourAndMinute(dataItem);

      this.keToaThuocTiemNew.GioSuDung = conVertTimeSACH;
      this.thoiGianBDChange = dataItem;
      // 86400s = 1 day
      let timeRemain = (86400 - dataItem) / 3600;
      this.thoiGianConLai = parseNumber(timeRemain.toFixed(1));
    } else {
      this.keToaThuocTiemNew.GioSuDung = null;
      this.thoiGianBDChange = null;
    }
    this.hienThiGioSuDungPhaThuocTiem();
  }


  soLanDungTrongNgayPhaThuocTiemChange(dataItem: any) {
    this.keToaThuocTiemNew.CachGioTiem = null;
    this.cachGioChange = null;
    if (dataItem != undefined && dataItem != null) {
      this.soLanChange = dataItem;
      if (dataItem == 2) {
        this.cachGioMax = this.thoiGianConLai
      } else {
        this.cachGioMax = parseNumber((this.thoiGianConLai / dataItem).toFixed(1));
      }
      if (this.keToaThuocTiemNew.CachGioTiem == null) {
        this.keToaThuocTiemNew.GioSuDung = CommonService.secToHourAndMinute(this.thoiGianBDChange);

      }
    } else {
      this.keToaThuocTiemNew.GioSuDung = CommonService.secToHourAndMinute(this.thoiGianBDChange);

      this.cachGioMax = null;
      this.soLanChange = null;
    }
    this.hienThiGioSuDungPhaThuocTiem();
  }

  cachGioPhaThuocTiemChange(dataItem: any) {
    if (dataItem != undefined && dataItem != null) {
      if (dataItem == 0) {
        this.cachGioChange = null;
        this.keToaThuocTiemNew.GioSuDung = CommonService.secToHourAndMinute(this.thoiGianBDChange);

      } else {
        this.cachGioChange = dataItem;
      }
    } else {
      this.cachGioChange = null;
      this.keToaThuocTiemNew.GioSuDung = CommonService.secToHourAndMinute(this.thoiGianBDChange);

    }
    this.hienThiGioSuDungPhaThuocTiem();
  }

  hienThiGioSuDungPhaThuocTiem() {
    if (this.thoiGianBDChange != undefined && this.thoiGianBDChange != null
      && this.cachGioChange != undefined && this.cachGioChange != null
      && this.soLanChange != undefined && this.soLanChange != null) {
      this.keToaThuocTiemNew.GioSuDung = "";
      var thoiGian = this.thoiGianBDChange;

      for (let i = 1; i <= this.soLanChange; i++) {
        let conVertTimeSACH = CommonService.secToHourAndMinute(thoiGian);
        thoiGian += (this.cachGioChange * 3600);
        if (thoiGian == 86400) {
          thoiGian = thoiGian - 60; // trừ đi 1p tránh trường hợp đúng 0:00 giờ
        }
        if (this.keToaThuocTiemNew.GioSuDung == null) {
          this.keToaThuocTiemNew.GioSuDung = "";
        }
        this.keToaThuocTiemNew.GioSuDung += conVertTimeSACH + "; ";
      }
    }
  }

  themThuocTiems() {
    var self = this;
    self.validationErrors = null;
    self.ref.detectChanges();
    self.keToaThuocTiemNew.YeuCauTiepNhanId = self.yeuCauTiepNhanId;
    self.keToaThuocTiemNew.Id = self.phieuDieuTriHienTaiId;
    self.keToaThuocTiemNew.PhieuDieuTriHienTaiId = self.phieuDieuTriHienTaiId;
    self.keToaThuocTiemNew.KhuVuc = self.keToaNew.KhuVuc;
    self.keToaThuocTiemNew.SoThuTu = this.gridDichTruyenKhoTong.getAllDataFromDatasource().length + 1;
    self.onkeyFocus();
    if (self.authService.hasPermission(self.documentType, SecurityOperation.Add)) {
      if(this.dangXuLy)
          return;
      this.dangXuLy=true;
      self.addingPage();
      self.apiService.post<any>("DieuTriNoiTru/ThemPhaThuocTiem", self.keToaThuocTiemNew).subscribe(
        () => {
          self.closePopupAddingData();
          let mess = CommonService.format(SystemMessage.ActionSuccessfully, ["Thêm"]);
          self.notificationService.showSuccess(mess);
          self.gridDichTruyenKhoTong.search();
          self.huyThuocTiem();
          this.dangXuLy=false;
        },
        (err: ApiError) => {
          self.validationErrorsTiem = err.ValidationErrors;
          if (err.Message != "Validation Failed") {
            self.notificationService.showError(err.Message);
          }
          self.closePopupAddingData();
          this.dangXuLy=false;
        });
    } else {
      self.notificationService.showError(SystemMessage.UnAuthorizedMessage);
    }
  }



  suaPhaThuocTiem(dataItem: any) {
    var self = this;
    self.validationErrors = null;
    self.ref.detectChanges();
    let lstDataCurrent = this.gridDichTruyenKhoTong.getAllDataFromDatasource().filter(z => z.NoiTruChiDinhPhaThuocTiemId == dataItem.NoiTruChiDinhPhaThuocTiemId);
    self.keToaThuocTiemEdit = Object.assign({}, dataItem);
    self.keToaThuocTiemEdit.NoiTruChiDinhDuocPhams = lstDataCurrent;
    self.keToaThuocTiemEdit.YeuCauTiepNhanId = self.yeuCauTiepNhanId;
    self.keToaThuocTiemEdit.PhieuDieuTriHienTaiId = self.phieuDieuTriHienTaiId;
    if (self.authService.hasPermission(self.documentType, SecurityOperation.Update)) {
      self.dialog.open(SuaPhaThuocTiemPopupComponent, {
        disableClose: false,
        width: '1600px',
        data: self.keToaThuocTiemEdit,
      }).afterClosed().subscribe(() => {
        // self.gridThuocTiem.search();
        self.gridDichTruyenKhoTong.search();

      });
    } else {
      self.notificationService.showError(SystemMessage.UnAuthorizedMessage);
    }
  }

  xoaPhaThuocTiem(dataItem: any) {
    var self = this;
    self.validationErrors = null;
    self.ref.detectChanges();
    self.keToaThuocTiemDelete = dataItem;
    self.keToaThuocTiemDelete.YeuCauTiepNhanId = self.yeuCauTiepNhanId;
    self.keToaThuocTiemDelete.PhieuDieuTriHienTaiId = self.phieuDieuTriHienTaiId;
    self.keToaThuocTiemDelete.IsDelete = true;
    let comfirm = "xóa";
    if (dataItem.KhuVuc == 1) {
      if (self.authService.hasPermission(self.documentType, SecurityOperation.Delete)) {
        self.dialog.open(ConfirmComponent, {
          disableClose: false,
          width: '400px',
          data: { Title: "Xác nhận", Message: CommonService.format(SystemMessage.MessLockTemplate, [comfirm, "thuốc"]) }
        }).afterClosed().subscribe(result => {
          if (result == "Yes") {
            self.deletingPage();
            self.apiService.post("DieuTriNoiTru/XoaPhaThuocTiem", self.keToaThuocTiemDelete).subscribe(
              () => {
                self.closePopupDeletingData();
                self.keToaThuocTiemDelete.IsDelete = false;
                self.notificationService.showSuccess(CommonService.format(SystemMessage.ActionSuccessfully, ["Xóa"]));
                // self.gridThuocTiem.search();
                self.gridDichTruyenKhoTong.search();

                self.huyThuocTiem();
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
    else {
    }
  }




  khongTinhPhiTiemHoacTruyenChange(khongTinhPhi: boolean, dataItem: any, laThuocTiem: boolean) {
    var self = this;
    self.savingPage();
    self.capNhatKhongTinhPhiTiemHoacTruyen.Id = dataItem.Id;
    self.capNhatKhongTinhPhiTiemHoacTruyen.YeuCauTiepNhanId = self.yeuCauTiepNhanId;
    self.capNhatKhongTinhPhiTiemHoacTruyen.KhongTinhPhi = khongTinhPhi;
    self.capNhatKhongTinhPhiTiemHoacTruyen.LaThuocTiem = laThuocTiem;
    var listCurrent = [];
    if (laThuocTiem) {
      listCurrent = self.gridDichTruyenKhoTong.getAllDataFromDatasource().filter(z => z.NoiTruChiDinhPhaThuocTiemId == dataItem.NoiTruChiDinhPhaThuocTiemId)
      listCurrent.forEach(element => {
        self.capNhatKhongTinhPhiTiemHoacTruyen.Ids.push(element.Id);
      });
    } else {
      listCurrent = self.gridDichTruyenKhoTong.getAllDataFromDatasource().filter(z => z.NoiTruChiDinhPhaThuocTruyenId == dataItem.NoiTruChiDinhPhaThuocTruyenId)
      listCurrent.forEach(element => {
        self.capNhatKhongTinhPhiTiemHoacTruyen.Ids.push(element.Id);
      });
    }

    self.apiService.post<any>("DieuTriNoiTru/CapNhatKhongTinhPhiTiemHoacTruyen", self.capNhatKhongTinhPhiTiemHoacTruyen).subscribe(
      () => {
        self.closepopupSavingData();
        self.notificationService.showSuccess(CommonService.format(SystemMessage.ActionSuccessfully, ["Cập nhật"]));
        // if (laThuocTiem) {
        //   self.gridThuocTiem.search();
        // } else {
        //   self.gridThuocTruyen.search();
        // }
        self.capNhatKhongTinhPhiTiemHoacTruyen.Ids = [];
        self.gridDichTruyenKhoTong.search();
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

  themThuocTiemNgoais() {

  }


  // end Pha tiêm


  // ----------------------------------------------------------------------// PHA THUỐC TRUYỀN


  chonKhoTruyen(dataItem: any, index: number) {
    // console.log("dataItem: ", dataItem)
    if (dataItem != undefined && dataItem != null) {
      this.keToaThuocTruyenNew.NoiTruChiDinhDuocPhams[index].LoaiKho = dataItem.LoaiKho;
      if (index == 0) {
        this.keToaThuocTruyenNew.NoiTruChiDinhDuocPhams[1].KhoId = dataItem.KeyId;
        this.keToaThuocTruyenNew.NoiTruChiDinhDuocPhams[1].LoaiKho = dataItem.LoaiKho;
      }
    } else {
      this.keToaThuocTruyenNew.NoiTruChiDinhDuocPhams[index].LoaiKho = null;
    }
    this.clearThuocTruyen(index);
  }

  clearThuocTruyen(index: number) {
    this.validationErrorsTruyen = [];
    this.keToaThuocTruyenNew.NoiTruChiDinhDuocPhams[index].DuocPhamBenhVienId = null;
    this.keToaThuocTruyenNew.NoiTruChiDinhDuocPhams[index].SoLuong = null;
  }

  huyThuocTruyen() {
    this.validationErrorsTruyen = [];
    this.keToaThuocTruyenNew.NoiTruChiDinhDuocPhams.forEach(element => {
      element.DuocPhamBenhVienId = null;
      element.SoLuong = null;
    });

    this.keToaThuocTruyenNew.TocDoTruyen = null;
    this.keToaThuocTruyenNew.DonViTocDoTruyen = null;
    this.keToaThuocTruyenNew.DonViTocDoTruyenDisplay = null;
    this.keToaThuocTruyenNew.SoLanTrenNgay = null;
    this.keToaThuocTruyenNew.ThoiGianBatDauTruyen = null;
    this.keToaThuocTruyenNew.CachGioTruyen = null;
    this.keToaThuocTruyenNew.GioSuDung = null;
    this.keToaThuocTruyenNew.GhiChu = null;
    this.keToaThuocTruyenNew.KhongTinhPhi = true;

  }

  themThuocTruyens() {
    var self = this;
    self.validationErrors = null;
    self.ref.detectChanges();
    self.keToaThuocTruyenNew.YeuCauTiepNhanId = self.yeuCauTiepNhanId;
    self.keToaThuocTruyenNew.Id = self.phieuDieuTriHienTaiId;
    self.keToaThuocTruyenNew.PhieuDieuTriHienTaiId = self.phieuDieuTriHienTaiId;
    self.keToaThuocTruyenNew.KhuVuc = self.keToaNew.KhuVuc;
    self.keToaThuocTruyenNew.SoThuTu = this.gridDichTruyenKhoTong.getAllDataFromDatasource().length + 1;
    self.onkeyFocus();
    if (self.authService.hasPermission(self.documentType, SecurityOperation.Add)) {
      if(this.dangXuLy)
          return;
      this.dangXuLy=true;
      self.addingPage();
      self.apiService.post<any>("DieuTriNoiTru/ThemPhaThuocTruyen", self.keToaThuocTruyenNew).subscribe(
        () => {
          self.closePopupAddingData();
          let mess = CommonService.format(SystemMessage.ActionSuccessfully, ["Thêm"]);
          self.notificationService.showSuccess(mess);
          // self.gridThuocTruyen.search();
          self.gridDichTruyenKhoTong.search();

          self.huyThuocTruyen();
          this.dangXuLy=false;
        },
        (err: ApiError) => {
          self.validationErrorsTruyen = err.ValidationErrors;
          if (err.Message != "Validation Failed") {
            self.notificationService.showError(err.Message);
          }
          self.closePopupAddingData();
          this.dangXuLy=false;
        });
    } else {
      self.notificationService.showError(SystemMessage.UnAuthorizedMessage);
    }
  }

  suaPhaThuocTruyen(dataItem: any) {
    var self = this;
    self.validationErrors = null;
    self.ref.detectChanges();
    let lstDataCurrent = this.gridDichTruyenKhoTong.getAllDataFromDatasource().filter(z => z.NoiTruChiDinhPhaThuocTruyenId == dataItem.NoiTruChiDinhPhaThuocTruyenId);
    self.keToaThuocTruyenEdit = Object.assign({}, dataItem);
    self.keToaThuocTruyenEdit.NoiTruChiDinhDuocPhams = lstDataCurrent;
    self.keToaThuocTruyenEdit.YeuCauTiepNhanId = self.yeuCauTiepNhanId;
    self.keToaThuocTruyenEdit.PhieuDieuTriHienTaiId = self.phieuDieuTriHienTaiId;
    if (self.authService.hasPermission(self.documentType, SecurityOperation.Update)) {
      self.dialog.open(SuaPhaThuocTruyenPopupComponent, {
        disableClose: false,
        width: '1600px',
        data: self.keToaThuocTruyenEdit,
      }).afterClosed().subscribe(() => {
        // self.gridThuocTruyen.search();
        self.gridDichTruyenKhoTong.search();

      });
    } else {
      self.notificationService.showError(SystemMessage.UnAuthorizedMessage);
    }
  }

  xoaPhaThuocTruyen(dataItem: any) {
    var self = this;
    self.validationErrors = null;
    self.ref.detectChanges();
    self.keToaThuocTruyenDelete = dataItem;
    self.keToaThuocTruyenDelete.YeuCauTiepNhanId = self.yeuCauTiepNhanId;
    self.keToaThuocTruyenDelete.PhieuDieuTriHienTaiId = self.phieuDieuTriHienTaiId;
    self.keToaThuocTruyenDelete.IsDelete = true;
    let comfirm = "xóa";
    if (dataItem.KhuVuc == 1) {
      if (self.authService.hasPermission(self.documentType, SecurityOperation.Delete)) {
        self.dialog.open(ConfirmComponent, {
          disableClose: false,
          width: '400px',
          data: { Title: "Xác nhận", Message: CommonService.format(SystemMessage.MessLockTemplate, [comfirm, "thuốc"]) }
        }).afterClosed().subscribe(result => {
          if (result == "Yes") {
            self.deletingPage();
            self.apiService.post("DieuTriNoiTru/XoaPhaThuocTruyen", self.keToaThuocTruyenDelete).subscribe(
              () => {
                self.closePopupDeletingData();
                self.keToaThuocTruyenDelete.IsDelete = false;
                self.notificationService.showSuccess(CommonService.format(SystemMessage.ActionSuccessfully, ["Xóa"]));
                // self.gridThuocTruyen.search();
                self.gridDichTruyenKhoTong.search();

                self.huyThuocTruyen();
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
    else {

    }
  }


  themThuocTruyenNgoais() {

  }
  // end Pha truyền 

  thoiGianBatDauPhaThuocTruyenChange(dataItem: any) {
    this.keToaThuocTruyenNew.GioSuDung = null;
    this.keToaThuocTruyenNew.CachGioTruyen = null;
    this.keToaThuocTruyenNew.SoLanTrenNgay = null;
    this.cachGioChange = null;
    this.soLanChange = null;
    if (dataItem != undefined && dataItem != null) {
      let conVertTimeSACH = CommonService.secToHourAndMinute(dataItem);

      this.keToaThuocTruyenNew.GioSuDung = conVertTimeSACH;
      this.thoiGianBDChange = dataItem;
      // 86400s = 1 day
      let timeRemain = (86400 - dataItem) / 3600;
      this.thoiGianConLai = parseNumber(timeRemain.toFixed(1));
    } else {
      this.keToaThuocTruyenNew.GioSuDung = null;
      this.thoiGianBDChange = null;
    }
    this.hienThiGioSuDungPhaThuocTruyen();
  }


  soLanDungTrongNgayPhaThuocTruyenChange(dataItem: any) {
    this.keToaThuocTruyenNew.CachGioTruyen = null;
    this.cachGioChange = null;
    if (dataItem != undefined && dataItem != null) {
      this.soLanChange = dataItem;
      if (dataItem == 2) {
        this.cachGioMax = this.thoiGianConLai
      } else {
        this.cachGioMax = parseNumber((this.thoiGianConLai / dataItem).toFixed(1));
      }
      if (this.keToaThuocTruyenNew.CachGioTruyen == null) {
        this.keToaThuocTruyenNew.GioSuDung = CommonService.secToHourAndMinute(this.thoiGianBDChange);

      }
    } else {
      this.keToaThuocTruyenNew.GioSuDung = CommonService.secToHourAndMinute(this.thoiGianBDChange);

      this.cachGioMax = null;
      this.soLanChange = null;
    }
    this.hienThiGioSuDungPhaThuocTruyen();
  }

  cachGioPhaThuocTruyenChange(dataItem: any) {
    if (dataItem != undefined && dataItem != null) {
      if (dataItem == 0) {
        this.cachGioChange = null;
        this.keToaThuocTruyenNew.GioSuDung = CommonService.secToHourAndMinute(this.thoiGianBDChange);

      } else {
        this.cachGioChange = dataItem;
      }
    } else {
      this.cachGioChange = null;
      this.keToaThuocTruyenNew.GioSuDung = CommonService.secToHourAndMinute(this.thoiGianBDChange);

    }
    this.hienThiGioSuDungPhaThuocTruyen();
  }

  hienThiGioSuDungPhaThuocTruyen() {
    if (this.thoiGianBDChange != undefined && this.thoiGianBDChange != null
      && this.cachGioChange != undefined && this.cachGioChange != null
      && this.soLanChange != undefined && this.soLanChange != null) {
      this.keToaThuocTruyenNew.GioSuDung = "";
      var thoiGian = this.thoiGianBDChange;

      for (let i = 1; i <= this.soLanChange; i++) {
        let conVertTimeSACH = CommonService.secToHourAndMinute(thoiGian);
        thoiGian += (this.cachGioChange * 3600);
        if (thoiGian == 86400) {
          thoiGian = thoiGian - 60; // trừ đi 1p tránh trường hợp đúng 0:00 giờ
        }
        if (this.keToaThuocTruyenNew.GioSuDung == null) {
          this.keToaThuocTruyenNew.GioSuDung = "";
        }
        this.keToaThuocTruyenNew.GioSuDung += conVertTimeSACH + "; ";
      }
    }
  }

  orderingPage() {
    this.popupOrderingData = this.dialog.open(LoadingComponent, {
      disableClose: true,
      width: "250px",
      height: "90px",
      data: { Title: "Đang sắp xếp STT dữ liệu..." },
    });
  }

  closePopupOrderingData() {
    if (this.popupOrderingData != undefined && this.popupOrderingData != null) {
      this.popupOrderingData.close();
    }
  }

  sapXepThuoc() {
    var self = this;
    let obj = {
      YeuCauTiepNhanId: self.yeuCauTiepNhanId,
      PhieuDieuTriHienTaiId: self.phieuDieuTriHienTaiId
    }
    self.orderingPage();
    self.apiService.post("DieuTriNoiTru/SapXepTatCaThuoc", obj).subscribe(
      () => {
        self.closePopupOrderingData();
        self.notificationService.showSuccess(CommonService.format(SystemMessage.ActionSuccessfully, ["Sắp xếp"]));
        self.gridThuocKhoTong.search();
        self.gridDichTruyenKhoTong.search();

      },
      (err: ApiError) => {
        self.validationErrors = err.ValidationErrors;
        if (err.Message != "Validation Failed") {
          self.notificationService.showError(err.Message);
        }
        self.closePopupOrderingData();
      });
  }




  getNgayDieuTri(yeuCauTiepNhanId: number) {
    this.apiService.post<any>("DieuTriNoiTru/GetNgayDieuTri?yeuCauTiepNhanId=" + yeuCauTiepNhanId).subscribe(
      resultData => {
        if (resultData != null && resultData != undefined && resultData.LstYearOrderBy.length > 0) {
          this.lstYear = resultData.LstYear;
          this.lstYearOrderBy = resultData.LstYearOrderBy;
        }
      },
      () => {

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
      () => {

      });
  }

  apDungDonThuocChoCacNgaySau() {
    var self = this;
    let dataThuoc = self.gridThuocKhoTong.getAllDataFromDatasource();
    let dataDichTruyen = self.gridDichTruyenKhoTong.getAllDataFromDatasource();
    let dataAll = dataThuoc.concat(dataDichTruyen);
    this.lstYearOrderBy.filter(z => z.KhoaId == this.khoaChiDinhHienTaiId).forEach(item => {
      if (item.PhieuDieuTriId == self.phieuDieuTriHienTaiId) {
        if (dataAll.length > 0) {
          item.CoDonThuocNoiTru = true;
        }
        else {
          item.CoDonThuocNoiTru = false;
        }
      }
    });
    let lstYear = this.lstYear;
    lstYear.forEach(y => {
      y.Months.forEach(m => {
        m.Days.filter(z => z.KhoaId == this.khoaChiDinhHienTaiId).forEach(d => {
          if (d.PhieuDieuTriId == this.phieuDieuTriHienTaiId) {
            if (dataAll.length > 0) {
              d.CoDonThuocNoiTru = true;
            }
            else {
              d.CoDonThuocNoiTru = false;
            }
          }
        });
      });
    });
    if (dataThuoc.length == 0 && dataDichTruyen.length == 0) {
      self.notificationService.showError("Ngày điều trị hiện tại chưa có đơn thuốc.");
    }
    else {
      self.dialog.open(ApDungDonThuocCacNgayPopupComponent, {
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

  saoChepDonThuocNgayKhacApDungNgayHienTai() {
    var self = this;
    let dataThuoc = self.gridThuocKhoTong.getAllDataFromDatasource();
    let dataDichTruyen = self.gridDichTruyenKhoTong.getAllDataFromDatasource();
    let dataAll = dataThuoc.concat(dataDichTruyen);
    let ngayDieuTriDuocChon = null;
    this.lstYearOrderBy.filter(z => z.KhoaId == this.khoaChiDinhHienTaiId).forEach(item => {
      if (item.PhieuDieuTriId == self.phieuDieuTriHienTaiId) {
        ngayDieuTriDuocChon = new Date(item.Date);
        if (dataAll.length > 0) {
          item.CoDonThuocNoiTru = true;
        }
        else {
          item.CoDonThuocNoiTru = false;
        }
      }
    });

    if (this.lstYearOrderBy.some(z => z.CoDonThuocNoiTru)) {
      let lstNgayCoDonThuoc = this.lstYearOrderBy.filter(z => z.CoDonThuocNoiTru && z.KhoaId == this.khoaChiDinhHienTaiId);
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
                d.CoDonThuocNoiTru = true;
              }
              else {
                d.CoDonThuocNoiTru = false;
              }
            }
          });
        });
      });
      lstYear.forEach(y => {
        y.Months.forEach(m => {
          const days = [];
          m.Days.forEach(val => days.push(Object.assign({}, val)));
          m.DayCopies = days.filter(z => z.CoDonThuocNoiTru);
        });
      });

      self.dialog.open(SaoChepDonThuocPopupComponent, {
        disableClose: false,
        width: '1500px',
        height: '820px',
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
          this.gridThuocKhoTong.search();
          this.gridDichTruyenKhoTong.search();
          this.gridThuocNgoai.search();
          this.gridTruyenDichNgoai.search();
        }
      });
    }
    else {
      self.notificationService.showError("Các ngày điều trị chưa có đơn thuốc.");
    }
  }


  checkBoxThuocVatTu(dataItem: any, event: boolean, laThuoc: boolean) {
    if (laThuoc) {
      dataItem.CheckBox = event;
      let lstDataCurrent = this.gridThuocKhoTong.getAllDataFromDatasource();
      if (lstDataCurrent.some(c => !c.CheckBox)) {
        this.checkAll = false;
      } else {
        this.checkAll = true;
      }
    }
    else {
      dataItem.CheckBox = event;
      let lstDataCurrent = this.gridDichTruyenKhoTong.getAllDataFromDatasource();
      if (lstDataCurrent.some(c => !c.CheckBox)) {
        this.checkAllDichTruyen = false;
      } else {
        this.checkAllDichTruyen = true;
      }
    }

  }

  checkBoxAllChange(event: boolean, laThuoc: boolean) {
    if (laThuoc) {
      let lstDataCurrent = this.gridThuocKhoTong.getAllDataFromDatasource();
      this.checkAll = event;
      lstDataCurrent.forEach(element => {
        element.CheckBox = event;
      });
    }
    else {
      let lstDataCurrent = this.gridDichTruyenKhoTong.getAllDataFromDatasource();
      this.checkAllDichTruyen = event;
      lstDataCurrent.forEach(element => {
        element.CheckBox = event;
      });
    }
  }
}

