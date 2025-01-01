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
import { SearchNgay, ExportQueryInfoQueryInfo, LinhVatTuGridVo } from '../duyet-yeu-cau-linh-thuoc.model';
import { TrangThaiLoad } from '../enums-duyet-yeu-cau-linh-thuoc-trang-thai-load';
import { CommonService } from "src/app/core/utilities/common.helper";
import { ApiError } from 'src/app/shared/models/api-error.model';
import { EnumLoaiPhieuLinh } from 'src/app/shared/enum/linh-vat-tu-thuoc.enum';
import { SecurityOperation } from 'src/app/shared/enum/security-operation.enum';
import { SystemMessage } from 'src/app/shared/configdata/system-message';
import icFilterList from '@iconify/icons-ic/twotone-filter-list';


import icEdit from '@iconify/icons-ic/twotone-edit';
import icMoreHoriz from '@iconify/icons-ic/twotone-more-horiz';
import { LoadingComponent } from 'src/app/shared/component/dialogs/loading/loading.component';
import { Location } from '@angular/common';
import { PhieuXuatLinhThuocPopupComponent } from '../phieu-xuat-linh-thuoc-popup/phieu-xuat-linh-thuoc-popup.component';
import { LocalStorageHelper } from 'src/app/core/utilities/local-storage.helper';
import { GroupDescriptor } from '@progress/kendo-data-query';
import { Sort } from 'src/app/shared/models/common.model';
import { truncateSync } from "fs";
@Component({
  selector: 'app-duyet-yeu-cau-linh-thuoc-list',
  templateUrl: './duyet-yeu-cau-linh-thuoc-list.component.html',
  styleUrls: ['./duyet-yeu-cau-linh-thuoc-list.component.scss']
})
export class DuyetYeuCauLinhThuocListComponent implements OnInit {

  documentType: DocumentType;
  searchString: string;
  gridColumns: any[] = [];


  gridChildLinhDuTruChuaDuyetColumns: any[] = [];
  gridChildLinhDuTruDaDuyetColumns: any[] = [];
  
  gridChildLinhBuColumns: any[] = [];
  gridChildLinhBuDaDuyetColumns: any[] = [];
  gridChildLinhBuChuaDuyetColumns: any[] = [];
  gridChildChildLinhBuColumns: any[] = [];
  gridChildChildLinhBuDaDuyetColumns: any[] = [];

  gridChildLinhBenhNhanColumns: any[] = [];
  gridChildChildLinhBenhNhanColumns: any[] = [];
  gridChildChildLinhBenhNhanTuChoiColumns: any[] = [];
  linhVatTuGridVo: LinhVatTuGridVo;

