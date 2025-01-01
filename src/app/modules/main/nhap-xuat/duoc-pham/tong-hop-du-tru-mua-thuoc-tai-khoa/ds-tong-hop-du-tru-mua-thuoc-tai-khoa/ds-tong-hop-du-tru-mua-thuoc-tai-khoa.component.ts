import { Component, OnInit, ViewChild, TemplateRef, ChangeDetectorRef, SimpleChanges, Input } from "@angular/core";
import { MatDialog } from "@angular/material";
import { ActivatedRoute, Router } from "@angular/router";
import { DocumentType } from "src/app/shared/enum/document-type.enum";

import { FormControl } from '@angular/forms';
import { GridComponent } from "src/app/shared/component/grid/grid.component";
import { AuthService } from "src/app/core/services/auth.service";
import { NotificationService } from "src/app/core/services/notification.service";

import { ApiService } from 'src/app/core/services/api.service';
import { CommonService } from "src/app/core/utilities/common.helper";
import { ApiError } from 'src/app/shared/models/api-error.model';
import { SecurityOperation } from 'src/app/shared/enum/security-operation.enum';
import { SystemMessage } from 'src/app/shared/configdata/system-message';
import { LoadingComponent } from 'src/app/shared/component/dialogs/loading/loading.component';
import { Location } from '@angular/common';
import { LocalStorageHelper } from 'src/app/core/utilities/local-storage.helper';
import { GroupDescriptor, SortDescriptor } from '@progress/kendo-data-query';

import icSearch from "@iconify/icons-ic/twotone-search";
import icMoreHoriz from '@iconify/icons-ic/twotone-more-horiz';
import icDelete from '@iconify/icons-ic/twotone-delete';
import icEdit from '@iconify/icons-ic/twotone-edit';
import icAdd from '@iconify/icons-ic/twotone-add';
import icCancel from "@iconify/icons-ic/cancel";
import icClose from "@iconify/icons-ic/twotone-close";
import icPrint from "@iconify/icons-ic/twotone-print";
import icFileExcel from "@iconify/icons-fa-solid/file-excel";
import { DuyetDuTruMuaDuocPhamViewModel, ListStatusSelectTabTHDTKhoa, ThongTinLyDoHuyDuyetTaiKhoa, TongHopDuTruMuaThuocTaiKhoa, TongHopDuTruMuaThuocTaiKhoaSreach } from '../tong-hop-du-tru-mua-thuoc-tai-khoa.model';
import { stagger60ms } from 'src/@vex/animations/stagger.animation';
import { fadeInUp400ms } from 'src/@vex/animations/fade-in-up.animation';
import { ConfirmComponent } from 'src/app/shared/component/dialogs/confirm/confirm.component';
import { TongHopDuTruMuaThuocTaiKhoaKhongDuyetComponent } from '../tong-hop-du-tru-mua-thuoc-tai-khoa-khong-duyet/tong-hop-du-tru-mua-thuoc-tai-khoa-khong-duyet.component';
import icInfo from '@iconify/icons-ic/baseline-info';

@Component({
  selector: 'app-ds-tong-hop-du-tru-mua-thuoc-tai-khoa',
  templateUrl: './ds-tong-hop-du-tru-mua-thuoc-tai-khoa.component.html',
  styleUrls: ['./ds-tong-hop-du-tru-mua-thuoc-tai-khoa.component.scss'],
  animations: [stagger60ms, fadeInUp400ms],
})
export class DsTongHopDuTruMuaThuocTaiKhoaComponent implements OnInit {
  documentType: DocumentType;
  danhSachTongHopDuTruMuaThuocTaiKhoa: TongHopDuTruMuaThuocTaiKhoaSreach;
  lstStatusSelectTabTHDTKhoa: ListStatusSelectTabTHDTKhoa = new ListStatusSelectTabTHDTKhoa();
  thongTinLyDoHuyDuyetTaiKhoa = {} as ThongTinLyDoHuyDuyetTaiKhoa;
  duyetDuTruMuaDuocPhamViewModel = {} as DuyetDuTruMuaDuocPhamViewModel;
  tongHopDuTruMuaThuocTaiKhoa: TongHopDuTruMuaThuocTaiKhoa[] = [];
  baseRoute: string = "/nhap-xuat/duoc-pham/tong-hop-mua-duoc-pham-tai-khoa";
  khos: any[] = [];
  hdts: any[] = [];
  icInfo = icInfo;
  urlGetDataGridChildAsync = "YeuCauMuaDuocPham/GetDuTruMuaDuocPhamDangChoXuLyTaiKhoaChiTietForGridAsync";
  urlGetTotalPageGridChild: string = "YeuCauMuaDuocPham/GetTotalDuTruMuaDuocPhamDangChoXuLyTaiKhoaChiTietForGridAsync";

  urlDSTHDTTuChoiChildAsync: string = "YeuCauMuaDuocPham/GetDSTHDTTuChoiChildForGridAsync";
  urlGetTotalDSTHDTTuChoiChild: string = "YeuCauMuaDuocPham/GetTotalDSTHDTTuChoiChildForGridAsync";

  popupLoadingData: any = null;
  addtionStringDefault: string = null;
  addtionStringDefaultDaXuLy: string = null;
  addtionStringDefaultTuChoi: string = null;

  gridColumns: any[] = [];
  gridDaXuLyColumns: any[] = [];
  gridDaXuLyChiTietColumns: any[] = [];
  gridDaXuLyChiTietChildColumns: any[] = [];

  urlGetDataDaXuLyChiTietChild = "YeuCauMuaDuocPham/GetDuTruMuaDuocPhamChiTietForGridAsyncChild";
  urlGetTotalDaXuLyChiTietChild = "YeuCauMuaDuocPham/GetTotalDuTruMuaDuocPhamChiTietForGridAsyncChild";

  confrim: any;


  gridChildThuocVacXinColumns: any[] = [];
  gridChildTuChoiChildColumns: any[] = [];

  gridChildThuocHoaChatColumns: any[] = [];
  gridTuChoiXuLyColumns: any[] = [];

  validationErrors: any[] = [];
  icClose = icClose;
  icCancel = icCancel;
  icDelete = icDelete;
  icMoreHoriz = icMoreHoriz;
  icFileExcel = icFileExcel;
  icEdit = icEdit;
  icAdd = icAdd;
  icPrint = icPrint;
  icSearch = icSearch;
  holdQuery: any = null;

