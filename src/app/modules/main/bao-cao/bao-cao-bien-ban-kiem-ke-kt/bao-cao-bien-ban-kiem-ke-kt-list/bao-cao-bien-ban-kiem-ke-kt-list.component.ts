import { GridDataResult, PageChangeEvent } from '@progress/kendo-angular-grid';
import { DataResult, GroupDescriptor, SortDescriptor } from '@progress/kendo-data-query';
import { GridComponent } from 'src/app/shared/component/grid/grid.component';
import { Component, OnInit, TemplateRef, ViewChild, Input } from '@angular/core';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import { ApiService } from 'src/app/core/services/api.service';
import { CommonService } from 'src/app/core/utilities/common.helper';
declare var jQuery: any;
import { MatDialog } from '@angular/material';
import { LoadingComponent } from "src/app/shared/component/dialogs/loading/loading.component";
import { AuthService } from 'src/app/core/services/auth.service';
import { SecurityOperation } from 'src/app/shared/enum/security-operation.enum';
import { NotificationService } from 'src/app/core/services/notification.service';
import { SystemMessage } from 'src/app/shared/configdata/system-message';
import { process } from '@progress/kendo-data-query';
import { BaoCaoBienBanKiemKeKTSearch, InBaoCaoBienBanKiemKeKT } from '../bao-cao-bien-ban-kiem-ke-kt.model';
import { ThongKeSoSinh } from '../../../trang-chu/thong-ke.model';

@Component({
  selector: 'app-bao-cao-bien-ban-kiem-ke-kt-list',
  templateUrl: './bao-cao-bien-ban-kiem-ke-kt-list.component.html',
  styleUrls: ['./bao-cao-bien-ban-kiem-ke-kt-list.component.scss']
})
export class BaoCaoBienBanKiemKeKtListComponent implements OnInit {
  baoCaoSearch: BaoCaoBienBanKiemKeKTSearch = new BaoCaoBienBanKiemKeKTSearch();
  inBaoCaoXuatNhapTon: InBaoCaoBienBanKiemKeKT = new InBaoCaoBienBanKiemKeKT();
  // public groups: GroupDescriptor[] = [{ field: "NhomVatTuName" }];
  public groups: GroupDescriptor[] = [{
    field: 'Kho'
  }, {
    field: 'NhomVatTuName'
  }];
  public gridView: DataResult;
  public pageSize = 50;
  public skip = 0;
  take: number;
  height: number;
  gridColumns: any[];
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
  sort: SortDescriptor[] = [{
    field: 'Id',
    dir: 'desc'
  }];

  public data: any[]
  documentType: DocumentType;
  _isLoading: boolean = false;
  _isLoadingTotalPage: boolean = false;
  _showDefaultPagerTemplate: boolean;
  showDefaultPagerTemplate: boolean = true;
  ishowView: boolean = false;
  IsData: boolean = false;
  @ViewChild(GridComponent, { static: true }) gridChild: GridComponent;
  @ViewChild('baoCaoGrid', { static: true }) baoCaoGrid: any;
  @ViewChild('sttTemplate', { static: true }) sttTemplate: TemplateRef<any>;

  @ViewChild("khoaGroupHeaderTemplate", { static: true }) khoaGroupHeaderTemplate: TemplateRef<any>;
  @ViewChild("nhomGroupHeaderTemplate", { static: true }) nhomGroupHeaderTemplate: TemplateRef<any>;

  public pageChange(event: PageChangeEvent): void {
    this.skip = event.skip;
    if (this.dataSource.data.length == 0) {
      this.XemBaoCao();
    } else {
      if (this.baoCaoSearch.TuNgayFormat == null || this.baoCaoSearch.DenNgayFormat == null) {
        this.notificationService.showError("Từ ngày và đến ngày yêu cầu nhập");
        return;
      }

      if (!this.baoCaoSearch.KhoaPhongId) {
        this.notificationService.showError("Khoa yêu cầu nhập");
        this._isLoading = false;
        this._isLoadingTotalPage = false;
        return;
      }

      if (this.baoCaoSearch.KhoId === null) {
        this.notificationService.showError("Kho yêu cầu nhập");
        this._isLoading = false;
        this._isLoadingTotalPage = false;
        return;
      }

      this._isLoading = true;
      this._isLoadingTotalPage = true;
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

      this.baoCaoSearch.Skip = this.skip;
      this.baoCaoSearch.Take = this.skip + this.pageSize;

      this.apiService.post<any>("BaoCao/GetDataBaoCaoBienBanKiemKeKTForGridAsync", this.baoCaoSearch).subscribe(resultData => {
        if (resultData !== undefined && resultData != null) {
          this.IsData = true;

          this.dataSource = {
            data: resultData.Data,
            total: resultData.TotalRowCount
          };

          let gridData = this.dataSource.data;
          this.gridView = process(gridData, { group: this.groups });
          this.gridView.total = this.dataSource.total;

          this._isLoading = false;
          this._isLoadingTotalPage = false;
        }
      });
    }
  }

