import { GridDataResult } from '@progress/kendo-angular-grid';
import { GroupDescriptor, SortDescriptor } from '@progress/kendo-data-query';
import { WindowComponent } from '@progress/kendo-angular-dialog';
import { GridComponent } from 'src/app/shared/component/grid/grid.component';
import { Component, OnInit, TemplateRef, ViewChild, Input, ChangeDetectorRef } from '@angular/core';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import { ConfirmComponent } from 'src/app/shared/component/dialogs/confirm/confirm.component';
import { ApiService } from 'src/app/core/services/api.service';
import { PageChangeEvent } from '@progress/kendo-angular-dropdowns/dist/es2015/common/page-change-event';
import { CommonService } from 'src/app/core/utilities/common.helper';
declare var jQuery: any;
import { MatDialog } from '@angular/material';

import { LoadingComponent } from "src/app/shared/component/dialogs/loading/loading.component";
import { AuthService } from 'src/app/core/services/auth.service';
import { SecurityOperation } from 'src/app/shared/enum/security-operation.enum';
import { NotificationService } from 'src/app/core/services/notification.service';
import { SystemMessage } from 'src/app/shared/configdata/system-message';
import icFilterList from '@iconify/icons-ic/twotone-filter-list';
import { process } from '@progress/kendo-data-query';
import { BaoCaoTonKhoSearch, InBaoCaoTonKho } from '../bao-cao-ton-kho-vat-tu-y-te.model';
@Component({
  selector: 'app-bao-cao-ton-kho-vat-tu-y-te-list',
  templateUrl: './bao-cao-ton-kho-vat-tu-y-te-list.component.html',
  styleUrls: ['./bao-cao-ton-kho-vat-tu-y-te-list.component.scss']
})

export class BaoCaoTonKhoVatTuYteListComponent implements OnInit {

  baoCaoSearch: BaoCaoTonKhoSearch = new BaoCaoTonKhoSearch();
  inBaoCaoTonKho: InBaoCaoTonKho = new InBaoCaoTonKho();

  public gridView: GridDataResult;
  public pageSize = 10;
  public skip = 0;
  take: number;

  urlGetDataGridChild = "";
  urlGetPageDataGridChild: string = "";
  additionalSearchString = "";
  minDateDenNgay: Date = null;
  minDateTuNgay: Date = null;

  sort: SortDescriptor[] = [{
    field: 'Id',
    dir: 'desc'
  }];

  public data: any[]
  height: number;
  documentType: DocumentType;
  dataSource: any = {
    data: [],
    total: 0
  };
  icFilterList = icFilterList;
  _isLoading: boolean = false;
  _isLoadingTotalPage: boolean = false;
  _showDefaultPagerTemplate: boolean;
  showDefaultPagerTemplate: boolean = true;
  ishowView: boolean = false;
  IsData: boolean = false;
  gridColumns: any[];
  gridColumnsChild: any[];
  dataToSumThanhTien: any;
  dataToSumAllThanhTien: any;
  @Input() heightToolbar: number = 140;

  @ViewChild(GridComponent, { static: true }) gridChild: GridComponent;
  @ViewChild('baoCaoGrid', { static: true }) baoCaoGrid: any;
  @ViewChild('thanhTienTonDauKyTemplate', { static: true }) thanhTienTonDauKyTemplate: TemplateRef<any>;
  @ViewChild('thanhTienNhapTrongKyTemplate', { static: true }) thanhTienNhapTrongKyTemplate: TemplateRef<any>;
  @ViewChild('thanhTienXuatTrongKyTemplate', { static: true }) thanhTienXuatTrongKyTemplate: TemplateRef<any>;
  @ViewChild('thanhTienTonCuoiKyTemplate', { static: true }) thanhTienTonCuoiKyTemplate: TemplateRef<any>;
  @ViewChild('donGiaTemplate', { static: true }) donGiaTemplate: TemplateRef<any>;
  @ViewChild('sttTemplate', { static: true }) sttTemplate: TemplateRef<any>;
  @ViewChild('nhomGroupHeaderTemplate', { static: true }) nhomGroupHeaderTemplate: TemplateRef<any>;

  // footer
  @ViewChild('donGiaFooterTemplate', { static: true }) donGiaFooterTemplate: TemplateRef<any>;
  @ViewChild('thanhTienFooterTemplate', { static: true }) thanhTienFooterTemplate: TemplateRef<any>;
  @ViewChild('thanhTienTonDauKyFooterTemplate', { static: true }) thanhTienTonDauKyFooterTemplate: TemplateRef<any>;
  @ViewChild('thanhTienNhapTrongKyFooterTemplate', { static: true }) thanhTienNhapTrongKyFooterTemplate: TemplateRef<any>;
  @ViewChild('thanhTienXuatTrongKyFooterTemplate', { static: true }) thanhTienXuatTrongKyFooterTemplate: TemplateRef<any>;
  @ViewChild('thanhTienTonCuoiKyFooterTemplate', { static: true }) thanhTienTonCuoiKyFooterTemplate: TemplateRef<any>;
  //end

