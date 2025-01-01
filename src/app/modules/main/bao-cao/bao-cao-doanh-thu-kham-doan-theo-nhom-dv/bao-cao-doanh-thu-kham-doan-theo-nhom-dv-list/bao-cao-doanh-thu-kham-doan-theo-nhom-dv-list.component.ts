import { GroupDescriptor, SortDescriptor } from '@progress/kendo-data-query';
import { GridComponent } from 'src/app/shared/component/grid/grid.component';
import { Component, OnInit, TemplateRef, ViewChild, Input } from '@angular/core';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import { ApiService } from 'src/app/core/services/api.service';
import { PageChangeEvent } from '@progress/kendo-angular-dropdowns/dist/es2015/common/page-change-event';
import { CommonService } from 'src/app/core/utilities/common.helper';
declare var jQuery: any;
import { MatDialog } from '@angular/material';
import { LoadingComponent } from "src/app/shared/component/dialogs/loading/loading.component";
import { AuthService } from 'src/app/core/services/auth.service';
import { SecurityOperation } from 'src/app/shared/enum/security-operation.enum';
import { NotificationService } from 'src/app/core/services/notification.service';
import { SystemMessage } from 'src/app/shared/configdata/system-message';
import { BaoCaoDoanhThuKhamDoanTheoNhomDVSearch, InBaoCaoDoanhThuKhamDoanTheoNhomDV } from '../bao-cao-doanh-thu-kham-doan-theo-nhom-dv.model';
import { ApiError } from 'src/app/shared/models/api-error.model';
@Component({
  selector: 'app-bao-cao-doanh-thu-kham-doan-theo-nhom-dv-list',
  templateUrl: './bao-cao-doanh-thu-kham-doan-theo-nhom-dv-list.component.html',
  styleUrls: ['./bao-cao-doanh-thu-kham-doan-theo-nhom-dv-list.component.scss']
})
export class BaoCaoDoanhThuKhamDoanTheoNhomDvListComponent implements OnInit {

  baoCaoSearch: BaoCaoDoanhThuKhamDoanTheoNhomDVSearch = new BaoCaoDoanhThuKhamDoanTheoNhomDVSearch();
  inBaoCaoDoanhThuKhamDoanTheoNhomDV: InBaoCaoDoanhThuKhamDoanTheoNhomDV = new InBaoCaoDoanhThuKhamDoanTheoNhomDV();

  minDateDenNgay: Date = null;
  minDateTuNgay: Date = null;

  sumKhamBenh: number = null;
  sumXetNghiem: number = null;
  sumNoiSoi: number = null;
  sumNoiSoiTMH: number = null;
  sumSieuAm: number = null;
  sumXQuang: number = null;
  sumCTScan: number = null;
  sumMRI: number = null;
  sumDienTimDienNao: number = null;
  sumDoLoangXuong: number = null;
  sumDVKhac: number = null;
  sumTongTien: number = null;

