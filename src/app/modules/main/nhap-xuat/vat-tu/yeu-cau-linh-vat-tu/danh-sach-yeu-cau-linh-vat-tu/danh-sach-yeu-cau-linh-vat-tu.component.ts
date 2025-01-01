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
import { PhieuLinhVatTuThuong, SearchNgay, ExportQueryInfoQueryInfo, LinhVatTuGridVo } from '../yeu-cau-linh-vat-tu.model';
import { TrangThaiLoad } from '../trang-thai-load.enum';
import { CommonService } from "src/app/core/utilities/common.helper";
import { InLinhVatTuComponent } from '../in-linh-vat-tu/in-linh-vat-tu.component';
import { ApiError } from 'src/app/shared/models/api-error.model';
import icMoreHoriz from '@iconify/icons-ic/twotone-more-horiz';
import icDelete from '@iconify/icons-ic/twotone-delete';
import icEdit from '@iconify/icons-ic/twotone-edit';
import icAdd from '@iconify/icons-ic/twotone-add';
import { LoadingComponent } from 'src/app/shared/component/dialogs/loading/loading.component';
import { PhieuLinhVatTuThuongPopupComponent } from '../phieu-linh-vat-tu-thuong-popup/phieu-linh-vat-tu-thuong-popup.component';
import icFilterList from '@iconify/icons-ic/twotone-filter-list';
import { EnumLoaiPhieuLinh } from 'src/app/shared/enum/linh-vat-tu-thuoc.enum';
import { SecurityOperation } from 'src/app/shared/enum/security-operation.enum';
import { SystemMessage } from 'src/app/shared/configdata/system-message';
import { Location } from '@angular/common';
import { LocalStorageHelper } from 'src/app/core/utilities/local-storage.helper';
import { GroupDescriptor } from '@progress/kendo-data-query';
import { ConfirmComponent } from 'src/app/shared/component/dialogs/confirm/confirm.component';
import { Sort } from 'src/app/shared/models/common.model';
@Component({
  selector: 'app-danh-sach-yeu-cau-linh-vat-tu',
  templateUrl: './danh-sach-yeu-cau-linh-vat-tu.component.html',
  styleUrls: ['./danh-sach-yeu-cau-linh-vat-tu.component.scss']
})
export class DanhSachYeuCauLinhVatTuComponent implements OnInit {

  documentType: DocumentType;
  inPhieuLinhThuong: PhieuLinhVatTuThuong = new PhieuLinhVatTuThuong();
  linhVatTuGridVo: LinhVatTuGridVo;
  searchString: string;
  gridColumns: any[] = [];

  gridChildLinhDuTruChuaDuyetColumns: any[] = [];
  gridChildLinhDuTruDaDuyetColumns: any[] = [];

  gridChildLinhBuColumns: any[] = [];
  gridChildLinhBuDaDuyetColumns: any[] = [];
  gridChildChildLinhBuColumns: any[] = [];
  gridChildLinhBuTuChoiColumns: any[] = [];
  
