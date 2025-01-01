import { ChangeDetectorRef, Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material';
import { ApiService } from 'src/app/core/services/api.service';
import { AuthService } from 'src/app/core/services/auth.service';
import { NotificationService } from 'src/app/core/services/notification.service';
import { CommonService } from 'src/app/core/utilities/common.helper';
import { LoadingComponent } from 'src/app/shared/component/dialogs/loading/loading.component';
import { SystemMessage } from 'src/app/shared/configdata/system-message';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import { SecurityOperation } from 'src/app/shared/enum/security-operation.enum';
import { BaoCaoDuocTinhHinhXuatNoiBoSearch, InBaoCaoDuocTinhHinhXuatNoiBo } from '../bao-cao-duoc-tinh-hinh-xuat-noi-bo.model';
import icFilterList from '@iconify/icons-ic/twotone-filter-list';
import { GridDataResult, PageChangeEvent } from '@progress/kendo-angular-grid';
import { GroupDescriptor } from '@progress/kendo-data-query';
import { GridComponent } from 'src/app/shared/component/grid/grid.component';
declare var jQuery: any;
import { process } from '@progress/kendo-data-query';


@Component({
  selector: 'app-bao-cao-duoc-tinh-hinh-xuat-noi-bo-list',
  templateUrl: './bao-cao-duoc-tinh-hinh-xuat-noi-bo-list.component.html',
  styleUrls: ['./bao-cao-duoc-tinh-hinh-xuat-noi-bo-list.component.scss'],
})
export class BaoCaoDuocTinhHinhXuatNoiBoListComponent implements OnInit {
  public gridView: GridDataResult;
  public pageSize = 50;
  public skip = 0;
  ishowView: boolean = false;
  _isLoading: boolean = false;
  _isLoadingTotalPage: boolean = false;
  _showDefaultPagerTemplate: boolean = true;

  documentType:DocumentType
  baoCaoSearch: BaoCaoDuocTinhHinhXuatNoiBoSearch = new BaoCaoDuocTinhHinhXuatNoiBoSearch ();
  inBaoCaoDuocTinhHinhXuatNoiBo: InBaoCaoDuocTinhHinhXuatNoiBo = new InBaoCaoDuocTinhHinhXuatNoiBo ();
  gridColumns:any = []
  gridDataSource: any = {
    data:[],
    total: 0
  };
  showGrid: boolean = false;
  showPrintExport: boolean = false;
  icFilterList = icFilterList;
  minDateTuNgay:any;
  IsData: boolean = false;
  heightToolbar: number = 140;
  height: number;
  groups: GroupDescriptor[] = [{ field: 'Nhom' }];
  @ViewChild('baoCaoGrid', { static: true }) baoCaoGrid: any;

  @ViewChild("nhomGroupHeaderTemplate", { static: true }) nhomGroupHeaderTemplate: TemplateRef<any>;
  @ViewChild("donGiaTemplate", { static: true }) donGiaTemplate: TemplateRef<any>;
  @ViewChild("thanhTienTemplate", { static: true }) thanhTienTemplate: TemplateRef<any>;
  constructor( private apiService: ApiService,
    private dialog: MatDialog,
    private authService: AuthService,
    private notificationService: NotificationService,
    private cd:ChangeDetectorRef) { }

  ngOnInit() {
    this.documentType = DocumentType.BaoCaoDuocTinhHinhXuatNoiBo;

    if (window.location.protocol == "http:") {
      this.inBaoCaoDuocTinhHinhXuatNoiBo.HostingName = "http://" + window.location.host;
    } else {
      this.inBaoCaoDuocTinhHinhXuatNoiBo.HostingName = "https://" + window.location.host;
    }

    this.gridColumns=[
      {Field:"STT", Title:"STT", Width: 100},
      {Field:"Ma", Title:"Mã dược", Width: 100},
      {Field:"Ten", Title:"Tên dược, Vật tư, Hóa chất", Width: 200},
      {Field:"DVT", Title:"ĐVT", Width: 100},
      {Field:"SoLuong", Title:"Số lượng", Width: 100},
      {Field:"SoLuongYeuCau", Title:"Yêu cầu", Width: 100},
      {Field:"SoLuongThucXuat", Title:"Thực xuất", Width: 100},
      {Field:"DonGia", Title:"Đơn giá", Width: 100, Template: this.donGiaTemplate},
      {Field:"ThanhTien", Title:"Thành tiền", Width: 100, Template: this.thanhTienTemplate},
      {Field:"GhiChu", Title:"Ghi chú", Width: 100},
      { Field: "Nhom", Title: "Nhóm", Width: 100, Sortable: true, Hidden: true, TemplateGroupHeader: this.nhomGroupHeaderTemplate },
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
    // this.XemBaoCao();

    if (this.gridDataSource.data.length == 0 ) {
      this.XemBaoCao();
    } else {
      var takeTo = +this.skip + +this.pageSize;
      let gridData = this.gridDataSource.data.slice(this.skip, takeTo);
      this.gridView = process(gridData, { group: this.groups });
      this.gridView.total= this.gridDataSource.total;
      
      // this.gridView.data = this.gridView.data.slice(this.skip, takeTo);
    }
  }

  totalThanhTien() {
    if (this.gridDataSource.data != undefined) {
      return this.gridDataSource.data.reduce((sum, item) => sum + item.ThanhTien, 0);
    }
  }

  XemBaoCao() {
    this._isLoadingTotalPage = true;
    this._isLoading = true;
    if(this.baoCaoSearch.TuNgayFormat==null || this.baoCaoSearch.DenNgayFormat==null)
    {
        this.notificationService.showError("Từ ngày và đến ngày yêu cầu nhập");
        this._isLoading = false;
        this._isLoadingTotalPage = false;
        return;
    }

    
    this.baoCaoSearch.FromDate = this.baoCaoSearch.TuNgayFormat;
    this.baoCaoSearch.ToDate = this.baoCaoSearch.DenNgayFormat;

    this.apiService.post<any>("BaoCao/GetDataBaoCaoDuocTinhHinhXuatNoiBoForGridAsync", this.baoCaoSearch).subscribe(resultData => {
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
    if (this.authService.hasPermission(this.documentType, SecurityOperation.Process)) {
      this.dialog.open(LoadingComponent, {
        disableClose: true,
        width: '200px',
        height: '90px',
        data: { Title: 'Đang xuất excel...' }
      });
      this.baoCaoSearch.FromDate=this.baoCaoSearch.TuNgayFormat;
      this.baoCaoSearch.ToDate=this.baoCaoSearch.DenNgayFormat;
      this.apiService.postExportExcel<any>("BaoCao/ExportBaoCaoDuocTinhHinhXuatNoiBo", this.baoCaoSearch)
        .subscribe(res => {
          let dateTimeNow = new Date();
          CommonService.downLoadFile(res, "application/vnd.ms-excel", "BaoCaoDuocTinhHinhXuatNoiBo" + dateTimeNow.getFullYear() + ".xlsx");
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