  searchCtrl = new FormControl();
  searchCtrlDaXuLy = new FormControl();
  searchCtrlTuChoi = new FormControl();

  groupChiTietTabChoGoi: GroupDescriptor[] = [{ field: 'Nhom' }];
  groupTuChois: GroupDescriptor[] = [{ field: 'Nhom' }];
  groupDaXuLyChiTietChilds: GroupDescriptor[] = [{ field: 'Nhom' }];

  @ViewChild('actionTemplate', { static: true }) actionTemplate: TemplateRef<any>;
  @ViewChild('tinhTrangTemplate', { static: true }) tinhTrangTemplate: TemplateRef<any>;
  @ViewChild('ngayYeuCauDaXuLyTemplate', { static: true }) ngayYeuCauDaXuLyTemplate: TemplateRef<any>;
  @ViewChild('ngayYeuCauDetailDaXuLyTemplate', { static: true }) ngayYeuCauDetailDaXuLyTemplate: TemplateRef<any>;

  @ViewChild('ngayKhoDuocDaXuLyTemplate', { static: true }) ngayKhoDuocDaXuLyTemplate: TemplateRef<any>;
  @ViewChild('ngayTruongKhoaDaXuLyTemplate', { static: true }) ngayTruongKhoaDaXuLyTemplate: TemplateRef<any>;
  @ViewChild('khoTongTonTemplate', { static: true }) khoTongTonTemplate: TemplateRef<any>;
  @ViewChild('ngayGiamDocDaXuLyTemplate', { static: true }) ngayGiamDocDaXuLyTemplate: TemplateRef<any>;
  @ViewChild('hdChuaNhapTemplate', { static: true }) hdChuaNhapTemplate: TemplateRef<any>;
  @ViewChild("tuNgayTemplate", { static: true }) tuNgayTemplate: TemplateRef<any>;
  @ViewChild("denNgayTemplate", { static: true }) denNgayTemplate: TemplateRef<any>;
  @ViewChild("ngayTaiKhoaTemplate", { static: true }) ngayTaiKhoaTemplate: TemplateRef<any>;
  @ViewChild("ngayTaiKhoaDuocTemplate", { static: true }) ngayTaiKhoaDuocTemplate: TemplateRef<any>;
  @ViewChild("ngayTaiGiamDocTemplate", { static: true }) ngayTaiGiamDocTemplate: TemplateRef<any>;
  @ViewChild('soPhieuTemplate', { static: true }) soPhieuTemplate: TemplateRef<any>;
  @ViewChild('soPhieuDaXuLyTemplate', { static: true }) soPhieuDaXuLyTemplate: TemplateRef<any>;
  @ViewChild('soPhieuDaXuLyChiTietTemplate', { static: true }) soPhieuDaXuLyChiTietTemplate: TemplateRef<any>;

  @ViewChild('nhomGroupTuChoiHeaderTemplate', { static: true }) nhomGroupTuChoiHeaderTemplate: TemplateRef<any>;
  @ViewChild('nhomGroupDaXuLyChildHeaderTemplate', { static: true }) nhomGroupDaXuLyChildHeaderTemplate: TemplateRef<any>;

  @ViewChild('ngayYeuCauTuChoiTemplate', { static: true }) ngayYeuCauTuChoiTemplate: TemplateRef<any>;
  @ViewChild('ngayTuChoiTemplate', { static: true }) ngayTuChoiTemplate: TemplateRef<any>;

  @ViewChild('soPhieuTuChoiTemplate', { static: true }) soPhieuTuChoiTemplate: TemplateRef<any>;
  @ViewChild('STTTemplate', { static: true }) STTTemplate: TemplateRef<any>;
  @ViewChild('nhomGroupHeaderTemplate', { static: true }) nhomGroupHeaderTemplate: TemplateRef<any>;
  // @ViewChild('gridChoDuyet', { static: false }) gridChoDuyet: GridComponent;

  @ViewChild('gridChoDuyet', { read: GridComponent, static: false }) gridChoDuyet: GridComponent;
  @ViewChild('gridChildDaXuLy', { read: GridComponent, static: false }) gridChildDaXuLy: GridComponent;
  @ViewChild('gridChildTuChoi', { read: GridComponent, static: false }) gridChildTuChoi: GridComponent;
  // @ViewChild('gridChildDaXuLy', { static: false }) gridChildDaXuLy: GridComponent;
  // @ViewChild('gridChildTuChoi', { static: false }) gridChildTuChoi: GridComponent;

  @ViewChild('nhomChiTietTabChoGoiTemplate', { static: true }) nhomChiTietTabChoGoiTemplate: TemplateRef<any>;

  @Input() sort: SortDescriptor[] = [
    {
      field: "NgayYeuCau",
      dir: "desc",
    },
  ];
  
  sortDuTruChoXuLy: SortDescriptor[] =
    [
      {
        field: "SoPhieu",
        dir: "asc"
      }];


  sortDuTruChild: SortDescriptor[] =
    [
      {
        field: "Id",
        dir: "asc"
      }];

  public groups: GroupDescriptor[] = [{
    field: 'TrangThai', aggregates: [
      { field: 'Nhom', aggregate: 'count' },
      { field: 'TrangThai', aggregate: 'count' },
    ]
  }];

 sortDaGoi: SortDescriptor[] =
  [{
    field: "TinhTrang",
    dir: "asc"
  },{
    field: "NgayYeuCau",
    dir: "asc"
  }];

  constructor(
    private dialog: MatDialog,
    private router: Router,
    private apiService: ApiService,
    private authService: AuthService,
    private notificationService: NotificationService,
    private cd: ChangeDetectorRef,
    private route: ActivatedRoute,
    private location: Location,
  ) { }

