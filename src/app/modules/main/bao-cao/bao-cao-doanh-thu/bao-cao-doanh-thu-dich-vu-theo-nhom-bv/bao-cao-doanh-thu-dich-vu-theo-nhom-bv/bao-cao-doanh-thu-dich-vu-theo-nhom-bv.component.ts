import { Component, OnInit, ViewChild, Input, TemplateRef, ChangeDetectorRef } from '@angular/core';
import icMoreHoriz from '@iconify/icons-ic/twotone-more-horiz';
import icicActivated from '@iconify/icons-ic/twotone-check-box';
import icicUnActivated from '@iconify/icons-ic/twotone-check-box-outline-blank';
import icicdone from '@iconify/icons-ic/twotone-done';
import icClose from '@iconify/icons-ic/twotone-close';
import { GridDataResult, GridComponent, PageChangeEvent } from '@progress/kendo-angular-grid';
import { WindowComponent } from '@progress/kendo-angular-dialog';
import { Search, QuayThuNgan, NhanVienThuNgan, BaoCaoDoanhThuTheoNhomBenhVienSearch, BaoCaoDoanhThuTheoNhomBenhVienQueryInfo } from '../bao-cao-doanh-thu-dich-vu-theo-nhom-bv';
import { ConfirmComponent } from 'src/app/shared/component/dialogs/confirm/confirm.component';
import { environment } from 'src/environments/environment';
import { ApiService } from 'src/app/core/services/api.service';
import { GridQueryInfo } from 'src/app/shared/models/common.model';
import { CommonService } from 'src/app/core/utilities/common.helper';
import { BaoCaoThuTienVienPhi, SearchThuNgan } from '../bao-cao-doanh-thu-dich-vu-theo-nhom-bv';
import { State, process } from '@progress/kendo-data-query';
import { MatDialog } from '@angular/material';
import { AuthService } from 'src/app/core/services/auth.service';
import { LoadingComponent } from 'src/app/shared/component/dialogs/loading/loading.component';
import { SecurityOperation } from 'src/app/shared/enum/security-operation.enum';
import { NotificationService } from 'src/app/core/services/notification.service';
import { SystemMessage } from 'src/app/shared/configdata/system-message';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';

declare var jQuery: any;

@Component({
  selector: 'app-bao-cao-doanh-thu-dich-vu-theo-nhom-bv',
  templateUrl: './bao-cao-doanh-thu-dich-vu-theo-nhom-bv.component.html',
  styleUrls: ['./bao-cao-doanh-thu-dich-vu-theo-nhom-bv.component.scss']
})

export class BaoCaoDoanhThuDichVuTheoNhomBVComponent implements OnInit {

  search = new Search();
  searchThuNgan = new SearchThuNgan();
  showExpandReLoadPage: boolean = true;
  public nhanVienThuNgan = new NhanVienThuNgan();
  public quayThuNgan = new QuayThuNgan();

  public gridView: GridDataResult;
  public gridViewDetail: GridDataResult;

  public gridData: BaoCaoThuTienVienPhi[] = [];
  public gridDataDetail: BaoCaoThuTienVienPhi[] = [];
  dataSource: any = {
    data: [],
    total: 0
  };

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

  constructor(private apiService: ApiService,
    private dialog: MatDialog,
    private notificationService: NotificationService,
    private authService: AuthService,
    private cd:ChangeDetectorRef) {

  }


  public baoCaoThuTienVienPhi: BaoCaoThuTienVienPhi[] = [];
  private items: any[] = this.baoCaoThuTienVienPhi;
  expression: boolean = false;

  dataToSumAllThanhTien:any;

  public totalKhamBenh: number = 0;
  public totalXetNghiem: number = 0;
  public totalNoiSoi: number = 0;
  public totalNoiSoiTMH: number = 0;
  public totalSieuAm: number = 0;
  public totalXQuang: number = 0;
  public totalCTScan: number = 0;
  public totalMRI: number = 0;
  public totalDienTimDienNao: number = 0;
  public totalTDCNDoLoangXuong: number = 0;
  public totalThuThuat: number = 0;
  public totalPhauThuat: number = 0;
  public totalNgayGiuong: number = 0;
  public totalDVKhac: number = 0;
  public totalThuoc: number = 0;
  public totalVTYT: number = 0;


