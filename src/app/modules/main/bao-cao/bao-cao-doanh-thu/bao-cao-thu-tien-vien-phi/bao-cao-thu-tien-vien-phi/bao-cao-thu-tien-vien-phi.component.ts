import { Component, OnInit, ViewChild, Input, TemplateRef } from '@angular/core';
import icMoreHoriz from '@iconify/icons-ic/twotone-more-horiz';
import icicActivated from '@iconify/icons-ic/twotone-check-box';
import icicUnActivated from '@iconify/icons-ic/twotone-check-box-outline-blank';
import icicdone from '@iconify/icons-ic/twotone-done';
import icClose from '@iconify/icons-ic/twotone-close';
import { GridDataResult, GridComponent, PageChangeEvent } from '@progress/kendo-angular-grid';
import { SortDescriptor } from '@progress/kendo-data-query';
import { WindowComponent } from '@progress/kendo-angular-dialog';
import { BaoCaoThuTienVienPhi, Search, NhanVienThuNgan, QuayThuNgan, SearchThuNgan,BaoCaoThuPhiVienPhiQueryInfoQueryInfo } from '../bao-cao-thu-tien-vien-phi';

import { ConfirmComponent } from 'src/app/shared/component/dialogs/confirm/confirm.component';
import { environment } from 'src/environments/environment';
import { ApiService } from 'src/app/core/services/api.service';
import { GridQueryInfo } from 'src/app/shared/models/common.model';
import { CommonService } from 'src/app/core/utilities/common.helper';

declare var jQuery: any;

@Component({
  selector: 'app-bao-cao-thu-tien-vien-phi',
  templateUrl: './bao-cao-thu-tien-vien-phi.component.html',
  styleUrls: ['./bao-cao-thu-tien-vien-phi.component.scss']
})
export class BaoCaoThuTienVienPhiComponent implements OnInit {
  search = new Search();
  searchThuNgan = new SearchThuNgan();
  showExpandReLoadPage : boolean = true;
  public nhanVienThuNgan = new NhanVienThuNgan();
  public quayThuNgan = new QuayThuNgan();

  public gridView: GridDataResult;
  public gridViewDetail: GridDataResult;
  public gridData: BaoCaoThuTienVienPhi[] = [];
  public gridDataDetail: BaoCaoThuTienVienPhi[] = [];

  public gridQueryInfo: GridQueryInfo;
  public pageSize = 50;
  public skip = 0;
  public skipDetail = 0;
  jqueryString: string = "";

  DateStart: string = null;
  DateEnd: string = null;
  quayThu: string = null;
  nguoiThu: string = null;
  //================================Begin value total master===========================
  public totalTamUng: number = 0;
  public totalHoanUng: number = 0;
  public totalSoTienThu: number = 0;
  public totalHuyThu: number = 0;

  public totalCongNo: number = 0;
  public totalTienMat: number = 0;
  public totalPos: number = 0;
  public totalChuyenKhoan: number = 0;
  public totalThuNoTienMat: number = 0;
  public totalThuNoChuyenKhoan: number = 0;
  public totalThuNoPos: number = 0;

  //================================End value total===========================
  //================================Begin value total Detail===========================
  public totalSoTienThuDetail: number = 0;
  public totalHuyThuDetail: number = 0;
  public totalThucThuDetail: number = 0;
  public totalCongNoDetail: number = 0;

  public totalTienMatDetail: number = 0;
  public totalChuyenKhoanDetail: number = 0;
  public totalPosDetail: number = 0;
  public totalVoucherDetail: number = 0;

  //================================End value total===========================

  constructor(private apiService: ApiService) {

  }
  

  public baoCaoThuTienVienPhi: BaoCaoThuTienVienPhi[] = [];
  private items: any[] = this.baoCaoThuTienVienPhi;
  expression: boolean = false;

  //================================Begin icon==========================
  icMoreHoriz = icMoreHoriz;
  icActivated = icicActivated;
  icicUnActivated = icicUnActivated;
  icicdone = icicdone;
  icClose = icClose;
  //================================End icon==========================
  minDateDenNgay: Date = null;
  minDateTuNgay: Date = null;
  height: number;
  documentType: DocumentType;
  ishowView: boolean = false;
  ishowViewData: boolean = false;
  take: number;
  _isLoading: boolean = false;
  _isMessage : boolean = false;
  _isLoadingTotalPage: boolean = false;
  _showDefaultPagerTemplate: boolean;
  showDefaultPagerTemplate: boolean = true;
  @ViewChild(GridComponent, { static: true }) gridChild: GridComponent;
  @ViewChild(WindowComponent, { static: false }) windowChild: WindowComponent;
  @ViewChild(ConfirmComponent, { static: false }) confirm: ConfirmComponent;
  @Input() heightToolbar: number = 140;

