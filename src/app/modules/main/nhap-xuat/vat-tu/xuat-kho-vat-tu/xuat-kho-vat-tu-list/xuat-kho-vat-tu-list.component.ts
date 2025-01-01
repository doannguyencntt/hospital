import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { GroupDescriptor, SortDescriptor } from '@progress/kendo-data-query';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';

import icDelete from '@iconify/icons-ic/twotone-delete';
import icEdit from '@iconify/icons-ic/twotone-edit';
import icMoreHoriz from '@iconify/icons-ic/twotone-more-horiz';

import icSearch from '@iconify/icons-ic/twotone-search';
import icFileExcel from '@iconify/icons-fa-solid/file-excel';
import icAdd from '@iconify/icons-ic/twotone-add';
import icFilterList from '@iconify/icons-ic/twotone-filter-list';
import { FormControl } from '@angular/forms';
import { GridComponent } from 'src/app/shared/component/grid/grid.component';
import { ConfirmComponent } from 'src/app/shared/component/dialogs/confirm/confirm.component';
import { XuatKhoVatTuSearch } from '../xuat-kho-vat-tu.model';
import { ApiService } from 'src/app/core/services/api.service';

import { MatDialog } from '@angular/material';
import { ActivatedRoute, Router } from '@angular/router';
import { NotificationService } from 'src/app/core/services/notification.service';
import { AuthService } from 'src/app/core/services/auth.service';
import { SystemMessage, XuatKhoMessage } from 'src/app/shared/configdata/system-message';
import { SecurityOperation } from 'src/app/shared/enum/security-operation.enum';
import { CommonService } from 'src/app/core/utilities/common.helper';
import { LocalStorageHelper } from 'src/app/core/utilities/local-storage.helper';
import { Location } from '@angular/common';
import { ApiError } from 'src/app/shared/models/api-error.model';
import icPrint from "@iconify/icons-ic/twotone-print";
import { XuatKhoInPhieuPopupComponent } from '../../xuat-kho-vat-tu/xuat-kho-in-phieu-popup/xuat-kho-in-phieu-popup.component';
import { LoadingComponent } from 'src/app/shared/component/dialogs/loading/loading.component';

@Component({
  selector: 'app-xuat-kho-vat-tu-list',
  templateUrl: './xuat-kho-vat-tu-list.component.html',
  styleUrls: ['./xuat-kho-vat-tu-list.component.scss']
})
export class XuatKhoVatTuListComponent implements OnInit {

  baseRoute: string = "/nhap-xuat/vat-tu/xuat-kho";

  sort: SortDescriptor[] = [{
    field: 'NgayXuat',
    dir: 'desc'
  }];

  sortChild: SortDescriptor[] = [{
    field: 'VatTu',
    dir: 'asc'
  }];

  icDelete = icDelete;
  icEdit = icEdit;
  icMoreHoriz = icMoreHoriz;

  icSearch = icSearch;
  icFileExcel = icFileExcel;
  icAdd = icAdd;
  icFilterList = icFilterList;
  icPrint = icPrint;
  searchCtrl = new FormControl;

  documentType: DocumentType;
  gridColumns: any[] = [];
  gridChildColumns: any[] = [];

  urlGetDataGridChild: string = "XuatKhoVatTu/GetDataForGridChildAsync";
  urlGetTotalPageGridChild: string = "XuatKhoVatTu/GetTotalPageForGridChildAsync";

  @ViewChild('trangThaiTemplate', { static: true }) trangThaiTemplate: TemplateRef<any>;
  @ViewChild('parentGrid', { static: true }) gridChild: GridComponent;
  @ViewChild(ConfirmComponent, { static: false }) confirm: ConfirmComponent;

  //
  @ViewChild('khoVatTuXuatTemplate', { static: true }) khoVatTuXuatTemplate: TemplateRef<any>;

  themDuocPham: any;
  holdQuery: any = null;
  additionalSearchString: string = null;

  //update xuat kho 14/9/2020
  xuatKhoSearch: XuatKhoVatTuSearch = new XuatKhoVatTuSearch();
  groups: GroupDescriptor[] = [{ field: 'LoaiSuDung' }];
  @ViewChild('tenNhomGroupHeaderTemplate', { static: true }) tenNhomGroupHeaderTemplate: TemplateRef<any>;
  //
  @ViewChild('soChungTuTemplate', { static: true }) soChungTuTemplate: TemplateRef<any>;

