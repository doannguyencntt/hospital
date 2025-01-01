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
import { BaoCaoDoanhThuKhamDoanTheoKhoaPhongSearch, InBaoCaoDoanhThuKhamDoanTheoKhoaPhong } from '../bao-cao-doanh-thu-kham-doan-theo-khoa-phong.model';
import { GridQueryInfo } from 'src/app/shared/component/grid/grid.model';
@Component({
  selector: 'app-bao-cao-doanh-thu-kham-doan-theo-khoa-phong-list',
  templateUrl: './bao-cao-doanh-thu-kham-doan-theo-khoa-phong-list.component.html',
  styleUrls: ['./bao-cao-doanh-thu-kham-doan-theo-khoa-phong-list.component.scss']
})
export class BaoCaoDoanhThuKhamDoanTheoKhoaPhongListComponent implements OnInit {
  baoCaoSearch: BaoCaoDoanhThuKhamDoanTheoKhoaPhongSearch = new BaoCaoDoanhThuKhamDoanTheoKhoaPhongSearch();
  inBaoCaoXuatNhapTon: InBaoCaoDoanhThuKhamDoanTheoKhoaPhong = new InBaoCaoDoanhThuKhamDoanTheoKhoaPhong();

  additionalSearchString = "";
  minDateDenNgay: Date = null;
  minDateTuNgay: Date = null;

  public data: any[]
  height: number;
  documentType: DocumentType;
  dataSource: any = {
    data: [],
    total: 0
  };
  ishowView: boolean = false;
  IsData: boolean = false;
  gridColumns: any[];
  public pageSize = 50;
  public skip = 0;
  take: number;
  gridDataSource: any = {
    data: [],
    total: 0
  };
  _isLoading: boolean = false;
  _isLoadingTotalPage: boolean = false;
  _showDefaultPagerTemplate: boolean = true;
  queryInfo :GridQueryInfo;

  sumKhoaKhamBenh: number = null;
  sumKhoaXetNghiem: number = null;
  sumKhoaCDHA: number = null;
  sumKhoaNoi: number = null;
  sumKhoaSan: number = null;
  sumKhoaNgoai: number = null;
  sumKhoaGMHS: number = null;
  sumTongKhoa: number = null;

  lstKhoaPhongCoDoanhThu: any[] = [];

  @ViewChild(GridComponent, { static: true }) gridChild: GridComponent;
  @ViewChild('baoCaoGrid', { static: true }) baoCaoGrid: any;

  constructor(
    private apiService: ApiService,
    private dialog: MatDialog,
    private authService: AuthService,
    private notificationService: NotificationService,

  ) { }

