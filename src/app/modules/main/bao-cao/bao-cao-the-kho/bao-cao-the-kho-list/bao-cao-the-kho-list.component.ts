import { ChangeDetectorRef, Component, Input, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { BaoCaoTheKhoSearch } from '../bao-cao-the-kho.model';
import { GridDataResult } from '@progress/kendo-angular-grid';
import { GroupDescriptor, SortDescriptor } from '@progress/kendo-data-query';
import { GridComponent } from 'src/app/shared/component/grid/grid.component';
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
import { FormControl } from '@angular/forms';
import icSearch from "@iconify/icons-ic/twotone-search";
import { ApiError } from 'src/app/shared/models/api-error.model';
import icFilterList from '@iconify/icons-ic/twotone-filter-list';

@Component({
  selector: 'app-bao-cao-the-kho-list',
  templateUrl: './bao-cao-the-kho-list.component.html',
  styleUrls: ['./bao-cao-the-kho-list.component.scss']
})
export class BaoCaoTheKhoListComponent implements OnInit {
  baoCaoTheKhoSearch: BaoCaoTheKhoSearch = new BaoCaoTheKhoSearch();
  searchCtrl = new FormControl();
  icSearch = icSearch;
  // inBaoCaoXuatNhapTon: InBaoCaoXuatNhapTon = new InBaoCaoXuatNhapTon();
  public gridView: GridDataResult;
  public pageSize = 10;
  public skip = 0;
  take: number;
  urlGetDataGridChild = "BaoCaoTheKho/GetDataForGridChildAsync";
  urlGetPageDataGridChild: string = "";
  additionalSearchString = "";
  minDateDenNgay: Date = null;
  minDateTuNgay: Date = null;
  validationErrors: any;

  sort: SortDescriptor[] = [{
    field: 'Id',
    dir: 'desc'
  }];

  public data: any[]
  heightToolbar: number = 140;
  height: number;
  documentType: DocumentType;
  dataSource: any = {
    data: [],
    total: 0
  };
  _isLoading: boolean = false;
  _isLoadingTotalPage: boolean = false;
  _showDefaultPagerTemplate: boolean;
  showDefaultPagerTemplate: boolean = true;
  ishowView: boolean = false;
  IsData: boolean = false;
  gridColumns: any[];
  gridColumnsChild: any[];
  duocPhamHoacVatTuBenhVienId: number = null;
  icFilterList = icFilterList;
  @ViewChild('baoCaoTheKhoGrid', { static: true }) baoCaoTheKhoGrid: any;
  @ViewChild('sttTemplate', { static: true }) sttTemplate: TemplateRef<any>;

  // public pageChange(event: PageChangeEvent): void {
  //   this.baoCaoTheKhoSearch.Skip = event.skip;
  //   this.skip = event.skip;
  //   // this.XemBaoCao();
  // }

  constructor(
    private apiService: ApiService,
    private dialog: MatDialog,
    private authService: AuthService,
    private notificationService: NotificationService,
    private cd: ChangeDetectorRef
  ) { }


  ngOnInit() {
    this.documentType = DocumentType.BaoCaoTheKho;
    this._showDefaultPagerTemplate = this.showDefaultPagerTemplate;
    this.skip = 0;
    this.take = (this.pageSize * this.skip) + this.pageSize;
    this.minDateTuNgay = new Date();
    this.minDateTuNgay.setHours(0, 0, 0, 0);

    if (this.baoCaoTheKhoSearch.RangeFromDate.startDate == null) {
      this.baoCaoTheKhoSearch.RangeFromDate.startDate = this.minDateTuNgay;
    }
    if (this.baoCaoTheKhoSearch.RangeFromDate.endDate == null) {
      this.baoCaoTheKhoSearch.RangeFromDate.endDate = new Date();
      this.baoCaoTheKhoSearch.RangeFromDate.endDate.setHours(23, 59, 59);
    }
    // if (window.location.protocol == "http:") {
    //   this.inBaoCaoXuatNhapTon.HostingName = "http://" + window.location.host;
    // } else {
    //   this.inBaoCaoXuatNhapTon.HostingName = "https://" + window.location.host;
    // }
    this.gridColumns = [
      { Field: "STT", Title: "STT", Width: 20 }, //0 
      // { Field: "Ten", Title: "Tên thuốc, Vật tư, Hóa chất", Width: 120 },//1
      // { Field: "DVT", Title: "ĐVT", Width: 30 },//2
      // { Field: "SoLo", Title: "Số lô", Width: 50 },//3
      { Field: "NgayThangDisplay", Title: "Ngày tháng", Width: 50 },//1
      { Field: "SoChungTu", Title: "Số chứng từ", Width: 100 },//2
      { Field: "SCTNhap", Title: "Nhập", Width: 50 },//3
      { Field: "SCTXuat", Title: "Xuất", Width: 50 },//4
      { Field: "DienGiai", Title: "Diễn giải", Width: 100 },//5
      { Field: "TongSLTonDauKy", Title: "SL tồn đầu kỳ", Width: 50 },//6
      { Field: "SoLuong", Title: "Số lượng", Width: 120 },//7
      { Field: "TongSLNhap", Title: "Nhập", Width: 40 },//8
      { Field: "TongSLXuat", Title: "Xuất", Width: 40 },//9
      { Field: "TongSLTon", Title: "Tồn", Width: 40 },//10
    ];
    this.gridColumnsChild = [
      { Field: "STT", Title: "STT", Width: 20, Template: this.sttTemplate }, //0 
      // { Field: "Ten", Title: "Tên thuốc, Vật tư, Hóa chất", Width: 120 },//1
      // { Field: "DVT", Title: "ĐVT", Width: 30 },//2
      // { Field: "SoLo", Title: "Số lô", Width: 50 },//2
      { Field: "NgayThangDisplay", Title: "Ngày tháng", Width: 50 },//2
      { Field: "SCTNhap", Title: "Nhập", Width: 50 },//3
      {
        Field: "SCTXuat", Title: "Xuất", Width: 50 //4
      },//5
      { Field: "DienGiai", Title: "Diễn giải", Width: 100 },//5
      {
        Field: "SLTonDauKy", Title: "SL tồn đầu kỳ", Width: 50//6
      },//6
      { Field: "SLNhap", Title: "Nhập", Width: 40 },//7
      {
        Field: "SLXuat", Title: "Xuất", Width: 40
      },//8
      { Field: "SLTon", Title: "Tồn", Width: 40 },//9


    ];
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
    var widthParent = jQuery("#baoCaoTheKhoGrid").parent().width();
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

  public totalTonDauKy(field: any) {
    if (this.dataSource.data.length > 0) {
      return this.dataSource.data[0].TongSLTonDauKy;
      // return this.dataSource.data.reduce((sum, item) => sum + item.ThanhTien, 0);
    }
  }
  tonDauKy: number = 0;
  sumTongSLNhap: number = 0;
  sumTongSLXuat: number = 0;
  public totalSL(field: any) {
    switch (field) {
      case 'TongSLNhap':
        if (this.dataSource.data != undefined) {
          this.sumTongSLNhap = this.dataSource.data.reduce((sum, item) => sum + item.TongSLNhap, 0);
          return this.sumTongSLNhap;
        }
      case 'TongSLXuat':
        if (this.dataSource.data != undefined) {
          this.sumTongSLNhap = this.dataSource.data.reduce((sum, item) => sum + item.TongSLXuat, 0);
          return this.sumTongSLNhap;
        }
      case 'TongSLTon':
        return this.tonDauKy + this.sumTongSLNhap - this.sumTongSLXuat

    }
  }

  detailExpand(event: any) {
    if (event.dataItem) {
      this.baoCaoTheKhoSearch.NgayThang = event.dataItem.NgayThang;
      this.additionalSearchString = JSON.stringify(this.baoCaoTheKhoSearch); 
    }
  }
  searchChanges(event: any) { }

  public pageChange(event: PageChangeEvent): void {
    this.skip = event.skip;
    this.XemBaoCao();
  }
  reFresh() {
    this.skip = 0;
    this.XemBaoCao()
  }
  XemBaoCao() {
    this._isLoading = true;
    this._isLoadingTotalPage = true;
    if (this.baoCaoTheKhoSearch.RangeFromDate.startDate == null || this.baoCaoTheKhoSearch.RangeFromDate.endDate == null) {
      this.notificationService.showError("Từ ngày và đến ngày yêu cầu nhập");
      this._isLoading = false;
      this._isLoadingTotalPage = false;
      return;
    }

    if (!this.baoCaoTheKhoSearch.KhoId) {
      this.notificationService.showError("Kho yêu cầu nhập");
      this._isLoading = false;
      this._isLoadingTotalPage = false;
      return;
    }

    if (!this.duocPhamHoacVatTuBenhVienId) {
      this.notificationService.showError("Tên dược phẩm yêu cầu nhập");
      this._isLoading = false;
      this._isLoadingTotalPage = false;
      return;
    }

    this.baoCaoTheKhoSearch.DuocPhamHoacVatTuBenhVienId = this.duocPhamHoacVatTuBenhVienId;
    this.baoCaoTheKhoSearch.startDate = this.baoCaoTheKhoSearch.RangeFromDate.startDate;
    this.baoCaoTheKhoSearch.endDate = this.baoCaoTheKhoSearch.RangeFromDate.endDate;


    this.apiService.post<any>("BaoCaoTheKho/GetDataForGridAsync", this.baoCaoTheKhoSearch).subscribe(resultData => {
      if (resultData !== undefined && resultData != null) {
        this.IsData = true;
        this.dataSource = {
          data: resultData.Data,
          total: resultData.TotalRowCount
        };

        this.pageSize = resultData.TotalRowCount;
        var takeTo = +this.skip + +this.pageSize;
        this.dataSource.data = this.dataSource.data.slice(this.skip, takeTo);

        this.dataSource.data.forEach((item, idx) => {
          this.baoCaoTheKhoGrid.collapseRow(idx);
        });//Đóng all expand
        this._isLoading = false;
        this._isLoadingTotalPage = false;

      }
    });
  }

  InBaoCao() {
    // let khoId = 0;
    // if (this.baoCaoTheKhoSearch.KhoId != null) {
    //   khoId = this.baoCaoTheKhoSearch.KhoId;
    // }
    // this.inBaoCaoXuatNhapTon.KhoId = khoId;
    // this.inBaoCaoXuatNhapTon.FromDate = CommonService.formatDateTime(this.baoCaoTheKhoSearch.TuNgayFormat, "dd/mm/yyyy");
    // this.inBaoCaoXuatNhapTon.ToDate = CommonService.formatDateTime(this.baoCaoTheKhoSearch.DenNgayFormat, "dd/mm/yyyy");
    // this.dialog.open(BaoCaoXuatNhapTonPopupComponent, {
    //   disableClose: false,
    //   width: '1200px',
    //   data: this.inBaoCaoXuatNhapTon,
    // }
    // ).afterClosed().subscribe(() => {
    // });
  }

  exportExcel() {
    if (this.baoCaoTheKhoSearch.RangeFromDate.startDate == null || this.baoCaoTheKhoSearch.RangeFromDate.endDate == null) {
      this.notificationService.showError("Từ ngày và đến ngày yêu cầu nhập");
      return;
    }

    if (!this.baoCaoTheKhoSearch.KhoId) {
      this.notificationService.showError("Kho yêu cầu nhập");
      return;
    }

    if (!this.duocPhamHoacVatTuBenhVienId) {
      this.notificationService.showError("Tên dược phẩm yêu cầu nhập");
      return;
    }
    if (this.authService.hasPermission(this.documentType, SecurityOperation.Process)) {
      this.dialog.open(LoadingComponent, {
        disableClose: true,
        width: '200px',
        height: '90px',
        data: { Title: 'Đang xuất excel...' }
      });
      this.baoCaoTheKhoSearch.DuocPhamHoacVatTuBenhVienId = this.duocPhamHoacVatTuBenhVienId;
      this.baoCaoTheKhoSearch.startDate = this.baoCaoTheKhoSearch.RangeFromDate.startDate;
      this.baoCaoTheKhoSearch.endDate = this.baoCaoTheKhoSearch.RangeFromDate.endDate;
      this.apiService.postExportExcel<any>("BaoCaoTheKho/ExportTheKho", this.baoCaoTheKhoSearch)
        .subscribe(res => {
          let dateTimeNow = new Date();
          CommonService.downLoadFile(res, "application/vnd.ms-excel", "BaoCaoTheKho" + dateTimeNow.getFullYear() + ".xlsx");
          this.dialog.closeAll();
        }
          ,
          (err: ApiError) => {
            this.validationErrors = err.ValidationErrors;
            if (err.Message != "Validation Failed") {
              this.notificationService.showError(err.Message);
            }
            this.dialog.closeAll();
          }
        );
    } else {
      this.notificationService.showError(SystemMessage.UnAuthorizedMessage);
    }
  }


  changeValueStart(dataItem: any) {
    this.minDateDenNgay = new Date();
    if (dataItem.startDate != null && dataItem.endDate != null
      && this.baoCaoTheKhoSearch.DuocPhamHoacVatTuBenhVienId != undefined
      && this.baoCaoTheKhoSearch.DuocPhamHoacVatTuBenhVienId != null
      && this.baoCaoTheKhoSearch.KhoId != undefined
      && this.baoCaoTheKhoSearch.KhoId != null
    ) {
      this.IsData = true;
    } else {
      this.IsData = false;
    }
  }
  khoChange(khoId: number) {
    if (khoId != undefined && khoId != null) {
      this.baoCaoTheKhoSearch.DuocPhamHoacVatTuBenhVienId = null;
      if (this.baoCaoTheKhoSearch.DuocPhamHoacVatTuBenhVienId == null) {
        this.IsData = false;
      }
      else if (this.baoCaoTheKhoSearch.DuocPhamHoacVatTuBenhVienId != undefined
        && this.baoCaoTheKhoSearch.DuocPhamHoacVatTuBenhVienId != null
        && this.baoCaoTheKhoSearch.RangeFromDate.startDate != null
        && this.baoCaoTheKhoSearch.RangeFromDate.endDate != null) {
        this.IsData = true;
      }
    } else {
      this.IsData = false;
    }
  }

  selectionChangeDpVT(dataItem: any) {

    if (dataItem != undefined && dataItem != null) {
      this.baoCaoTheKhoSearch.LoaiDuocPhamHoacVatTu = dataItem.LoaiDuocPhamHoacVatTu;
      this.duocPhamHoacVatTuBenhVienId = dataItem.DuocPhamHoacVatTuBenhVienId;
      this.baoCaoTheKhoSearch.DuocPhamHoacVatTuBenhVienId = dataItem.DuocPhamHoacVatTuBenhVienId;
      if (this.baoCaoTheKhoSearch.DuocPhamHoacVatTuBenhVienId != undefined
        && this.baoCaoTheKhoSearch.DuocPhamHoacVatTuBenhVienId != null
        && this.baoCaoTheKhoSearch.RangeFromDate.startDate != null
        && this.baoCaoTheKhoSearch.RangeFromDate.endDate != null
      ) {
        this.IsData = true;
      }
    } else {
      this.baoCaoTheKhoSearch.LoaiDuocPhamHoacVatTu = null;
      this.duocPhamHoacVatTuBenhVienId = null;
      this.IsData = false;
    }
  }

}
