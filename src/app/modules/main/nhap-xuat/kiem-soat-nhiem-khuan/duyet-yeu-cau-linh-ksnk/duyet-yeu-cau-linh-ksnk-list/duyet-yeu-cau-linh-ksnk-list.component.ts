import { Component, OnInit, ViewChild, TemplateRef, ChangeDetectorRef, SimpleChanges } from "@angular/core";
import { MatMenuTrigger, MatDialog } from "@angular/material";
import icSearch from "@iconify/icons-ic/twotone-search";
import { ActivatedRoute, Router } from "@angular/router";
import { DocumentType } from "src/app/shared/enum/document-type.enum";
import icCancel from "@iconify/icons-ic/cancel";
import icicclose from "@iconify/icons-ic/twotone-close";
import { FormControl } from '@angular/forms';
import { GridComponent } from "src/app/shared/component/grid/grid.component";

import { AuthService } from "src/app/core/services/auth.service";
import { NotificationService } from "src/app/core/services/notification.service";
import icPrint from "@iconify/icons-ic/twotone-print";
import icFileExcel from "@iconify/icons-fa-solid/file-excel";
import { ApiService } from 'src/app/core/services/api.service';
import { SearchNgay, ExportQueryInfoQueryInfo, LinhKSNKGridVo } from '../duyet-yeu-cau-linh-ksnk.model';
import { TrangThaiLoad } from '../trang-thai-load.enum';
import { CommonService } from "src/app/core/utilities/common.helper";
import { ApiError } from 'src/app/shared/models/api-error.model';
import icEdit from '@iconify/icons-ic/twotone-edit';
import icMoreHoriz from '@iconify/icons-ic/twotone-more-horiz';
import { EnumLoaiPhieuLinh } from 'src/app/shared/enum/linh-vat-tu-thuoc.enum';
import { SystemMessage } from 'src/app/shared/configdata/system-message';
import { SecurityOperation } from 'src/app/shared/enum/security-operation.enum';
import icFilterList from '@iconify/icons-ic/twotone-filter-list';
import { PhieuXuatLinhKSNKPopupComponent } from '../phieu-xuat-linh-ksnk-popup/phieu-xuat-linh-ksnk-popup.component';
import { LoadingComponent } from 'src/app/shared/component/dialogs/loading/loading.component';
import { Sort } from 'src/app/shared/models/common.model';
import { Location } from '@angular/common';
import { LocalStorageHelper } from 'src/app/core/utilities/local-storage.helper';
import { GroupDescriptor } from '@progress/kendo-data-query';
@Component({
  selector: 'app-duyet-yeu-cau-linh-ksnk-list',
  templateUrl: './duyet-yeu-cau-linh-ksnk-list.component.html',
  styleUrls: ['./duyet-yeu-cau-linh-ksnk-list.component.scss']
})
export class DuyetYeuCauLinhKSNKListComponent implements OnInit {
  baseRoute: string = "/nhap-xuat/kiem-soat-nhiem-khuan/duyet-yeu-cau-linh-ksnk";

  documentType: DocumentType;
  searchString: string;
  gridColumns: any[] = [];
  
  gridChildLinhDuTruColumns: any[] = [];
  gridChildLinhDuTruChuaDuyetColumns: any[] = [];
  gridChildLinhDuTruDaDuyetColumns: any[] = [];
  
  gridChildLinhBuColumns: any[] = [];
  gridChildLinhBuDaDuyetColumns: any[] = [];
  gridChildLinhBuTuChoiColumns: any[] = [];