  baoCaoSearch: BaoCaoDoanhThuTheoNhomBenhVienSearch = new BaoCaoDoanhThuTheoNhomBenhVienSearch();

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
  _isMessage: boolean = false;
  _isLoadingTotalPage: boolean = false;
  _showDefaultPagerTemplate: boolean;
  showDefaultPagerTemplate: boolean = true;
  @ViewChild(GridComponent, { static: true }) gridChild: GridComponent;
  @ViewChild(WindowComponent, { static: false }) windowChild: WindowComponent;
  @ViewChild(ConfirmComponent, { static: false }) confirm: ConfirmComponent;
  @Input() heightToolbar: number = 140;

  @ViewChild('baoCaoChiTietDoanhthuTheoKhoaPhongGrid', { static: true }) baoCaoChiTietDoanhthuTheoKhoaPhongGrid: any;
  @ViewChild('NgayThuStr', { static: true }) NgayThuStr: TemplateRef<any>;
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
  public groupNhom = new Map();

  //================================Begin group aggregates ===========================
  public aggregates: any[] = [
    { field: 'KhamBenh', aggregate: 'sum' }
  ];

  baoCaoDoanhThuTheoNhomBenhVienQueryInfo: BaoCaoDoanhThuTheoNhomBenhVienQueryInfo = new BaoCaoDoanhThuTheoNhomBenhVienQueryInfo();
  urlGetDataGridChild: string = "";
  urlGetPageDataGridChild: string = "";
  @ViewChild('baoCaoChiTietThuVienPhiGrid', { static: true }) baoCaoChiTietThuVienPhiGrid: any;

  ngOnInit() {
    this.documentType = DocumentType.BaoCaoDoanhThuTheoNhomDichVu;
    this._showDefaultPagerTemplate = this.showDefaultPagerTemplate;
    this.skip = 0;
    this.take = (this.pageSize * this.skip) + this.pageSize;
    this.skipDetail = 0;
    this.take = (this.pageSize * this.skipDetail) + this.pageSize;

    this.baoCaoDoanhThuTheoNhomBenhVienQueryInfo.TuNgay = this.search.RangeDateTimeFilter.DateStart;
    this.baoCaoDoanhThuTheoNhomBenhVienQueryInfo.DenNgay = this.search.RangeDateTimeFilter.DateEnd;
    this.baoCaoDoanhThuTheoNhomBenhVienQueryInfo.PhongBenhVienId = this.quayThuNgan.KeyId;
    this.baoCaoDoanhThuTheoNhomBenhVienQueryInfo.NhanVienId = this.nhanVienThuNgan.KeyId;

    this.gridColumns = [
      { Field: "STT", Title: "STT", Width: 100 }, //0
      { Field: "MaNB", Title: "Mã NB", Width: 150 },
      { Field: "MaTN", Title: "Mã TN", Width: 150 }, // 1
      { Field: "HoVaTen", Title: "Họ và Tên", Width: 150 },//2
      { Field: "NamSinh", Title: "Năm sinh", MinWidth: 120 },//3
      { Field: "GioiTinh", Title: "Giới tính", Width: 200 },//4
      { Field: "SoBenhAn", Title: "Số bệnh án", Width: 120 },//5
      { Field: "NoiDung", Title: "Nội dung", Width: 300 },//6
      { Field: "NgayThuStr", Title: "Ngày", Width: 150 },//7
      { Field: "NguoiGioiThieu", Title: "Người giới thiệu", Width: 150 },//8

      { Field: "KhamBenh", Title: "Khám bệnh", Width: 120 },//9
      { Field: "XetNghiem", Title: "Xét nghiệm", Width: 120 },//10
      { Field: "NoiSoi", Title: "Nội soi", Width: 120 },//11
      { Field: "NoiSoiTMH", Title: "Nội soi TMH", Width: 120 },//12
      { Field: "SieuAm", Title: "Siêu âm", Width: 120 },//13
      { Field: "XQuang", Title: "X-Quang", Width: 120 },//14
      { Field: "CTScan", Title: "CT Scan", Width: 120 },//15
      { Field: "MRI", Title: "MRI", Width: 120 },//16
      { Field: "DienTimDienNao", Title: "ĐiệnTim + Điện Não", Width: 170 },//17
      { Field: "TDCNDoLoangXuong", Title: "TDCN + Đo loãng xương", Width: 170 },//18
      { Field: "ThuThuat", Title: "Thủ thuật", Width: 120 },//19
      { Field: "PhauThuat", Title: "Phẫu Thuật", Width: 120 },//20
      { Field: "NgayGiuong", Title: "Ngày giường", Width: 120 },//21
      { Field: "DVKhac", Title: "DV khác", Width: 180 },//22
      { Field: "Thuoc", Title: "Thuốc", Width: 180 },//23
      { Field: "VTYT", Title: "VTYT", Width: 120 },//24
      { Field: "TongCong", Title: "Tổng cộng", Width: 120 },//25
      { Field: "Nhom", Title: "Nhóm", Width: 100, Sortable: true, Hidden: true},//26

    ];

    this.minDateTuNgay = new Date();
    this.minDateTuNgay.setHours(0, 0, 0, 0);
    var firstDayOfMonth = new Date(this.minDateTuNgay.getFullYear(), this.minDateTuNgay.getMonth(), 1); 

    if (this.search.RangeDateTimeFilter.DateStart == null) {
      this.search.RangeDateTimeFilter.DateStart = firstDayOfMonth;
    }

    if (this.baoCaoSearch.TuNgayFormat == null) {
      this.baoCaoSearch.TuNgayFormat = this.minDateTuNgay;
    }
    if (this.baoCaoSearch.DenNgayFormat == null) {
      this.baoCaoSearch.DenNgayFormat = new Date();
    }

  }

