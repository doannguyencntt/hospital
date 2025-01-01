import { ChangeDetectorRef, Component, OnInit, TemplateRef, ViewChild, ViewEncapsulation } from '@angular/core';
import { MatDialog } from '@angular/material';
import { DataResult, GroupDescriptor } from '@progress/kendo-data-query';
import { ApiService } from 'src/app/core/services/api.service';
import { AuthService } from 'src/app/core/services/auth.service';
import { NotificationService } from 'src/app/core/services/notification.service';
import { CommonService } from 'src/app/core/utilities/common.helper';
import { LoadingComponent } from 'src/app/shared/component/dialogs/loading/loading.component';
import { SystemMessage } from 'src/app/shared/configdata/system-message';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import { SecurityOperation } from 'src/app/shared/enum/security-operation.enum';
import { BaoCaoHoatDongClsSearch, InBaoCaoHoatDongCls } from '../bao-cao-hoat-dong-cls.model';
import icFilterList from '@iconify/icons-ic/twotone-filter-list';
import { GridComponent } from 'src/app/shared/component/grid/grid.component';
declare var jQuery: any;
import { process } from '@progress/kendo-data-query';
import { BaseService } from 'src/app/core/services/base.service';

@Component({
  selector: 'app-bao-cao-hoat-dong-cls-list',
  templateUrl: './bao-cao-hoat-dong-cls-list.component.html',
  styleUrls: ['./bao-cao-hoat-dong-cls-list.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class BaoCaoHoatDongClsListComponent implements OnInit {
  baoCaoSearch: BaoCaoHoatDongClsSearch = new BaoCaoHoatDongClsSearch();
  inBaoCaoHoatDongCls: InBaoCaoHoatDongCls = new InBaoCaoHoatDongCls();
  minDateTuNgay: any;
  documentType: DocumentType
  heightToolbar: number = 140;
  height: number;

  gridColumns: any = []
  gridDataSource: any = {
    data: [],
    total: 0
  };

  path: any;
  showGrid: boolean = false;
  showPrintExport: boolean = false;
  icFilterList = icFilterList;
  gridView: DataResult;

  public pageSize = 5;
  public skip = 0;
  _isLoading: boolean = false;
  _isLoadingTotalPage: boolean = false;
  _showDefaultPagerTemplate: boolean = true;

  danhSachMau: any = [
    { KeyId: 1, DisplayName: "Mẫu thực tế" },
    { KeyId: 2, DisplayName: "Mẫu Cục Quản lý Khám, chữa bệnh - Bộ Y Tế" },
  ];

  @ViewChild("danhMucChaGroupHeaderTemplate", { static: true }) danhMucChaGroupHeaderTemplate: TemplateRef<any>;

  @ViewChild("actionTemplateSTT", { static: true })	actionTemplateSTT: TemplateRef<any>;
  @ViewChild("actionTemplateTenDichVu", { static: true })	actionTemplateTenDichVu: TemplateRef<any>;
  @ViewChild("actionTemplateDonVi", { static: true })	actionTemplateDonVi: TemplateRef<any>;
  @ViewChild("actionTemplateTongSo", { static: true })	actionTemplateTongSo: TemplateRef<any>;
  @ViewChild("actionTemplateNoiTru", { static: true })	actionTemplateNoiTru: TemplateRef<any>;
  @ViewChild("actionTemplateNgoaiTru", { static: true })	actionTemplateNgoaiTru: TemplateRef<any>;
  @ViewChild("actionTemplateSucKhoeKhac", { static: true })	actionTemplateSucKhoeKhac: TemplateRef<any>;

  @ViewChild("gridCLS", { static: true }) gridCLS: GridComponent;

  constructor(private apiService: ApiService,
    private dialog: MatDialog,
    private notificationService: NotificationService,
    private authService: AuthService,
    private baseService: BaseService,
    private cd: ChangeDetectorRef) {
    this.baseService.controllerName = "BaoCao";
  }

  ngOnInit() {
    this.documentType = DocumentType.BaoCaoHoatDongCls;
    this.baoCaoSearch.MauId = 1;
    
    if (window.location.protocol == "http:") {
      this.inBaoCaoHoatDongCls.HostingName = "http://" + window.location.host;
    } else {
      this.inBaoCaoHoatDongCls.HostingName = "https://" + window.location.host;
    }

    this.gridColumns = [
      { Field: "STT", Title: "STT", Width: 100, Template: this.actionTemplateSTT },
      { Field: "TenDichVu", Title: "Danh mục", Width: 200, Template: this.actionTemplateTenDichVu },
      { Field: "DonVi", Title: "Đơn vị", Width: 100, Template: this.actionTemplateDonVi },
      { Field: "TongSo", Title: "Tổng số", Width: 100, Template: this.actionTemplateTongSo },
      { Field: "NoiTru", Title: "Nội trú", Width: 100 , Template: this.actionTemplateNoiTru},
      { Field: "NgoaiTru", Title: "Ngoại trú", Width: 100, Template: this.actionTemplateNgoaiTru },
      { Field: "SucKhoeKhac", Title: "Sức khoẻ + Khác", Width: 100, Template: this.actionTemplateSucKhoeKhac },
      { Field: "DanhMucCha", Title: "Danh mục", Width: 300, Sortable: true, Hidden: true, TemplateGroupHeader: this.danhMucChaGroupHeaderTemplate },
    ]

    this.minDateTuNgay = new Date();
    this.minDateTuNgay.setHours(0, 0, 0, 0);

    if (this.baoCaoSearch.TuNgayFormat == null) {
      this.baoCaoSearch.TuNgayFormat = this.minDateTuNgay;
    }
    if (this.baoCaoSearch.DenNgayFormat == null) {
      this.baoCaoSearch.DenNgayFormat = new Date();
      this.baoCaoSearch.DenNgayFormat.setHours(23, 59, 59);
    }

    this.gridCLS.search();
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

  pageChange(event) {
    this.skip = event;
    var takeTo = +this.skip + +this.pageSize;
    this.gridView.data = this.gridDataSource.data.slice(this.skip, takeTo);
    this.gridView.total = this.gridDataSource.total;
  }

  seachChange(event) {
    this.skip = 0;
    this.XemBaoCao();
  }

  getValue(value) {
    if (this.gridView && value) {
      return value.sum;
    }
  }

  reFresh() {
    this.skip = 0;
    this.XemBaoCao()
  }

  XemBaoCao() {
    if (this.baoCaoSearch.TuNgayFormat == null || this.baoCaoSearch.DenNgayFormat == null) {
      this.notificationService.showError("Từ ngày và đến ngày yêu cầu nhập");
      return;
    }
    if (this.baoCaoSearch.MauId == null) {
      this.notificationService.showError("Chọn mẫu yêu cầu nhập");
      return;
    }
    else {
      if (this.baoCaoSearch.MauId == 1) {
        this.path = "BaoCao/GetDataBaoCaoHoatDongClsMauThucTeForGridAsync"
      }
      else {
        this.path = "BaoCao/GetDataBaoCaoHoatDongCLSMauCucQuanLyForGridAsync"
      }
    }

    this._isLoading = true;
    this._isLoadingTotalPage = true;

    this.baoCaoSearch.FromDate = this.baoCaoSearch.TuNgayFormat;
    this.baoCaoSearch.ToDate = this.baoCaoSearch.DenNgayFormat;

    this.apiService.post<any>(this.path, this.baoCaoSearch).subscribe(resultData => {
      if (resultData !== undefined && resultData != null) {
        if (resultData.TotalRowCount !== undefined && resultData.TotalRowCount != 0) {
          this.showPrintExport = true;
        }

        this.gridDataSource = {
          data: resultData.Data,
          total: resultData.TotalRowCount
        };      

        this._isLoading = false;
        this._isLoadingTotalPage = false;
      }
    });

  }

  exportExcel() {
    if (this.baoCaoSearch.TuNgayFormat == null || this.baoCaoSearch.DenNgayFormat == null) {
      this.notificationService.showError("Từ ngày và đến ngày yêu cầu nhập");
      return;
    }
    if (this.baoCaoSearch.MauId == null) {
      this.notificationService.showError("Chọn mẫu yêu cầu nhập");
      return;
    }
    else {
      if (this.baoCaoSearch.MauId == 1) {
        this.path = "BaoCao/ExportBaoCaoHoatDongCLSMauThucTe"
      }
      else {
        this.path = "BaoCao/ExportBaoCaoHoatDongCLSMauCucQuanLy"
      }
    }
    if (this.authService.hasPermission(this.documentType, SecurityOperation.Process)) {
      this.dialog.open(LoadingComponent, {
        disableClose: true,
        width: '200px',
        height: '90px',
        data: { Title: 'Đang xuất excel...' }
      });

      this.baoCaoSearch.FromDate = this.baoCaoSearch.TuNgayFormat;
      this.baoCaoSearch.ToDate = this.baoCaoSearch.DenNgayFormat;

      this.apiService.postExportExcel<any>(this.path, this.baoCaoSearch)
        .subscribe(res => {
          let dateTimeNow = new Date();
          CommonService.downLoadFile(res, "application/vnd.ms-excel", "BaoCaoHoatDongCls" + dateTimeNow.getFullYear() + ".xlsx");
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

}
