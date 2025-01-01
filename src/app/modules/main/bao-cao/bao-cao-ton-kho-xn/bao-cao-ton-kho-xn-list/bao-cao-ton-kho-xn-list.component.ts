import { GridDataResult } from '@progress/kendo-angular-grid';
import { GroupDescriptor, SortDescriptor } from '@progress/kendo-data-query';
import { GridComponent } from 'src/app/shared/component/grid/grid.component';
import { Component, OnInit, TemplateRef, ViewChild, Input } from '@angular/core';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';
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
import { process } from '@progress/kendo-data-query';
import { BaoCaoTonKhoXNSearch, InBaoCaoTonKhoXN } from '../bao-cao-ton-kho-xn.model';

@Component({
  selector: 'app-bao-cao-ton-kho-xn-list',
  templateUrl: './bao-cao-ton-kho-xn-list.component.html',
  styleUrls: ['./bao-cao-ton-kho-xn-list.component.scss']
})
export class BaoCaoTonKhoXnListComponent implements OnInit {
  baoCaoSearch: BaoCaoTonKhoXNSearch = new BaoCaoTonKhoXNSearch();
  ///inBaoCaoXuatNhapTon: InBaoCaoTonKhoXN = new InBaoCaoTonKhoXN();
  public gridView: GridDataResult;
  public groups: GroupDescriptor[] = [{ field: "Loai" }, { field: "Nhom" }];
  public pageSize = 50;
  public skip = 0;
  take: number;
  height: number;
  _isLoading: boolean = false;
  _isLoadingTotalPage: boolean = false;
  _showDefaultPagerTemplate: boolean;
  showDefaultPagerTemplate: boolean = true;
  additionalSearchString = "";
  minDateDenNgay: Date = null;
  minDateTuNgay: Date = null;

  documentType: DocumentType;
  dataSource: any = {
    data: [],
    total: 0
  };
  ishowView: boolean = false;
  IsData: boolean = false;
  gridColumns: any[];

  @ViewChild(GridComponent, { static: true }) gridChild: GridComponent;
  @ViewChild('tongCongTitleTemplate', { static: true }) tongCongTitleTemplate: TemplateRef<any>;
  @ViewChild('nhomVatTuNameTemplate', { static: true }) nhomVatTuNameTemplate: TemplateRef<any>;
  @ViewChild('kendoTitleTemplate', { static: true }) kendoTitleTemplate: TemplateRef<any>;


  constructor(
    private apiService: ApiService,
    private dialog: MatDialog,
    private authService: AuthService,
    private notificationService: NotificationService,
  ) { }