  ngOnInit() {
    this.documentType = DocumentType.BaoCaoDoanhThuKhamDoanTheoKP;
    this.skip = 0;
    this.take = (this.pageSize * this.skip) + this.pageSize;

    this.gridColumns = [
      { Field: "STT", Title: "STT", Width: 70 }, //0
      { Field: "TenCongTy", Title: "Tên công ty", Width: 240, }, //1
      { Field: "MaTN", Title: "Mã TN", Width: 90, }, // 2
      { Field: "HoTen", Title: "Họ tên", Width: 160 }, // 3
      { Field: "NamSinh", Title: "Năm sinh", Width: 90, }, //4
      { Field: "GioiTinh", Title: "Giới tính", Width: 70, }, //5
      { Field: "-", Title: "", Width: 150, } //6 -- mặc định
    ];

    this.minDateTuNgay = new Date();
    this.minDateTuNgay.setHours(0, 0, 0, 0);
    this.minDateTuNgay.setMonth((new Date()).getMonth() - 1);

    if (this.baoCaoSearch.TuNgayFormat == null) {
      this.baoCaoSearch.TuNgayFormat = this.minDateTuNgay;
    }
    if (this.baoCaoSearch.DenNgayFormat == null) {
      this.baoCaoSearch.DenNgayFormat = new Date();
      this.baoCaoSearch.DenNgayFormat.setHours(23, 59, 59);
    }
  }
  exportExcel() {
    if (this.baoCaoSearch.TuNgayFormat == null || this.baoCaoSearch.DenNgayFormat == null) {
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

      let tuNgay = CommonService.formatDateTime(this.baoCaoSearch.TuNgayFormat, "mm/dd/yyyy");
      let denNgay = CommonService.formatDateTime(this.baoCaoSearch.DenNgayFormat, "mm/dd/yyyy");
      this.baoCaoSearch.FromDate = tuNgay;
      this.baoCaoSearch.ToDate = denNgay;
      this.baoCaoSearch.Hosting = this.inBaoCaoXuatNhapTon.HostingName;
      let searchText = this.getSearchText();
      this.queryInfo = { skip: this.skip, take: this.pageSize, pageSize: this.pageSize, searchString: searchText, additionalSearchString: JSON.stringify(this.baoCaoSearch), sort: null, lazyLoadPage: false };
      this.apiService.postExportExcel<any>("BaoCao/ExportBaoCaoDoanhThuKhamDoanTheoKhoaPhong", this.queryInfo)
        .subscribe(res => {
          let dateTimeNow = new Date();
          CommonService.downLoadFile(res, "application/vnd.ms-excel", "BaoCaoDoanhThuKhamDoanTheoKhoaPhong" + dateTimeNow.getFullYear() + ".xlsx");
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
  xemBaoCao(isChagePage: boolean = false) {
    this._isLoading = true;
    this._isLoadingTotalPage = true;
    if (this.baoCaoSearch.TuNgayFormat == null || this.baoCaoSearch.DenNgayFormat == null) {
      this.notificationService.showError("Từ ngày và đến ngày yêu cầu nhập");
      this._isLoading = false;
      this._isLoadingTotalPage = false;
      return;
    }

    if(!isChagePage)
    {
      this.skip = 0;
    }
    this.lstKhoaPhongCoDoanhThu = [];

    let tuNgay = CommonService.formatDateTime(this.baoCaoSearch.TuNgayFormat, "mm/dd/yyyy");
    let denNgay = CommonService.formatDateTime(this.baoCaoSearch.DenNgayFormat, "mm/dd/yyyy");

    this.baoCaoSearch.FromDate = tuNgay;
    this.baoCaoSearch.ToDate = denNgay;
    let searchText = this.getSearchText();
    this.queryInfo = { skip: this.skip, take: this.pageSize, pageSize: this.pageSize, searchString: searchText, additionalSearchString: JSON.stringify(this.baoCaoSearch), sort: null, lazyLoadPage: false };
    this.apiService.post<any>("BaoCao/GetDataBaoCaoDoanhThuKhamDoanTheoKhoaPhongForGridAsync", this.queryInfo).subscribe(resultData => {
      if (resultData !== undefined && resultData != null) {
        resultData.Data.forEach(element => {
          element.DoanhThuTheoKhoas.forEach(khoa => {
            if (!this.lstKhoaPhongCoDoanhThu.some(x => x.KhoaId == khoa.KhoaId)) {
              this.lstKhoaPhongCoDoanhThu.push(khoa);
            }
          });
        });

        this.gridDataSource = {
          data: resultData.Data,
          total: resultData.TotalRowCount
        };
        this._isLoading = false;

        this.apiService.post<any>("BaoCao/GetDataTotalPageBaoCaoDoanhThuKhamDoanTheoKhoaPhongForGridAsync", this.queryInfo).subscribe(resultDataTotal => {
          if (resultDataTotal !== undefined && resultDataTotal != null) {
            this.gridDataSource.total = resultDataTotal.TotalRowCount;
            this._isLoadingTotalPage = false;
          }
        },
          () => {
            this._isLoadingTotalPage = false;
          });


        // //move func
        // this.sumKhoaKhamBenh = resultData.Data.reduce((sum: number, item: { KhoaKhamBenh: number; }) => sum + item.KhoaKhamBenh, 0);
        // this.sumKhoaXetNghiem = resultData.Data.reduce((sum: number, item: { KhoaXetNghiem: number; }) => sum + item.KhoaXetNghiem, 0);
        // this.sumKhoaCDHA = resultData.Data.reduce((sum: number, item: { KhoaCDHA: number; }) => sum + item.KhoaCDHA, 0);
        // this.sumKhoaNoi = resultData.Data.reduce((sum: number, item: { KhoaNoi: number; }) => sum + item.KhoaNoi, 0);
        // this.sumKhoaSan = resultData.Data.reduce((sum: number, item: { KhoaSan: number; }) => sum + item.KhoaSan, 0);
        // this.sumKhoaNgoai = resultData.Data.reduce((sum: number, item: { KhoaNgoai: number; }) => sum + item.KhoaNgoai, 0);
        // this.sumKhoaGMHS = resultData.Data.reduce((sum: number, item: { KhoaGMHS: number; }) => sum + item.KhoaGMHS, 0);
        // this.sumTongKhoa = this.sumKhoaKhamBenh + this.sumKhoaXetNghiem + this.sumKhoaCDHA
        //   + this.sumKhoaNoi + this.sumKhoaSan + this.sumKhoaNgoai + this.sumKhoaGMHS;

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

  public pageChange(event): void {
    this.skip = event.skip;
    this.xemBaoCao(true);
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

  getSearchText() {
    let searchText = this.baoCaoSearch.SearchString != undefined ? this.baoCaoSearch.SearchString : '';
    searchText = CommonService.convertSpecialXML(searchText);
    searchText = '<SearchTerms>' + searchText + '</SearchTerms>';
    searchText = btoa(unescape(encodeURIComponent('<AdvancedQueryParameters>' + searchText + '</AdvancedQueryParameters>')));
    return searchText;
  }

  getDoanhThu(dataItem, khoaId) {
    var arrDoanhThu = dataItem.DoanhThuTheoKhoas.filter(x => x.KhoaId == khoaId && x.DoanhThu != null && x.DoanhThu != 0);
    if(arrDoanhThu.length > 0)
    {
      return arrDoanhThu.reduce((sum: number, item: { DoanhThu: number; }) => sum + item.DoanhThu, 0);
    }
    else{
      return null;
    }
  }
}