import { Component, OnInit, ViewChild, Input, TemplateRef } from '@angular/core';
import icMoreHoriz from '@iconify/icons-ic/twotone-more-horiz';
import icicActivated from '@iconify/icons-ic/twotone-check-box';
import icicUnActivated from '@iconify/icons-ic/twotone-check-box-outline-blank';
import icicdone from '@iconify/icons-ic/twotone-done';
import icClose from '@iconify/icons-ic/twotone-close';
import { GridDataResult, GridComponent, PageChangeEvent } from '@progress/kendo-angular-grid';
import { GroupDescriptor, SortDescriptor } from '@progress/kendo-data-query';
import { WindowComponent } from '@progress/kendo-angular-dialog';

import { ConfirmComponent } from 'src/app/shared/component/dialogs/confirm/confirm.component';
import { environment } from 'src/environments/environment';
import { ApiService } from 'src/app/core/services/api.service';
import { GridQueryInfo } from 'src/app/shared/models/common.model';
import { CommonService } from 'src/app/core/utilities/common.helper';
import { BCDoanhThuKhamDoanTheoNhomDVSearch } from '../bao-cao-dt-kham-doan-theo-nhom-dich-vu.model';
import { LoadingComponent } from 'src/app/shared/component/dialogs/loading/loading.component';
import { MatDialog } from '@angular/material';
import { NotificationService } from 'src/app/core/services/notification.service';
import { AuthService } from 'src/app/core/services/auth.service';
import { SecurityOperation } from 'src/app/shared/enum/security-operation.enum';
import { SystemMessage } from 'src/app/shared/configdata/system-message';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';
declare var jQuery: any;

@Component({
  selector: 'app-bao-cao-dt-kham-doan-theo-nhom-dich-vu-list',
  templateUrl: './bao-cao-dt-kham-doan-theo-nhom-dich-vu-list.component.html',
  styleUrls: ['./bao-cao-dt-kham-doan-theo-nhom-dich-vu-list.component.scss']
})
export class BaoCaoDtKhamDoanTheoNhomDichVuListComponent implements OnInit {

  search = new BCDoanhThuKhamDoanTheoNhomDVSearch();
  showExpandReLoadPage : boolean = true;

  public gridView: GridDataResult;
  public gridViewDetail: GridDataResult;

  public pageSize = 50;
  public skip = 0;
  public skipDetail = 0;
  jqueryString: string = "";

  DateStart: string = null;
  DateEnd: string = null;
  

    constructor(private dialog: MatDialog, private apiService: ApiService, private notificationService: NotificationService,    private authService: AuthService,) {
  }
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

  gridColumns: any[];
  gridChildColumns: any[];
  public groups: GroupDescriptor[] = [{
    field: 'Loai',
  },{
    field: 'TenCongTy',
  }];
  @ViewChild(GridComponent, { static: true }) gridChild: GridComponent;
  @ViewChild(WindowComponent, { static: false }) windowChild: WindowComponent;
  @ViewChild(ConfirmComponent, { static: false }) confirm: ConfirmComponent;
  @Input() heightToolbar: number = 140;

  @ViewChild('baoCaoChiTietDoanhthuTheoKhoaPhongGrid', { static: true }) baoCaoChiTietDoanhthuTheoKhoaPhongGrid: any;


  //================================Begin group aggregates ===========================
  bcDoanhThuKhamDoanTheoNhomDVSearch: BCDoanhThuKhamDoanTheoNhomDVSearch = new BCDoanhThuKhamDoanTheoNhomDVSearch();
  urlGetDataGridChild : string = "";
  urlGetPageDataGridChild : string = "";
  @ViewChild('baoCaoDoanhThuKhamDoanTheoNhomDichVuGrid', { static: true }) baoCaoDoanhThuKhamDoanTheoNhomDichVuGrid: any;
  @ViewChild('sttTemplate', { static: true }) sttTemplate: TemplateRef<any>;

