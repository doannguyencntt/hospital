import { ChangeDetectorRef, Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material';
import { ApiService } from 'src/app/core/services/api.service';
import { AuthService } from 'src/app/core/services/auth.service';
import { NotificationService } from 'src/app/core/services/notification.service';
import { CommonService } from 'src/app/core/utilities/common.helper';
import { LoadingComponent } from 'src/app/shared/component/dialogs/loading/loading.component';
import { SystemMessage } from 'src/app/shared/configdata/system-message';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import { SecurityOperation } from 'src/app/shared/enum/security-operation.enum';
import { BaoCaoBangKeXuatThuocTheoBenhNhanSearch, InBaoCaoBangKeXuatThuocTheoBenhNhan } from '../bao-cao-bang-ke-xuat-thuoc-theo-benh-nhan.model';
import icFilterList from '@iconify/icons-ic/twotone-filter-list';
import { DataResult, GroupDescriptor } from '@progress/kendo-data-query';
import { GridComponent } from 'src/app/shared/component/grid/grid.component';
import { PageChangeEvent } from '@progress/kendo-angular-grid';
declare var jQuery: any;
import { process } from '@progress/kendo-data-query';

@Component({
  selector: 'app-bao-cao-bang-ke-xuat-thuoc-theo-benh-nhan-list',
  templateUrl: './bao-cao-bang-ke-xuat-thuoc-theo-benh-nhan-list.component.html',
  styleUrls: ['./bao-cao-bang-ke-xuat-thuoc-theo-benh-nhan-list.component.scss']
})
export class BaoCaoBangKeXuatThuocTheoBenhNhanListComponent implements OnInit {
  baoCaoSearch: BaoCaoBangKeXuatThuocTheoBenhNhanSearch = new BaoCaoBangKeXuatThuocTheoBenhNhanSearch();
  inBaoCaoBangKeXuatThuocTheoBenhNhan: InBaoCaoBangKeXuatThuocTheoBenhNhan = new InBaoCaoBangKeXuatThuocTheoBenhNhan();
  minDateTuNgay: any;
  documentType: DocumentType

  gridColumns:any = []
  gridDataSource: any = {
    data:[],
    total: 0
  };
  public aggregates: any[] = [
    { field: 'ThanhTien', aggregate: 'sum' },
      { field: 'ThanhTienBan', aggregate: 'sum' },
      { field: 'ThanhTienHoanTra', aggregate: 'sum' },
      { field: 'ChiTietCongNo', aggregate: 'average' },
  ];

  public groups: GroupDescriptor[] = [{
    field: 'NgayXuatStr'
  },{
    field: 'ThongTinKhachHang',
    aggregates: this.aggregates
  }];
  showGrid: boolean = false;
  showPrintExport: boolean = false;
  icFilterList = icFilterList;
  gridView: DataResult;
  heightToolbar: number = 140;
  height: number;
  public pageSize = 20;
  public skip = 0;
  _isLoading: boolean = false;
  _isLoadingTotalPage: boolean = false;
  _showDefaultPagerTemplate: boolean = true;

  @ViewChild("thongTinKhachHangGroupHeaderTemplate",{static:true})ngayXuatGroupHeaderTemplate:TemplateRef<any>;
  @ViewChild("ngayXuatGroupHeaderTemplate",{static:true})thongTinKhachHangGroupHeaderTemplate:TemplateRef<any>;
  @ViewChild("thanhTienTemplate",{static:true})thanhTienTemplate:TemplateRef<any>;
  @ViewChild("donGiaTemplate",{static:true})donGiaTemplate:TemplateRef<any>;
  @ViewChild("donGiaBanTemplate",{static:true})donGiaBanTemplate:TemplateRef<any>;
  @ViewChild("donGiaHoanTraTemplate",{static:true})donGiaHoanTraTemplate:TemplateRef<any>;
  @ViewChild("thanhTienBanTemplate",{static:true})thanhTienBanTemplate:TemplateRef<any>;
  @ViewChild("thanhTienHoanTraTemplate",{static:true})thanhTienHoanTraTemplate:TemplateRef<any>;
  @ViewChild("thanhTienGroupHeaderColumnTemplate",{static:true})thanhTienGroupHeaderColumnTemplate:TemplateRef<any>;
  @ViewChild("thanhTienBanGroupHeaderColumnTemplate",{static:true})thanhTienBanGroupHeaderColumnTemplate:TemplateRef<any>;
  @ViewChild("thanhTienHoanTraGroupHeaderColumnTemplate",{static:true})thanhTienHoanTraGroupHeaderColumnTemplate:TemplateRef<any>;
  @ViewChild("chiTietCongNoGroupHeaderColumnTemplate",{static:true})chiTietCongNoGroupHeaderColumnTemplate:TemplateRef<any>;
  @ViewChild("chiTietCongNoTemplate",{static:true})chiTietCongNoTemplate:TemplateRef<any>;
  
  constructor(private apiService: ApiService,
    private dialog: MatDialog,
    private notificationService: NotificationService,
    private authService: AuthService,
    private cd:ChangeDetectorRef) { }

  ngOnInit() {
    this.documentType = DocumentType.BaoCaoBangKeXuatThuocTheoBenhNhan
    if (window.location.protocol == "http:") {
      this.inBaoCaoBangKeXuatThuocTheoBenhNhan.HostingName = "http://" + window.location.host;
    } else {
      this.inBaoCaoBangKeXuatThuocTheoBenhNhan.HostingName = "https://" + window.location.host;
    }

    this.gridColumns = [
      {Field:"STT", Title:"STT", Width:400},
      {Field:"MaDuoc", Title:"Mã dược", Width:150},
      {Field:"Ten", Title:"Tên dược, hàm lượng", Width:200},
      {Field:"DVT", Title:"ĐVT", Width:100},
      {Field:"SoLuong", Title:"SL", Width:100},
      {Field:"DonGiaDaCoVat", Title:"Đơn giá(VAT)", Width:150, Template: this.donGiaTemplate},
      {Field:"ThanhTien", Title:"Thành tiền (VAT)", Width:200, Template: this.thanhTienTemplate, TemplateGroupHeaderColumn: this.thanhTienGroupHeaderColumnTemplate},
      {Field:"DonGiaBan", Title:"Đơn giá bán", Width:150, Template: this.donGiaBanTemplate},
      {Field:"ThanhTienBan", Title:"Thành tiền bán", Width:200,Template: this.thanhTienBanTemplate, TemplateGroupHeaderColumn: this.thanhTienBanGroupHeaderColumnTemplate},
      {Field:"DonGiaHoanTra", Title:"Đơn giá hoàn trả", Width:150, Template: this.donGiaHoanTraTemplate},
      {Field:"ThanhTienHoanTra", Title:"Thành tiền hoàn trả", Width:200, Template: this.thanhTienHoanTraTemplate, TemplateGroupHeaderColumn: this.thanhTienHoanTraGroupHeaderColumnTemplate},
      {Field:"ChiTietCongNo", Title:"Chi tiết Công nợ", Width:300,Sortable: true, Hidden:true,Template: this.chiTietCongNoTemplate, TemplateGroupHeader: this.chiTietCongNoGroupHeaderColumnTemplate},
      {Field:"SoHoaDon", Title:"Số hoá đơn", Width:100},
      {Field:"ThueSuat", Title:"Thuế suất", Width:100},
      {Field: "NgayXuatStr", Title: "Ngày xuất", Width: 300, Sortable: true, Hidden: true, TemplateGroupHeader: this.ngayXuatGroupHeaderTemplate},
      {Field: "ThongTinKhachHang", Title: "Thông tin", Width: 300, Sortable: true, Hidden: true, TemplateGroupHeader: this.thongTinKhachHangGroupHeaderTemplate},

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

  getSumThanhTien(value){
    if(this.gridView && value){
      return value.sum
    }
  }

  getChiTietCongNo(value) {
    if(value) {
      return value.average;
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
  public pageChange(event: PageChangeEvent): void {
    this.baoCaoSearch.Skip = event.skip;
    this.skip = event.skip;
    this.XemBaoCao();
  }

  public totalThanhTien(field: any) {
    switch (field) {
      case 'ThanhTien':
        if (this.gridDataSource.data != undefined) {
          return this.gridDataSource.data.reduce((sum, item) => sum + item.ThanhTien, 0);
        }
      case 'ThanhTienBan':
        if (this.gridDataSource.data != undefined) {
          return this.gridDataSource.data.reduce((sum, item) => sum + item.ThanhTienBan, 0);
        }
      case 'ThanhTienHoanTra':
        if (this.gridDataSource.data != undefined) {
          return this.gridDataSource.data.reduce((sum, item) => sum + item.ThanhTienHoanTra, 0);
        }
      
    }
};

  XemBaoCao() {
    
    if(this.baoCaoSearch.TuNgayFormat==null || this.baoCaoSearch.DenNgayFormat==null)
    {
        this.notificationService.showError("Từ ngày và đến ngày yêu cầu nhập");
        return;
    }

    this._isLoading = true;
    this._isLoadingTotalPage = true;
    this.baoCaoSearch.FromDate = this.baoCaoSearch.TuNgayFormat;
    this.baoCaoSearch.ToDate = this.baoCaoSearch.DenNgayFormat;

    this.apiService.post<any>("BaoCao/GetDataBaoCaoBangKeXuatThuocTheoBenhNhanForGridAsync", this.baoCaoSearch).subscribe(resultData => {
      if (resultData !== undefined && resultData != null) {
        // if(resultData.TotalRowCount !== undefined && resultData.TotalRowCount != 0)
        // {
        //  this.showPrintExport = true;
        // }
        // this.showGrid = true;
        this.gridDataSource.data = [...resultData.Data];
        this.gridDataSource.total = resultData.TotalRowCount;
       
        this.gridView = process(resultData.Data, { group: this.groups });
        this.gridView.total =  resultData.TotalRowCount;

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
    if (!this.baoCaoSearch.KhoId) {
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
      this.baoCaoSearch.AdditionalSearchString = khoId + ";0;" + tuNgay + ";" + denNgay + ";" + this.inBaoCaoBangKeXuatThuocTheoBenhNhan.HostingName;
      this.apiService.postExportExcel<any>("BaoCao/ExportBaoCaoBangKeXuatThuocTheoBenhNhan", this.baoCaoSearch)
        .subscribe(res => {
          let dateTimeNow = new Date();
          CommonService.downLoadFile(res, "application/vnd.ms-excel", "BangKeXuatThuocTheoBenhNhan" + dateTimeNow.getFullYear() + ".xlsx");
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
  
  reFresh(){ this.skip = 0; this.XemBaoCao() }
}