  ngOnInit() {
    this.documentType = DocumentType.DanhSachTongHopDuTruMuaDuocPhamTaiKhoa;
    this.danhSachTongHopDuTruMuaThuocTaiKhoa = new TongHopDuTruMuaThuocTaiKhoaSreach();
    this.backWithSearch();

    this.gridColumns = [
      { Field: "TrangThai", Title: "TrangThai", Width: 100, Hidden: true, TemplateGroupHeader: this.nhomGroupHeaderTemplate },
      { Field: "SoPhieu", Title: "Số Phiếu", Width: 120, Sortable: true, Template: this.soPhieuTemplate },
      { Field: "LoaiNhom", Title: "Nhóm", Width: 150, Sortable: true },
      { Field: "TenKho", Title: "Kho", MinWidth: 150, Sortable: true },
      { Field: "KyDuTru", Title: "Kỳ dự trù", Width: 160, Sortable: true },
      { Field: "NgayYeuCauDisplay", Title: "Ngày yêu cầu", Width: 150, Sortable: true },
      { Field: "NguoiYeuCau", Title: "Người yêu cầu", Width: 150, Sortable: true },
      { Field: "NgayTruongKhoaDuyetDisplay", Title: "Ngày T.Khoa Duyệt", Width: 150, Sortable: true },
      { Field: "Action", Title: "", Width: 150, Template: this.actionTemplate },
    ];

    //grid đã xữ lý
    this.gridDaXuLyColumns = [
      { Field: "SoPhieu", Title: "Số Phiếu", Width: 120, Sortable: true, Template: this.soPhieuDaXuLyTemplate },
      { Field: "TenKhoa", Title: "Khoa", Width: 150, Sortable: true },
      { Field: "KyDuTru", Title: "kỳ dự trù", Width: 160, Sortable: true },
      { Field: "NguoiYeuCau", Title: "Người Yêu Cầu", Width: 150, Sortable: true },
      { Field: "NgayYeuCau", Title: "Ngày Yêu Cầu", Width: 150, Sortable: true, Template: this.ngayYeuCauDaXuLyTemplate },
      { Field: "TinhTrang", Title: "Tình Trạng", Width: 150, Template: this.tinhTrangTemplate },
      { Field: "NgayKhoDuocDuyet", Title: "Ngày K.Dược Duyệt", Width: 150, Sortable: true, Template: this.ngayKhoDuocDaXuLyTemplate },
      { Field: "NgayGiamDocDuyet", Title: "Ngày G.ĐỐC Duyệt", Width: 150, Sortable: true, Template: this.ngayGiamDocDaXuLyTemplate },
      { Field: "GhiChu", Title: "Ghi chú", Width: 150, Sortable: true },

      // { Field: "Action", Title: "", Width: 100, Template: this.actionTemplate },
    ];

    this.gridDaXuLyChiTietColumns = [
      { Field: "SoPhieu", Title: "Số Phiếu", Width: 120, Template: this.soPhieuDaXuLyChiTietTemplate },
      { Field: "LoaiNhom", Title: "Nhóm", Width: 120 },
      { Field: "TenKho", Title: "Kho", Width: 150 },
      { Field: "KyDuTru", Title: "kỳ dự trù", Width: 160 },
      { Field: "NgayYeuCau", Title: "Ngày Yêu Cầu", Width: 150, Template: this.ngayYeuCauDetailDaXuLyTemplate },
      { Field: "NguoiYeuCau", Title: "Người Yêu Cầu", Width: 150 },
      { Field: "NgayTruongKhoaDuyet", Title: "Ngày T.Khoa Duyệt", Width: 150, Template: this.ngayTruongKhoaDaXuLyTemplate },
    ];


    this.gridDaXuLyChiTietChildColumns = [
      { Field: "Nhom", Title: "Nhóm", Width: 100, Hidden: true, TemplateGroupHeader: this.nhomGroupDaXuLyChildHeaderTemplate },
      { Field: "TenDuocPham", Title: "Tên", Width: 100, ShowTooltip: true },
      { Field: "HoatChat", Title: "Hoạt chất", Width: 120, ShowTooltip: true },
      { Field: "NongDoHamLuong", Title: "Nồng độ/Hàm lượng", Width: 80 },
      { Field: "DonViTinh", Title: "ĐVT", Width: 50 },
      { Field: "DuongDung", Title: "Đường Dùng", Width: 50 },
      { Field: "HangSanXuat", Title: "Hãng SX", Width: 100 },
      { Field: "NuocSanXuat", Title: "Nước SX", Width: 100 },
      { Field: "NhomDuPhong", Title: "Nhóm Đ.Trị/D.Phòng", Width: 80 },
      { Field: "SoLuongDuTru", Title: "SL Dự Trù", Width: 120 },
      { Field: "SoLuongDuKienSuDung", Title: "SL D.KIẾN S.DỤNG TRONG KỲ", Width: 120 },
      { Field: "SoLuongDuTruTruongKhoaDuyet", Title: "SL Dự Trù T.Khoa Duyệt", Width: 100 },
    ];

    //grid từ chối
    this.gridTuChoiXuLyColumns = [
      { Field: "SoPhieu", Title: "Số Phiếu", Width: 120, Sortable: true, Template: this.soPhieuTuChoiTemplate },
      { Field: "LoaiNhom", Title: "Nhóm", Width: 150, Sortable: true },
      { Field: "TenKho", Title: "Kho", Width: 150, Sortable: true },
      { Field: "KyDuTru", Title: "kỳ dự trù", Width: 160, Sortable: true },
      { Field: "NgayYeuCau", Title: "Ngày yêu cầu", Width: 150, Sortable: true, Template: this.ngayYeuCauTuChoiTemplate },
      { Field: "NguoiYeuCau", Title: "Người yêu cầu", Width: 150, Sortable: true },
      { Field: "NgayTuChoi", Title: "Ngày Từ Chối", Width: 150, Sortable: true, Template: this.ngayTuChoiTemplate },
      { Field: "NguoiTuChoi", Title: "Người từ chối", Width: 150, Sortable: true },
      { Field: "LyDoTuChoi", Title: "Lý Do", MinWidth: 150, Sortable: true },
    ];

    this.gridChildTuChoiChildColumns = [
      // { Field: "Nhom", Title: "Loại", Width: 100, ShowTooltip: true },
      { Field: "Nhom", Title: "Nhóm", Width: 100, Sortable: true, Hidden: true, TemplateGroupHeader: this.nhomGroupTuChoiHeaderTemplate },
      { Field: "TenDuocPham", Title: "Tên", Width: 100, ShowTooltip: true },
      { Field: "HoatChat", Title: "Hoạt chất", Width: 120, ShowTooltip: true },
      { Field: "HamLuong", Title: "Nồng độ/Hàm lượng", Width: 80 },
      { Field: "SoDangKy", Title: "SĐK", Width: 50 },
      { Field: "DonViTinh", Title: "ĐVT", Width: 50 },
      { Field: "DuongDung", Title: "Đường Dùng", Width: 50 },
      { Field: "HangSanXuat", Title: "Hãng SX", Width: 100 },
      { Field: "NuocSanXuat", Title: "Nước SX", Width: 100 },
      { Field: "NhomDuPhong", Title: "Nhóm Đ.Trị/D.Phòng", Width: 80 },
      { Field: "SoLuongDuTru", Title: "SL Dự Trù", Width: 120 },
      { Field: "SoLuongDuKienSuDung", Title: "SL D.KIẾN S.DỤNG TRONG KỲ", Width: 120 },
    ];

    this.gridChildThuocVacXinColumns = [
      { Field: "Nhom", Title: "Loại", Width: 100, ShowTooltip: true, Hidden: true, TemplateGroupHeader: this.nhomChiTietTabChoGoiTemplate },
      { Field: "TenDuocPham", Title: "Tên", Width: 100, ShowTooltip: true },
      { Field: "HoatChat", Title: "Hoạt chất", Width: 120, ShowTooltip: true },
      { Field: "HamLuong", Title: "Nồng độ/Hàm lượng", Width: 80 },
      { Field: "SoDangKy", Title: "SĐK", Width: 50 },
      { Field: "DonViTinh", Title: "ĐVT", Width: 50 },
      { Field: "DuongDung", Title: "Đường Dùng", Width: 50 },
      { Field: "HangSanXuat", Title: "Hãng SX", Width: 100 },
      { Field: "NuocSanXuat", Title: "Nước SX", Width: 100 },
      { Field: "NhomDuPhong", Title: "Nhóm Đ.Trị/D.Phòng", Width: 80 },
      { Field: "SoLuongDuTru", Title: "SL Dự Trù", Width: 120 },
      { Field: "SoLuongDuKienSuDung", Title: "SL D.KIẾN S.DỤNG TRONG KỲ", Width: 120 },
      { Field: "KhoDuTruTon", Title: "Kho D.Trù Tồn", Width: 80 },
      { Field: 'KhoTongTon', Title: 'Kho Tổng Tồn', Width: 80, Template: this.khoTongTonTemplate },
      { Field: 'HDChuaNhap', Title: 'H.Đồng Chưa Nhập', Width: 100, Template: this.hdChuaNhapTemplate },
    ];


  }

