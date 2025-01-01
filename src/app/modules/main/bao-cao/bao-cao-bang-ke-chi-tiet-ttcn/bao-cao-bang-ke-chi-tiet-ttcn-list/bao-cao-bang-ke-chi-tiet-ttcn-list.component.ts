import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material';
import { ApiService } from 'src/app/core/services/api.service';
import { AuthService } from 'src/app/core/services/auth.service';
import { NotificationService } from 'src/app/core/services/notification.service';
import { CommonService } from 'src/app/core/utilities/common.helper';
import { LoadingComponent } from 'src/app/shared/component/dialogs/loading/loading.component';
import { SystemMessage } from 'src/app/shared/configdata/system-message';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import { SecurityOperation } from 'src/app/shared/enum/security-operation.enum';
import { BaoCaoBangKeChiTietTTCNSearch, InBaoCaoBangKeChiTietTTCN } from '../bao-cao-bang-ke-chi-tiet-ttcn.model';

import icFilterList from '@iconify/icons-ic/twotone-filter-list';
import { GridComponent } from 'src/app/shared/component/grid/grid.component';

@Component({
  selector: 'app-bao-cao-bang-ke-chi-tiet-ttcn-list',
  templateUrl: './bao-cao-bang-ke-chi-tiet-ttcn-list.component.html',
  styleUrls: ['./bao-cao-bang-ke-chi-tiet-ttcn-list.component.scss']
})
export class BaoCaoBangKeChiTietTtcnListComponent implements OnInit {
  baoCaoSearch: BaoCaoBangKeChiTietTTCNSearch = new BaoCaoBangKeChiTietTTCNSearch ();
  inBaoCaoBangKeChiTietTTCN: InBaoCaoBangKeChiTietTTCN = new InBaoCaoBangKeChiTietTTCN ();
  minDateTuNgay:any;
  documentType:DocumentType
  gridColumns:any = []
  gridDataSource: any = {
    data:[],
    total: 0
  };
  public gridView: any = {
    data:[],
    total: 0
  };

  public pageSize = 50;
  public skip = 0;

  showGrid: boolean = false;
  showPrintExport: boolean = false;

  icFilterList = icFilterList;

  @ViewChild(GridComponent, {static:true})gridChild:GridComponent;
  @ViewChild("sttTemplate", {static:true})sttTemplate:TemplateRef<any>;
  @ViewChild("soTienCongNoTemplate", {static:true})soTienCongNoTemplate:TemplateRef<any>;
  @ViewChild("soTienDaThanhToanTemplate", {static:true})soTienDaThanhToanTemplate:TemplateRef<any>;
  @ViewChild("soTienConNoTemplate", {static:true})soTienConNoTemplate:TemplateRef<any>;
  @ViewChild("soTienHoanTraTemplate", {static:true})soTienHoanTraTemplate:TemplateRef<any>;
  constructor(private apiService: ApiService,
    private dialog: MatDialog,
    private notificationService: NotificationService,
    private authService: AuthService) { }

  ngOnInit() {
    this.documentType = DocumentType.BaoCaoBangKeChiTietTTCN
    if (window.location.protocol == "http:") {
      this.inBaoCaoBangKeChiTietTTCN.HostingName = "http://" + window.location.host;
    } else {
      this.inBaoCaoBangKeChiTietTTCN.HostingName = "https://" + window.location.host;
    }

    this.gridColumns=[
      // {Field:"STT", Title:"STT", Width: 70, Template:this.sttTemplate},
      {Field:"NgayThangStr", Title:"Ngày tháng", Width: 100},
      {Field:"DoiTuongBaoLanhCongNo", Title:"Đối tượng bảo lãnh công nợ", Width: 100},
      {Field:"MaTN", Title:"Mã TN", Width: 100},
      {Field:"TenBN", Title:"Tên BN", Width: 100},
      {Field:"SoPhieuThu", Title:"Số BL/HĐ", Width: 100},
      {Field:"NgayPhatSinhPhieuThuStr", Title:"Ngày BL/HĐ", Width: 100},
      {Field:"SoTienCongNo", Title:"Số tiền phải thu", Width: 100, Template:this.soTienCongNoTemplate},
      {Field:"SoTienDaThanhToan", Title:"Số tiền đã thanh toán", Width: 100, Template:this.soTienDaThanhToanTemplate},
      {Field:"SoTienConNo", Title:"Số tiền còn phải thanh toán", Width: 100, Template:this.soTienConNoTemplate},
      {Field:"SoTienHoanTra", Title:"Số tiền hoàn trả", Width: 100, Template:this.soTienHoanTraTemplate},
    ]

    this.minDateTuNgay = new Date();
    this.minDateTuNgay.setHours(0, 0, 0, 0);
    var firstDayOfMonth = new Date(this.minDateTuNgay.getFullYear(), this.minDateTuNgay.getMonth(), 1);  
    
    if (this.baoCaoSearch.TuNgayFormat == null) {
      this.baoCaoSearch.TuNgayFormat =firstDayOfMonth;
    }
    if (this.baoCaoSearch.DenNgayFormat == null) {
      this.baoCaoSearch.DenNgayFormat = new Date();
      this.baoCaoSearch.DenNgayFormat.setHours(23,59,59);
    }
  }

