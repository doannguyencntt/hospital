import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import icClose from '@iconify/icons-ic/twotone-close';
import icSearch from '@iconify/icons-ic/twotone-search';
import icRestore from '@iconify/icons-ic/restore';
import icDelete from '@iconify/icons-ic/delete';
import icAdd from '@iconify/icons-ic/twotone-add';
import icFilterList from '@iconify/icons-ic/twotone-filter-list';
import { GroupDescriptor, SortDescriptor } from '@progress/kendo-data-query';
import { CommonService } from 'src/app/core/utilities/common.helper';
import { GridComponent } from 'src/app/shared/component/grid/grid.component';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import { CongNoBaoHiemTuNhanTimKiem } from 'src/app/modules/main/ke-toan/cong-no-bao-hiem-tu-nhan/cong-no-bao-hiem-tu-nhan.model';
import { GridDataResult, PageChangeEvent } from '@progress/kendo-angular-grid';
import { ApiService } from 'src/app/core/services/api.service';
import { GridQueryInfo } from 'src/app/shared/component/grid/grid.model';
import icFileExcel from '@iconify/icons-fa-solid/file-excel';
import { MatDialog } from '@angular/material';
import { LoadingComponent } from 'src/app/shared/component/dialogs/loading/loading.component';
import { SecurityOperation } from 'src/app/shared/enum/security-operation.enum';
import { SystemMessage } from 'src/app/shared/configdata/system-message';
import { NotificationService } from 'src/app/core/services/notification.service';
import { AuthService } from 'src/app/core/services/auth.service';
import { ApiError } from 'src/app/shared/models/api-error.model';
import { ActivatedRoute, Router } from '@angular/router';
import { LocalStorageHelper } from 'src/app/core/utilities/local-storage.helper';
import { Location } from '@angular/common';
declare var jQuery: any;

@Component({
  selector: 'app-bao-cao-cong-no-bao-hiem-tu-nhan-list',
  templateUrl: './bao-cao-cong-no-bao-hiem-tu-nhan-list.component.html',
  styleUrls: ['./bao-cao-cong-no-bao-hiem-tu-nhan-list.component.scss']
})
export class BaoCaoCongNoBaoHiemTuNhanListComponent implements OnInit {

  icClose = icClose;
  icSearch = icSearch;
  icRestore = icRestore;
  icDelete = icDelete;
  icAdd = icAdd;
  icFileExcel = icFileExcel;
  icFilterList = icFilterList;

  documentType: DocumentType;
  gridColumns: any[] = [];
  groups: GroupDescriptor[] = [{ field: 'TaiKhoan', dir: null, aggregates: [{ field: 'PhatSinhNo', aggregate: 'sum' }, { field: 'PhatSinhCo', aggregate: 'sum' }] }];
  searchCtrl = new FormControl();
  timKiemNangCaoObj: CongNoBaoHiemTuNhanTimKiem = new CongNoBaoHiemTuNhanTimKiem();
  baseRoute: string = "/bao-cao/gach-no/bao-cao-cong-no-bao-hiem-tu-nhan";

  public gridView: GridDataResult;
  public gridViewDetail: GridDataResult;
  public gridData: any[] = [];
  public gridDataDetail: any[] = [];

  queryString: string;
  public gridQueryInfo: GridQueryInfo;
  public pageSize = 50;
  public skip = 0;
  public take = 50;
  sort: SortDescriptor[] = [{
    field: 'TenCongTy',
    dir: 'asc'
  }];

  height: number;
  ishowViewData: boolean = false;
  _isLoading: boolean = false;
  _isMessage : boolean = false;
  ishowView: boolean = false;
  _isLoadingTotalPage: boolean = false;
  _isCheckColumnFilter: boolean = true;
  _gridColumnsFilter: any[] = [];

  totalPhatSinhNo: number = 0;
  totalPhatSinhCo: number = 0;
  totalCuoiKyNo: number = 0;

  @ViewChild('sttTemplate', { static: true }) sttTemplate: TemplateRef<any>;
  @ViewChild('ngayChungTuTemplate', { static: true }) ngayChungTuTemplate: TemplateRef<any>;
  @ViewChild('ngayHopDongTemplate', { static: true }) ngayHopDongTemplate: TemplateRef<any>;

  @ViewChild('maTiepNhantemplate', { static: true }) maTiepNhantemplate: TemplateRef<any>;
  
  @ViewChild('phatSinhNoTemplate', { static: true }) phatSinhNoTemplate: TemplateRef<any>;
  @ViewChild('phatSinhCoTemplate', { static: true }) phatSinhCoTemplate: TemplateRef<any>;
  @ViewChild('phatSinhNoGroupFooterTemplate', { static: true }) phatSinhNoGroupFooterTemplate: TemplateRef<any>;
  @ViewChild('phatSinhCoGroupFooterTemplate', { static: true }) phatSinhCoGroupFooterTemplate: TemplateRef<any>;
  @ViewChild('phatSinhNoFooterTemplate', { static: true }) phatSinhNoFooterTemplate: TemplateRef<any>;
  @ViewChild('phatSinhCoFooterTemplate', { static: true }) phatSinhCoFooterTemplate: TemplateRef<any>;

