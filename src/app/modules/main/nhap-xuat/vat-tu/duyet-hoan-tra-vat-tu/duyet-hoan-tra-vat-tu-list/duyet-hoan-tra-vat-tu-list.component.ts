import { ChangeDetectorRef, Component, ElementRef, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { GridComponent } from 'src/app/shared/component/grid/grid.component';
import { LoadingComponent } from 'src/app/shared/component/dialogs/loading/loading.component';
import { CommonService } from 'src/app/core/utilities/common.helper';
import { LocalStorageHelper } from 'src/app/core/utilities/local-storage.helper';
import { GroupDescriptor, SortDescriptor } from '@progress/kendo-data-query';
import { AuthService } from 'src/app/core/services/auth.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/core/services/api.service';
import { NotificationService } from 'src/app/core/services/notification.service';
import { MatDialog } from '@angular/material';
import { SecurityOperation } from 'src/app/shared/enum/security-operation.enum';
import { SystemMessage } from 'src/app/shared/configdata/system-message';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import { HoanTraVatTuSearch } from '../hoan-tra-vt.model';
import { InPhieuHoanTraVatTuComponent } from '../in-phieu-hoan-tra-vat-tu/in-phieu-hoan-tra-vat-tu.component';
import { Location } from '@angular/common';

import icicdone from '@iconify/icons-ic/twotone-done';
import icClose from '@iconify/icons-ic/twotone-close';
import icEdit from '@iconify/icons-ic/twotone-edit';
import icSearch from '@iconify/icons-ic/twotone-search';
import icFileExcel from '@iconify/icons-fa-solid/file-excel';
import icFilterList from '@iconify/icons-ic/twotone-filter-list';
import icMoreHoriz from '@iconify/icons-ic/twotone-more-horiz';
import icPrint from "@iconify/icons-ic/twotone-print";
import { InPhieuHoanTraCompoment } from '../../../duoc-pham/duyet-hoan-tra-duoc-pham/in-phieu-hoan-tra/in-phieu-hoan-tra.component';

@Component({
  selector: 'app-duyet-hoan-tra-vat-tu-list',
  templateUrl: './duyet-hoan-tra-vat-tu-list.component.html',
  styleUrls: ['./duyet-hoan-tra-vat-tu-list.component.scss']
})
export class DuyetHoanTraVatTuListComponent implements OnInit {
  documentType: DocumentType;
  baseRoute: string = "/nhap-xuat/vat-tu/duyet-hoan-tra-vat-tu";

  filterColumns: any[] = [];
  gridChaColumns: any[] = [];
  gridConColumns: any[] = [];

  holdQuery: any = null;
  query: string = null;
  additionalSearchString: string = null;
  duyetNhapKhoVatTu: HoanTraVatTuSearch;

  yeuCauStartDate = null;
  yeuCauEndDate = null;
  duyetStartDate = null;
  duyetEndDate = null;

  icicdone = icicdone;
  icclose = icClose;
  icEdit = icEdit;
  icSearch = icSearch;
  icFileExcel = icFileExcel;
  icFilterList = icFilterList;
  icMoreHoriz = icMoreHoriz;
  icPrint = icPrint;

  searchString: string;
  searchCtrl = new FormControl;
  theFirstSearch: string = `{\"KhoVatTuId\":0,\"TenKhoVatTu\":null,\"DangChoDuyet\":true,\"DaDuyet\":true,\"TuChoiDuyet\":true,\"LoaiNhapKho\":0,\"TenLoaiNhapKho\":null,\"SearchString\":\"\",\"RangeNhap\":{\"startDate\":null,\"endDate\":null},\"RangeDuyet\":{\"startDate\":null,\"endDate\":null}}`;

  urlGetDataGridParentAsync = "HoanTra/GetDanhSachHoanTraVatTuForGridAsync";
  urlGetDataGridChildAsync = "HoanTra/GetDanhSachHoanTraVatTuChiTietForGridAsync";
  urlGetTotalPageGridChild: string = "HoanTra/GetTotalDanhSachHoanTraVatTuChiTietForGridAsync";

  @ViewChild(GridComponent, { static: true }) gridChild: GridComponent;
  @ViewChild('ngayNhapTemplate', { static: true }) ngayNhapTemplate: TemplateRef<any>;
  @ViewChild('ngayDuyetTemplate', { static: true }) ngayDuyetTemplate: TemplateRef<any>;
  @ViewChild('vitriTemplate', { static: true }) vitriTemplate: TemplateRef<any>;
  @ViewChild('TinhTrangTemplate', { static: true }) TinhTrangTemplate: TemplateRef<any>;
  @ViewChild('gridCha', { static: false }) gridCha: GridComponent;
  @ViewChild('soChungTuTemplate', { static: true }) soChungTuTemplate: TemplateRef<any>;
  @ViewChild('TinhTrangBHYTTemplate', { static: true }) TinhTrangBHYTTemplate: TemplateRef<any>;
  @ViewChild('nhomGroupHeaderTemplate', { static: true }) nhomGroupHeaderTemplate: TemplateRef<any>;
  @ViewChild('giaNhapTemplate', { static: true }) giaNhapTemplate: TemplateRef<any>;
  @ViewChild('giaBanTemplate', { static: true }) giaBanTemplate: TemplateRef<any>;
  @ViewChild('ngayYeuCauTemplate', { static: true }) ngayYeuCauTemplate: TemplateRef<any>;
  @ViewChild('hsdTemplate', { static: true }) hsdTemplate: TemplateRef<any>;
  @ViewChild('soLuongHoanTraTemplate', { static: true }) soLuongHoanTraTemplate: TemplateRef<any>;
  @ViewChild('groupTemplate', { static: true }) groupTemplate: TemplateRef<any>;
  sortDuyetKho: SortDescriptor[] =
    [{
      field: "NgayYeuCau",
      dir: "desc"
    },
    {
      field: "SoPhieu",
      dir: "asc"
    }]
  public groups: GroupDescriptor[] = [{
    field: 'LoaiSuDung', aggregates: [
      { field: 'DonGiaNhap', aggregate: 'sum' }
    ]
  }];
  sortDuyetKhoChild: SortDescriptor[] =
    [
      {
        field: "Id",
        dir: "asc"
      }]

  constructor(
    private authService: AuthService, private location: Location,
    private dialog: MatDialog, private elem: ElementRef, private cd: ChangeDetectorRef,
    private notificationService: NotificationService,
    private apiService: ApiService, private router: Router, private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.documentType = DocumentType.DuyetYeuCauHoanTraVatTu;
    this.duyetNhapKhoVatTu = new HoanTraVatTuSearch();

    if (this.route.snapshot.queryParams.holdQuery != undefined) {
      this.holdQuery = this.route.snapshot.queryParams.holdQuery;
    }

    if (this.holdQuery != null && LocalStorageHelper.getItem('additionalSearchStringDuyetHoanTraVatTu') != null) {
      this.additionalSearchString = LocalStorageHelper.getItem('additionalSearchStringDuyetHoanTraVatTu');
      this.duyetNhapKhoVatTu = JSON.parse(this.additionalSearchString);

      if (this.duyetNhapKhoVatTu.RangeNhap.startDate != null)
        this.duyetNhapKhoVatTu.RangeNhap.startDate = new Date(this.duyetNhapKhoVatTu.RangeNhap.startDate);
      if (this.duyetNhapKhoVatTu.RangeNhap.endDate != null)
        this.duyetNhapKhoVatTu.RangeNhap.endDate = new Date(this.duyetNhapKhoVatTu.RangeNhap.endDate);
      if (this.duyetNhapKhoVatTu.RangeDuyet.startDate != null)
        this.duyetNhapKhoVatTu.RangeDuyet.startDate = new Date(this.duyetNhapKhoVatTu.RangeDuyet.startDate);
      if (this.duyetNhapKhoVatTu.RangeDuyet.endDate != null)
        this.duyetNhapKhoVatTu.RangeDuyet.endDate = new Date(this.duyetNhapKhoVatTu.RangeDuyet.endDate);
    } else {
      LocalStorageHelper.setItem('additionalSearchStringDuyetHoanTraVatTu', null);
      this.additionalSearchString = JSON.stringify(this.duyetNhapKhoVatTu);
    }

    this.gridChaColumns = [
      { Field: "SoPhieu", Title: "Số phiếu", Width: 100, Sortable: true, Template: this.soChungTuTemplate },
      { Field: "TenNguoiYeuCau", Title: "Người Yêu Cầu", Width: 150, Sortable: true },
      { Field: "HoanTraTuKho", Title: "Hoàn trả từ kho", Width: 200, Sortable: true },
      { Field: "HoanTraVeKho", Title: "Hoàn trả về kho", Width: 200, Sortable: true },
      { Field: "NgayYeuCau", Title: "Ngày Yêu Cầu", Width: 150, Sortable: true, Template: this.ngayYeuCauTemplate },
      { Field: "TinhTrangDuyet", Title: "Tình Trạng", Width: 150, Sortable: true, Template: this.TinhTrangTemplate },
      { Field: "NguoiDuyet", Title: "Người Duyệt", Width: 150, Sortable: true },
      { Field: "NgayDuyet", Title: "Ngày Duyệt", Width: 150, Sortable: true, Template: this.ngayDuyetTemplate },
      { Field: "Action", Title: "", Width: 50, Template: this.groupTemplate }
    ];

    this.gridConColumns = [
      { Field: "LoaiSuDung", Title: "", Width: 100, Hidden: true, TemplateGroupHeader: this.nhomGroupHeaderTemplate },
      { Field: "Ma", Title: "Mã", Width: 100 },
      { Field: "VatTu", Title: "Tên Vật Tư", Width: 100 },
      { Field: "DonViTinh", Title: "ĐVT", Width: 100 },
      { Field: "LoaiBHYT", Title: "Loại BHYT", Width: 140, Template: this.TinhTrangBHYTTemplate },
      { Field: "SoLo", Title: "Số Lô", Width: 100 },
      { Field: "HanSuDung", Title: "Hạn Sử Dụng", Width: 140, Template: this.hsdTemplate },
      { Field: "SoLuongHoanTra", Title: "Số Lượng Hoàn Trả", Width: 100, Template: this.soLuongHoanTraTemplate }
    ];

    this.filterColumns = [
      { Field: "SoPhieu", Title: "Mã" },
      { Field: "TenNguoiYeuCau", Title: "Người Yêu Cầu" },
      { Field: "HoanTraTuKho", Title: "Hoàn trả từ kho" },
      { Field: "HoanTraVeKho", Title: "Hoàn trả về kho" },
      { Field: "NgayYeuCau", Title: "Ngày Yêu Cầu" },
      { Field: "TinhTrangDuyet", Title: "Tình Trạng" },
      { Field: "NguoiDuyet", Title: "Người Duyệt" },
      { Field: "NgayDuyet", Title: "Ngày Duyệt" }
    ];

    this.theFirstSearch = JSON.stringify(this.duyetNhapKhoVatTu);
  }
  xemChiTiet(id: number) {
    if (this.authService.hasPermission(this.documentType, SecurityOperation.Update)) {
      this.router.navigate(["/nhap-xuat/vat-tu/duyet-hoan-tra-vat-tu/chi-tiet/" + id]);
    }
    else {
      this.notificationService.showError(SystemMessage.UnAuthorizedMessage);
    }
  }

  Timkiem() {
    this.location.replaceState(this.baseRoute + '?holdQuery=true');

    let QueryString = null;
    this.gridChild._additionalSearchString = null;
    QueryString = this.duyetNhapKhoVatTu.SearchString;

    this.convertDateTimeToUTC();

    var query = JSON.stringify(this.duyetNhapKhoVatTu);
    this.gridChild._additionalSearchString = query;
    this.gridChild.searchString = QueryString;
    this.gridChild.search();

    this.reverseDateTime();
    LocalStorageHelper.setItem("additionalSearchStringDuyetHoanTraVatTu", JSON.stringify(this.duyetNhapKhoVatTu));

    this.cd.detectChanges();
  }

  convertDateTimeToUTC() {
    if (this.duyetNhapKhoVatTu.RangeNhap.startDate) {
      this.yeuCauStartDate = new Date(this.duyetNhapKhoVatTu.RangeNhap.startDate);
      this.duyetNhapKhoVatTu.RangeNhap.startDate = new Date(Date.UTC(this.yeuCauStartDate.getFullYear(), this.yeuCauStartDate.getMonth(), this.yeuCauStartDate.getDate(), this.yeuCauStartDate.getHours(), this.yeuCauStartDate.getMinutes()));
    }

    if (this.duyetNhapKhoVatTu.RangeNhap.endDate) {
      this.yeuCauEndDate = new Date(this.duyetNhapKhoVatTu.RangeNhap.endDate);
      this.duyetNhapKhoVatTu.RangeNhap.endDate = new Date(Date.UTC(this.yeuCauEndDate.getFullYear(), this.yeuCauEndDate.getMonth(), this.yeuCauEndDate.getDate(), this.yeuCauEndDate.getHours(), this.yeuCauEndDate.getMinutes()));
    }

    if (this.duyetNhapKhoVatTu.RangeDuyet.startDate) {
      this.duyetStartDate = new Date(this.duyetNhapKhoVatTu.RangeDuyet.startDate);
      this.duyetNhapKhoVatTu.RangeDuyet.startDate = new Date(Date.UTC(this.duyetStartDate.getFullYear(), this.duyetStartDate.getMonth(), this.duyetStartDate.getDate(), this.duyetStartDate.getHours(), this.duyetStartDate.getMinutes()));
    }

    if (this.duyetNhapKhoVatTu.RangeDuyet.endDate) {
      this.duyetEndDate = new Date(this.duyetNhapKhoVatTu.RangeDuyet.endDate);
      this.duyetNhapKhoVatTu.RangeDuyet.endDate = new Date(Date.UTC(this.duyetEndDate.getFullYear(), this.duyetEndDate.getMonth(), this.duyetEndDate.getDate(), this.duyetEndDate.getHours(), this.duyetEndDate.getMinutes()));
    }
  }

  reverseDateTime() {
    if (this.duyetNhapKhoVatTu.RangeNhap.startDate) {
      this.duyetNhapKhoVatTu.RangeNhap.startDate = new Date(this.yeuCauStartDate.getFullYear(), this.yeuCauStartDate.getMonth(), this.yeuCauStartDate.getDate(), this.yeuCauStartDate.getHours(), this.yeuCauStartDate.getMinutes());
    }

    if (this.duyetNhapKhoVatTu.RangeNhap.endDate) {
      this.duyetNhapKhoVatTu.RangeNhap.endDate = new Date(this.yeuCauEndDate.getFullYear(), this.yeuCauEndDate.getMonth(), this.yeuCauEndDate.getDate(), this.yeuCauEndDate.getHours(), this.yeuCauEndDate.getMinutes());
    }

    if (this.duyetNhapKhoVatTu.RangeDuyet.startDate) {
      this.duyetNhapKhoVatTu.RangeDuyet.startDate = new Date(this.duyetStartDate.getFullYear(), this.duyetStartDate.getMonth(), this.duyetStartDate.getDate(), this.duyetStartDate.getHours(), this.duyetStartDate.getMinutes());
    }

    if (this.duyetNhapKhoVatTu.RangeDuyet.endDate) {
      this.duyetNhapKhoVatTu.RangeDuyet.endDate = new Date(this.duyetEndDate.getFullYear(), this.duyetEndDate.getMonth(), this.duyetEndDate.getDate(), this.duyetEndDate.getHours(), this.duyetEndDate.getMinutes());
    }
  }

  CheckboxChange($event, dangChoDuyet: boolean = false, tuChoiDuyet: boolean = false, daDuyet: boolean = false) {
    this.router.navigateByUrl("/nhap-xuat/vat-tu/duyet-hoan-tra-vat-tu?holdQuery=true");
    if (dangChoDuyet) {
      this.duyetNhapKhoVatTu.DangChoDuyet = $event;
    }
    else if (tuChoiDuyet) {
      this.duyetNhapKhoVatTu.TuChoiDuyet = $event;
    }
    else if (daDuyet) {
      this.duyetNhapKhoVatTu.DaDuyet = $event;
    }
    this.Timkiem();
  }

  onKey(event: any) {
    if (event.key == "Enter") {
      this.Timkiem();
    }
  }

  clearSearch() {
    if (this.duyetNhapKhoVatTu.SearchString == "" || this.duyetNhapKhoVatTu.SearchString == null) {
      this.Timkiem();
      // this.gridChild.searchString = "";
      // this.gridChild.search();
    }
  }

  //End fillter checkbox 
  onKeyNgayNhap(event: any) {
    if (event.key == "Enter") {
      this.Timkiem();
    }
  }

  changeNgayNhapRange(ev: any) {
    this.Timkiem();
  }

  onKeyNgayDuyet(event: any) {
    if (event.key == "Enter") {
      this.Timkiem();
    }
  }

  changeNgayDuyetRange(ev: any) {
    this.Timkiem();
  }

  exportExcel() {
    const self = this;
    self.showPopupLoadingData();
    if (self.authService.hasPermission(self.documentType, SecurityOperation.Process)) {
      self.apiService.postExportExcel<string>('HoanTra/ExportHoanTraVatTu',
        self.gridCha._gridQueryInfo).subscribe(
          resultData => {
            self.closePopupLoadingData();
            const dateTimeNow = new Date();
            CommonService.downLoadFile(resultData, 'application/vnd.ms-excel',
              'DuyetHoanTraVatTu' + dateTimeNow.getFullYear() + '.xlsx');
          },
          (err: any) => {
            self.notificationService.showError(err.Message);
          });
    } else {
      self.notificationService.showError(SystemMessage.UnAuthorizedMessage);
    }
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

  inYeuCauHoanTraVatTu(id) {
    let yeuCauHoanTraVatTuId = id;

    // this.dialog.open(InPhieuHoanTraVatTuComponent, {
    //     disableClose: true,
    //     width: "1200px",
    //     data: { yeuCauHoanTraVatTuId },
    // }).afterClosed().subscribe((result) => { });
    this.dialog.open(InPhieuHoanTraCompoment, {
      disableClose: true,
      width: "1200px",
      data: { Title: "PHIẾU TRẢ THUỐC/ VẬT TƯ Y TẾ", YeuCauHoanTraDuocPhamVatTuId: yeuCauHoanTraVatTuId, LaDuocPham: false, LaTuTruc: true , DuocDuyet: true},
    }).afterClosed().subscribe((result) => {
    });

  }

}