  backWithSearch() {
    let hasLocalSearchString = false;
    if (this.route.snapshot.queryParams.holdQuery != undefined) {
      let holdQuery = this.route.snapshot.queryParams.holdQuery;
      if (holdQuery != null && holdQuery) {

        var additionalSearchString = LocalStorageHelper.getItem<string>("additionalSearchStringdanhSachTongHopDuTruMuaThuocTaiKhoa");
        var selectedTab = LocalStorageHelper.getItem<string>("additionalSearchStringdanhSachTongHopDuTruMuaThuocTaiKhoaSelectedTab");
        if (additionalSearchString != null) {
          this.danhSachTongHopDuTruMuaThuocTaiKhoa = JSON.parse(additionalSearchString);

          //Chờ xử lý
          if (this.danhSachTongHopDuTruMuaThuocTaiKhoa.RangeFromDate.TuNgay != null
            && this.danhSachTongHopDuTruMuaThuocTaiKhoa.RangeFromDate.TuNgay != 'null' && this.danhSachTongHopDuTruMuaThuocTaiKhoa.RangeFromDate.TuNgay != '') {
            this.danhSachTongHopDuTruMuaThuocTaiKhoa.RangeFromDate.startDate = new Date(this.danhSachTongHopDuTruMuaThuocTaiKhoa.RangeFromDate.startDate);
          }
          else {
            this.danhSachTongHopDuTruMuaThuocTaiKhoa.RangeFromDate.startDate = null;
          }

          if (this.danhSachTongHopDuTruMuaThuocTaiKhoa.RangeFromDate.DenNgay != null
            && this.danhSachTongHopDuTruMuaThuocTaiKhoa.RangeFromDate.DenNgay != 'null' && this.danhSachTongHopDuTruMuaThuocTaiKhoa.RangeFromDate.DenNgay != '') {
            this.danhSachTongHopDuTruMuaThuocTaiKhoa.RangeFromDate.endDate = new Date(this.danhSachTongHopDuTruMuaThuocTaiKhoa.RangeFromDate.endDate);
          } else {
            this.danhSachTongHopDuTruMuaThuocTaiKhoa.RangeFromDate.endDate = null;
          }

          // Đã xử lý
          if (this.danhSachTongHopDuTruMuaThuocTaiKhoa.RangeFromDateDaXuLy.TuNgay != null
            && this.danhSachTongHopDuTruMuaThuocTaiKhoa.RangeFromDateDaXuLy.TuNgay != 'null'
            && this.danhSachTongHopDuTruMuaThuocTaiKhoa.RangeFromDateDaXuLy.TuNgay != '') {
            this.danhSachTongHopDuTruMuaThuocTaiKhoa.RangeFromDateDaXuLy.startDate = new Date(this.danhSachTongHopDuTruMuaThuocTaiKhoa.RangeFromDateDaXuLy.startDate);
          }
          else {
            this.danhSachTongHopDuTruMuaThuocTaiKhoa.RangeFromDateDaXuLy.startDate = null;
          }

          if (this.danhSachTongHopDuTruMuaThuocTaiKhoa.RangeFromDateDaXuLy.DenNgay != null
            && this.danhSachTongHopDuTruMuaThuocTaiKhoa.RangeFromDateDaXuLy.DenNgay != 'null'
            && this.danhSachTongHopDuTruMuaThuocTaiKhoa.RangeFromDateDaXuLy.DenNgay != '') {
            this.danhSachTongHopDuTruMuaThuocTaiKhoa.RangeFromDateDaXuLy.endDate = new Date(this.danhSachTongHopDuTruMuaThuocTaiKhoa.RangeFromDateDaXuLy.endDate);
          } else {
            this.danhSachTongHopDuTruMuaThuocTaiKhoa.RangeFromDateDaXuLy.endDate = null;
          }

          //Từ chối

          if (this.danhSachTongHopDuTruMuaThuocTaiKhoa.RangeFromDateTuChoi.TuNgay != null
            && this.danhSachTongHopDuTruMuaThuocTaiKhoa.RangeFromDateTuChoi.TuNgay != 'null'
            && this.danhSachTongHopDuTruMuaThuocTaiKhoa.RangeFromDateTuChoi.TuNgay != '') {
            this.danhSachTongHopDuTruMuaThuocTaiKhoa.RangeFromDateTuChoi.startDate = new Date(this.danhSachTongHopDuTruMuaThuocTaiKhoa.RangeFromDateTuChoi.startDate);
          }
          else {
            this.danhSachTongHopDuTruMuaThuocTaiKhoa.RangeFromDateTuChoi.startDate = null;
          }

          if (this.danhSachTongHopDuTruMuaThuocTaiKhoa.RangeFromDateTuChoi.DenNgay != null
            && this.danhSachTongHopDuTruMuaThuocTaiKhoa.RangeFromDateTuChoi.DenNgay != 'null'
            && this.danhSachTongHopDuTruMuaThuocTaiKhoa.RangeFromDateTuChoi.DenNgay != '') {
            this.danhSachTongHopDuTruMuaThuocTaiKhoa.RangeFromDateTuChoi.endDate = new Date(this.danhSachTongHopDuTruMuaThuocTaiKhoa.RangeFromDateTuChoi.endDate);
          } else {
            this.danhSachTongHopDuTruMuaThuocTaiKhoa.RangeFromDateTuChoi.endDate = null;
          }

          hasLocalSearchString = true;
        }

        if (selectedTab != null) {
          this.lstStatusSelectTabTHDTKhoa = JSON.parse(selectedTab);
          if (this.lstStatusSelectTabTHDTKhoa.selectedTabChoXuLy == true) {
            if (additionalSearchString != null && this.gridChoDuyet != undefined) {
              this.gridChoDuyet._additionalSearchString = additionalSearchString;
            }
            this.addtionStringDefault = additionalSearchString;
          } else if (this.lstStatusSelectTabTHDTKhoa.selectedTabDaXuLy == true) {
            if (additionalSearchString != null && this.gridChildDaXuLy != undefined) {
              this.gridChildDaXuLy._additionalSearchString = additionalSearchString;
            }
            this.addtionStringDefaultDaXuLy = additionalSearchString;

          } else {
            if (additionalSearchString != null && this.gridChildTuChoi != undefined) {
              this.gridChildTuChoi._additionalSearchString = additionalSearchString;
            }
            this.addtionStringDefaultTuChoi = additionalSearchString;

          }

          hasLocalSearchString = true;
        }

      }
    }
    if (!hasLocalSearchString) {
      LocalStorageHelper.removeItem("additionalSearchStringdanhSachTongHopDuTruMuaThuocTaiKhoa");
      LocalStorageHelper.removeItem("additionalSearchStringdanhSachTongHopDuTruMuaThuocTaiKhoaSelectedTab");
    }
  }

