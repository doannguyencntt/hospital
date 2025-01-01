import { Component, OnInit, ViewChild, Input, TemplateRef } from '@angular/core';
import icMoreHoriz from '@iconify/icons-ic/twotone-more-horiz';
import icicActivated from '@iconify/icons-ic/twotone-check-box';
import icicUnActivated from '@iconify/icons-ic/twotone-check-box-outline-blank';
import icicdone from '@iconify/icons-ic/twotone-done';
import icClose from '@iconify/icons-ic/twotone-close';
import { GridDataResult, GridComponent, PageChangeEvent } from '@progress/kendo-angular-grid';
import { SortDescriptor } from '@progress/kendo-data-query';
import { WindowComponent } from '@progress/kendo-angular-dialog';

import { ConfirmComponent } from 'src/app/shared/component/dialogs/confirm/confirm.component';
import { environment } from 'src/environments/environment';
import { ApiService } from 'src/app/core/services/api.service';
import { GridQueryInfo } from 'src/app/shared/models/common.model';
import { CommonService } from 'src/app/core/utilities/common.helper';
import { BaoCaoDichVuPhatSinhNgoaiGoi, BaoCaoDichVuPhatSinhNgoaiGoiPhiQueryInfoQueryInfo, Search, SearchThuNgan } from '../bao-cao-dv-phat-sinh-ngoai-goi-ke-toan.model';
import { LoadingComponent } from 'src/app/shared/component/dialogs/loading/loading.component';
import { MatDialog } from '@angular/material';
import { NotificationService } from 'src/app/core/services/notification.service';
import { AuthService } from 'src/app/core/services/auth.service';
import { SecurityOperation } from 'src/app/shared/enum/security-operation.enum';
import { SystemMessage } from 'src/app/shared/configdata/system-message';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';

declare var jQuery: any;

@Component({
  selector: 'app-bao-cao-dv-phat-sinh-ngoai-goi-ke-toan-list',
  templateUrl: './bao-cao-dv-phat-sinh-ngoai-goi-ke-toan-list.component.html',
  styleUrls: ['./bao-cao-dv-phat-sinh-ngoai-goi-ke-toan-list.component.scss']
})
export class BaoCaoDvPhatSinhNgoaiGoiKeToanListComponent implements OnInit {
  search = new Search();
  searchThuNgan = new SearchThuNgan();
  showExpandReLoadPage : boolean = true;

  public gridView: GridDataResult;
  public gridViewDetail: GridDataResult;
  public gridData: BaoCaoDichVuPhatSinhNgoaiGoi[] = [];
  public gridDataDetail: BaoCaoDichVuPhatSinhNgoaiGoi[] = [];

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
  public totalDonGiaBenhVien: number = 0;
  public totalDonGiaMoi: number = 0;
  public totalSoTienThucThu: number = 0;
  public totalSoTienDuocMienGiam: number = 0;

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

    constructor(private dialog: MatDialog, private apiService: ApiService, private notificationService: NotificationService,    private authService: AuthService,) {

  }
  

  public baoCaoThuTienVienPhi: BaoCaoDichVuPhatSinhNgoaiGoi[] = [];
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
  baoCaoDichVuPhatSinhNgoaiGoiPhiQueryInfoQueryInfo: BaoCaoDichVuPhatSinhNgoaiGoiPhiQueryInfoQueryInfo = new BaoCaoDichVuPhatSinhNgoaiGoiPhiQueryInfoQueryInfo();
  urlGetDataGridChild : string = "";
  urlGetPageDataGridChild : string = "";
  @ViewChild('baoCaoChiTietThuVienPhiGrid', { static: true }) baoCaoChiTietThuVienPhiGrid: any;
  