  @ViewChild('dauKyNoTemplate', { static: true }) dauKyNoTemplate: TemplateRef<any>;
  @ViewChild('dauKyCoTemplate', { static: true }) dauKyCoTemplate: TemplateRef<any>;
  @ViewChild('cuoiKyNoTemplate', { static: true }) cuoiKyNoTemplate: TemplateRef<any>;
  @ViewChild('cuoiKyCoTemplate', { static: true }) cuoiKyCoTemplate: TemplateRef<any>;

  @ViewChild('actionTemplate', { static: true }) actionTemplate: TemplateRef<any>;
  @ViewChild('baoCaoCongNoCongTyBhtn', { static: true }) gridMaster: any;
  constructor(
    private apiService: ApiService,
    private dialog: MatDialog,
    private authService: AuthService, 
    private notificationService: NotificationService,
    private router: Router,
    private route: ActivatedRoute,
    private location: Location) { }

  ngOnInit() {
    this.documentType = DocumentType.BaoCaoCongNoCongTyBhtn;

    this.gridColumns = [
      { Field: "STT", Title: "#", Width: 20, Template: this.sttTemplate }, //0
      { Field: "TaiKhoan", Title: "Tài khoản", Width: 100 }, //1
      { Field: "MaTiepNhan", Title: "Mã TN", Width: 120, Template: this.maTiepNhantemplate}, //2
      { Field: "SoChungTu", Title: "Số CT", Width: 120}, //3
      { Field: "NgayChungTu", Title: "Ngày CT", Width: 100, Template: this.ngayChungTuTemplate}, //4
      { Field: "SoHoaDon", Title: "Số HĐ", Width: 120},//5
      { Field: "NgayHoaDon", Title: "Ngày HĐ", Width: 100, Template: this.ngayHopDongTemplate},//6
      { Field: "DienGiai", Title: "Diễn giải", Width: 180 },//7
      { Field: "MaTienTe", Title: "Mã tiền tệ", Width: 100 },//8

      { Field: "PhatSinhNo", Title: "Phát sinh nợ", Width: 140, Template: this.phatSinhNoTemplate},//9
      { Field: "PhatSinhCo", Title: "Phát sinh có", Width: 140, Template: this.phatSinhCoTemplate},//10
      { Field: "DauKyNo", Title: "Đầu kỳ nợ", Width: 140, Template: this.dauKyNoTemplate},//11
      { Field: "DauKyCo", Title: "Đầu kỳ có", Width: 140, Template: this.dauKyCoTemplate},//12
      { Field: "CuoiKyNo", Title: "Cuối kỳ nợ", Width: 140, Template: this.cuoiKyNoTemplate},//13
      { Field: "CuoiKyCo", Title: "Cuối kỳ có", Width: 140, Template: this.cuoiKyCoTemplate}//14
    ];

    this._gridColumnsFilter = this.gridColumns.filter(p => p.Title != '');

    let minDateTuNgay = new Date();
    minDateTuNgay.setHours(0,0,0,0);

    let hasLocalSearchString = false;
    if (this.route.snapshot.queryParams.holdQuery != undefined) {
      let holdQuery = this.route.snapshot.queryParams.holdQuery;
      if (holdQuery != null && holdQuery) {
        var additionalSearchString = LocalStorageHelper.getItem<string>("additionalSearchStringBaoCaoCongNoCongTyBHTNList");
        if (additionalSearchString != null) {
          this.timKiemNangCaoObj = JSON.parse(additionalSearchString);
          if(this.timKiemNangCaoObj.TuNgayDenNgay.TuNgay != null && this.timKiemNangCaoObj.TuNgayDenNgay.TuNgay != 'null' && this.timKiemNangCaoObj.TuNgayDenNgay.TuNgay != '')
          {
            this.timKiemNangCaoObj.TuNgayDenNgay.startDate = new Date(this.timKiemNangCaoObj.TuNgayDenNgay.startDate);
          }
          if(this.timKiemNangCaoObj.TuNgayDenNgay.DenNgay != null && this.timKiemNangCaoObj.TuNgayDenNgay.DenNgay != 'null' && this.timKiemNangCaoObj.TuNgayDenNgay.DenNgay != '')
          {
            this.timKiemNangCaoObj.TuNgayDenNgay.endDate = new Date(this.timKiemNangCaoObj.TuNgayDenNgay.endDate);
          }
          this.queryString = additionalSearchString;
          hasLocalSearchString = true;
          this.timKiemNangCao();
        }
      }
    }
    if(!hasLocalSearchString)
    {
      LocalStorageHelper.removeItem("additionalSearchStringBaoCaoCongNoCongTyBHTNList");
      this.timKiemNangCaoObj.TuNgayDenNgayCT.startDate
        = this.timKiemNangCaoObj.TuNgayDenNgayHD.startDate
        = this.timKiemNangCaoObj.TuNgayDenNgayCT.endDate
        = this.timKiemNangCaoObj.TuNgayDenNgayHD.endDate
        //= this.timKiemNangCaoObj.TuNgayDenNgay.startDate
        = this.timKiemNangCaoObj.TuNgayDenNgay.endDate
        = minDateTuNgay;

      var firstDay = new Date(minDateTuNgay.getFullYear(), minDateTuNgay.getMonth(), 1);
      this.timKiemNangCaoObj.TuNgayDenNgay.startDate = firstDay;
    }
  }