  theFirstValueFormat(str: string) {
    let strGroup = str.split('.');
    if (strGroup.length != 0) {
      return strGroup[0];
    }
  }

  theFirstValueFormatChuKy(str: string) {
    let strGroup = str.split('.');
    if (strGroup.length != 0) {
      if (strGroup[1] !== undefined) {
        return strGroup[1];
      }
    }
  }

  blur() {
    this.timKiem();
  }

  onKey(event: any) {
    if (event.key == "Enter") {
      this.timKiem();
    }
  }
  // clearSearch() {
  //   this.danhSachTongHopDuTruMuaThuocTaiKhoa.SearchString = null;
  //   if (this.lstStatusSelectTabTHDTKhoa.selectedTabChoXuLy == true) {
  //     this.gridChoDuyet.search();
  //   } else if (this.lstStatusSelectTabTHDTKhoa.selectedTabDaXuLy == true) {
  //     this.gridChildDaXuLy.search();
  //   } else {
  //     this.gridChildTuChoi.search();
  //   }
  //   // this.gridChoDuyet.search();
  // }

  searchChanges(event: any) {
    var self = this;
    if (event != undefined && (event == null || event == "")) {
      if (self.lstStatusSelectTabTHDTKhoa.selectedTabChoXuLy == true) {
        if (self.gridChoDuyet != undefined) {
          self.gridChoDuyet.searchString = null;
        }
      } else if (self.lstStatusSelectTabTHDTKhoa.selectedTabDaXuLy == true) {
        if (self.gridChildDaXuLy != undefined) {
          self.gridChildDaXuLy.searchString = null;
        }
      } else {
        if (self.gridChildTuChoi != undefined) {
          self.gridChildTuChoi.searchString = null;
        }
      }
      self.timKiem();
    }
  }