  // searchInfo: searchLoaiCauHinh;
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
  public kiemTraDanhSachDangChoDuyet: boolean = true;
  public kiemTraDanhSachTuChoiDuyet: boolean = false;
  public kiemTraDanhSachDaDuyet: boolean = false;
  trangThaiCheck: number = 4;
  trangThai: any;
  exportQueryInfoQueryInfo: ExportQueryInfoQueryInfo = new ExportQueryInfoQueryInfo();
  stringAdditionalSearchString: string = "";
  @ViewChild('actionTemplate', { static: true }) actionTemplate: TemplateRef<any>;
  @ViewChild('TinhTrangTemplate', { static: true }) TinhTrangTemplate: TemplateRef<any>;
  @ViewChild('groupTemplate', { static: true }) groupTemplate: TemplateRef<any>;
  @ViewChild('maTNTemplate', { static: true }) PLTemplate: TemplateRef<any>;
  @ViewChild('nhomGroupHeaderTemplate', { static: true }) nhomGroupHeaderTemplate: TemplateRef<any>;//
  @ViewChild('sttTemplate', { static: true }) sttTemplate: TemplateRef<any>;//
  @ViewChild(GridComponent, { static: true }) gridChild: GridComponent;
  @ViewChild("gridB", { static: true }) gridB: GridComponent;
  @ViewChild("gridA", { static: true }) gridA: GridComponent;
  groups: GroupDescriptor[] = [{ field: 'Nhom' }];
  groupsYCTN: GroupDescriptor[] = [{ field: 'MaYeuCauTiepNhan' }];
  baseRoute: string = "/nhap-xuat/duoc-pham/duyet-yeu-cau-linh-thuoc";
  holdQuery: any = null;
  @ViewChild('ngayYeuCauTemplate', { static: true }) ngayYeuCauTemplate: TemplateRef<any>;
  @ViewChild('ngayDuyetTemplate', { static: true }) ngayDuyetTemplate: TemplateRef<any>;
  constructor(
    private dialog: MatDialog,
    private router: Router,
    private apiService: ApiService,
    private authService: AuthService,
    private notificationService: NotificationService,
    private cd: ChangeDetectorRef,
    private location: Location,
    private route: ActivatedRoute
  ) { }
  ngOnInit() {
    this.documentType = DocumentType.DuyetYeuCauLinhDuocPham;
    let  start= new Date();
    start.setHours(0,0,0,0);
    let  end = new Date();
    this.timKiemTuNgay.NgayYeuCauRangDate.startDate =start;
    this.timKiemTuNgay.NgayYeuCauRangDate.endDate =end;
    window.onbeforeunload = function (event) {
      var message = 'Important: Please click on \'Save\' button to leave this page.';
      if (typeof event == 'undefined') {
        event = window.event;
      }
      if (event) {
        event.returnValue = message;
      }
      return message;
    };
    this.gridChild.sort = [{
      field: 'DuocDuyet',
      dir: 'asc'
    }];
    this.route
      .queryParams
      .subscribe(v => {
        this.trangThai = v;

      });
    this.linhVatTuGridVo = new LinhVatTuGridVo();
    //-------- Grid-------------------------------------------------------------------------------------------
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
      { Field: "Action", Title: "", Width: 50, Template: this.groupTemplate }];
    //--------end  Grid-------------------------------------------------------------------------------------------