  ngOnInit() {
    this.documentType = DocumentType.BaoCaoDichVuPhatSinhNgoaiGoiCuaKeToan;
    this._showDefaultPagerTemplate = this.showDefaultPagerTemplate;
    this.skip = 0;
    this.take = (this.pageSize * this.skip) + this.pageSize;
    this.skipDetail = 0;
    this.take = (this.pageSize * this.skipDetail) + this.pageSize;
    this.baoCaoDichVuPhatSinhNgoaiGoiPhiQueryInfoQueryInfo.TuNgay =  this.search.RangeDateTimeFilter.DateStart ;
    this.baoCaoDichVuPhatSinhNgoaiGoiPhiQueryInfoQueryInfo.DenNgay =  this.search.RangeDateTimeFilter.DateEnd ;
    this.baoCaoDichVuPhatSinhNgoaiGoiPhiQueryInfoQueryInfo.HopDongId =  this.search.HopDongId ;

    this.gridColumns = [
      { Field: "STT", Title: "STT", Width: 50 }, //0 
      { Field: "NgayBienLaiStr", Title: "Ngày biên lai", Width: 150 },//1
      { Field: "SoBienLai", Title: "Số biên lai", Width: 130 },//2
      { Field: "MaNhanVien", Title: "Mã nhân viên", Width: 130 },//3
      { Field: "MaNguoiBenh", Title: "Mã người bệnh", MinWidth: 130 },//4
      { Field: "MaTiepNhan", Title: "Mã tiếp nhận", Width: 130 },//5
      { Field: "HoTen", Title: "Họ tên", MinWidth: 200 },//6
      { Field: "GioiTinh", Title: "Giới tính", Width: 80 },//7
      { Field: "NamSinh", Title: "Năm sinh", Width: 80 },//8
      { Field: "TenDichVu", Title: "Dịch vụ", Width: 200 },//9
      { Field: "DonGiaBenhVien", Title: "Đơn giá BV", Width: 100 },//10
      { Field: "DonGiaMoi", Title: "Đơn giá mới", Width: 100 },//11
      { Field: "SoTienDuocMienGiam", Title: "Số tiền được miễn giảm", Width: 100 },//12
      { Field: "SoTienThucThu", Title: "Số tiền thực thu", Width: 120 },//13
      { Field: "TamUng", Title: "Tạm ứng", Width: 100 },//14
      { Field: "HoanUng", Title: "Hoàn ứng", Width: 100 },//15
      { Field: "HuyHoan", Title: "Huỷ/Hoàn", Width: 100 },//16

      { Field: "CongNo", Title: "Công nợ", Width: 100 },//17
      { Field: "Pos", Title: "Pos", Width: 100 },//18
      { Field: "ChuyenKhoan", Title: "Chuyển khoản", Width: 120 },//19
      { Field: "Tienmat", Title: "Tiền mặt", Width: 100 },//20

      { Field: "TienmatCapNhat", Title: "Tiền mặt", Width: 100 },//21
      { Field: "ChuyenKhoanCapNhat", Title: "Chuyển khoản", Width: 100 },//22
      { Field: "PosCapNhat", Title: "Pos", Width: 120 },//23
      { Field: "SoPhieuThu", Title: "Số phiếu thu", Width: 100 },//24

      { Field: "ChiTietCongNo", Title: "Chi tiết công nợ", Width: 120 },//25
      { Field: "SoHoaDon", Title: "Số hóa đơn", Width: 100 },//26
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
    this.baoCaoDichVuPhatSinhNgoaiGoiPhiQueryInfoQueryInfo.Skip =event.skip;
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
    this.dialog.open(LoadingComponent, {
      disableClose: true,
      width: '200px',
      height: '90px',
      data: { Title: 'Đang tải dữ liệu...' }
    });
    this._isMessage = true;
    this._isLoading = true;
    this._isLoadingTotalPage = true;
    // if (this.search.RangeDateTimeFilter.DateStart == null ) {
    //   this.minDateTuNgay = new Date();
    //   this.minDateTuNgay.setHours(0, 0, 0, 0);
    //   this.search.RangeDateTimeFilter.DateStart = this.minDateTuNgay;
    // }
    // if ( this.search.RangeDateTimeFilter.DateEnd == null) {
    //   this.minDateTuNgay = new Date();
    //   this.search.RangeDateTimeFilter.DateEnd = this.minDateTuNgay;
    // }
    if (this.search.RangeDateTimeFilter.DateStart != null)  {
      this.DateStart = CommonService.formatDateTime(this.search.RangeDateTimeFilter.DateStart, "dd/mm/yyyy");

    }
    if (this.search.RangeDateTimeFilter.DateEnd != null) {
      this.DateEnd = CommonService.formatDateTime(this.search.RangeDateTimeFilter.DateEnd, "dd/mm/yyyy");
    }
    if(this.search.HopDongId == null || this.search.HopDongId == 0 || this.search.CongTyId == null || this.search.CongTyId == 0)
    {
      this.notificationService.showError("Yêu cầu nhập công ty và hợp đồng"); 
      this.dialog.closeAll();
      return;
    }
    this.baoCaoDichVuPhatSinhNgoaiGoiPhiQueryInfoQueryInfo.TuNgay = this.search.RangeDateTimeFilter.DateStart;
    this.baoCaoDichVuPhatSinhNgoaiGoiPhiQueryInfoQueryInfo.DenNgay = this.search.RangeDateTimeFilter.DateEnd;
    this.baoCaoDichVuPhatSinhNgoaiGoiPhiQueryInfoQueryInfo.HopDongId =  this.search.HopDongId;
    this.apiService.post<any>("BaoCao/GetBaoCaoChiTietThuTienDichVuNgoaiGoiForGridAsync",this.baoCaoDichVuPhatSinhNgoaiGoiPhiQueryInfoQueryInfo).subscribe(resultData => {
      if (resultData !== undefined && resultData != null) {
        this.baoCaoThuTienVienPhi = resultData.Data;
       
        this.gridView = {
          data: resultData.Data,
          total: resultData.TotalRowCount
        };
        if (resultData.Data.length > 0) {
          var self=this;
          setTimeout(function () {
            var soBienLaiRemoveSpecialOld = "";
            var idOld = "";
            resultData.Data.forEach(element => {
              self.merceCell("TamUng",element,soBienLaiRemoveSpecialOld,idOld);
              self.merceCell("HoanUng",element,soBienLaiRemoveSpecialOld,idOld);
              self.merceCell("HuyHoan",element,soBienLaiRemoveSpecialOld,idOld);
              self.merceCell("CongNoHinhThucThanhToan",element,soBienLaiRemoveSpecialOld,idOld);
              self.merceCell("PosHinhThucThanhToan",element,soBienLaiRemoveSpecialOld,idOld);
              self.merceCell("ChuyenKhoanHinhThucThanhToan",element,soBienLaiRemoveSpecialOld,idOld);
              self.merceCell("TienMatHinhThucThanhToan",element,soBienLaiRemoveSpecialOld,idOld);
              self.merceCell("TienMatCaptNhatCongNo",element,soBienLaiRemoveSpecialOld,idOld);
              self.merceCell("ChuyenKhoanCaptNhatCongNo",element,soBienLaiRemoveSpecialOld,idOld);
              self.merceCell("PosCaptNhatCongNo",element,soBienLaiRemoveSpecialOld,idOld);
              soBienLaiRemoveSpecialOld = element.SoBienLaiRemoveSpecial;
              idOld = element.STT;
            });
          });
        }
        this._isLoading = false; // show icon loading
      
      this._isLoadingTotalPage = false;
      if(this.gridView.data  == null)
         this._isMessage = true; // show massage
      }
      if (this.gridView.total != 0){
      this.ishowView = true;
      } else{
        this.ishowView = false;
      }
      
      this.dialog.closeAll();
    });
      // tính tổng sum báo cáo
      this.apiService.post<any>("BaoCao/GetTotalBaoCaoChiTietThuTienDichVuNgoaiGoiForGridAsync",this.baoCaoDichVuPhatSinhNgoaiGoiPhiQueryInfoQueryInfo).subscribe(resultData => {
        if (resultData !== undefined && resultData != null) {
          this.baoCaoThuTienVienPhi = resultData.Data;
  
          this.totalDonGiaBenhVien =resultData.DonGiaBenhVien;
          this.totalDonGiaMoi =resultData.DonGiaMoi
          this.totalSoTienThucThu =resultData.SoTienThucThu;
          this.totalSoTienDuocMienGiam =resultData.SoTienDuocMienGiam;
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
  merceCell(type:string,element:any,soBienLaiRemoveSpecialOld:any,idOld:any){
    if (element.SoBienLaiRemoveSpecial == soBienLaiRemoveSpecialOld && jQuery("."+type+"." + element.SoBienLaiRemoveSpecial + "." + element.STT).length > 0) {
      jQuery("."+type+"." + soBienLaiRemoveSpecialOld + "." + idOld).parent().css({ "border-bottom": "none" });
      jQuery("."+type+"." + element.SoBienLaiRemoveSpecial + "." + element.STT).parent().css({ "border-left": "1px solid rgba(0,0,0,0.12)" });
      jQuery("."+type+"." + element.SoBienLaiRemoveSpecial + "." + element.STT).text("");
    }
  }
  // XuatBaoCao() { 
  //   this.dialog.open(LoadingComponent, {
  //     disableClose: true,
  //     width: '200px',
  //     height: '90px',
  //     data: { Title: 'Đang xuất excel...' }
  //   });
  //   if (this.search.RangeDateTimeFilter.DateStart == null ) {
  //     this.minDateTuNgay = new Date();
  //     this.minDateTuNgay.setHours(0, 0, 0, 0);
  //     this.search.RangeDateTimeFilter.DateStart = this.minDateTuNgay;
  //   }
  //   if ( this.search.RangeDateTimeFilter.DateEnd == null) {
  //     this.minDateTuNgay = new Date();
  //     this.minDateTuNgay.setHours(0, 0, 0, 0);
  //     this.search.RangeDateTimeFilter.DateEnd = this.minDateTuNgay;
  //   }
  //   this.DateStart = CommonService.formatDateTime(this.search.RangeDateTimeFilter.DateStart, "dd/mm/yyyy");
  //   this.DateEnd = CommonService.formatDateTime(this.search.RangeDateTimeFilter.DateEnd, "dd/mm/yyyy");
  //   let data1 = this.search.CongTyId;
  //   let data2 = this.search.HopDongId;
  //   let hosting = window.location.protocol + "//" + window.location.host;
  //   window.location.href = environment.api_url + "/BaoCao/ExportBaoCaoChiTietThuTienDichVuNgoaiGoi?hopDongId=" + this.search.HopDongId + "&congTyId=" + this.search.CongTyId + "&startDate=" + this.DateStart + "&endDate=" + this.DateEnd + "&hosting=" + hosting;    
      
  //   this.dialog.closeAll();
  // }
  
  
  formatPrice(value) {
    let val = (value / 1).toFixed(2).replace('.', ',')
    return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")
  }
  changeLookupHopDong(event){
    if(event && event.length > 0 && this.search.CongTyId && !this.search.HopDongId )
    {
      this.search.HopDongId = event[0].KeyId;
    }
  }
  changeCongTy(event){
    this.search.CongTyId = event;
    this.search.HopDongId = null;
  }
  XuatBaoCao() {
    if (this.search.RangeDateTimeFilter.DateStart != null)  {
      this.DateStart = CommonService.formatDateTime(this.search.RangeDateTimeFilter.DateStart, "dd/mm/yyyy");

    }
    if (this.search.RangeDateTimeFilter.DateEnd != null) {
      this.DateEnd = CommonService.formatDateTime(this.search.RangeDateTimeFilter.DateEnd, "dd/mm/yyyy");
    }
    if(this.search.HopDongId == null || this.search.HopDongId == 0 || this.search.CongTyId == null || this.search.CongTyId == 0)
    {
      this.notificationService.showError("Yêu cầu nhập công ty và hợp đồng"); 
        return;
    }
    this.baoCaoDichVuPhatSinhNgoaiGoiPhiQueryInfoQueryInfo.TuNgay = this.search.RangeDateTimeFilter.DateStart;
    this.baoCaoDichVuPhatSinhNgoaiGoiPhiQueryInfoQueryInfo.DenNgay = this.search.RangeDateTimeFilter.DateEnd;
    this.baoCaoDichVuPhatSinhNgoaiGoiPhiQueryInfoQueryInfo.HopDongId =  this.search.HopDongId;
    this.baoCaoDichVuPhatSinhNgoaiGoiPhiQueryInfoQueryInfo.CongTyId =  this.search.CongTyId;
    if (this.authService.hasPermission(this.documentType, SecurityOperation.Process)) {
     
      this.dialog.open(LoadingComponent, {
        disableClose: true,
        width: '200px',
        height: '90px',
        data: { Title: 'Đang xuất excel...' }
      });
      this.apiService.postExportExcel<any>("BaoCao/ExportBaoCaoChiTietThuTienDichVuNgoaiGoi", this.baoCaoDichVuPhatSinhNgoaiGoiPhiQueryInfoQueryInfo)
        .subscribe(res => {
          let dateTimeNow = new Date();
          CommonService.downLoadFile(res, "application/vnd.ms-excel", "BaoCaoDanhSachDichVuNgoaiGoiCuaKeToan" + dateTimeNow.getFullYear() + ".xlsx");
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