  timKiem() {
    this.location.replaceState(this.baseRoute + '?holdQuery=true');

    // if (this.danhSachTongHopDuTruMuaThuocTaiKhoa.NgayYeuCauTuFormat != null) {
    //   this.danhSachTongHopDuTruMuaThuocTaiKhoa.FromDate = CommonService.formatDateTime(this.danhSachTongHopDuTruMuaThuocTaiKhoa.NgayYeuCauTuFormat, "dd/mm/yyyy");
    // } else {
    //   this.danhSachTongHopDuTruMuaThuocTaiKhoa.FromDate = null;
    // }

    // if (this.danhSachTongHopDuTruMuaThuocTaiKhoa.NgayYeuCauDenFormat != null) {
    //   this.danhSachTongHopDuTruMuaThuocTaiKhoa.ToDate = CommonService.formatDateTime(this.danhSachTongHopDuTruMuaThuocTaiKhoa.NgayYeuCauDenFormat, "dd/mm/yyyy");
    // } else {
    //   this.danhSachTongHopDuTruMuaThuocTaiKhoa.ToDate = null;
    // }

    //Chờ xử lý
    if (this.danhSachTongHopDuTruMuaThuocTaiKhoa.RangeFromDate != null && this.danhSachTongHopDuTruMuaThuocTaiKhoa.RangeFromDate.startDate != null) {
      this.danhSachTongHopDuTruMuaThuocTaiKhoa.RangeFromDate.TuNgay = CommonService.formatDateTime(this.danhSachTongHopDuTruMuaThuocTaiKhoa.RangeFromDate.startDate, "mm/dd/yyyy");
    }
    else {
      this.danhSachTongHopDuTruMuaThuocTaiKhoa.RangeFromDate.TuNgay = null;
    }
    if (this.danhSachTongHopDuTruMuaThuocTaiKhoa.RangeFromDate != null && this.danhSachTongHopDuTruMuaThuocTaiKhoa.RangeFromDate.endDate != null) {
      this.danhSachTongHopDuTruMuaThuocTaiKhoa.RangeFromDate.DenNgay = CommonService.formatDateTime(this.danhSachTongHopDuTruMuaThuocTaiKhoa.RangeFromDate.endDate, "mm/dd/yyyy");
    }
    else {
      this.danhSachTongHopDuTruMuaThuocTaiKhoa.RangeFromDate.DenNgay = null;
    }

    // Đã xử lý

    if (this.danhSachTongHopDuTruMuaThuocTaiKhoa.RangeFromDateDaXuLy != null && this.danhSachTongHopDuTruMuaThuocTaiKhoa.RangeFromDateDaXuLy.startDate != null) {
      this.danhSachTongHopDuTruMuaThuocTaiKhoa.RangeFromDateDaXuLy.TuNgay = CommonService.formatDateTime(this.danhSachTongHopDuTruMuaThuocTaiKhoa.RangeFromDateDaXuLy.startDate, "mm/dd/yyyy");
    }
    else {
      this.danhSachTongHopDuTruMuaThuocTaiKhoa.RangeFromDateDaXuLy.TuNgay = null;
    }
    if (this.danhSachTongHopDuTruMuaThuocTaiKhoa.RangeFromDateDaXuLy != null && this.danhSachTongHopDuTruMuaThuocTaiKhoa.RangeFromDateDaXuLy.endDate != null) {
      this.danhSachTongHopDuTruMuaThuocTaiKhoa.RangeFromDateDaXuLy.DenNgay = CommonService.formatDateTime(this.danhSachTongHopDuTruMuaThuocTaiKhoa.RangeFromDateDaXuLy.endDate, "mm/dd/yyyy");
    }
    else {
      this.danhSachTongHopDuTruMuaThuocTaiKhoa.RangeFromDateDaXuLy.DenNgay = null;
    }

    //Từ chối

    if (this.danhSachTongHopDuTruMuaThuocTaiKhoa.RangeFromDateTuChoi != null && this.danhSachTongHopDuTruMuaThuocTaiKhoa.RangeFromDateTuChoi.startDate != null) {
      this.danhSachTongHopDuTruMuaThuocTaiKhoa.RangeFromDateTuChoi.TuNgay = CommonService.formatDateTime(this.danhSachTongHopDuTruMuaThuocTaiKhoa.RangeFromDateTuChoi.startDate, "mm/dd/yyyy");
    }
    else {
      this.danhSachTongHopDuTruMuaThuocTaiKhoa.RangeFromDateTuChoi.TuNgay = null;
    }
    if (this.danhSachTongHopDuTruMuaThuocTaiKhoa.RangeFromDateTuChoi != null && this.danhSachTongHopDuTruMuaThuocTaiKhoa.RangeFromDateTuChoi.endDate != null) {
      this.danhSachTongHopDuTruMuaThuocTaiKhoa.RangeFromDateTuChoi.DenNgay = CommonService.formatDateTime(this.danhSachTongHopDuTruMuaThuocTaiKhoa.RangeFromDateTuChoi.endDate, "mm/dd/yyyy");
    }
    else {
      this.danhSachTongHopDuTruMuaThuocTaiKhoa.RangeFromDateTuChoi.DenNgay = null;
    }


    var queryString = JSON.stringify(this.danhSachTongHopDuTruMuaThuocTaiKhoa);

    if (this.lstStatusSelectTabTHDTKhoa.selectedTabChoXuLy == true) {
      console.log(this.danhSachTongHopDuTruMuaThuocTaiKhoa);

      if (this.gridChoDuyet != undefined && this.gridChoDuyet != null) {
        this.gridChoDuyet._additionalSearchString = queryString;
        this.gridChoDuyet.search();
      }
      this.unSelectedTab();
      this.lstStatusSelectTabTHDTKhoa.selectedTabChoXuLy = true;
      let queryStringLstselectedTab = JSON.stringify(this.lstStatusSelectTabTHDTKhoa);
      LocalStorageHelper.setItem("additionalSearchStringdanhSachTongHopDuTruMuaThuocTaiKhoaSelectedTab", queryStringLstselectedTab);

    } else if (this.lstStatusSelectTabTHDTKhoa.selectedTabDaXuLy == true) {
      if (this.gridChildDaXuLy != undefined && this.gridChildDaXuLy != null) {
        this.gridChildDaXuLy._additionalSearchString = queryString;
        this.gridChildDaXuLy.search();
      }

      this.unSelectedTab();
      this.lstStatusSelectTabTHDTKhoa.selectedTabDaXuLy = true;
      let queryStringLstselectedTab = JSON.stringify(this.lstStatusSelectTabTHDTKhoa);
      LocalStorageHelper.setItem("additionalSearchStringdanhSachTongHopDuTruMuaThuocTaiKhoaSelectedTab", queryStringLstselectedTab);
    } else {
      if (this.gridChildTuChoi != undefined && this.gridChildTuChoi != null) {
        this.gridChildTuChoi._additionalSearchString = queryString;
        this.gridChildTuChoi.search();
      }
      this.unSelectedTab();
      this.lstStatusSelectTabTHDTKhoa.selectedTabTuChoi = true;
      let queryStringLstselectedTab = JSON.stringify(this.lstStatusSelectTabTHDTKhoa);
      LocalStorageHelper.setItem("additionalSearchStringdanhSachTongHopDuTruMuaThuocTaiKhoaSelectedTab", queryStringLstselectedTab);
    }

    LocalStorageHelper.setItem("additionalSearchStringdanhSachTongHopDuTruMuaThuocTaiKhoa", queryString);
  }

  guiKhoaDuyetTatCa(val: any) {
    var kyDuTruMuaDuocPhamVatTuId = this.tongHopDuTruMuaThuocTaiKhoa.filter(cc => cc.TrangThai == val).map(cc => cc.KyDuTruMuaDuocPhamVatTuId)[0];
    if (this.authService.hasPermission(this.documentType, SecurityOperation.Update)) {
      this.router.navigate(["/nhap-xuat/duoc-pham/tong-hop-mua-duoc-pham-tai-khoa/gui/" + kyDuTruMuaDuocPhamVatTuId]);
    } else {
      this.notificationService.showError(SystemMessage.UnAuthorizedMessage);
    }
  }

  tuChoiDuyet(id: number) {

  }

  huyDuyet(id: number) {

  }