  gridChildChildLinhBuColumns: any[] = [];
  gridChildLinhBenhNhanColumns: any[] = [];
  gridChildChildLinhBenhNhanColumns: any[] = [];
  gridChildChildLinhBenhNhanDaDuyetColumns: any[] = [];
  gridChildChildLinhBenhNhanTuChoiColumns: any[] = [];
  gridChildChildLinhBuDaDuyetColumns: any[] = [];
  icSearch = icSearch;
  searchCtrl = new FormControl('');
  urlGetData: string = "";
  urlGetTotalPage: string = "";
  icPrint = icPrint;
  icEdit = icEdit;
  icFileExcel = icFileExcel;
  icMoreHoriz = icMoreHoriz;
  icFilterList = icFilterList;
  validationErrors: any[] = [];
  timKiemTuNgay: SearchNgay = new SearchNgay();
  trangThaiCheck: number = 4;
  public kiemTraDanhSachDangChoDuyet: boolean = true;
  public kiemTraDanhSachTuChoiDuyet: boolean = false;
  public kiemTraDanhSachDaDuyet: boolean = false;
  trangThai: any;
  linhKSNKGridVo: LinhKSNKGridVo;
  exportQueryInfoQueryInfo: ExportQueryInfoQueryInfo = new ExportQueryInfoQueryInfo();
  stringAdditionalSearchString: string = "";
  holdQuery: any = null;

  
  @ViewChild('actionTemplate', { static: true }) actionTemplate: TemplateRef<any>;
  @ViewChild('TinhTrangTemplate', { static: true }) TinhTrangTemplate: TemplateRef<any>;
  @ViewChild('groupTemplate', { static: true }) groupTemplate: TemplateRef<any>;
  @ViewChild('maTNTemplate', { static: true }) PLTemplate: TemplateRef<any>;
  @ViewChild('slXuatTemplate', { static: true }) slXuatTemplate: TemplateRef<any>;
  @ViewChild('nhomGroupHeaderTemplate', { static: true }) nhomGroupHeaderTemplate: TemplateRef<any>;//
  @ViewChild('sttTemplate', { static: true }) sttTemplate: TemplateRef<any>;//
  @ViewChild('ngayYeuCauTemplate', { static: true }) ngayYeuCauTemplate: TemplateRef<any>;
  @ViewChild('ngayDuyetTemplate', { static: true }) ngayDuyetTemplate: TemplateRef<any>;
  @ViewChild(GridComponent, { static: true }) gridChild: GridComponent;
  groups: GroupDescriptor[] = [{ field: 'TenKhoLinh' }];
  groupsYCTN: GroupDescriptor[] = [{ field: 'MaYeuCauTiepNhan' }];
  constructor(
    private dialog: MatDialog,
    private router: Router,
    private apiService: ApiService,
    private authService: AuthService,
    private notificationService: NotificationService,
    private cd: ChangeDetectorRef,
    private route: ActivatedRoute,
    private location: Location
  ) { }
  ngOnInit() {
    this.documentType = DocumentType.DuyetYeuCauLinhKSNK;
    let  start= new Date();
    start.setHours(0,0,0,0);
    let  end = new Date();
    this.timKiemTuNgay.NgayYeuCauRangDate.startDate =start;
    this.timKiemTuNgay.NgayYeuCauRangDate.endDate =end;
    this.gridChild.sort = [{
      field: 'DuocDuyet',
      dir: 'asc'
    }];
    this.route
      .queryParams
      .subscribe(v => {
        this.trangThai = v;

      });
    this.linhKSNKGridVo = new LinhKSNKGridVo();
    this.gridColumns = [
      { Field: "MaPL", Title: "Mã PL", Width: 90, Sortable: true, Template: this.PLTemplate },
      { Field: "Loai", Title: "Loại", MinWidth: 120, Sortable: true },
      { Field: "LinhTuKho", Title: "Lĩnh từ kho", Width: 200, Sortable: true },
      { Field: "LinhVeKho", Title: "Lĩnh về kho", Width: 200, Sortable: true },
      { Field: "NguoiYeuCau", Title: "Người yêu cầu", Width: 150, Sortable: true },
      { Field: "NgayYeuCau", Title: "Ngày yêu cầu", Width: 150, Sortable: true, Template: this.ngayYeuCauTemplate },
      { Field: "TinhTrang", Title: "Tình trạng", Width: 150, Sortable: false, Template: this.TinhTrangTemplate },
      { Field: "Nguoiduyet", Title: "Người duyệt", Width: 150, Sortable: true },
      { Field: "NgayDuyet", Title: "Ngày duyệt", Width: 150, Sortable: true, Template: this.ngayDuyetTemplate },
      { Field: "", Title: "", Width: 50, Sortable: true, Template: this.groupTemplate },
    ];
    //------------lĩnh bù-----------------------------------------------------------------------------
    this.gridChildLinhBuColumns = [
      { Field: "STT", Title: "#", Width: 60, Template: this.sttTemplate },
      { Field: "TenKSNK", Title: "DP/VT/KSNK", Width: 180, ShowTooltip: true },
      { Field: "DonViTinh", Title: "ĐVT", Width: 100 },
      { Field: "Nhom", Title: "Nhóm", Width: 100, Sortable: true, Hidden: true, TemplateGroupHeader: this.nhomGroupHeaderTemplate },
      { Field: "HangSanXuat", Title: "Hãng SX", Width: 220 },
      { Field: "NuocSanXuat", Title: "Nước SX", Width: 205 },
      { Field: "SoLuongTon", Title: "SL Tồn", Width: 100 },
      { Field: "SoLuongYeuCauDaDuyet", Title: "SL cần bù", Width: 60 }
    ];
    this.gridChildLinhBuDaDuyetColumns = [
      { Field: "STT", Title: "#", Width: 60, Template: this.sttTemplate },
      { Field: "TenKSNK", Title: "DP/VT/KSNK", Width: 180, ShowTooltip: true },
      { Field: "DonViTinh", Title: "ĐVT", Width: 100 },
      { Field: "Nhom", Title: "Nhóm", Width: 100, Sortable: true, Hidden: true, TemplateGroupHeader: this.nhomGroupHeaderTemplate },
      { Field: "HangSanXuat", Title: "Hãng SX", Width: 220 },
      { Field: "NuocSanXuat", Title: "Nước SX", Width: 205 },
      { Field: "SoLuongYeuCauDaDuyet", Title: "SL cần bù", Width: 60 }
    ];
    this.gridChildLinhBuTuChoiColumns = [
      { Field: "STT", Title: "#", Width: 60, Template: this.sttTemplate },
      { Field: "TenKSNK", Title: "Tên vật tư", Width: 180, ShowTooltip: true },
      { Field: "DonViTinh", Title: "ĐVT", Width: 100 },
      { Field: "Nhom", Title: "Nhóm", Width: 100, Sortable: true, Hidden: true, TemplateGroupHeader: this.nhomGroupHeaderTemplate },
      { Field: "HangSanXuat", Title: "Hãng SX", Width: 220 },
      { Field: "NuocSanXuat", Title: "Nước SX", Width: 205 },
      //{ Field: "SoLuongTon", Title: "SL Tồn", Width: 100 },
      { Field: "SLDaLinh", Title: "SL đã bù", Width: 100 },
      { Field: "SoLuongCanBu", Title: "SL cần bù", Width: 60 },
      { Field: "SoLuongCanBu", Title: "SL yêu cầu", Width: 100 },
    ];
    //------------lĩnh bù-----------------------------------------------------------------------------
    this.gridChildChildLinhBuColumns = [
      { Field: "STT", Title: "#", Width: 50, Template: this.sttTemplate },
      { Field: "MaTN", Title: "Mã TN", Width: 120, Sortable: true },
      { Field: "MaBN", Title: "Mã người bệnh", Width: 120 },
      { Field: "HoTen", Title: "Họ tên", Width: 100, Sortable: true },
      { Field: "DVKham", Title: "DV khám", Width: 200, Sortable: true },
      { Field: "BSKeToa", Title: "BS kê toa", Width: 120, Sortable: true },
      { Field: "NgayDieuTriString", Title: "Ngày điều trị", Width: 120 },
      { Field: "NgayKe", Title: "ngày kê", Width: 100 },
      { Field: "SLDanhSachDuyet", Title: "Sl", Width: 120, Sortable: true }
    ];
    this.gridChildChildLinhBuDaDuyetColumns = [
      { Field: "STT", Title: "#", Width: 50, Template: this.sttTemplate },
      { Field: "MaTN", Title: "Mã tiếp nhận", Width: 120, Sortable: true },
      { Field: "MaBN", Title: "Mã bệnh nhân", Width: 120 },
      { Field: "HoTen", Title: "Họ tên", Width: 100 ,Sortable: true},
      { Field: "DVKham", Title: "Dịch vụ khám", Width: 200 ,Sortable: true},
      { Field: "BSKeToa", Title: "Bs kê vật tư", Width: 120 ,Sortable: true},
      { Field: "NgayDieuTriString", Title: "Ngày điều trị", Width: 120 ,Sortable: true},
      { Field: "NgayKe", Title: "Ngày kê", Width: 120 ,Sortable: true},
      { Field: "SLCanBu", Title: "SL cần bù", Width: 60 },
      { Field: "SLDaLinh", Title: "SL đã bù", Width: 100 },
      { Field: "SL", Title: "SL được duyệt", Width: 120, Sortable: true }
    ];
    //------------------------------lĩnh dự trù-------------------------------------------------------------------------




    this.gridChildLinhDuTruChuaDuyetColumns= [
      { Field: "STT", Title: "#", Width: 50, Template: this.sttTemplate },
      { Field: "TenKhoLinh", Title: "Nhóm", Width: 100, Sortable: true, Hidden: true, TemplateGroupHeader: this.nhomGroupHeaderTemplate },
      { Field: "Nhom", Title: "Loại", Width: 80, ShowTooltip: true },
      { Field: "TenKSNK", Title: "DP/VT/KSNK", Width: 120, Sortable: true },
      { Field: "DonViTinh", Title: "ĐVT", Width: 100, Sortable: true },
      { Field: "HangSanXuat", Title: "Hãng SX", Width: 200, Sortable: true },
      { Field: "NuocSanXuat", Title: "Nước SX", Width: 120, Sortable: true },
      { Field: "SLTon", Title: "SL tồn", Width: 120 },
      { Field: "SoLuongYc", Title: "Số lượng yêu cầu", Width: 120 }
    ];
    this.gridChildLinhDuTruDaDuyetColumns = [
      { Field: "STT", Title: "#", Width: 50, Template: this.sttTemplate },
      { Field: "TenKhoLinh", Title: "", Width: 100, Sortable: true, Hidden: true, TemplateGroupHeader: this.nhomGroupHeaderTemplate },
      { Field: "Nhom", Title: "Loại", Width: 80, ShowTooltip: true },
      { Field: "TenKSNK", Title: "DP/VT/KSNK", Width: 120, Sortable: true },
      { Field: "DonViTinh", Title: "ĐVT", Width: 100, Sortable: true },
      { Field: "HangSanXuat", Title: "Hãng SX", Width: 200, Sortable: true },
      { Field: "NuocSanXuat", Title: "Nước SX", Width: 120, Sortable: true },
      // { Field: "SLTon", Title: "SL tồn", Width: 120 },
      { Field: "SoLuongYc", Title: "Số lượng yêu cầu", Width: 120 }
    ];


  





    //--------------------------end lĩnh dự trù--------------------------------------------------------------------------------
    //---------------end dự trù----------------------------------------------------------------------------
    this.gridChildLinhBenhNhanColumns = [
      { Field: "STT", Title: "#", Width: 60, Template: this.sttTemplate },
      { Field: "MaYeuCauTiepNhan", Title: "Mã TN", Width: 120, Sortable: true },
      { Field: "MaBenhNhan", Title: "Mã NB", Width: 120, Sortable: true },
      { Field: "HoTen", Title: "Họ tên", Width: 180, Sortable: true },
      { Field: "SoLuong", Title: "SL", Width: 80, Sortable: true }
    ];
    this.gridChildChildLinhBenhNhanColumns = [
      { Field: "STT", Title: "#", Width: 60, Template: this.sttTemplate },
      { Field: "TenKSNK", Title: "Tên vật tư", Width: 180, Sortable: true },
      { Field: "Nhom", Title: "Nhóm", Width: 100, Sortable: true, Hidden: true, TemplateGroupHeader: this.nhomGroupHeaderTemplate },
      { Field: "DonViTinh", Title: "ĐVT", Width: 100, Sortable: true },
      { Field: "HangSanXuat", Title: "Hãng SX", Width: 180, Sortable: true },
      { Field: "NuocSanXuat", Title: "Nước SX", Width: 100, Sortable: true },
      { Field: "DichVuKham", Title: "DV Khám", Width: 180, Sortable: true },
      { Field: "BacSiKeToa", Title: "BS kê toa", Width: 120, Sortable: true },
      { Field: "NgayDieuTriString", Title: "Ngày điều trị", Width: 120 },
      { Field: "NgayKetString", Title: "Ngày kê", Width: 120, Sortable: true },
      { Field: "SoLuongTon", Title: "SL Tồn", Width: 100, Sortable: true },
      { Field: "SoLuongYeuCau", Title: "SL Yêu cầu", Width: 100, Sortable: true }
    ];
    this.gridChildChildLinhBenhNhanDaDuyetColumns = [
      { Field: "STT", Title: "#", Width: 60, Template: this.sttTemplate },
      { Field: "TenKSNK", Title: "Tên vật tư", Width: 180, Sortable: true },
      { Field: "Nhom", Title: "Nhóm", Width: 100, Sortable: true, Hidden: true, TemplateGroupHeader: this.nhomGroupHeaderTemplate },
      { Field: "DonViTinh", Title: "ĐVT", Width: 100, Sortable: true },
      { Field: "HangSanXuat", Title: "Hãng SX", Width: 180, Sortable: true },
      { Field: "NuocSanXuat", Title: "Nước SX", Width: 100, Sortable: true },
      { Field: "DichVuKham", Title: "DV Khám", Width: 180, Sortable: true },
      { Field: "BacSiKeToa", Title: "BS kê toa", Width: 120, Sortable: true },
      { Field: "NgayDieuTriString", Title: "Ngày điều trị", Width: 120 },
      { Field: "NgayKetString", Title: "Ngày kê", Width: 120, Sortable: true },
      //{ Field: "SoLuongTon", Title: "SL Tồn", Width: 100, Sortable: true },
      { Field: "SoLuongYeuCau", Title: "SL Yêu cầu", Width: 100, Sortable: true }
    ];
    this.gridChildChildLinhBenhNhanTuChoiColumns = [
      { Field: "STT", Title: "#", Width: 60, Template: this.sttTemplate },
      { Field: "TenKSNK", Title: "Tên vật tư", Width: 180, Sortable: true },
      { Field: "Nhom", Title: "Nhóm", Width: 100, Sortable: true, Hidden: true, TemplateGroupHeader: this.nhomGroupHeaderTemplate },
      { Field: "DonViTinh", Title: "ĐVT", Width: 100, Sortable: true },
      { Field: "HangSanXuat", Title: "Hãng SX", Width: 180, Sortable: true },
      { Field: "NuocSanXuat", Title: "Nước SX", Width: 100, Sortable: true },
      //{ Field: "SoLuongTon", Title: "SL Tồn", Width: 100, Sortable: true },
      { Field: "SoLuongYeuCau", Title: "SL Yêu cầu", Width: 100, Sortable: true }
    ];
    if (this.route.snapshot.queryParams.holdQuery != null) {
      this.holdQuery = this.route.snapshot.queryParams.holdQuery;
    }
    if (
      this.holdQuery != null &&
      LocalStorageHelper.getItem('additionalSearchStringLVT') != null
    ) {
      this.TimKiemId();
    } else {
      LocalStorageHelper.setItem('additionalSearchStringLVT', null);
      if (this.timKiemTuNgay.NgayYeuCauRangDate.startDate != null) {
        this.linhKSNKGridVo.NgayYeuCauRangDateStartDate = CommonService.formatDateTime(this.timKiemTuNgay.NgayYeuCauRangDate.startDate, "mm/dd/yyyy");
      }
      else {
        this.linhKSNKGridVo.NgayYeuCauRangDateStartDate = null;
      }
      if (this.timKiemTuNgay.NgayYeuCauRangDate.endDate != null) {
        this.linhKSNKGridVo.NgayYeuCauRangDateStartEnd = CommonService.formatDateTime(this.timKiemTuNgay.NgayYeuCauRangDate.endDate, "mm/dd/yyyy");
      }
      else {
        this.linhKSNKGridVo.NgayYeuCauRangDateStartEnd = null;
      }

      let NgayDuyetRangDateStartDate = null;
      let NgayDuyetRangDateEndDate = null;
      let NgayYeuCauRangDateStartDate ="\"" + this.linhKSNKGridVo.NgayYeuCauRangDateStartDate + "\"";
      let NgayYeuCauRangDateEndDate = "\"" + this.linhKSNKGridVo.NgayYeuCauRangDateStartEnd + "\"";
      
      let Searching = null;
      let queryString = "{\"NgayYeuCauRangDateStartDate\":" + NgayYeuCauRangDateStartDate + ",\"NgayYeuCauRangDateStartEnd\":" + NgayYeuCauRangDateEndDate
        + ",\"NgayDuyetRangDateStartDate\":" + NgayDuyetRangDateStartDate + ",\"NgayDuyetRangDateStartEnd\":" + NgayDuyetRangDateEndDate + ",\"Searching\":" + Searching + ",\"DangChoDuyet\":" + this.linhKSNKGridVo.DangChoDuyet + ",\"TuChoiDuyet\":" + this.linhKSNKGridVo.TuChoiDuyet + ",\"DaDuyet\":" + this.linhKSNKGridVo.DaDuyet + " }";
      this.gridChild.additionalSearchString = queryString;
    }
  }
  TimKiemId() {
    var searching = LocalStorageHelper.getItem<string>("additionalSearchStringLVT");
    let KiemTraLoCalAdditonalExit;
    if (searching != null || searching != undefined || searching != "") {
      KiemTraLoCalAdditonalExit = JSON.parse(searching);
    }

    if (searching == null || searching == undefined || searching == "") {
      let NgayDuyetRangDateStartDate = null;
      let NgayDuyetRangDateEndDate = null;
      let NgayYeuCauRangDateStartDate = null;
      let NgayYeuCauRangDateEndDate = null;
      let Searching = null;
      let queryString = "{\"NgayYeuCauRangDateStartDate\":" + NgayYeuCauRangDateStartDate + ",\"NgayYeuCauRangDateStartEnd\":" + NgayYeuCauRangDateEndDate
        + ",\"NgayDuyetRangDateStartDate\":" + NgayDuyetRangDateStartDate + ",\"NgayDuyetRangDateStartEnd\":" + NgayDuyetRangDateEndDate + ",\"Searching\":" + Searching + ",\"DangChoDuyet\":" + this.linhKSNKGridVo.DangChoDuyet + ",\"TuChoiDuyet\":" + this.linhKSNKGridVo.TuChoiDuyet + ",\"DaDuyet\":" + this.linhKSNKGridVo.DaDuyet + " }";
      this.gridChild.additionalSearchString = queryString;
    }
    else {
      if (KiemTraLoCalAdditonalExit.NgayYeuCauRangDateStartDate != null) {
        this.timKiemTuNgay.NgayYeuCauRangDate.startDate = new Date(KiemTraLoCalAdditonalExit.NgayYeuCauRangDateStartDate);
      }
      else {
        this.timKiemTuNgay.NgayYeuCauRangDate.startDate = null;
      }
      if (KiemTraLoCalAdditonalExit.NgayYeuCauRangDateStartEnd != null) {
        this.timKiemTuNgay.NgayYeuCauRangDate.endDate = new Date(KiemTraLoCalAdditonalExit.NgayYeuCauRangDateStartEnd);
      }
      else {
        this.timKiemTuNgay.NgayYeuCauRangDate.endDate = null;
      }
      if (KiemTraLoCalAdditonalExit.NgayDuyetRangDateStartDate != null) {
        this.timKiemTuNgay.NgayDuyetRangDate.startDate = new Date(KiemTraLoCalAdditonalExit.NgayDuyetRangDateStartDate);
      }
      else {
        this.timKiemTuNgay.NgayDuyetRangDate.startDate = null;
      }
      if (KiemTraLoCalAdditonalExit.NgayDuyetRangDateStartEnd != null) {
        this.timKiemTuNgay.NgayDuyetRangDate.endDate = new Date(KiemTraLoCalAdditonalExit.NgayDuyetRangDateStartEnd);
      }
      else {
        this.timKiemTuNgay.NgayDuyetRangDate.endDate = null;
      }
      if (KiemTraLoCalAdditonalExit.Searching != null) {
        this.searchString = KiemTraLoCalAdditonalExit.Searching;
      }
      else {
        this.searchString = "";
      }
      this.kiemTraDanhSachDangChoDuyet = KiemTraLoCalAdditonalExit.DangChoDuyet;
      this.kiemTraDanhSachTuChoiDuyet = KiemTraLoCalAdditonalExit.TuChoiDuyet;
      this.kiemTraDanhSachDaDuyet = KiemTraLoCalAdditonalExit.DaDuyet;
      this.linhKSNKGridVo.DangChoDuyet = KiemTraLoCalAdditonalExit.DangChoDuyet;
      this.linhKSNKGridVo.TuChoiDuyet = KiemTraLoCalAdditonalExit.TuChoiDuyet;
      this.linhKSNKGridVo.DaDuyet = KiemTraLoCalAdditonalExit.DaDuyet;
      this.gridChild.additionalSearchString = searching;
      this.gridChild.additionalSearchString = searching;
    }
  }
  blur(event) {
    this.TimkiemNangCao();
  }
  onKey(event: any) {

    if (event.key == "Enter") {
      this.TimkiemNangCao();
    }
    if (event.key == "Backspace") {
      this.TimkiemNangCao();
    }
  }
  onKeyDateRange(event: any) {
    if (event.key == 'Enter') {
      this.TimkiemNangCao();
    }
  }
  changRange(event: any) {
    this.TimkiemNangCao();

  }
  searchChanges() {
    if (this.searchString == null || this.searchString == "") {
      if(this.holdQuery != null)
      {
        this.TimkiemNangCao();
      }
    
    }
  }
  TimkiemNangCao() {
    this.location.replaceState(this.baseRoute + '?holdQuery=true');
    if (this.timKiemTuNgay.NgayYeuCauRangDate.startDate != null) {
      this.linhKSNKGridVo.NgayYeuCauRangDateStartDate = CommonService.formatDateTime(this.timKiemTuNgay.NgayYeuCauRangDate.startDate, "mm/dd/yyyy");
    }
    else {
      this.linhKSNKGridVo.NgayYeuCauRangDateStartDate = null;
    }
    if (this.timKiemTuNgay.NgayYeuCauRangDate.endDate != null) {
      this.linhKSNKGridVo.NgayYeuCauRangDateStartEnd = CommonService.formatDateTime(this.timKiemTuNgay.NgayYeuCauRangDate.endDate, "mm/dd/yyyy");
    }
    else {
      this.linhKSNKGridVo.NgayYeuCauRangDateStartEnd = null;
    }
    if (this.timKiemTuNgay.NgayDuyetRangDate.startDate != null) {
      this.linhKSNKGridVo.NgayDuyetRangDateStartDate = CommonService.formatDateTime(this.timKiemTuNgay.NgayDuyetRangDate.startDate, "mm/dd/yyyy");
    }
    else {
      this.linhKSNKGridVo.NgayDuyetRangDateStartDate = null;
    }
    if (this.timKiemTuNgay.NgayDuyetRangDate.endDate != null) {
      this.linhKSNKGridVo.NgayDuyetRangDateStartEnd = CommonService.formatDateTime(this.timKiemTuNgay.NgayDuyetRangDate.endDate, "mm/dd/yyyy");
    }
    else {
      this.linhKSNKGridVo.NgayDuyetRangDateStartEnd = null;
    }
    if (this.timKiemTuNgay.TrangThaiCheck != null) {
      this.linhKSNKGridVo.TrangThaiCheck = this.timKiemTuNgay.TrangThaiCheck;
    }
    if (this.searchString != null || this.searchString != undefined) {
      this.linhKSNKGridVo.Searching = this.searchString;
    }
    else {
      this.linhKSNKGridVo.Searching = null;
    }
    let queryStringSearch = JSON.stringify(this.linhKSNKGridVo);
    this.stringAdditionalSearchString = queryStringSearch;
    this.gridChild._additionalSearchString = queryStringSearch;
    LocalStorageHelper.setItem("additionalSearchStringLVT", queryStringSearch);
    this.gridChild.search();
  }

