import { GridDataResult } from '@progress/kendo-angular-grid';
import { GroupDescriptor, SortDescriptor } from '@progress/kendo-data-query';
import { BaoCaoBenhNhanLamXetNghiemSearch, InBaoCaoBenhNhanLamXetNghiem } from '../bao-cao-benh-nhan-lam-xet-nghiem.model';
import { GridComponent } from 'src/app/shared/component/grid/grid.component';
import { Component, OnInit, TemplateRef, ViewChild, Input } from '@angular/core';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import { ApiService } from 'src/app/core/services/api.service';
import { PageChangeEvent } from '@progress/kendo-angular-dropdowns/dist/es2015/common/page-change-event';
import { CommonService } from 'src/app/core/utilities/common.helper';
declare var jQuery: any;
import { MatDialog } from '@angular/material';
import { BaoCaoBenhNhanLamXetNghiemPopupComponent } from '../bao-cao-benh-nhan-lam-xet-nghiem-popup/bao-cao-benh-nhan-lam-xet-nghiem-popup.component';
import { LoadingComponent } from "src/app/shared/component/dialogs/loading/loading.component";
import { AuthService } from 'src/app/core/services/auth.service';
import { SecurityOperation } from 'src/app/shared/enum/security-operation.enum';
import { NotificationService } from 'src/app/core/services/notification.service';
import { SystemMessage } from 'src/app/shared/configdata/system-message';
@Component({
  selector: 'app-bao-cao-benh-nhan-lam-xet-nghiem-list',
  templateUrl: './bao-cao-benh-nhan-lam-xet-nghiem-list.component.html',
  styleUrls: ['./bao-cao-benh-nhan-lam-xet-nghiem-list.component.scss']
})
export class BaoCaoBenhNhanLamXetNghiemListComponent implements OnInit {
  baoCaoSearch: BaoCaoBenhNhanLamXetNghiemSearch = new BaoCaoBenhNhanLamXetNghiemSearch();
  inBaoCaoBenhNhanLamXetNghiem: InBaoCaoBenhNhanLamXetNghiem = new InBaoCaoBenhNhanLamXetNghiem();
  public gridView: GridDataResult;
  dataSource: any = {
    data: [],
    total: 0
  };
  gridDataSource: any = {
    data: [],
    total: 0
  };
  public pageSize = 50;
  public skip = 0;
  additionalSearchString = "";
  minDateDenNgay: Date = null;
  minDateTuNgay: Date = null;
  height: number;
  documentType: DocumentType;
  ishowView: boolean = false;
  gridColumns: any[];

  @ViewChild(GridComponent, { static: true }) gridChild: GridComponent;
  @ViewChild('sttTemplate', { static: true }) sttTemplate: TemplateRef<any>;

  constructor(
    private apiService: ApiService,
    private dialog: MatDialog,
    private authService: AuthService,
    private notificationService: NotificationService,

  ) { }

