import { Component, OnInit, ViewChild, TemplateRef} from '@angular/core';
import { MatDialog } from '@angular/material';
import { ApiService } from 'src/app/core/services/api.service';
import { AuthService } from 'src/app/core/services/auth.service';
import { NotificationService } from 'src/app/core/services/notification.service';
import { CommonService } from 'src/app/core/utilities/common.helper';
import { LoadingComponent } from 'src/app/shared/component/dialogs/loading/loading.component';
import { SystemMessage } from 'src/app/shared/configdata/system-message';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import { SecurityOperation } from 'src/app/shared/enum/security-operation.enum';
import { BaoCaoTongHopDangKyGoiDichVuSearch, InBaoCaoTongHopDangKyGoiDichVu } from '../bao-cao-tong-hop-dang-ky-goi-dich-vu.model';
import icSearch from '@iconify/icons-ic/twotone-search';
import { FormControl } from '@angular/forms';
import icFilterList from '@iconify/icons-ic/twotone-filter-list';
import { GridComponent } from 'src/app/shared/component/grid/grid.component';

@Component({
  selector: 'app-bao-cao-tong-hop-dang-ky-goi-dich-vu-list',
  templateUrl: './bao-cao-tong-hop-dang-ky-goi-dich-vu-list.component.html',
  styleUrls: ['./bao-cao-tong-hop-dang-ky-goi-dich-vu-list.component.scss']
})
export class BaoCaoTongHopDangKyGoiDichVuListComponent implements OnInit {
  baoCaoSearch: BaoCaoTongHopDangKyGoiDichVuSearch = new BaoCaoTongHopDangKyGoiDichVuSearch ();
  inBaoCaoTongHopDangKyGoiDichVu: InBaoCaoTongHopDangKyGoiDichVu = new InBaoCaoTongHopDangKyGoiDichVu ();
  minDateTuNgay:any;
  documentType:DocumentType
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

  @ViewChild(GridComponent, {static:true}) gridChild:GridComponent;
  @ViewChild("sttTemplate", {static:true})sttTemplate:TemplateRef<any>;
  @ViewChild("giaTriGoiTemplate", {static:true})giaTriGoiTemplate:TemplateRef<any>;
  @ViewChild("daThuTemplate", {static:true})daThuTemplate:TemplateRef<any>;
  @ViewChild("conThieuTemplate", {static:true})conThieuTemplate:TemplateRef<any>;
  @ViewChild("giaTriDichVuDaThucHienTemplate", {static:true})giaTriDichVuDaThucHienTemplate:TemplateRef<any>;
  @ViewChild("giaTriDichVuChuaThucHienTemplate", {static:true})giaTriDichVuChuaThucHienTemplate:TemplateRef<any>;
  @ViewChild("soTienHoanTraTemplate", {static:true})soTienHoanTraTemplate:TemplateRef<any>;
  @ViewChild("phiPhatHuyGoiTemplate", {static:true})phiPhatHuyGoiTemplate:TemplateRef<any>;
  @ViewChild("huyTemplate", {static:true})huyTemplate:TemplateRef<any>;
  constructor(private apiService: ApiService,
    private dialog: MatDialog,
    private notificationService: NotificationService,
    private authService: AuthService) { }