  @ViewChild('baoCaoChiTietDoanhthuTheoKhoaPhongGrid', { static: true }) baoCaoChiTietDoanhthuTheoKhoaPhongGrid: any;
  @ViewChild('NgayThuStr', { static: true }) NgayThuStr: TemplateRef<any>;
  @ViewChild('TiemChung', { static: true }) TiemChung: TemplateRef<any>;
  @ViewChild('SoBenhAn', { static: true }) SoBenhAn: TemplateRef<any>;
  @ViewChild('tamUng', { static: true }) tamUng: TemplateRef<any>;
  @ViewChild('hoanUng', { static: true }) hoanUng: TemplateRef<any>;
  @ViewChild('goiDichVu', { static: true }) goiDichVu: TemplateRef<any>;
  @ViewChild('soTienThu', { static: true }) soTienThu: TemplateRef<any>;
  @ViewChild('huyThu', { static: true }) huyThu: TemplateRef<any>;
  @ViewChild('congNo', { static: true }) congNo: TemplateRef<any>;
  @ViewChild('tienMat', { static: true }) tienMat: TemplateRef<any>;
  @ViewChild('chuyenKhoan', { static: true }) chuyenKhoan: TemplateRef<any>;
  @ViewChild('pos', { static: true }) pos: TemplateRef<any>;
  @ViewChild('thuNoTienMat', { static: true }) thuNoTienMat: TemplateRef<any>;
  @ViewChild('thuNoChuyenKhoan', { static: true }) thuNoChuyenKhoan: TemplateRef<any>;
  @ViewChild('thuNoPos', { static: true }) thuNoPos: TemplateRef<any>;