    //-------- bù-------------------------------------------------------------------------------------------------
    this.gridChildLinhBuDaDuyetColumns = [
      { Field: "STT", Title: "#", Width: 60, Template: this.sttTemplate },
      { Field: "TenVatTu", Title: "Tên dược phẩm", Width: 180, ShowTooltip: true },
      { Field: "HoatChat", Title: "Hoạt chất", Width: 180 },
      { Field: "NongDoHamLuong", Title: "Nồng độ/Hàm lượng", Width: 120 },
      { Field: "DuongDung", Title: "Đường dùng", Width: 100 },
      { Field: "DonViTinh", Title: "ĐVT", Width: 100 },
      { Field: "HangSanXuat", Title: "Hãng SX", Width: 180 },
      { Field: "NuocSanXuat", Title: "Nước SX", Width: 100 },
      { Field: "SoLuongYeuCauDaDuyet", Title: "SL Cần bù", Width: 100 } // số lượng sum yêu cầu lĩnh dược phẩm chi tiết 
    ];
    this.gridChildLinhBuChuaDuyetColumns = [
      { Field: "STT", Title: "#", Width: 60, Template: this.sttTemplate },
      { Field: "Nhom", Title: "Nhóm", Width: 100, Sortable: true, Hidden: true, TemplateGroupHeader: this.nhomGroupHeaderTemplate },
      { Field: "TenVatTu", Title: "Tên dược phẩm", Width: 180, ShowTooltip: true },
      { Field: "HoatChat", Title: "Hoạt chất", Width: 180 },
      { Field: "NongDoHamLuong", Title: "Nồng độ/Hàm lượng", Width: 120 },
      { Field: "DuongDung", Title: "Đường dùng", Width: 100 },
      { Field: "DonViTinh", Title: "ĐVT", Width: 100 },
      { Field: "HangSanXuat", Title: "Hãng SX", Width: 180 },
      { Field: "NuocSanXuat", Title: "Nước SX", Width: 100 },
      { Field: "SoLuongTon", Title: "SL Tồn", Width: 100 },
      { Field: "SoLuongYeuCauDaDuyet", Title: "SL Cần bù", Width: 100 } // số lượng sum yêu cầu lĩnh dược phẩm chi tiết 
    ]
    this.gridChildChildLinhBuDaDuyetColumns = [
      { Field: "STT", Title: "#", Width: 60, Template: this.sttTemplate },
      { Field: "MaTN", Title: "Mã TN", Width: 120 },
      { Field: "MaBN", Title: "Mã NB", Width: 120 },
      { Field: "HoTen", Title: "Họ tên", Width: 180 },
      { Field: "DVKham", Title: "DV Khám", Width: 180 },
      { Field: "BSKeToa", Title: "BS kê toa", Width: 120 },
      { Field: "NgayDieuTriString", Title: "Ngày điều trị", Width: 120 },
      { Field: "NgayKe", Title: "Ngày kê", Width: 120 },
      { Field: "SLDanhSachDuyet", Title: "SL", Width: 80 } // số lượng sum yêu cầu lĩnh dược phẩm chi tiết 
    ];
  //-------- end bù-------------------------------------------------------------------------------------------------
  //-------- dự trù-------------------------------------------------------------------------------------------------
    this.gridChildLinhDuTruChuaDuyetColumns = [
      { Field: "STT", Title: "#", Width: 50, Template: this.sttTemplate },
      { Field: "Nhom", Title: "Nhóm", Width: 100, Sortable: true, Hidden: true, TemplateGroupHeader: this.nhomGroupHeaderTemplate },
      { Field: "TenVatTu", Title: "Tên dược phẩm", Width: 120, Sortable: true },
      { Field: "HoatChat", Title: "Hoạt chất", Width: 50 },
      { Field: "NongDoHamLuong", Title: "Nồng độ/hàm lượng", Width: 50 },
      { Field: "DuongDung", Title: "Đường dùng", Width: 50 },
      { Field: "DonViTinh", Title: "ĐVT", Width: 100, Sortable: true },
      { Field: "HangSanXuat", Title: "Hãng SX", Width: 200, Sortable: true },
      { Field: "NuocSanXuat", Title: "Nước SX", Width: 120, Sortable: true },
      { Field: "SLTon", Title: "SL Tồn", Width: 100,Sortable: true },
      { Field: "SoLuongYc", Title: "SL yêu cầu", Width: 120,Sortable: true }
    ];
    this.gridChildLinhDuTruDaDuyetColumns = [
      { Field: "STT", Title: "#", Width: 50, Template: this.sttTemplate },
      { Field: "Nhom", Title: "Nhóm", Width: 100, Sortable: true, Hidden: true, TemplateGroupHeader: this.nhomGroupHeaderTemplate },
      { Field: "TenVatTu", Title: "Tên dược phẩm", Width: 120, Sortable: true },
      { Field: "HoatChat", Title: "Hoạt chất", Width: 50 },
      { Field: "NongDoHamLuong", Title: "Nồng độ/hàm lượng", Width: 50 },
      { Field: "DuongDung", Title: "Đường dùng", Width: 50 },
      { Field: "DonViTinh", Title: "ĐVT", Width: 100, Sortable: true },
      { Field: "HangSanXuat", Title: "Hãng SX", Width: 200, Sortable: true },
      { Field: "NuocSanXuat", Title: "Nước SX", Width: 120, Sortable: true },
      { Field: "SoLuongYc", Title: "SL yêu cầu", Width: 120,Sortable: true }
    ];
  //--------end  dự trù-------------------------------------------------------------------------------------------------