  ngAfterContentInit() {
    var self = this;
    self.height = jQuery(window).height() - 180;
    if (self.height < 400)
      self.height = 400;
    jQuery(window).resize(function () {
      self.height = jQuery(window).height() - 180;
      if (self.height < 400)
        self.height = 400;
    });
  }

  searchChanges(event){
    if(event != undefined && (event == null || event == ""))
    {
      this.timKiemNangCao();
    }
  }

  onKey(event: any) {
    if (event.key == "Enter") {
      this.timKiemNangCao();
    }
  }

  clearSearch() {
    this.timKiemNangCaoObj.SearchString = null;
    this.timKiemNangCao();
  }

  timKiemNangCao(refresh: boolean = false){
    this.location.replaceState(this.baseRoute + '?holdQuery=true');
    this._isMessage = true;
    this._isLoading = true;

    // // kiểm tra ngày CT
    // if (this.timKiemNangCaoObj.TuNgayDenNgayCT != null && this.timKiemNangCaoObj.TuNgayDenNgayCT.startDate != null) {
    //   this.timKiemNangCaoObj.TuNgayDenNgayCT.TuNgay = CommonService.formatDateTime(this.timKiemNangCaoObj.TuNgayDenNgayCT.startDate, "mm/dd/yyyy");
    // }
    // else {
    //   this.timKiemNangCaoObj.TuNgayDenNgayCT.TuNgay = null;
    // }
    // if (this.timKiemNangCaoObj.TuNgayDenNgayCT != null && this.timKiemNangCaoObj.TuNgayDenNgayCT.endDate != null) {
    //   this.timKiemNangCaoObj.TuNgayDenNgayCT.DenNgay = CommonService.formatDateTime(this.timKiemNangCaoObj.TuNgayDenNgayCT.endDate, "mm/dd/yyyy");
    // }
    // else
    // {
    //   this.timKiemNangCaoObj.TuNgayDenNgayCT.DenNgay = null;
    // }

    // // kiểm tra ngày HD
    // if (this.timKiemNangCaoObj.TuNgayDenNgayHD != null && this.timKiemNangCaoObj.TuNgayDenNgayHD.startDate != null) {
    //   this.timKiemNangCaoObj.TuNgayDenNgayHD.TuNgay = CommonService.formatDateTime(this.timKiemNangCaoObj.TuNgayDenNgayHD.startDate, "mm/dd/yyyy");
    // }
    // else {
    //   this.timKiemNangCaoObj.TuNgayDenNgayHD.TuNgay = null;
    // }
    // if (this.timKiemNangCaoObj.TuNgayDenNgayHD != null && this.timKiemNangCaoObj.TuNgayDenNgayHD.endDate != null) {
    //   this.timKiemNangCaoObj.TuNgayDenNgayHD.DenNgay = CommonService.formatDateTime(this.timKiemNangCaoObj.TuNgayDenNgayHD.endDate, "mm/dd/yyyy");
    // }
    // else
    // {
    //   this.timKiemNangCaoObj.TuNgayDenNgayHD.DenNgay = null;
    // }

    if (this.timKiemNangCaoObj.TuNgayDenNgay != null && this.timKiemNangCaoObj.TuNgayDenNgay.startDate != null) {
      this.timKiemNangCaoObj.TuNgayDenNgay.TuNgay = CommonService.formatDateTime(this.timKiemNangCaoObj.TuNgayDenNgay.startDate, "mm/dd/yyyy");
    }
    else {
      this.timKiemNangCaoObj.TuNgayDenNgay.TuNgay = null;
    }
    if (this.timKiemNangCaoObj.TuNgayDenNgay != null && this.timKiemNangCaoObj.TuNgayDenNgay.endDate != null) {
      this.timKiemNangCaoObj.TuNgayDenNgay.DenNgay = CommonService.formatDateTime(this.timKiemNangCaoObj.TuNgayDenNgay.endDate, "mm/dd/yyyy");
    }
    else
    {
      this.timKiemNangCaoObj.TuNgayDenNgay.DenNgay = null;
    }

    if(!refresh)
    {
      this.queryString = JSON.stringify(this.timKiemNangCaoObj);
    }

    LocalStorageHelper.setItem("additionalSearchStringBaoCaoCongNoCongTyBHTNList", this.queryString);

    let searchText = this.timKiemNangCaoObj.SearchString != undefined ? this.timKiemNangCaoObj.SearchString : '';
        searchText = CommonService.convertSpecialXML(searchText);
        searchText = '<SearchTerms>' + searchText + '</SearchTerms>';
        searchText = btoa(unescape(encodeURIComponent('<AdvancedQueryParameters>' + searchText + '</AdvancedQueryParameters>')));
    let queryInfo = { skip: this.skip, take: this.pageSize, pageSize: this.pageSize, searchString: searchText, additionalSearchString: this.queryString, sort: this.sort, lazyLoadPage: true };

    this._isLoadingTotalPage = true;
    this.apiService.post<any>("GachNo/GetBaoCaoGachNoCongTyBaoHiemTuNhan", queryInfo).subscribe(resultData => {
      if (resultData !== undefined && resultData != null) {
        var dataSource = resultData.DataSource;
        this.totalPhatSinhNo = resultData.TotalPhatSinhNo;
        this.totalPhatSinhCo = resultData.TotalPhatSinhCo;
        this.totalCuoiKyNo = resultData.TotalCuoiKyNo;

        this.gridView = {
          data: dataSource.Data,
          total: dataSource.TotalRowCount
        };
        this.gridView.data.forEach((item, idx) => {
          this.gridMaster.collapseRow(idx);
      });
      if(this.gridView.data  == null)
         this._isMessage = true;
      }

      if (this.gridView.total != 0){
        this.ishowView = true;
        } else{
          this.ishowView = false;
        }
        
        this._isLoading = false;
        this._isLoadingTotalPage = false;
    },
    (err: ApiError) => {
      if (err.Message != "Validation Failed") {
        this.notificationService.showError(err.Message);
      }
      this._isLoading = false;
      this._isLoadingTotalPage = false;
    });
  }