  totalThanhTien(field){
    switch (field) {
      case 'KhamBenh':
        if (this.dataToSumAllThanhTien != undefined && this.dataToSumAllThanhTien != null) {
          return this.dataToSumAllThanhTien.reduce((sum: any, item: { KhamBenh: any; }) => sum + item.KhamBenh, 0);
        }
      case 'XetNghiem':
        if (this.dataToSumAllThanhTien != undefined && this.dataToSumAllThanhTien != null) {
          return this.dataToSumAllThanhTien.reduce((sum: any, item: { XetNghiem: any; }) => sum + item.XetNghiem, 0);
        }
      case 'NoiSoi':
        if (this.dataToSumAllThanhTien != undefined && this.dataToSumAllThanhTien != null) {
          return this.dataToSumAllThanhTien.reduce((sum: any, item: { NoiSoi: any; }) => sum + item.NoiSoi, 0);
        }
      case 'NoiSoiTMH':
        if (this.dataToSumAllThanhTien != undefined && this.dataToSumAllThanhTien != null) {
          return this.dataToSumAllThanhTien.reduce((sum: any, item: { NoiSoiTMH: any; }) => sum + item.NoiSoiTMH, 0);
        }
      case 'SieuAm':
        if (this.dataToSumAllThanhTien != undefined && this.dataToSumAllThanhTien != null) {
          return this.dataToSumAllThanhTien.reduce((sum: any, item: { SieuAm: any; }) => sum + item.SieuAm, 0);
        }
      case 'XQuang':
        if (this.dataToSumAllThanhTien != undefined && this.dataToSumAllThanhTien != null) {
          return this.dataToSumAllThanhTien.reduce((sum: any, item: { XQuang: any; }) => sum + item.XQuang, 0);
        }
      case 'CTScan':
        if (this.dataToSumAllThanhTien != undefined && this.dataToSumAllThanhTien != null) {
          return this.dataToSumAllThanhTien.reduce((sum: any, item: { CTScan: any; }) => sum + item.CTScan, 0);
        }
      case 'MRI':
        if (this.dataToSumAllThanhTien != undefined && this.dataToSumAllThanhTien != null) {
          return this.dataToSumAllThanhTien.reduce((sum: any, item: { MRI: any; }) => sum + item.MRI, 0);
        }
      case 'DienTimDienNao':
        if (this.dataToSumAllThanhTien != undefined && this.dataToSumAllThanhTien != null) {
          return this.dataToSumAllThanhTien.reduce((sum: any, item: { DienTimDienNao: any; }) => sum + item.DienTimDienNao, 0);
        }
      case 'TDCNDoLoangXuong':
        if (this.dataToSumAllThanhTien != undefined && this.dataToSumAllThanhTien != null) {
          return this.dataToSumAllThanhTien.reduce((sum: any, item: { TDCNDoLoangXuong: any; }) => sum + item.TDCNDoLoangXuong, 0);
        }
      case 'ThuThuat':
        if (this.dataToSumAllThanhTien != undefined && this.dataToSumAllThanhTien != null) {
          return this.dataToSumAllThanhTien.reduce((sum: any, item: { ThuThuat: any; }) => sum + item.ThuThuat, 0);
        }
      case 'PhauThuat':
        if (this.dataToSumAllThanhTien != undefined && this.dataToSumAllThanhTien != null) {
          return this.dataToSumAllThanhTien.reduce((sum: any, item: { PhauThuat: any; }) => sum + item.PhauThuat, 0);
        }
      case 'NgayGiuong':
        if (this.dataToSumAllThanhTien != undefined && this.dataToSumAllThanhTien != null) {
          return this.dataToSumAllThanhTien.reduce((sum: any, item: { NgayGiuong: any; }) => sum + item.NgayGiuong, 0);
        }
      case 'DVKhac':
        if (this.dataToSumAllThanhTien != undefined && this.dataToSumAllThanhTien != null) {
          return this.dataToSumAllThanhTien.reduce((sum: any, item: { DVKhac: any; }) => sum + item.DVKhac, 0);
        }
      case 'Thuoc':
        if (this.dataToSumAllThanhTien != undefined && this.dataToSumAllThanhTien != null) {
          return this.dataToSumAllThanhTien.reduce((sum: any, item: { Thuoc: any; }) => sum + item.Thuoc, 0);
        }
      case 'VTYT':
        if (this.dataToSumAllThanhTien != undefined && this.dataToSumAllThanhTien != null) {
          return this.dataToSumAllThanhTien.reduce((sum: any, item: { VTYT: any; }) => sum + item.VTYT, 0);
        }
      case 'TongCong':
        if (this.dataToSumAllThanhTien != undefined && this.dataToSumAllThanhTien != null) {
          return this.dataToSumAllThanhTien.reduce((sum: any, item: { TongCong: any; }) => sum + item.TongCong, 0);
        }
    }
  }
 


