import { ChangeDetectorRef, Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
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
import { BaoCaoKeToanNhapXuatTonChiTietSearch, InBaoCaoKeToanNhapXuatTonChiTiet } from '../bao-cao-ke-toan-nhap-xuat-ton-chi-tiet.model';
declare var jQuery: any;
import { process } from '@progress/kendo-data-query';
import icFilterList from '@iconify/icons-ic/twotone-filter-list';
import { PageChangeEvent } from '@progress/kendo-angular-grid';

@Component({
  selector: 'app-bao-cao-ke-toan-nhap-xuat-ton-chi-tiet-list',
  templateUrl: './bao-cao-ke-toan-nhap-xuat-ton-chi-tiet-list.component.html',
  styleUrls: ['./bao-cao-ke-toan-nhap-xuat-ton-chi-tiet-list.component.scss']
})
export class BaoCaoKeToanNhapXuatTonChiTietListComponent implements OnInit {
  baoCaoSearch: BaoCaoKeToanNhapXuatTonChiTietSearch = new BaoCaoKeToanNhapXuatTonChiTietSearch();
  inBaoCaoKeToanNhapXuatTonChiTiet: InBaoCaoKeToanNhapXuatTonChiTiet = new InBaoCaoKeToanNhapXuatTonChiTiet();

  documentType: DocumentType
  minDateTuNgay: any

  disableCoVAT = false;
  gridColumns: any = []
  gridDataSource: any = {
    data: [],
    total: 0
  };
  public aggregates: any[] = [
    { field: 'ThanhTienTonDauKy', aggregate: 'sum' },
    { field: 'ThanhTienNhapMuaNCCTrongKy', aggregate: 'sum' },
    { field: 'ThanhTienNhapTangKiemKeTrongKy', aggregate: 'sum' },
    { field: 'ThanhTienNhapHoanTraTrongKy', aggregate: 'sum' },
    { field: 'ThanhTienNhapNoiBoTrongKy', aggregate: 'sum' },
    { field: 'ThanhTienNhapKhacTrongKy', aggregate: 'sum' },
    { field: 'ThanhTienXuatNoiBoTrongKy', aggregate: 'sum' },
    { field: 'ThanhTienXuatGiamKiemKeTrongKy', aggregate: 'sum' },
    { field: 'ThanhTienXuatTraNCCTrongKy', aggregate: 'sum' },
    { field: 'ThanhTienXuatBNTrongKy', aggregate: 'sum' },
    { field: 'ThanhTienXuatKHTrongKy', aggregate: 'sum' },
    { field: 'ThanhTienXuatKhacTrongKy', aggregate: 'sum' },
    { field: 'ThanhTienTonCuoiKy', aggregate: 'sum' },
  ];

  public groups: GroupDescriptor[] = [{
    field: 'Khoa'
  }, {
    field: 'Nhom',
    aggregates: this.aggregates
  }];
  showGrid: boolean = false;
  showPrintExport: boolean = false;
  icFilterList = icFilterList;
  gridView: DataResult;
  heightToolbar: number = 140;
  height: number;
  public pageSize = 50;
  public skip = 0;
  _isLoading: boolean = false;
  _isLoadingTotalPage: boolean = false;
  _showDefaultPagerTemplate: boolean = true;

  @ViewChild("khoaGroupHeaderTemplate", { static: true }) khoaGroupHeaderTemplate: TemplateRef<any>;
  @ViewChild("nhomGroupHeaderTemplate", { static: true }) nhomGroupHeaderTemplate: TemplateRef<any>;

  @ViewChild("thanhTienTonDauKyTemplate", { static: true }) thanhTienTonDauKyTemplate: TemplateRef<any>;
  @ViewChild("thanhTienNhapMuaNCCTrongKyTemplate", { static: true }) thanhTienNhapMuaNCCTrongKyTemplate: TemplateRef<any>;
  @ViewChild("thanhTienNhapTangKiemKeTrongKyTemplate", { static: true }) thanhTienNhapTangKiemKeTrongKyTemplate: TemplateRef<any>;
  @ViewChild("thanhTienNhapHoanTraTrongKyTemplate", { static: true }) thanhTienNhapHoanTraTrongKyTemplate: TemplateRef<any>;
  @ViewChild("thanhTienNhapNoiBoTrongKyTemplate", { static: true }) thanhTienNhapNoiBoTrongKyTemplate: TemplateRef<any>;
  @ViewChild("thanhTienNhapKhacTrongKyTemplate", { static: true }) thanhTienNhapKhacTrongKyTemplate: TemplateRef<any>;
  @ViewChild("thanhTienXuatNoiBoTrongKyTemplate", { static: true }) thanhTienXuatNoiBoTrongKyTemplate: TemplateRef<any>;
  @ViewChild("thanhTienXuatGiamKiemKeTrongKyTemplate", { static: true }) thanhTienXuatGiamKiemKeTrongKyTemplate: TemplateRef<any>;
  @ViewChild("thanhTienXuatTraNCCTrongKyTemplate", { static: true }) thanhTienXuatTraNCCTrongKyTemplate: TemplateRef<any>;
  @ViewChild("thanhTienXuatBNTrongKyTemplate", { static: true }) thanhTienXuatBNTrongKyTemplate: TemplateRef<any>;
  @ViewChild("thanhTienXuatKHTrongKyTemplate", { static: true }) thanhTienXuatKHTrongKyTemplate: TemplateRef<any>;
  @ViewChild("thanhTienXuatKhacTrongKyTemplate", { static: true }) thanhTienXuatKhacTrongKyTemplate: TemplateRef<any>;
  @ViewChild("thanhTienTonCuoiKyTemplate", { static: true }) thanhTienTonCuoiKyTemplate: TemplateRef<any>;

  @ViewChild("thanhTienTonDauKyGroupHeaderColumnTemplate", { static: true }) thanhTienTonDauKyGroupHeaderColumnTemplate: TemplateRef<any>;
  @ViewChild("thanhTienNhapMuaNCCTrongKyGroupHeaderColumnTemplate", { static: true }) thanhTienNhapMuaNCCTrongKyGroupHeaderColumnTemplate: TemplateRef<any>;
  @ViewChild("thanhTienNhapTangKiemKeTrongKyGroupHeaderColumnTemplate", { static: true }) thanhTienNhapTangKiemKeTrongKyGroupHeaderColumnTemplate: TemplateRef<any>;
  @ViewChild("thanhTienNhapHoanTraTrongKyGroupHeaderColumnTemplate", { static: true }) thanhTienNhapHoanTraTrongKyGroupHeaderColumnTemplate: TemplateRef<any>;
  @ViewChild("thanhTienNhapNoiBoTrongKyGroupHeaderColumnTemplate", { static: true }) thanhTienNhapNoiBoTrongKyGroupHeaderColumnTemplate: TemplateRef<any>;
  @ViewChild("thanhTienNhapKhacTrongKyGroupHeaderColumnTemplate", { static: true }) thanhTienNhapKhacTrongKyGroupHeaderColumnTemplate: TemplateRef<any>;
  @ViewChild("thanhTienXuatNoiBoTrongKyGroupHeaderColumnTemplate", { static: true }) thanhTienXuatNoiBoTrongKyGroupHeaderColumnTemplate: TemplateRef<any>;
  @ViewChild("thanhTienXuatGiamKiemKeTrongKyGroupHeaderColumnTemplate", { static: true }) thanhTienXuatGiamKiemKeTrongKyGroupHeaderColumnTemplate: TemplateRef<any>;
  @ViewChild("thanhTienXuatTraNCCTrongKyGroupHeaderColumnTemplate", { static: true }) thanhTienXuatTraNCCTrongKyGroupHeaderColumnTemplate: TemplateRef<any>;
  @ViewChild("thanhTienXuatBNTrongKyGroupHeaderColumnTemplate", { static: true }) thanhTienXuatBNTrongKyGroupHeaderColumnTemplate: TemplateRef<any>;
  @ViewChild("thanhTienXuatKHTrongKyGroupHeaderColumnTemplate", { static: true }) thanhTienXuatKHTrongKyGroupHeaderColumnTemplate: TemplateRef<any>;
  @ViewChild("thanhTienXuatKhacTrongKyGroupHeaderColumnTemplate", { static: true }) thanhTienXuatKhacTrongKyGroupHeaderColumnTemplate: TemplateRef<any>;
  @ViewChild("thanhTienTonCuoiKyGroupHeaderColumnTemplate", { static: true }) thanhTienTonCuoiKyGroupHeaderColumnTemplate: TemplateRef<any>;

  constructor(
    private apiService: ApiService,
    private dialog: MatDialog,
    private authService: AuthService,
    private notificationService: NotificationService,
    private cd: ChangeDetectorRef
  ) { }

  ngOnInit() {
    this.documentType = DocumentType.BaoCaoKTNhapXuatTonChiTiet;

    if (window.location.protocol == "http:") {
      this.inBaoCaoKeToanNhapXuatTonChiTiet.HostingName = "http://" + window.location.host;
    } else {
      this.inBaoCaoKeToanNhapXuatTonChiTiet.HostingName = "https://" + window.location.host;
    }

    this.gridColumns = [
      { Field: "STT", Title: "STT", Width: 200 },
      { Field: "Ma", Title: "Mã", Width: 150 },
      { Field: "Ten", Title: "Tên", Width: 150 },
      { Field: "DVT", Title: "ĐVT", Width: 100 },
      { Field: "SLTonDauKy", Title: "SL", Width: 100 },
      { Field: "ThanhTienTonDauKy", Title: "TT", Width: 150 },
      { Field: "SLNhapMuaNCCTrongKy", Title: "SL", Width: 100 },
      { Field: "ThanhTienNhapMuaNCCTrongKy", Title: "TT", Width: 150, Template: this.thanhTienNhapMuaNCCTrongKyTemplate, TemplateGroupHeaderColumn: this.thanhTienNhapMuaNCCTrongKyGroupHeaderColumnTemplate },
      { Field: "SLNhapTangKiemKeTrongKy", Title: "SL", Width: 100 },
      { Field: "ThanhTienNhapTangKiemKeTrongKy", Title: "TT", Width: 150, Template: this.thanhTienNhapTangKiemKeTrongKyTemplate, TemplateGroupHeaderColumn: this.thanhTienNhapTangKiemKeTrongKyGroupHeaderColumnTemplate },
      { Field: "SLNhapHoanTraTrongKy", Title: "SL", Width: 100 },
      { Field: "ThanhTienNhapHoanTraTrongKy", Title: "TT", Width: 150, Template: this.thanhTienNhapHoanTraTrongKyTemplate, TemplateGroupHeaderColumn: this.thanhTienNhapHoanTraTrongKyGroupHeaderColumnTemplate },
      { Field: "SLNhapNoiBoTrongKy", Title: "SL", Width: 100 },
      { Field: "ThanhTienNhapNoiBoTrongKy", Title: "TT", Width: 150, Template: this.thanhTienNhapNoiBoTrongKyTemplate, TemplateGroupHeaderColumn: this.thanhTienNhapNoiBoTrongKyGroupHeaderColumnTemplate },
      { Field: "SLNhapKhacTrongKy", Title: "SL", Width: 100 },
      { Field: "ThanhTienNhapKhacTrongKy", Title: "TT", Width: 150, Template: this.thanhTienNhapKhacTrongKyTemplate, TemplateGroupHeaderColumn: this.thanhTienNhapKhacTrongKyGroupHeaderColumnTemplate },
      { Field: "SLXuatNoiBoTrongKy", Title: "SL", Width: 100 },
      { Field: "ThanhTienXuatNoiBoTrongKy", Title: "TT", Width: 150, Template: this.thanhTienXuatNoiBoTrongKyTemplate, TemplateGroupHeaderColumn: this.thanhTienXuatNoiBoTrongKyGroupHeaderColumnTemplate },
      { Field: "SLXuatGiamKiemKeTrongKy", Title: "SL", Width: 100 },
      { Field: "ThanhTienXuatGiamKiemKeTrongKy", Title: "TT", Width: 150, Template: this.thanhTienXuatGiamKiemKeTrongKyTemplate, TemplateGroupHeaderColumn: this.thanhTienXuatGiamKiemKeTrongKyGroupHeaderColumnTemplate },
      { Field: "SLXuatTraNCCTrongKy", Title: "SL", Width: 100 },
      { Field: "ThanhTienXuatTraNCCTrongKy", Title: "TT", Width: 150, Template: this.thanhTienXuatTraNCCTrongKyTemplate, TemplateGroupHeaderColumn: this.thanhTienXuatTraNCCTrongKyGroupHeaderColumnTemplate },
      { Field: "SLXuatBNTrongKy", Title: "SL", Width: 100 },
      { Field: "ThanhTienXuatBNTrongKy", Title: "TT", Width: 150, Template: this.thanhTienXuatBNTrongKyTemplate, TemplateGroupHeaderColumn: this.thanhTienXuatBNTrongKyGroupHeaderColumnTemplate },
      { Field: "SLXuatKHTrongKy", Title: "SL", Width: 100 },
      { Field: "ThanhTienXuatKHTrongKy", Title: "TT", Width: 150, Template: this.thanhTienXuatKHTrongKyTemplate, TemplateGroupHeaderColumn: this.thanhTienXuatKHTrongKyGroupHeaderColumnTemplate },
      { Field: "SLXuatKhacTrongKy", Title: "SL", Width: 100 },
      { Field: "ThanhTienXuatKhacTrongKy", Title: "TT", Width: 150, Template: this.thanhTienNhapMuaNCCTrongKyTemplate, TemplateGroupHeaderColumn: this.thanhTienXuatKhacTrongKyGroupHeaderColumnTemplate },
      { Field: "SLTonCuoiKy", Title: "SL", Width: 100 },
      { Field: "ThanhTienTonCuoiKy", Title: "TT", Width: 150, Template: this.thanhTienTonCuoiKyTemplate, TemplateGroupHeaderColumn: this.thanhTienTonCuoiKyGroupHeaderColumnTemplate },
      { Field: "Khoa", Title: "Khoa", Width: 300, Sortable: true, Hidden: true, TemplateGroupHeader: this.khoaGroupHeaderTemplate },
      { Field: "Nhom", Title: "Nhóm", Width: 300, Sortable: true, Hidden: true, TemplateGroupHeader: this.nhomGroupHeaderTemplate },
    ]

    this.minDateTuNgay = new Date();
    this.minDateTuNgay.setHours(0, 0, 0, 0);
    var firstDayOfMonth = new Date(this.minDateTuNgay.getFullYear(), this.minDateTuNgay.getMonth(), 1);     

    if (this.baoCaoSearch.TuNgayFormat == null) {
      this.baoCaoSearch.TuNgayFormat = firstDayOfMonth;
    }
    if (this.baoCaoSearch.DenNgayFormat == null) {
      this.baoCaoSearch.DenNgayFormat = new Date();
      this.baoCaoSearch.DenNgayFormat.setHours(23, 59, 59);
    }

    this.baoCaoSearch.CoVAT = true;
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

  getSumThanhTien(value) {
    if (this.gridView && value) {
      return value.sum
    }
  }

  public totalThanhTien(field: any) {
    switch (field) {
      case 'ThanhTienTonDauKy':
        if (this.gridDataSource.data != undefined) {
          return this.gridDataSource.data.reduce((sum, item) => sum + item.ThanhTienTonDauKy, 0);
        }
      case 'ThanhTienNhapMuaNCCTrongKy':
        if (this.gridDataSource.data != undefined) {
          return this.gridDataSource.data.reduce((sum, item) => sum + item.ThanhTienNhapMuaNCCTrongKy, 0);
        }
      case 'ThanhTienNhapTangKiemKeTrongKy':
        if (this.gridDataSource.data != undefined) {
          return this.gridDataSource.data.reduce((sum, item) => sum + item.ThanhTienNhapTangKiemKeTrongKy, 0);
        }
      case 'ThanhTienNhapHoanTraTrongKy':
        if (this.gridDataSource.data != undefined) {
          return this.gridDataSource.data.reduce((sum, item) => sum + item.ThanhTienNhapHoanTraTrongKy, 0);
        }
      case 'ThanhTienNhapNoiBoTrongKy':
        if (this.gridDataSource.data != undefined) {
          return this.gridDataSource.data.reduce((sum, item) => sum + item.ThanhTienNhapNoiBoTrongKy, 0);
        }
      case 'ThanhTienNhapKhacTrongKy':
        if (this.gridDataSource.data != undefined) {
          return this.gridDataSource.data.reduce((sum, item) => sum + item.ThanhTienNhapKhacTrongKy, 0);
        }
      case 'ThanhTienXuatNoiBoTrongKy':
        if (this.gridDataSource.data != undefined) {
          return this.gridDataSource.data.reduce((sum, item) => sum + item.ThanhTienXuatNoiBoTrongKy, 0);
        }
      case 'ThanhTienXuatGiamKiemKeTrongKy':
        if (this.gridDataSource.data != undefined) {
          return this.gridDataSource.data.reduce((sum, item) => sum + item.ThanhTienXuatGiamKiemKeTrongKy, 0);
        }
      case 'ThanhTienXuatTraNCCTrongKy':
        if (this.gridDataSource.data != undefined) {
          return this.gridDataSource.data.reduce((sum, item) => sum + item.ThanhTienXuatTraNCCTrongKy, 0);
        }
      case 'ThanhTienXuatBNTrongKy':
        if (this.gridDataSource.data != undefined) {
          return this.gridDataSource.data.reduce((sum, item) => sum + item.ThanhTienXuatBNTrongKy, 0);
        }
      case 'ThanhTienXuatKHTrongKy':
        if (this.gridDataSource.data != undefined) {
          return this.gridDataSource.data.reduce((sum, item) => sum + item.ThanhTienXuatKHTrongKy, 0);
        }
      case 'ThanhTienXuatKhacTrongKy':
        if (this.gridDataSource.data != undefined) {
          return this.gridDataSource.data.reduce((sum, item) => sum + item.ThanhTienXuatKhacTrongKy, 0);
        }
      case 'ThanhTienTonCuoiKy':
        if (this.gridDataSource.data != undefined) {
          return this.gridDataSource.data.reduce((sum, item) => sum + item.ThanhTienTonCuoiKy, 0);
        }
    }
  };

  public pageChange(event: PageChangeEvent): void {
    this.baoCaoSearch.Skip = event.skip;
    this.skip = event.skip;
    this.XemBaoCao();
  }

  changeKhoa(event) {    
    if (event != undefined && event != null) {
      this.baoCaoSearch.KhoaPhongId = event;
    }
    else {
      this.baoCaoSearch.KhoaPhongId = null;
      this.baoCaoSearch.KhoId = null;
    }
  }

  changeKho(event) {
    if (event && event == 6) {// kho nhà thuốc bệnh viện
      this.disableCoVAT = true;
      this.baoCaoSearch.CoVAT = false;
    }
    else {
      this.disableCoVAT = false;
    }
  }
  XemBaoCao() {
    this._isLoading = true;
    this._isLoadingTotalPage = true;
    if (this.baoCaoSearch.TuNgayFormat == null || this.baoCaoSearch.DenNgayFormat == null) {
      this.notificationService.showError("Từ ngày và đến ngày yêu cầu nhập");
      this._isLoading = false;
      this._isLoadingTotalPage = false;
      return;
    }
    this.baoCaoSearch.FromDate = this.baoCaoSearch.TuNgayFormat;
    this.baoCaoSearch.ToDate = this.baoCaoSearch.DenNgayFormat;

    if (!this.baoCaoSearch.KhoId) {
      this.notificationService.showError("Kho yêu cầu nhập");
      this._isLoading = false;
      this._isLoadingTotalPage = false;
      return;
    }

    this.apiService.post<any>("BaoCao/GetDataBaoCaoKTNhapXuatTonChiTietForGridAsync", this.baoCaoSearch).subscribe(resultData => {
      if (resultData !== undefined && resultData != null) {
        if (resultData.TotalRowCount !== undefined && resultData.TotalRowCount != 0) {
          this.showPrintExport = true;
        }
        // this.showGrid = true;
        this.gridDataSource.data = [...resultData.Data];
        this.gridDataSource.total = this.gridDataSource.data.length;
        this.gridView = process(resultData.Data, { group: this.groups });
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
    if (this.baoCaoSearch.KhoId == undefined && this.baoCaoSearch.KhoId == null) {
      this.notificationService.showError("Kho yêu cầu nhập");
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
      let khoId = 0;
      if (this.baoCaoSearch.KhoId != undefined && this.baoCaoSearch.KhoId != null) {
        khoId = this.baoCaoSearch.KhoId;
      }
      this.baoCaoSearch.FromDate = this.baoCaoSearch.TuNgayFormat;
      this.baoCaoSearch.ToDate = this.baoCaoSearch.DenNgayFormat;
      this.baoCaoSearch.AdditionalSearchString = khoId + ";0;" + tuNgay + ";" + denNgay + ";" + this.inBaoCaoKeToanNhapXuatTonChiTiet.HostingName;
      this.apiService.postExportExcel<any>("BaoCao/ExportBaoCaoKTNhapXuatTonChiTiet", this.baoCaoSearch)
        .subscribe(res => {
          let dateTimeNow = new Date();
          CommonService.downLoadFile(res, "application/vnd.ms-excel", "BaoCaoKTNhapXuatTonChiTiet" + dateTimeNow.getFullYear() + ".xlsx");
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
