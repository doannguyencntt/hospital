import { GridDataResult } from '@progress/kendo-angular-grid';
import { GroupDescriptor, SortDescriptor } from '@progress/kendo-data-query';
import { GridComponent } from 'src/app/shared/component/grid/grid.component';
import { Component, OnInit, TemplateRef, ViewChild, Input, ChangeDetectorRef } from '@angular/core';
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
import icFilterList from '@iconify/icons-ic/twotone-filter-list';
import { process } from '@progress/kendo-data-query';
import { BaoCaoTonKhoSearch, InBaoCaoTonKho } from '../xuat-nhap-ton-kho-xet-nghiem.model';

@Component({
  selector: 'app-xuat-nhap-ton-kho-xet-nghiem-list',
  templateUrl: './xuat-nhap-ton-kho-xet-nghiem-list.component.html',
  styleUrls: ['./xuat-nhap-ton-kho-xet-nghiem-list.component.scss']
})

export class BaoCaoXuatNhapTonKhoXetNghiemListComponent implements OnInit {
  baoCaoSearch: BaoCaoTonKhoSearch = new BaoCaoTonKhoSearch();
  inBaoCaoTonKho: InBaoCaoTonKho = new InBaoCaoTonKho();

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
  height: number;
  documentType: DocumentType;
  dataSource: any = {
    data: [],
    total: 0
  };

  icFilterList = icFilterList;
  _isLoading: boolean = false;
  _isLoadingTotalPage: boolean = false;
  _showDefaultPagerTemplate: boolean;
  showDefaultPagerTemplate: boolean = true;
  ishowView: boolean = false;
  IsData: boolean = false;
  gridColumns: any[];
  gridColumnsChild: any[];
  dataToSumThanhTien: any;
  dataToSumAllThanhTien: any;
  @Input() heightToolbar: number = 140;

  @ViewChild(GridComponent, { static: true }) gridChild: GridComponent;
  @ViewChild('baoCaoGrid', { static: true }) baoCaoGrid: any;
  @ViewChild('sttTemplate', { static: true }) sttTemplate: TemplateRef<any>;
  @ViewChild('nhomGroupHeaderTemplate', { static: true }) nhomGroupHeaderTemplate: TemplateRef<any>;


  public pageChange(event: PageChangeEvent): void {
    this.skip = event.skip;
    if (this.dataSource.data.length == 0) {
      this.XemBaoCao();
    } else {
      var takeTo = +this.skip + +this.pageSize;
      let gridData = this.dataSource.data.slice(this.skip, takeTo);
      this.gridView = process(gridData, { group: this.groups });
      this.gridView.total = this.dataSource.total;
    }
  }

  public groups: GroupDescriptor[] = [{ field: 'Nhom' }];

  constructor(
    private apiService: ApiService,
    private dialog: MatDialog,
    private authService: AuthService,
    private notificationService: NotificationService,
    private cd: ChangeDetectorRef
  ) { }