  public state: State = {
    skip: 0,
    take: 0,
    group: [{ field: 'Nhom', aggregates: this.aggregates }]
  };

  searchRefresh() {
    this.XemBaoCao();
  }


  public pageChange(event: PageChangeEvent): void {
    this.skip = event.skip;
    // this.XemBaoCao();

    if (this.dataSource.data.length == 0 ) {
      this.XemBaoCao();
    } else {
      var takeTo = +this.skip + +this.pageSize;
      let gridData = this.dataSource.data.slice(this.skip, takeTo);
      this.gridView = process(gridData, { group: this.state.group });
      this.gridView.total= this.dataSource.total;
      if (this.gridView.data == null)
        this._isMessage = true; // show massage
        if (this.gridView.total != 0) {
          this.ishowView = true;
        } else {
          this.ishowView = false;
        }
      // this.gridView.data = this.gridView.data.slice(this.skip, takeTo);
    }
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


  returnDetail() {
    let denNgay = CommonService.formatDateTime(this.search.RangeDateTimeFilter.DateEnd, "mm/dd/yyyy");
    let tuNgay = CommonService.formatDateTime(this.search.RangeDateTimeFilter.DateStart, "mm/dd/yyyy");
    let string = tuNgay + "-" + denNgay + "-" + this.baoCaoDoanhThuTheoNhomBenhVienQueryInfo.NhanVienId + "-" + this.quayThuNgan.KeyId;
    return string;
  }

  chonQuay(item: any) {
    this.quayThuNgan = item;
  }

  chonQuayChange(item: any) {
    if (item != undefined) {
      this.quayThuNgan.KeyId = item;
    }
    else {
      this.quayThuNgan.KeyId = 0;
    }
  }

  chonNhanVien(item: any) {
    this.nhanVienThuNgan = item;
  }

  chonNhanVienChange(item: any) {
    if (item != undefined) {
      this.nhanVienThuNgan.KeyId = item;
    }
    else {
      this.nhanVienThuNgan.KeyId = 0;
    }
  }

  public groupBySTT(keyColumn: any): any {
    let valueGroup: any = [];
    this.groupNhom.forEach((value, key) => {
      if (keyColumn == key) {
        valueGroup = value[0];
      }
    });
    return valueGroup;
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
    this.cd.detectChanges()

  }

  changeValueStart(event: any) {
    this.minDateDenNgay = new Date();
    this.minDateTuNgay = new Date();
    if (this.search.RangeDateTimeFilter.DateStart != null && this.search.RangeDateTimeFilter.DateEnd != null
      && this.search.RangeDateTimeFilter.DateEnd > this.search.RangeDateTimeFilter.DateStart) {
      this.search.RangeDateTimeFilter.DateEnd = this.minDateDenNgay;
    }
    if (this.search.RangeDateTimeFilter.DateStart == null) {
      this.search.RangeDateTimeFilter.DateStart = this.minDateTuNgay;
    }
  }

  // listNhom:any=[];
  XemBaoCao() {
    if(this.search.RangeDateTimeFilter.DateStart==null || this.search.RangeDateTimeFilter.DateEnd==null)
    {
        this.notificationService.showError("Từ ngày và đến ngày yêu cầu nhập");
        return;
    }
    this._isMessage = true;
    this._isLoading = true;
    this._isLoadingTotalPage = true;
    if (this.search.RangeDateTimeFilter.DateStart == null) {
      this.minDateTuNgay = new Date();
      this.minDateTuNgay.setHours(0, 0, 0, 0);
      this.search.RangeDateTimeFilter.DateStart = this.minDateTuNgay;
    }
    // if (this.search.RangeDateTimeFilter.DateEnd == null) {
    //   this.minDateTuNgay = new Date();
    //   this.search.RangeDateTimeFilter.DateEnd = this.minDateTuNgay;
    // }
    if (this.search.RangeDateTimeFilter.DateStart != null) {
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
    this.baoCaoDoanhThuTheoNhomBenhVienQueryInfo.TuNgay = this.search.RangeDateTimeFilter.DateStart;
    this.baoCaoDoanhThuTheoNhomBenhVienQueryInfo.DenNgay = this.search.RangeDateTimeFilter.DateEnd;
    this.baoCaoDoanhThuTheoNhomBenhVienQueryInfo.NhanVienId = searchThuNgan.NhanVienId;
    this.baoCaoDoanhThuTheoNhomBenhVienQueryInfo.PhongBenhVienId = searchThuNgan.PhongBenhVienId;
    this.baoCaoDoanhThuTheoNhomBenhVienQueryInfo.Skip = this.skip;
    this.baoCaoDoanhThuTheoNhomBenhVienQueryInfo.Take = this.skip + this.pageSize;
    this.apiService.post<any>("BaoCao/GetBaoCaoDoanhThuDichVuTheoNhomBenhVienForGridAsync", this.baoCaoDoanhThuTheoNhomBenhVienQueryInfo).subscribe(resultData => {
      if (resultData !== undefined && resultData != null) {
        let listNhom: any = [];
        let stt: number = 1;
        resultData.Data.forEach(p => {
          let nhom = listNhom.filter(s=>s == p.Nhom)[0];
          if(!nhom){
            stt = 1;
            listNhom.push(p.Nhom);
          }  
          p.STT = stt;
          stt++;
        });
        
        // this.baoCaoThuTienVienPhi = resultData.Data;
        this.dataToSumAllThanhTien = resultData.Data;
        // this.state.take = this.baoCaoThuTienVienPhi.length;
        // this.groupNhom = this.groupBy(this.baoCaoThuTienVienPhi, pet => pet.Nhom);
        // console.log(this.groupNhom)
        // let dataList = process(this.dataToSumAllThanhTien, this.state);
        this.dataSource = {
          data: resultData.Data,
          total: resultData.TotalRowCount
        };
        var takeTo = +this.skip + +this.pageSize;
        let gridData = this.dataSource.data.slice(this.skip, takeTo);

        this.gridView = process(gridData, { group: this.state.group });
        this.gridView.total = this.dataSource.total;

        this._isLoading = false;

        this._isLoadingTotalPage = false;
        if (this.gridView.data == null)
          this._isMessage = true; // show massage
      }
      if (this.gridView.total != 0) {
        this.ishowView = true;
      } else {
        this.ishowView = false;
      }
    });

  }

  groupBy(list, keyGetter) {
    const map = new Map();
    list.forEach((item) => {
      const key = keyGetter(item);
      const collection = map.get(key);
      if (!collection) {
        map.set(key, [item]);
      } else {
        collection.push(item);
      }
    });
    return map;
  }

  XuatBaoCao() {
    if(this.search.RangeDateTimeFilter.DateStart==null || this.search.RangeDateTimeFilter.DateEnd==null)
    {
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

      CommonService.formatDateTime(this.baoCaoSearch.TuNgayFormat, "dd/mm/yyyy");
      CommonService.formatDateTime(this.baoCaoSearch.DenNgayFormat, "dd/mm/yyyy");
      this.baoCaoSearch.TuNgay = this.search.RangeDateTimeFilter.DateStart;
      this.baoCaoSearch.DenNgay = this.search.RangeDateTimeFilter.DateEnd;

      this.apiService.postExportExcel<any>("BaoCao/ExportBaoCaoDoanhThuBenhVienTheoNhom", this.baoCaoSearch)
        .subscribe(res => {
          let dateTimeNow = new Date();
          CommonService.downLoadFile(res, "application/vnd.ms-excel", "BaoCaoDoanhThuTheoNhomDichVu" + dateTimeNow.getFullYear() + ".xlsx");
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
  // hàm format tiền cho báo cáo 
  formatPrice(value) {
    let val = (value / 1).toFixed(2).replace('.', ',')
    return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")
  }
}