  constructor(private apiService: ApiService, private authService: AuthService, private dialog: MatDialog,
    private location: Location, private route: ActivatedRoute,
    private router: Router, private notificationService: NotificationService) { }

  ngOnInit() {
    this.documentType = DocumentType.XuatKhoVatTu;
    this.backWithSearch();
    this.gridColumns = [
      { Field: "SoPhieu", Title: "Số phiếu", Width: 90, Sortable: true, Template: this.soChungTuTemplate },
      { Field: "KhoXuat", Title: "Nơi xuất", Width: 200, Sortable: true },
      { Field: "NguoiXuat", Title: "Người xuất", Width: 150, Sortable: true },
      { Field: "NgayXuatDisplay", Title: "Ngày xuất", Width: 150, Sortable: true },
      { Field: "KhoNhap", Title: "Nơi nhập", Width: 200, Sortable: true },
      { Field: "NguoiNhan", Title: "Người nhận", Width: 150, Sortable: true },
      { Field: "LyDoXuatKho", Title: "Lý do xuất", MinWidth: 165, Sortable: true },
      { Field: "Action", Title: "", Width: 100, Sortable: false, HideFilter: true, Template: this.trangThaiTemplate }
    ];

    this.gridChildColumns = [
      { Field: "LoaiSuDung", Title: "Loại sử dụng", Sortable: false, Hidden: true, HideFilter: true, TemplateGroupHeader: this.tenNhomGroupHeaderTemplate },
      { Field: "VatTu", Title: "Vật tư", MinWidth: 150, Sortable: false },
      { Field: "DVT", Title: "ĐVT", Width: 150, Sortable: false },
      { Field: "Loai", Title: "Loại", Width: 150, Sortable: false },
      { Field: "SoLuongXuat", Title: "SL Xuất", Width: 150, Sortable: false },
      { Field: "SoPhieu", Title: "Số phiếu", Width: 150, Sortable: false },
    ];

  }

