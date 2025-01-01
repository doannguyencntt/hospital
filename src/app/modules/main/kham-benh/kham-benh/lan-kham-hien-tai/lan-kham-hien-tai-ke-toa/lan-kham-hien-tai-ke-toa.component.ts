import { Component, OnInit, ViewChild, TemplateRef, Input, ChangeDetectorRef, HostListener, Output, EventEmitter, SimpleChanges } from '@angular/core';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import icArrowDownward from '@iconify/icons-ic/arrow-downward';
import icArrowUpward from '@iconify/icons-ic/arrow-upward';
import icAdd from '@iconify/icons-ic/twotone-add';
import icDelete from '@iconify/icons-ic/twotone-delete';
import icEdit from '@iconify/icons-ic/border-color';
import icCheck from '@iconify/icons-ic/check';
import icSave from '@iconify/icons-ic/outline-save';
import icCancel from '@iconify/icons-ic/cancel';
import { GroupDescriptor, SortDescriptor } from '@progress/kendo-data-query';
import { KeToaItem, DuocPhamTonKhos, BenhVienHangDoi, YeuCauKhamBenhPrevious, VatTuTonKhos, KeVatTuItem } from '../../../kham-benh.model';
import { GridComponent } from 'src/app/shared/component/grid/grid.component';
import { MatDialog } from '@angular/material';
import { LanKhamHienTaiApDungToaThuocPopupComponent } from './lan-kham-hien-tai-ap-dung-toa-thuoc-popup/lan-kham-hien-tai-ap-dung-toa-thuoc-popup.component';
import { ApiService } from 'src/app/core/services/api.service';
import { CommonService } from 'src/app/core/utilities/common.helper';
import { NotificationService } from 'src/app/core/services/notification.service';
import { ApiError } from 'src/app/shared/models/api-error.model';
import { SecurityOperation } from 'src/app/shared/enum/security-operation.enum';
import { ConfirmComponent } from 'src/app/shared/component/dialogs/confirm/confirm.component';
import { SystemMessage } from 'src/app/shared/configdata/system-message';
import { AuthService } from 'src/app/core/services/auth.service';
import { ApDungLichSuKeToaConfirmPopupComponent } from './ap-dung-lich-su-ke-toa-confirm-popup/ap-dung-lich-su-ke-toa-confirm-popup.component';
import { DonThuocBacSiKhacKePopupComponent } from '../don-thuoc-bac-si-khac-ke-popup/don-thuoc-bac-si-khac-ke-popup.component';
import { parseNumber } from '@progress/kendo-angular-intl';
import { ComboboxComponent } from 'src/app/shared/component/dropdowns/combobox/combobox.component';
import { LanKhamHienTaiInToaThuocPopupComponent } from './lan-kham-hien-tai-in-toa-thuoc-popup/lan-kham-hien-tai-in-toa-thuoc-popup.component';
import { ChinhSuaDonThuocChiTietPopupComponent } from '../chinh-sua-don-thuoc-chi-tiet-popup/chinh-sua-don-thuoc-chi-tiet-popup.component';
import { LoadingComponent } from 'src/app/shared/component/dialogs/loading/loading.component';
import { LookupQueryInfo } from 'src/app/shared/models/common.model';
import { ChinhSuaVatTuChiTietPopupComponent } from '../chinh-sua-vat-tu-chi-tiet-popup/chinh-sua-vat-tu-chi-tiet-popup.component';
import { LanKhamHienTaiInVatTuPopupComponent } from './lan-kham-hien-tai-in-vat-tu-popup/lan-kham-hien-tai-in-vat-tu-popup.component';
import { ThemThuocKhongBhytComponent } from '../them-thuoc-khong-bhyt/them-thuoc-khong-bhyt.component';
import { TrungThuocPopupComponent } from './trung-thuoc-popup/trung-thuoc-popup.component';
import { LoaiThuocTheoQuanLy } from 'src/app/shared/enum/thuoc.enum';
declare var $: any;
@Component({
  selector: 'app-lan-kham-hien-tai-ke-toa',
  templateUrl: './lan-kham-hien-tai-ke-toa.component.html',
  styleUrls: ['./lan-kham-hien-tai-ke-toa.component.scss']
})
export class LanKhamHienTaiKeToaComponent implements OnInit {
  sort: SortDescriptor[] = [{
    field: 'ThoiDiemHoanThanh',
    dir: 'desc'
  }];

  sortToaThuoc: SortDescriptor[] = [{
    field: 'STT',
    dir: 'asc'
  }];

  dataToSumThanhTien: any[] = [];
  dataToSumThanhTienVatTu: any[] = [];
  dataToIsDisabledButtonPrint: any[] = [];
  isDisableButtonPrint: boolean = false;
  isShowTextBoxLoiDan: boolean = false;
  loaiKhoThuoc: number = 0;
  khoThuocDaChon: number = 0;
  yckhambenhId: number = 0;
  loaiDonThuoc: number = 0;

  keToaNew: KeToaItem = new KeToaItem();
  keToaEdit: KeToaItem = new KeToaItem();
  keToaDelete: KeToaItem = new KeToaItem();
  vatTuEdit: KeVatTuItem = new KeVatTuItem();
  vatTuDelete: KeVatTuItem = new KeVatTuItem();
  benhNhanHienTai: BenhVienHangDoi = new BenhVienHangDoi();
  thongTinDuocPham: DuocPhamTonKhos = new DuocPhamTonKhos();
  thongTinVatTu: VatTuTonKhos = new VatTuTonKhos();

  yeuCauKhamBenhPrevious: YeuCauKhamBenhPrevious;

  queryInfo: LookupQueryInfo = new LookupQueryInfo();

  loiDanDonThuoc: string = null;
  gridToaThuocColumns: any[] = [];
  urlGetDataGridToaThuoc: string = "";
  urlGetTotalPageGridToaThuoc: string = "";

  gridToaMauColumns: any[] = [];
  urlGetDataGridToaThuocMau: string = "KhamBenh/GetDataForGridAsyncToaThuocMau";
  urlGetTotalPageGridToaThuocMau: string = "KhamBenh/GetTotalPageForGridAsyncToaThuocMau";

  gridToaMauChildColumns: any[] = [];
  urlGetDataGridToaMauChild: string = "KhamBenh/GetDataForGridToaThuocMauChiTietChild";
  urlGetTotalPageGridToaMauChild: string = "KhamBenh/GetTotalPageForToaThuocMauChiTietChild";

  gridLichSuKeToaColumns: any[] = [];
  urlGetDataGridLichSuKeToa: string = "KhamBenh/GetDataForGridAsyncLichSuKeToa";
  urlGetTotalPageGridLichSuKeToa: string = "KhamBenh/GetTotalPageForGridAsyncLichSuKeToa";

  gridLichSuKeToaChildColumns: any[] = [];
  urlGetDataGridLichSuKeToaChild: string = "KhamBenh/GetDataForGridLichSuKeToaChild";
  urlGetTotalPageGridLichSuKeToaChild: string = "KhamBenh/GetTotalPageForLichSuKeToaChild";

  gridVatTuYTColumns: any[] = [];
  GetVatTuYTDataForGridAsync: string = "KhamBenh/GetVatTuYTDataForGridAsync";
  GetVatTuYTTotalPageForGridAsync: string = "KhamBenh/GetVatTuYTTotalPageForGridAsync";

  benhNhanId: number = 0;
  coBHYTSearch: boolean = false;
  toaMau: number = 1;
  //=========================
  format: string = 'n2';
  flagShowButtonSave: boolean = false;
  icArrowDownward = icArrowDownward;
  icArrowUpward = icArrowUpward;
  icDelete = icDelete;
  icEdit = icEdit;
  icCheck = icCheck;
  icSave = icSave;
  icCancel = icCancel;
  icAdd = icAdd;
  isSelectDuocPham: boolean = false;
  isVatTu: boolean = false;
  isDuocPham: boolean = false;
  loaiDuocPhamHoacVatTu: number = 1;
  thoiGianDonThuocDataSource: any;
  ghiChuDonThuocChiTietDataSource: any;
  groups: GroupDescriptor[] = [{ field: 'Nhom' }];
  groupNhomLichSuKeToa: GroupDescriptor[] = [{ field: 'NhomLSKT' }];
  groupNhom: GroupDescriptor[] = [{ field: 'NhomToaMau' }];
  popupAddingData: any = null;
  popupDeletingData: any = null;
  popupSavingData: any = null;
  groupsChild: GroupDescriptor[] = [{ field: ' ', aggregates: [{ field: 'ThanhTien', aggregate: 'sum' }] }];
  groupsVatTu: GroupDescriptor[] = [{ field: 'Nhom', aggregates: [{ field: 'ThanhTienVatTu', aggregate: 'sum' }] }];

  public totalThanhTien(field: any) {
    switch (field) {
      case 'ThanhTien':
        return this.dataToSumThanhTien.reduce((sum: any, item: { ThanhTien: any; }) => sum + item.ThanhTien, 0);
    }
  };
  public totalThanhTienVatTu(field: any) {
    switch (field) {
      case 'ThanhTienVatTu':
        return this.dataToSumThanhTienVatTu.reduce((sum: any, item: { ThanhTienVatTu: any; }) => sum + item.ThanhTienVatTu, 0);
    }
  };
  validationErrors: any;
  validationErrorsUpdate: any;
  @Input() data: any = null;
  @Input() dataYeuCauKhamBenhPrevious: any;
  @Input() documentType: DocumentType = DocumentType.KhamBenh;
  @Output() hideTextBoxLoiDan: EventEmitter<any> = new EventEmitter<any>();
  @Output() dataThuoc: EventEmitter<any> = new EventEmitter<any>();
  @Output() dataVatTu: EventEmitter<any> = new EventEmitter<any>();
  @Output() validationErrorsOut: EventEmitter<any> = new EventEmitter<any>();


  @ViewChild('actionToaMauTemplate', { static: true }) actionToaMauTemplate: TemplateRef<any>;
  @ViewChild('actionLichSuKeToaTemplate', { static: true }) actionLichSuKeToaTemplate: TemplateRef<any>;

  @ViewChild('donGiaTemplate', { static: true }) donGiaTemplate: TemplateRef<any>;
  @ViewChild('thanhTienTemplate', { static: true }) thanhTienTemplate: TemplateRef<any>;
  @ViewChild('bHChiTraTemplate', { static: true }) bHChiTraTemplate: TemplateRef<any>;
  @ViewChild('bNChiTraTemplate', { static: true }) bNChiTraTemplate: TemplateRef<any>;
  @ViewChild('actionToaThuocTemplate', { static: true }) actionToaThuocTemplate: TemplateRef<any>;
  @ViewChild('tongCongFooterTemplate', { static: true }) tongCongFooterTemplate: TemplateRef<any>;
  @ViewChild('thanhTienFooterTemplate', { static: true }) thanhTienFooterTemplate: TemplateRef<any>;
  @ViewChild('thanhTienGroupFooterTemplate', { static: true }) thanhTienGroupFooterTemplate: TemplateRef<any>;
  @ViewChild('donGiaFooterTemplate', { static: true }) donGiaFooterTemplate: TemplateRef<any>;
  @ViewChild('donGiaGroupFooterTemplate', { static: true }) donGiaGroupFooterTemplate: TemplateRef<any>;
  @ViewChild('thuocBHYTTemplate', { static: true }) thuocBHYTTemplate: TemplateRef<any>;