  checkTrangThaiDCT(event: any, type: any) {
    this.cd.detectChanges();
    if (type == 2) {
      this.linhKSNKGridVo.DangChoDuyet = event;
    }
    if (type == 3) {
      this.linhKSNKGridVo.TuChoiDuyet = event;
    }
    if (type == 4) {
      this.linhKSNKGridVo.DaDuyet = event;
    }

    this.TimkiemNangCao();
  }
  xemChiTietYeuCauLinh(id, loaiPhieuLinh, daGui, loai) {
    switch (loaiPhieuLinh) {
      case EnumLoaiPhieuLinh.LinhDuTru:
        if (this.authService.hasPermission(DocumentType.DuyetYeuCauLinhKSNK, SecurityOperation.Update)) {
          this.router.navigate([this.baseRoute + "/duyet-phieu-linh-ksnk-thuong/" + id +"/"+ loai], { queryParams: { holdQuery: true} }); break;
        } else {
          this.notificationService.showError(SystemMessage.UnAuthorizedMessage);
        }
      case EnumLoaiPhieuLinh.LinhBu:
        if (this.authService.hasPermission(DocumentType.DuyetYeuCauLinhKSNK, SecurityOperation.Update)) {
          this.router.navigate([this.baseRoute + "/duyet-phieu-linh-ksnk-bu/" + id + "/" + loai], { queryParams: { holdQuery: true } }); break;
        } else {
          this.notificationService.showError(SystemMessage.UnAuthorizedMessage);
        }
    }
  }
  exportExcel() {
    const self = this;
    self.showPopupLoadingData();
    self.exportQueryInfoQueryInfo.Sort = this.gridChild.sort.map(item => {
      return new Sort(item.field, item.dir);
    });
    self.exportQueryInfoQueryInfo.AdditionalSearchString = this.stringAdditionalSearchString;
    // if (self.authService.hasPermission(self.documentType, SecurityOperation.Process)) {
    self.apiService.postExportExcel<string>('YeuCauLinhKSNK/ExportDanhSachDuyetLinhKSNK',
      self.exportQueryInfoQueryInfo).subscribe(
        resultData => {
          self.closePopupLoadingData();
          const dateTimeNow = new Date();
          CommonService.downLoadFile(resultData, 'application/vnd.ms-excel',
            'DanhSachDuyetLinhKSNK' + dateTimeNow.getFullYear() + '.xlsx');
        },
        (err: any) => {
          self.notificationService.showError(err.Message);
        });
    // } else {
    //   self.notificationService.showError(SystemMessage.UnAuthorizedMessage);
    // }
  }
  showPopupLoadingData() {
    this.dialog.open(LoadingComponent, {
      disableClose: true,
      width: '200px',
      height: '90px',
      data: { Title: 'Đang xuất excel...' }
    });
  }