  documentType: DocumentType;
  public pageSize = 50;
  public skip = 0;
  take: number;
  height: number;
  dataSource: any = {
    data: [],
    total: 0
  };
  gridDataSource: any = {
    data: [],
    total: 0
  };
  ishowView: boolean = false;
  IsData: boolean = false;
  gridColumns: any[];
  @ViewChild(GridComponent, { static: true }) gridChild: GridComponent;
  // @ViewChild('sttTemplate', { static: true }) sttTemplate: TemplateRef<any>;
  @ViewChild('tongCongTitleTemplate', { static: true }) tongCongTitleTemplate: TemplateRef<any>;
  @ViewChild('sumKhamBenhFooterTemplate', { static: true }) sumKhamBenhFooterTemplate: TemplateRef<any>;
  @ViewChild('sumXetNghiemFooterTemplate', { static: true }) sumXetNghiemFooterTemplate: TemplateRef<any>;
  @ViewChild('sumNoiSoiFooterTemplate', { static: true }) sumNoiSoiFooterTemplate: TemplateRef<any>;
  @ViewChild('sumNoiSoiTMHFooterTemplate', { static: true }) sumNoiSoiTMHFooterTemplate: TemplateRef<any>;
  @ViewChild('sumSieuAmFooterTemplate', { static: true }) sumSieuAmFooterTemplate: TemplateRef<any>;
  @ViewChild('sumXQuangFooterTemplate', { static: true }) sumXQuangFooterTemplate: TemplateRef<any>;
  @ViewChild('sumCTScanFooterTemplate', { static: true }) sumCTScanFooterTemplate: TemplateRef<any>;
  @ViewChild('sumMRIFooterTemplate', { static: true }) sumMRIFooterTemplate: TemplateRef<any>;
  @ViewChild('sumDienTimDienNaoFooterTemplate', { static: true }) sumDienTimDienNaoFooterTemplate: TemplateRef<any>;
  @ViewChild('sumDoLoangXuongFooterTemplate', { static: true }) sumDoLoangXuongFooterTemplate: TemplateRef<any>;
  @ViewChild('sumDVKhacFooterTemplate', { static: true }) sumDVKhacFooterTemplate: TemplateRef<any>;
  @ViewChild('sumTongTienFooterTemplate', { static: true }) sumTongTienFooterTemplate: TemplateRef<any>;
  @ViewChild('tenCongTyTemplate', { static: true }) tenCongTyTemplate: TemplateRef<any>;
  @ViewChild('khamBenhTemplate', { static: true }) khamBenhTemplate: TemplateRef<any>;
  @ViewChild('xetNghiemTemplate', { static: true }) xetNghiemTemplate: TemplateRef<any>;
  @ViewChild('noiSoiTemplate', { static: true }) noiSoiTemplate: TemplateRef<any>;
  @ViewChild('noiSoiTMHTemplate', { static: true }) noiSoiTMHTemplate: TemplateRef<any>;
  @ViewChild('sieuAmTemplate', { static: true }) sieuAmTemplate: TemplateRef<any>;
  @ViewChild('xQuangTemplate', { static: true }) xQuangTemplate: TemplateRef<any>;
  @ViewChild('cTScanTemplate', { static: true }) cTScanTemplate: TemplateRef<any>;
  @ViewChild('mRITemplate', { static: true }) mRITemplate: TemplateRef<any>;
  @ViewChild('dienTimDienNaoTemplate', { static: true }) dienTimDienNaoTemplate: TemplateRef<any>;
  @ViewChild('doLoangXuongTemplate', { static: true }) doLoangXuongTemplate: TemplateRef<any>;
  @ViewChild('dVKhacTemplate', { static: true }) dVKhacTemplate: TemplateRef<any>;
  @ViewChild('tongTienTemplate', { static: true }) tongTienTemplate: TemplateRef<any>;

  public groups: GroupDescriptor[] = [{ field: "TenCongTy" }];

  constructor(
    private apiService: ApiService,
    private dialog: MatDialog,
    private authService: AuthService,
    private notificationService: NotificationService,

  ) { }