  gridColumnsMaster: any[];
  gridColumns: any[];
  gridColumnsDetail: any[];
  //================================Begin group aggregates ===========================
  public aggregates: any[] = [
    { field: 'SoTienThu', aggregate: 'sum' },
    { field: 'DaHuy', aggregate: 'sum' },
    { field: 'CongNo', aggregate: 'sum' },
    { field: 'Voucher', aggregate: 'sum' },
    { field: 'ThucThu', aggregate: 'sum' },
    { field: 'TienMat', aggregate: 'sum' },
    { field: 'ChuyenKhoan', aggregate: 'sum' },
    { field: 'Pos', aggregate: 'sum' },
    { field: 'HuyThu', aggregate: 'sum' },
  ];
  baoCaoThuPhiVienPhiQueryInfoQueryInfo: BaoCaoThuPhiVienPhiQueryInfoQueryInfo = new BaoCaoThuPhiVienPhiQueryInfoQueryInfo();
  urlGetDataGridChild : string = "";
  urlGetPageDataGridChild : string = "";
  @ViewChild('baoCaoChiTietThuVienPhiGrid', { static: true }) baoCaoChiTietThuVienPhiGrid: any;
  ngOnInit() {
    this._showDefaultPagerTemplate = this.showDefaultPagerTemplate;
    this.skip = 0;
    this.take = (this.pageSize * this.skip) + this.pageSize;
    this.skipDetail = 0;
    this.take = (this.pageSize * this.skipDetail) + this.pageSize;
    this.baoCaoThuPhiVienPhiQueryInfoQueryInfo.TuNgay =  this.search.RangeDateTimeFilter.DateStart ;
    this.baoCaoThuPhiVienPhiQueryInfoQueryInfo.DenNgay =  this.search.RangeDateTimeFilter.DateEnd ;
    this.baoCaoThuPhiVienPhiQueryInfoQueryInfo.PhongBenhVienId =  this.quayThuNgan.KeyId ;
    this.baoCaoThuPhiVienPhiQueryInfoQueryInfo.NhanVienId =  this.nhanVienThuNgan.KeyId ;

    this.gridColumnsMaster = [
      { Field: "STT", Title: "STT", Width: 60 }, //0
      { Field: "HoTenNhanVien", Title: "Ngày Thu", Width: 120 }, // 1
      { Field: "SoBLHD", Title: "Số BL/HD", Width: 120 },//2

      { Field: "TiemChung", Title: "Tiêm chủng", MinWidth: 120 },//3
      { Field: "MaBenhNhan", Title: "Mã NB", MinWidth: 120 },//4

      { Field: "MaYTe", Title: "Mã y tế", MinWidth: 120 },//5
      { Field: "TenBenhNhan", Title: "Tên người bệnh", Width: 200 },//6

      { Field: "SoBenhAn", Title: "Số bệnh án", Width: 120 },//9
      { Field: "NamSinh", Title: "Năm sinh", Width: 50 },//7
      { Field: "NguoiGioiThieu", Title: "Người giới thiệu", Width: 120 },//8
     
      { Field: "TotalTamUng", Title: "Tạm ứng", Width: 120 },//10
      { Field: "TotalHoanUng", Title: "Hoàn ứng", Width: 120 },//10
      { Field: "TotalSoTienThu", Title: "Số tiền thu", Width: 120 },//11
      { Field: "TotalHuyThu", Title: "Huỷ/Hoàn", Width: 120 },//12
      { Field: "GoiDichVu", Title: "Gói DV", Width: 120 },//13

      { Field: "TotalCongNo", Title: "Công nọ", Width: 120 },//14
      { Field: "TotalPos", Title: "Pos", Width: 120 },//15
      { Field: "TotalChuyenKhoan", Title: "Chuyển khoản", Width: 120 },//16
      { Field: "TotalTienMat", Title: "Tiền mặt", Width: 120 },//17
    
      { Field: "TotalThuNoTienMat", Title: "Tiền mặt", Width: 120 },//18
      { Field: "TotalThuNoChuyenKhoan", Title: "Chuyển khoản", Width: 120 },//19
      { Field: "TotalThuNoPos", Title: "Người thu", Width: 120 },//20
      { Field: "SoPhieuThu", Title: "Người thu", Width: 120 },//21

      { Field: "ChiTietCongNo", Title: "Chi tiết công nợ",  Width: 120 },//22
      { Field: "SoHoaDonChiTiet", Title: "Số hóa đơn", Width: 120 },//23
      { Field: "BenhAnSoSinh", Title: "Sơ sinh", Width: 120 },//25
    ];
   
     this.gridColumns = [
      { Field: "STT", Title: "STT", Width: 60 }, //0
      { Field: "HoTenNhanVien", Title: "Ngày Thu", Width: 120 }, // 1
      { Field: "SoBLHD", Title: "Số BL/HD", Width: 120 },//2

      { Field: "TiemChung", Title: "Tiêm chủng", MinWidth: 120 },//3
      { Field: "MaBenhNhan", Title: "Mã NB", MinWidth: 120 },//4

      { Field: "MaYTe", Title: "Mã y tế", MinWidth: 120 },//3
      { Field: "TenBenhNhan", Title: "Tên người bệnh", Width: 200 },//4  

      { Field: "SoBenhAn", Title: "Số bệnh án", Width: 120 },//5
      { Field: "NamSinh", Title: "Năm sinh", Width: 100 },//6
      { Field: "NguoiGioiThieu", Title: "Người giới thiệu", Width: 120 },//7
    

      { Field: "TotalTamUng", Title: "Tạm ứng", Width: 140 },//8
      { Field: "TotalHoanUng", Title: "Hoàn ứng", Width: 140 },//9
      { Field: "TotalSoTienThu", Title: "Số tiền thu", Width: 140 },//10
      { Field: "TotalHuyThu", Title: "Huỷ/Hoàn", Width: 140 },//11
      { Field: "GoiDichVu", Title: "Gói DV", Width: 70 },//12
      
      { Field: "TotalCongNo", Title: "Công nợ", Width: 140 },//13
      { Field: "TotalPos", Title: "Pos", Width: 140 },//14
      { Field: "TotalChuyenKhoan", Title: "Chuyển khoản", Width: 140 },//15
      { Field: "TotalTienMat", Title: "Tiền mặt", Width: 140 },//16

      { Field: "TotalThuNoTienMat", Title: "Tiền mặt", Width: 140 },//17
      { Field: "TotalThuNoChuyenKhoan", Title: "Chuyển khoản", Width: 140 },//18
      { Field: "TotalThuNoPos", Title: "Pos", Width: 140 },//19
      { Field: "SoPhieuThu", Title: "Số phiếu thu", Width: 120 },//20

      { Field: "ChiTietCongNo", Title: "Chi tiết công nợ",  Width: 150 },//21
      { Field: "SoHoaDonChiTiet", Title: "Số hóa đơn", Width: 120 },//22
      { Field: "BenhAnSoSinh", Title: "Sơ sinh", Width: 120 },//25
    ];

    this.gridColumnsDetail = [
      { Field: "STT", Title: "STT", Width: 60 }, //0
      { Field: "NgayThuStr", Title: "Ngày Thu", Width: 120 ,Template: this.NgayThuStr}, // 1
      { Field: "SoBLHD", Title: "Số BL/HD", Width: 120 },//2

      { Field: "TiemChung", Title: "Tiêm chủng", MinWidth: 120 , Template: this.TiemChung},//3
      { Field: "MaBenhNhan", Title: "Mã NB", MinWidth: 120 },//4

      { Field: "MaYTe", Title: "Mã y tế", MinWidth: 120 },//5
      { Field: "TenBenhNhan", Title: "Tên người bệnh", Width: 200 },//6   


      { Field: "SoBenhAn", Title: "Số bệnh án", Width: 120 },//7
      { Field: "NamSinh", Title: "Năm sinh", Width: 100 },//8
      { Field: "NguoiGioiThieu", Title: "Người giới thiệu", Width: 120 },//9    

      { Field: "TamUng", Title: "Tạm ứng", Width: 140,Template: this.tamUng },//10
      { Field: "HoanUng", Title: "Hoàn ứng", Width: 140 ,Template: this.hoanUng},//11
      { Field: "SoTienThu", Title: "Số tiền thu", Width: 140 ,Template: this.soTienThu},//12
      { Field: "HuyThu", Title: "Huỷ/Hoàn", Width: 140 ,Template: this.huyThu},//13
      { Field: "GoiDichVu", Title: "Gói DV", Width: 70 ,Template: this.goiDichVu},//14
      
      { Field: "CongNo", Title: "Công nợ", Width: 140 ,Template: this.congNo},//15
      { Field: "Pos", Title: "Pos", Width: 140 ,Template: this.pos},//16
      { Field: "ChuyenKhoan", Title: "Chuyển khoản", Width: 140 ,Template: this.chuyenKhoan},//17
      { Field: "TienMat", Title: "Tiền mặt", Width: 140 ,Template: this.tienMat},//18

      { Field: "ThuNoTienMat", Title: "Tiền mặt", Width: 140,Template: this.thuNoTienMat },//19
      { Field: "ThuNoChuyenKhoan", Title: "Chuyển khoản", Width: 140,Template: this.thuNoChuyenKhoan  },//20
      { Field: "ThuNoPos", Title: "Pos", Width: 140 ,Template: this.thuNoPos},//21
      { Field: "SoPhieuThu", Title: "Số phiếu thu", Width: 120 },//22

      { Field: "ChiTietCongNo", Title: "Chi tiết công nợ", Width: 150 },//23
      { Field: "SoHoaDonChiTiet", Title: "Số hóa đơn", Width: 120 },//24
      { Field: "BenhAnSoSinh", Title: "Sơ sinh", Width: 120 , Template: this.SoBenhAn },//25
    ];
    //new Date(year, month, day, hours, minutes, seconds, milliseconds); this.minDateTuNgay.setHours(0,0,0,0);
    this.minDateTuNgay = new Date();
    this.minDateTuNgay.setHours(0,0,0,0);
  
    if(this.search.RangeDateTimeFilter.DateStart == null)
    {
      this.search.RangeDateTimeFilter.DateStart = this.minDateTuNgay;
    }
  }
  searchRefresh(){
    this.XemBaoCao();
  }