  ngOnInit() {
    this.documentType = DocumentType.BaoCaoXNXuatNhapTonKhoXetNghiem;
    this._showDefaultPagerTemplate = this.showDefaultPagerTemplate;
    this.skip = 0;
    this.take = (this.pageSize * this.skip) + this.pageSize;

    if (window.location.protocol == "http:") {
      this.inBaoCaoTonKho.HostingName = "http://" + window.location.host;
    } else {
      this.inBaoCaoTonKho.HostingName = "https://" + window.location.host;
    }

    this.gridColumns = [
      { Field: "STT", Title: "STT", Width: 100, Template: this.sttTemplate },
      { Field: "MaDuocPham", Title: "Mã dược phẩm", Width: 100 },
      { Field: "DuocPham", Title: "Dược phẩm", Width: 200 },
      { Field: "DonViTinh", Title: "Đơn vị tính", Width: 100 },
      { Field: "TongDauKy", Title: "Tồn đầu kỳ", Width: 120 },
      { Field: "NhapTrongKy", Title: "Nhập trong kỳ", Width: 100 },
      { Field: "XuatTrongKy", Title: "Xuất trong kỳ", Width: 150 },
      { Field: "TonCuoiKy", Title: "Tồn cuối kỳ", Width: 120 },
      { Field: "SoLoSX", Title: "Lô sx", Width: 120 },
      { Field: "HanDungDisplay", Title: "Hạn dùng", Width: 120 },
      { Field: "GhiChu", Title: "Ghi chú", Width: 120 },
      { Field: "Nhom", Title: "Nhóm", Width: 100, Sortable: true, Hidden: true, TemplateGroupHeader: this.nhomGroupHeaderTemplate },
    ];

    this.minDateTuNgay = new Date();
    this.minDateTuNgay.setHours(0, 0, 0, 0);

    if (this.baoCaoSearch.TuNgay == null) {
      this.baoCaoSearch.TuNgay = this.minDateTuNgay;
    }
    if (this.baoCaoSearch.DenNgay == null) {
      this.baoCaoSearch.DenNgay = new Date();
      //this.baoCaoSearch.DenNgay.setHours(23, 59, 59);
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
    let tuNgay = CommonService.formatDateTime(this.baoCaoSearch.TuNgay, "dd/mm/yyyy");
    let denNgay = CommonService.formatDateTime(this.baoCaoSearch.DenNgay, "dd/mm/yyyy");

    this.additionalSearchString = this.baoCaoSearch.KhoId + ";" + event.dataItem.NhomDuocPhamVatTuId + ";" + tuNgay + ";" + denNgay;

  }

  onDataBoundChild(event: any) {
    console.log(event);
    this.dataToSumThanhTien = event.Data;
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

  exportExcel() {
    if (this.baoCaoSearch.TuNgay == null || this.baoCaoSearch.DenNgay == null) {
      this.notificationService.showError("Từ ngày và đến ngày yêu cầu nhập");
      return;
    }
    if (!this.baoCaoSearch.KhoId) {
      this.notificationService.showError("Vui lòng chọn tủ hóa chất");
      return;
    }
    if (this.authService.hasPermission(this.documentType, SecurityOperation.Process)) {
      this.dialog.open(LoadingComponent, {
        disableClose: true,
        width: '200px',
        height: '90px',
        data: { Title: 'Đang xuất excel...' }
      });
      let tuNgay = CommonService.formatDateTime(this.baoCaoSearch.TuNgay, "dd/mm/yyyy");
      let denNgay = CommonService.formatDateTime(this.baoCaoSearch.DenNgay, "dd/mm/yyyy");
      let khoId = 0;
      if (this.baoCaoSearch.KhoId != undefined && this.baoCaoSearch.KhoId != null) {
        khoId = this.baoCaoSearch.KhoId;
      }

      this.baoCaoSearch.FromDate = this.baoCaoSearch.TuNgay;
      this.baoCaoSearch.ToDate = this.baoCaoSearch.DenNgay;
      this.baoCaoSearch.AdditionalSearchString = khoId + ";0;" + tuNgay + ";" + denNgay + ";" + this.inBaoCaoTonKho.HostingName;

      this.apiService.postExportExcel<any>("BaoCao/ExportXuatNhapTonKhoXetNghiem", this.baoCaoSearch)
        .subscribe(res => {
          let dateTimeNow = new Date();
          CommonService.downLoadFile(res, "application/vnd.ms-excel", "XuatNhapTonKhoXetNghiem" + dateTimeNow.getFullYear() + ".xlsx");
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

  reFresh() {
    this.skip = 0;
    this.XemBaoCao()
  }

  XemBaoCao() {
    if (this.baoCaoSearch.TuNgay == null || this.baoCaoSearch.DenNgay == null) {
      this.notificationService.showError("Từ ngày và đến ngày yêu cầu nhập");
      return;
    }
    if (!this.baoCaoSearch.KhoId) {
      this.notificationService.showError("Vui lòng chọn tủ hóa chất");
      return;
    }

    this.baoCaoSearch.FromDate = this.baoCaoSearch.TuNgay;
    this.baoCaoSearch.ToDate = this.baoCaoSearch.DenNgay;
    this._isLoading = true;
    this._isLoadingTotalPage = true;
    this.apiService.post<any>("BaoCao/GetDataXuatNhapTonKhoXetNghiemForGrid", this.baoCaoSearch).subscribe(resultData => {
      if (resultData !== undefined && resultData != null) {
        this.dataSource = {
          data: resultData.Data,
          total: resultData.TotalRowCount
        };
        var takeTo = +this.skip + +this.pageSize;
        let gridData = this.dataSource.data.slice(this.skip, takeTo);

        this.gridView = process(gridData, { group: this.groups });
        this.gridView.total = this.dataSource.total;

        this._isLoading = false;
        this._isLoadingTotalPage = false;
      }
    });
  }

  changeValueStart() {
    this.minDateDenNgay = new Date();
    if (this.baoCaoSearch.TuNgay != null && this.baoCaoSearch.DenNgay != null
      && this.baoCaoSearch.DenNgay > this.baoCaoSearch.TuNgay) {
      this.baoCaoSearch.DenNgay = this.minDateDenNgay;
    }
  }
}