  ngOnInit() {
    this.documentType = DocumentType.BaoCaoTonKhoXN;
    this._showDefaultPagerTemplate = this.showDefaultPagerTemplate;
    this.skip = 0;
    this.take = (this.pageSize * this.skip) + this.pageSize;
    this.gridColumns = [
      { Field: "STT", Title: "STT", Width: 50 },
      { Field: "MaHoaChat", Title: "Mã hóa chất", Width: 120 },
      { Field: "TenHoaChat", Title: "Tên hóa chất", Width: 120, },
      { Field: "DVT", Title: "ĐVT", Width: 120, },
      { Field: "TonDau", Title: "Tồn đầu", Width: 120, },
      { Field: "Nhap", Title: "Nhập", Width: 120, },
      { Field: "TongSo", Title: "Tổng số", Width: 120, },
      { Field: "Xuat", Title: "Xuất", Width: 120, },
      { Field: "TonCuoi", Title: "Tồn cuối", Width: 120, },
      {
        Field: 'Loai',
        Title: '',
        Width: 0,
        Sortable: true,
        Hidden: true,
        HideFilter: true,
        //TemplateGroupHeader: this.nhomVatTuNameTemplate
      },
      {
        Field: 'Nhom',
        Title: '',
        Width: 0,
        Sortable: true,
        Hidden: true,
        HideFilter: true,
        //TemplateGroupHeader: this.nhomVatTuNameTemplate
      },
    ];

    this.minDateTuNgay = new Date();
    this.minDateTuNgay.setHours(0, 0, 0, 0);
    this.minDateTuNgay.setMonth((new Date()).getMonth() - 1);

    if (this.baoCaoSearch.TuNgayFormat == null) {
      this.baoCaoSearch.TuNgayFormat = this.minDateTuNgay;
    }
    if (this.baoCaoSearch.DenNgayFormat == null) {
      this.baoCaoSearch.DenNgayFormat = new Date();
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

  exportExcel() {
    if (this.baoCaoSearch.TuNgayFormat == null || this.baoCaoSearch.DenNgayFormat == null) {
      this.notificationService.showError("Từ ngày và đến ngày yêu cầu nhập");
      return;
    }

    if (!this.baoCaoSearch.KhoId) {   
      this.notificationService.showError("Kho yêu cầu nhập");
      this._isLoading = false;
      this._isLoadingTotalPage = false;
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
      this.baoCaoSearch.AdditionalSearchString = khoId + ";0;" + tuNgay + ";" + denNgay;
      this.apiService.postExportExcel<any>("BaoCao/ExportBaoCaoTonKhoXetNghiem", this.baoCaoSearch)
        .subscribe(res => {
          let dateTimeNow = new Date();
          CommonService.downLoadFile(res, "application/vnd.ms-excel", "BaoCaoTonKhoXN" + dateTimeNow.getFullYear() + ".xlsx");
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

  pageChange(event): void {
    this.skip = event.skip;
    if (this.dataSource.data.length == 0) {
      this.XemBaoCao();
    } else {
      var takeTo = this.skip + this.pageSize;
      console.log(this.dataSource.data)
      let gridData = this.dataSource.data.slice(this.skip, takeTo);
      this.gridView = process(gridData, { group: this.groups });
      this.gridView.total = this.dataSource.total;
    }
  } 
  
  XemBaoCao() {
    this._isLoading = true;
    this._isLoadingTotalPage = true;
    if (this.baoCaoSearch.TuNgayFormat == null || this.baoCaoSearch.DenNgayFormat == null) {
      this.notificationService.showError("Từ ngày và đến ngày yêu cầu nhập");
      this._isLoading = false;
      this._isLoadingTotalPage = false;
      return;
    }

    if (!this.baoCaoSearch.KhoId) {    
      this.notificationService.showError("Kho yêu cầu nhập");
      this._isLoading = false;
      this._isLoadingTotalPage = false;
      return;
    }

    if (this.baoCaoSearch.TuNgayFormat == null) {
      this.minDateTuNgay = new Date();
      this.minDateTuNgay.setHours(0, 0, 0, 0);
      this.baoCaoSearch.FromDate = CommonService.formatDateTime(this.minDateTuNgay, "dd/mm/yyyy");
    }
    if (this.baoCaoSearch.DenNgayFormat == null) {
      this.minDateTuNgay = new Date();
      this.baoCaoSearch.ToDate = CommonService.formatDateTime(this.minDateTuNgay, "dd/mm/yyyy");
    }
    let tuNgay = CommonService.formatDateTime(this.baoCaoSearch.TuNgayFormat, "dd/mm/yyyy");
    let denNgay = CommonService.formatDateTime(this.baoCaoSearch.DenNgayFormat, "dd/mm/yyyy");
    let khoId = 0;
    if (this.baoCaoSearch.KhoId != undefined && this.baoCaoSearch.KhoId != null) {
      khoId = this.baoCaoSearch.KhoId;
    }
    this.baoCaoSearch.FromDate = this.baoCaoSearch.TuNgayFormat;
    this.baoCaoSearch.ToDate = this.baoCaoSearch.DenNgayFormat;
    this.baoCaoSearch.AdditionalSearchString = khoId.toString() + ";" + tuNgay + ";" + denNgay;
    this.apiService.post<any>("BaoCao/GetDataBaoCaoTonKhoXetNghiemForGridAsync", this.baoCaoSearch).subscribe(resultData => {
      if (resultData !== undefined && resultData != null) {
        this.IsData = true;
        this.dataSource = {
          data: resultData.Data,
          total: resultData.TotalRowCount
        };
        var takeTo = +this.skip + +this.pageSize;
        let gridData = this.dataSource.data.slice(this.skip, takeTo);

        this.gridView = process(gridData, { group: this.groups });
        this.gridView.total = this.dataSource.total;
        console.log(this.gridView)
        //this.gridView = process(resultData.Data, { group: this.groups });
        // if (resultData.TotalRowCount != 0) {
        //   this.ishowView = true;
        // } else {
        //   this.ishowView = false;
        // }
        this._isLoading = false;
        this._isLoadingTotalPage = false;
      }
    });
  }

  // InBaoCao() {
  //   if(this.baoCaoSearch.TuNgayFormat==null || this.baoCaoSearch.DenNgayFormat==null)
  //   {
  //       this.notificationService.showError("Từ ngày và đến ngày yêu cầu nhập");
  //       return;
  //   }
  //   let khoId = 0;
  //   if (this.baoCaoSearch.KhoaId != null) {
  //     khoId = this.baoCaoSearch.KhoaId;
  //   }
  //   this.inBaoCaoXuatNhapTon.KhoId = khoId;
  //   this.inBaoCaoXuatNhapTon.FromDate = CommonService.formatDateTime(this.baoCaoSearch.TuNgayFormat, "dd/mm/yyyy");
  //   this.inBaoCaoXuatNhapTon.ToDate = CommonService.formatDateTime(this.baoCaoSearch.DenNgayFormat, "dd/mm/yyyy");
  //   this.dialog.open(BaoCaoXuatNhapTonPopupComponent, {
  //     disableClose: false,
  //     width: '1200px',
  //     data: this.inBaoCaoXuatNhapTon,
  //   }
  //   ).afterClosed().subscribe(() => {
  //   });
  // }


  changeValueStart() {
    this.minDateDenNgay = new Date();

    if (this.baoCaoSearch.TuNgayFormat != null && this.baoCaoSearch.DenNgayFormat != null
      && this.baoCaoSearch.DenNgayFormat < this.baoCaoSearch.TuNgayFormat) {
      this.baoCaoSearch.DenNgayFormat = this.minDateDenNgay;
    }
  }
}