  chiTiet(id: number, trangThai: any) {
    if (trangThai == 1 || trangThai == 0) { //Đã duyệt hoặc từ chối
      if (this.authService.hasPermission(this.documentType, SecurityOperation.Process)) {
        this.router.navigate(["/nhap-xuat/duoc-pham/tong-hop-mua-duoc-pham-tai-khoa/chi-tiet/" + id]);
      } else {
        this.notificationService.showError(SystemMessage.UnAuthorizedMessage);
      }
    } else { // chờ duyệt
      if (this.authService.hasPermission(this.documentType, SecurityOperation.Update)) {
        this.router.navigate(["/nhap-xuat/duoc-pham/tong-hop-mua-duoc-pham-tai-khoa/duyet/" + id + "/" + false]);
      } else {
        this.notificationService.showError(SystemMessage.UnAuthorizedMessage);
      }
    }

  }

  chiTietTuChoi(id: number) {
    if (this.authService.hasPermission(this.documentType, SecurityOperation.Process)) {
      this.router.navigate(["/nhap-xuat/duoc-pham/tong-hop-mua-duoc-pham-tai-khoa/chi-tiet/" + id]);
    } else {
      this.notificationService.showError(SystemMessage.UnAuthorizedMessage);
    }
  }

  inPhieuLinh(id: number) {

  }

  loadingPage() {
    this.popupLoadingData = this.dialog.open(LoadingComponent, {
      disableClose: true,
      width: "200px",
      height: "90px",
      data: { Title: "Đang tải dữ liệu..." },
    });
  }

  TuChoi(id: any) {
    if (
      this.authService.hasPermission(this.documentType, SecurityOperation.Update)
    ) {
      if (this.confrim != null) {
        this.dialog.closeAll();
        this.confrim = null;
      }
      this.confrim = this.dialog.open(TongHopDuTruMuaThuocTaiKhoaKhongDuyetComponent, {
        disableClose: true,
        width: "400px",
        height: "300px",
      }).afterClosed().subscribe((result) => {
        if (result != "" && result != undefined) {
          this.thongTinLyDoHuyDuyetTaiKhoa.LyDoHuy = result;
          this.thongTinLyDoHuyDuyetTaiKhoa.Id = id;
          this.apiService.post<any>("YeuCauMuaDuocPham/TuChoiDuyetTaiKhoa", this.thongTinLyDoHuyDuyetTaiKhoa)
            .subscribe((resultData) => {
              if (resultData !== null && resultData !== undefined) {
                if (resultData) {
                  this.gridChoDuyet.search();
                  this.notificationService.showSuccess("Từ chối duyệt thành công.");
                }
              }
            });
        }
      });

    } else {
      this.notificationService.showError(SystemMessage.UnAuthorizedMessage);
    }
  }

  PheDuyet(id: any) {
    this.duyetDuTruMuaDuocPhamViewModel.DuTruMuaDuocPhamId = id;
    if (
      this.authService.hasPermission(this.documentType, SecurityOperation.Update)
    ) {
      if (this.confrim != null) {
        this.dialog.closeAll();
        this.confrim = null;
      }
      this.confrim = this.dialog.open(ConfirmComponent, {
        disableClose: false,
        width: "400px",
        data: {
          Title: "Xác nhận",
          Message: CommonService.format(SystemMessage.MessConfirm, [
            "Duyệt",
          ]),
        },
      })
        .afterClosed()
        .subscribe((result) => {
          /* result is a string:Yes,No,No answer*/
          if (result == "Yes") {
            this.apiService.post<any>("YeuCauMuaDuocPham/DuyetTaiKhoa/", this.duyetDuTruMuaDuocPhamViewModel)
              .subscribe((resultData) => {
                if (resultData !== null && resultData !== undefined) {
                  if (resultData) {
                    this.gridChoDuyet.search();
                    this.notificationService.showSuccess("Duyệt thành công.");
                  } else {
                    this.notificationService.showError("Duyệt không thành công.");
                  }
                }
              });
          }
        });
    } else {
      this.notificationService.showError(SystemMessage.UnAuthorizedMessage);
    }
  }

  HuyDuyet(id: any) {
    if (
      this.authService.hasPermission(this.documentType, SecurityOperation.Update)
    ) {
      if (this.confrim != null) {
        this.dialog.closeAll();
        this.confrim = null;
      }
      this.confrim = this.dialog.open(ConfirmComponent, {
        disableClose: false,
        width: "400px",
        data: {
          Title: "Xác nhận",
          Message: CommonService.format(SystemMessage.MessConfirm, [
            "Hủy Duyệt",
          ]),
        },
      })
        .afterClosed()
        .subscribe((result) => {
          /* result is a string:Yes,No,No answer*/
          if (result == "Yes") {
            this.apiService.post<any>("YeuCauMuaDuocPham/HuyDuyetTaiKhoa/" + id)
              .subscribe((resultData) => {
                if (resultData !== null && resultData !== undefined) {
                  if (resultData) {
                    this.gridChoDuyet.search();
                    this.notificationService.showSuccess("Hủy Duyệt thành công.");
                  } else {
                    this.notificationService.showError("Hủy không thành công.");
                  }
                }
              });
          }
        });
    } else {
      this.notificationService.showError(SystemMessage.UnAuthorizedMessage);
    }
  }

  closePopupLoadingData() {
    if (this.popupLoadingData != undefined && this.popupLoadingData != null) {
      this.popupLoadingData.close();
    }
  }

  changeTabParent(element: any, event: any) {
  }

  CheckboxChange($event, choDuyet: boolean = false, daDuyet: boolean = false) {
    this.router.navigateByUrl("/nhap-xuat/duoc-pham/tong-hop-mua-duoc-pham-tai-khoa?holdQuery=true");
    if (choDuyet) {
      this.danhSachTongHopDuTruMuaThuocTaiKhoa.ChoDuyet = $event;
    }
    else if (daDuyet) {
      this.danhSachTongHopDuTruMuaThuocTaiKhoa.DaDuyet = $event;
    }
    this.timKiem();
  }


  onDataBound(event) {
    if (event != undefined && event.Data.length > 0) {
      this.tongHopDuTruMuaThuocTaiKhoa = event.Data;
    }
  }

  chiTietDaXuLyParent(id: number) {
    if (this.authService.hasPermission(this.documentType, SecurityOperation.Update)) {
      this.router.navigate(["/nhap-xuat/duoc-pham/tong-hop-mua-duoc-pham-tai-khoa/duyet/" + id + "/" + true]);
    } else {
      this.notificationService.showError(SystemMessage.UnAuthorizedMessage);
    }
  }

