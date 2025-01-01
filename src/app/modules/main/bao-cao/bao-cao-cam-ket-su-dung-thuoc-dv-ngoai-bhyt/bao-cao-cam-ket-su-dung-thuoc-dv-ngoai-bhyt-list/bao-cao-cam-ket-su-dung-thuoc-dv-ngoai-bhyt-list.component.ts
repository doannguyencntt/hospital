import { GridDataResult } from '@progress/kendo-angular-grid';
import { GroupDescriptor } from '@progress/kendo-data-query';
import { GridComponent } from 'src/app/shared/component/grid/grid.component';
import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
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
import { BaoCaoCamKetSuDungThuocDVNgoaiBHYTSearch } from '../bao-cao-cam-ket-su-dung-thuoc-dv-ngoai-bhyt.model';

@Component({
  selector: 'app-bao-cao-cam-ket-su-dung-thuoc-dv-ngoai-bhyt-list',
  templateUrl: './bao-cao-cam-ket-su-dung-thuoc-dv-ngoai-bhyt-list.component.html',
  styleUrls: ['./bao-cao-cam-ket-su-dung-thuoc-dv-ngoai-bhyt-list.component.scss']
})
export class BaoCaoCamKetSuDungThuocDvNgoaiBhytListComponent implements OnInit {
  baoCaoSearch: BaoCaoCamKetSuDungThuocDVNgoaiBHYTSearch = new BaoCaoCamKetSuDungThuocDVNgoaiBHYTSearch();
  public gridView: GridDataResult;
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
  additionalSearchString = "";
  minDateDenNgay: Date = null;
  minDateTuNgay: Date = null;
  documentType: DocumentType;;
  ishowView: boolean = false;
  IsData: boolean = false;
  gridColumns: any[];

  @ViewChild(GridComponent, { static: true }) gridChild: GridComponent;
  @ViewChild('sumTongTienGroupFooterTemplate', { static: true }) sumTongTienGroupFooterTemplate: TemplateRef<any>;
  @ViewChild('tenLoaiVTDVGroupTemplate', { static: true }) tenLoaiVTDVGroupTemplate: TemplateRef<any>;

  groups: GroupDescriptor[] = [{
    field: 'TenLoaiVTDV', dir: null, aggregates: [
      { field: 'TongTien', aggregate: 'sum' }
    ]
  }];

  constructor(
    private apiService: ApiService,
    private dialog: MatDialog,
    private authService: AuthService,
    private notificationService: NotificationService,
  ) { }

  ngOnInit() {
    this.documentType = DocumentType.BaoCaoCamKetSuDungThuocNgoaiBHYT;
    this.skip = 0;
    this.take = (this.pageSize * this.skip) + this.pageSize;
    this.gridColumns = [
      //{ Field: "STT", Title: "STT", Width: 20, Template: this.sttTemplate },
      { Field: "TenVTDV", Title: "Tên dịch vụ kỹ thuật, Thuốc, Vật tư y tế", Width: 250, },
      { Field: "SoLuong", Title: "Số lượng", Width: 120, },
      { Field: "DonGia", Title: "Đơn giá", Width: 120, },
      { Field: "TongTien", Title: "Tổng tiền", Width: 120, TemplateGroupFooter: this.sumTongTienGroupFooterTemplate },
      {
        Field: "TenLoaiVTDV",
        Title: '',
        Width: 150,
        Sortable: true,
        Hidden: true,
        HideFilter: true,
        TemplateGroupHeader: this.tenLoaiVTDVGroupTemplate
      }
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

  pageChange(event): void {
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
      this.baoCaoSearch.AdditionalSearchString = tuNgay + ";" + denNgay + ";";
      this.apiService.postExportExcel<any>("BaoCao/ExportBaoCaoCamKetTuNguyenSuDungThuocDVNgoaiBHYT", this.baoCaoSearch)
        .subscribe(res => {
          let dateTimeNow = new Date();
          CommonService.downLoadFile(res, "application/vnd.ms-excel", "BaoCaoCamKetSuDungThuocDVNgoaiBHYT" + dateTimeNow.getFullYear() + ".xlsx");
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
    if (this.baoCaoSearch.TuNgayFormat == null || this.baoCaoSearch.DenNgayFormat == null) {
      this.notificationService.showError("Từ ngày và đến ngày yêu cầu nhập");
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
    this.apiService.post<any>("BaoCao/GetDataBaoCaoCamKetTuNguyenSuDungThuocDVNgoaiBHYTForGridAsync", this.baoCaoSearch).subscribe(resultData => {
      if (resultData !== undefined && resultData != null) {
        this.IsData = true;
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

