import { Component, Input, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material';
import { ApiService } from 'src/app/core/services/api.service';
import { AuthService } from 'src/app/core/services/auth.service';
import { NotificationService } from 'src/app/core/services/notification.service';

import icBlock from '@iconify/icons-ic/twotone-delete'
import icEdit from '@iconify/icons-ic/twotone-edit'
import icMoreHoriz from '@iconify/icons-ic/twotone-more-horiz';
import icicActivated from '@iconify/icons-ic/twotone-check-box';
import icicUnActivated from '@iconify/icons-ic/twotone-check-box-outline-blank';
import icicdone from '@iconify/icons-ic/twotone-done';
import icClose from '@iconify/icons-ic/twotone-close';
import icFileExcel from '@iconify/icons-fa-solid/file-excel';
import icSearch from '@iconify/icons-ic/twotone-search';
import { GridComponent } from 'src/app/shared/component/grid/grid.component';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import { FormControl } from '@angular/forms';
import { InVatTuDaHetHan, SearchVatTuDaHetHan } from '../vat-tu-da-het-han.model';
import { SortDescriptor, GroupDescriptor } from "@progress/kendo-data-query";
import { ApiError } from 'src/app/shared/models/api-error.model';
import { LoadingComponent } from "src/app/shared/component/dialogs/loading/loading.component";
import { VatTuDaHetHanPopupComponent } from '../vat-tu-da-het-han-popup/vat-tu-da-het-han-popup.component';
import { SecurityOperation } from 'src/app/shared/enum/security-operation.enum';
import { CommonService } from 'src/app/core/utilities/common.helper';
import { SystemMessage } from 'src/app/shared/configdata/system-message';

@Component({
  selector: 'app-vat-tu-da-het-han-list',
  templateUrl: './vat-tu-da-het-han-list.component.html',
  styleUrls: ['./vat-tu-da-het-han-list.component.scss']
})
export class VatTuDaHetHanListComponent implements OnInit {
  icSearch = icSearch;
  icMoreHoriz = icMoreHoriz;
  icActivated = icicActivated;
  icicUnActivated = icicUnActivated;
  icicdone = icicdone;
  icclose = icClose;
  icBlock = icBlock;
  icEdit = icEdit;
  icFileExcel = icFileExcel;
  isDisabled: boolean = false;
  popupLoadingDataDaDuyet: any = null;
  validationErrors: any = null;
  gridColumns: any[] = [];
  documentType: DocumentType;
  searchCtrl = new FormControl();
  searchQuery: SearchVatTuDaHetHan = new SearchVatTuDaHetHan();
  inVatTuDaHetHan: InVatTuDaHetHan = new InVatTuDaHetHan();
  // @Input() searchPlaceHolder: string = "Tìm kiếm theo tên vật tư...";
  @Input() bodyComponent: any;

  @ViewChild(GridComponent, { static: true }) gridChild: GridComponent;
  @ViewChild('tinhTrangTemplate', { static: true }) tinhTrangTemplate: TemplateRef<any>;
  @ViewChild('ngayHetHanTemplate', { static: true }) ngayHetHanTemplate: TemplateRef<any>;
  @ViewChild('SLTemplate', { static: true }) SLTemplate: TemplateRef<any>;
  @ViewChild('donGiaNhapTemplate', { static: true }) donGiaNhapTemplate: TemplateRef<any>;
  @ViewChild('thanhTienTemplate', { static: true }) thanhTienTemplate: TemplateRef<any>;
  @Input() sort: SortDescriptor[] = [
    {
      field: "NgayHetHan",
      dir: "desc",
    },
  ];

  constructor(
    private notificationService: NotificationService,
    private authService: AuthService,
    private dialog: MatDialog,
    private apiService: ApiService,
  ) { }

  ngOnInit() {
    this.documentType = DocumentType.VatTuDaHetHan;
    this.gridColumns = [
      { Field: "TenKho", Title: "Kho", Width: 200, Sortable: true },
      { Field: "MaVatTu", Title: "Mã vật tư", Width: 200, Sortable: true },
      { Field: "TenVatTu", Title: "vật Tư", MinWidth: 200, Sortable: true },
      { Field: "DonViTinh", Title: "Đơn Vị Tính", Width: 200, Sortable: true },
      { Field: "SoLo", Title: "Sô lô", Width: 200, Sortable: true },
      { Field: "ViTri", Title: "Vị Trí", Width: 200, Sortable: true },
      { Field: "DonGiaNhap", Title: "Đơn giá nhập", Width: 200, Sortable: true,Template: this.donGiaNhapTemplate },
      { Field: "SoLuongTon", Title: "Số lượng tồn", Width: 200, Sortable: true, Template: this.SLTemplate },
      { Field: "ThanhTien", Title: "Thành tiền", Width: 200, Sortable: true ,Template: this.thanhTienTemplate},
      { Field: "NgayHetHan", Title: "Ngày Hết Hạn", Width: 200, Sortable: true, Template: this.ngayHetHanTemplate },
    ];
  }


  timKiem() {
    let KhoId = null;
    let SearchQueryString = null;

    if (this.searchQuery.KhoId != null) {
      KhoId = this.searchQuery.KhoId;
    }

    if (this.searchQuery.SearchString != null) {
      SearchQueryString = "\"" + this.searchQuery.SearchString + "\"";
    }

    let queryString = "{\"KhoId\":" + KhoId + ",\"SearchString\":" + SearchQueryString + "}";
    this.gridChild._additionalSearchString = queryString;
    this.gridChild.search();
  }

  searchChange() {
    if (this.searchQuery.SearchString == undefined || this.searchQuery.SearchString == null || this.searchQuery.SearchString == "") {
      this.searchQuery.SearchString = undefined;
      this.timKiem();
    }
  }

  chonKhoVatTu(khoVatTuId: any) {
    if (khoVatTuId != undefined && khoVatTuId != null) {
      this.searchQuery.SearchString = undefined;
      this.searchQuery.KhoId = khoVatTuId;
      this.timKiem();
    }
    else {
      this.searchQuery.KhoId = 0;
      this.timKiem();
    }
  }

  onKey(event: any) {
    if (event.key == "Enter") {
      this.timKiem();
    }
  }

  loadingPage() {
    this.popupLoadingDataDaDuyet = this.dialog.open(LoadingComponent, {
      disableClose: true,
      width: "200px",
      height: "90px",
      data: { Title: "Đang tải dữ liệu..." },
    });
  }


  closePopupLoading() {
    if (this.popupLoadingDataDaDuyet != undefined && this.popupLoadingDataDaDuyet != null) {
      this.popupLoadingDataDaDuyet.close();
    }
  }

  inBaoCaoVatTuDaHetHan() {
    var self = this;
    self.loadingPage();
    let KhoId = null;
    let SearchQueryString = null;
    if (self.searchQuery.KhoId != null) {
      KhoId = self.searchQuery.KhoId;
    }
    if (self.searchQuery.SearchString != null) {
      SearchQueryString = "\"" + self.searchQuery.SearchString + "\"";
    }
    self.inVatTuDaHetHan.SearchString = "{\"KhoId\":" + KhoId + ",\"SearchString\":" + SearchQueryString + "}";
    self.inVatTuDaHetHan.Header = true;
    self.apiService.post<any>("TonKho/XemVatTuDaHetHan", self.inVatTuDaHetHan).subscribe(
      (result) => {
        if (result != undefined && result != null) {
          self.closePopupLoading();
          self.dialog.open(VatTuDaHetHanPopupComponent, {
            disableClose: false,
            width: '1200px',
            data: result,
          }).afterClosed().subscribe(() => {
          });
        }
      },
      (err: ApiError) => {
        self.validationErrors = err.ValidationErrors;
        if (err.Message != "Validation Failed") {
          self.notificationService.showError(err.Message);
        }
        self.closePopupLoading();
      });
  }

  getSharedPrintForm() {
    //hard code get => post
    var self = this;
    self.loadingPage();
    let KhoId = null;
    let SearchQueryString = null;
    if (self.searchQuery.KhoId != null) {
      KhoId = self.searchQuery.KhoId;
    }
    if (self.searchQuery.SearchString != null) {
      SearchQueryString = "\"" + self.searchQuery.SearchString + "\"";
    }
    self.inVatTuDaHetHan.SearchString = "{\"KhoId\":" + KhoId + ",\"SearchString\":" + SearchQueryString + "}";
    self.inVatTuDaHetHan.Header = false;
    return new Promise(resolve => {
      self.closePopupLoading();
      this.apiService.post<any>("TonKho/XemVatTuDaHetHan", self.inVatTuDaHetHan).subscribe(resultData => {
        resolve(resultData);
      });
    });
  }

  exportExcel() {
    this.dialog.open(LoadingComponent, {
      disableClose: true,
      width: '200px',
      height: '90px',
      data: { Title: 'Đang xuất excel...' }
    });

    if (this.authService.hasPermission(this.documentType, SecurityOperation.Process)) {
      this.apiService.postExportExcel<string>("TonKho/ExportVatTuDaHetHan", this.gridChild._gridQueryInfo).subscribe(res => {
        let dateTimeNow = new Date();
        CommonService.downLoadFile(res, "application/vnd.ms-excel", "VatTuDaHetHan" + dateTimeNow.getFullYear() + ".xlsx");
        this.dialog.closeAll();
      }, err => {
        this.notificationService.showError(err.Message);
        this.dialog.closeAll();
      })
    } else {
      this.notificationService.showError(SystemMessage.UnAuthorizedMessage);
    }
  }

  onDataBoundGrid(event: any) {
    if (event != undefined && event != null && event.Data.length > 0) {
      this.isDisabled = true;
    } else {
      this.isDisabled = false;
    }
  }

}
