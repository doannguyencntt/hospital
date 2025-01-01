import { ChangeDetectorRef, Component, OnInit, ViewChild, Input, TemplateRef } from '@angular/core';
import { MatDialog } from '@angular/material';
import { GridDataResult, PageChangeEvent } from '@progress/kendo-angular-grid';
import { GroupDescriptor } from '@progress/kendo-data-query';
import { ApiService } from 'src/app/core/services/api.service';
import { AuthService } from 'src/app/core/services/auth.service';
import { NotificationService } from 'src/app/core/services/notification.service';
import { CommonService } from 'src/app/core/utilities/common.helper';
import { LoadingComponent } from 'src/app/shared/component/dialogs/loading/loading.component';
import { SystemMessage } from 'src/app/shared/configdata/system-message';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import { SecurityOperation } from 'src/app/shared/enum/security-operation.enum';
import { ApiError } from 'src/app/shared/models/api-error.model';

declare var jQuery: any;
import { process } from '@progress/kendo-data-query';
import { GridComponent } from 'src/app/shared/component/grid/grid.component';
import { BaoCaoTraCuuDuLieu } from '../bao-cao-tra-cuu-du-lieu.model';

@Component({
  selector: 'app-bao-cao-tra-cuu-du-lieu',
  templateUrl: './bao-cao-tra-cuu-du-lieu.component.html',
  styleUrls: ['./bao-cao-tra-cuu-du-lieu.component.scss']
})
export class BaoCaoTraCuuDuLieuComponent implements OnInit {
  baoCaoSearch: BaoCaoTraCuuDuLieu = new BaoCaoTraCuuDuLieu();
  public pageSize = 50;
  public skip = 0;
  take: number;
  additionalSearchString = "";
  minDateDenNgay: Date = null;
  minDateTuNgay: Date = null;
  
  height: number;
  documentType: DocumentType;
  ishowView: boolean = false;
  IsData: boolean = false;
  gridColumns: any[];
  loadingPopup: any;

  gridDataSource: any = {
    data: [],
    total: 0
  };

  @ViewChild(GridComponent, { static: true }) gridChild: GridComponent;
  @ViewChild('baoCaoGrid', { static: true }) baoCaoGrid: any;

  @ViewChild('soTienTemplate', { static: true }) soTienTemplate: TemplateRef<any>;
  @ViewChild('tienThueGTGTTienTemplate', { static: true }) tienThueGTGTTienTemplate: TemplateRef<any>;
  @ViewChild('giaTriHHDVChuaThueTemplate', { static: true }) giaTriHHDVChuaThueTemplate: TemplateRef<any>;
  
  public pageChange(event: PageChangeEvent): void {
    this.baoCaoSearch.Skip = event.skip;
    this.skip = event.skip;
    //this.XemBaoCao();
  }

  constructor(
    private apiService: ApiService,
    private dialog: MatDialog,
    private authService: AuthService,
    private notificationService: NotificationService,
  ) { }