  @ViewChild('kBTemplate', { static: true }) kBTemplate: TemplateRef<any>;
  @ViewChild('xNTemplate', { static: true }) xNTemplate: TemplateRef<any>;
  @ViewChild('nSTemplate', { static: true }) nSTemplate: TemplateRef<any>;
  @ViewChild('nSTMHTemplate', { static: true }) nSTMHTemplate: TemplateRef<any>;
  @ViewChild('sATemplate', { static: true }) sATemplate: TemplateRef<any>;
  @ViewChild('xQuangTemplate', { static: true }) xQuangTemplate: TemplateRef<any>;
  @ViewChild('ctSanTemplate', { static: true }) ctSanTemplate: TemplateRef<any>;
  @ViewChild('mRITemplate', { static: true }) mRITemplate: TemplateRef<any>;
  @ViewChild('dtdnTemplate', { static: true }) dtdnTemplate: TemplateRef<any>;
  @ViewChild('dlxTemplate', { static: true }) dlxTemplate: TemplateRef<any>;
  @ViewChild('dvKhacTemplate', { static: true }) dvKhacTemplate: TemplateRef<any>;
  @ViewChild('tcTemplate', { static: true }) tcTemplate: TemplateRef<any>;

  @ViewChild('kBNGTemplate', { static: true }) kBNGTemplate: TemplateRef<any>;
  @ViewChild('xNNGTemplate', { static: true }) xNNGTemplate: TemplateRef<any>;
  @ViewChild('nSNGTemplate', { static: true }) nSNGTemplate: TemplateRef<any>;
  @ViewChild('nSTMHNGTemplate', { static: true }) nSTMHNGTemplate: TemplateRef<any>;
  @ViewChild('sANGTemplate', { static: true }) sANGTemplate: TemplateRef<any>;
  @ViewChild('xQuangNGTemplate', { static: true }) xQuangNGTemplate: TemplateRef<any>;
  @ViewChild('ctSanNGTemplate', { static: true }) ctSanNGTemplate: TemplateRef<any>;
  @ViewChild('mRINGTemplate', { static: true }) mRINGTemplate: TemplateRef<any>;
  @ViewChild('dtdnNGTemplate', { static: true }) dtdnNGTemplate: TemplateRef<any>;
  @ViewChild('dlxNGTemplate', { static: true }) dlxNGTemplate: TemplateRef<any>;
  @ViewChild('dvKhacNGTemplate', { static: true }) dvKhacNGTemplate: TemplateRef<any>;
  @ViewChild('tcNGTemplate', { static: true }) tcNGTemplate: TemplateRef<any>;

  @ViewChild('ttNGTemplate', { static: true }) ttNGTemplate: TemplateRef<any>;
  @ViewChild('ppNGTemplate', { static: true }) ppNGTemplate: TemplateRef<any>;
  
