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
import { BaoCaoTiepNhanBenhPhamSearch, InBaoCaoTiepNhanBenhPham } from '../bao-cao-tiep-nhan-benh-pham.model';
@Component({
  selector: 'app-bao-cao-tiep-nhan-benh-pham-list',
  templateUrl: './bao-cao-tiep-nhan-benh-pham-list.component.html',
  styleUrls: ['./bao-cao-tiep-nhan-benh-pham-list.component.scss']
})
export class BaoCaoTiepNhanBenhPhamListComponent implements OnInit {
  baoCaoSearch: BaoCaoTiepNhanBenhPhamSearch = new BaoCaoTiepNhanBenhPhamSearch();
  inBaoCaoTiepNhanBenhPham: InBaoCaoTiepNhanBenhPham = new InBaoCaoTiepNhanBenhPham();
  public gridView: GridDataResult;
  public pageSize = 50;
  public skip = 0;
  take: number;
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
  gridDataSource: any = {
    data: [],
    total: 0
  };
  _isLoading: boolean = false;
  _isLoadingTotalPage: boolean = false;
  ishowView: boolean = false;
  IsData: boolean = false;
  gridColumns: any[];

  @ViewChild(GridComponent, { static: true }) gridChild: GridComponent;
  @ViewChild('baoCaoGrid', { static: true }) baoCaoGrid: any;

  // public pageChange(event: PageChangeEvent): void {
  //   this.baoCaoSearch.Skip = event.skip;
  //   this.skip = event.skip;
  //   //this.XemBaoCao();
  // }

  constructor(
    private apiService: ApiService,
    private dialog: MatDialog,
    private authService: AuthService,
    private notificationService: NotificationService,

  ) { }