  constructor(
    private apiService: ApiService,
    private dialog: MatDialog,
    private authService: AuthService,
    private notificationService: NotificationService,
  ) { }

  ngOnInit() {

    this.documentType = DocumentType.BaoCaoTonKhoKT;
    this._showDefaultPagerTemplate = this.showDefaultPagerTemplate;
    this.skip = 0;
    this.take = (this.pageSize * this.skip) + this.pageSize;
    this.gridColumns = [

      { Field: "STT", Title: "STT", Width: 70, Template: this.sttTemplate }, //0 
      { Field: "MaVatTu", Title: "Mã dược/ Mã VTYT", Width: 100 },//1  
      { Field: "TenVatTu", Title: "Tên thuốc, Vật tư, Hóa chất", Width: 170 },//2      
      { Field: "DonVi", Title: "Đơn vị", Width: 50 },
      { Field: "SoLo", Title: "Lô", Width: 100 },
      { Field: "HanDungDisplay", Title: "Hạn Dùng", Width: 100 },
      { Field: "DonGia", Title: "Đơn giá", Width: 150 },

      // { Field: "SoKiemSoat", Title: "Số kiểm soát", Width: 150 },
      // { Field: "NuocSX", Title: "Nước sản xuất", Width: 120 },
      // { Field: "HanDungDisplay", Title: "Hạn dùng", Width: 150 },

      { Field: "SoLuong", Title: "Số lượng", Width: 120 },
      { Field: "SLSoSach", Title: "Số lượng sổ sách", Width: 120 },
      { Field: "SLThucTe", Title: "Số lượng thực tế", Width: 120 },

      { Field: "TinhTrangHuTon", Title: "SL Hỏng, vỡ", Width: 120 },
      { Field: "GhiChu", Title: "Ghi chú", Width: 120 },
      { Field: "NhomVTId", Title: "Nhóm vật tư ID", Width: 120 },


      { Field: "Kho", Title: "Khoa", Width: 300, Sortable: true, Hidden: true, TemplateGroupHeader: this.khoaGroupHeaderTemplate },
      { Field: "NhomVatTuName", Title: "Nhóm", Width: 300, Sortable: true, Hidden: true, TemplateGroupHeader: this.nhomGroupHeaderTemplate },
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
  exportExcel() {
    if (this.baoCaoSearch.TuNgayFormat == null || this.baoCaoSearch.DenNgayFormat == null) {
      this.notificationService.showError("Từ ngày và đến ngày yêu cầu nhập");
      return;
    }

    if (!this.baoCaoSearch.KhoaPhongId) {
      this.notificationService.showError("Khoa yêu cầu nhập");
      this._isLoading = false;
      this._isLoadingTotalPage = false;
      return;
    }

    if (this.baoCaoSearch.KhoId === null) {
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

      this.baoCaoSearch.FromDate = this.baoCaoSearch.TuNgayFormat;
      this.baoCaoSearch.ToDate = this.baoCaoSearch.DenNgayFormat;
      this.baoCaoSearch.AdditionalSearchString = ";0;" + tuNgay + ";" + denNgay + ";" + this.inBaoCaoXuatNhapTon.HostingName;
      this.apiService.postExportExcel<any>("BaoCao/ExportBaoCaoBienBanKiemKeKT", this.baoCaoSearch)
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
    if (this.baoCaoSearch.TuNgayFormat == null || this.baoCaoSearch.DenNgayFormat == null) {
      this.notificationService.showError("Từ ngày và đến ngày yêu cầu nhập");
      return;
    }

    if (!this.baoCaoSearch.KhoaPhongId) {
      this.notificationService.showError("Khoa yêu cầu nhập");
      this._isLoading = false;
      this._isLoadingTotalPage = false;
      return;
    }

    if (this.baoCaoSearch.KhoId === null) {
      this.notificationService.showError("Kho yêu cầu nhập");
      this._isLoading = false;
      this._isLoadingTotalPage = false;
      return;
    }

    this._isLoading = true;
    this._isLoadingTotalPage = true;
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

    this.skip = 0;
    this.take = (this.pageSize * this.skip) + this.pageSize;
    
    this.baoCaoSearch.Skip = 0;
    this.baoCaoSearch.Take = 50;
    let dataSourceRest: any = {
      data: [],
      total: 0
    };
    this.gridView = process(dataSourceRest.data, { group: this.groups });

    this.apiService.post<any>("BaoCao/GetDataBaoCaoBienBanKiemKeKTForGridAsync", this.baoCaoSearch).subscribe(resultData => {
      if (resultData !== undefined && resultData != null) {
        this.IsData = true;
       
        this.dataSource = {
          data: resultData.Data,
          total: resultData.TotalRowCount
        };

        this.gridView = process(this.dataSource.data, { group: this.groups });
        this.gridView.total = this.dataSource.total;

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
}