  //--------  trực tiếp------------------------------------------------------------------------------------------- 
    this.gridChildLinhBenhNhanColumns = [
      { Field: "STT", Title: "#", Width: 20, Template: this.sttTemplate },
      { Field: "MaYeuCauTiepNhan", Title: "Mã TN", Width: 120 },
      { Field: "MaBenhNhan", Title: "Mã NB", Width: 120, Sortable: true },
      { Field: "HoTen", Title: "Họ tên", Width: 180, Sortable: true },
      { Field: "SoLuong", Title: "SL", Width: 80, Sortable: true }
    ];
    this.gridChildChildLinhBenhNhanColumns = [
      { Field: "STT", Title: "#", Width: 60, Template: this.sttTemplate },
      { Field: "TenDuocPham", Title: "Tên dược phẩm", Width: 180 },
      { Field: "NongDoHamLuong", Title: "Nồng độ/Hàm lượng", Width: 120 },
      { Field: "HoatChat", Title: "Hoạt chất", Width: 150 },
      { Field: "DuongDung", Title: "ĐD", Width: 80 },
      { Field: "DonViTinh", Title: "ĐVT", Width: 80 },
      { Field: "HangSanXuat", Title: "Hãng SX", Width: 150 },
      { Field: "NuocSanXuat", Title: "Nước SX", Width: 100 },
      { Field: "DichVuKham", Title: "DV Khám", Width: 180 },
      { Field: "BacSiKeToa", Title: "BS kê toa", Width: 120 },
      { Field: "NgayDieuTriString", Title: "Ngày điều trị", Width: 120 },
      { Field: "NgayKetString", Title: "Ngày kê", Width: 120 },
      { Field: "SoLuongTon", Title: "SL Tồn", Width: 90 },
      { Field: "SoLuongYeuCau", Title: "SL Yêu cầu", Width: 90 }
    ];
    this.gridChildChildLinhBenhNhanTuChoiColumns = [
      { Field: "STT", Title: "#", Width: 60, Template: this.sttTemplate },
      { Field: "TenDuocPham", Title: "Tên dược phẩm", Width: 180 },
      { Field: "NongDoHamLuong", Title: "Nồng độ/Hàm lượng", Width: 120 },
      { Field: "HoatChat", Title: "Hoạt chất", Width: 150 },
      { Field: "DuongDung", Title: "ĐD", Width: 80 },
      { Field: "DonViTinh", Title: "ĐVT", Width: 80 },
      { Field: "HangSanXuat", Title: "Hãng SX", Width: 150 },
      { Field: "NuocSanXuat", Title: "Nước SX", Width: 100 },
      { Field: "SoLuongYeuCau", Title: "SL Yêu cầu", Width: 90 }
    ];
    //--------end  trực tiếp------------------------------------------------------------------------------------------- 

    if (this.route.snapshot.queryParams.holdQuery != null) {
      this.holdQuery = this.route.snapshot.queryParams.holdQuery;
    }
    