  ngOnInit() {
    this.documentType = DocumentType.BaoCaoTraCuuDuLieu;
    this.skip = 0;
    this.take = (this.pageSize * this.skip) + this.pageSize;

    this.gridColumns = [
      { Field: "HienThiTrenSo", Title: "Hiển thị trên sổ", Width: 150 },
      { Field: "NgayChungTuDisplay", Title: "Ngày chứng từ (*)", Width: 150 },
      { Field: "NgayHachToanDisplay", Title: "Ngày hạch toán (*)", Width: 150 },
      { Field: "SoChungTu", Title: "Số chứng từ (*)", Width: 100 },
      { Field: "DienGiai", Title: "Diễn giải", Width: 250 },
      { Field: "HanThanhToan", Title: "Hạn thanh toán", Width: 100 },
      { Field: "DienGiaiHachToan", Title: "Diễn giải (Hạch toán)", Width: 250 },

      { Field: "TaiKhoanNo", Title: "TK Nợ (*)", Width: 100 },
      { Field: "TaiKhoanCo", Title: "TK Có (*)", Width: 100 },
      { Field: "SoTien", Title: "Số tiền", Width: 100, Template: this.soTienTemplate }, //note

      { Field: "DoiTuongNo", Title: "Đối tượng Nợ", Width: 100 },
      { Field: "DoiTuongCo", Title: "Đối tượng Có", Width: 100 },
      { Field: "TaiKhoanNganHang", Title: "TK ngân hàng", Width: 100 },

      { Field: "KhoanMucCP", Title: "Khoản mục CP", Width: 100 },
      { Field: "DonVi", Title: "Đơn vị", Width: 100 },
      { Field: "DoiTuongTHCP", Title: "Đối tượng THCP", Width: 100 },

      { Field: "CongTrinh", Title: "Công trình", Width: 100 },
      { Field: "HopDongBan", Title: "Hợp đồng bán", Width: 100 },
      { Field: "CPKhongHopLy", Title: "CP không hợp lý", Width: 100 },
      { Field: "MaThongKe", Title: "Mã thống kê", Width: 100 },

      { Field: "DienGiaiThue", Title: "Diễn giải (Thuế)", Width: 250 },
      { Field: "TKThueGTGT", Title: "TK thuế GTGT", Width: 100 },
      { Field: "TienThueGTGT", Title: "Tiền thuế GTGT", Width: 150 , Template: this.tienThueGTGTTienTemplate},

      { Field: "PhanTramThueGTGT", Title: "% thuế GTGT", Width: 100 },
      { Field: "GiaTriHHDVChuaThue", Title: "Giá trị HHDV chưa thuế", Width: 150 , Template: this.giaTriHHDVChuaThueTemplate},
      { Field: "MauSoHopDong", Title: "Mẫu số HĐ", Width: 100 },

      { Field: "NgayHoaDonDisplay", Title: "Ngày hóa đơn", Width: 100 },
      { Field: "KyHieuHopDong", Title: "Ký hiệu HĐ", Width: 100 },
      { Field: "SoHoaDon", Title: "Số hóa đơn", Width: 100 },

      { Field: "NhomHHDVMuaVao", Title: "Nhóm HHDV mua vào", Width: 100 },
      { Field: "MaDoiTuongThue", Title: "Mã đối tượng thuế", Width: 100 },
      { Field: "TenDoiTuongThue", Title: "Tên đối tượng thuế", Width: 100 },
      { Field: "MaSoThueDoiTuongThue", Title: "Mã số thuế đối tượng thuế", Width: 150 }
    ];

    this.minDateTuNgay = new Date();
    this.minDateTuNgay.setHours(0, 0, 0, 0);
    var firstDay = new Date(this.minDateTuNgay.getFullYear(), this.minDateTuNgay.getMonth(), 1);
    this.minDateTuNgay.setMonth((new Date()).getMonth() - 1);

    if (this.baoCaoSearch.TuNgayFormat == null) {
      this.baoCaoSearch.TuNgayFormat = firstDay;
    }
    if (this.baoCaoSearch.DenNgayFormat == null) {
      this.baoCaoSearch.DenNgayFormat = new Date();
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

  detailExpand(event: any) {
    let tuNgay = CommonService.formatDateTime(this.baoCaoSearch.TuNgayFormat, "dd/mm/yyyy");
    let denNgay = CommonService.formatDateTime(this.baoCaoSearch.DenNgayFormat, "dd/mm/yyyy");
    this.additionalSearchString = this.baoCaoSearch.KhoId + ";" + event.dataItem.NhomDuocPhamVatTuId + ";" + tuNgay + ";" + denNgay;

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

      this.apiService.postExportExcel<any>("BaoCao/ExportBaoCaoTraCuuDuLieu", this.baoCaoSearch)
        .subscribe(res => {
          let dateTimeNow = new Date();
          CommonService.downLoadFile(res, "application/vnd.ms-excel", "BaoCaoTraCuuDuLieu" + dateTimeNow.getFullYear() + ".xlsx");
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

  xemBaoCao() {
    if (this.baoCaoSearch.TuNgayFormat == null || this.baoCaoSearch.DenNgayFormat == null) {
      this.notificationService.showError("Từ ngày và đến ngày yêu cầu nhập");
      return;
    }

    this.baoCaoSearch.FromDate = this.baoCaoSearch.TuNgayFormat;
    this.baoCaoSearch.ToDate = this.baoCaoSearch.DenNgayFormat;

    this.showLoadingPopup();

    this.apiService.post<any>("BaoCao/GetDataBaoCaoTraCuuDuLieuForGridAsync", this.baoCaoSearch)
      .subscribe(resultData => {
        if (resultData !== undefined && resultData != null) {
          this.IsData = true;

          this.gridDataSource = {
            data: resultData.Data,
            total: resultData.TotalRowCount
          };

          if (resultData.TotalRowCount != 0) {
            this.pageSize = resultData.TotalRowCount
            this.ishowView = true;
          } else {
            this.ishowView = false;
          }

          this.closeAllDialogs();
        }
      });
  }

  changeValueStart() {
    this.minDateDenNgay = new Date();
    if (this.baoCaoSearch.TuNgayFormat != null && this.baoCaoSearch.DenNgayFormat != null
      && this.baoCaoSearch.DenNgayFormat < this.baoCaoSearch.TuNgayFormat) {
      this.baoCaoSearch.DenNgayFormat = this.minDateDenNgay;
    }
  }

  showLoadingPopup() {
    if (!this.loadingPopup) {
      this.loadingPopup = this.dialog.open(LoadingComponent, {
        disableClose: true,
        width: '200px',
        height: '90px',
        data: { Title: 'Đang tải...' }
      });
    }
  }

  showSavingPopup() {
    if (!this.loadingPopup) {
      this.loadingPopup = this.dialog.open(LoadingComponent, {
        disableClose: true,
        width: '200px',
        height: '90px',
        data: { Title: 'Đang lưu...' }
      });
    }
  }

  closeAllDialogs() {
    if (this.loadingPopup) {
      this.loadingPopup.close();
      this.loadingPopup = null;
    }
  }
}