  @ViewChild('tuongTacTemplate', { static: true }) tuongTacTemplate: TemplateRef<any>;
  @ViewChild('duongDungTemplate', { static: true }) duongDungTemplate: TemplateRef<any>;


  @ViewChild('duocPhamTemplate', { static: true }) duocPhamTemplate: TemplateRef<any>;
  @ViewChild('hoatChatTemplate', { static: true }) hoatChatTemplate: TemplateRef<any>;
  @ViewChild('diUngTemplate', { static: true }) diUngTemplate: TemplateRef<any>;
  @ViewChild('sangTemplate', { static: true }) sangTemplate: TemplateRef<any>;
  @ViewChild('truaTemplate', { static: true }) truaTemplate: TemplateRef<any>;
  @ViewChild('chieuTemplate', { static: true }) chieuTemplate: TemplateRef<any>;
  @ViewChild('soLuongTemplate', { static: true }) soLuongTemplate: TemplateRef<any>;
  @ViewChild('ghiChuChiTietTemplate', { static: true }) ghiChuChiTietTemplate: TemplateRef<any>;

  @ViewChild('toiTemplate', { static: true }) toiTemplate: TemplateRef<any>;

  @ViewChild('toaThuoc', { static: true }) gridToaThuoc: GridComponent;
  @ViewChild('lichSuKeToa', { static: true }) gridLichSuKeToa: GridComponent;
  @ViewChild('duocTemplateEdit', { static: true }) duocTemplateEdit: TemplateRef<any>;
  @ViewChild('soNgayTemplateEdit', { static: true }) soNgayTemplateEdit: TemplateRef<any>;
  @ViewChild('soLuongTemplateEdit', { static: true }) soLuongTemplateEdit: TemplateRef<any>;

  @ViewChild('sangTemplateEdit', { static: true }) sangTemplateEdit: TemplateRef<any>;
  @ViewChild('thoiGianDungSangEdit', { static: true }) thoiGianDungSangTemplateEdit: TemplateRef<any>;
  @ViewChild('truaTemplateEdit', { static: true }) truaTemplateEdit: TemplateRef<any>;
  @ViewChild('chieuTemplateEdit', { static: true }) chieuTemplateEdit: TemplateRef<any>;
  @ViewChild('toiTemplateEdit', { static: true }) toiTemplateEdit: TemplateRef<any>;
  @ViewChild('ghiChuTemplateEdit', { static: true }) ghiChuTemplateEdit: TemplateRef<any>;
  @ViewChild('nhomGroupHeaderTemplate', { static: true }) nhomGroupHeaderTemplate: TemplateRef<any>;
  @ViewChild('nhomVatTuGroupHeaderTemplate', { static: true }) nhomVatTuGroupHeaderTemplate: TemplateRef<any>;

  @ViewChild('nhomThuocLSKTGroupHeaderTemplate', { static: true }) nhomThuocLSKTGroupHeaderTemplate: TemplateRef<any>;
  @ViewChild('isFocus', { static: false }) isFocus: ComboboxComponent;

  @ViewChild('donGiaVatTuTemplate', { static: true }) donGiaVatTuTemplate: TemplateRef<any>;
  @ViewChild('donGiaVatTuFooterTemplate', { static: true }) donGiaVatTuFooterTemplate: TemplateRef<any>;
  @ViewChild('thanhTienVatTuTemplate', { static: true }) thanhTienVatTuTemplate: TemplateRef<any>;
  @ViewChild('thanhTienVatTuFooterTemplate', { static: true }) thanhTienVatTuFooterTemplate: TemplateRef<any>;
  @ViewChild('thanhTienVatTuGroupFooterTemplate', { static: true }) thanhTienVatTuGroupFooterTemplate: TemplateRef<any>;
  @ViewChild('actionVatTuTemplate', { static: true }) actionVatTuTemplate: TemplateRef<any>;

  @ViewChild('nhomThuocGroupHeaderTemplate', { static: true }) nhomThuocGroupHeaderTemplate: TemplateRef<any>;

  @ViewChild('STTVatTuTemplate', { static: true }) STTVatTuTemplate: TemplateRef<any>;
  @ViewChild('gridVatTu', { read: GridComponent, static: false }) gridVatTu: GridComponent;
  // @ViewChild('gridVatTu', { static: true }) gridVatTu: GridComponent;


  constructor(
    private dialog: MatDialog,
    private apiService: ApiService,
    private notificationService: NotificationService,
    private ref: ChangeDetectorRef,
    private authService: AuthService,
  ) { }


  ngOnInit() {
    this.benhNhanHienTai = this.data;
    //this.documentType = DocumentType.KhamBenh;
    this.isDuocPham = true;
    this.benhNhanId = this.benhNhanHienTai.YeuCauTiepNhan.BenhNhanId;
    this.coBHYTSearch = this.benhNhanHienTai.YeuCauTiepNhan.CoBHYT;
    this.yckhambenhId = this.data.YeuCauKhamBenh.Id;
    this.getThoiGianDonThuoc();
    if (this.benhNhanHienTai.YeuCauKhamBenh.YeuCauKhamBenhDonVTYTs.length > 0) {
      this.benhNhanHienTai.YeuCauKhamBenh.IsShowGridVatTu = true;
    }
    //this.getGhiChuDonThuocChiTiet();

    //======================== TOA MAU
    this.gridToaMauColumns = [
      { Field: "TenToaMau", Title: "Tên toa mẫu", Width: 200, Sortable: true },
      { Field: "BacSiKeToa", Title: "Bác sĩ kê toa", Width: 200, Sortable: true },
      { Field: "ChuanDoanICD", Title: "Chẩn đoán ICD", minWidth: 400, Sortable: true },
      { Field: "GhiChu", Title: "Ghi Chú", Width: 200, Sortable: true },
      { Field: "Action", Title: "", Width: 80, Template: this.actionToaMauTemplate }
    ];

    this.gridToaMauChildColumns = [
      { Field: "STT", Title: "#", Width: 35, Sortable: true },
      { Field: "Ma", Title: "Mã", Width: 45, Sortable: true, ShowTooltip: true },
      { Field: "Ten", Title: "Tên", Width: 120, Sortable: true, ShowTooltip: true },
      { Field: "HoatChat", Title: "Hoạt chất", Width: 120, Sortable: true, ShowTooltip: true },
      { Field: "DVT", Title: "ĐVT", Width: 60, Sortable: true },
      //{ Field: "NhomToaMau", Title: "Nhóm", Width: 60, Sortable: true, Hidden: true, TemplateGroupHeader: this.nhomThuocGroupHeaderTemplate },
      { Field: "SangDisplay", Title: "Sáng", Width: 80, Sortable: true, ShowTooltip: true },
      { Field: "TruaDisplay", Title: "Trưa", Width: 80, Sortable: true, ShowTooltip: true },
      { Field: "ChieuDisplay", Title: "Chiều", Width: 80, Sortable: true, ShowTooltip: true },
      { Field: "ToiDisplay", Title: "Tối", Width: 80, Sortable: true, ShowTooltip: true },
      { Field: "SoNgayDung", Title: "Số ngày", Width: 60, Sortable: true },
      { Field: "SoLuongDisplay", Title: "SL", Width: 50, Sortable: true },
      { Field: "TenDuongDung", Title: "Đường dùng", Width: 50, Sortable: true, ShowTooltip: true },
      { Field: "GhiChu", Title: "Cách dùng", Width: 100, Sortable: true, ShowTooltip: true },
    ];

    //======================== LICH SU KE TOA
    this.gridLichSuKeToaColumns = [
      { Field: "ThoiDiemHoanThanh", Title: "Thời điểm hoàn thành", Width: 170, Sortable: true },
      { Field: "MaTN", Title: "Mã TN", Width: 120, Sortable: true },
      { Field: "ChuanDoanICD", Title: "Chẩn đoán ICD", minWidth: 400, Sortable: true },
      { Field: "BacSiKham", Title: "Bác sĩ khám", Width: 200 },
      { Field: "Action", Title: "", Width: 80, Template: this.actionLichSuKeToaTemplate }
    ];

    this.gridLichSuKeToaChildColumns = [
      { Field: "STT", Title: "#", Width: 30, Sortable: true },
      { Field: "Ma", Title: "Mã", Width: 45, Sortable: true, ShowTooltip: true },
      { Field: "Ten", Title: "Tên", Width: 120, Sortable: true, ShowTooltip: true },
      { Field: "HoatChat", Title: "Hoạt chất", Width: 120, Sortable: true, ShowTooltip: true },
      { Field: "DVT", Title: "ĐVT", Width: 60, Sortable: true },
      { Field: "NhomLSKT", Title: "Nhóm", Width: 60, Sortable: true, Hidden: true, TemplateGroupHeader: this.nhomThuocLSKTGroupHeaderTemplate },
      { Field: "SangDisplay", Title: "Sáng", Width: 80, Sortable: true, ShowTooltip: true },
      { Field: "TruaDisplay", Title: "Trưa", Width: 80, Sortable: true, ShowTooltip: true },
      { Field: "ChieuDisplay", Title: "Chiều", Width: 80, Sortable: true, ShowTooltip: true },
      { Field: "ToiDisplay", Title: "Tối", Width: 80, Sortable: true, ShowTooltip: true },
      { Field: "SoNgayDung", Title: "Số ngày", Width: 60, Sortable: true },
      { Field: "SoLuongDisplay", Title: "SL", Width: 50, Sortable: true },
      { Field: "TenDuongDung", Title: "Đường dùng", Width: 120, Sortable: true, ShowTooltip: true },
    ];

    //===================== TOA THUOC
    this.gridToaThuocColumns = [
      { Field: "Action", Title: "", Width: 100, Template: this.actionToaThuocTemplate, },
      // { Field: "Nhom", Title: "Nhóm", Width: 100, Sortable: true, Hidden: true, TemplateGroupHeader: this.nhomGroupHeaderTemplate },
      { Field: "STT", Title: "#", Width: 40, Sortable: true },
      // { Field: "Ma", Title: "Mã", Width: 45, Sortable: true, ShowTooltip: true },
      { Field: "Ten", Title: "TÊN", Width: 95, Sortable: true, ShowTooltip: true },
      { Field: "HoatChat", Title: "Hoạt chất", Width: 80, Sortable: true, ShowTooltip: true },
      { Field: "Nhom", Title: "Thuốc BHYT", Width: 50, Sortable: false, ShowTooltip: true },
      { Field: "HamLuong", Title: "Hàm lượng", Width: 75, Sortable: true, ShowTooltip: true },
      { Field: "DVT", Title: "ĐVT", Width: 60, Sortable: true, ShowTooltip: true },
      { Field: "DuongDungNumber", Title: "Đ.Dùng", Width: 70, Sortable: true, Template: this.duongDungTemplate },
      { Field: "SoLuong", Title: "SL", Width: 40, Sortable: true, Template: this.soLuongTemplate },
      { Field: "GhiChu", Title: "Cách dùng", Width: 90, Sortable: true, ShowTooltip: true },
      { Field: "SangDisplay", Title: "Sáng", Width: 55, Sortable: true, Template: this.sangTemplate },
      { Field: "TruaDisplay", Title: "Trưa", Width: 55, Sortable: true, Template: this.truaTemplate },
      { Field: "ChieuDisplay", Title: "Chiều", Width: 55, Sortable: true, Template: this.chieuTemplate },
      { Field: "ToiDisplay", Title: "Tối", Width: 55, Sortable: true, Template: this.toiTemplate },
      // { Field: "SoNgayDung", Title: "Số ngày", Width: 80, Sortable: true, TemplateEdit: this.soNgayTemplateEdit },
      // { Field: "DonGia", Title: "Đơn giá", Width: 90, Sortable: true, TemplateFooter: this.donGiaFooterTemplate, Template: this.donGiaTemplate, TemplateGroupFooter: this.donGiaGroupFooterTemplate },
      // { Field: "ThanhTien", Title: "T.Tiền", Width: 80, Sortable: true, Template: this.thanhTienTemplate, TemplateFooter: this.thanhTienFooterTemplate, TemplateGroupFooter: this.thanhTienGroupFooterTemplate },
      // { Field: "TuongTacThuoc", Title: "Tương tác thuốc", Width: 65, Sortable: true },
      // { Field: "DiUngThuocDisplay", Title: "Dị ứng", Width: 65, Sortable: true },
    ];

    //===================== VAT TU

    this.gridVatTuYTColumns = [
      { Field: "Action", Title: "", Width: 70, Template: this.actionVatTuTemplate, },
      { Field: "STT", Title: "#", Width: 60, Sortable: true, Template: this.STTVatTuTemplate },
      { Field: "Ten", Title: "Tên", Width: 170, Sortable: true, ShowTooltip: true },
      { Field: "DonViTinh", Title: "ĐVT", Width: 120, Sortable: true },
      { Field: "Nhom", Title: "Nhóm", Width: 100, Sortable: true, Hidden: true, TemplateGroupHeader: this.nhomVatTuGroupHeaderTemplate },
      { Field: "SoLuong", Title: "Số lượng", Width: 100, Sortable: true },
      { Field: "DonGia", Title: "Đơn giá", Width: 80, Sortable: true, TemplateFooter: this.donGiaVatTuFooterTemplate, Template: this.donGiaVatTuTemplate, },
      { Field: "ThanhTienVatTu", Title: "Thành tiền", Width: 200, Sortable: true, Template: this.thanhTienVatTuTemplate, TemplateFooter: this.thanhTienVatTuFooterTemplate, TemplateGroupFooter: this.thanhTienVatTuGroupFooterTemplate },
      { Field: "GhiChu", Title: "Cách dùng", Width: 200, Sortable: true, ShowTooltip: true },
    ];


    if (this.benhNhanHienTai.YeuCauKhamBenh.YeuCauKhamBenhDonThuocs.length > 0) {
      if (this.benhNhanHienTai.YeuCauKhamBenh.GhiChu == null) {
        this.benhNhanHienTai.YeuCauKhamBenh.GhiChu = this.benhNhanHienTai.YeuCauKhamBenh.YeuCauKhamBenhDonThuocs[0].GhiChu;
      }
      this.loiDanDonThuoc = this.benhNhanHienTai.YeuCauKhamBenh.YeuCauKhamBenhDonThuocs[0].GhiChu;

    }

    this.chonKhoThuocBanDauTheoBHYT();
    this.getCanNangGanNhat();
  }