  ngOnInit() {
    this.documentType=DocumentType.BaoCaoTongHopDangKyGoiDichVu
    if (window.location.protocol == "http:") {
      this.inBaoCaoTongHopDangKyGoiDichVu.HostingName = "http://" + window.location.host;
    } else {
      this.inBaoCaoTongHopDangKyGoiDichVu.HostingName = "https://" + window.location.host;
    }

    this.gridColumns = [
      // {Field:"STT", Title:"STT", Width: 60 , Template: this.sttTemplate},
      {Field : "NgayDangKyStr", Title:"Ngày", Width: 90},
      {Field : "MaNB", Title:"Mã NB", Width: 80},
      {Field : "TenBN", Title:"Tên người bệnh", Width: 160},
      {Field : "NgaySinhDisplay", Title:"Năm sinh", Width: 90},
      {Field : "DiaChi", Title:"Địa chỉ", Width: 140},
      {Field : "TenGoi", Title:"Tên gói", Width: 140},
      {Field : "GiaTriGoi", Title:"Giá trị gói", Width: 100, Template : this.giaTriGoiTemplate },
      {Field : "DaThu", Title:"Đã thu", Width: 100, Template : this.daThuTemplate},
      {Field : "ConThieu", Title:"Còn phải thu", Width: 100, Template : this.conThieuTemplate},
      {Field : "GiaTriDichVuDaThucHien", Title:"Giá trị DV đã thực hiện trong gói", Width: 100, Template : this.giaTriDichVuDaThucHienTemplate},
      {Field : "GiaTriDichVuChuaThucHien", Title:"Giá trị DV chưa thực hiện trong gói", Width: 100, Template : this.giaTriDichVuChuaThucHienTemplate},
      {Field : "PhiPhatHuyGoi", Title:"Phí phạt huỷ gói", Width: 100, Template : this.phiPhatHuyGoiTemplate},
      {Field : "SoTienHoanTra", Title:"Hoàn trả", Width: 100, Template : this.soTienHoanTraTemplate },
      {Field : "HuyGoi", Title:"Huỷ", Width: 50, Template:this.huyTemplate},

    ]

    this.minDateTuNgay = new Date();
    this.minDateTuNgay.setHours(0, 0, 0, 0);
    var firstDay = new Date(this.minDateTuNgay.getFullYear(), this.minDateTuNgay.getMonth(), 1);


    if (this.baoCaoSearch.TuNgayFormat == null) {
      this.baoCaoSearch.TuNgayFormat = firstDay;
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

    if(this.baoCaoSearch.TuNgayFormat==null || this.baoCaoSearch.DenNgayFormat==null)
    {
        this.notificationService.showError("Từ ngày và đến ngày yêu cầu nhập");
        return;
    }
    let tuNgay = CommonService.formatDateTime(this.baoCaoSearch.TuNgayFormat, "mm/dd/yyyy");
    let denNgay = CommonService.formatDateTime(this.baoCaoSearch.DenNgayFormat, "mm/dd/yyyy");

    this.baoCaoSearch.FromDate = tuNgay;
    this.baoCaoSearch.ToDate = denNgay;
    this.gridChild._additionalSearchString = JSON.stringify(this.baoCaoSearch);
    this.gridChild.search();

    // this.gridChild._isLoadingTotalPage = true;
    // this.gridChild._isLoading = true;
    // this.baoCaoSearch.FromDate = this.baoCaoSearch.TuNgayFormat;
    // this.baoCaoSearch.ToDate = this.baoCaoSearch.DenNgayFormat;

    // this.apiService.post<any>("BaoCao/GetDataBaoCaoTongHopDangKyGoiDichVu", this.baoCaoSearch).subscribe(resultData => {
    //   if (resultData !== undefined && resultData != null) {
    //     if(resultData.TotalRowCount !== undefined && resultData.TotalRowCount != 0)
    //     {
    //      this.showPrintExport = true;
    //     }
    //     this.showGrid = true;
    //     this.gridDataSource.data = [...resultData.Data];
    //     this.gridDataSource.total = this.gridDataSource.data.length;

    //     var takeTo = +this.skip + +this.pageSize;
    //     this.gridView.data = this.gridDataSource.data.slice(this.skip, takeTo);
    //     this.gridView.total = this.gridDataSource.total;

    //     this.gridChild._isLoadingTotalPage = false;
    //     this.gridChild._isLoading = false;
    //   }
    // });

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
      // this.baoCaoSearch.FromDate = this.baoCaoSearch.TuNgayFormat;
      // this.baoCaoSearch.ToDate = this.baoCaoSearch.DenNgayFormat;
      let tuNgay = CommonService.formatDateTime(this.baoCaoSearch.TuNgayFormat, "mm/dd/yyyy");
      let denNgay = CommonService.formatDateTime(this.baoCaoSearch.DenNgayFormat, "mm/dd/yyyy");
      this.baoCaoSearch.FromDate = tuNgay;
      this.baoCaoSearch.ToDate = denNgay;
      this.gridChild._gridQueryInfo.additionalSearchString = JSON.stringify(this.baoCaoSearch);
      this.apiService.postExportExcel<any>("BaoCao/ExportBaoCaoTongHopDangKyGoiDichVu", this.gridChild._gridQueryInfo)
        .subscribe(res => {
          let dateTimeNow = new Date();
          CommonService.downLoadFile(res, "application/vnd.ms-excel", "BaoCaoTongHopDangKyGoiDichVu" + dateTimeNow.getFullYear() + ".xlsx");
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
