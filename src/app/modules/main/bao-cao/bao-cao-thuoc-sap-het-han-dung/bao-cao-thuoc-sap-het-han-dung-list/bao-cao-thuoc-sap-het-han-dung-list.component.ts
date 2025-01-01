import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material';
import { DataResult, GroupDescriptor } from '@progress/kendo-data-query';
import { ApiService } from 'src/app/core/services/api.service';
import { AuthService } from 'src/app/core/services/auth.service';
import { NotificationService } from 'src/app/core/services/notification.service';
import { CommonService } from 'src/app/core/utilities/common.helper';
import { LoadingComponent } from 'src/app/shared/component/dialogs/loading/loading.component';
import { SystemMessage } from 'src/app/shared/configdata/system-message';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import { SecurityOperation } from 'src/app/shared/enum/security-operation.enum';
import { BaoCaoThuocSapHetHanSearch, InBaoCaoThuocSapHetHan } from '../bao-cao-thuoc-sap-het-han-dung.model';
import icFilterList from '@iconify/icons-ic/twotone-filter-list';
import { process } from '@progress/kendo-data-query';
import { GridComponent } from 'src/app/shared/component/grid/grid.component';
import { GridDataResult } from '@progress/kendo-angular-grid';

@Component({
  selector: 'app-bao-cao-thuoc-sap-het-han-dung-list',
  templateUrl: './bao-cao-thuoc-sap-het-han-dung-list.component.html',
  styleUrls: ['./bao-cao-thuoc-sap-het-han-dung-list.component.scss']
})
export class BaoCaoThuocSapHetHanDungListComponent implements OnInit {
  baoCaoSearch: BaoCaoThuocSapHetHanSearch = new BaoCaoThuocSapHetHanSearch();
  inBaoCaoThuocSapHetHan: InBaoCaoThuocSapHetHan = new InBaoCaoThuocSapHetHan();
  minDateTuNgay: any;
  documentType: DocumentType
  groups: GroupDescriptor[] = [{ field: 'NhomThuoc' }];
  icFilterList = icFilterList
  gridColumns:any = []
  gridDataSource: any = {
    data:[],
    total: 0
  };

  public pageSize = 50;
  public skip = 0;
  public gridView: GridDataResult;

  @ViewChild(GridComponent,{static:true})gridChild:GridComponent;
  @ViewChild("thanhTienTemplate", { static: true }) thanhTienTemplate: TemplateRef<any>;
  @ViewChild("thanhTienTemplateFooter", { static: true }) thanhTienTemplateFooter: TemplateRef<any>;
  @ViewChild("nhomGroupHeaderTemplate", { static: true }) nhomGroupHeaderTemplate: TemplateRef<any>;
  constructor(private apiService: ApiService,
    private dialog: MatDialog,
    private notificationService: NotificationService,
    private authService: AuthService) { }

  ngOnInit() {
    this.documentType = DocumentType.BaoCaoThuocSapHetHanDung
    if (window.location.protocol == "http:") {
      this.inBaoCaoThuocSapHetHan.HostingName = "http://" + window.location.host;
    } else {
      this.inBaoCaoThuocSapHetHan.HostingName = "https://" + window.location.host;
    }

    this.gridColumns=[
      {Field:"MaDuoc", Title:"Mã dược", Width:100},
      {Field:"TenThuoc", Title:"Tên thuốc, Hàm lượng", Width:100},
      {Field:"DVT", Title:"Đơn vị tính", Width:100},
      {Field:"SoLo", Title:"Số lô", Width:100},
      {Field:"HanDungStr", Title:"Hạn dùng", Width:100},
      {Field:"SoLuong", Title:"Số lượng", Width:100},
      {Field:"ThanhTien", Title:"Tổng tiền", Width:100, Template: this.thanhTienTemplate, TemplateFooter: this.thanhTienTemplateFooter},
      {Field: "NhomThuoc", Title: "Nhóm", Width: 300, Sortable: true, Hidden: true, TemplateGroupHeader: this.nhomGroupHeaderTemplate},

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

  totalThanhTien() {
    if (this.gridDataSource.data != undefined) {
      return this.gridDataSource.data.reduce((sum, item) => sum + item.ThanhTien, 0);
    }
  }

  seachChange(event){
    this.skip = 0;
    this.XemBaoCao();
  }

  pageChange(event){
    this.skip = event;
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

    this.apiService.post<any>("BaoCao/GetDataBaoCaoThuocSapHetHanForGridAsync", this.baoCaoSearch).subscribe(resultData => {
      if (resultData !== undefined && resultData != null) {
        // if(resultData.TotalRowCount !== undefined && resultData.TotalRowCount != 0)
        // {
        //  this.showPrintExport = true;
        // }
        // this.showGrid = true;
        // this.gridDataSource.data = [...resultData.Data];
        // this.gridDataSource.total = this.gridDataSource.data.length;
        this.gridDataSource = {
          data: resultData.Data,
          total: resultData.TotalRowCount
        };

        var takeTo = +this.skip + +this.pageSize;
        this.gridDataSource.data = this.gridDataSource.data.slice(this.skip, takeTo);

        this.gridChild.setDataSource();
        // this.gridView = process(resultData.Data, { group: this.groups });
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
      this.baoCaoSearch.FromDate = this.baoCaoSearch.TuNgayFormat;
      this.baoCaoSearch.ToDate = this.baoCaoSearch.DenNgayFormat;
      this.apiService.postExportExcel<any>("BaoCao/ExportBaoCaoThuocSapHetHan", this.baoCaoSearch)
        .subscribe(res => {
          let dateTimeNow = new Date();
          CommonService.downLoadFile(res, "application/vnd.ms-excel", "BaoCaoThuocSapHetHan" + dateTimeNow.getFullYear() + ".xlsx");
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