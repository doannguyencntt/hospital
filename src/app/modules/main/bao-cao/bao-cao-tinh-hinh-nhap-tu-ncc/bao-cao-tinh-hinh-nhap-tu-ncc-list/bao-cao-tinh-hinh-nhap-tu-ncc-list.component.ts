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
import { BaoCaoTinhHinhNhapTuNCCKTSearch } from '../bao-cao-tinh-hinh-nhap-tu-ncc.model';
import { GridDataResult } from '@progress/kendo-angular-grid';

@Component({
  selector: 'app-bao-cao-tinh-hinh-nhap-tu-ncc-list',
  templateUrl: './bao-cao-tinh-hinh-nhap-tu-ncc-list.component.html',
  styleUrls: ['./bao-cao-tinh-hinh-nhap-tu-ncc-list.component.scss']
})

export class BaoCaoTinhHinhNhapTuNccListComponent implements OnInit {
  baoCaoSearch: BaoCaoTinhHinhNhapTuNCCKTSearch = new BaoCaoTinhHinhNhapTuNCCKTSearch();

  additionalSearchString = "";
  minDateDenNgay: Date = null;
  minDateTuNgay: Date = null;
  groups: GroupDescriptor[] = [{
    field: 'TenNhaCungCap', dir: null, aggregates: [
      { field: 'Thuoc', aggregate: 'sum' },
      { field: 'VTYT', aggregate: 'sum' },
      { field: 'HoaChat', aggregate: 'sum' },
      { field: 'ThanhTien', aggregate: 'sum' },
      { field: 'ThueVAT', aggregate: 'sum' }
    ]
  }];

  public gridView: GridDataResult;
  public data: any[]
  documentType: DocumentType;
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

  ishowView: boolean = false;
  IsData: boolean = false;
  gridColumns: any[];

  @ViewChild(GridComponent, { static: true }) gridChild: GridComponent;
  @ViewChild('tenNhaCungCapGroupTemplate', { static: true }) tenNhaCungCapGroupTemplate: TemplateRef<any>;
  @ViewChild('sumThuocGroupFooterTemplate', { static: true }) sumThuocGroupFooterTemplate: TemplateRef<any>;
  @ViewChild('sumVTYTGroupFooterTemplate', { static: true }) sumVTYTGroupFooterTemplate: TemplateRef<any>;
  @ViewChild('sumHoaChatGroupFooterTemplate', { static: true }) sumHoaChatGroupFooterTemplate: TemplateRef<any>;
  @ViewChild('tongGhiChuGroupFooterTemplate', { static: true }) tongGhiChuGroupFooterTemplate: TemplateRef<any>;
  @ViewChild('sumThueVATGroupFooterTemplate', { static: true }) sumThueVATGroupFooterTemplate: TemplateRef<any>;
 
  @ViewChild('thanhTienTemplate', { static: true }) thanhTienTemplate: TemplateRef<any>;
  @ViewChild('thueVATTemplate', { static: true }) thueVATTemplate: TemplateRef<any>;
  @ViewChild('vtytTemplate', { static: true }) vtytTemplate: TemplateRef<any>;
  @ViewChild('hoaChatTemplate', { static: true }) hoaChatTemplate: TemplateRef<any>;
  @ViewChild('thuocTemplate', { static: true }) thuocTemplate: TemplateRef<any>;

  constructor(
    private apiService: ApiService,
    private dialog: MatDialog,
    private authService: AuthService,
    private notificationService: NotificationService,
  ) { }

  ngOnInit() {
    this.documentType = DocumentType.BaoCaoTinhHinhNhapTuNhaCungCap;
    this.skip = 0;
    this.take = (this.pageSize * this.skip) + this.pageSize;
    this.gridColumns = [     
                      { Field: "NgayChungTuStr", Title: "Ngày chứng từ", Width: 120, },
                      { Field: "SoChungTu", Title: "Số chứng từ", Width: 120, },
                      { Field: "NgayHoaDonStr", Title: "Ngày hóa đơn", Width: 120, },
                      { Field: "SoHoaDon", Title: "Số seri - Số hoá đơn", Width: 120, },
                      { Field: "Thuoc", Title: "Thuốc", Width: 120, Template: this.thuocTemplate, TemplateGroupFooter: this.sumThuocGroupFooterTemplate },
                      { Field: "VTYT", Title: "VTYT", Width: 120,  Template: this.vtytTemplate, TemplateGroupFooter: this.sumVTYTGroupFooterTemplate },
                      { Field: "HoaChat", Title: "Hóa chất", Width: 120, Template: this.hoaChatTemplate, TemplateGroupFooter: this.sumHoaChatGroupFooterTemplate },
                      { Field: "ThueVAT", Title: "Thuế VAT", Width: 120, Template: this.thueVATTemplate, TemplateGroupFooter: this.sumThueVATGroupFooterTemplate},
                      { Field: "ThanhTien", Title: "Thành tiền", Width: 120,  Template: this.thanhTienTemplate },
                      { Field: "", Title: "Tổng", Width: 120, TemplateGroupFooter: this.tongGhiChuGroupFooterTemplate },
                      {
                        Field: 'TenNhaCungCap',
                        Title: '',
                        Width: 150,
                        Sortable: true,
                        Hidden: true,
                        HideFilter: true,
                        TemplateGroupHeader: this.tenNhaCungCapGroupTemplate
                      }
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

  pageChange(event): void {
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
      this.baoCaoSearch.AdditionalSearchString = ";0;" + tuNgay + ";" + denNgay + ";";
      this.apiService.postExportExcel<any>("BaoCao/ExportBaoCaoTinhHinhNhapTuNCC", this.baoCaoSearch)
        .subscribe(res => {
          let dateTimeNow = new Date();
          CommonService.downLoadFile(res, "application/vnd.ms-excel", "BaoCaoTinhHinhNhapTuNCCKT" + dateTimeNow.getFullYear() + ".xlsx");
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
    this.apiService.post<any>("BaoCao/GetDataBaoCaoTinhHinhNhapTuNCCForGridAsync", this.baoCaoSearch).subscribe(resultData => {
      if (resultData !== undefined && resultData != null) {
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
        this.gridChild._isLoading = false;
        this.gridChild._isLoadingTotalPage = false;
      }
    });
  }

}