  closePopupLoadingData() {
    this.dialog.closeAll();
  }
  clearSearch() { }
  InDuocPham(dataItem, loaiPhieuLinh,loai) {
    // [Description("Lĩnh dự trù")]
    // LinhDuTru = 1,
    // [Description("Lĩnh bù")]
    // LinhBu = 2,
    // [Description("Lĩnh cho người bệnh")]
    // LinhChoBenhNhan = 3,
 if(loai == true)
 {
  this.apiService.post("YeuCauLinhDuocPham/InYeuCauLinhDuocPhamTrucTiep?yeuCauLinhId=" + dataItem + "&loaiPhieuLinh=" + 1)
  .subscribe((resultData) => {
    if (resultData != undefined && resultData != null) {
      this.dialog.open(PhieuXuatLinhKSNKPopupComponent, {
        disableClose: false,
        width: '1200px',
        data: resultData,
      }).afterClosed().subscribe(result => {
      });
    }
  },
    (err: ApiError) => {
      if (err.Message != "Validation Failed") {
        this.notificationService.showError(err.Message);
      }
    });
 }
 else{
  this.apiService.post("YeuCauLinhVatTu/InYeuCauLinhVatTuTrucTiep?yeuCauLinhId=" + dataItem + "&loaiPhieuLinh=" + 1)
  .subscribe((resultData) => {
    if (resultData != undefined && resultData != null) {
      this.dialog.open(PhieuXuatLinhKSNKPopupComponent, {
        disableClose: false,
        width: '1200px',
        data: resultData,
      }).afterClosed().subscribe(result => {
      });
    }
  },
    (err: ApiError) => {
      if (err.Message != "Validation Failed") {
        this.notificationService.showError(err.Message);
      }
    });
 }
  }
}

