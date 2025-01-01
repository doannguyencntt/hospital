import { GridDataResult } from '@progress/kendo-angular-grid';
import { GroupDescriptor, SortDescriptor } from '@progress/kendo-data-query';
import { BaoCaoTongHopSoLuongXetNghiemSearch, InBaoCaoTongHopSoLuongXetNghiem } from '../bao-cao-tong-hop-so-luong-xet-nghiem.model';
import { GridComponent } from 'src/app/shared/component/grid/grid.component';
import { Component, OnInit, TemplateRef, ViewChild, Input } from '@angular/core';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import { ApiService } from 'src/app/core/services/api.service';
import { PageChangeEvent } from '@progress/kendo-angular-dropdowns/dist/es2015/common/page-change-event';
import { CommonService } from 'src/app/core/utilities/common.helper';
declare var jQuery: any;
import { MatDialog } from '@angular/material';
import { BaoCaoTongHopSoLuongXetNghiemPopupComponent } from '../bao-cao-tong-hop-so-luong-xet-nghiem-popup/bao-cao-tong-hop-so-luong-xet-nghiem-popup.component';
import { LoadingComponent } from "src/app/shared/component/dialogs/loading/loading.component";
import { AuthService } from 'src/app/core/services/auth.service';
import { SecurityOperation } from 'src/app/shared/enum/security-operation.enum';
import { NotificationService } from 'src/app/core/services/notification.service';
import { SystemMessage } from 'src/app/shared/configdata/system-message';
import { process } from '@progress/kendo-data-query';
@Component({
  selector: 'app-bao-cao-tong-hop-so-luong-xet-nghiem-list',
  templateUrl: './bao-cao-tong-hop-so-luong-xet-nghiem-list.component.html',
  styleUrls: ['./bao-cao-tong-hop-so-luong-xet-nghiem-list.component.scss']
})
export class BaoCaoTongHopSoLuongXetNghiemListComponent implements OnInit {
  baoCaoSearch: BaoCaoTongHopSoLuongXetNghiemSearch = new BaoCaoTongHopSoLuongXetNghiemSearch();
  inBaoCaoTongHopSoLuongXetNghiem: InBaoCaoTongHopSoLuongXetNghiem = new InBaoCaoTongHopSoLuongXetNghiem();
  public gridView: GridDataResult;
  public pageSize = 50;
  public skip = 0;
  take: number;
  urlGetDataGridChild = "";
  urlGetPageDataGridChild: string = "";
  additionalSearchString = "";
  minDateDenNgay: Date = null;
  minDateTuNgay: Date = null;

  sort: SortDescriptor[] = [{
    field: 'Id',
    dir: 'desc'
  }];

  public data: any[]
  height: number;
  documentType: DocumentType;
  dataSource: any = {
    data: [],
    total: 0
  };
  _isLoading: boolean = false;
  _isLoadingTotalPage: boolean = false;
  _showDefaultPagerTemplate: boolean;
  showDefaultPagerTemplate: boolean = true;
  ishowView: boolean = false;
  IsData: boolean = false;
  gridColumns: any[];
  gridColumnsChild: any[];
  dataToSumThanhTien: any;
  dataToSumAllThanhTien: any;
  @Input() heightToolbar: number = 140;

  @ViewChild(GridComponent, { static: true }) gridChild: GridComponent;
  @ViewChild('baoCaoGrid', { static: true }) baoCaoGrid: any;
  @ViewChild('thanhTienTonDauKyTemplate', { static: true }) thanhTienTonDauKyTemplate: TemplateRef<any>;
  @ViewChild('thanhTienNhapTrongKyTemplate', { static: true }) thanhTienNhapTrongKyTemplate: TemplateRef<any>;
  @ViewChild('thanhTienXuatTrongKyTemplate', { static: true }) thanhTienXuatTrongKyTemplate: TemplateRef<any>;
  @ViewChild('thanhTienTonCuoiKyTemplate', { static: true }) thanhTienTonCuoiKyTemplate: TemplateRef<any>;
  @ViewChild('donGiaTemplate', { static: true }) donGiaTemplate: TemplateRef<any>;
  @ViewChild('sttTemplate', { static: true }) sttTemplate: TemplateRef<any>;
  @ViewChild('nhomGroupHeaderTemplate', { static: true }) nhomGroupHeaderTemplate: TemplateRef<any>;