  getCanNangGanNhat() {

    if (this.benhNhanHienTai.YeuCauTiepNhan.KetQuaSinhHieus != [] && this.benhNhanHienTai.YeuCauTiepNhan.KetQuaSinhHieus.length > 0) {
      for (let i = this.benhNhanHienTai.YeuCauTiepNhan.KetQuaSinhHieus.length; i > 0; i--) {
        if (this.benhNhanHienTai.YeuCauTiepNhan.KetQuaSinhHieus[i - 1].CanNang != null) {
          this.benhNhanHienTai.YeuCauKhamBenh.CanNang = this.benhNhanHienTai.YeuCauTiepNhan.KetQuaSinhHieus[i - 1].CanNang;
          break;
        }
      }
    } else {
      this.benhNhanHienTai.YeuCauKhamBenh.CanNang = null;
    }
    this.benhNhanHienTai.YeuCauKhamBenh.TenMucDo = null;
  }

  chonKhoThuocBanDauTheoBHYT() {
    this.queryInfo = new LookupQueryInfo();
    let coBHYT = this.data.YeuCauTiepNhan.CoBHYT;
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

  onDataBoundChild(event: any) {
    this.dataToSumThanhTien = event.Data;
    this.dataToIsDisabledButtonPrint = event.Data;
    this.dataThuoc.emit(event.Data);
    if (event.Data.length > 0) {
      this.hideTextBoxLoiDan.emit(true);
      //this.getGhiChuICD();
    } else {
      this.hideTextBoxLoiDan.emit(false);
    }

    if (this.dataToIsDisabledButtonPrint.length > 0) {
      if (this.benhNhanHienTai.YeuCauKhamBenh.GhiChu == null) {
        this.getGhiChuICD();
      }
      this.isDisableButtonPrint = false;
      this.apiService.post<any>("KhamBenh/KiemTraCoDonThuoc?yeuCauKhamBenhId=" + this.data.YeuCauKhamBenh.Id).subscribe(
        resultData => {
          if (resultData != undefined && resultData != null) {
            this.benhNhanHienTai.YeuCauKhamBenh.IsShowTextBoxLoiDan = resultData;
          }

        });
    } else {
      this.isDisableButtonPrint = true;
      this.benhNhanHienTai.YeuCauKhamBenh.GhiChu = null;
      this.benhNhanHienTai.YeuCauKhamBenh.IsShowTextBoxLoiDan = false;
    }

  }

  getGhiChuICD() {
    if (this.benhNhanHienTai.YeuCauKhamBenh.IcdchinhId != undefined && this.benhNhanHienTai.YeuCauKhamBenh.IcdchinhId != null) {
      this.apiService.get<any>("KhamBenh/GetLoiDanTheoICD?iCDId=" + this.benhNhanHienTai.YeuCauKhamBenh.IcdchinhId).subscribe(
        resultData => {
          if (resultData != undefined && resultData != null) {
            this.benhNhanHienTai.YeuCauKhamBenh.GhiChu = resultData;
            if (this.benhNhanHienTai.YeuCauKhamBenh.YeuCauKhamBenhDonThuocs != [] && this.benhNhanHienTai.YeuCauKhamBenh.YeuCauKhamBenhDonThuocs.length > 0) {
              this.benhNhanHienTai.YeuCauKhamBenh.YeuCauKhamBenhDonThuocs[0].GhiChu = resultData;
            }
          } else {
            this.benhNhanHienTai.YeuCauKhamBenh.GhiChu = null;
          }
        });
    }
  }

  chonDuoc(event: any) {
    //console.log("chonDuoc: ", event)
    if (event != undefined && event != null) {
      this.keToaNew.Duoc = event.Ten;
      this.keToaNew.LoaiThuocTheoQuanLy = event.LoaiThuocTheoQuanLy;
      let duocPhamHoacVatTuId = event.KeyId;
      let loaiDuocPham = 0;
      if (this.keToaNew.KhoThuoc == 1) {
        loaiDuocPham = this.keToaNew.KhoThuoc
      }
      if (this.keToaNew.KhoThuoc == 2) {
        if (this.keToaNew.KhoThuocKhongBHYT == 3) {
          loaiDuocPham = 2
        }
        if (this.keToaNew.KhoThuocKhongBHYT == 4) {
          loaiDuocPham = 3
        }
      }
      //console.log(this.benhNhanHienTai.YeuCauKhamBenh.GhiChu)
      if (event.LoaiDuocPhamHoacVatTu == 1) {
        this.loaiDuocPhamHoacVatTu = 1;
        this.isDuocPham = true;
        this.isVatTu = false;
        let objThongTinThuoc = {
          YeuCauKhamBenhId: this.data.YeuCauKhamBenh.Id,
          DuocPhamId: duocPhamHoacVatTuId,
          LoaiDuocPham: loaiDuocPham
        };
        this.thongTinDuocPham = new DuocPhamTonKhos();
        this.thongTinVatTu = new VatTuTonKhos();
        this.apiService.post<any>("KhamBenh/InfoTonKhoDuocPham", objThongTinThuoc).subscribe(
          resultData => {
            if (resultData != null) {
              this.thongTinDuocPham = resultData;
              this.diUngThuocModelChange();
            }
          });
      } else if (event.LoaiDuocPhamHoacVatTu == 2) {
        this.loaiDuocPhamHoacVatTu = 2;
        this.isDuocPham = false;
        this.isVatTu = true;
        this.clearKeToaNew();
        this.thongTinDuocPham = new DuocPhamTonKhos();
        this.thongTinVatTu = new VatTuTonKhos();
        let objThongTinVatTu = {
          YeuCauKhamBenhId: this.data.YeuCauKhamBenh.Id,
          VatTuId: duocPhamHoacVatTuId,
        };

        this.apiService.post<any>("KhamBenh/ThongTinTonKhoVatTu", objThongTinVatTu).subscribe(
          resultData => {
            if (resultData != null) {
              this.thongTinVatTu = resultData;
              console.log(this.thongTinVatTu);
            }
          });
      }
    }
    else {
      this.keToaNew.Duoc = null;
      this.keToaNew.LoaiThuocTheoQuanLy = null;
      this.loaiDuocPhamHoacVatTu = null;
      this.isDuocPham = true;
      this.isVatTu = false;
      this.benhNhanHienTai.YeuCauKhamBenh.TenMucDo = null;
      this.keToaNew.SoLuong = null;
      this.clearKeToaNew();
      this.thongTinDuocPham = new DuocPhamTonKhos();
      this.thongTinVatTu = new VatTuTonKhos();
    }
  }

  clearKeToaNew() {
    this.keToaNew.SangDisplay = null;
    this.keToaNew.TruaDisplay = null;
    this.keToaNew.ChieuDisplay = null;
    this.keToaNew.ToiDisplay = null;
    this.keToaNew.ThoiGianDungSang = null;
    this.keToaNew.ThoiGianDungTrua = null;
    this.keToaNew.ThoiGianDungChieu = null;
    this.keToaNew.ThoiGianDungToi = null;
    this.keToaNew.SoNgayDung = null;
    this.keToaNew.LieuDungTrenNgayDisplay = null;
    this.keToaNew.SoLanTrenVienDisplay = null;
    this.keToaNew.SoLanTrenVien = null;

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
        this.thongTinVatTu = new VatTuTonKhos();

        var ketoanew = this.keToaNew;
        ketoanew.LieuDungTrenNgayDisplay = null;
        ketoanew.SoLanTrenVienDisplay = null;
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
        this.thongTinVatTu = new VatTuTonKhos();

        var ketoanew = this.keToaNew;
        ketoanew.LieuDungTrenNgayDisplay = null;
        ketoanew.SoLanTrenVienDisplay = null;
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
        this.thongTinVatTu = new VatTuTonKhos();

        var ketoanew = this.keToaNew;
        ketoanew.LieuDungTrenNgayDisplay = null;
        ketoanew.SoLanTrenVienDisplay = null;
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
        this.thongTinVatTu = new VatTuTonKhos();

        var ketoanew = this.keToaNew;
        ketoanew.LieuDungTrenNgayDisplay = null;
        ketoanew.SoLanTrenVienDisplay = null;
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

  getThoiGianDonThuoc() {
    this.apiService.get<Array<string>>("KhamBenh/ThoiGianDonThuoc").subscribe(
      resultData => {
        this.thoiGianDonThuocDataSource = resultData;
      }
    )
  }

  getGhiChuDonThuocChiTiet() {
    this.apiService.get<Array<string>>("KhamBenh/GetGhiChuDonThuocChiTiet").subscribe(
      resultData => {
        this.ghiChuDonThuocChiTietDataSource = resultData;
      }
    )
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

  changeData() {
    this.benhNhanHienTai.YeuCauKhamBenh.IsChangeChanDoan = true;
  }

  onKey(event: any) {
    if (event.key == "Enter") {
      if (this.isSelectDuocPham != true) {
        this.themKeToa();
        // this.onkeyFocus();
      }
      else {
        this.isSelectDuocPham = false;
      }
    }
  }


  themKeToa() {
    var self = this;
    self.keToaNew.LoaiKhoThuoc = self.loaiKhoThuoc;
    self.keToaNew.YeuCauKhamBenhId = self.data.YeuCauKhamBenhId;
    if (self.thongTinDuocPham.FlagDiUng == true) {
      self.keToaNew.TuongTacThuoc = self.thongTinDuocPham.TuongTacThuoc;
    }
    if (self.documentType == DocumentType.KhamBenhDangKham || self.benhNhanHienTai.YeuCauKhamBenh.IsKhamBenhDangKham) {
      self.keToaNew.IsKhamBenhDangKham = true;
    }
    self.isSelectDuocPham = true;
    self.validationErrors = null;
    self.ref.detectChanges();
    if (self.loaiDuocPhamHoacVatTu == 1) { // Duoc Pham
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
            self.keToaNew.SoNgayDung = null;
            self.clearKeToaNew();
            self.thongTinDuocPham = new DuocPhamTonKhos();
            self.thongTinVatTu = new VatTuTonKhos();


          }
        }
        );
      } else {
        //this.thongTinDuocPham = resultData;
        self.isSelectDuocPham = false;
        self.themKeToaDuocPham();
        // self.xoaCacFieldKeToaNew();
        self.thongTinDuocPham = new DuocPhamTonKhos();
        self.thongTinVatTu = new VatTuTonKhos();

        self.keToaNew.DiUngThuocDisplay = self.thongTinDuocPham.DiUngThuoc;
        self.keToaNew.TuongTacThuoc = self.thongTinDuocPham.TuongTacThuoc;
      }

    }
    else { // Vat tu
      if (self.thongTinVatTu.FlagVatTuDaKe == true) {
        self.dialog.open(ConfirmComponent, {
          disableClose: false,
          width: '500px',
          data: { Title: "Cảnh báo", Message: "Vật tư này đã kê trong đơn vật tư, bạn có muốn thêm vật tư này không ?" }
        }).afterClosed().subscribe(result => {
          if (result == "Yes") {
            self.themKeToaVatTu();
            self.keToaNew.DiUngThuocDisplay = self.thongTinDuocPham.DiUngThuoc;
            self.keToaNew.TuongTacThuoc = self.thongTinDuocPham.TuongTacThuoc;
          }
          else {
            self.keToaNew.DuocPhamId = null;
            self.keToaNew.SoLuong = null;
            self.keToaNew.SoNgayDung = null;
            self.clearKeToaNew();
            self.thongTinDuocPham = new DuocPhamTonKhos();
            self.thongTinVatTu = new VatTuTonKhos();

          }
        }
        );
      } else {

        //this.thongTinDuocPham = resultData;
        self.isSelectDuocPham = false;
        self.themKeToaVatTu();
        // self.xoaCacFieldKeToaNew();
        self.thongTinDuocPham = new DuocPhamTonKhos();
        self.thongTinVatTu = new VatTuTonKhos();

        self.keToaNew.DiUngThuocDisplay = self.thongTinDuocPham.DiUngThuoc;
        self.keToaNew.TuongTacThuoc = self.thongTinDuocPham.TuongTacThuoc;
      }
    }

