import { GridDataResult } from '@progress/kendo-angular-grid';
import { GroupDescriptor } from '@progress/kendo-data-query';
import { GridComponent } from 'src/app/shared/component/grid/grid.component';
import { Component, OnInit, TemplateRef, ViewChild, Input } from '@angular/core';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import { ApiService } from 'src/app/core/services/api.service';
import { CommonService } from 'src/app/core/utilities/common.helper';
import { MatDialog } from '@angular/material';
import { LoadingComponent } from "src/app/shared/component/dialogs/loading/loading.component";
import { AuthService } from 'src/app/core/services/auth.service';
import { SecurityOperation } from 'src/app/shared/enum/security-operation.enum';
import { NotificationService } from 'src/app/core/services/notification.service';
import { SystemMessage } from 'src/app/shared/configdata/system-message';
import { process } from '@progress/kendo-data-query';
import { BaoCaoBangKePhieuXuatKhoSearch, InBaoCaoBangKePhieuXuatKho } from '../bang-ke-phieu-xuat-kho.model';
import { TrangThaiYeuCauKhamBenhObjEnum } from '../../../phau-thuat-thu-thuat/phau-thuat-thu-thuat.model';

@Component({
  selector: 'app-bao-cao-bang-ke-phieu-xuat-kho-list',
  templateUrl: './bao-cao-bang-ke-phieu-xuat-kho-list.component.html',
  styleUrls: ['./bao-cao-bang-ke-phieu-xuat-kho-list.component.scss']
})
export class BaoCaoBangKePhieuXuatKhoListComponent implements OnInit {
  baoCaoSearch: BaoCaoBangKePhieuXuatKhoSearch = new BaoCaoBangKePhieuXuatKhoSearch();
  //inBaoCaoXuatNhapTon: InBaoCaoBangKePhieuXuatKho = new InBaoCaoBangKePhieuXuatKho();
  public gridView: GridDataResult;
  additionalSearchString = "";
  minDateDenNgay: Date = null;
  minDateTuNgay: Date = null;
  public data: any[]
  public pageSize = 50;
  public skip = 0;
  take: number;
  height: number;
  dataSource: any = {
    data: [],
    total: 0
  };
  gridDataSource: any = {
    data: [],
    total: 0
  };

  documentType: DocumentType;
  ishowView: boolean = false;
  IsData: boolean = false;
  gridColumns: any[];
  dataToSumAllThanhTien: any;

  groups: GroupDescriptor[] = [{
    field: 'TenPhieu', dir: null, aggregates: [
      { field: 'ThanhTien', aggregate: 'sum' }
    ]
  }];

  @ViewChild(GridComponent, { static: true }) gridChild: GridComponent;
  @ViewChild('tenKhoVTYTGroupTemplate', { static: true }) tenKhoVTYTGroupTemplate: TemplateRef<any>;
  @ViewChild('titleTongGroupFooterTemplate', { static: true }) titleTongGroupFooterTemplate: TemplateRef<any>;
  @ViewChild('sumThanhTienGroupFooterTemplate', { static: true }) sumThanhTienGroupFooterTemplate: TemplateRef<any>;
  @ViewChild('tongThanhTienFooterTemplate', { static: true }) tongThanhTienFooterTemplate: TemplateRef<any>;
  @ViewChild('tongTitleThanhTienFooterTemplate', { static: true }) tongTitleThanhTienFooterTemplate: TemplateRef<any>;

  constructor(
    private apiService: ApiService,
    private dialog: MatDialog,
    private authService: AuthService,
    private notificationService: NotificationService,
  ) { }

  ngOnInit() {
    this.documentType = DocumentType.BaoCaoBangKePhieuXuatKho;
    this.skip = 0;
    this.take = (this.pageSize * this.skip) + this.pageSize;
    this.gridColumns = [
      //{ Field: "STT", Title: "STT", Width: 20 },     
      { Field: "MaDuoc", Title: "Mã dược", Width: 120, },
      { Field: "TenDuoc", Title: "Tên dược", Width: 120 },
      { Field: "DVT", Title: "ĐVT", Width: 120 },
      { Field: "SoLuong", Title: "Số lượng", Width: 120 },
      {
        Field: "DonGia", Title: "Đơn giá", Width: 120,
        TemplateGroupFooter: this.titleTongGroupFooterTemplate,
        TemplateFooter: this.tongTitleThanhTienFooterTemplate
      },
      {
        Field: "ThanhTien", Title: "Thành tiền", Width: 120,
        TemplateGroupFooter: this.sumThanhTienGroupFooterTemplate,
        TemplateFooter: this.tongThanhTienFooterTemplate
      },
      {
        Field: "TenPhieu",
        Title: '',
        Width: 150,
        Sortable: true,
        Hidden: true,
        HideFilter: true,
        TemplateGroupHeader: this.tenKhoVTYTGroupTemplate
      }
    ];

    this.minDateTuNgay = new Date();
    this.minDateTuNgay.setHours(0, 0, 0, 0);
    var firstDayOfMonth = new Date(this.minDateTuNgay.getFullYear(), this.minDateTuNgay.getMonth(), 1);

    if (this.baoCaoSearch.TuNgayFormat == null) {
      this.baoCaoSearch.TuNgayFormat = firstDayOfMonth;
    }
    if (this.baoCaoSearch.DenNgayFormat == null) {
      this.baoCaoSearch.DenNgayFormat = new Date();
    }
  }

  public pageChange(event): void {
    this.skip = event;
    if (this.dataSource.data.length == 0) {
      this.XemBaoCao();
    } else {
      var takeTo = +this.skip + +this.pageSize;
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
      this.baoCaoSearch.AdditionalSearchString = ";0;" + tuNgay + ";" + denNgay;
      this.apiService.postExportExcel<any>("BaoCao/ExportBaoCaoBangKePhieuXuatKho", this.baoCaoSearch)
        .subscribe(res => {
          let dateTimeNow = new Date();
          CommonService.downLoadFile(res, "application/vnd.ms-excel", "BaoCaoBienBanKiemKeKT" + dateTimeNow.getFullYear() + ".xlsx");
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
    this.apiService.post<any>("BaoCao/GetDataBaoCaoBangKePhieuXuatKhoForGridAsync", this.baoCaoSearch).subscribe(resultData => {
      if (resultData !== undefined && resultData != null) {
        this.dataToSumAllThanhTien = resultData.Data.reduce((sum: number, item: { ThanhTien: number; }) => sum + item.ThanhTien, 0);
        this.dataSource = {
          data: resultData.Data,
          total: resultData.TotalRowCount
        };
        var takeTo = +this.skip + +this.pageSize;
        let gridData = this.dataSource.data.slice(this.skip, takeTo);
        this.gridDataSource = {
          data: gridData,
          total: resultData.TotalRowCount
        };
        // if (this.gridView.total != 0) {
        //   this.ishowView = true;
        // } else {
        //   this.ishowView = false;
        // }
        console.log(this.gridDataSource)
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
  // changeValueStart() {
  //   this.minDateDenNgay = new Date();

  //   if (this.baoCaoSearch.TuNgayFormat != null && this.baoCaoSearch.DenNgayFormat != null
  //     && this.baoCaoSearch.DenNgayFormat < this.baoCaoSearch.TuNgayFormat) {
  //     this.baoCaoSearch.DenNgayFormat = this.minDateDenNgay;
  //   }
  // }
}