  chiTietDaXuLy(id: number, tinhTrang: number, isParent: number) {
    // tinh trang => 1 : đã duyệt, 2: từ chối, isParent => 0: Cha, 1: Con
    if ((tinhTrang == 1 || tinhTrang == 2) && isParent == 0) {
      if (this.authService.hasPermission(this.documentType, SecurityOperation.View)) {
        this.router.navigate(["/nhap-xuat/duoc-pham/tong-hop-mua-duoc-pham-tai-khoa/chi-tiet/" + id]);
      } else {
        this.notificationService.showError(SystemMessage.UnAuthorizedMessage);
      }
    }
    else if ((tinhTrang == 1 || tinhTrang == 2) && isParent == 1) {
      if (this.authService.hasPermission(this.documentType, SecurityOperation.View)) {
        this.router.navigate(["/nhap-xuat/duoc-pham/tong-hop-mua-duoc-pham-tai-khoa/chi-tiet/" + id]);
      } else {
        this.notificationService.showError(SystemMessage.UnAuthorizedMessage);
      }
    }
    else if (tinhTrang == 0 && isParent == 0) {
      if (this.authService.hasPermission(this.documentType, SecurityOperation.Update)) {
        this.router.navigate(["/nhap-xuat/duoc-pham/tong-hop-mua-duoc-pham-tai-khoa/duyet/" + id + "/" + true]);
      } else {
        this.notificationService.showError(SystemMessage.UnAuthorizedMessage);
      }
    }
    else if (tinhTrang == 0 && isParent == 1) {
      if (this.authService.hasPermission(this.documentType, SecurityOperation.View)) {
        this.router.navigate(["/nhap-xuat/duoc-pham/tong-hop-mua-duoc-pham-tai-khoa/chi-tiet/" + id]);
      } else {
        this.notificationService.showError(SystemMessage.UnAuthorizedMessage);
      }
    }
  }

  unSelectedTab() {
    this.lstStatusSelectTabTHDTKhoa.selectedTabChoXuLy = false;
    this.lstStatusSelectTabTHDTKhoa.selectedTabDaXuLy = false;
    this.lstStatusSelectTabTHDTKhoa.selectedTabTuChoi = false;
  }

  chuyenDen(element: any, event: any) {
    // console.log("lstStatusSelectTabTHDTKhoa: ", this.lstStatusSelectTabTHDTKhoa)
    var self = this;
    self.location.replaceState(self.baseRoute + '?holdQuery=true');
    var additionalSearchString = LocalStorageHelper.getItem<string>("additionalSearchStringdanhSachTongHopDuTruMuaThuocTaiKhoa");
    if (event.index == 0 || event.title == "CHỜ XỬ LÝ") {
      self.unSelectedTab();
      self.lstStatusSelectTabTHDTKhoa.selectedTabChoXuLy = true;
      let queryString = JSON.stringify(self.lstStatusSelectTabTHDTKhoa);
      LocalStorageHelper.setItem("additionalSearchStringdanhSachTongHopDuTruMuaThuocTaiKhoaSelectedTab", queryString);
      this.addtionStringDefault = additionalSearchString;
      let addtionTemp = JSON.parse(additionalSearchString);
      if (addtionTemp != null && addtionTemp.SearchString !== undefined && addtionTemp.SearchString !== null && addtionTemp.SearchString !== "") {
        this.danhSachTongHopDuTruMuaThuocTaiKhoa.SearchString = addtionTemp.SearchString;
      }
    }
    else if (event.index == 1 || event.title == "ĐÃ GỬI") {
      self.unSelectedTab();
      self.lstStatusSelectTabTHDTKhoa.selectedTabDaXuLy = true;
      let queryString = JSON.stringify(self.lstStatusSelectTabTHDTKhoa);
      LocalStorageHelper.setItem("additionalSearchStringdanhSachTongHopDuTruMuaThuocTaiKhoaSelectedTab", queryString);
      this.addtionStringDefaultDaXuLy = additionalSearchString;
      let addtionTemp = JSON.parse(additionalSearchString);
      if (addtionTemp != null && addtionTemp.SearchStringDaXuLy !== undefined && addtionTemp.SearchStringDaXuLy !== null && addtionTemp.SearchStringDaXuLy !== "") {
        this.danhSachTongHopDuTruMuaThuocTaiKhoa.SearchStringDaXuLy = addtionTemp.SearchStringDaXuLy;
      }
    }
    else if (event.index == 2 || event.title == "TỪ CHỐI") {
      self.unSelectedTab();
      self.lstStatusSelectTabTHDTKhoa.selectedTabTuChoi = true;
      let queryString = JSON.stringify(self.lstStatusSelectTabTHDTKhoa);
      LocalStorageHelper.setItem("additionalSearchStringdanhSachTongHopDuTruMuaThuocTaiKhoaSelectedTab", queryString);
      this.addtionStringDefaultTuChoi = additionalSearchString;
      let addtionTemp = JSON.parse(additionalSearchString);
      if (addtionTemp != null && addtionTemp.SearchStringTuChoi !== undefined && addtionTemp.SearchStringTuChoi !== null && addtionTemp.SearchStringTuChoi !== "") {
        this.danhSachTongHopDuTruMuaThuocTaiKhoa.SearchStringTuChoi = addtionTemp.SearchStringTuChoi;
      }
    }
  }
  
  TooltipCustom(duTruGiamDocDetail: any) {
    this.khos = [...duTruGiamDocDetail.ThongTinChiTietTonKhoTongs];
    this.hdts = [...duTruGiamDocDetail.ThongTinChiTietTonHDTs];
  }

  trangThaiCheckBox(event: any, tinhTrang: any, tabSelected: any) {
    if (tabSelected == 1) {
      if (tinhTrang == "choduyet") {
        this.danhSachTongHopDuTruMuaThuocTaiKhoa.DaGuiChoDuyet = event;
      }
      if (tinhTrang == "daduyet") {
        this.danhSachTongHopDuTruMuaThuocTaiKhoa.DaDuyetDaXuLy = event;
      }
      if (tinhTrang == "tuchoi") {
        this.danhSachTongHopDuTruMuaThuocTaiKhoa.TuChoiDuyet = event;
      }
      this.timKiem();
    }
    else {
      if (tinhTrang == "choduyet") {
        this.danhSachTongHopDuTruMuaThuocTaiKhoa.ChoDuyet = event;
      }
      if (tinhTrang == "chogoi") {
        this.danhSachTongHopDuTruMuaThuocTaiKhoa.DaDuyet = event;
      }
      this.timKiem();
    }
  }
}