  ngOnInit() {
    this.documentType = DocumentType.BaoCaoBenhNhanLamXetNghiem;
    this.gridColumns = [
      { Field: "STT", Title: "STT", Width: 20, Template: this.sttTemplate },
      { Field: "MaBarcode", Title: "Mã Barcode", Width: 120 },
      { Field: "MaBN", Title: "Mã BN", Width: 120 },
      { Field: "HoTen", Title: "Họ tên", Width: 50 },
      { Field: "GioiTinh", Title: "Giới tính", Width: 120 },
      { Field: "NamSinh", Title: "Năm sinh", Width: 50 },
      { Field: "DoiTuong", Title: "Đối tượng", Width: 120 },
      { Field: "DiaChi", Title: "Địa chỉ", Width: 120 },
    ];

    this.minDateTuNgay = new Date();
    this.minDateTuNgay.setHours(0, 0, 0, 0);
    //this.minDateTuNgay.setMonth((new Date()).getMonth() -1);

    if (this.baoCaoSearch.TuNgayFormat == null) {
      this.baoCaoSearch.TuNgayFormat = this.minDateTuNgay;
    }
    if (this.baoCaoSearch.DenNgayFormat == null) {
      this.baoCaoSearch.DenNgayFormat = new Date();
    }
  }
  pageChange(event){
    // this.skip = event;
    // let ss = this.dataSource;
    // // this.XemBaoCao();
    // var takeTo = this.skip + this.pageSize;
    // this.gridDataSource.data = this.dataSource.data.slice(this.skip, takeTo);
    // this.gridDataSource.total = this.dataSource.total;
    this.skip = event;
    if (this.dataSource.data.length == 0) {
      this.XemBaoCao();
    } else {
      var takeTo = this.skip + this.pageSize;
      let gridData = this.dataSource.data.slice(this.skip, takeTo);
      this.gridDataSource = {
        data: gridData,
        total: this.dataSource.total
      };
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

      this.baoCaoSearch.FromDate = this.baoCaoSearch.TuNgayFormat;
      this.baoCaoSearch.ToDate = this.baoCaoSearch.DenNgayFormat;
      this.baoCaoSearch.AdditionalSearchString = tuNgay + ";" + denNgay + ";" + this.inBaoCaoBenhNhanLamXetNghiem.HostingName;
      this.apiService.postExportExcel<any>("BaoCao/ExportBaoCaoBenhNhanLamXetNghiem", this.baoCaoSearch)
        .subscribe(res => {
          let dateTimeNow = new Date();
          CommonService.downLoadFile(res, "application/vnd.ms-excel", "BaoCaoBenhNhanLamXetNghiem" + dateTimeNow.getFullYear() + ".xlsx");
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

  XemBaoCao() {
    this.gridChild._isLoading = true;
    this.gridChild._isLoadingTotalPage = true;
    if (this.baoCaoSearch.TuNgayFormat == null || this.baoCaoSearch.DenNgayFormat == null) {
      this.notificationService.showError("Từ ngày và đến ngày yêu cầu nhập");
      this.gridChild._isLoading = false;
      this.gridChild._isLoadingTotalPage = false;
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
    this.baoCaoSearch.FromDate = this.baoCaoSearch.TuNgayFormat;
    this.baoCaoSearch.ToDate = this.baoCaoSearch.DenNgayFormat;
    this.baoCaoSearch.AdditionalSearchString = tuNgay + ";" + denNgay;
    this.apiService.post<any>("BaoCao/GetDataBaoCaoBenhNhanLamXetNghiemForGridAsync", this.baoCaoSearch).subscribe(resultData => {
      if (resultData !== undefined && resultData != null) {
        console.log(resultData)
        this.dataSource = {
          data: resultData.Data,
          total: resultData.TotalRowCount
        };
        var takeTo = this.skip +this.pageSize;
        let gridData = this.dataSource.data.slice(this.skip, takeTo);
        this.gridDataSource = {
          data: gridData,
          total: resultData.TotalRowCount
        };
        //this.gridDataSource = this.dataSource;
        // if (this.gridView.total != 0) {
        //   this.ishowView = true;
        // } else {
        //   this.ishowView = false;
        // }
        this.gridChild._isLoading = false;
        this.gridChild._isLoadingTotalPage = false;
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
  //   if (this.baoCaoSearch.KhoId != null) {
  //     khoId = this.baoCaoSearch.KhoId;
  //   }
  //   this.inBaoCaoBenhNhanLamXetNghiem.FromDate = CommonService.formatDateTime(this.baoCaoSearch.TuNgayFormat, "dd/mm/yyyy");
  //   this.inBaoCaoBenhNhanLamXetNghiem.ToDate = CommonService.formatDateTime(this.baoCaoSearch.DenNgayFormat, "dd/mm/yyyy");
  //   this.dialog.open(BaoCaoBenhNhanLamXetNghiemPopupComponent, {
  //     disableClose: false,
  //     width: '1200px',
  //     data: this.inBaoCaoBenhNhanLamXetNghiem,
  //   }
  //   ).afterClosed().subscribe(() => {
  //   });
  // }


  // changeValueStart() {
  //   this.minDateDenNgay = new Date();

  //   if (this.baoCaoSearch.TuNgayFormat != null && this.baoCaoSearch.DenNgayFormat != null
  //     && this.baoCaoSearch.DenNgayFormat < this.baoCaoSearch.TuNgayFormat) {
  //     this.baoCaoSearch.DenNgayFormat = this.minDateDenNgay;
  //   }
  // }
}