  gridChildChildLinhBuDaDuyetColumns: any[] = [];
  gridChildLinhBenhNhanColumns: any[] = [];
  gridChildChildLinhBenhNhanColumns: any[] = [];
  gridChildChildLinhBenhNhanDaDuyetColumns: any[] = [];
  gridChildChildLinhBenhNhanTuChoiColumns: any[] = [];
  // searchInfo: searchLoaiCauHinh;
  icSearch = icSearch;
  searchCtrl = new FormControl('');
  urlGetData: string = "";
  urlGetTotalPage: string = "";
  icPrint = icPrint;
  icFileExcel = icFileExcel;
  icDelete = icDelete;
  icMoreHoriz = icMoreHoriz;
  icFilterList = icFilterList;
  icEdit = icEdit;
  icAdd = icAdd;
  popupLoadingDataDaDuyet: any = null;
  validationErrors: any[] = [];
  timKiemTuNgay: SearchNgay = new SearchNgay();
  public kiemTraDanhSachDangChoDuyet: boolean = true;
  public kiemTraDanhSachTuChoiDuyet: boolean = false;
  public kiemTraDanhSachDaDuyet: boolean = false;
  public kiemTraDanhSachDaChoGoi: boolean = true;
  trangThai: any;
  trangThaiCheck: number = 0;
  exportQueryInfoQueryInfo: ExportQueryInfoQueryInfo = new ExportQueryInfoQueryInfo();
  stringAdditionalSearchString: string = "";
  holdQuery: any = null;
  @ViewChild('actionTemplate', { static: true }) maTNTemplateactionTemplate: TemplateRef<any>;
  @ViewChild('TinhTrangTemplate', { static: true }) TinhTrangTemplate: TemplateRef<any>;
  @ViewChild('groupTemplate', { static: true }) groupTemplate: TemplateRef<any>;
  @ViewChild('maTNTemplate', { static: true }) PLTemplate: TemplateRef<any>;
  @ViewChild('nhomGroupHeaderTemplate', { static: true }) nhomGroupHeaderTemplate: TemplateRef<any>;//
  @ViewChild('sttTemplate', { static: true }) sttTemplate: TemplateRef<any>;//
  @ViewChild('ngayYeuCauTemplate', { static: true }) ngayYeuCauTemplate: TemplateRef<any>;
  @ViewChild('ngayDuyetTemplate', { static: true }) ngayDuyetTemplate: TemplateRef<any>;
  @ViewChild(GridComponent, { static: true }) gridChild: GridComponent;
  baseRoute: string = "/nhap-xuat/vat-tu/yeu-cau-linh-vat-tu";
  groupsYCTN: GroupDescriptor[] = [{ field: 'MaYeuCauTiepNhan' }];
  groups: GroupDescriptor[] = [{ field: 'Nhom' }];

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
    this.documentType = DocumentType.DanhSachYeuCauLinhVatTu;
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
      { Field: "Action", Title: "", Width: 50, Sortable: true, Template: this.groupTemplate },

    ];
    this.gridChildLinhBuColumns = [
      { Field: "STT", Title: "#", Width: 60, Template: this.sttTemplate },
      { Field: "TenVatTu", Title: "Tên vật tư", Width: 180, ShowTooltip: true },
      { Field: "DonViTinh", Title: "ĐVT", Width: 100 },
      { Field: "Nhom", Title: "Nhóm", Width: 100, Sortable: true, Hidden: true, TemplateGroupHeader: this.nhomGroupHeaderTemplate },
      { Field: "HangSanXuat", Title: "Hãng SX", Width: 220 },
      { Field: "NuocSanXuat", Title: "Nước SX", Width: 205 },
      { Field: "SoLuongTon", Title: "SL Tồn", Width: 100 },
      { Field: "SLDaLinh", Title: "SL đã bù", Width: 100 },
      { Field: "SoLuongCanBu", Title: "SL cần bù", Width: 60 },
      { Field: "SoLuongCanBu", Title: "SL yêu cầu", Width: 100 },
    ];
    this.gridChildLinhBuTuChoiColumns = [
      { Field: "STT", Title: "#", Width: 60, Template: this.sttTemplate },
      { Field: "TenVatTu", Title: "Tên vật tư", Width: 180, ShowTooltip: true },
      { Field: "DonViTinh", Title: "ĐVT", Width: 100 },
      { Field: "Nhom", Title: "Nhóm", Width: 100, Sortable: true, Hidden: true, TemplateGroupHeader: this.nhomGroupHeaderTemplate },
      { Field: "HangSanXuat", Title: "Hãng SX", Width: 220 },
      { Field: "NuocSanXuat", Title: "Nước SX", Width: 205 },
      //{ Field: "SoLuongTon", Title: "SL Tồn", Width: 100 },
      { Field: "SLDaLinh", Title: "SL đã bù", Width: 100 },
      { Field: "SoLuongCanBu", Title: "SL cần bù", Width: 60 },
      { Field: "SoLuongCanBu", Title: "SL yêu cầu", Width: 100 },
    ];
    this.gridChildLinhBuDaDuyetColumns = [
      { Field: "STT", Title: "#", Width: 60, Template: this.sttTemplate },
      { Field: "TenVatTu", Title: "Tên vật tư", Width: 180, ShowTooltip: true },
      { Field: "DonViTinh", Title: "ĐVT", Width: 100 },
      { Field: "Nhom", Title: "Nhóm", Width: 100, Sortable: true, Hidden: true, TemplateGroupHeader: this.nhomGroupHeaderTemplate },
      { Field: "HangSanXuat", Title: "Hãng SX", Width: 220 },
      { Field: "NuocSanXuat", Title: "Nước SX", Width: 205 },
      { Field: "SoLuongCanBu", Title: "SL cần bù", Width: 60 },
      { Field: "SLDaLinh", Title: "SL đã bù", Width: 100 },
      { Field: "SoLuongYeuCauDaDuyet", Title: "SL được duyệt", Width: 100 },
    ]
    this.gridChildChildLinhBuColumns = [
      { Field: "STT", Title: "#", Width: 50, Template: this.sttTemplate },
      { Field: "MaTN", Title: "Mã tiếp nhận", Width: 120, Sortable: true },
      { Field: "MaBN", Title: "Mã người bệnh", Width: 120 },
      { Field: "HoTen", Title: "Họ tên", Width: 100 ,Sortable: true},
      { Field: "DVKham", Title: "Dịch vụ khám", Width: 200 ,Sortable: true},
      { Field: "BSKeToa", Title: "Bác sỹ kê vật tư", Width: 120 ,Sortable: true},
      { Field: "NgayDieuTriString", Title: "Ngày điều trị", Width: 120 ,Sortable: true},
      { Field: "NgayKe", Title: "Ngày kê", Width: 120 ,Sortable: true},
      { Field: "SL", Title: "Số lượng cần bù", Width: 120 ,Sortable: true}
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
      { Field: "TenVatTu", Title: "Tên vật tư", Width: 120, Sortable: true },
      { Field: "Nhom", Title: "Nhóm", Width: 100, Sortable: true, Hidden: true, TemplateGroupHeader: this.nhomGroupHeaderTemplate },
      { Field: "DonViTinh", Title: "Đơn vị tính", Width: 100, Sortable: true },
      { Field: "HangSanXuat", Title: "Hãng Sản Xuất", Width: 200, Sortable: true },
      { Field: "NuocSanXuat", Title: "Nước Sản Xuất", Width: 120, Sortable: true },
      { Field: "SLTon", Title: "SL tồn", Width: 120 },
      { Field: "SoLuongYc", Title: "Số lượng yêu cầu", Width: 120 }
    ];
    this.gridChildLinhDuTruDaDuyetColumns = [
      { Field: "STT", Title: "#", Width: 50, Template: this.sttTemplate },
      { Field: "TenVatTu", Title: "Tên vật tư", Width: 120, Sortable: true },
      { Field: "Nhom", Title: "Nhóm", Width: 100, Sortable: true, Hidden: true, TemplateGroupHeader: this.nhomGroupHeaderTemplate },
      { Field: "DonViTinh", Title: "Đơn vị tính", Width: 100, Sortable: true },
      { Field: "HangSanXuat", Title: "Hãng Sản Xuất", Width: 200, Sortable: true },
      { Field: "NuocSanXuat", Title: "Nước Sản Xuất", Width: 120, Sortable: true },
      { Field: "SLTon", Title: "SL tồn", Width: 120 },
      { Field: "SoLuongYc", Title: "Số lượng yêu cầu", Width: 120 }
    ];
    //--------------------------end lĩnh dự trù--------------------------------------------------------------------------------
    
    //-------------------------- lĩnh TT--------------------------------------------------------------------------------
    this.gridChildLinhBenhNhanColumns = [
      { Field: "STT", Title: "#", Width: 60, Template: this.sttTemplate },
      { Field: "MaYeuCauTiepNhan", Title: "Mã TN", Width: 120, Sortable: true },
      { Field: "MaBenhNhan", Title: "Mã NB", Width: 120, Sortable: true },
      { Field: "HoTen", Title: "Họ tên", Width: 180, Sortable: true },
      { Field: "SoLuong", Title: "SL", Width: 80, Sortable: true }
    ];
    
    this.gridChildChildLinhBenhNhanColumns = [
      { Field: "STT", Title: "#", Width: 60, Template: this.sttTemplate },
      { Field: "TenVatTu", Title: "Tên vật tư", Width: 180, Sortable: true },
      { Field: "Nhom", Title: "Nhóm", Width: 100, Sortable: true, Hidden: true, TemplateGroupHeader: this.nhomGroupHeaderTemplate },
      { Field: "DonViTinh", Title: "ĐVT", Width: 100, Sortable: true },
      { Field: "HangSanXuat", Title: "Hãng SX", Width: 180, Sortable: true },
      { Field: "NuocSanXuat", Title: "Nước SX", Width: 100, Sortable: true },
      { Field: "DichVuKham", Title: "DV Khám", Width: 180, Sortable: true },
      { Field: "BacSiKeToa", Title: "BS kê toa", Width: 120, Sortable: true },
      { Field: "NgayDieuTriString", Title: "Ngày điều trị", Width: 120, Sortable: true },
      { Field: "NgayKetString", Title: "Ngày kê", Width: 120, Sortable: true },
      { Field: "SoLuongTon", Title: "SL Tồn", Width: 100, Sortable: true },
      { Field: "SoLuongYeuCau", Title: "SL Yêu cầu", Width: 100, Sortable: true }
    ];
    this.gridChildChildLinhBenhNhanDaDuyetColumns = [
      { Field: "STT", Title: "#", Width: 60, Template: this.sttTemplate },
      { Field: "TenVatTu", Title: "Tên vật tư", Width: 180, Sortable: true },
      { Field: "Nhom", Title: "Nhóm", Width: 100, Sortable: true, Hidden: true, TemplateGroupHeader: this.nhomGroupHeaderTemplate },
      { Field: "DonViTinh", Title: "ĐVT", Width: 100, Sortable: true },
      { Field: "HangSanXuat", Title: "Hãng SX", Width: 180, Sortable: true },
      { Field: "NuocSanXuat", Title: "Nước SX", Width: 100, Sortable: true },
      { Field: "DichVuKham", Title: "DV Khám", Width: 180, Sortable: true },
      { Field: "BacSiKeToa", Title: "BS kê toa", Width: 120, Sortable: true },
      { Field: "NgayDieuTriString", Title: "Ngày điều trị", Width: 120, Sortable: true },
      { Field: "NgayKetString", Title: "Ngày kê", Width: 120, Sortable: true },
      //{ Field: "SoLuongTon", Title: "SL Tồn", Width: 100, Sortable: true },
      { Field: "SoLuongYeuCau", Title: "SL Yêu cầu", Width: 100, Sortable: true }
    ];
    this.gridChildChildLinhBenhNhanTuChoiColumns = [
      { Field: "STT", Title: "#", Width: 60, Template: this.sttTemplate },
      { Field: "TenVatTu", Title: "Tên vật tư", Width: 180, Sortable: true },
      { Field: "Nhom", Title: "Nhóm", Width: 100, Sortable: true, Hidden: true, TemplateGroupHeader: this.nhomGroupHeaderTemplate },
      { Field: "DonViTinh", Title: "ĐVT", Width: 100, Sortable: true },
      { Field: "HangSanXuat", Title: "Hãng SX", Width: 180, Sortable: true },
      { Field: "NuocSanXuat", Title: "Nước SX", Width: 100, Sortable: true },
      //{ Field: "SoLuongTon", Title: "SL Tồn", Width: 100, Sortable: true },
      { Field: "SoLuongYeuCau", Title: "SL Yêu cầu", Width: 100, Sortable: true },
      { Field: "DichVuKham", Title: "DV Khám", Width: 180, Sortable: true },
      { Field: "BacSiKeToa", Title: "BS kê toa", Width: 120, Sortable: true },
      { Field: "NgayDieuTriString", Title: "Ngày điều trị", Width: 120, Sortable: true },
      { Field: "NgayKetString", Title: "Ngày kê", Width: 120, Sortable: true },
    ];
    //--------------------------end  lĩnh TT--------------------------------------------------------------------------------
    if (this.route.snapshot.queryParams.holdQuery != null) {
      this.holdQuery = this.route.snapshot.queryParams.holdQuery;
    }
    if (
      this.holdQuery != null &&
      LocalStorageHelper.getItem('additionalSearchStringYCLVT') != null
    ) {
      this.TimKiemId();
    } else {
      LocalStorageHelper.setItem('additionalSearchStringYCLVT', null);
      let NgayDuyetRangDateStartDate = null;
      let NgayDuyetRangDateEndDate = null;
      let NgayYeuCauRangDateStartDate = null;
      let NgayYeuCauRangDateEndDate = null;
      let Searching = null;
      let queryString = "{\"NgayYeuCauRangDateStartDate\":" + NgayYeuCauRangDateStartDate + ",\"NgayYeuCauRangDateStartEnd\":" + NgayYeuCauRangDateEndDate
        + ",\"NgayDuyetRangDateStartDate\":" + NgayDuyetRangDateStartDate + ",\"NgayDuyetRangDateStartEnd\":" + NgayDuyetRangDateEndDate + ",\"Searching\":" + Searching + ",\"DangChoGoi\":" + this.linhVatTuGridVo.DangChoGoi + ",\"DangChoDuyet\":" + this.linhVatTuGridVo.DangChoDuyet + ",\"TuChoiDuyet\":" + this.linhVatTuGridVo.TuChoiDuyet + ",\"DaDuyet\":" + this.linhVatTuGridVo.DaDuyet + " }";
      this.gridChild.additionalSearchString = queryString;
    }
  }
  TimKiemId() {
    var searching = LocalStorageHelper.getItem<string>("additionalSearchStringYCLVT");
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
        + ",\"NgayDuyetRangDateStartDate\":" + NgayDuyetRangDateStartDate + ",\"NgayDuyetRangDateStartEnd\":" + NgayDuyetRangDateEndDate + ",\"Searching\":" + Searching + ",\"DangChoGoi\":" + this.linhVatTuGridVo.DangChoGoi + ",\"DangChoDuyet\":" + this.linhVatTuGridVo.DangChoDuyet + ",\"TuChoiDuyet\":" + this.linhVatTuGridVo.TuChoiDuyet + ",\"DaDuyet\":" + this.linhVatTuGridVo.DaDuyet + " }";
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
      this.kiemTraDanhSachDaChoGoi = KiemTraLoCalAdditonalExit.DangChoGoi;
      this.kiemTraDanhSachDangChoDuyet = KiemTraLoCalAdditonalExit.DangChoDuyet;
      this.kiemTraDanhSachTuChoiDuyet = KiemTraLoCalAdditonalExit.TuChoiDuyet;
      this.kiemTraDanhSachDaDuyet = KiemTraLoCalAdditonalExit.DaDuyet;
      this.linhVatTuGridVo.DangChoGoi = KiemTraLoCalAdditonalExit.DangChoGoi;
      this.linhVatTuGridVo.DangChoDuyet = KiemTraLoCalAdditonalExit.DangChoDuyet;
      this.linhVatTuGridVo.TuChoiDuyet = KiemTraLoCalAdditonalExit.TuChoiDuyet;
      this.linhVatTuGridVo.DaDuyet = KiemTraLoCalAdditonalExit.DaDuyet;
      this.gridChild.additionalSearchString = searching;
    }
  }
  blur($event) {
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
    LocalStorageHelper.setItem("additionalSearchStringYCLVT", queryStringSearch);
    this.gridChild.search();
  }


  checkTrangThaiDCT(event: any, type: any) {
    this.cd.detectChanges();
    if (type == 1) {
      this.linhVatTuGridVo.DangChoGoi = event;
    }
    if (type == 2) {
      this.linhVatTuGridVo.DangChoDuyet = event;
    }
    if (type == 3) {
      this.linhVatTuGridVo.TuChoiDuyet = event;
    }
    if (type == 4) {
     
      if(event == true){
        this.linhVatTuGridVo.DaDuyet = event;
      }
      else{
        this.linhVatTuGridVo.DaDuyet = null;
      }
    }

    this.TimkiemNangCao();
  }
  loadingPageDaDuyet() {
    this.popupLoadingDataDaDuyet = this.dialog.open(LoadingComponent, {
      disableClose: true,
      width: "200px",
      height: "90px",
      data: { Title: "Đang tải dữ liệu..." },
    });
  }


  closePopupLoadingDataDaDuyet() {
    if (this.popupLoadingDataDaDuyet != undefined && this.popupLoadingDataDaDuyet != null) {
      this.popupLoadingDataDaDuyet.close();
    }
  }

  /// in 
  InPhieuLinh(data: any) {
    var self = this;
    if (data.LoaiPhieuLinh == 1 || data.LoaiPhieuLinh == 2) { //lĩnh dự trù(dự trù) hoặc lĩnh bù
      self.loadingPageDaDuyet();
      self.inPhieuLinhThuong.HostingName = window.location.protocol + "//" + window.location.host;
      self.inPhieuLinhThuong.Header = true;
      self.inPhieuLinhThuong.YeuCauLinhVatTuId = data.Id;
      self.inPhieuLinhThuong.LoaiPhieuLinh = data.LoaiPhieuLinh;
      self.inPhieuLinhThuong.TrangThai = data.DuocDuyet;
      self.apiService.post<any>("YeuCauLinhVatTu/InPhieuLinhThuongVatTu", self.inPhieuLinhThuong).subscribe(
        resData => {
          if (resData != undefined && resData != null) {
            self.closePopupLoadingDataDaDuyet();
            self.inPhieuLinhThuong.Header = false;
            self.dialog.open(PhieuLinhVatTuThuongPopupComponent, {
              disableClose: false,
              width: '1200px',
              data: {Model:resData},
            });
          }
        },
        (err: ApiError) => {
          self.validationErrors = err.ValidationErrors;
          if (err.Message != "Validation Failed") {
            self.notificationService.showError(err.Message);
          }
          self.closePopupLoadingDataDaDuyet();
        }
      );
    } else {
      let trangThaiIn;
      if (data.DuocDuyet == false) {
        trangThaiIn = false;
      }
      else {
        trangThaiIn = true;
      }
      let dataIn = {
        Hosting: null,
        YeuCauLinhVatTuId: data.Id,
        LoaiPhieuLinh: data.LoaiPhieuLinh,
        TrangThaiIn: trangThaiIn
      }
      if (window.location.protocol == "http:") {
        dataIn.Hosting = "http://" + window.location.host;
      } else {
        dataIn.Hosting = "https://" + window.location.host;
      }
      this.apiService.post<any>("YeuCauLinhVatTu/InLinhVatTu", dataIn).subscribe(
        resultData => {
          let dialogRef = this.dialog.open(InLinhVatTuComponent, {
            width: '1000px',
            data: { Model: resultData, LoaiPhieuLinh: data.Loai }
          }).afterClosed().subscribe(() => { });
        },
        (err: ApiError) => {
          this.validationErrors = err.ValidationErrors;
          if (err.Message != "Validation Failed") {
            this.notificationService.showError(err.Message);
          }
        });
    }
  }
  Huy(dataItem) {
    if (dataItem != undefined && dataItem != null) {
      this.dialog.open(ConfirmComponent, {
        disableClose: false,
        width: "500px",
        data: {
          Title: "Xác nhận",
          Message: "Bạn có muốn xóa phiếu lĩnh này không ?",
        },
      }).afterClosed().subscribe((res) => {
        if (res == "Yes") {
          this.apiService.post<any>("YeuCauLinhVatTu/HuyItemYeuCauLinhThuoc?id=" + dataItem.Id).subscribe(
            resultData => {
              this.notificationService.showSuccess("Xóa thành công");
              this.TimkiemNangCao();
            },
            (err: ApiError) => {
              this.validationErrors = err.ValidationErrors;
              if (err.Message != "Validation Failed") {
                this.notificationService.showError(err.Message);
              }
            });
        }
      })
    };

  }
  Xem(id: number, loaiPhieuLinh: number,daGui :any) {
    switch (loaiPhieuLinh) {
      case EnumLoaiPhieuLinh.LinhDuTru:
        if (this.authService.hasPermission(DocumentType.TaoYeuCauLinhThuongVatTu, SecurityOperation.Update)) {
          this.router.navigate(["/nhap-xuat/vat-tu/yeu-cau-linh-vat-tu/gui-lai-phieu-linh-vat-tu-thuong/" + id], { queryParams: { holdQuery: this.trangThaiCheck } }); break;
        } else {
          this.notificationService.showError(SystemMessage.UnAuthorizedMessage);
        }
      case EnumLoaiPhieuLinh.LinhBu:
        if (this.authService.hasPermission(DocumentType.TaoYeuCauLinhBuVatTu, SecurityOperation.Update)) {
          this.router.navigate(["/nhap-xuat/vat-tu/yeu-cau-linh-vat-tu/gui-lai-phieu-linh-vat-tu-bu/" + id], { queryParams: { holdQuery: this.trangThaiCheck } }); break;
        } else {
          this.notificationService.showError(SystemMessage.UnAuthorizedMessage);
        }
      case EnumLoaiPhieuLinh.LinhChoBenhNhan:
        if (this.authService.hasPermission(DocumentType.TaoYeuCauLinhTrucTiepVatTu, SecurityOperation.Update)) {
          if(daGui ==  null || daGui == false)
          {
            this.router.navigate(["/nhap-xuat/vat-tu/yeu-cau-linh-vat-tu/gui-lai-phieu-linh-vat-tu-truc-tiep/" + id], { queryParams: { holdQuery: true} }); break;
          }
          else{
            this.router.navigate(["/nhap-xuat/vat-tu/yeu-cau-linh-vat-tu/gui-lai-phieu-linh-vat-tu-truc-tiep/" + id]); break;
          }
          
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
    self.apiService.postExportExcel<string>('YeuCauLinhVatTu/ExportDanhSachLinhVatTu',
      self.exportQueryInfoQueryInfo).subscribe(
        resultData => {
          self.closePopupLoadingData();
          const dateTimeNow = new Date();
          CommonService.downLoadFile(resultData, 'application/vnd.ms-excel',
            'DanhSachYeuCauLinhVatTu' + dateTimeNow.getFullYear() + '.xlsx');
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
}
