import { GridDataResult } from '@progress/kendo-angular-grid';
import { SortDescriptor } from '@progress/kendo-data-query';
import { GridComponent } from 'src/app/shared/component/grid/grid.component';
import { Component, OnInit, TemplateRef, ViewChild, Input, ChangeDetectorRef } from '@angular/core';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import { ApiService } from 'src/app/core/services/api.service';
import { PageChangeEvent } from '@progress/kendo-angular-dropdowns/dist/es2015/common/page-change-event';
declare var jQuery: any;
import { MatDialog } from '@angular/material';
import { NotificationService } from 'src/app/core/services/notification.service';
import icFilterList from '@iconify/icons-ic/twotone-filter-list';
import { BaoCaoTonKhoSearch, ThongTinChiTietXetNghiem } from '../phieu-nhap-hoa-chat-xet-nghiem.model';
import { PhieuNhapHoaChatXetNghiemChiTietPopupComponent } from '../phieu-nhap-hoa-chat-xet-nghiem-chi-tiet-popup/phieu-nhap-hoa-chat-xet-nghiem-chi-tiet-popup.component';
import { ComboboxComponent } from 'src/app/shared/component/dropdowns/combobox/combobox.component';

@Component({
  selector: 'app-phieu-nhap-hoa-chat-xet-nghiem-list',
  templateUrl: './phieu-nhap-hoa-chat-xet-nghiem-list.component.html',
  styleUrls: ['./phieu-nhap-hoa-chat-xet-nghiem-list.component.scss']
})

export class BaoCaoPhieuNhapHoaChatXetNghiemListComponent implements OnInit {
  baoCaoSearch: BaoCaoTonKhoSearch = new BaoCaoTonKhoSearch();
  thongTinChiTietXetNghiem: ThongTinChiTietXetNghiem = new ThongTinChiTietXetNghiem();

  public gridView: GridDataResult;
  public pageSize = 50;
  public skip = 0;
  take: number;

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
  @ViewChild('duocPhamCombobox', { static: false }) duocPhamCombobox: ComboboxComponent;

  public pageChange(event: PageChangeEvent): void {
    this.skip = event.skip;
    if (this.dataSource.data.length == 0) {
      this.XemBaoCao();
    } else {
      if (this.baoCaoSearch.TuNgay == null || this.baoCaoSearch.DenNgay == null) {
        this.notificationService.showError("Từ ngày và đến ngày yêu cầu nhập");
        return;
      }

      if (!this.baoCaoSearch.KhoId) {
        this.notificationService.showError("Vui lòng chọn tủ hóa chất");
        return;
      }

      if (this.baoCaoSearch.DuocPhamId === undefined || this.baoCaoSearch.DuocPhamId === null) {
        this.notificationService.showError("Vui lòng chọn dược phẩm");
        return;
      }

      this._isLoading = true;
      this._isLoadingTotalPage = true;

      this.loadListDanhSachXetNghiem(this.skip, this.skip + this.pageSize);
    }
  }

  constructor(
    private apiService: ApiService,
    private dialog: MatDialog,
    private notificationService: NotificationService,
    private cd: ChangeDetectorRef
  ) { }

  ngOnInit() {
    this.documentType = DocumentType.BaoCaoXNPhieuNhapHoaChat;
    this._showDefaultPagerTemplate = this.showDefaultPagerTemplate;

    this.skip = 0;
    this.take = (this.pageSize * this.skip) + this.pageSize;

    this.gridColumns = [
      { Field: "STT", Title: "STT", Width: 100, Template: this.sttTemplate },
      { Field: "MaDuocPham", Title: "Mã Hóa Chất", Width: 100 },
      { Field: "TenDuocPham", Title: "Tên Hóa Chất", Width: 200 },
      { Field: "DonViTinh", Title: "Đơn Vị Tính", Width: 100 },
      { Field: "TongSoLuongNhap", Title: "Tổng Số Lượng Nhập", Width: 120 },
      { Field: "", Title: "", Width: 120 }
    ];

    this.dataTimeDefaut();
  }

  private dataTimeDefaut() {
    this.minDateTuNgay = new Date();
    this.minDateTuNgay.setHours(0, 0, 0, 0);
    var firstDayOfMonth = new Date(this.minDateTuNgay.getFullYear(), this.minDateTuNgay.getMonth(), 1);

    if (this.baoCaoSearch.TuNgay == null) {
      this.baoCaoSearch.TuNgay = firstDayOfMonth;
    }
    if (this.baoCaoSearch.DenNgay == null) {
      this.baoCaoSearch.DenNgay = new Date();
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

    if (this.baoCaoSearch.DuocPhamId === undefined || this.baoCaoSearch.DuocPhamId === null) {
      this.notificationService.showError("Vui lòng chọn dược phẩm");
      return;
    }

    this.baoCaoSearch.FromDate = this.baoCaoSearch.TuNgay;
    this.baoCaoSearch.ToDate = this.baoCaoSearch.DenNgay;

    this._isLoading = true;
    this._isLoadingTotalPage = true;

    this.loadListDanhSachXetNghiem(0, 50);
  }

  changeValueStart() {
    this.minDateDenNgay = new Date();
    if (this.baoCaoSearch.TuNgay != null && this.baoCaoSearch.DenNgay != null
      && this.baoCaoSearch.DenNgay > this.baoCaoSearch.TuNgay) {
      this.baoCaoSearch.DenNgay = this.minDateDenNgay;
    }
  }

  selectionChangeKhoHoaChat(dataItem: any) {
    if (dataItem != undefined && dataItem != null) {
      this.baoCaoSearch.KhoId = dataItem.KeyId;
      this.baoCaoSearch.DuocPhamId = null;
    }
    else {
      this.baoCaoSearch.KhoId = null;
      this.baoCaoSearch.DuocPhamId = null;
    }

    this.baoCaoSearch.DuocPhamId = 0;
    this.duocPhamCombobox.getDataForLookup();
    this.dataTimeDefaut();
  }

  XemChiTiet(dataItem: any) {
    let self = this;

    self.thongTinChiTietXetNghiem.KhoId = dataItem.KhoId;
    self.thongTinChiTietXetNghiem.TenKho = dataItem.TenKho;
    self.thongTinChiTietXetNghiem.DuocPhamId = dataItem.DuocPhamId;
    self.thongTinChiTietXetNghiem.TenDuocPham = dataItem.TenDuocPham;

    self.thongTinChiTietXetNghiem.TuNgay = this.baoCaoSearch.TuNgay;
    self.thongTinChiTietXetNghiem.DenNgay = this.baoCaoSearch.DenNgay;

    self.dialog.open(PhieuNhapHoaChatXetNghiemChiTietPopupComponent, {
      disableClose: true,
      width: '1200px',
      data: { Model: self.thongTinChiTietXetNghiem }
    }).afterClosed().subscribe(() => {

    });
  }

  private loadListDanhSachXetNghiem(skip, take) {
    this.baoCaoSearch.Skip = skip;
    this.baoCaoSearch.Take = take;
 
    this.apiService.post<any>("BaoCao/GetDataPhieuNhapHoaChatForGrid", this.baoCaoSearch).subscribe(resultData => {
      if (resultData !== undefined && resultData != null) {
        this.dataSource = {
          data: resultData.Data,
          total: resultData.TotalRowCount
        };
 
        this.gridView = this.dataSource;

        this._isLoading = false;
        this._isLoadingTotalPage = false;
      }
    });
  }
}