  columnResize(event: any): void {
    //khi resize column parent thì column child cũng resize theo
    if (event != null && event.length > 0) {
      event.forEach(element => {
        var columnIndex = this.gridColumns.findIndex(x => x.Field === element.column.field);
        if (columnIndex >= 0) {
          this.gridColumns[columnIndex].Width = element.newWidth;
          if (jQuery(".k-detail-cell .k-grid-table").find("col") != undefined && jQuery(".k-detail-cell .k-grid-table").find("col").length > 0) {
            jQuery(jQuery(".k-detail-cell .k-grid-table").find("col")[columnIndex]).css({ width: element.newWidth });
          }
        }
      });
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
    var widthParent = jQuery("#baoCaoCongNoCongTyBhtn").parent().width();
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

  public pageChange(event: PageChangeEvent): void {
    this.skip = event.skip;
    this.timKiemNangCao();
  }

  exportExcel(){
    this.dialog.open(LoadingComponent, {
      disableClose: true,
      width: '200px',
      height: '90px',
      data: { Title: 'Đang xuất excel...' }
    });
    
    if(this.authService.hasPermission(this.documentType, SecurityOperation.Process)) {
      var queryGridInfo = new GridQueryInfo(this.skip, this.pageSize, this.pageSize, "", this.queryString, this.sort, true);
      this.apiService.postExportExcel<string>("GachNo/ExportBaoCaoCongNoCongTyBaoHiemTuNhan", queryGridInfo).subscribe(res => {
        let dateTimeNow = new Date();
        CommonService.downLoadFile(res, "application/vnd.ms-excel", "BaoCaoCongNoCongTyBaoHiemTuNhan" + dateTimeNow.getFullYear() + ".xlsx");
        this.dialog.closeAll();
      }, err => {
        this.notificationService.showError(err.Message);
        this.dialog.closeAll();
      })
    } else {
      this.notificationService.showError(SystemMessage.UnAuthorizedMessage);
    }
  }

  condition(dataItem: any): boolean {
    return dataItem.CongTyId != 0;
  }

  xemChiTietThuTien(dataItem)
  {
    // this.router.navigateByUrl("/xac-nhan-thu-tien-da-hoan-thanh/thong-tin-chi-tiet-xac-nhan-hoan-thanh/" + dataItem.YeuCauTiepNhanId);
    //this.router.navigateByUrl("danh-sach-thu-dich-vu/thong-tin-chi-tiet-da-thu-tien/" + dataItem.YeuCauTiepNhanId + "?loaiThanhToan=1"); <= test
  }
}