  //group footer
  @ViewChild('donGiaGroupFooterTemplate', { static: true }) donGiaGroupFooterTemplate: TemplateRef<any>;
  @ViewChild('thanhTienTonDauKyGroupFooterTemplate', { static: true }) thanhTienTonDauKyGroupFooterTemplate: TemplateRef<any>;
  @ViewChild('thanhTienNhapTrongKyGroupFooterTemplate', { static: true }) thanhTienNhapTrongKyGroupFooterTemplate: TemplateRef<any>;
  @ViewChild('thanhTienXuatTrongKyGroupFooterTemplate', { static: true }) thanhTienXuatTrongKyGroupFooterTemplate: TemplateRef<any>;
  @ViewChild('thanhTienTonCuoiKyGroupFooterTemplate', { static: true }) thanhTienTonCuoiKyGroupFooterTemplate: TemplateRef<any>;
  //end



  public pageChange(event: PageChangeEvent): void {
    this.skip = event.skip;
    // this.XemBaoCao();

    if (this.dataSource.data.length == 0) {
      this.XemBaoCao();
    } else {
      var takeTo = +this.skip + +this.pageSize;
      let gridData = this.dataSource.data.slice(this.skip, takeTo);
      this.gridView = process(gridData, { group: this.groups });
      this.gridView.total = this.dataSource.total;
    }
  }
  public groups: GroupDescriptor[] = [{
    field: 'Loai',
  }, {
    field: 'Nhom',
  }];

  constructor(
    private apiService: ApiService,
    private dialog: MatDialog,
    private authService: AuthService,
    private notificationService: NotificationService,
    private cd: ChangeDetectorRef
  ) { }

  ngOnInit() {

    this.urlGetDataGridChild = "BaoCao/GetDataBaoCaoTonKhoForGridAsyncChild";
    this.urlGetPageDataGridChild = "BaoCao/GetTotalBaoCaoTonKhoForGridAsyncChild";

    this.documentType = DocumentType.BaoCaoTonKhoVatTuYTe;
    this._showDefaultPagerTemplate = this.showDefaultPagerTemplate;
    this.skip = 0;
    this.take = (this.pageSize * this.skip) + this.pageSize;

    if (window.location.protocol == "http:") {
      this.inBaoCaoTonKho.HostingName = "http://" + window.location.host;
    } else {
      this.inBaoCaoTonKho.HostingName = "https://" + window.location.host;
    }

    this.gridColumns = [
      { Field: "STT", Title: "STT", Width: 100, Template: this.sttTemplate }, //0 
      { Field: "Ma", Title: "Mã VTYT", Width: 100 }, //1
      { Field: "Ten", Title: "Tên VTYT (Hãng SX, Nước SX)", Width: 200 },//2
      { Field: "DVT", Title: "ĐVT", Width: 100 },//3
      { Field: "TonDau", Title: "Tồn đầu", Width: 120 },//7
      { Field: "Nhap", Title: "Nhập", Width: 120 },//8
      { Field: "TongSo", Title: "Tổng số", Width: 120 },//9
      { Field: "Xuat", Title: "Xuất", Width: 120 },//10
      { Field: "TonCuoi", Title: "Tồn cuối", Width: 120 },//11
      { Field: "Nhom", Title: "Nhóm", Width: 100, Sortable: true, Hidden: true, TemplateGroupHeader: this.nhomGroupHeaderTemplate },//12
      { Field: "Loai", Title: "Loại", Width: 100, Sortable: true, Hidden: true, TemplateGroupHeader: this.nhomGroupHeaderTemplate },//13
    ];

    this.minDateTuNgay = new Date();
    this.minDateTuNgay.setHours(0, 0, 0, 0);

    if (this.baoCaoSearch.TuNgayFormat == null) {
      this.baoCaoSearch.TuNgayFormat = this.minDateTuNgay;
    }
    if (this.baoCaoSearch.DenNgayFormat == null) {
      this.baoCaoSearch.DenNgayFormat = new Date();
      this.baoCaoSearch.DenNgayFormat.setHours(23, 59, 59);
    }


  }

  getFieldColumn(index: number) {
    return this.gridColumns[index].Field;
  }

  getTitleColumn(index: number) {
    return this.gridColumns[index].Title;
  }

  getWidthColumn(index: number) {
    return this.gridColumns[index].Width != null ? this.gridColumns[index].Width : this.getMinWidthColumn(this.gridColumns[index].MinWidth != null ? this.gridColumns[index].MinWidth : 100);
  }

  getMinWidthColumn(minWidth: number) {
    var widthParent = jQuery("#baoCaoGrid").parent().width();
    var widthScreen = (widthParent != undefined ? Math.round(widthParent) : jQuery(window).width()) - 120;
    var totalWidth = this.gridColumns.filter((item) => {
      return item.Width != null;
    }).reduce((sum, item) => sum + item.Width, 0);
    if ((widthScreen < totalWidth + minWidth + 100)) {
      return minWidth;
    }
    else {
      return widthScreen - (totalWidth + minWidth + 100) > minWidth ? widthScreen - (totalWidth + minWidth + 100) : minWidth;
    }
  }