  pageChange(event){
    this.skip = event;
    // this.XemBaoCao();
    var takeTo = +this.skip + +this.pageSize;
    this.gridView.data = this.gridDataSource.data.slice(this.skip, takeTo);
    this.gridView.total = this.gridDataSource.total;
  }

  seachChange(event){
    this.skip = 0;
    this.XemBaoCao();
  }

  XemBaoCao() {
    this.gridChild._isLoadingTotalPage = true;
    this.gridChild._isLoading = true;
    if(this.baoCaoSearch.TuNgayFormat==null || this.baoCaoSearch.DenNgayFormat==null)
    {
        this.notificationService.showError("Từ ngày và đến ngày yêu cầu nhập");
        this.gridChild._isLoadingTotalPage = false;
        this.gridChild._isLoading = false;
        return;
    }
    
    this.baoCaoSearch.FromDate = this.baoCaoSearch.TuNgayFormat;
    this.baoCaoSearch.ToDate = this.baoCaoSearch.DenNgayFormat;

    this.apiService.post<any>("BaoCao/GetDataBaoCaoBangKeChiTietTTCNForGridAsync", this.baoCaoSearch).subscribe(resultData => {
      if (resultData !== undefined && resultData != null) {
        if(resultData.TotalRowCount !== undefined && resultData.TotalRowCount != 0)
        {
         this.showPrintExport = true;
        }
        this.showGrid = true;
        this.gridDataSource.data = [...resultData.Data];
        this.gridDataSource.total = this.gridDataSource.data.length;

        // this.gridChild.setDataSource();
        var takeTo = +this.skip + +this.pageSize;
        this.gridView.data = this.gridDataSource.data.slice(this.skip, takeTo);
        this.gridView.total = this.gridDataSource.total;
        this.gridChild._isLoadingTotalPage = false;
        this.gridChild._isLoading = false;
      }
    });

  }

  exportExcel() {
    if(this.baoCaoSearch.TuNgayFormat==null || this.baoCaoSearch.DenNgayFormat==null)
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
      
      let tuNgay = CommonService.formatDateTime(this.baoCaoSearch.TuNgayFormat, "dd/mm/yyyy");
      let denNgay = CommonService.formatDateTime(this.baoCaoSearch.DenNgayFormat, "dd/mm/yyyy");
     
      this.baoCaoSearch.FromDate=this.baoCaoSearch.TuNgayFormat;
      this.baoCaoSearch.ToDate=this.baoCaoSearch.DenNgayFormat;
      this.apiService.postExportExcel<any>("BaoCao/ExportBaoCaoBangKeChiTietTTCN", this.baoCaoSearch)
        .subscribe(res => {
          let dateTimeNow = new Date();
          CommonService.downLoadFile(res, "application/vnd.ms-excel", "BangKeChiTietTTCN" + dateTimeNow.getFullYear() + ".xlsx");
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


  // format tiền trên UI
  formatPrice(value) {
    let val = (value / 1).toFixed(2).replace('.', ',')
    return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")
  }
}
