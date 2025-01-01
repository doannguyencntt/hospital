import { GridDataResult } from '@progress/kendo-angular-grid';
import { GroupDescriptor, SortDescriptor } from '@progress/kendo-data-query';
import { BaoCaoXuatNhapTonSearch, InBaoCaoXuatNhapTon } from '../bao-cao-xuat-nhap-ton.model';
import { GridComponent } from 'src/app/shared/component/grid/grid.component';
import { Component, OnInit, TemplateRef, ViewChild, Input, ChangeDetectorRef } from '@angular/core';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import { ApiService } from 'src/app/core/services/api.service';
import { PageChangeEvent } from '@progress/kendo-angular-dropdowns/dist/es2015/common/page-change-event';
import { CommonService } from 'src/app/core/utilities/common.helper';
declare var jQuery: any;
import { MatDialog } from '@angular/material';
import { BaoCaoXuatNhapTonPopupComponent } from '../bao-cao-xuat-nhap-ton-popup/bao-cao-xuat-nhap-ton-popup.component';
import { LoadingComponent } from "src/app/shared/component/dialogs/loading/loading.component";
import { AuthService } from 'src/app/core/services/auth.service';
import { SecurityOperation } from 'src/app/shared/enum/security-operation.enum';
import { NotificationService } from 'src/app/core/services/notification.service';
import { SystemMessage } from 'src/app/shared/configdata/system-message';
import icFilterList from '@iconify/icons-ic/twotone-filter-list';
import { process } from '@progress/kendo-data-query';
@Component({
  selector: 'app-bao-cao-xuat-nhap-ton-list',
  templateUrl: './bao-cao-xuat-nhap-ton-list.component.html',
  styleUrls: ['./bao-cao-xuat-nhap-ton-list.component.scss']
})
export class BaoCaoXuatNhapTonListComponent implements OnInit {
  baoCaoSearch: BaoCaoXuatNhapTonSearch = new BaoCaoXuatNhapTonSearch();
  inBaoCaoXuatNhapTon: InBaoCaoXuatNhapTon = new InBaoCaoXuatNhapTon();
  public gridView: GridDataResult;
  public pageSize = 50;
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
  documentType: DocumentType;
  dataSource: any = {
    data: [],
    total: 0
  };
  _isLoading: boolean = false;
  _isLoadingTotalPage: boolean = false;
  _showDefaultPagerTemplate: boolean;
  showDefaultPagerTemplate: boolean = true;
  icFilterList = icFilterList;
  ishowView: boolean = false;
  IsData: boolean = false;
  gridColumns: any[];
  gridColumnsChild: any[];
  dataToSumThanhTien: any;
  dataToSumAllThanhTien: any;
  heightToolbar: number = 140;
  height: number;
  masterName:string;

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

