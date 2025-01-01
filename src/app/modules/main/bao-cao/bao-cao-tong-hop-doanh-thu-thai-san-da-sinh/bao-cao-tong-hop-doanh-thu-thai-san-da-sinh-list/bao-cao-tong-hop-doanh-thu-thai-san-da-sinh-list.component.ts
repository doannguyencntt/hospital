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
import { BaoCaoTongHopDoanhThuThaiSanDaSinhSearch, InBaoCaoTongHopDoanhThuThaiSanDaSinh } from '../bao-cao-tong-hop-doanh-thu-thai-san-da-sinh.model';
import icFilterList from '@iconify/icons-ic/twotone-filter-list';
import icSearch from '@iconify/icons-ic/twotone-search';
import { FormControl } from '@angular/forms';
import { GridComponent } from 'src/app/shared/component/grid/grid.component';

@Component({
  selector: 'app-bao-cao-tong-hop-doanh-thu-thai-san-da-sinh-list',
  templateUrl: './bao-cao-tong-hop-doanh-thu-thai-san-da-sinh-list.component.html',
  styleUrls: ['./bao-cao-tong-hop-doanh-thu-thai-san-da-sinh-list.component.scss']
})
export class BaoCaoTongHopDoanhThuThaiSanDaSinhListComponent implements OnInit {
  baoCaoSearch: BaoCaoTongHopDoanhThuThaiSanDaSinhSearch = new BaoCaoTongHopDoanhThuThaiSanDaSinhSearch();
  inBaoCaoTongHopDoanhThuThaiSanDaSinh: InBaoCaoTongHopDoanhThuThaiSanDaSinh = new InBaoCaoTongHopDoanhThuThaiSanDaSinh();
  minDateTuNgay: any;
  documentType: DocumentType
  gridColumns:any = []
  gridDataSource: any = {
    data:[],
    total: 0
  };

  gridView: any = {
    data:[],
    total: 0
  };
  public pageSize = 50;
  public skip = 0;

  showGrid: boolean = false;
  showPrintExport: boolean = false;
  icFilterList = icFilterList;
  icSearch = icSearch;
  searchCtrl = new FormControl();
  SearchString = "";

@ViewChild(GridComponent, {static:true})gridChild:GridComponent;
@ViewChild("tongTienSauChietKhauTemplate", {static:true})tongTienSauChietKhauTemplate:TemplateRef<any>;
@ViewChild("tongTienDichVuNgoaiGoiTemplate", {static:true})tongTienDichVuNgoaiGoiTemplate:TemplateRef<any>;
@ViewChild("tongSoTienChuaTruBHYTTemplate", {static:true})tongSoTienChuaTruBHYTTemplate:TemplateRef<any>;
@ViewChild("tongTienBHYTChiTraTemplate", {static:true})tongTienBHYTChiTraTemplate:TemplateRef<any>;
@ViewChild("thanhTienTemplate", {static:true})thanhTienTemplate:TemplateRef<any>;
@ViewChild("soTienDaThanhToanTemplate", {static:true})soTienDaThanhToanTemplate:TemplateRef<any>;
@ViewChild("soTienConThieuTemplate", {static:true})soTienConThieuTemplate:TemplateRef<any>;

@ViewChild("tongTienSauChietKhauSumTemplateFooter", {static:true})tongTienSauChietKhauSumTemplateFooter:TemplateRef<any>;
@ViewChild("tongTienDichVuNgoaiGoiSumTemplateFooter", {static:true})tongTienDichVuNgoaiGoiSumTemplateFooter:TemplateRef<any>;
@ViewChild("tongSoTienChuaTruBHYTSumTemplateFooter", {static:true})tongSoTienChuaTruBHYTSumTemplateFooter:TemplateRef<any>;
@ViewChild("soTienDaThanhToanSumTemplateFooter", {static:true})soTienDaThanhToanSumTemplateFooter:TemplateRef<any>;
@ViewChild("soTienConThieuSumTemplateFooter", {static:true})soTienConThieuSumTemplateFooter:TemplateRef<any>;
@ViewChild("tongCongTemplateFooter", {static:true})tongCongTemplateFooter:TemplateRef<any>;

  constructor(private apiService: ApiService,
    private dialog: MatDialog,
    private notificationService: NotificationService,
    private authService: AuthService) { }