  ngOnInit() {
    this.documentType = DocumentType.BaoCaoDoanhThuKhamDoanTheoNhomDV;
    this.skip = 0;
    this.take = (this.pageSize * this.skip) + this.pageSize;
    this.gridColumns = [
      // { Field: "STT", Title: "STT", Width: 20, Template: this.sttTemplate },
      {
        Field: 'TenCongTy',
        Title: '',
        Width: 150,
        Sortable: true,
        Hidden: true,
        HideFilter: true,
        TemplateGroupHeader: this.tenCongTyTemplate
      },
      { Field: "MaTN", Title: "Mã TN", Width: 100, },
      { Field: "HoTen", Title: "Họ tên", Width: 160, TemplateFooter: this.tongCongTitleTemplate },
      { Field: "NamSinh", Title: "Năm sinh", Width: 90, },
      { Field: "GioiTinh", Title: "Giới tính", Width: 90, },
      { Field: "KhamBenh", Title: "Khám bệnh", Width: 120, TemplateFooter: this.sumKhamBenhFooterTemplate, Template: this.khamBenhTemplate },
      { Field: "XetNghiem", Title: "Xét nghiệm", Width: 120, TemplateFooter: this.sumXetNghiemFooterTemplate, Template: this.xetNghiemTemplate },
      { Field: "NoiSoi", Title: "Nội soi", Width: 120, TemplateFooter: this.sumNoiSoiFooterTemplate, Template: this.noiSoiTemplate },
      { Field: "NoiSoiTMH", Title: "Nội soi TMH", Width: 120, TemplateFooter: this.sumNoiSoiTMHFooterTemplate, Template: this.noiSoiTMHTemplate },
      { Field: "SieuAm", Title: "Siêu âm", Width: 120, TemplateFooter: this.sumSieuAmFooterTemplate, Template: this.sieuAmTemplate },
      { Field: "XQuang", Title: "X-Quang", Width: 120, TemplateFooter: this.sumXQuangFooterTemplate, Template: this.xQuangTemplate },
      { Field: "CTScan", Title: "CT Scan", Width: 120, TemplateFooter: this.sumCTScanFooterTemplate, Template: this.cTScanTemplate },
      { Field: "MRI", Title: "MRI", Width: 120, TemplateFooter: this.sumMRIFooterTemplate, Template: this.mRITemplate },
      { Field: "DienTimDienNao", Title: "Điện tim + điện não", Width: 120, TemplateFooter: this.sumDienTimDienNaoFooterTemplate, Template: this.dienTimDienNaoTemplate },
      { Field: "TDCNDoLoangXuong", Title: "Đo loãng xương, Đo hô hấp", Width: 120, TemplateFooter: this.sumDoLoangXuongFooterTemplate, Template: this.doLoangXuongTemplate },
      { Field: "DVKhac", Title: "DV khác", Width: 120, TemplateFooter: this.sumDVKhacFooterTemplate, Template: this.dVKhacTemplate },
      { Field: "TongDoanhThuTheoNhomDichVu", Title: "Tổng cộng", Width: 120, TemplateFooter: this.sumTongTienFooterTemplate, Template: this.tongTienTemplate },
    ];

   
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
      // let tuNgay = CommonService.formatDateTime(this.baoCaoSearch.TuNgayFormat, "dd/mm/yyyy");
      // let denNgay = CommonService.formatDateTime(this.baoCaoSearch.DenNgayFormat, "dd/mm/yyyy");

      // this.baoCaoSearch.FromDate = this.baoCaoSearch.TuNgayFormat;
      // this.baoCaoSearch.ToDate = this.baoCaoSearch.DenNgayFormat;
      // this.baoCaoSearch.AdditionalSearchString = tuNgay + ";" + denNgay + ";" + this.inBaoCaoDoanhThuKhamDoanTheoNhomDV.HostingName;
      let tuNgay = CommonService.formatDateTime(this.baoCaoSearch.TuNgayFormat, "mm/dd/yyyy");
      let denNgay = CommonService.formatDateTime(this.baoCaoSearch.DenNgayFormat, "mm/dd/yyyy");
      this.baoCaoSearch.FromDate = tuNgay;
      this.baoCaoSearch.ToDate = denNgay;
      this.gridChild._gridQueryInfo.additionalSearchString = JSON.stringify(this.baoCaoSearch);
      this.apiService.postExportExcel<any>("BaoCao/ExportBaoCaoDoanhThuKhamDoanTheoNhomDV", this.gridChild._gridQueryInfo)
        .subscribe(res => {
          let dateTimeNow = new Date();
          CommonService.downLoadFile(res, "application/vnd.ms-excel", "BaoCaoDoanhThuKhamDoanTheoNhomDV" + dateTimeNow.getFullYear() + ".xlsx");
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
    // this.gridChild._isLoading = true;
    // this.gridChild._isLoadingTotalPage = true;
    if (this.baoCaoSearch.TuNgayFormat == null || this.baoCaoSearch.DenNgayFormat == null) {
      this.notificationService.showError("Từ ngày và đến ngày yêu cầu nhập");
      this.gridChild._isLoading = false;
      this.gridChild._isLoadingTotalPage = false;
      return;
    }

    let tuNgay = CommonService.formatDateTime(this.baoCaoSearch.TuNgayFormat, "mm/dd/yyyy");
    let denNgay = CommonService.formatDateTime(this.baoCaoSearch.DenNgayFormat, "mm/dd/yyyy");
    this.baoCaoSearch.FromDate = tuNgay;
    this.baoCaoSearch.ToDate = denNgay;
    this.gridChild._additionalSearchString = JSON.stringify(this.baoCaoSearch);
    this.gridChild.search();
    this.getTongCong(this.gridChild._gridQueryInfo);

    // if (this.baoCaoSearch.TuNgayFormat == null) {
    //   this.minDateTuNgay = new Date();
    //   this.minDateTuNgay.setHours(0, 0, 0, 0);
    //   this.baoCaoSearch.FromDate = CommonService.formatDateTime(this.minDateTuNgay, "dd/mm/yyyy");
    // }
    // if (this.baoCaoSearch.DenNgayFormat == null) {
    //   this.minDateTuNgay = new Date();
    //   this.baoCaoSearch.ToDate = CommonService.formatDateTime(this.minDateTuNgay, "dd/mm/yyyy");
    // }
    // let tuNgay = CommonService.formatDateTime(this.baoCaoSearch.TuNgayFormat, "dd/mm/yyyy");
    // let denNgay = CommonService.formatDateTime(this.baoCaoSearch.DenNgayFormat, "dd/mm/yyyy");

    // this.baoCaoSearch.FromDate = this.baoCaoSearch.TuNgayFormat;
    // this.baoCaoSearch.ToDate = this.baoCaoSearch.DenNgayFormat;
    // this.baoCaoSearch.AdditionalSearchString = tuNgay + ";" + denNgay;
    // this.apiService.post<any>("BaoCao/GetDataBaoCaoDoanhThuKhamDoanTheoNhomDVForGridAsync", this.baoCaoSearch).subscribe(resultData => {
    //   if (resultData !== undefined && resultData != null) {
    //     this.dataSource = {
    //       data: resultData.Data,
    //       total: resultData.TotalRowCount
    //     };
    //     var takeTo = +this.skip + +this.pageSize;
    //     let gridData = this.dataSource.data.slice(this.skip, takeTo);
    //     this.gridDataSource = {
    //       data: gridData,
    //       total: resultData.TotalRowCount
    //     };
    //     //move func
    //     this.sumKhamBenh = resultData.Data.reduce((sum: number, item: { KhamBenh: number; }) => sum + item.KhamBenh, 0);
    //     this.sumXetNghiem = resultData.Data.reduce((sum: number, item: { XetNghiem: number; }) => sum + item.XetNghiem, 0);
    //     this.sumNoiSoi = resultData.Data.reduce((sum: number, item: { NoiSoi: number; }) => sum + item.NoiSoi, 0);
    //     this.sumNoiSoiTMH = resultData.Data.reduce((sum: number, item: { NoiSoiTMH: number; }) => sum + item.NoiSoiTMH, 0);
    //     this.sumSieuAm = resultData.Data.reduce((sum: number, item: { SieuAm: number; }) => sum + item.SieuAm, 0);
    //     this.sumXQuang = resultData.Data.reduce((sum: number, item: { XQuang: number; }) => sum + item.XQuang, 0);
    //     this.sumCTScan = resultData.Data.reduce((sum: number, item: { CTScan: number; }) => sum + item.CTScan, 0);
    //     this.sumMRI = resultData.Data.reduce((sum: number, item: { MRI: number; }) => sum + item.MRI, 0);
    //     this.sumDienTimDienNao = resultData.Data.reduce((sum: number, item: { DienTimDienNao: number; }) => sum + item.DienTimDienNao, 0);
    //     this.sumDoLoangXuong = resultData.Data.reduce((sum: number, item: { TDCNDoLoangXuong: number; }) => sum + item.TDCNDoLoangXuong, 0);
    //     this.sumDVKhac = resultData.Data.reduce((sum: number, item: { DVKhac: number; }) => sum + item.DVKhac, 0);

    //     this.sumTongTien = this.sumKhamBenh + this.sumXetNghiem + this.sumNoiSoi
    //       + this.sumNoiSoiTMH + this.sumSieuAm + this.sumXQuang + this.sumCTScan
    //       + this.sumMRI + this.sumDienTimDienNao + this.sumDoLoangXuong + this.sumDVKhac;

    //     // if (this.dataSource.total != 0) {
    //     //   this.ishowView = true;
    //     // } else {
    //     //   this.ishowView = false;
    //     // }
    //     this.gridChild._isLoading = false;
    //     this.gridChild._isLoadingTotalPage = false;
    //   }
    // });
  }
  // InBaoCao() {
  //   if(this.baoCaoSearch.TuNgayFormat==null || this.baoCaoSearch.DenNgayFormat==null)
  //   {
  //       this.notificationService.showError("Từ ngày và đến ngày yêu cầu nhập");
  //       return;
  //   }
  //   let khoId = 0;
  //   if (this.baoCaoSearch.KhoaId != null) {
  //     khoId = this.baoCaoSearch.KhoaId;
  //   }
  //   this.inBaoCaoXuatNhapTon.KhoId = khoId;
  //   this.inBaoCaoXuatNhapTon.FromDate = CommonService.formatDateTime(this.baoCaoSearch.TuNgayFormat, "dd/mm/yyyy");
  //   this.inBaoCaoXuatNhapTon.ToDate = CommonService.formatDateTime(this.baoCaoSearch.DenNgayFormat, "dd/mm/yyyy");
  //   this.dialog.open(BaoCaoXuatNhapTonPopupComponent, {
  //     disableClose: false,
  //     width: '1200px',
  //     data: this.inBaoCaoXuatNhapTon,
  //   }
  //   ).afterClosed().subscribe(() => {
  //   });
  // }

  getTongCong(queryInfo) {
    this.apiService.post<any>("BaoCao/GetTongCongDoanhThuKhamDoanTheoNhomDichVu", queryInfo).subscribe(resultData => {
      this.sumKhamBenh = resultData.KhamBenh;
      this.sumXetNghiem = resultData.XetNghiem;
      this.sumNoiSoi = resultData.NoiSoi;
      this.sumNoiSoiTMH = resultData.NoiSoiTMH;
      this.sumSieuAm = resultData.SieuAm;
      this.sumXQuang = resultData.XQuang;
      this.sumCTScan = resultData.CTScan;
      this.sumMRI = resultData.MRI;
      this.sumDienTimDienNao = resultData.DienTimDienNao;
      this.sumDoLoangXuong = resultData.TDCNDoLoangXuong;
      this.sumDVKhac = resultData.DVKhac;
      this.sumTongTien = resultData.Total;
    },
      (err: ApiError) => {
        if (err.Message != "Validation Failed") {
          this.notificationService.showError(err.Message);
        }
      });
  }
}