    if (this.dataSource.data.length == 0 ) {
      this.XemBaoCao();
    } else {
      var takeTo = +this.skip + +this.pageSize;
      let gridData = this.dataSource.data.slice(this.skip, takeTo);
      this.gridView = process(gridData, { group: this.groups });
      this.gridView.total= this.dataSource.total;
      
      // this.gridView.data = this.gridView.data.slice(this.skip, takeTo);
    }
  }
  public groups: GroupDescriptor[] = [{
    field: 'Loai',
    aggregates: [
      { field: 'ThanhTienTonDauKy', aggregate: 'sum' },
      { field: 'ThanhTienNhapTrongKy', aggregate: 'sum' },
      { field: 'ThanhTienXuatTrongKy', aggregate: 'sum' },
      { field: 'ThanhTienTonCuoiKy', aggregate: 'sum' },
    ]
  },{
    field: 'Nhom',
    aggregates: [
      { field: 'ThanhTienTonDauKy', aggregate: 'sum' },
      { field: 'ThanhTienNhapTrongKy', aggregate: 'sum' },
      { field: 'ThanhTienXuatTrongKy', aggregate: 'sum' },
      { field: 'ThanhTienTonCuoiKy', aggregate: 'sum' },
    ]
  }];

  constructor(
    private apiService: ApiService,
    private dialog: MatDialog,
    private authService: AuthService,
    private notificationService: NotificationService,
    private cd: ChangeDetectorRef
  ) { }

  ngOnInit() {
    this.urlGetDataGridChild = "BaoCao/GetDataBaoCaoXuatNhapTonForGridAsyncChild";
    this.urlGetPageDataGridChild = "BaoCao/GetTotalBaoCaoXuatNhapTonForGridAsyncChild";

    this.documentType = DocumentType.BaoCaoXuatNhapTon;
    this._showDefaultPagerTemplate = this.showDefaultPagerTemplate;
    this.skip = 0;
    this.take = (this.pageSize * this.skip) + this.pageSize;

    if (window.location.protocol == "http:") {
      this.inBaoCaoXuatNhapTon.HostingName = "http://" + window.location.host;
    } else {
      this.inBaoCaoXuatNhapTon.HostingName = "https://" + window.location.host;
    }

    this.gridColumns = [
      { Field: "STT", Title: "STT", Width: 300, Template: this.sttTemplate }, //0 
      { Field: "Ten", Title: "Tên thuốc, Vật tư, Hóa chất", Width: 200, TemplateFooter: this.donGiaFooterTemplate, TemplateGroupFooter: this.donGiaGroupFooterTemplate },//1      
      { Field: "HamLuong", Title: "Hàm lượng", Width: 120 },//2
      { Field: "SoLo", Title: "Số lô", Width: 100 },//3
      { Field: "DVT", Title: "ĐVT", Width: 100 },//4
      { Field: "TonDauKy", Title: "Tồn đầu kỳ", Width: 120 },//5
      { Field: "SLTonDauKy", Title: "Số lượng", Width: 120 },//6
      { Field: "DonGiaTonDauKy", Title: "Giá", Width: 120 },//7
      {
        Field: "ThanhTienTonDauKy", Title: "Thành tiền", Width: 150, Template: this.thanhTienTonDauKyTemplate,
        TemplateFooter: this.thanhTienTonDauKyFooterTemplate, TemplateGroupFooter: this.thanhTienTonDauKyGroupFooterTemplate
      },//8
      { Field: "NhapTrongKy", Title: "Nhập trong kỳ", Width: 120 },//9
      { Field: "SLNhapTrongKy", Title: "Số lượng", Width: 120 },//10
      { Field: "DonGiaNhapTrongKy", Title: "Giá", Width: 120 },//11
      {
        Field: "ThanhTienNhapTrongKy", Title: "Thành tiền", Width: 150, Template: this.thanhTienNhapTrongKyTemplate,
        TemplateFooter: this.thanhTienNhapTrongKyFooterTemplate, TemplateGroupFooter: this.thanhTienNhapTrongKyGroupFooterTemplate
      },//12
      { Field: "XuatTrongKy", Title: "Xuất Trong kỳ", Width: 120 },//13
      { Field: "SLXuatTrongKy", Title: "Số lượng", Width: 120 },//14
      { Field: "DonGiaXuatTrongKy", Title: "Giá", Width: 120 },//15
      {
        Field: "ThanhTienXuatTrongKy", Title: "Thành tiền", Width: 150, Template: this.thanhTienXuatTrongKyTemplate,
        TemplateFooter: this.thanhTienXuatTrongKyFooterTemplate, TemplateGroupFooter: this.thanhTienXuatTrongKyGroupFooterTemplate
      },//16
      { Field: "TonCuoiKy", Title: "Tồn cuối kỳ", Width: 120 },//17
      { Field: "SLTonCuoiKy", Title: "Số lượng", Width: 120 },//18
      { Field: "DonGiaTonCuoiKy", Title: "Giá", Width: 120, Template: this.donGiaTemplate },//19
      {
        Field: "ThanhTienTonCuoiKy", Title: "Thành tiền", Width: 150, Template: this.thanhTienTonCuoiKyTemplate,
        TemplateFooter: this.thanhTienTonCuoiKyFooterTemplate, TemplateGroupFooter: this.thanhTienTonCuoiKyGroupFooterTemplate
      },//20
      { Field: "Nhom", Title: "Nhóm", Width: 100, Sortable: true, Hidden: true, TemplateGroupHeader: this.nhomGroupHeaderTemplate },//21
      { Field: "Loai", Title: "Loại", Width: 100, Sortable: true, Hidden: true, TemplateGroupHeader: this.nhomGroupHeaderTemplate },//22
    ];

    this.minDateTuNgay = new Date();
    this.minDateTuNgay.setHours(0, 0, 0, 0);
    var firstDay = new Date(this.minDateTuNgay.getFullYear(), this.minDateTuNgay.getMonth(), 1);   
    this.minDateTuNgay.setMonth((new Date()).getMonth() -1);

    if (this.baoCaoSearch.TuNgayFormat == null) {
      this.baoCaoSearch.TuNgayFormat = firstDay;
    }
    if (this.baoCaoSearch.DenNgayFormat == null) {
      this.baoCaoSearch.DenNgayFormat = new Date();
    }
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

  exportExcel() {
    if(this.baoCaoSearch.TuNgayFormat==null || this.baoCaoSearch.DenNgayFormat==null)
    {
        this.notificationService.showError("Từ ngày và đến ngày yêu cầu nhập");
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
      this.baoCaoSearch.FromDate=this.baoCaoSearch.TuNgayFormat;
      this.baoCaoSearch.ToDate=this.baoCaoSearch.DenNgayFormat;
      this.baoCaoSearch.AdditionalSearchString = khoId + ";0;" + tuNgay + ";" + denNgay + ";" + this.inBaoCaoXuatNhapTon.HostingName;
      this.apiService.postExportExcel<any>("BaoCao/ExportBaoCaoXuatNhapTon", this.baoCaoSearch)
        .subscribe(res => {
          let dateTimeNow = new Date();
          CommonService.downLoadFile(res, "application/vnd.ms-excel", "BaoCaoXuatNhapTon" + dateTimeNow.getFullYear() + ".xlsx");
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
  sumThanhTien(value){
    if(value){
      return value.sum;
    }
  }
  totalThanhTien(field){
    switch (field) {
      case 'ThanhTienTonDauKy':
        if (this.dataToSumAllThanhTien != undefined && this.dataToSumAllThanhTien != null) {
          return this.dataToSumAllThanhTien.reduce((sum: any, item: { ThanhTienTonDauKy: any; }) => sum + item.ThanhTienTonDauKy, 0);
        }
      case 'ThanhTienNhapTrongKy':
        if (this.dataToSumAllThanhTien != undefined && this.dataToSumAllThanhTien != null) {
          return this.dataToSumAllThanhTien.reduce((sum: any, item: { ThanhTienNhapTrongKy: any; }) => sum + item.ThanhTienNhapTrongKy, 0);
        }
      case 'ThanhTienXuatTrongKy':
        if (this.dataToSumAllThanhTien != undefined && this.dataToSumAllThanhTien != null) {
          return this.dataToSumAllThanhTien.reduce((sum: any, item: { ThanhTienXuatTrongKy: any; }) => sum + item.ThanhTienXuatTrongKy, 0);
        }
      case 'ThanhTienTonCuoiKy':
        if (this.dataToSumAllThanhTien != undefined && this.dataToSumAllThanhTien != null) {
          return this.dataToSumAllThanhTien.reduce((sum: any, item: { ThanhTienTonCuoiKy: any; }) => sum + item.ThanhTienTonCuoiKy, 0);
        }
    }
  }
  XemBaoCao() {
    if(this.baoCaoSearch.TuNgayFormat==null || this.baoCaoSearch.DenNgayFormat==null)
    {
        this.notificationService.showError("Từ ngày và đến ngày yêu cầu nhập");
        return;
    }
    if(!this.baoCaoSearch.KhoId)
    {
        this.notificationService.showError("Kho yêu cầu nhập");
        return;
    }
    this._isLoading = true;
    this._isLoadingTotalPage = true;
    this.baoCaoSearch.FromDate=this.baoCaoSearch.TuNgayFormat;
    this.baoCaoSearch.ToDate=this.baoCaoSearch.DenNgayFormat;
    this.apiService.post<any>("BaoCao/GetDataBaoCaoXuatNhapTonForGridAsync", this.baoCaoSearch).subscribe(resultData => {
      if (resultData !== undefined && resultData != null) {
        // this.IsData = true;
        this.dataToSumAllThanhTien = resultData.Data;
        this.dataSource = {
          data: resultData.Data,
          total: resultData.TotalRowCount
        };
        var takeTo = +this.skip + +this.pageSize;
        let gridData = this.dataSource.data.slice(this.skip, takeTo);

        this.gridView = process(gridData, { group: this.groups });
        this.gridView.total = this.dataSource.total;

        // this.gridView.data.forEach((item, idx) => {
        //   this.baoCaoGrid.collapseRow(idx);
        // });//Đóng all expand
        this._isLoading = false;
        this._isLoadingTotalPage = false;
        // if (this.gridView.total != 0) {
        //   this.ishowView = true;
        // } else {
        //   this.ishowView = false;
        // }
      }
    });
  }

  reFresh(){
    this.skip = 0;
    this.XemBaoCao()
  }

  InBaoCao() {
    if(this.baoCaoSearch.TuNgayFormat==null || this.baoCaoSearch.DenNgayFormat==null)
    {
        this.notificationService.showError("Từ ngày và đến ngày yêu cầu nhập");
        return;
    }
    let khoId = 0;
    if (this.baoCaoSearch.KhoId != null) {
      khoId = this.baoCaoSearch.KhoId;
    }
    this.inBaoCaoXuatNhapTon.KhoId = khoId;
    this.inBaoCaoXuatNhapTon.FromDate = CommonService.formatDateTime(this.baoCaoSearch.TuNgayFormat, "dd/mm/yyyy");
    this.inBaoCaoXuatNhapTon.ToDate = CommonService.formatDateTime(this.baoCaoSearch.DenNgayFormat, "dd/mm/yyyy");
    this.dialog.open(BaoCaoXuatNhapTonPopupComponent, {
      disableClose: false,
      width: '1200px',
      data: this.inBaoCaoXuatNhapTon,
    }
    ).afterClosed().subscribe(() => {
    });
  }


  changeValueStart() {
    this.minDateDenNgay = new Date();

    if (this.baoCaoSearch.TuNgayFormat != null && this.baoCaoSearch.DenNgayFormat != null
      && this.baoCaoSearch.DenNgayFormat < this.baoCaoSearch.TuNgayFormat) {
      this.baoCaoSearch.DenNgayFormat = this.minDateDenNgay;
    }
  }
}