  // footer
  @ViewChild('donGiaFooterTemplate', { static: true }) donGiaFooterTemplate: TemplateRef<any>;
  @ViewChild('thanhTienFooterTemplate', { static: true }) thanhTienFooterTemplate: TemplateRef<any>;
  @ViewChild('thanhTienTonDauKyFooterTemplate', { static: true }) thanhTienTonDauKyFooterTemplate: TemplateRef<any>;
  @ViewChild('thanhTienNhapTrongKyFooterTemplate', { static: true }) thanhTienNhapTrongKyFooterTemplate: TemplateRef<any>;
  @ViewChild('thanhTienXuatTrongKyFooterTemplate', { static: true }) thanhTienXuatTrongKyFooterTemplate: TemplateRef<any>;
  @ViewChild('thanhTienTonCuoiKyFooterTemplate', { static: true }) thanhTienTonCuoiKyFooterTemplate: TemplateRef<any>;
  //end

  //group footer
  @ViewChild('donGiaGroupFooterTemplate', { static: true }) donGiaGroupFooterTemplate: TemplateRef<any>;
  @ViewChild('thanhTienTonDauKyGroupFooterTemplate', { static: true }) thanhTienTonDauKyGroupFooterTemplate: TemplateRef<any>;
  @ViewChild('thanhTienNhapTrongKyGroupFooterTemplate', { static: true }) thanhTienNhapTrongKyGroupFooterTemplate: TemplateRef<any>;
  @ViewChild('thanhTienXuatTrongKyGroupFooterTemplate', { static: true }) thanhTienXuatTrongKyGroupFooterTemplate: TemplateRef<any>;
  @ViewChild('thanhTienTonCuoiKyGroupFooterTemplate', { static: true }) thanhTienTonCuoiKyGroupFooterTemplate: TemplateRef<any>;
  //end
  //@ViewChild('sumTongTienGroupFooterTemplate', { static: true }) sumTongTienGroupFooterTemplate: TemplateRef<any>;
  @ViewChild('nhomDVBVGroupTemplate', { static: true }) nhomDVBVGroupTemplate: TemplateRef<any>;
  @ViewChild('sumSoLuongMauNoiTruGroupHeaderTemplate', { static: true }) sumSoLuongMauNoiTruGroupHeaderTemplate: TemplateRef<any>;
  @ViewChild('sumSoLuongMauNgoaiTruGroupHeaderTemplate', { static: true }) sumSoLuongMauNgoaiTruGroupHeaderTemplate: TemplateRef<any>;
  @ViewChild('sumSoLuongMauBHYTNoiTruGroupHeaderTemplate', { static: true }) sumSoLuongMauBHYTNoiTruGroupHeaderTemplate: TemplateRef<any>;
  @ViewChild('sumSoLuongMauBHYTNgoaiTruGroupHeaderTemplate', { static: true }) sumSoLuongMauBHYTNgoaiTruGroupHeaderTemplate: TemplateRef<any>;
  @ViewChild('sumSoLuongDichVuGroupHeaderTemplate', { static: true }) sumSoLuongDichVuGroupHeaderTemplate: TemplateRef<any>;
  @ViewChild('sumSoLuongKhamSucKhoeGroupHeaderTemplate', { static: true }) sumSoLuongKhamSucKhoeGroupHeaderTemplate: TemplateRef<any>;
  @ViewChild('sumSoLuongTongHopGroupHeaderTemplate', { static: true }) sumSoLuongTongHopGroupHeaderTemplate: TemplateRef<any>;

