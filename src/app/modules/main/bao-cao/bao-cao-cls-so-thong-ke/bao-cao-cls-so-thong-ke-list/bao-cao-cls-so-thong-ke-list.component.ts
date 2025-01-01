import { ChangeDetectorRef, Component, OnInit, ViewChild, Input, TemplateRef } from '@angular/core';
import { MatDialog } from '@angular/material';
import { GridDataResult } from '@progress/kendo-angular-grid';
import { GroupDescriptor, SortDescriptor } from '@progress/kendo-data-query';
import { ApiService } from 'src/app/core/services/api.service';
import { AuthService } from 'src/app/core/services/auth.service';
import { NotificationService } from 'src/app/core/services/notification.service';
import { CommonService } from 'src/app/core/utilities/common.helper';
import { LoadingComponent } from 'src/app/shared/component/dialogs/loading/loading.component';
import { SystemMessage } from 'src/app/shared/configdata/system-message';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import { SecurityOperation } from 'src/app/shared/enum/security-operation.enum';
import { ApiError } from 'src/app/shared/models/api-error.model';
import { BaoCaoClsSoThongKe } from '../bao-cao-cls-so-thong-ke.model';
declare var jQuery: any;
import { process } from '@progress/kendo-data-query';
import { GridComponent } from 'src/app/shared/component/grid/grid.component';
@Component({
  selector: 'app-bao-cao-cls-so-thong-ke-list',
  templateUrl: './bao-cao-cls-so-thong-ke-list.component.html',
  styleUrls: ['./bao-cao-cls-so-thong-ke-list.component.scss']
})
export class BaoCaoClsSoThongKeListComponent implements OnInit {
  baoCaoClsSoThongKe: BaoCaoClsSoThongKe = new BaoCaoClsSoThongKe();
  documentType: DocumentType = DocumentType.BaoCaoSoThongKeCls;
  gridColumns: any[] = [];
  gridDataSource: any = {
    data: [],
    total: 0
  };
  showGrid: boolean = false;
  showPrintExport: boolean = false;
  minDateDenNgay: Date = null;
  minDateTuNgay: Date = null;
  validationErrors: any;
  skip = 0;
  take: number;
  pageSize = 100;
  height: number;
  additionalSearchString: string = null;
  disabledXuatBaoCao: boolean = false;
  gridView: GridDataResult;
  _showDefaultPagerTemplate: boolean;
  showDefaultPagerTemplate: boolean = true;
  _isLoading: boolean = false;
  _isLoadingTotalPage: boolean = false;
  ishowView: boolean = false;
  urlGetData: string = "BaoCaoThucHienCls/GetDataSoThongKeCLSForGridAsync";
  urlGetPageData: string = "BaoCaoThucHienCls/GetTotalPageSoThongKeCLSForGridAsync";
  popupLoadingData: any = null;
  data: any[] = [];
  sort: SortDescriptor[] = [
    {
      field: "Nhom",
      dir: "asc",
    },
  ];
  @ViewChild(GridComponent, { static: true }) grid: GridComponent;

  @ViewChild('BaoCaoClsSoThongKeGrid', { static: true }) BaoCaoClsSoThongKeGrid: any;
  @ViewChild("nhomGroupHeaderTemplate", { static: true }) nhomGroupHeaderTemplate: TemplateRef<any>;
  @ViewChild('donGiaTemplate', { static: true }) donGiaTemplate: TemplateRef<any>;

  @Input() heightToolbar: number = 140;
  public groups: GroupDescriptor[] = [{ field: "Nhom" }];
  constructor(private apiService: ApiService,
    private dialog: MatDialog,
    private notificationService: NotificationService,
    private authService: AuthService,
    private ref: ChangeDetectorRef) { }