  ngOnInit() {
    this.documentType = DocumentType.BaoCaoDoanhThuKhamDoanTheoNhomDichVu;
    this._showDefaultPagerTemplate = this.showDefaultPagerTemplate;
    this.skip = 0;
    this.take = (this.pageSize * this.skip) + this.pageSize;
    this.skipDetail = 0;
    this.take = (this.pageSize * this.skipDetail) + this.pageSize;

    this.gridColumns = [
      { Field: "STT", Title: "STT", Width: 50 }, //0 
      { Field: "MaNB", Title: "Mã NB", Width: 150 },//1
      { Field: "MaTN", Title: "Mã TN", Width: 150 },//2
      { Field: "HoVaTen", Title: "Họ và tên", Width: 130 },//3
      { Field: "NamSinh", Title: "Năm sinh", Width: 130 },//4
      { Field: "GioiTinh", Title: "Giới tính", MinWidth: 130 },//5

      { Field: "SoTienDVKhamBenh", Title: "Khám bệnh", Width: 130 },//6
      { Field: "SoTienDVXetNghiem", Title: "Xét nghiệm", MinWidth: 200 },//7
      { Field: "SoTienDVThamDoChucNangNoiSoi", Title: "Nội soi", Width: 80 },//8
      { Field: "SoTienDVTDCNNoiSoiTMH", Title: "Nội soi TMH", Width: 80 },//9
      { Field: "SoTienDVCDHASieuAm", Title: "Siêu âm", Width: 200 },//10
      { Field: "SoTienDVCDHAXQuangThuongXQuangSoHoa", Title: "X-Quang", Width: 100 },//11
      { Field: "SoTienDVCTScan", Title: "CT Scan", Width: 100 },//12
      { Field: "SoTienDVMRI", Title: "MRI", Width: 100 },//13
      { Field: "SoTienDVDienTimDienNao", Title: "ĐiệnTim + Điện Não", Width: 120 },//14
      { Field: "SoTienDVTDCNDoLoangXuong", Title: "TDCN + Đo loãng xương", Width: 100 },//15
      { Field: "SoTienDVKhac", Title: "DV khác", Width: 100 },//16
      { Field: "TongCong", Title: "Tổng cộng", Width: 100 },//17

      { Field: "SoTienDVKhamBenhNG", Title: "Khám bệnh", Width: 130 },//18
      { Field: "SoTienDVXetNghiemNG", Title: "Xét nghiệm", MinWidth: 200 },//19
      { Field: "SoTienDVThamDoChucNangNoiSoiNG", Title: "Nội soi", Width: 80 },//20
      { Field: "SoTienDVTDCNNoiSoiTMHNG", Title: "Nội soi TMH", Width: 80 },//21
      { Field: "SoTienDVCDHASieuAmNG", Title: "Siêu âm", Width: 200 },//22
      { Field: "SoTienDVCDHAXQuangThuongXQuangSoHoaNG", Title: "X-Quang", Width: 100 },//23
      { Field: "SoTienDVCTScanNG", Title: "CT Scan", Width: 100 },//24
      { Field: "SoTienDVMRING", Title: "MRI", Width: 100 },//25
      { Field: "SoTienDVDienTimDienNaoNG", Title: "ĐiệnTim + Điện Não", Width: 120 },//26
      { Field: "SoTienDVTDCNDoLoangXuongNG", Title: "TDCN + Đo loãng xương", Width: 100 },//27
      { Field: "SoTienDVThuThuatNG", Title: "Thủ thuật", Width: 100 },//28
      { Field: "SoTienDVPhauThuatNG", Title: "Phẫu thuật", Width: 100 },//29
      { Field: "SoTienDVKhacNG", Title: "DV khác", Width: 100 },//30
      { Field: "TongCongNG", Title: "Tổng cộng", Width: 100 },//31
    ];
    this.gridChildColumns = [
      { Field: "STT", Title: "STT", Width: 50 ,Template: this.sttTemplate}, //0 
      { Field: "MaNB", Title: "Mã NB", Width: 150 },//1
      { Field: "MaTN", Title: "Mã TN", Width: 150 },//2
      { Field: "HoVaTen", Title: "Họ và tên", Width: 130 },//3
      { Field: "NamSinh", Title: "Năm sinh", Width: 130 },//4
      { Field: "GioiTinh", Title: "Giới tính", MinWidth: 130 },//5

      { Field: "SoTienDVKhamBenh", Title: "Khám bệnh", Width: 130 ,Template: this.kBTemplate},//6
      { Field: "SoTienDVXetNghiem", Title: "Xét nghiệm", MinWidth: 200 ,Template: this.xNTemplate},//7
      { Field: "SoTienDVThamDoChucNangNoiSoi", Title: "Nội soi", Width: 80 ,Template: this.nSTemplate},//8
      { Field: "SoTienDVTDCNNoiSoiTMH", Title: "Nội soi TMH", Width: 80 ,Template: this.nSTMHTemplate},//9
      { Field: "SoTienDVCDHASieuAm", Title: "Siêu âm", Width: 200,Template: this.sATemplate },//10
      { Field: "SoTienDVCDHAXQuangThuongXQuangSoHoa", Title: "X-Quang", Width: 100 ,Template: this.xQuangTemplate},//11
      { Field: "SoTienDVCTScan", Title: "CT Scan", Width: 100,Template: this.ctSanTemplate },//12
      { Field: "SoTienDVMRI", Title: "MRI", Width: 100 ,Template: this.mRITemplate },//13
      { Field: "SoTienDVDienTimDienNao", Title: "ĐiệnTim + Điện Não", Width: 120,Template: this.dtdnTemplate},//14
      { Field: "SoTienDVTDCNDoLoangXuong", Title: "TDCN + Đo loãng xương", Width: 100,Template: this.dlxTemplate },//15
      { Field: "SoTienDVKhac", Title: "DV khác", Width: 100,Template: this.dvKhacTemplate },//16
      { Field: "TongCong", Title: "Tổng cộng", Width: 100 ,Template: this.tcTemplate},//17

      { Field: "SoTienDVKhamBenhNG", Title: "Khám bệnh", Width: 130,Template: this.kBNGTemplate },//18
      { Field: "SoTienDVXetNghiemNG", Title: "Xét nghiệm", MinWidth: 200 ,Template: this.xNNGTemplate},//19
      { Field: "SoTienDVThamDoChucNangNoiSoiNG", Title: "Nội soi", Width: 80 ,Template: this.nSNGTemplate},//20
      { Field: "SoTienDVTDCNNoiSoiTMHNG", Title: "Nội soi TMH", Width: 80 ,Template: this.nSTMHNGTemplate},//21
      { Field: "SoTienDVCDHASieuAmNG", Title: "Siêu âm", Width: 200 ,Template: this.sANGTemplate},//22
      { Field: "SoTienDVCDHAXQuangThuongXQuangSoHoaNG", Title: "X-Quang", Width: 100 ,Template: this.xQuangNGTemplate},//23
      { Field: "SoTienDVCTScanNG", Title: "CT Scan", Width: 100 ,Template: this.ctSanNGTemplate},//24
      { Field: "SoTienDVMRING", Title: "MRI", Width: 100 ,Template: this.mRINGTemplate},//25
      { Field: "SoTienDVDienTimDienNaoNG", Title: "ĐiệnTim + Điện Não", Width: 120 },//26
      { Field: "SoTienDVTDCNDoLoangXuongNG", Title: "TDCN + Đo loãng xương", Width: 100 ,Template: this.dtdnNGTemplate},//27
      { Field: "SoTienDVThuThuatNG", Title: "Thủ thuật", Width: 100 ,Template: this.ttNGTemplate},//28
      { Field: "SoTienDVPhauThuatNG", Title: "Phẫu thuật", Width: 100 ,Template: this.ppNGTemplate},//29
      { Field: "SoTienDVKhacNG", Title: "DV khác", Width: 100 ,Template: this.dvKhacNGTemplate},//30
      { Field: "TongCongNG", Title: "Tổng cộng", Width: 100 ,Template: this.tcNGTemplate},//31
    ];
    this.minDateTuNgay = new Date();
    this.minDateTuNgay.setHours(0, 0, 0, 0);
    var firstDayOfMonth = new Date(this.minDateTuNgay.getFullYear(), this.minDateTuNgay.getMonth(), 1);
      
    if (this.search.FromDate == null) {
      this.search.FromDate = firstDayOfMonth;
    }
    if (this.search.ToDate == null) {
      this.search.ToDate = new Date();
    }
  }
  searchRefresh(){
    this.XemBaoCao();
  }