  @ViewChild('tenToDamTemplate', { static: true }) tenToDamTemplate: TemplateRef<any>;
  @ViewChild('soLuongMauNoiTruToDamTemplate', { static: true }) soLuongMauNoiTruToDamTemplate: TemplateRef<any>;
  @ViewChild('soLuongMauNgoaiTruToDamTemplate', { static: true }) soLuongMauNgoaiTruToDamTemplate: TemplateRef<any>;
  @ViewChild('soLuongMauBHYTNoiTruToDamTemplate', { static: true }) soLuongMauBHYTNoiTruToDamTemplate: TemplateRef<any>;
  @ViewChild('soLuongMauBHYTNgoaiTruToDamTemplate', { static: true }) soLuongMauBHYTNgoaiTruToDamTemplate: TemplateRef<any>;
  @ViewChild('soLuongDichVuToDamTemplate', { static: true }) soLuongDichVuToDamTemplate: TemplateRef<any>;
  @ViewChild('soLuongKhamSucKhoeToDamTemplate', { static: true }) soLuongKhamSucKhoeToDamTemplate: TemplateRef<any>;
  @ViewChild('soLuongTongHopToDamTemplate', { static: true }) soLuongTongHopToDamTemplate: TemplateRef<any>;

  groups: GroupDescriptor[] = [{
    field: 'NhomDichVuBenhVienId', dir: null, aggregates: [
      { field: 'SoLuongMauNoiTru', aggregate: 'sum' },
      { field: 'SoLuongMauNgoaiTru', aggregate: 'sum' },
      { field: 'SoLuongMauBHYTNoiTru', aggregate: 'sum' },
      { field: 'SoLuongMauBHYTNgoaiTru', aggregate: 'sum' },
      { field: 'SoLuongDichVu', aggregate: 'sum' },
      { field: 'SoLuongKhamSucKhoe', aggregate: 'sum' },
      { field: 'SoLuongTongHop', aggregate: 'sum' }
    ]
  }];


  public pageChange(event: PageChangeEvent): void {
    this.baoCaoSearch.Skip = event.skip;
    this.skip = event.skip;
    this.XemBaoCao();
  }
  // public groups: GroupDescriptor[] = [{
  //   field: 'Loai',
  //   aggregates: [
  //     { field: 'TonDauKyThanhTien', aggregate: 'sum' },
  //     { field: 'NhapTrongKyThanhTien', aggregate: 'sum' },
  //     { field: 'XuatTrongKyThanhTien', aggregate: 'sum' },
  //     { field: 'TonCuoiKyThanhTien', aggregate: 'sum' },
  //   ]
  // },{
  //   field: 'Nhom',
  //   aggregates: [
  //     { field: 'TonDauKyThanhTien', aggregate: 'sum' },
  //     { field: 'NhapTrongKyThanhTien', aggregate: 'sum' },
  //     { field: 'XuatTrongKyThanhTien', aggregate: 'sum' },
  //     { field: 'TonCuoiKyThanhTien', aggregate: 'sum' },
  //   ]
  // }];

  constructor(
    private apiService: ApiService,
    private dialog: MatDialog,
    private authService: AuthService,
    private notificationService: NotificationService,

  ) { }