  public pageChange(event: PageChangeEvent): void {
    this.skip = event.skip;
    this.XemBaoCao();
  }
  pageChangeDetail(event: PageChangeEvent): void {
    if (event != null) {
      this.skipDetail = event.skip;
      this.XemBaoCao();
    }
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
  //daddy total master
  getFieldColumnMaster(index: number) {
    return this.gridColumnsMaster[index].Field;
  }
  getTitleColumnMaster(index: number) {
    return this.gridColumnsMaster[index].Title;
  }
  getWidthColumnMaster(index: number) {
    return this.gridColumnsMaster[index].Width != null ? this.gridColumnsMaster[index].Width : this.getMinWidthColumn(this.gridColumnsMaster[index].MinWidth != null ? this.gridColumnsMaster[index].MinWidth : 100);
  }
  //
  getMinWidthColumn(minWidth: number) {
    var widthParent = jQuery("#baoCaoChiTietDoanhthuTheoKhoaPhongGrid").parent().width();
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
    this.showExpandReLoadPage = false;
    this.baoCaoThuPhiVienPhiQueryInfoQueryInfo.TuNgay =  this.search.RangeDateTimeFilter.DateStart ;
    this.baoCaoThuPhiVienPhiQueryInfoQueryInfo.DenNgay =  this.search.RangeDateTimeFilter.DateEnd ;
    let denNgay = CommonService.formatDateTime(this.search.RangeDateTimeFilter.DateEnd, "mm/dd/yyyy");
    let tuNgay = CommonService.formatDateTime(this.search.RangeDateTimeFilter.DateStart, "mm/dd/yyyy");
    this.baoCaoThuPhiVienPhiQueryInfoQueryInfo.NhanVienId = event.dataItem.NhanVienId;
    this.baoCaoThuPhiVienPhiQueryInfoQueryInfo.PhongBenhVienId = this.quayThuNgan.KeyId;
    this.baoCaoThuPhiVienPhiQueryInfoQueryInfo.TuNgay = this.search.RangeDateTimeFilter.DateStart;
    this.baoCaoThuPhiVienPhiQueryInfoQueryInfo.DenNgay = this.search.RangeDateTimeFilter.DateEnd;
    this.urlGetDataGridChild  = "BaoCao/GetBaoCaoChiTietThuTienVienPhiForDeTailGridAsync";
    this.urlGetPageDataGridChild = "BaoCao/GetBaoCaoChiTietThuTienVienPhiForDeTailGridAsync";
  }
  returnDetail(){
    let denNgay = CommonService.formatDateTime(this.search.RangeDateTimeFilter.DateEnd, "mm/dd/yyyy");
    let tuNgay = CommonService.formatDateTime(this.search.RangeDateTimeFilter.DateStart, "mm/dd/yyyy");
    let string = tuNgay + "-" + denNgay + "-" + this.baoCaoThuPhiVienPhiQueryInfoQueryInfo.NhanVienId + "-" + this.quayThuNgan.KeyId;
    return string;
  }
  chonQuay(item: any) {
    this.quayThuNgan = item;   
  }
  chonQuayChange(item: any)
  {
    if(item != undefined)
    {
      this.quayThuNgan.KeyId = item;
    }
    else{
      this.quayThuNgan.KeyId = 0;
    }
  }
  chonNhanVien(item: any) {
    this.nhanVienThuNgan = item;
  }
  chonNhanVienChange(item: any) {
    if(item != undefined)
    {
      this.nhanVienThuNgan.KeyId = item;
    }
    else{
      this.nhanVienThuNgan.KeyId = 0;
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
  changeValueStart(event: any) {
    this.minDateDenNgay = new Date();
    this.minDateTuNgay = new Date();
    if (this.search.RangeDateTimeFilter.DateStart != null && this.search.RangeDateTimeFilter.DateEnd != null && this.search.RangeDateTimeFilter.DateEnd > this.search.RangeDateTimeFilter.DateStart) {
      this.search.RangeDateTimeFilter.DateEnd = this.minDateDenNgay;
    }
    if(this.search.RangeDateTimeFilter.DateStart == null)
    {
      this.search.RangeDateTimeFilter.DateStart = this.minDateTuNgay;
    }
  }
  XemBaoCao() {
    this._isMessage = true;
    this._isLoading = true;
    this._isLoadingTotalPage = true;
    if (this.search.RangeDateTimeFilter.DateStart == null ) {
      this.minDateTuNgay = new Date();
      this.minDateTuNgay.setHours(0, 0, 0, 0);
      this.search.RangeDateTimeFilter.DateStart = this.minDateTuNgay;
    }
    if ( this.search.RangeDateTimeFilter.DateEnd == null) {
      this.minDateTuNgay = new Date();
      this.search.RangeDateTimeFilter.DateEnd = this.minDateTuNgay;
    }
    if (this.search.RangeDateTimeFilter.DateStart != null)  {
      this.DateStart = CommonService.formatDateTime(this.search.RangeDateTimeFilter.DateStart, "dd/mm/yyyy");

    }
    if (this.search.RangeDateTimeFilter.DateEnd != null) {
      this.DateEnd = CommonService.formatDateTime(this.search.RangeDateTimeFilter.DateEnd, "dd/mm/yyyy");
    }
    this.ishowViewData = true;
    this.quayThu = this.quayThuNgan.DisplayName;
    this.nguoiThu = this.nhanVienThuNgan.DisplayName;

    var searchThuNgan = new SearchThuNgan();
    searchThuNgan.TuNgay = this.search.RangeDateTimeFilter.DateStart;
    searchThuNgan.DenNgay = this.search.RangeDateTimeFilter.DateEnd;
    searchThuNgan.PhongBenhVienId = this.quayThuNgan.KeyId;
    searchThuNgan.NhanVienId = this.nhanVienThuNgan.KeyId;
    this.baoCaoThuPhiVienPhiQueryInfoQueryInfo.TuNgay = this.search.RangeDateTimeFilter.DateStart;
    this.baoCaoThuPhiVienPhiQueryInfoQueryInfo.DenNgay = this.search.RangeDateTimeFilter.DateEnd;
    this.baoCaoThuPhiVienPhiQueryInfoQueryInfo.NhanVienId =  searchThuNgan.NhanVienId;
    this.baoCaoThuPhiVienPhiQueryInfoQueryInfo.PhongBenhVienId = searchThuNgan.PhongBenhVienId;
    this.apiService.post<any>("BaoCao/GetBaoCaoChiTietThuTienVienPhiForMasterGridAsync",this.baoCaoThuPhiVienPhiQueryInfoQueryInfo).subscribe(resultData => {
      if (resultData !== undefined && resultData != null) {
        this.baoCaoThuTienVienPhi = resultData.Data;
       
        this.gridView = {
          data: resultData.Data,
          total: resultData.TotalRowCount
        };
        this._isLoading = false; // show icon loading
        this.gridView.data.forEach((item, idx) => {
          this.baoCaoChiTietThuVienPhiGrid.collapseRow(idx);
      });
      this._isLoadingTotalPage = false;
      if(this.gridView.data  == null)
         this._isMessage = true; // show massage
      }
      if (this.gridView.total != 0){
      this.ishowView = true;
      } else{
        this.ishowView = false;
      }
    });
    // tính tổng sum báo cáo
    this.apiService.post<any>("BaoCao/GetTotalBaoCaoChiTietThuTienVienPhiForGridAsync",this.baoCaoThuPhiVienPhiQueryInfoQueryInfo).subscribe(resultData => {
      if (resultData !== undefined && resultData != null) {
        this.baoCaoThuTienVienPhi = resultData.Data;


        this.totalSoTienThu = resultData.SoTienThu;
        this.totalHuyThu = resultData.HuyThu;
        this.totalTamUng = resultData.TamUng;
        this.totalHoanUng = resultData.HoanUng;

        this.totalTienMat = resultData.TienMat;
        this.totalCongNo = resultData.CongNo;
        this.totalPos = resultData.Pos;
        this.totalChuyenKhoan = resultData.ChuyenKhoan;

        this.totalThuNoTienMat = resultData.ThuNoTienMat;
        this.totalThuNoChuyenKhoan = resultData.ThuNoChuyenKhoan;
        this.totalThuNoPos = resultData.ThuNoPos;
      }
    });
  }

  XuatBaoCao() { 
    if (this.search.RangeDateTimeFilter.DateStart == null ) {
      this.minDateTuNgay = new Date();
      this.minDateTuNgay.setHours(0, 0, 0, 0);
      this.search.RangeDateTimeFilter.DateStart = this.minDateTuNgay;
    }
    if ( this.search.RangeDateTimeFilter.DateEnd == null) {
      this.minDateTuNgay = new Date();
      this.minDateTuNgay.setHours(0, 0, 0, 0);
      this.search.RangeDateTimeFilter.DateEnd = this.minDateTuNgay;
    }
    this.DateStart = CommonService.formatDateTime(this.search.RangeDateTimeFilter.DateStart, "dd/mm/yyyy");
    this.DateEnd = CommonService.formatDateTime(this.search.RangeDateTimeFilter.DateEnd, "dd/mm/yyyy");
    let data1 = this.nhanVienThuNgan.KeyId;
    let data2 = this.quayThuNgan.KeyId;
    let hosting = window.location.protocol + "//" + window.location.host;
    window.location.href = environment.api_url + "/BaoCao/ExportBaoCaoChiTietThuTienVienPhi?phongBenhVienId=" + this.quayThuNgan.KeyId + "&nhanVienId=" + this.nhanVienThuNgan.KeyId + "&startDate=" + this.DateStart + "&endDate=" + this.DateEnd + "&hosting=" + hosting;
  }
  formatPrice(value) {
    let val = (value / 1).toFixed(2).replace('.', ',')
    return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")
  }
}