  backWithSearch() {
    let hasLocalSearchString = false;
    if (this.route.snapshot.queryParams.holdQuery != undefined) {
      let holdQuery = this.route.snapshot.queryParams.holdQuery;
      if (holdQuery != null && holdQuery) {
        this.additionalSearchString = LocalStorageHelper.getItem<string>("additionalSearchStringXuatKhoVT");
        if (this.additionalSearchString != null) {
          this.xuatKhoSearch = JSON.parse(this.additionalSearchString);

          if (this.xuatKhoSearch.RangeXuat.TuNgay != null
            && this.xuatKhoSearch.RangeXuat.TuNgay != 'null' && this.xuatKhoSearch.RangeXuat.TuNgay != '') {
            this.xuatKhoSearch.RangeXuat.startDate = new Date(this.xuatKhoSearch.RangeXuat.startDate);
          }
          else {
            this.xuatKhoSearch.RangeXuat.startDate = null;
          }
          if (this.xuatKhoSearch.RangeXuat.DenNgay != null
            && this.xuatKhoSearch.RangeXuat.DenNgay != 'null' && this.xuatKhoSearch.RangeXuat.DenNgay != '') {
            this.xuatKhoSearch.RangeXuat.endDate = new Date(this.xuatKhoSearch.RangeXuat.endDate);
          } else {
            this.xuatKhoSearch.RangeXuat.endDate = null;
          }

          this.additionalSearchString = this.additionalSearchString;
          this.gridChild.additionalSearchString = this.additionalSearchString;
          hasLocalSearchString = true;

        }
      }
    }
    else {
      var now = new Date();
      var tuNgay = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 0, 0, 0);
      var denNgay = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 23, 59, 59);
      this.xuatKhoSearch.RangeXuat.startDate = tuNgay;
      if (this.xuatKhoSearch.RangeXuat.startDate != null) {
        this.xuatKhoSearch.RangeXuat.TuNgay = CommonService.formatDateTime(tuNgay, "dd/mm/yyyy");
      }
      this.xuatKhoSearch.RangeXuat.endDate = denNgay;
      if (this.xuatKhoSearch.RangeXuat.endDate != null) {
        this.xuatKhoSearch.RangeXuat.DenNgay = CommonService.formatDateTime(denNgay, "dd/mm/yyyy");
      }
      this.additionalSearchString = JSON.stringify(this.xuatKhoSearch);
    }
    if (!hasLocalSearchString) {
      LocalStorageHelper.removeItem("additionalSearchStringXuatKhoVT");
    }
  }

  detail(id: number) {
    if (this.authService.hasPermission(this.documentType, SecurityOperation.View)) {
      this.router.navigate(["/nhap-xuat/vat-tu/xuat-kho" + "/xem-chi-tiet/" + id]);
    }
    else {
      this.notificationService.showError(SystemMessage.UnAuthorizedMessage);
    }
  }

  xemChiTiet(id: number, dataItem: any) {
    if (this.authService.hasPermission(this.documentType, SecurityOperation.View)) {
      this.router.navigate(["/nhap-xuat/vat-tu/xuat-kho" + "/xem-chi-tiet/" + id]);
    }
    else {
      this.notificationService.showError(SystemMessage.UnAuthorizedMessage);
    }
  }

  exportExcel() {
    this.dialog.open(LoadingComponent, {
      disableClose: true,
      width: '200px',
      height: '90px',
      data: { Title: 'Đang xuất excel...' }
    });
    if (this.authService.hasPermission(this.documentType, SecurityOperation.Process)) {
      this.apiService.postExportExcel<string>("XuatKhoVatTu/ExportData", this.gridChild._gridQueryInfo).subscribe(
        resultData => {
          let dateTimeNow = new Date();
          CommonService.downLoadFile(resultData, "application/vnd.ms-excel", "XuatKhoVatTu" + dateTimeNow.getFullYear() + ".xlsx");
          this.dialog.closeAll();
        }, err => {
          this.notificationService.showError(err.Message);
          this.dialog.closeAll();
        });
    }
    else {
      this.notificationService.showError(SystemMessage.UnAuthorizedMessage);
    }
  }

  clearSearch(event: any) {
    var self = this;
    if (event != undefined && (event == null || event == "")) {
      self.gridChild.searchString = null;
      self.Timkiem();
    }
  }

  Timkiem() {
    this.location.replaceState(this.baseRoute + '?holdQuery=true');

    if (this.xuatKhoSearch.RangeXuat != null && this.xuatKhoSearch.RangeXuat.startDate != null) {
      this.xuatKhoSearch.RangeXuat.TuNgay = CommonService.formatDateTime(this.xuatKhoSearch.RangeXuat.startDate, "dd/mm/yyyy");
    }
    else {
      this.xuatKhoSearch.RangeXuat.TuNgay = null;
    }
    if (this.xuatKhoSearch.RangeXuat != null && this.xuatKhoSearch.RangeXuat.endDate != null) {
      this.xuatKhoSearch.RangeXuat.DenNgay = CommonService.formatDateTime(this.xuatKhoSearch.RangeXuat.endDate, "dd/mm/yyyy");
    }
    else {
      this.xuatKhoSearch.RangeXuat.DenNgay = null;
    }
    var queryString = JSON.stringify(this.xuatKhoSearch);
    this.gridChild._additionalSearchString = queryString;
    LocalStorageHelper.setItem("additionalSearchStringXuatKhoVT", queryString);
    this.gridChild.search();
  }

  changeNgayXuatRange($event) {
    this.Timkiem();
  }
  onKeyNgayXuat($event) {
    if ($event.keyCode == 13) {
      this.Timkiem();
    }
  }
  blur($event) {
    this.Timkiem();
  }
  onKey(event: any) {
    if (event.keyCode == 13) {
      this.Timkiem();
    }
  }

  themMoiXuatKho() {
    if (this.authService.hasPermission(this.documentType, SecurityOperation.Add)) {
      this.router.navigate(["/nhap-xuat/vat-tu/xuat-kho/them"]);
    }
    else {
      this.notificationService.showError(SystemMessage.UnAuthorizedMessage);
    }
  }

  InPhieuXuat(xuatKhoVatTuId) {
    let hostingName = window.location.protocol + "//" + window.location.host;
    this.apiService.post("XuatKhoVatTu/InPhieuXuat?xuatKhoVatTuId=" + xuatKhoVatTuId + "&hostingName=" + hostingName)
      .subscribe((resultData) => {
        if (resultData != undefined && resultData != null) {
          this.dialog.open(XuatKhoInPhieuPopupComponent, {
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
