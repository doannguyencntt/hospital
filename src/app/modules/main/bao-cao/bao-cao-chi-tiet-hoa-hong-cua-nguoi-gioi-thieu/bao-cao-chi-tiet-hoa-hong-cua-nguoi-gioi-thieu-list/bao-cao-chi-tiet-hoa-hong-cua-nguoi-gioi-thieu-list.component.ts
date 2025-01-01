import { GridDataResult } from '@progress/kendo-angular-grid';
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
import { process } from '@progress/kendo-data-query';
import { BaoCaoChiTietHoaHongCuaNguoiGioiThieuSearch, ChiTietHoaHongCuaNguoiGioiThieu, InBaoCaoChiTietHoaHongCuaNguoiGioiThieu } from '../bao-cao-chi-tiet-hoa-hong-cua-nguoi-gioi-thieu.model';
import { ApiError } from 'src/app/shared/models/api-error.model';
import { ComboboxComponent } from 'src/app/shared/component/dropdowns/combobox/combobox.component';

@Component({
  selector: 'app-bao-cao-chi-tiet-hoa-hong-cua-nguoi-gioi-thieu-list',
  templateUrl: './bao-cao-chi-tiet-hoa-hong-cua-nguoi-gioi-thieu-list.component.html',
  styleUrls: ['./bao-cao-chi-tiet-hoa-hong-cua-nguoi-gioi-thieu-list.component.scss']
})
export class BaoCaoChiTietHoaHongCuaNguoiGioiThieuListComponent implements OnInit {
  baoCaoSearch: BaoCaoChiTietHoaHongCuaNguoiGioiThieuSearch = new BaoCaoChiTietHoaHongCuaNguoiGioiThieuSearch();
  inBaoCaoXuatNhapTon: InBaoCaoChiTietHoaHongCuaNguoiGioiThieu = new InBaoCaoChiTietHoaHongCuaNguoiGioiThieu();
  public gridView: GridDataResult;
  // public pageSize = 50;
  // public skip = 0;
  // take: number;
  additionalSearchString = "";
  minDateDenNgay: Date = null;
  minDateTuNgay: Date = null;

  // sort: SortDescriptor[] = [{
  //   field: 'Id',
  //   dir: 'desc'
  // }];

  public data: any[]
  documentType: DocumentType;
  dataSource: any = {
    data: [],
    total: 0
  };
  tongSoTienDV: number = 0;
  ishowView: boolean = false;
  IsData: boolean = false;
  gridColumns: any[];

  @ViewChild(GridComponent, { static: true }) gridChild: GridComponent;
  @ViewChild('baoCaoGrid', { static: true }) baoCaoGrid: any;
  @ViewChild('tienDVTemplate', { static: true }) tienDVTemplate: TemplateRef<any>;
  @ViewChild('tongTienTitleTemplate', { static: true }) tongTienTitleTemplate: TemplateRef<any>;
  @ViewChild('soTongTienFooterTemplate', { static: true }) soTongTienFooterTemplate: TemplateRef<any>;
  @ViewChild('tinhTrangThanhToanTemplate', { static: true }) tinhTrangThanhToanTemplate: TemplateRef<any>;
  @ViewChild(ComboboxComponent, { static: true }) cboTiepNhan: ComboboxComponent;
  dataHoaHongNguoiGioiThieu: ChiTietHoaHongCuaNguoiGioiThieu[] = [];

  constructor(
    private apiService: ApiService,
    private dialog: MatDialog,
    private authService: AuthService,
    private notificationService: NotificationService,

  ) { }