  detailExpand(event: any) {
    let tuNgay = CommonService.formatDateTime(this.baoCaoSearch.TuNgayFormat, "dd/mm/yyyy");
    let denNgay = CommonService.formatDateTime(this.baoCaoSearch.DenNgayFormat, "dd/mm/yyyy");
    this.additionalSearchString = this.baoCaoSearch.KhoId + ";" + event.dataItem.NhomDuocPhamVatTuId + ";" + tuNgay + ";" + denNgay;

  }

  onDataBoundChild(event: any) {
    console.log(event);
    this.dataToSumThanhTien = event.Data;
  }

  ngAfterContentInit() {
    const self = this;
    self.height = jQuery(window).height() - self.heightToolbar;
    if (self.height < 400) {
      self.height = 400;
    }
    jQuery(window).resize(function () {
      self.height = jQuery(window).height() - self.heightToolbar;
      if (self.height < 400) {
        self.height = 400;
      }
    });
    this.cd.detectChanges();
  }

  exportExcel() {
    if (this.baoCaoSearch.TuNgayFormat == null || this.baoCaoSearch.DenNgayFormat == null) {
      this.notificationService.showError("Từ ngày và đến ngày yêu cầu nhập");
      return;
    }
    if (!this.baoCaoSearch.KhoId) {
      this.notificationService.showError("Kho yêu cầu nhập");
      return;
    }
    if (this.authService.hasPermission(this.documentType, SecurityOperation.Process)) {
      this.dialog.open(LoadingComponent, {
        disableClose: true,
        width: '200px',
        height: '90px',
        data: { Title: 'Đang xuất excel...' }
      });
      let tuNgay = CommonService.formatDateTime(this.baoCaoSearch.TuNgayFormat, "dd/mm/yyyy");
      let denNgay = CommonService.formatDateTime(this.baoCaoSearch.DenNgayFormat, "dd/mm/yyyy");
      let khoId = 0;
      if (this.baoCaoSearch.KhoId != undefined && this.baoCaoSearch.KhoId != null) {
        khoId = this.baoCaoSearch.KhoId;
      }
      this.baoCaoSearch.FromDate = this.baoCaoSearch.TuNgayFormat;
      this.baoCaoSearch.ToDate = this.baoCaoSearch.DenNgayFormat;
      this.baoCaoSearch.AdditionalSearchString = khoId + ";0;" + tuNgay + ";" + denNgay + ";" + this.inBaoCaoTonKho.HostingName;
      this.apiService.postExportExcel<any>("BaoCaoVatTu/ExportBaoCaoTonKhoVatTu", this.baoCaoSearch)
        .subscribe(res => {
          let dateTimeNow = new Date();
          CommonService.downLoadFile(res, "application/vnd.ms-excel", "BaoCaoTonKhoVatTu" + dateTimeNow.getFullYear() + ".xlsx");
          this.dialog.closeAll();
        }
          , err => {
            this.notificationService.showError(err.Message);
            this.dialog.closeAll();
          });
    } else {
      this.notificationService.showError(SystemMessage.UnAuthorizedMessage);
    }
  }

  reFresh() {
    this.skip = 0;
    this.XemBaoCao()
  }

  XemBaoCao() {
    if (this.baoCaoSearch.TuNgayFormat == null || this.baoCaoSearch.DenNgayFormat == null) {
      this.notificationService.showError("Từ ngày và đến ngày yêu cầu nhập");
      return;
    }
    if (!this.baoCaoSearch.KhoId) {
      this.notificationService.showError("Kho yêu cầu nhập");
      return;
    }
    this.baoCaoSearch.FromDate = this.baoCaoSearch.TuNgayFormat;
    this.baoCaoSearch.ToDate = this.baoCaoSearch.DenNgayFormat;
    this._isLoading = true;
    this._isLoadingTotalPage = true;
    this.apiService.post<any>("BaoCaoVatTu/GetDataBaoCaoTonKhoVatTuForGridAsync", this.baoCaoSearch).subscribe(resultData => {
      if (resultData !== undefined && resultData != null) {
        this.dataSource = {
          data: resultData.Data,
          total: resultData.TotalRowCount
        };
        var takeTo = +this.skip + +this.pageSize;
        let gridData = this.dataSource.data.slice(this.skip, takeTo);

        this.gridView = process(gridData, { group: this.groups });
        this.gridView.total = this.dataSource.total;

        this._isLoading = false;
        this._isLoadingTotalPage = false;
      }
    });
  }

  changeValueStart() {
    this.minDateDenNgay = new Date();

    if (this.baoCaoSearch.TuNgayFormat != null && this.baoCaoSearch.DenNgayFormat != null
      && this.baoCaoSearch.DenNgayFormat > this.baoCaoSearch.TuNgayFormat) {
      this.baoCaoSearch.DenNgayFormat = this.minDateDenNgay;
    }
  }
}