    if (
      this.holdQuery != null &&
      LocalStorageHelper.getItem('additionalSearchStringLDP') != null
    ) {
      this.TimKiemId();
    } else {
      LocalStorageHelper.setItem('additionalSearchStringLDP', null);
     
      if (this.timKiemTuNgay.NgayYeuCauRangDate.startDate != null) {
        this.linhVatTuGridVo.NgayYeuCauRangDateStartDate = CommonService.formatDateTime(this.timKiemTuNgay.NgayYeuCauRangDate.startDate, "mm/dd/yyyy");
      }
      else {
        this.linhVatTuGridVo.NgayYeuCauRangDateStartDate = null;
      }
      if (this.timKiemTuNgay.NgayYeuCauRangDate.endDate != null) {
        this.linhVatTuGridVo.NgayYeuCauRangDateStartEnd = CommonService.formatDateTime(this.timKiemTuNgay.NgayYeuCauRangDate.endDate, "mm/dd/yyyy");
      }
      else {
        this.linhVatTuGridVo.NgayYeuCauRangDateStartEnd = null;
      }

      let NgayDuyetRangDateStartDate = null;
      let NgayDuyetRangDateEndDate = null;
      let NgayYeuCauRangDateStartDate ="\"" + this.linhVatTuGridVo.NgayYeuCauRangDateStartDate + "\"";
      let NgayYeuCauRangDateEndDate = "\"" + this.linhVatTuGridVo.NgayYeuCauRangDateStartEnd + "\"";

      let Searching = null;
      let queryString = "{\"NgayYeuCauRangDateStartDate\":" + NgayYeuCauRangDateStartDate + ",\"NgayYeuCauRangDateStartEnd\":" + NgayYeuCauRangDateEndDate
        + ",\"NgayDuyetRangDateStartDate\":" + NgayDuyetRangDateStartDate + ",\"NgayDuyetRangDateStartEnd\":" + NgayDuyetRangDateEndDate + ",\"Searching\":" + Searching  + ",\"DangChoDuyet\":" + this.linhVatTuGridVo.DangChoDuyet + ",\"TuChoiDuyet\":" + this.linhVatTuGridVo.TuChoiDuyet + ",\"DaDuyet\":" + this.linhVatTuGridVo.DaDuyet + " }";
      this.gridChild.additionalSearchString = queryString;
    }
  }
  TimKiemId() {
    var searching = LocalStorageHelper.getItem<string>("additionalSearchStringLDP");
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
        + ",\"NgayDuyetRangDateStartDate\":" + NgayDuyetRangDateStartDate + ",\"NgayDuyetRangDateStartEnd\":" + NgayDuyetRangDateEndDate + ",\"Searching\":" + Searching +",\"DangChoDuyet\":" + this.linhVatTuGridVo.DangChoDuyet + ",\"TuChoiDuyet\":" + this.linhVatTuGridVo.TuChoiDuyet + ",\"DaDuyet\":" + this.linhVatTuGridVo.DaDuyet + " }";
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
      this.linhVatTuGridVo.DangChoDuyet = KiemTraLoCalAdditonalExit.DangChoDuyet;
      this.linhVatTuGridVo.TuChoiDuyet = KiemTraLoCalAdditonalExit.TuChoiDuyet;
      this.linhVatTuGridVo.DaDuyet = KiemTraLoCalAdditonalExit.DaDuyet;
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
      this.linhVatTuGridVo.NgayYeuCauRangDateStartDate = CommonService.formatDateTime(this.timKiemTuNgay.NgayYeuCauRangDate.startDate, "mm/dd/yyyy");
    }
    else {
      this.linhVatTuGridVo.NgayYeuCauRangDateStartDate = null;
    }
    if (this.timKiemTuNgay.NgayYeuCauRangDate.endDate != null) {
      this.linhVatTuGridVo.NgayYeuCauRangDateStartEnd = CommonService.formatDateTime(this.timKiemTuNgay.NgayYeuCauRangDate.endDate, "mm/dd/yyyy");
    }
    else {
      this.linhVatTuGridVo.NgayYeuCauRangDateStartEnd = null;
    }
    if (this.timKiemTuNgay.NgayDuyetRangDate.startDate != null) {
      this.linhVatTuGridVo.NgayDuyetRangDateStartDate = CommonService.formatDateTime(this.timKiemTuNgay.NgayDuyetRangDate.startDate, "mm/dd/yyyy");
    }
    else {
      this.linhVatTuGridVo.NgayDuyetRangDateStartDate = null;
    }
    if (this.timKiemTuNgay.NgayDuyetRangDate.endDate != null) {
      this.linhVatTuGridVo.NgayDuyetRangDateStartEnd = CommonService.formatDateTime(this.timKiemTuNgay.NgayDuyetRangDate.endDate, "mm/dd/yyyy");
    }
    else {
      this.linhVatTuGridVo.NgayDuyetRangDateStartEnd = null;
    }
    if (this.timKiemTuNgay.TrangThaiCheck != null) {
      this.linhVatTuGridVo.TrangThaiCheck = this.timKiemTuNgay.TrangThaiCheck;
    }
    if (this.searchString != null || this.searchString != undefined) {
      this.linhVatTuGridVo.Searching = this.searchString;
    }
    else {
      this.linhVatTuGridVo.Searching = null;
    }
    let queryStringSearch = JSON.stringify(this.linhVatTuGridVo);
    this.stringAdditionalSearchString = queryStringSearch;
    this.gridChild._additionalSearchString = queryStringSearch;
    LocalStorageHelper.setItem("additionalSearchStringLDP", queryStringSearch);
    this.gridChild.search();
  }

  checkTrangThaiDCT(event: any, type: any) {
    this.cd.detectChanges();
    if(type == 2)
    {
      this.linhVatTuGridVo.DangChoDuyet = event;
    }
    if(type == 3)
    {
      this.linhVatTuGridVo.TuChoiDuyet = event;
    }
    if(type == 4)
    {
      this.linhVatTuGridVo.DaDuyet = event;
    }
  
    this.TimkiemNangCao();
  }


  xemChiTietYeuCauLinh(id: number, loaiPhieuLinh: number) {
    switch (loaiPhieuLinh) {
      case EnumLoaiPhieuLinh.LinhDuTru:
        if (this.authService.hasPermission(DocumentType.TaoYeuCauLinhThuongDuocPham, SecurityOperation.Update)) {
          this.router.navigate([this.baseRoute + "/duyet-phieu-linh-thuoc-thuong/" + id], { queryParams: { holdQuery: true } }); break;
        } else {
          this.notificationService.showError(SystemMessage.UnAuthorizedMessage);
        }
      case EnumLoaiPhieuLinh.LinhBu:
        if (this.authService.hasPermission(DocumentType.TaoYeuCauLinhBuDuocPham, SecurityOperation.Update)) {
          this.router.navigate([this.baseRoute + "/duyet-phieu-linh-thuoc-bu/" + id], { queryParams: { holdQuery: true} }); break;
          
        } else {
          this.notificationService.showError(SystemMessage.UnAuthorizedMessage);
        }
      case EnumLoaiPhieuLinh.LinhChoBenhNhan:
        if (this.authService.hasPermission(DocumentType.TaoYeuCauLinhTrucTiepDuocPham, SecurityOperation.Update)) {
          this.router.navigate([this.baseRoute + "/duyet-phieu-linh-thuoc-truc-tiep/" + id], { queryParams: { holdQuery: true} });break;
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
    self.apiService.postExportExcel<string>('YeuCauLinhDuocPham/ExportDanhSachDuyetLinhDuocPham',
      self.exportQueryInfoQueryInfo).subscribe(
        resultData => {
          self.closePopupLoadingData();
          const dateTimeNow = new Date();
          CommonService.downLoadFile(resultData, 'application/vnd.ms-excel',
            'DanhSachDuyetLinhDuocPham' + dateTimeNow.getFullYear() + '.xlsx');
        },
        (err: any) => {
          self.notificationService.showError(err.Message);
        });
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
  clearSearch() {
    this.searchString = "";
    this.gridChild.search();
  }
  InDuocPham(dataItem, loaiPhieuLinh) {
    this.apiService.post("YeuCauLinhDuocPham/InYeuCauLinhDuocPhamTrucTiep?yeuCauLinhId=" + dataItem + "&loaiPhieuLinh=" + loaiPhieuLinh)
      .subscribe((resultData) => {
        if (resultData != undefined && resultData != null) {
          this.dialog.open(PhieuXuatLinhThuocPopupComponent, {
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
  quayVeDanhSach() {
    this.location.back();
  }
}
