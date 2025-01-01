import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material';
import { GroupDescriptor } from '@progress/kendo-data-query';
import { ApiService } from 'src/app/core/services/api.service';
import { AuthService } from 'src/app/core/services/auth.service';
import { NotificationService } from 'src/app/core/services/notification.service';
import { CommonService } from 'src/app/core/utilities/common.helper';
import { LoadingComponent } from 'src/app/shared/component/dialogs/loading/loading.component';
import { SystemMessage } from 'src/app/shared/configdata/system-message';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import { SecurityOperation } from 'src/app/shared/enum/security-operation.enum';
import { BaoCaoTinhHinhTraNCCSearch, InBaoCaoTinhHinhTraNCC } from '../bao-cao-tinh-hinh-tra-ncc.model';
import icFilterList from '@iconify/icons-ic/twotone-filter-list';
import { GridComponent } from 'src/app/shared/component/grid/grid.component';
import { GridDataResult } from '@progress/kendo-angular-grid';
import { process } from '@progress/kendo-data-query';

@Component({
  selector: 'app-bao-cao-tinh-hinh-tra-ncc-list',
  templateUrl: './bao-cao-tinh-hinh-tra-ncc-list.component.html',
  styleUrls: ['./bao-cao-tinh-hinh-tra-ncc-list.component.scss']
})
export class BaoCaoTinhHinhTraNccListComponent implements OnInit {
  baoCaoSearch: BaoCaoTinhHinhTraNCCSearch = new BaoCaoTinhHinhTraNCCSearch ();
  inBaoCaoTinhHinhTraNCC: InBaoCaoTinhHinhTraNCC = new InBaoCaoTinhHinhTraNCC ();
  minDateTuNgay:any;
  documentType:DocumentType

  groups: GroupDescriptor[] = [{ field: 'Nhom' }];
  icFilterList = icFilterList
  gridColumns:any = []
  gridDataSource: any = {
    data:[],
    total: 0
  };

  public pageSize = 50;
  public skip = 0;

  @ViewChild(GridComponent,{static:true})gridChild:GridComponent;
  @ViewChild("thanhTienTemplateFooter", { static: true }) thanhTienTemplateFooter: TemplateRef<any>;
  @ViewChild("thanhTienTemplate", { static: true }) thanhTienTemplate: TemplateRef<any>;
  @ViewChild("donGiaTemplate", { static: true }) donGiaTemplate: TemplateRef<any>;
  @ViewChild("nhomGroupHeaderTemplate", { static: true }) nhomGroupHeaderTemplate: TemplateRef<any>;
  constructor(private apiService: ApiService,
    private dialog: MatDialog,
    private notificationService: NotificationService,
    private authService: AuthService) { }

  ngOnInit() {
    this.documentType=DocumentType.BaoCaoTinhHinhTraNCC
    if (window.location.protocol == "http:") {
      this.inBaoCaoTinhHinhTraNCC.HostingName = "http://" + window.location.host;
    } else {
      this.inBaoCaoTinhHinhTraNCC.HostingName = "https://" + window.location.host;
    }

    this.gridColumns = [
      {Field:"NgayHoaDonStr", Title:"Ngày hoá đơn", Width:150},
      {Field:"SoHoaDon", Title:"Số hoá đơn", Width:100},
      {Field:"NgayTraStr", Title:"Ngày trả", Width:100},
      {Field:"SoPhieuTra", Title:"Phiếu trả", Width:100},
      {Field:"CongTy", Title:"Công ty", Width:200},
      {Field:"MaThuoc", Title:"Mã thuốc", Width:100},
      {Field:"TenThuoc", Title:"Tên thuốc, hàm lượng", Width:300},
      {Field:"DVT", Title:"ĐVT", Width:100},
      {Field:"SoLo", Title:"Số lô", Width:100},
      {Field:"SoLuongTra", Title:"Số lượng trả", Width:150},
      {Field:"DonGiaNhap", Title:"Đơn giá nhập", Width:150, Template: this.donGiaTemplate},
      {Field:"ThanhTien", Title:"Thành tiền", Width:150, TemplateFooter: this.thanhTienTemplateFooter, Template: this.thanhTienTemplate},
      {Field:"DienGiai", Title:"Diễn giải", Width:300},
      {Field: "Nhom", Title: "Nhóm", Width: 100, Sortable: true, Hidden: true, TemplateGroupHeader: this.nhomGroupHeaderTemplate},

    ]

    this.minDateTuNgay = new Date();
    this.minDateTuNgay.setHours(0, 0, 0, 0);

    if (this.baoCaoSearch.TuNgayFormat == null) {
      this.baoCaoSearch.TuNgayFormat = this.minDateTuNgay;
    }
    if (this.baoCaoSearch.DenNgayFormat == null) {
      this.baoCaoSearch.DenNgayFormat = new Date();
      this.baoCaoSearch.DenNgayFormat.setHours(23,59,59);
    }
  }
  totalThanhTien() {
    if (this.gridDataSource.data != undefined) {
      return this.gridDataSource.data.reduce((sum, item) => sum + item.ThanhTien, 0);
    }
  }

  pageChange(event){
    this.skip = event;
    this.XemBaoCao();
    // var takeTo = +this.skip + +this.pageSize;
    // this.gridView.data = this.gridDataSource.data.slice(this.skip, takeTo);
    // this.gridView.total = this.gridDataSource.total;
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

    if(!this.baoCaoSearch.KhoId)
    {
        this.notificationService.showError("Kho yêu cầu nhập");
        this.gridChild._isLoadingTotalPage = false;
        this.gridChild._isLoading = false;
        return;
    }

    this.baoCaoSearch.FromDate = this.baoCaoSearch.TuNgayFormat;
    this.baoCaoSearch.ToDate = this.baoCaoSearch.DenNgayFormat;

    this.apiService.post<any>("BaoCao/GetDataBaoCaoTinhHinhTraNCCForGridAsync", this.baoCaoSearch).subscribe(resultData => {
      if (resultData !== undefined && resultData != null) {
        // if(resultData.TotalRowCount !== undefined && resultData.TotalRowCount != 0)
        // {
        //  this.showPrintExport = true;
        // }
        // this.showGrid = true;
        this.gridDataSource = {
          data: resultData.Data,
          total: resultData.TotalRowCount
        };

        var takeTo = +this.skip + +this.pageSize;
        this.gridDataSource.data = this.gridDataSource.data.slice(this.skip, takeTo);

        this.gridChild.setDataSource();
        // this.gridChild.setDataSource()
        this.gridChild._isLoadingTotalPage = false;
        this.gridChild._isLoading = false;
        // this.gridView = process(resultData.Data, { group: this.groups });

      }
    });

  }

  exportExcel() {
    if(this.baoCaoSearch.TuNgayFormat==null || this.baoCaoSearch.DenNgayFormat==null)
    {
        this.notificationService.showError("Từ ngày và đến ngày yêu cầu nhập");
        return;
    }

    if(!this.baoCaoSearch.KhoId)
    {
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
      this.apiService.postExportExcel<any>("BaoCao/ExportBaoCaoTinhHinhTraNCC", this.baoCaoSearch)
        .subscribe(res => {
          let dateTimeNow = new Date();
          CommonService.downLoadFile(res, "application/vnd.ms-excel", "BaoCaoTinhHinhTraNCC" + dateTimeNow.getFullYear() + ".xlsx");
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