  ngOnInit() {
    this.urlGetDataGridChild = "BaoCao/GetDataBaoCaoTongHopSoLuongXetNghiemForGridAsyncChild";
    this.urlGetPageDataGridChild = "BaoCao/GetTotalBaoCaoTongHopSoLuongXetNghiemForGridAsyncChild";

    this.documentType = DocumentType.BaoCaoTongHopSoLuongXetNghiem;
    this._showDefaultPagerTemplate = this.showDefaultPagerTemplate;
    this.skip = 0;
    this.take = (this.pageSize * this.skip) + this.pageSize;

    if (window.location.protocol == "http:") {
      this.inBaoCaoTongHopSoLuongXetNghiem.HostingName = "http://" + window.location.host;
    } else {
      this.inBaoCaoTongHopSoLuongXetNghiem.HostingName = "https://" + window.location.host;
    }

    this.gridColumns = [
      { Field: "STT", Title: "STT", Width: 50, Template: this.sttTemplate },
      { Field: "TenDichVu", Title: "Tên DV", Width: 120 , Template: this.tenToDamTemplate},
      { Field: "SoLuongMauNoiTru", Title: "SL mẫu nội trú", Width: 120, Template: this.soLuongMauNoiTruToDamTemplate, TemplateGroupHeader: this.sumSoLuongMauNoiTruGroupHeaderTemplate },
      { Field: "SoLuongMauNgoaiTru", Title: "SL mẫu ngoại trú", Width: 50, Template: this.soLuongMauNgoaiTruToDamTemplate, TemplateGroupHeader: this.sumSoLuongMauNgoaiTruGroupHeaderTemplate },
      { Field: "SoLuongMauBHYTNoiTru", Title: "SL mẫu BHYT nội trú", Width: 50, Template: this.soLuongMauBHYTNoiTruToDamTemplate, TemplateGroupHeader: this.sumSoLuongMauBHYTNoiTruGroupHeaderTemplate },
      { Field: "SoLuongMauBHYTNgoaiTru", Title: "SL mẫu BHYT ngoại trú", Width: 120 , Template: this.soLuongMauBHYTNgoaiTruToDamTemplate,TemplateGroupHeader: this.sumSoLuongMauBHYTNgoaiTruGroupHeaderTemplate },
      { Field: "SoLuongDichVu", Title: "SL dịch vụ", Width: 120 , Template: this.soLuongDichVuToDamTemplate,TemplateGroupHeader: this.sumSoLuongDichVuGroupHeaderTemplate },
      { Field: "SoLuongKhamSucKhoe", Title: "SL khám sức khỏe", Width: 120, Template: this.soLuongKhamSucKhoeToDamTemplate ,TemplateGroupHeader: this.sumSoLuongKhamSucKhoeGroupHeaderTemplate },
      { Field: "SoLuongTongHop", Title: "SL tổng hợp", Width: 120, Template: this.soLuongTongHopToDamTemplate ,TemplateGroupHeader: this.sumSoLuongTongHopGroupHeaderTemplate },
      {
        Field: "NhomDichVuBenhVienId",
        Title: '',
        Width: 150,
        Sortable: true,
        Hidden: true,
        HideFilter: true,
        TemplateGroupHeader: this.nhomDVBVGroupTemplate
      }
    ];

    this.minDateTuNgay = new Date();
    this.minDateTuNgay.setHours(0, 0, 0, 0);
    //this.minDateTuNgay.setMonth((new Date()).getMonth() -1);

    if (this.baoCaoSearch.TuNgayFormat == null) {
      this.baoCaoSearch.TuNgayFormat = this.minDateTuNgay;
    }
    if (this.baoCaoSearch.DenNgayFormat == null) {
      this.baoCaoSearch.DenNgayFormat = new Date();
    }


  }