  ngOnInit() {
    this.documentType = DocumentType.BaoCaoChiTietHoaHongCuaNguoiGT;

    this.gridColumns = [
      { Field: "STT", Title: "STT", Width: 50 },
      { Field: "HinhThucDenDisplay", Title: "Hình thức đến", Width: 120, },
      { Field: "NgayKhamDisplay", Title: "Ngày khám", Width: 100, TemplateFooter: this.tongTienTitleTemplate },
      { Field: "MaNguoiBenh", Title: "Mã NB", Width: 100, },
      { Field: "MaTN", Title: "Mã TN", Width: 100, },
      { Field: "SoBienLaiThuTien", Title: "Số biên lai thu tiền", Width: 100, },
      { Field: "TenBN", Title: "Tên BN", Width: 150, },
      { Field: "NamSinh", Title: "Năm sinh", Width: 70, },
      { Field: "DiaChi", Title: "Địa chỉ", Width: 180, },
      { Field: "BSKham", Title: "BS khám", Width: 120, },
      { Field: "TenDV", Title: "Tên DV", Width: 220, },
      { Field: "NhomDV", Title: "Nhóm DV", Width: 100, },
      { Field: "SoTienDV", Title: "Số tiền DV", Width: 100, Template: this.tienDVTemplate, TemplateFooter: this.soTongTienFooterTemplate },
      { Field: "HoaHong", Title: "(%) Hoa hồng", Width: 100, },
      { Field: "ThanhTienHoaHong", Title: "Thành tiền hoa hồng", Width: 100, },
      { Field: "TinhTrangThanhToan", Title: "Tình trạng thanh toán", Width: 100, Template: this.tinhTrangThanhToanTemplate},
    ];

    // this.minDateTuNgay = new Date();
    // this.minDateTuNgay.setHours(0, 0, 0, 0);
    // this.minDateTuNgay.setMonth((new Date()).getMonth() - 1);

    // if (this.baoCaoSearch.TuNgayFormat == null) {
    //   this.baoCaoSearch.TuNgayFormat = this.minDateTuNgay;
    // }
    // if (this.baoCaoSearch.DenNgayFormat == null) {
    //   this.baoCaoSearch.DenNgayFormat = new Date();
    // }
    this.ganThoiGianTimKiemMacDinh();
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
      let tuNgay = CommonService.formatDateTime(this.baoCaoSearch.TuNgayFormat, "mm/dd/yyyy");
      let denNgay = CommonService.formatDateTime(this.baoCaoSearch.DenNgayFormat, "mm/dd/yyyy");

      // this.baoCaoSearch.FromDate = this.baoCaoSearch.TuNgayFormat;
      // this.baoCaoSearch.ToDate = this.baoCaoSearch.DenNgayFormat;
      // this.baoCaoSearch.AdditionalSearchString = tuNgay + ";" + denNgay + ";" + this.inBaoCaoXuatNhapTon.HostingName;
      this.baoCaoSearch.FromDate = tuNgay;
      this.baoCaoSearch.ToDate = denNgay;
      this.gridChild._gridQueryInfo.additionalSearchString = JSON.stringify(this.baoCaoSearch);
      this.apiService.postExportExcel<any>("BaoCao/ExportBaoCaoChiTietHoaHongCuaNguoiGioiThieu", this.gridChild._gridQueryInfo)
        .subscribe(res => {
          let dateTimeNow = new Date();
          CommonService.downLoadFile(res, "application/vnd.ms-excel", "BaoCaoChiTietHoaHongCuaNguoiGioiThieu" + dateTimeNow.getFullYear() + ".xlsx");
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
    this.gridChild._isLoading = true;
    this.gridChild._isLoadingTotalPage = true;
    // if (this.baoCaoSearch.NoiGioiThieuId == undefined || this.baoCaoSearch.NoiGioiThieuId == null) {
    //   this.notificationService.showError("Nơi giới thiệu yêu cầu nhập");
    //   this.gridChild._isLoading = false;
    //   this.gridChild._isLoadingTotalPage = false;
    //   return;
    // }
    if (this.baoCaoSearch.TuNgayFormat == null || this.baoCaoSearch.DenNgayFormat == null) {
      this.notificationService.showError("Từ ngày và đến ngày yêu cầu nhập");
      this.gridChild._isLoading = false;
      this.gridChild._isLoadingTotalPage = false;
      return;
    }

    if (this.baoCaoSearch.TuNgayFormat == null) {
      this.minDateTuNgay = new Date();
      this.minDateTuNgay.setHours(0, 0, 0, 0);
      this.baoCaoSearch.FromDate = CommonService.formatDateTime(this.minDateTuNgay, "mm/dd/yyyy");
    }
    if (this.baoCaoSearch.DenNgayFormat == null) {
      this.minDateTuNgay = new Date();
      this.baoCaoSearch.ToDate = CommonService.formatDateTime(this.minDateTuNgay, "mm/dd/yyyy");
    }
    let tuNgay = CommonService.formatDateTime(this.baoCaoSearch.TuNgayFormat, "mm/dd/yyyy");
    let denNgay = CommonService.formatDateTime(this.baoCaoSearch.DenNgayFormat, "mm/dd/yyyy");

    // this.baoCaoSearch.FromDate = this.baoCaoSearch.TuNgayFormat;
    // this.baoCaoSearch.ToDate = this.baoCaoSearch.DenNgayFormat;
    // this.baoCaoSearch.AdditionalSearchString = tuNgay + ";" + denNgay;
    this.baoCaoSearch.FromDate = tuNgay;
    this.baoCaoSearch.ToDate = denNgay;
    this.gridChild._additionalSearchString = JSON.stringify(this.baoCaoSearch);
    this.gridChild._skip = 0;
    this.gridChild.search();
    this.getTongCong(this.gridChild._gridQueryInfo);
    // this.apiService.post<any>("BaoCao/GetDataBaoCaoChiTietHoaHongCuaNguoiGioiThieuForGridAsync", this.gridChild._gridQueryInfo).subscribe(resultData => {
    //   if (resultData !== undefined && resultData != null) {
    //     this.IsData = true;
    //     this.dataSource = {
    //       data: resultData.Data,
    //       total: resultData.TotalRowCount
    //     };
    //     this.tongSoTienDV = resultData.Data.reduce((sum: number, item: { SoTienDV: number; }) => sum + item.SoTienDV, 0);

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
  //   this.inBaoCaoXuatNhapTon.FromDate = CommonService.formatDateTime(this.baoCaoSearch.TuNgayFormat, "mm/dd/yyyy");
  //   this.inBaoCaoXuatNhapTon.ToDate = CommonService.formatDateTime(this.baoCaoSearch.DenNgayFormat, "mm/dd/yyyy");
  //   this.dialog.open(BaoCaoXuatNhapTonPopupComponent, {
  //     disableClose: false,
  //     width: '1200px',
  //     data: this.inBaoCaoXuatNhapTon,
  //   }
  //   ).afterClosed().subscribe(() => {
  //   });
  // }

  getTongCong(queryInfo) {
    this.apiService.post<any>("BaoCao/GetTonGcongHoaHongCuaNguoiGioiThieu", queryInfo).subscribe(resultData => {
      this.tongSoTienDV = resultData.SoTienDV;
    },
      (err: ApiError) => {
        if (err.Message != "Validation Failed") {
          this.notificationService.showError(err.Message);
        }
      });
  }

  changeHinhThucDen(event)
  {
    this.cboTiepNhan.getDataForLookup();
  }

  changeNguoiGioiThieu(event)
  {
    this.cboTiepNhan.getDataForLookup();
  }

  ganThoiGianTimKiemMacDinh(xoaThoiGianMacDinh: boolean = false) {
    if (xoaThoiGianMacDinh) {
      this.baoCaoSearch.TuNgayFormat = null;
      this.baoCaoSearch.DenNgayFormat = null;
    }
    else {
      this.minDateTuNgay = new Date();
      this.minDateTuNgay.setHours(0, 0, 0, 0);
      // this.minDateTuNgay.setMonth((new Date()).getMonth() - 1);
      this.minDateTuNgay.setDate(1);

      if (this.baoCaoSearch.TuNgayFormat == null) {
        this.baoCaoSearch.TuNgayFormat = this.minDateTuNgay;
      }
      if (this.baoCaoSearch.DenNgayFormat == null) {
        this.baoCaoSearch.DenNgayFormat = new Date();
        //this.baoCaoSearch.DenNgayFormat.setHours(23, 59, 59);
      }
    }
  }
}