    // self.onkeyFocus();
  }

  themKeToaDuocPham() {
    var self = this;
    self.validationErrors = null;
    self.ref.detectChanges();
    self.keToaNew.YeuCauTiepNhanId = self.benhNhanHienTai.YeuCauTiepNhanId;
    self.apiService.post<any>("KhamBenh/KiemTraThuocTrungBSKe", self.keToaNew).subscribe(
      (res) => {
        if (res) {
          self.dialog.open(TrungThuocPopupComponent, {
            disableClose: false,
            width: '500px',
            data: { Title: "CẢNH BÁO TRÙNG THUỐC", Message: CommonService.format(SystemMessage.MedicineExists, [this.keToaNew.Duoc]) }
          }).afterClosed().subscribe(result => {
            if (result == "OK") {
              if (this.keToaNew.LoaiThuocTheoQuanLy == LoaiThuocTheoQuanLy.HuongThan || this.keToaNew.LoaiThuocTheoQuanLy == LoaiThuocTheoQuanLy.GayNghien) {
                if (7 < this.keToaNew.SoNgayDung && this.keToaNew.SoNgayDung < 31) {
                  self.themDuocPhamChiTietTrung7Hoac30Ngay("7");
                } else if (this.keToaNew.SoNgayDung > 30) {
                  self.themDuocPhamChiTietTrung7Hoac30Ngay("30");
                }
                else {
                  self.themDuocPhamChiTiet();
                }
              } else {
                self.themDuocPhamChiTiet();
              }
            }
            else {
              self.onkeyFocus();
              self.xoaCacFieldKeToaNew();
              self.thongTinDuocPham = new DuocPhamTonKhos();
              self.thongTinVatTu = new VatTuTonKhos();
            }
          }
          );
        }
        else {
          if (this.keToaNew.LoaiThuocTheoQuanLy == LoaiThuocTheoQuanLy.HuongThan || this.keToaNew.LoaiThuocTheoQuanLy == LoaiThuocTheoQuanLy.GayNghien) {
            if (7 < this.keToaNew.SoNgayDung && this.keToaNew.SoNgayDung < 31) {
              self.themDuocPhamChiTietTrung7Hoac30Ngay("7");
            } else if (this.keToaNew.SoNgayDung > 30) {
              self.themDuocPhamChiTietTrung7Hoac30Ngay("30");
            } else {
              self.themDuocPhamChiTiet();

            }
          } else {
            self.themDuocPhamChiTiet();
          }
        }
      },
      (err: ApiError) => {
        self.validationErrors = err.ValidationErrors;
        if (err.Message != "Validation Failed") {
          self.notificationService.showError(err.Message);
        }
      }
    );
  }

  themDuocPhamChiTietTrung7Hoac30Ngay(soNgay: string) {
    var self = this;
    self.dialog.open(TrungThuocPopupComponent, {
      disableClose: false,
      width: '500px',
      data: { Title: "THÔNG BÁO", Message: CommonService.format(SystemMessage.MedicinThan7Or30Days, [this.keToaNew.Duoc, soNgay]), SoNgay: this.keToaNew.SoNgayDung }
    }).afterClosed().subscribe(resultAnswer => {
      if (resultAnswer == "OK") {
        self.themDuocPhamChiTiet();
      }
      else if (resultAnswer == "Cancel") {
        self.onkeyFocus();
        self.xoaCacFieldKeToaNew();
        self.thongTinDuocPham = new DuocPhamTonKhos();
        self.thongTinVatTu = new VatTuTonKhos();

      } else {
        $(document).ready(function () {
          $("#SoNgayDung").focus().select();
        })
      }
      self.ref.detectChanges();
    }
    );
  }

  dangXuLy:boolean=false;
  themDuocPhamChiTiet() {
    var self = this;
    self.onkeyFocus();
    if (self.authService.hasPermission(self.documentType, SecurityOperation.Add)) {
      if(this.dangXuLy)
          return;
      this.dangXuLy=true;
      self.addingPage();
      self.apiService.post<any>("KhamBenh/AddDonThuocChiTiet", self.keToaNew).subscribe(
        (res) => {
          self.closePopupAddingData();
          self.ganThongTinYeuCauKhamBenhPerevious();
          let mess = CommonService.format(SystemMessage.ActionSuccessfully, ["Thêm"]);
          if (res == "NotOK") {
            mess += "Toa thuốc hiện tại đang vượt mức trần chi phí kê toa.";
            self.notificationService.showWarning(mess);
          } else {
            self.notificationService.showSuccess(mess);
          }
          self.keToaNew.GhiChuDonThuoc = self.loiDanDonThuoc;
          self.gridToaThuoc.search();
          self.gridToaThuoc.ngOnDestroy();
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

  themKeToaVatTu() {
    var self = this;
    self.onkeyFocus();
    self.validationErrors = null;
    self.ref.detectChanges();
    if (self.authService.hasPermission(self.documentType, SecurityOperation.Add)) {
      if(this.dangXuLy)
          return;
      this.dangXuLy=true;
      self.apiService.post<any>("KhamBenh/AddVatTuChiTiet", self.keToaNew).subscribe(
        (res) => {
          self.benhNhanHienTai.YeuCauKhamBenh.IsShowGridVatTu = true;
          self.ganThongTinYeuCauKhamBenhPerevious();
          //self.benhNhanHienTai.YeuCauKhamBenh.IsChangeChanDoan = false;
          let mess = CommonService.format(SystemMessage.ActionSuccessfully, ["Thêm"]);
          if (res == "NotOK") {
            mess += "Toa thuốc hiện tại đang vượt mức trần chi phí kê toa.";
            self.notificationService.showWarning(mess);
          } else {
            self.notificationService.showSuccess(mess);
          }
          self.keToaNew.GhiChuDonThuoc = self.loiDanDonThuoc;
          self.xoaCacFieldKeToaNew();
          self.gridVatTu.search();
          self.gridVatTu.ngOnDestroy();
          self.dangXuLy=false;

        },
        (err: ApiError) => {
          self.validationErrors = err.ValidationErrors;
          if (err.Message != "Validation Failed") {
            self.notificationService.showError(err.Message);
          }
          self.dangXuLy=false;
        });
    } else {
      self.notificationService.showError(SystemMessage.UnAuthorizedMessage);
    }
  }


  xoaCacFieldKeToaNew() {
    this.keToaNew.DuocPhamId = null;
    this.keToaNew.SoLuong = null;
    this.keToaNew.LieuDungTrenNgayDisplay = null;
    this.keToaNew.SangDisplay = null;
    this.keToaNew.TruaDisplay = null;
    this.keToaNew.ChieuDisplay = null;
    this.keToaNew.ToiDisplay = null;
    this.keToaNew.ThoiGianDungSang = null;
    this.keToaNew.ThoiGianDungTrua = null;
    this.keToaNew.ThoiGianDungChieu = null;
    this.keToaNew.ThoiGianDungToi = null;
    this.keToaNew.SoNgayDung = null;
    this.benhNhanHienTai.YeuCauKhamBenh.TenMucDo = null;
    this.keToaNew.GhiChu = null;
  }


  suaKeToa(item: KeToaItem) {
    // console.log("this Edit: ", item);
    var self = this;
    self.keToaEdit = item;
    let donThuocChiTietId = item.Id;
    let yeuCauKhamBenhId = item.YeuCauKhamBenhId;
    self.keToaEdit.DonThuocChiTietId = item.Id;
    self.keToaEdit.LoaiDonThuoc = item.LoaiDonThuoc;
    let donThuocThanhToanVo = {
      YeuCauKhamBenhId: yeuCauKhamBenhId,
      DonThuocChiTietId: donThuocChiTietId,
      IsKhamBenhDangKham: false
    }
    let keToaEditobj = Object.assign({}, item);
    self.validationErrors = null;
    self.ref.detectChanges();

    if (self.authService.hasPermission(self.documentType, SecurityOperation.Update)) {
      if (self.documentType == DocumentType.KhamBenhDangKham || self.benhNhanHienTai.YeuCauKhamBenh.IsKhamBenhDangKham) {
        donThuocThanhToanVo.IsKhamBenhDangKham = true;
      }
      self.apiService.post<any>("KhamBenh/KiemTraDonThuocChiTietThanhToan", donThuocThanhToanVo).subscribe(
        () => {
          self.dialog.open(ChinhSuaDonThuocChiTietPopupComponent, {
            disableClose: false,
            width: '1500px',
            data: { Model: keToaEditobj, benhNhanHienTai: self.benhNhanHienTai, documentType: self.documentType, IsKhamBenhDangKham: self.benhNhanHienTai.YeuCauKhamBenh.IsKhamBenhDangKham },
          }).afterClosed().subscribe(result => {
            if (result != undefined && result.Status == "CapNhat") {
              // self.notificationService.showSuccess(CommonService.format(SystemMessage.ActionSuccessfully, ["Chỉnh sửa"]));
              let mess = CommonService.format(SystemMessage.ActionSuccessfully, ["Chỉnh sửa"]);
              if (result.MucTranChiPhi == "NotOK") {
                mess += "Toa thuốc hiện tại đang vượt mức trần chi phí kê toa.";
                self.notificationService.showWarning(mess);
              } else {
                self.notificationService.showSuccess(mess);
              }
              self.gridToaThuoc.search();
            }
          });
        },
        (err: ApiError) => {
          self.validationErrors = err.ValidationErrors;
          if (err.Message != "Validation Failed") {
            self.notificationService.showError(err.Message);
          }
        }
      );
    } else {
      self.notificationService.showError(SystemMessage.UnAuthorizedMessage);
    }
  }

  xoaKeToa(item: KeToaItem) {
    var self = this;
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
          if (self.documentType == DocumentType.KhamBenhDangKham || self.benhNhanHienTai.YeuCauKhamBenh.IsKhamBenhDangKham) {
            self.keToaDelete.IsKhamBenhDangKham = true;
          }
          self.apiService.post("KhamBenh/DeleteDonThuocChiTiet", self.keToaDelete).subscribe(
            () => {
              self.closePopupDeletingData();
              self.notificationService.showSuccess(CommonService.format(SystemMessage.ActionSuccessfully, ["Xóa"]));
              self.keToaNew = new KeToaItem();
              self.chonKhoThuocBanDauTheoBHYT();
              self.gridToaThuoc.search();
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

  isShowButtonThemGhiChuDonThuoc(loiDanDonThuocs: string) {
    if (loiDanDonThuocs != "" && loiDanDonThuocs != null) {
      var duplicate = this.soSanhLoiDanDonThuocs(this.loiDanDonThuoc, loiDanDonThuocs);
      if (this.loiDanDonThuoc != "" && this.loiDanDonThuoc == null) {
        this.loiDanDonThuoc = "";
      }
    }

    if (duplicate == false || duplicate == undefined) {
      this.flagShowButtonSave = true;
    }
    else {
      this.flagShowButtonSave = false;
    }
    this.changeData();
  }

  soSanhLoiDanDonThuocs(loiDanDonThuocsBanDau: any, loiDanDonThuocsCurrent: any) {
    if (loiDanDonThuocsCurrent !== loiDanDonThuocsBanDau) {
      return false; // không trùng
    }
    return true; // trùng
  }

  apDungConfirm(dataItem: any) {
    var self = this;
    let yeuCauKhamBenhHienTaiId = self.benhNhanHienTai.YeuCauKhamBenhId;
    let toaMauId = dataItem.Id;
    if (self.authService.hasPermission(self.documentType, SecurityOperation.Add)) {
      self.apiService.post<any>("KhamBenh/ApDungToaMau", { ToaMauId: toaMauId, YeuCauKhamBenhHienTaiId: yeuCauKhamBenhHienTaiId }).subscribe(
        resultData => {
          if (resultData != null) {
            let datas = {
              YeuCauKhamBenhId: yeuCauKhamBenhHienTaiId,
              ResultData: resultData
            };
            if (!resultData.ThanhCong) {
              self.dialog.open(LanKhamHienTaiApDungToaThuocPopupComponent, {
                disableClose: false,
                width: '1000px',
                data: datas,
              }).afterClosed().subscribe(() => {
                self.gridToaThuoc.search();
              });
            }
            else {
              let mess = CommonService.format(SystemMessage.ActionSuccessfully, ["Sử dụng toa thuốc"]);
              if (resultData.MucTranChiPhi == "NotOK") {
                mess += "Toa thuốc hiện tại đang vượt mức trần chi phí kê toa.";
                self.notificationService.showWarning(mess);
              } else {
                self.notificationService.showSuccess(mess);
              }
              self.gridToaThuoc.search();
              // self.notificationService.showSuccess(CommonService.format(SystemMessage.ActionSuccessfully, ["Sử dụng toa thuốc"]));
            }
          }
        },
        (err: ApiError) => {
          self.validationErrors = err.ValidationErrors;
          if (err.Message != "Validation Failed") {
            self.notificationService.showError(err.Message);
          }
        });
    } else {
      self.notificationService.showError(SystemMessage.UnAuthorizedMessage);
    }
  }

  apDungLichSuKeToaConfirm(dataItem: any) {
    //console.log("apDungLichSuKeToa: ", dataItem)
    var self = this;
    self.validationErrors = [];
    self.ref.detectChanges();
    let yeuCauKhamBenhTruocId = dataItem.Id
    let yeuCauKhamBenhHienTaiId = self.benhNhanHienTai.YeuCauKhamBenhId;
    if (self.authService.hasPermission(self.documentType, SecurityOperation.Add)) {
      self.apiService.post<any>("KhamBenh/ApDungToaMauLichSuKeToa?toaThuocVM", { YeuCauKhamBenhTruocId: yeuCauKhamBenhTruocId, YeuCauKhamBenhHienTaiId: yeuCauKhamBenhHienTaiId }).subscribe(
        resultData => {
          if (resultData != null) {
            let datas = {
              YeuCauKhamBenhId: yeuCauKhamBenhHienTaiId,
              ResultData: resultData
            };
            if (!resultData.ThanhCong) {
              self.dialog.open(ApDungLichSuKeToaConfirmPopupComponent, {
                disableClose: false,
                width: '1000px',
                data: datas,
              }).afterClosed().subscribe(() => {
                self.gridToaThuoc.search();
              });
            }
            else {
              let mess = CommonService.format(SystemMessage.ActionSuccessfully, ["Sử dụng toa thuốc"]);
              if (resultData.MucTranChiPhi == "NotOK") {
                mess += "Toa thuốc hiện tại đang vượt mức trần chi phí kê toa.";
                self.notificationService.showWarning(mess);
              } else {
                self.notificationService.showSuccess(mess);
              }
              self.gridToaThuoc.search();
              // self.notificationService.showSuccess(CommonService.format(SystemMessage.ActionSuccessfully, ["Sử dụng toa thuốc"]));
            }
          }
        },
        (err: ApiError) => {
          self.validationErrors = err.ValidationErrors;
          if (err.Message != "Validation Failed") {
            self.notificationService.showError(err.Message);
          }
        });
    } else {
      self.notificationService.showError(SystemMessage.UnAuthorizedMessage);
    }
  }

  showInToaThuocPopup() {
    //console.log("this.gridToaThuoc.getAllDataFromDatasource(): ", this.gridToaThuoc.getAllDataFromDatasource())
    let lstDataThuocCurrent = this.gridToaThuoc.getAllDataFromDatasource();
    this.benhNhanHienTai.YeuCauKhamBenh.CheckValidator = false;
    var self = this;
    self.validationErrors = [];
    self.ref.detectChanges();
    // if (self.authService.hasPermission(self.documentType, SecurityOperation.Update)) {
    //   var showDialog = self.dialog.open(LoadingComponent, {
    //     disableClose: true,
    //     width: '200px',
    //     height: '90px',
    //     data: { Title: 'Đang tải dữ liệu...' }
    //   });
    //   if (self.documentType == DocumentType.KhamBenhDangKham) {
    //     self.benhNhanHienTai.YeuCauKhamBenh.IsKhamBenhDangKham = true;
    //   }
    //   self.benhNhanHienTai.YeuCauKhamBenh.CoInKeToa = true;
    //   self.apiService.post<any>("KhamBenh/LuuKetLuan", self.benhNhanHienTai.YeuCauKhamBenh).subscribe(
    //     (res) => {
    //       self.benhNhanHienTai.YeuCauKhamBenh.YeuCauKhamBenhICDKhacs = res.YeuCauKhamBenhICDKhacs;
    //       self.benhNhanHienTai.YeuCauKhamBenh.IsChangeChanDoan = false;
    //       self.benhNhanHienTai.YeuCauKhamBenh.CoInKeToa = false;
    //       this.ganThongTinYeuCauKhamBenhPerevious();
    //       showDialog.close()
    //       self.dialog
    //         .open(LanKhamHienTaiInToaThuocPopupComponent, {
    //           disableClose: true,
    //           width: "1200px",
    //           data: { YeuCauKhamBenhId: this.benhNhanHienTai.YeuCauKhamBenhId, ListGridThuoc: lstDataThuocCurrent, YeuCauTiepNhanId: this.benhNhanHienTai.YeuCauTiepNhanId },
    //         });
    //     },
    //     (err: ApiError) => {
    //       this.validationErrors = err.ValidationErrors;
    //       if (err.Message != "Validation Failed") {
    //         self.notificationService.showError(err.Message);
    //         showDialog.close()
    //       };
    //       console.log("validators: ", this.validationErrors)
    //       showDialog.close()
    //     });
    // } else {
    //   showDialog.close();
    //   self.notificationService.showError(SystemMessage.UnAuthorizedMessage);
    // }
    //test
    // console.log("icd:", this.benhNhanHienTai.YeuCauKhamBenh.IcdchinhId)
    // console.log("icd ten :", this.benhNhanHienTai.YeuCauKhamBenh.TenICDChinh)
    // console.log("icd ghichu :", this.benhNhanHienTai.YeuCauKhamBenh.GhiChuICDChinh)
    self.dialog
      .open(LanKhamHienTaiInToaThuocPopupComponent, {
        disableClose: true,
        width: "1200px",
        data: {
          YeuCauKhamBenhId: self.benhNhanHienTai.YeuCauKhamBenhId,
          ListGridThuoc: lstDataThuocCurrent,
          YeuCauTiepNhanId: self.benhNhanHienTai.YeuCauTiepNhanId,
          TenICDChinh: self.benhNhanHienTai.YeuCauKhamBenh.TenICDChinh,
          GhiChuICDChinh: self.benhNhanHienTai.YeuCauKhamBenh.GhiChuICDChinh,
          YeuCauKhamBenhICDKhacs: self.benhNhanHienTai.YeuCauKhamBenh.YeuCauKhamBenhICDKhacs,
          IsChangeChanDoan: self.benhNhanHienTai.YeuCauKhamBenh.IsChangeChanDoan
        },
      }).afterClosed().subscribe(() => {
        if (self.benhNhanHienTai.YeuCauKhamBenh.IsChangeChanDoan == true) {
          if (self.authService.hasPermission(self.documentType, SecurityOperation.Update)) {
            if (self.documentType == DocumentType.KhamBenhDangKham || self.benhNhanHienTai.YeuCauKhamBenh.IsKhamBenhDangKham) {
              self.benhNhanHienTai.YeuCauKhamBenh.IsKhamBenhDangKham = true;
            }
            self.benhNhanHienTai.YeuCauKhamBenh.CoInKeToa = true;
            self.apiService.post<any>("KhamBenh/LuuKetLuan", self.benhNhanHienTai.YeuCauKhamBenh).subscribe(
              (res) => {
                self.benhNhanHienTai.YeuCauKhamBenh.YeuCauKhamBenhICDKhacs = res.YeuCauKhamBenhICDKhacs;
                self.benhNhanHienTai.YeuCauKhamBenh.IsChangeChanDoan = false;
                self.benhNhanHienTai.YeuCauKhamBenh.CoInKeToa = false;
                self.ganThongTinYeuCauKhamBenhPerevious();
              },
              (err: ApiError) => {
                self.validationErrors = err.ValidationErrors;
                if (err.Message != "Validation Failed") {
                  self.notificationService.showError(err.Message);
                };
                self.validationErrorsOut.emit(self.validationErrors);
                console.log("validators: ", this.validationErrors)
              });
          }
        }

      });
  }

  convertInt() {
    if (this.keToaNew.SoNgayDung != null)
      this.keToaNew.SoNgayDung = parseInt(this.keToaNew.SoNgayDung.toString());
    if (this.keToaEdit.SoNgayDung != null)
      this.keToaEdit.SoNgayDung = parseInt(this.keToaEdit.SoNgayDung.toString());
  }

  diUngThuocModelChange() {
    let datas = {
      YeuCauKhamBenhId: this.benhNhanHienTai.YeuCauKhamBenhId,
      flagDiUngThuoc: this.thongTinDuocPham.FlagDiUng,
      DuocPhamId: this.keToaNew.DuocPhamId
    };
    if (this.thongTinDuocPham.FlagDiUng == true) {
      this.apiService.post<any>("KhamBenh/MucDoDiUng", datas).subscribe(
        resultData => {
          if (resultData != null) {
            this.benhNhanHienTai.YeuCauKhamBenh.TenMucDo = resultData
          }
        }
      );
    }
    else {
      this.benhNhanHienTai.YeuCauKhamBenh.TenMucDo = "Không";
    }
  }


  xemDonThuocBacSiKhac() {
    this.dialog.open(DonThuocBacSiKhacKePopupComponent, {
      disableClose: false,
      width: '1000px',
      data: { Model: this.benhNhanHienTai.YeuCauKhamBenhId, Title: "" }
    }).afterClosed().subscribe(() => {
    });
  }

  SoLuongChange(event: any) {
    // if (this.keToaNew.SoLuong != null && this.keToaNew.LieuDungTrenNgayDisplay != null && this.keToaNew.LieuDungTrenNgayDisplay != "") {
    //   let lieuDung = parseNumber(CommonService.FormatStringFractionToFloat(this.keToaNew.LieuDungTrenNgayDisplay));
    //   this.keToaNew.SoNgayDung = Math.ceil(this.keToaNew.SoLuong / lieuDung);
    //   this.keToaNew.SangDisplay = null;
    //   this.keToaNew.ThoiGianDungSang = null;
    //   this.keToaNew.TruaDisplay = null;
    //   this.keToaNew.ThoiGianDungTrua = null;
    //   this.keToaNew.ChieuDisplay = null;
    //   this.keToaNew.ThoiGianDungChieu = null;
    //   this.keToaNew.ToiDisplay = null;
    //   this.keToaNew.ThoiGianDungToi = null;
    // }
    // else 
    if (event == null) {
      this.keToaNew.LieuDungTrenNgayDisplay = null;
      this.keToaNew.LieuDungTrenNgay = null;
      this.keToaNew.SoLanTrenVienDisplay = null;
      this.keToaNew.SoLanTrenVien = null;
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
    if (event != null && this.keToaNew.SoLanTrenVien != null && this.keToaNew.LieuDungTrenNgay != null) {
      this.keToaNew.SoNgayDung = Math.ceil(event / (this.keToaNew.SoLanTrenVien * this.keToaNew.LieuDungTrenNgay));
    }

  }


  SoLanLieuDungDisplayChange(event: any, text: any) {
    if (text == 'SoLanVien') {
      if (event != null && event != "") {
        this.keToaNew.SoLanTrenVien = parseNumber(CommonService.FormatStringFractionToFloat(event));
      }
      else {
        this.keToaNew.SoNgayDung = null;
      }
    } else if (text == 'LieuDung') {
      if (event != null && event != "") {
        this.keToaNew.LieuDungTrenNgay = parseNumber(CommonService.FormatStringFractionToFloat(event));
      }
      else {
        this.keToaNew.SoNgayDung = null;
      }
    }

    if (this.keToaNew.SoLuong != null && this.keToaNew.SoLanTrenVien != null && this.keToaNew.LieuDungTrenNgay != null) {
      this.keToaNew.SoNgayDung = Math.ceil(this.keToaNew.SoLuong / (this.keToaNew.SoLanTrenVien * this.keToaNew.LieuDungTrenNgay));
    }

  }



  // LieuDungTrenNgayDisplayChange(event: any) {
  //   if (this.keToaNew.SoLuong != null && this.keToaNew.LieuDungTrenNgayDisplay != null && this.keToaNew.LieuDungTrenNgayDisplay != "") {
  //     let lieuDung = parseNumber(CommonService.FormatStringFractionToFloat(this.keToaNew.LieuDungTrenNgayDisplay));
  //     if (lieuDung > this.keToaNew.SoLuong) {
  //       this.keToaNew.SoLuong = lieuDung;
  //     }
  //     this.keToaNew.SoNgayDung = Math.ceil(this.keToaNew.SoLuong / lieuDung);
  //     this.keToaNew.SangDisplay = null;
  //     this.keToaNew.ThoiGianDungSang = null;
  //     this.keToaNew.TruaDisplay = null;
  //     this.keToaNew.ThoiGianDungTrua = null;
  //     this.keToaNew.ChieuDisplay = null;
  //     this.keToaNew.ThoiGianDungChieu = null;
  //     this.keToaNew.ToiDisplay = null;
  //     this.keToaNew.ThoiGianDungToi = null;
  //   } else if (this.keToaNew.SoLuong == null && this.keToaNew.SoNgayDung != null && (this.keToaNew.LieuDungTrenNgayDisplay != null && this.keToaNew.LieuDungTrenNgayDisplay != "")) {
  //     let lieuDung = parseNumber(CommonService.FormatStringFractionToFloat(this.keToaNew.LieuDungTrenNgayDisplay));
  //     this.keToaNew.SoLuong = this.keToaNew.SoNgayDung * lieuDung;
  //   } else if (this.keToaNew.SoLuong != null && (this.keToaNew.LieuDungTrenNgayDisplay == null || this.keToaNew.LieuDungTrenNgayDisplay == "")) {
  //     this.keToaNew.SoNgayDung = null;
  //   }
  // }

  // SoNgayDungChange() {
  //   if (this.keToaNew.SoLuong != null && this.keToaNew.SoNgayDung != null && this.keToaNew.SoNgayDung > 0) {
  //     let lieuDung = Math.ceil(this.keToaNew.SoLuong / this.keToaNew.SoNgayDung);

  //     // this.apiService.post<any>("KhamBenh/FormatNumber?inputNumber=" + lieuDung).subscribe(
  //     //   resultData => {
  //     //     if (resultData != null) {
  //     //       this.keToaNew.LieuDungTrenNgayDisplay = resultData;
  //     //     }
  //     //   })
  //     this.keToaNew.LieuDungTrenNgayDisplay = lieuDung.toString();
  //     this.keToaNew.SangDisplay = null;
  //     this.keToaNew.ThoiGianDungSang = null;
  //     this.keToaNew.TruaDisplay = null;
  //     this.keToaNew.ThoiGianDungTrua = null;
  //     this.keToaNew.ChieuDisplay = null;
  //     this.keToaNew.ThoiGianDungChieu = null;
  //     this.keToaNew.ToiDisplay = null;
  //     this.keToaNew.ThoiGianDungToi = null;
  //   } else if (this.keToaNew.SoLuong == null && this.keToaNew.SoNgayDung != null && (this.keToaNew.LieuDungTrenNgayDisplay != null && this.keToaNew.LieuDungTrenNgayDisplay != "")) {
  //     let lieuDung = parseNumber(CommonService.FormatStringFractionToFloat(this.keToaNew.LieuDungTrenNgayDisplay));
  //     this.keToaNew.SoLuong = this.keToaNew.SoNgayDung * lieuDung;
  //   } else if (this.keToaNew.SoLuong != null && this.keToaNew.SoNgayDung == null) {
  //     this.keToaNew.LieuDungTrenNgayDisplay = null;
  //   }
  // }

  //dùng sáng, trưa, chiều, tối
  // nhapDungCacBuoiTrongNgayThem(event: any, buoi: any) {
  //   switch (buoi) {
  //     case "Sang":
  //       if ((event == undefined && this.keToaNew.TruaDisplay == undefined && this.keToaNew.ChieuDisplay == undefined && this.keToaNew.ToiDisplay == undefined)
  //         || (event == "" && this.keToaNew.TruaDisplay == "" && this.keToaNew.ChieuDisplay == "" && this.keToaNew.ToiDisplay == "")
  //         || (event == "" && this.keToaNew.TruaDisplay == "" && this.keToaNew.ChieuDisplay == "" && this.keToaNew.ToiDisplay == null)
  //         || (event == "" && this.keToaNew.TruaDisplay == "" && this.keToaNew.ChieuDisplay == null && this.keToaNew.ToiDisplay == null)
  //         || (event == "" && this.keToaNew.TruaDisplay == null && this.keToaNew.ChieuDisplay == null && this.keToaNew.ToiDisplay == null)
  //       ) {
  //         this.keToaNew.SoNgayDung = this.TongSoNgaySuDung(this.keToaNew.SoLuong, event, this.keToaNew.TruaDisplay, this.keToaNew.ChieuDisplay, this.keToaNew.ToiDisplay);
  //         return null;
  //       }
  //       else {
  //         this.keToaNew.SoNgayDung = this.TongSoNgaySuDung(this.keToaNew.SoLuong, event, this.keToaNew.TruaDisplay, this.keToaNew.ChieuDisplay, this.keToaNew.ToiDisplay);
  //         return null;

  //       }
  //     case "Trua":
  //       if (
  //         (event == undefined && this.keToaNew.SangDisplay == undefined && this.keToaNew.ChieuDisplay == undefined && this.keToaNew.ToiDisplay == undefined)
  //         || (event == "" && this.keToaNew.SangDisplay == "" && this.keToaNew.ChieuDisplay == "" && this.keToaNew.ToiDisplay == "")
  //         || (event == "" && this.keToaNew.SangDisplay == "" && this.keToaNew.ChieuDisplay == "" && this.keToaNew.ToiDisplay == null)
  //         || (event == "" && this.keToaNew.SangDisplay == "" && this.keToaNew.ChieuDisplay == null && this.keToaNew.ToiDisplay == null)
  //         || (event == "" && this.keToaNew.SangDisplay == null && this.keToaNew.ChieuDisplay == null && this.keToaNew.ToiDisplay == null)
  //       ) {
  //         this.keToaNew.SoNgayDung = this.TongSoNgaySuDung(this.keToaNew.SoLuong, this.keToaNew.SangDisplay, event, this.keToaNew.ChieuDisplay, this.keToaNew.ToiDisplay);
  //         return null;

  //       }
  //       else {
  //         this.keToaNew.SoNgayDung = this.TongSoNgaySuDung(this.keToaNew.SoLuong, this.keToaNew.SangDisplay, event, this.keToaNew.ChieuDisplay, this.keToaNew.ToiDisplay);
  //         return null;

  //       }
  //     case "Chieu":
  //       if ((event == undefined && this.keToaNew.TruaDisplay == undefined && this.keToaNew.SangDisplay == undefined && this.keToaNew.ToiDisplay == undefined)
  //         || (event == "" && this.keToaNew.TruaDisplay == "" && this.keToaNew.SangDisplay == "" && this.keToaNew.ToiDisplay == "")
  //         || (event == "" && this.keToaNew.TruaDisplay == "" && this.keToaNew.SangDisplay == "" && this.keToaNew.ToiDisplay == null)
  //         || (event == "" && this.keToaNew.TruaDisplay == "" && this.keToaNew.SangDisplay == null && this.keToaNew.ToiDisplay == null)
  //         || (event == "" && this.keToaNew.TruaDisplay == null && this.keToaNew.SangDisplay == null && this.keToaNew.ToiDisplay == null)
  //       ) {
  //         this.keToaNew.SoNgayDung = this.TongSoNgaySuDung(this.keToaNew.SoLuong, this.keToaNew.SangDisplay, this.keToaNew.TruaDisplay, event, this.keToaNew.ToiDisplay);
  //         return null;

  //       }
  //       else {
  //         this.keToaNew.SoNgayDung = this.TongSoNgaySuDung(this.keToaNew.SoLuong, this.keToaNew.SangDisplay, this.keToaNew.TruaDisplay, event, this.keToaNew.ToiDisplay);
  //         return null;

  //       }
  //     case "Toi":
  //       if ((event == undefined && this.keToaNew.SangDisplay == undefined && this.keToaNew.ChieuDisplay == undefined && this.keToaNew.TruaDisplay == undefined)
  //         || (event == "" && this.keToaNew.SangDisplay == "" && this.keToaNew.ChieuDisplay == "" && this.keToaNew.TruaDisplay == "")
  //         || (event == "" && this.keToaNew.SangDisplay == "" && this.keToaNew.ChieuDisplay == "" && this.keToaNew.TruaDisplay == null)
  //         || (event == "" && this.keToaNew.SangDisplay == "" && this.keToaNew.ChieuDisplay == null && this.keToaNew.TruaDisplay == null)
  //         || (event == "" && this.keToaNew.SangDisplay == null && this.keToaNew.ChieuDisplay == null && this.keToaNew.TruaDisplay == null)
  //       ) {
  //         this.keToaNew.SoNgayDung = this.TongSoNgaySuDung(this.keToaNew.SoLuong, this.keToaNew.SangDisplay, this.keToaNew.TruaDisplay, this.keToaNew.ChieuDisplay, event);
  //         return null;

  //       }
  //       else {
  //         this.keToaNew.SoNgayDung = this.TongSoNgaySuDung(this.keToaNew.SoLuong, this.keToaNew.SangDisplay, this.keToaNew.TruaDisplay, this.keToaNew.ChieuDisplay, event);
  //         return null;

  //       }
  //   }
  // }

  // TongSoNgaySuDung(soLuong: number, dungSang: string, dungTrua: string, dungChieu: string, dungToi: string) {
  //   let sang: number, trua: number, chieu: number, toi: number, sum: number, result: number;
  //   if (dungSang == "" || dungSang == null || dungSang == undefined) {
  //     sang = 0;
  //   }
  //   else {
  //     sang = CommonService.FormatStringFractionToFloat(dungSang);
  //   }

  //   if (dungTrua == "" || dungTrua == null || dungTrua == undefined) {
  //     trua = 0;
  //   }
  //   else {
  //     trua = CommonService.FormatStringFractionToFloat(dungTrua);
  //   }

  //   if (dungChieu == "" || dungChieu == null || dungChieu == undefined) {
  //     chieu = 0;
  //   }
  //   else {
  //     chieu = CommonService.FormatStringFractionToFloat(dungChieu);
  //   }

  //   if (dungToi == "" || dungToi == null || dungToi == undefined) {
  //     toi = 0;
  //   }
  //   else {
  //     toi = CommonService.FormatStringFractionToFloat(dungToi);
  //   }
  //   sum = sang + trua + chieu + toi;
  //   if (sum > this.keToaNew.SoLuong) {
  //     this.keToaNew.SoLuong = sum;
  //     soLuong = this.keToaNew.SoLuong;
  //   }

  //   this.apiService.post<any>("KhamBenh/FormatNumber?inputNumber=" + sum).subscribe(
  //     resultData => {
  //       if (resultData != null) {
  //         if (resultData == "0") {
  //           this.keToaNew.LieuDungTrenNgayDisplay = null;
  //           //this.keToaNew.SoLuong = null;
  //         }
  //         else {
  //           this.keToaNew.LieuDungTrenNgayDisplay = resultData;
  //           if (soLuong != null) {
  //             let soNgayDung = (soLuong / parseNumber(CommonService.FormatStringFractionToFloat(this.keToaNew.LieuDungTrenNgayDisplay)));
  //             result = Math.ceil(soNgayDung);
  //             this.keToaNew.SoNgayDung = result;
  //           }
  //         }
  //         return result;
  //       }
  //     }
  //   );
  //   return null;
  // }



  @HostListener('document:keydown', ['$event'])
  keyEvent(event: KeyboardEvent) {
    var self = this;

    // ctrl + F7
    if (event.ctrlKey && event.keyCode == 80) {
      event.preventDefault();
      if (this.dialog.openDialogs.length > 0) {
        return;
      }
      if (!self.isDisableButtonPrint) {
        self.showInToaThuocPopup();
      }
    }
  }

  changeRemoveValidator() {
    if (this.validationErrors != undefined && this.validationErrors != null && this.validationErrors != []) {
      let lenValidate = this.validationErrors.length;
      if (lenValidate > 0 && lenValidate != undefined && lenValidate != null) {
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
    if (this.validationErrors != undefined && this.validationErrors != null && this.validationErrors != []) {
      let lenValidate = this.validationErrors.length;
      if (lenValidate > 0 && lenValidate != undefined && lenValidate != null) {
        for (let i = 0; i < lenValidate; i++) {
          if (this.validationErrors[i].Field === "DuocPhamId") {
            this.validationErrors.splice(i, 1);
            break;
          }
        }
      }
      else {
        return null;
      }
    }
  }

  onkeyFocus() {
    this.isFocus.onKeytoFocus();
  }

  ganThongTinYeuCauKhamBenhPerevious() {

    this.dataYeuCauKhamBenhPrevious.CoKeToa = true;
    this.dataYeuCauKhamBenhPrevious.IcdchinhId = this.benhNhanHienTai.YeuCauKhamBenh.IcdchinhId;
    this.dataYeuCauKhamBenhPrevious.GhiChuICDChinh = this.benhNhanHienTai.YeuCauKhamBenh.GhiChuICDChinh;
    this.dataYeuCauKhamBenhPrevious.TomTatKetQuaCLS = this.benhNhanHienTai.YeuCauKhamBenh.TomTatKetQuaCLS;
    this.dataYeuCauKhamBenhPrevious.GhiChu = this.benhNhanHienTai.YeuCauKhamBenh.GhiChu;
    this.dataYeuCauKhamBenhPrevious.CoTaiKham = this.benhNhanHienTai.YeuCauKhamBenh.CoTaiKham;
    this.dataYeuCauKhamBenhPrevious.NgayTaiKham = this.benhNhanHienTai.YeuCauKhamBenh.NgayTaiKham;
    this.dataYeuCauKhamBenhPrevious.GhiChuTaiKham = this.benhNhanHienTai.YeuCauKhamBenh.GhiChuTaiKham;
    this.dataYeuCauKhamBenhPrevious.CoDieuTriNgoaiTru = this.benhNhanHienTai.YeuCauKhamBenh.CoDieuTriNgoaiTru;
    this.dataYeuCauKhamBenhPrevious.DichVuKyThuatBenhVienId = this.benhNhanHienTai.YeuCauKhamBenh.YeuCauDichVuKyThuat.DichVuKyThuatBenhVienId;
    this.dataYeuCauKhamBenhPrevious.ThoiDiemBatDauDieuTri = this.benhNhanHienTai.YeuCauKhamBenh.YeuCauDichVuKyThuat.ThoiDiemBatDauDieuTri;
    this.dataYeuCauKhamBenhPrevious.SoLan = this.benhNhanHienTai.YeuCauKhamBenh.YeuCauDichVuKyThuat.SoLan;

    this.dataYeuCauKhamBenhPrevious.CoChuyenVien = this.benhNhanHienTai.YeuCauKhamBenh.CoChuyenVien;
    this.dataYeuCauKhamBenhPrevious.KhoaPhongNhapVienId = this.benhNhanHienTai.YeuCauKhamBenh.KhoaPhongNhapVienId;
    this.dataYeuCauKhamBenhPrevious.TenKhoaPhongNhapVien = this.benhNhanHienTai.YeuCauKhamBenh.TenKhoaPhongNhapVien;
    this.dataYeuCauKhamBenhPrevious.TinhTrangBenhNhanChuyenVien = this.benhNhanHienTai.YeuCauKhamBenh.TinhTrangBenhNhanChuyenVien;
    this.dataYeuCauKhamBenhPrevious.LoaiLyDoChuyenVien = this.benhNhanHienTai.YeuCauKhamBenh.LoaiLyDoChuyenVien;
    this.dataYeuCauKhamBenhPrevious.ThoiDiemChuyenVien = this.benhNhanHienTai.YeuCauKhamBenh.ThoiDiemChuyenVien;
    this.dataYeuCauKhamBenhPrevious.PhuongTienChuyenVien = this.benhNhanHienTai.YeuCauKhamBenh.PhuongTienChuyenVien
    this.dataYeuCauKhamBenhPrevious.NhanVienHoTongChuyenVienId = this.benhNhanHienTai.YeuCauKhamBenh.NhanVienHoTongChuyenVienId;
    this.dataYeuCauKhamBenhPrevious.CoNhapVien = this.benhNhanHienTai.YeuCauKhamBenh.CoNhapVien;
    this.dataYeuCauKhamBenhPrevious.LyDoNhapVien = this.benhNhanHienTai.YeuCauKhamBenh.LyDoNhapVien;

    const yeuCauKhamBenhICDKhacs = [];
    this.benhNhanHienTai.YeuCauKhamBenh.YeuCauKhamBenhICDKhacs.forEach(val => yeuCauKhamBenhICDKhacs.push(Object.assign({}, val)));
    this.dataYeuCauKhamBenhPrevious.YeuCauKhamBenhICDKhacs = yeuCauKhamBenhICDKhacs;
    this.dataYeuCauKhamBenhPrevious.CachGiaiQuyet = this.benhNhanHienTai.YeuCauKhamBenh.CachGiaiQuyet;

  }

  openCombobox(event: any) {
    if (event) {
      this.isSelectDuocPham = true;
    }
    else {
      this.isSelectDuocPham = false;
    }
  }

  InVatTuPopup() {
    let lstDataVatTuCurrent = this.gridVatTu.getAllDataFromDatasource();
    this.benhNhanHienTai.YeuCauKhamBenh.CheckValidator = false;
    var self = this;
    var showDialog = self.dialog.open(LoadingComponent, {
      disableClose: true,
      width: '200px',
      height: '90px',
      data: { Title: 'Đang tải dữ liệu...' }
    });
    self.validationErrors = [];
    self.ref.detectChanges();
    if (self.authService.hasPermission(self.documentType, SecurityOperation.Update)) {
      if (self.documentType == DocumentType.KhamBenhDangKham || self.benhNhanHienTai.YeuCauKhamBenh.IsKhamBenhDangKham) {
        self.benhNhanHienTai.YeuCauKhamBenh.IsKhamBenhDangKham = true;
      }
      self.apiService.post<any>("KhamBenh/LuuKetLuan", self.benhNhanHienTai.YeuCauKhamBenh).subscribe(
        (res) => {
          self.benhNhanHienTai.YeuCauKhamBenh.YeuCauKhamBenhICDKhacs = res.YeuCauKhamBenhICDKhacs;
          self.benhNhanHienTai.YeuCauKhamBenh.IsChangeChanDoan = false;
          this.ganThongTinYeuCauKhamBenhPerevious();
          showDialog.close()
          self.dialog
            .open(LanKhamHienTaiInVatTuPopupComponent, {
              disableClose: true,
              width: "1200px",
              data: { YeuCauKhamBenhId: this.benhNhanHienTai.YeuCauKhamBenhId, ListGridVatTu: lstDataVatTuCurrent, YeuCauTiepNhanId: this.benhNhanHienTai.YeuCauTiepNhanId },
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
    } else {
      showDialog.close();
      self.notificationService.showError(SystemMessage.UnAuthorizedMessage);
    }
  }

  suaVatTu(dataItem: any) {
    var self = this;
    self.vatTuEdit = dataItem;
    let vatTuThanhToanVo = {
      YeuCauKhamBenhId: self.benhNhanHienTai.YeuCauKhamBenhId,
      YeuCauKhamBenhDonVTYTChiTietId: dataItem.Id,
      IsKhamBenhDangKham: false
    }
    let vatTuEditobj = Object.assign({}, dataItem);
    self.validationErrors = null;
    self.ref.detectChanges();
    if (self.authService.hasPermission(self.documentType, SecurityOperation.Update)) {
      if (self.documentType == DocumentType.KhamBenhDangKham || self.benhNhanHienTai.YeuCauKhamBenh.IsKhamBenhDangKham) {
        vatTuThanhToanVo.IsKhamBenhDangKham = true;
      }
      self.apiService.post<any>("KhamBenh/KiemTraVatTuChiTietThanhToan", vatTuThanhToanVo).subscribe(
        () => {
          self.dialog.open(ChinhSuaVatTuChiTietPopupComponent, {
            disableClose: false,
            width: '1500px',
            data: { Model: vatTuEditobj, benhNhanHienTai: self.benhNhanHienTai, documentType: self.documentType, IsKhamBenhDangKham: self.benhNhanHienTai.YeuCauKhamBenh.IsKhamBenhDangKham },
          }).afterClosed().subscribe(result => {
            if (result != undefined && result.Status == "CapNhat") {
              // self.notificationService.showSuccess(CommonService.format(SystemMessage.ActionSuccessfully, ["Chỉnh sửa"]));
              let mess = CommonService.format(SystemMessage.ActionSuccessfully, ["Chỉnh sửa"]);
              if (result.MucTranChiPhi == "NotOK") {
                mess += "Toa thuốc hiện tại đang vượt mức trần chi phí kê toa.";
                self.notificationService.showWarning(mess);
              } else {
                self.notificationService.showSuccess(mess);
              }
              self.gridVatTu.search();
            }
          });
        },
        (err: ApiError) => {
          self.validationErrors = err.ValidationErrors;
          if (err.Message != "Validation Failed") {
            self.notificationService.showError(err.Message);
          }
        }
      );
    } else {
      self.notificationService.showError(SystemMessage.UnAuthorizedMessage);
    }
  }

  xoaVatTu(dataItem: any) {
    var self = this;
    self.vatTuDelete = dataItem;
    self.vatTuDelete.DuocPhamId = dataItem.VatTuBenhVienId;
    self.vatTuDelete.IsKhamBenhDangKham = self.documentType == DocumentType.KhamBenhDangKham || self.benhNhanHienTai.YeuCauKhamBenh.IsKhamBenhDangKham;
    let comfirm = "xóa";
    if (self.authService.hasPermission(self.documentType, SecurityOperation.Delete)) {
      self.dialog.open(ConfirmComponent, {
        disableClose: false,
        width: '400px',
        data: { Title: "Xác nhận", Message: CommonService.format(SystemMessage.MessLockTemplate, [comfirm, "vật tư"]) }
      }).afterClosed().subscribe(result => {
        if (result == "Yes") {
          self.apiService.post("KhamBenh/DeleteVatTuChiTiet", self.vatTuDelete).subscribe(
            () => {
              self.notificationService.showSuccess(CommonService.format(SystemMessage.ActionSuccessfully, ["Xóa"]));
              self.keToaNew = new KeToaItem();
              self.chonKhoThuocBanDauTheoBHYT();
              self.gridVatTu.search();
            },
            (err: ApiError) => {
              self.validationErrors = err.ValidationErrors;
              if (err.Message != "Validation Failed") {
                self.notificationService.showError(err.Message);
              }
            });
        }
      });
    }
    else {
      self.notificationService.showError(SystemMessage.UnAuthorizedMessage);
    }
  }
  onDataBoundVatTuGrid(event: any) {
    if (event != undefined && event != null) {
      if (event.Data.length == 0) {
        this.benhNhanHienTai.YeuCauKhamBenh.IsShowGridVatTu = false;
      }
      this.dataToSumThanhTienVatTu = event.Data;
      this.dataVatTu.emit(event.Data);

    } else {
      this.benhNhanHienTai.YeuCauKhamBenh.IsShowGridVatTu = false;
    }
  }

  themThuocKhongBHYT() {
    var self = this;
    if (self.authService.hasPermission(self.documentType, SecurityOperation.Add)) {
      self.dialog.open(ThemThuocKhongBhytComponent, {
        disableClose: false,
        width: '1100px',
        data: { documentType: self.documentType, yeuCauKhamBenhId: self.benhNhanHienTai.YeuCauKhamBenhId },
      }).afterClosed().subscribe(() => {
        self.gridToaThuoc.search();
        // if (result != undefined && result != null && result.Status == "Them") {
        //   // self.keToaNew.DuocPhamId = result.DuocPhamId;
        //   // self.keToaNew.Ten = result.Ten;
        //   // let res = { KeyId: result.DuocPhamId, LoaiDuocPhamHoacVatTu: 1 };
        //   // self.chonDuoc(res);
        // }
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

  tangGiamSTT(dataItem: any, text: string) {
    var self = this;
    var messTang = "Tăng STT";
    var messGiam = "Giảm STT";
    var mess = "";
    let thuocEditobj = Object.assign({}, dataItem);

    //BVHD-3751
    thuocEditobj.IsKhamBenhDangKham = self.documentType == DocumentType.KhamBenhDangKham || self.benhNhanHienTai.YeuCauKhamBenh.IsKhamBenhDangKham;

    if (text == 'tang') {
      thuocEditobj.LaTangSTT = true;
      mess = CommonService.format(SystemMessage.ActionSuccessfully, [messTang]);
    } else if (text == 'giam') {
      thuocEditobj.LaTangSTT = false;
      mess = CommonService.format(SystemMessage.ActionSuccessfully, [messGiam]);
    }
    if (self.authService.hasPermission(self.documentType, SecurityOperation.Update)) {
      self.savingPage();
      self.apiService.post<any>("KhamBenh/TangHoacGiamSTTDonThuocChiTiet", thuocEditobj).subscribe(
        () => {
          self.gridToaThuoc.search();
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

}