  ngOnInit() {
    this.documentType = DocumentType.BaoCaoTongHopDoanhThuThaiSanDaSinh
    if (window.location.protocol == "http:") {
      this.inBaoCaoTongHopDoanhThuThaiSanDaSinh.HostingName = "http://" + window.location.host;
    } else {
      this.inBaoCaoTongHopDoanhThuThaiSanDaSinh.HostingName = "https://" + window.location.host;
    }

    this.gridColumns = [
      {Field:"MaBN", Title:"Mã NB", Width:100},
      {Field:"MaTN", Title:"Mã TN", Width:100},
      {Field:"TenBN", Title:"Tên BN", Width:200},
      {Field:"NgaySinhStr", Title:"Ngày sinh", Width:100},
      {Field:"DiaChi", Title:"Địa chỉ", Width:200},
      {Field:"NgayVaoVienStr", Title:"Ngày vào viện", Width:140},
      {Field:"NgayRaVienStr", Title:"Ngày ra viện", Width:140},
      {Field:"CachThucDe", Title:"Cách thức đẻ", Width:140, TemplateFooter: this.tongCongTemplateFooter},
      {Field:"TongTienSauChietKhau", Title:"Số tiền gói đăng ký", Width:180, Template: this.tongTienSauChietKhauTemplate, TemplateFooter: this.tongTienSauChietKhauSumTemplateFooter},
      {Field:"TongTienDichVuNgoaiGoi", Title:"Số tiền phát sinh ngoài gói", Width:210, Template: this.tongTienDichVuNgoaiGoiTemplate, TemplateFooter: this.tongTienDichVuNgoaiGoiSumTemplateFooter},
      {Field:"TongSoTienChuaTruBHYT", Title:"Tổng số tiền phải thanh toán", Width:220, Template: this.tongSoTienChuaTruBHYTTemplate, TemplateFooter: this.tongSoTienChuaTruBHYTSumTemplateFooter},
      {Field:"TongTienBHYTChiTra", Title:"Thành tiền BHYT chi trả", Width:200, Template: this.tongTienBHYTChiTraTemplate},
      {Field:"ThanhTien", Title:"Thành tiền BN phải trả", Width:180, Template: this.thanhTienTemplate},
      {Field:"SoTienDaThanhToan", Title:"Số tiền BN đã thanh toán", Width:200, Template: this.soTienDaThanhToanTemplate, TemplateFooter: this.soTienDaThanhToanSumTemplateFooter},
      {Field:"SoTienConThieu", Title:"Số tiền BN còn phải thanh toán", Width:250, Template: this.soTienConThieuTemplate, TemplateFooter: this.soTienConThieuSumTemplateFooter},


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
  }

  totalTongTienSauChietKhau() {
    if (this.gridDataSource.data != undefined) {
      return this.gridDataSource.data.reduce((sum, item) => sum + item.TongTienSauChietKhau, 0);
    }
  }

  totalTongTienDichVuNgoaiGoi() {
    if (this.gridDataSource.data != undefined) {
      return this.gridDataSource.data.reduce((sum, item) => sum + item.TongTienDichVuNgoaiGoi, 0);
    }
  }

  totalTongSoTienChuaTruBHYT() {
    if (this.gridDataSource.data != undefined) {
      return this.gridDataSource.data.reduce((sum, item) => sum + item.TongSoTienChuaTruBHYT, 0);
    }
  }

  totalSoTienDaThanhToan() {
    if (this.gridDataSource.data != undefined) {
      return this.gridDataSource.data.reduce((sum, item) => sum + item.SoTienDaThanhToan, 0);
    }
  }

  totalSoTienConThieu() {
    if (this.gridDataSource.data != undefined) {
      return this.gridDataSource.data.reduce((sum, item) => sum + item.SoTienConThieu, 0);
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

    if(this.baoCaoSearch.TuNgayFormat==null || this.baoCaoSearch.DenNgayFormat==null)
    {
        this.notificationService.showError("Từ ngày và đến ngày yêu cầu nhập");
        return;
    }

    this.gridChild._isLoadingTotalPage = true;
    this.gridChild._isLoading = true;
    this.baoCaoSearch.FromDate = this.baoCaoSearch.TuNgayFormat;
    this.baoCaoSearch.ToDate = this.baoCaoSearch.DenNgayFormat;
    this.apiService.post<any>("BaoCao/GetDataBaoCaoTongHopDoanhThuThaiSanDaSinhForGridAsync", this.baoCaoSearch).subscribe(resultData => {
      if (resultData !== undefined && resultData != null) {
        if(resultData.TotalRowCount !== undefined && resultData.TotalRowCount != 0)
        {
         this.showPrintExport = true;
        }
        this.showGrid = true;
        this.gridDataSource.data = [...resultData.Data];
        this.gridDataSource.total = this.gridDataSource.data.length;

        var takeTo = +this.skip + +this.pageSize;
        this.gridView.data = this.gridDataSource.data.slice(this.skip, takeTo);
        this.gridView.total = this.gridDataSource.total;

        this.gridChild._isLoadingTotalPage = false;
        this.gridChild._isLoading = false;
      }
    });

  }

  exportExcel() {
    if (this.baoCaoSearch.TuNgayFormat == null || this.baoCaoSearch.DenNgayFormat == null) {
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
      this.baoCaoSearch.FromDate = this.baoCaoSearch.TuNgayFormat;
      this.baoCaoSearch.ToDate = this.baoCaoSearch.DenNgayFormat;
      this.apiService.postExportExcel<any>("BaoCao/ExportBaoCaoTongHopDoanhThuThaiSanDaSinh", this.baoCaoSearch)
        .subscribe(res => {
          let dateTimeNow = new Date();
          CommonService.downLoadFile(res, "application/vnd.ms-excel", "BaoCaoTongHopDoanhThuThaiSanDaSinh" + dateTimeNow.getFullYear() + ".xlsx");
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