  ngOnInit() {
    let dateNow = new Date();
    // this.baoCaoClsSoThongKe.RangeFromDate.startDate = new Date(dateNow.getFullYear(), dateNow.getMonth(), dateNow.getDate());
    // this.baoCaoClsSoThongKe.RangeFromDate.endDate = new Date(dateNow.getFullYear(), dateNow.getMonth(), dateNow.getDate(), 23, 59, 59, 59);
    // this.additionalSearchString = JSON.stringify(this.baoCaoClsSoThongKe);
    this.gridColumns = [
      { Field: "MaTN", Title: "Mã TN", Width: 120, ShowTooltip: true },
      { Field: "SoBA", Title: "Số bệnh án", Width: 130, ShowTooltip: true },
      { Field: "HoTen", Title: "Họ tên", Width: 250, ShowTooltip: true },
      { Field: "NamSinh", Title: "Năm sinh", Width: 120, },
      { Field: "GioiTinhDisplay", Title: "Giới tính", Width: 120, },
      { Field: "BHYTMaSoThe", Title: "BHYT", Width: 70, ShowTooltip: true },
      { Field: "TenDichVu", Title: "Tên DV", Width: 200, ShowTooltip: true },
      { Field: "ChanDoan", Title: "Chuẩn đoán", Width: 200, ShowTooltip: true },
      { Field: "KetLuan", Title: "Kết luận", Width: 150, ShowTooltip: true },
      { Field: "SoLan", Title: "Số lần", Width: 100 },
      { Field: "Gia", Title: "Giá", Width: 100, ShowTooltip: true, Template: this.donGiaTemplate },
      { Field: "TenNoiChiDinh", Title: "Tên nơi chỉ định", Width: 200, ShowTooltip: true },
      { Field: "TenNguoiChiDinh", Title: "Tên người chỉ định", Width: 200, ShowTooltip: true },
      { Field: "KTV", Title: "KTV", Width: 100, ShowTooltip: true },
      { Field: "ThoiDiemDangKyDisplay", Title: "Thời điểm chỉ định", Width: 100, ShowTooltip: true },
      { Field: "ThoiDiemThucHienDisplay", Title: "Thời điểm thực hiện", Width: 100, ShowTooltip: true },
      { Field: "ThoiDiemNhapVienDisplay", Title: "Thời điểm nhập viện", Width: 100, ShowTooltip: true },
      { Field: "ThoiDiemRaVienDisplay", Title: "Thời điểm ra viện", Width: 100, ShowTooltip: true },
      { Field: "GhiChu", Title: "Ghi chú", Width: 100 },
      {
        Field: 'Nhom',
        Title: '',
        Width: 0,
        Sortable: true,
        Hidden: true,
        HideFilter: true,
        TemplateGroupHeader: this.nhomGroupHeaderTemplate
      }
    ];
  }
  columnResize(event: any): void {
    //khi resize column parent thì column child cũng resize theo
    if (event != null && event.length > 0) {
      event.forEach(element => {
        var columnIndex = this.gridColumns.findIndex(x => x.Field === element.column.field);
        if (columnIndex >= 0) {
          this.gridColumns[columnIndex].Width = element.newWidth;
          if (jQuery(".k-detail-cell .k-grid-table").find("col") != undefined && jQuery(".k-detail-cell .k-grid-table").find("col").length > 0) {
            jQuery(jQuery(".k-detail-cell .k-grid-table").find("col")[columnIndex]).css({ width: element.newWidth });
          }
        }
      });
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
    var widthParent = jQuery("#baoCaoThongKeDonThuocGrid").parent().width();
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
  changeNgayBatDauRange() {

  }
  pageChange(event) {
    //this.baoCaoClsSoThongKe.Skip = event.skip;
    this.XemBaoCao();
  }

  addingPage() {
    this.popupLoadingData = this.dialog.open(LoadingComponent, {
      disableClose: true,
      width: "200px",
      height: "90px",
      data: { Title: "Đang tải dữ liệu..." },
    });
  }

  closepopupLoadingData() {
    if (this.popupLoadingData != undefined && this.popupLoadingData != null) {
      this.popupLoadingData.close();
    }
  }


  XemBaoCao() {
    this._isLoading = true;
    this._isLoadingTotalPage = true;

    // if (this.baoCaoClsSoThongKe.RangeFromDate != null && this.baoCaoClsSoThongKe.RangeFromDate.startDate != null) {
    //   this.baoCaoClsSoThongKe.RangeFromDate.TuNgay = CommonService.formatDateTime(this.baoCaoClsSoThongKe.RangeFromDate.startDate, "mm/dd/yyyy");
    // }
    // else {
    //   this.baoCaoClsSoThongKe.RangeFromDate.TuNgay = null;
    // }
    // if (this.baoCaoClsSoThongKe.RangeFromDate != null && this.baoCaoClsSoThongKe.RangeFromDate.endDate != null) {
    //   this.baoCaoClsSoThongKe.RangeFromDate.DenNgay = CommonService.formatDateTime(this.baoCaoClsSoThongKe.RangeFromDate.endDate, "mm/dd/yyyy");
    // }
    // else {
    //   this.baoCaoClsSoThongKe.RangeFromDate.DenNgay = null;
    // }
    if (this.baoCaoClsSoThongKe.ThoiDiemTiepNhanTuFormat != null) {
      this.baoCaoClsSoThongKe.FromDate = CommonService.formatDateTime(
        this.baoCaoClsSoThongKe.ThoiDiemTiepNhanTuFormat,
        "dd/mm/yyyy"
      );
    } else {
      this.baoCaoClsSoThongKe.FromDate = null;
    }

    if (this.baoCaoClsSoThongKe.ThoiDiemTiepNhanDenFormat != null) {
      this.baoCaoClsSoThongKe.ToDate = CommonService.formatDateTime(
        this.baoCaoClsSoThongKe.ThoiDiemTiepNhanDenFormat,
        "dd/mm/yyyy"
      );
    } else {
      this.baoCaoClsSoThongKe.ToDate = null;
    }
    var queryString = JSON.stringify(this.baoCaoClsSoThongKe);
    this.grid._additionalSearchString = queryString;
    this.grid.search();
  }

  onDataBoundChild(data: any) {
    if (data != undefined && data.Data.length > 0) {
      this.data = data.Data;
      this.disabledXuatBaoCao = false;
    }
    else {
      this.disabledXuatBaoCao = true;
    }
  }

  XuatBaoCao() {
    var self = this;
    // if (this.baoCaoClsSoThongKe.RangeFromDate != null && this.baoCaoClsSoThongKe.RangeFromDate.startDate != null) {
    //   this.baoCaoClsSoThongKe.RangeFromDate.TuNgay = CommonService.formatDateTime(this.baoCaoClsSoThongKe.RangeFromDate.startDate, "mm/dd/yyyy");
    // }
    // else {
    //   this.baoCaoClsSoThongKe.RangeFromDate.TuNgay = null;
    // }
    // if (this.baoCaoClsSoThongKe.RangeFromDate != null && this.baoCaoClsSoThongKe.RangeFromDate.endDate != null) {
    //   this.baoCaoClsSoThongKe.RangeFromDate.DenNgay = CommonService.formatDateTime(this.baoCaoClsSoThongKe.RangeFromDate.endDate, "mm/dd/yyyy");
    // }
    // else {
    //   this.baoCaoClsSoThongKe.RangeFromDate.DenNgay = null;
    // }

    if (this.baoCaoClsSoThongKe.ThoiDiemTiepNhanTuFormat != null) {
      this.baoCaoClsSoThongKe.FromDate = CommonService.formatDateTime(
        this.baoCaoClsSoThongKe.ThoiDiemTiepNhanTuFormat,
        "dd/mm/yyyy"
      );
    } else {
      this.baoCaoClsSoThongKe.FromDate = null;
    }

    if (this.baoCaoClsSoThongKe.ThoiDiemTiepNhanDenFormat != null) {
      this.baoCaoClsSoThongKe.ToDate = CommonService.formatDateTime(
        this.baoCaoClsSoThongKe.ThoiDiemTiepNhanDenFormat,
        "dd/mm/yyyy"
      );
    } else {
      this.baoCaoClsSoThongKe.ToDate = null;
    }
    this.baoCaoClsSoThongKe.AdditionalSearchString = JSON.stringify(this.baoCaoClsSoThongKe);
    if (self.authService.hasPermission(self.documentType, SecurityOperation.Process)) {
      self.dialog.open(LoadingComponent, {
        disableClose: true,
        width: '200px',
        height: '90px',
        data: { Title: 'Đang xuất excel...' }
      });
      self.apiService.postExportExcel<string>('BaoCaoThucHienCls/ExportBaoCaoSoThongKeCls', this.baoCaoClsSoThongKe).subscribe(
        resultData => {
          self.dialog.closeAll();
          const dateTimeNow = new Date();
          CommonService.downLoadFile(resultData, 'application/vnd.ms-excel',
            'BaoCaoThucHienCls' + dateTimeNow.getFullYear() + '.xlsx');
        },
        (err: ApiError) => {
          self.notificationService.showError(err.Message);
          self.dialog.closeAll();
        });
    } else {
      self.notificationService.showError(SystemMessage.UnAuthorizedMessage);
    }
  }

  khoaChange(event: any) {

  }
}
