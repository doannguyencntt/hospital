import { ChangeDetectorRef, Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material';
import { ApiService } from 'src/app/core/services/api.service';
import { AuthService } from 'src/app/core/services/auth.service';
import { NotificationService } from 'src/app/core/services/notification.service';
import { BaoCaoTinhHinhNhapNCCChiTietSearch, InBaoCaoTinhHinhNhapNCCChiTiet } from '../bao-cao-tinh-hinh-nhap-ncc-chi-tiet.model';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import { SecurityOperation } from 'src/app/shared/enum/security-operation.enum';
import { LoadingComponent } from 'src/app/shared/component/dialogs/loading/loading.component';
import { CommonService } from 'src/app/core/utilities/common.helper';
import { SystemMessage } from 'src/app/shared/configdata/system-message';
import icFilterList from '@iconify/icons-ic/twotone-filter-list';
import { GridComponent } from 'src/app/shared/component/grid/grid.component';
import { DataResult, GroupDescriptor, State } from '@progress/kendo-data-query';
import { process } from '@progress/kendo-data-query';
import { PageChangeEvent } from '@progress/kendo-angular-grid';
declare var jQuery: any;

@Component({
  selector: 'app-bao-cao-tinh-hinh-nhap-ncc-chi-tiet-list',
  templateUrl: './bao-cao-tinh-hinh-nhap-ncc-chi-tiet-list.component.html',
  styleUrls: ['./bao-cao-tinh-hinh-nhap-ncc-chi-tiet-list.component.scss']
})
export class BaoCaoTinhHinhNhapNccChiTietListComponent implements OnInit {
  gridColumns:any = []
  gridDataSource: any = {
    data:[],
    total: 0
  };
  gridView: DataResult;

  public aggregates: any[] = [
    { field: "ThanhTien", aggregate: "sum" },
  ];
  public pageSize = 2;
  public skip = 0;
  _isLoading: boolean = false;
  _isLoadingTotalPage: boolean = false;
  _showDefaultPagerTemplate: boolean = true;
  heightToolbar: number = 140;
  height: number;
  showGrid: boolean = false;
  showPrintExport: boolean = false;
  groups: GroupDescriptor[] = [{ field: 'NhaCungCap', aggregates: this.aggregates }];
  @ViewChild('baoCaoGrid', { static: true }) baoCaoGrid: any;
  icFilterList = icFilterList;

  baoCaoSearch: BaoCaoTinhHinhNhapNCCChiTietSearch = new BaoCaoTinhHinhNhapNCCChiTietSearch ();
  inBaoCaoTinhHinhTraNCC: InBaoCaoTinhHinhNhapNCCChiTiet = new InBaoCaoTinhHinhNhapNCCChiTiet ();

  @ViewChild("donGiaTemplate",{static:true})donGiaTemplate:TemplateRef<any>;
  @ViewChild("thanhTienTemplate",{static:true})thanhTienTemplate:TemplateRef<any>;
  @ViewChild("nhaccGroupHeaderTemplate",{static:true})nhaccGroupHeaderTemplate:TemplateRef<any>;
  @ViewChild("tongCongTemplateFooter",{static:true})tongCongTemplateFooter:TemplateRef<any>;
  @ViewChild("thanhTienTemplateFooter",{static:true})thanhTienTemplateFooter:TemplateRef<any>;
  @ViewChild("thanhTienGroupHeaderColumnTemplate",{static:true})thanhTienGroupHeaderColumnTemplate:TemplateRef<any>;
  minDateTuNgay:any;
  documentType:DocumentType
  constructor(private apiService: ApiService,
    private dialog: MatDialog,
    private notificationService: NotificationService,
    private authService: AuthService,
    private cd:ChangeDetectorRef) { }

  ngOnInit() {
    this.documentType = DocumentType.BaoCaoTinhHinhNhapNCCChiTiet
    if (window.location.protocol == "http:") {
      this.inBaoCaoTinhHinhTraNCC.HostingName = "http://" + window.location.host;
    } else {
      this.inBaoCaoTinhHinhTraNCC.HostingName = "https://" + window.location.host;
    }

    this.gridColumns=[
      {Field:"STT", Title:"STT", Width:100},
      {Field:"MaThuoc", Title:"Mã thuốc", Width:100},
      {Field:"TenThuoc", Title:"Tên thuốc, Hàm lượng (Hãng, Nước sản xuất)", Width:300},
      {Field:"HoatChat", Title:"Hoạt chất", Width:100},
      {Field:"DVT", Title:"ĐVT", Width:100},
      {Field:"HangSX", Title:"Hãng SX", Width:100},
      {Field:"SoLo", Title:"Số lô", Width:100},
      {Field:"HanDungStr", Title:"Hạn dùng", Width:100},
      {Field:"DonGia", Title:"Đơn giá", Width:100, Template: this.donGiaTemplate},
      {Field:"SoLuong", Title:"Số lượng", Width:100, TemplateFooter: this.tongCongTemplateFooter},
      {Field:"ThanhTien", Title:"Thành tiền", Width:150, Template: this.thanhTienTemplate, TemplateGroupHeaderColumn: this.thanhTienGroupHeaderColumnTemplate, TemplateFooter: this.thanhTienTemplateFooter },
      {Field: "NhaCungCap", Title: "Nhà Cung Cấp", Width: 300, Sortable: true, Hidden: true, TemplateGroupHeader: this.nhaccGroupHeaderTemplate},

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
  totalThanhTien() {
    if (this.gridDataSource.data != undefined) {
      return this.gridDataSource.data.reduce((sum, item) => sum + item.ThanhTien, 0);
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
  reFresh(){
    this.skip = 0;
    this.XemBaoCao()
  }

  public pageChange(event: PageChangeEvent): void {
    this.skip = event.skip;
    this.XemBaoCao();

    // this.XemBaoCao();

    // if (this.gridDataSource.data.length == 0 ) {
    //   this.XemBaoCao();
    // } else {
    //   var takeTo = +this.skip + +this.pageSize;
    //   let gridData = this.gridDataSource.data.slice(this.skip, takeTo);
    //   this.gridView = process(gridData, { group: this.groups });
    //   this.gridView.total= this.gridDataSource.total;
      
    //   // this.gridView.data = this.gridView.data.slice(this.skip, takeTo);
    // }
  }

  XemBaoCao() {
    this._isLoading = true;
    this._isLoadingTotalPage = true;
    if(this.baoCaoSearch.TuNgayFormat==null || this.baoCaoSearch.DenNgayFormat==null)
    {
        this.notificationService.showError("Từ ngày và đến ngày yêu cầu nhập");
        this._isLoading = false;
        this._isLoadingTotalPage = false;
        return;
    }
    this.baoCaoSearch.FromDate = this.baoCaoSearch.TuNgayFormat;
    this.baoCaoSearch.ToDate = this.baoCaoSearch.DenNgayFormat;

    this.apiService.post<any>("BaoCao/GetDataBaoCaoTinhHinhNhapNCCChiTietForGridAsync", this.baoCaoSearch).subscribe(resultData => {
      if (resultData !== undefined && resultData != null) {
        if(resultData.TotalRowCount !== undefined && resultData.TotalRowCount != 0)
        {
         this.showPrintExport = true;
        }
        // this.showGrid = true;
        this.gridDataSource = {
          data: resultData.Data,
          total: resultData.TotalRowCount
        };

        var takeTo = +this.skip + +this.pageSize;
        let gridData = this.gridDataSource.data.slice(this.skip, takeTo);

        this.gridView = process(gridData, { group: this.groups });
        this.gridView.total = this.gridDataSource.total;

        this._isLoading = false;
        this._isLoadingTotalPage = false;
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
      this.baoCaoSearch.FromDate = this.baoCaoSearch.TuNgayFormat;
      this.baoCaoSearch.ToDate = this.baoCaoSearch.DenNgayFormat;
      this.apiService.postExportExcel<any>("BaoCao/ExportBaoCaoTinhHinhNhapNCCChiTiet", this.baoCaoSearch)
        .subscribe(res => {
          let dateTimeNow = new Date();
          CommonService.downLoadFile(res, "application/vnd.ms-excel", "BaoCaoTinhHinhNhapNCCChiTiet" + dateTimeNow.getFullYear() + ".xlsx");
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