  ngOnInit() {
    this.documentType = DocumentType.BaoCaoTiepNhanBenhPham;
    // this._showDefaultPagerTemplate = this.showDefaultPagerTemplate;
    // this.skip = 0;
    // this.take = (this.pageSize * this.skip) + this.pageSize;

    if (window.location.protocol == "http:") {
      this.inBaoCaoTiepNhanBenhPham.HostingName = "http://" + window.location.host;
    } else {
      this.inBaoCaoTiepNhanBenhPham.HostingName = "https://" + window.location.host;
    }

    this.gridColumns = [
      { Field: "GioNhanString", Title: "Giờ nhận", Width: 20 },
      { Field: "Barcode", Title: "Barcode", Width: 20 },
      { Field: "GioNhanString", Title: "Năm sinh", Width: 15 },
      { Field: "HoTen", Title: "Họ tên", Width: 20 },
      { Field: "GioiTinh", Title: "Giới tính", Width: 20 },
    ];


    this.minDateTuNgay = new Date();
    this.minDateTuNgay.setHours(6, 30, 0, 0);

    this.minDateDenNgay = new Date();
    this.minDateDenNgay.setHours(6, 30, 0, 0);
    this.minDateDenNgay.setDate(this.minDateDenNgay.getDate() + 1);

    if (this.baoCaoSearch.TuNgayFormat == null) {
      this.baoCaoSearch.TuNgayFormat = this.minDateTuNgay;
    }
    if (this.baoCaoSearch.DenNgayFormat == null) {
      this.baoCaoSearch.DenNgayFormat = this.minDateDenNgay;
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
      let tuNgay = CommonService.formatDateTime(this.baoCaoSearch.TuNgayFormat, "dd/mm/yyyy");
      let denNgay = CommonService.formatDateTime(this.baoCaoSearch.DenNgayFormat, "dd/mm/yyyy");
      let DoanId = 0;
      if (this.baoCaoSearch.DoanId != undefined && this.baoCaoSearch.DoanId != null) {
        DoanId = this.baoCaoSearch.DoanId;
      }

      this.baoCaoSearch.FromDate = this.baoCaoSearch.TuNgayFormat;
      this.baoCaoSearch.ToDate = this.baoCaoSearch.DenNgayFormat;
      this.baoCaoSearch.AdditionalSearchString = DoanId + ";0;" + tuNgay + ";" + denNgay + ";" + this.inBaoCaoTiepNhanBenhPham.HostingName;
      this.apiService.postExportExcel<any>("BaoCao/ExportBaoCaoTiepNhanBenhPham", this.baoCaoSearch)
        .subscribe(res => {
          let dateTimeNow = new Date();
          CommonService.downLoadFile(res, "application/vnd.ms-excel", "BaoCaoTiepNhanBenhPham" + dateTimeNow.getFullYear() + ".xlsx");
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

  // XemBaoCao() {
  //   if (this.baoCaoSearch.TuNgayFormat == null || this.baoCaoSearch.DenNgayFormat == null) {
  //     this.notificationService.showError("Từ ngày và đến ngày yêu cầu nhập");
  //     this.gridChild._isLoadingTotalPage = false;
  //     this.gridChild._isLoading = false;
  //     return;
  //   }
  //   this._isLoading = true;
  //   this._isLoadingTotalPage = true;
  //   if (this.baoCaoSearch.TuNgayFormat == null) {
  //     this.minDateTuNgay = new Date();
  //     this.minDateTuNgay.setHours(0, 0, 0, 0);
  //     this.baoCaoSearch.FromDate = CommonService.formatDateTime(this.minDateTuNgay, "dd/mm/yyyy");
  //   }
  //   if (this.baoCaoSearch.DenNgayFormat == null) {
  //     this.minDateTuNgay = new Date();
  //     this.baoCaoSearch.ToDate = CommonService.formatDateTime(this.minDateTuNgay, "dd/mm/yyyy");
  //   }
  //   let tuNgay = CommonService.formatDateTime(this.baoCaoSearch.TuNgayFormat, "dd/mm/yyyy");
  //   let denNgay = CommonService.formatDateTime(this.baoCaoSearch.DenNgayFormat, "dd/mm/yyyy");
  //   let doanId = 0;
  //   if (this.baoCaoSearch.DoanId != undefined && this.baoCaoSearch.DoanId != null) {
  //     doanId = this.baoCaoSearch.DoanId;
  //   }
  //   this.baoCaoSearch.FromDate = this.baoCaoSearch.TuNgayFormat;
  //   this.baoCaoSearch.ToDate = this.baoCaoSearch.DenNgayFormat;
  //   this.baoCaoSearch.AdditionalSearchString = doanId + ";0;" + tuNgay + ";" + denNgay;
  //   this.apiService.post<any>("BaoCao/GetDataBaoCaoTiepNhanBenhPhamForGridAsync", this.baoCaoSearch).subscribe(resultData => {
  //     if (resultData !== undefined && resultData != null) {
  //       this.IsData = true;
  //       console.log(resultData);
  //       this.dataSource = {
  //         data: resultData.Data,
  //         total: resultData.TotalRowCount
  //       };
  //       this.gridChild._isLoadingTotalPage = false;
  //       this.gridChild._isLoading = false;
  //       if (this.dataSource.total != 0) {
  //         this.ishowView = true;
  //       } else {
  //         this.ishowView = false;
  //       }
  //     }
  //   });
  // }

  XemBaoCao() {
    this.ishowView = true;
    this.gridChild._isLoadingTotalPage = true;
    this.gridChild._isLoading = true;
    if (this.baoCaoSearch.TuNgayFormat == null || this.baoCaoSearch.DenNgayFormat == null) {
      this.notificationService.showError("Từ ngày và đến ngày yêu cầu nhập");
      this.gridChild._isLoadingTotalPage = false;
      this.gridChild._isLoading = false;
      return;
    }

    this.baoCaoSearch.FromDate = this.baoCaoSearch.TuNgayFormat;
    this.baoCaoSearch.ToDate = this.baoCaoSearch.DenNgayFormat;

    this.apiService.post<any>("BaoCao/GetDataBaoCaoTiepNhanBenhPhamForGridAsync", this.baoCaoSearch).subscribe(resultData => {
      if (resultData !== undefined && resultData != null) {
        if (resultData.TotalRowCount !== undefined && resultData.TotalRowCount != 0) {
          //this.showPrintExport = true;
        }
        this.ishowView = true;
        this.dataSource = {
          data: resultData.Data,
          total: resultData.TotalRowCount
        };
        this.gridChild._isLoadingTotalPage = false;
        this.gridChild._isLoading = false;
      }else{
        this.ishowView = false;
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
}