  onDataBoundChild(event: any) {
    console.log(event);
    this.dataToSumThanhTien = event.Data;
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
      this.baoCaoSearch.AdditionalSearchString = tuNgay + ";" + denNgay + ";" + this.inBaoCaoTongHopSoLuongXetNghiem.HostingName;
      this.apiService.postExportExcel<any>("BaoCao/ExportBaoCaoTongHopSoLuongXetNghiem", this.baoCaoSearch)
        .subscribe(res => {
          let dateTimeNow = new Date();
          CommonService.downLoadFile(res, "application/vnd.ms-excel", "BaoCaoTongHopSoLuongXetNghiem" + dateTimeNow.getFullYear() + ".xlsx");
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

  XemBaoCao() {
    if(this.baoCaoSearch.TuNgayFormat==null || this.baoCaoSearch.DenNgayFormat==null)
    {
        this.notificationService.showError("Từ ngày và đến ngày yêu cầu nhập");
        return;
    }
    this._isLoading = true;
    this._isLoadingTotalPage = true;
    if (this.baoCaoSearch.TuNgayFormat == null) {
      this.minDateTuNgay = new Date();
      this.minDateTuNgay.setHours(0, 0, 0, 0);
      this.baoCaoSearch.FromDate = CommonService.formatDateTime(this.minDateTuNgay, "dd/mm/yyyy");
    }
    if (this.baoCaoSearch.DenNgayFormat == null) {
      this.minDateTuNgay = new Date();
      this.baoCaoSearch.ToDate = CommonService.formatDateTime(this.minDateTuNgay, "dd/mm/yyyy");
    }
    let tuNgay = CommonService.formatDateTime(this.baoCaoSearch.TuNgayFormat, "dd/mm/yyyy");
    let denNgay = CommonService.formatDateTime(this.baoCaoSearch.DenNgayFormat, "dd/mm/yyyy");
    this.baoCaoSearch.FromDate=this.baoCaoSearch.TuNgayFormat;
    this.baoCaoSearch.ToDate=this.baoCaoSearch.DenNgayFormat;
    this.baoCaoSearch.AdditionalSearchString =  tuNgay + ";" + denNgay;
    this.apiService.post<any>("BaoCao/GetDataBaoCaoTongHopSoLuongXetNghiemTheoThoiGianForGridAsync", this.baoCaoSearch).subscribe(resultData => {
      if (resultData !== undefined && resultData != null) {
        this.IsData = true;
        this.dataToSumAllThanhTien = resultData.Data;
        this.gridView = {
          data: resultData.Data,
          total: resultData.TotalRowCount
        };
        //this.gridView = process(resultData.Data, { group: this.groups });
        // console.log(this.gridView)
        // this.gridView.data.forEach((item, idx) => {
        //   this.baoCaoGrid.collapseRow(idx);
        // });//Đóng all expand
        // this._isLoading = false;
        // this._isLoadingTotalPage = false;
        if (this.gridView.total != 0) {
          this.ishowView = true;
        } else {
          this.ishowView = false;
        }
      }
    });
  }

  // InBaoCao() {
  //   if(this.baoCaoSearch.TuNgayFormat==null || this.baoCaoSearch.DenNgayFormat==null)
  //   {
  //       this.notificationService.showError("Từ ngày và đến ngày yêu cầu nhập");
  //       return;
  //   }
  //   let khoId = 0;
  //   if (this.baoCaoSearch.KhoId != null) {
  //     khoId = this.baoCaoSearch.KhoId;
  //   }
  //   this.inBaoCaoTongHopSoLuongXetNghiem.FromDate = CommonService.formatDateTime(this.baoCaoSearch.TuNgayFormat, "dd/mm/yyyy");
  //   this.inBaoCaoTongHopSoLuongXetNghiem.ToDate = CommonService.formatDateTime(this.baoCaoSearch.DenNgayFormat, "dd/mm/yyyy");
  //   this.dialog.open(BaoCaoTongHopSoLuongXetNghiemPopupComponent, {
  //     disableClose: false,
  //     width: '1200px',
  //     data: this.inBaoCaoTongHopSoLuongXetNghiem,
  //   }
  //   ).afterClosed().subscribe(() => {
  //   });
  // }

  // changeValueStart() {
  //   this.minDateDenNgay = new Date();

  //   if (this.baoCaoSearch.TuNgayFormat != null && this.baoCaoSearch.DenNgayFormat != null
  //     && this.baoCaoSearch.DenNgayFormat < this.baoCaoSearch.TuNgayFormat) {
  //     this.baoCaoSearch.DenNgayFormat = this.minDateDenNgay;
  //   }
  // }
}