  public pageChange(event: PageChangeEvent): void {
    this.skip = event.skip;
    this.bcDoanhThuKhamDoanTheoNhomDVSearch.Skip =event.skip;
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
  getMinWidthColumn(minWidth: number) {
    var widthParent = jQuery("#baoCaoDoanhThuKhamDoanTheoNhomDichVuGrid").parent().width();
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
  XemBaoCao() {
  
  //  if(this.search.HopDongId == null)
  //  {
  //    this.notificationService.showError("Yêu cầu nhập hợp đồng.")
  //  }
  //  if(this.search.CongTyId == null)
  //  {
  //    this.notificationService.showError("Yêu cầu nhập công ty.")
  //  }
  //  if(this.search.ToDate == null)
  //  {
  //    this.notificationService.showError("Yêu cầu nhập từ ngày.")
  //  }
  //  if(this.search.FromDate == null)
  //  {
  //    this.notificationService.showError("Yêu cầu nhập đến ngày.")
  //  }
  //  if(this.search.HopDongId != null && 
  //     this.search.CongTyId != null &&
  //     this.search.ToDate != null && 
  //     this.search != null )
  //     {
  //       this.dialog.open(LoadingComponent, {
  //         disableClose: true,
  //         width: '200px',
  //         height: '90px',
  //         data: { Title: 'Đang tải dữ liệu...' }
  //       });
  //       this._isMessage = true;
  //       this._isLoading = true;
  //       this._isLoadingTotalPage = true;
        
  //       this.bcDoanhThuKhamDoanTheoNhomDVSearch.ToDate = this.search.ToDate;
  //       this.bcDoanhThuKhamDoanTheoNhomDVSearch.FromDate = this.search.FromDate;
  //       this.bcDoanhThuKhamDoanTheoNhomDVSearch.HopDongId =  this.search.HopDongId;
  //       this.bcDoanhThuKhamDoanTheoNhomDVSearch.CongTyId =  this.search.CongTyId;
  //       this.apiService.post<any>("BaoCao/GetDataBCDoanhThuKhamDoanTheoNhomDichVuToTalGroups",this.bcDoanhThuKhamDoanTheoNhomDVSearch).subscribe(resultData => {
  //         if (resultData !== undefined && resultData != null) {
  //           this.gridView = {
  //             data: resultData.Data,
  //             total: resultData.TotalRowCount
  //           };
  //           this._isLoading = false; // show icon loading
  //           this.gridView.data.forEach((item, idx) => {
  //             this.baoCaoDoanhThuKhamDoanTheoNhomDichVuGrid.collapseRow(idx);
  //         });
  //         this._isLoadingTotalPage = false;
  //         if(this.gridView.data  == null)
  //            this._isMessage = true; // show massage
  //         }
  //         if (this.gridView.total != 0){
  //         this.ishowView = true;
  //         } else{
  //           this.ishowView = false;
  //         }
          
  //         this.dialog.closeAll();
  //       });
  //     }
  
  }
  changeLookupHopDong(event){
    
    if(event && event.length > 0 && this.search.CongTyId && !this.search.HopDongId )
    {
      
      if(event.length > 1)
      {
        this.search.HopDongId = event[1].KeyId;
      }
      else{
        this.search.HopDongId = event[0].KeyId;
      }
      if(this.search.HopDongId == 0 )
      {
        this.search.CongTyId = 0;
      }
     
    }
  }
  changeCongTy(event){
    this.search.CongTyId = event;
    if(this.search.CongTyId == 0 )
    {
      this.search.HopDongId = 0;
    }
    else{
      this.search.HopDongId = null;
    }
  }
  XuatBaoCao() {
    if(this.search.HopDongId == null || this.search.CongTyId == null )
    {
      this.notificationService.showError("Yêu cầu nhập công ty và hợp đồng"); 
        return;
    }
    if(this.search.ToDate == null || this.search.FromDate == null )
    {
      this.notificationService.showError("Yêu cầu nhập từ ngày đến ngày"); 
        return;
    }
    this.bcDoanhThuKhamDoanTheoNhomDVSearch.ToDate = this.search.ToDate;
    this.bcDoanhThuKhamDoanTheoNhomDVSearch.FromDate = this.search.FromDate;
    this.bcDoanhThuKhamDoanTheoNhomDVSearch.HopDongId =  this.search.HopDongId;
    this.bcDoanhThuKhamDoanTheoNhomDVSearch.CongTyId =  this.search.CongTyId;
    if (this.authService.hasPermission(this.documentType, SecurityOperation.Process)) {
     
      this.dialog.open(LoadingComponent, {
        disableClose: true,
        width: '200px',
        height: '90px',
        data: { Title: 'Đang xuất excel...' }
      });
      this.apiService.postExportExcel<any>("BaoCao/ExportBCDoanhThuKhamDoanTheoNhomDichVu", this.bcDoanhThuKhamDoanTheoNhomDVSearch)
        .subscribe(res => {
          let dateTimeNow = new Date();
          CommonService.downLoadFile(res, "application/vnd.ms-excel", "BaoCaoDoanhThuKhamDoanTheoNhomDichVu" + dateTimeNow.getFullYear() + ".xlsx");
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
  detailExpand(event: any) {
    this.showExpandReLoadPage = false;
    this.urlGetDataGridChild = "BaoCao/GetDataBCDoanhThuKhamDoanTheoNhomDichVuChiTiet";
    this.urlGetPageDataGridChild = "BaoCao/GetDataTotalBCDoanhThuKhamDoanTheoNhomDichVuChiTiet";
  }
  returnDetail(dataItem:any){
    this.bcDoanhThuKhamDoanTheoNhomDVSearch.ToDate = this.search.ToDate;
    this.bcDoanhThuKhamDoanTheoNhomDVSearch.FromDate = this.search.FromDate;
    this.bcDoanhThuKhamDoanTheoNhomDVSearch.HopDongId =  dataItem.HopDongId;
    this.bcDoanhThuKhamDoanTheoNhomDVSearch.CongTyId =  dataItem.CongTyId;
    let jsonString =  JSON.stringify(this.bcDoanhThuKhamDoanTheoNhomDVSearch);
    return jsonString;
  }
}
