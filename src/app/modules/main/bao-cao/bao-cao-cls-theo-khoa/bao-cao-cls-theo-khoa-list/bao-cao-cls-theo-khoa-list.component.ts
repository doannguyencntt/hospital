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
import { BaoCaoClsTheoKhoaBacSi } from '../bao-cao-cls-theo-khoa.model';
import icFilterList from '@iconify/icons-ic/twotone-filter-list';
import { process } from '@progress/kendo-data-query';
declare var jQuery: any;
@Component({
  selector: 'app-bao-cao-cls-theo-khoa-list',
  templateUrl: './bao-cao-cls-theo-khoa-list.component.html',
  styleUrls: ['./bao-cao-cls-theo-khoa-list.component.scss']
})
export class BaoCaoClsTheoKhoaListComponent implements OnInit {
  baoCaoClsTheoKhoa: BaoCaoClsTheoKhoaBacSi = new BaoCaoClsTheoKhoaBacSi();
  documentType: DocumentType;
  icFilterList = icFilterList;

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
  pageSize = 50;
  height: number;
  gridView: GridDataResult;
  _showDefaultPagerTemplate: boolean;
  showDefaultPagerTemplate: boolean = true;
  _isLoading: boolean = false;
  _isLoadingTotalPage: boolean = false;
  ishowView: boolean = false;
  urlGetDataGridChild: string = "";
  urlGetPageDataGridChild: string = "";

  public aggregates: any[] = [
    { field: 'SoLan', aggregate: 'sum' },
  ];

  public groups: GroupDescriptor[] = [{
    field: 'Nhom',
    aggregates: this.aggregates
  }];

  @ViewChild('baoCaoThongHoatDongCLSKhoaGrid', { static: true }) baoCaoThongHoatDongCLSKhoaGrid: any;
  @ViewChild("soLanGroupHeaderColumnTemplate", { static: true }) soLanGroupHeaderColumnTemplate: TemplateRef<any>;
  @ViewChild("nhomGroupHeaderTemplate", { static: true }) nhomGroupHeaderTemplate: TemplateRef<any>
  @Input() heightToolbar: number = 140;
  constructor(private apiService: ApiService,
    private dialog: MatDialog,
    private notificationService: NotificationService,
    private authService: AuthService,
    private ref: ChangeDetectorRef) { }

  ngOnInit() {
    this.documentType = DocumentType.BaoCaoHoatDongClsTheoKhoa;
    this.skip = 0;
    this.take = (this.pageSize * this.skip) + this.pageSize;
    this._showDefaultPagerTemplate = this.showDefaultPagerTemplate;
    this.gridColumns = [
      { Field: "STT", Title: "STT", Width: 200 }, //0 
      { Field: "Ten", Title: "Các dịch vụ", Width: 150 },//1
      { Field: "SoLan", Title: "Số lượng", Width: 100, TemplateGroupHeaderColumn: this.soLanGroupHeaderColumnTemplate },//2
      // { Field: "DonGia", Title: "Đơn giá", Width: 200 },//3
      { Field: "DonGiaNiemYet", Title: " Đơn giá Niêm Yết", Width: 100 },//4 (3)
      // { Field: "DonGiaSauChietKhau", Title: "Thực Thu", Width: 100 },//5 
      { Field: "ThanhTien", Title: "Thành Tiền", Width: 200 },//6 (4)
      { Field: "TongThanhTienNiemYet", Title: "Niêm Yết", Width: 100 },//7 (5)
      { Field: "TongThanhTienThucThu", Title: "Thực Thu", Width: 100 },//8 (6)
      { Field: "Nhom", Title: "Nhóm", Width: 300, Sortable: true, Hidden: true, TemplateGroupHeader: this.nhomGroupHeaderTemplate },

    ];
    let dateNow = new Date();
    // this.baoCaoClsTheoKhoa.RangeFromDate.startDate = new Date(dateNow.getFullYear(), dateNow.getMonth(), dateNow.getDate());
    // this.baoCaoClsTheoKhoa.RangeFromDate.endDate = new Date(dateNow.getFullYear(), dateNow.getMonth(), dateNow.getDate(), 23, 59, 59, 59);
    this.baoCaoClsTheoKhoa.ThoiDiemTiepNhanTuFormat = new Date(dateNow.getFullYear(), dateNow.getMonth(), dateNow.getDate());
    this.baoCaoClsTheoKhoa.ThoiDiemTiepNhanDenFormat = new Date(dateNow.getFullYear(), dateNow.getMonth(), dateNow.getDate(), 23, 59, 59, 59);
    if (this.baoCaoClsTheoKhoa.ThoiDiemTiepNhanTuFormat != null) {
      this.baoCaoClsTheoKhoa.FromDate = CommonService.formatDateTime(this.baoCaoClsTheoKhoa.ThoiDiemTiepNhanTuFormat, "dd/mm/yyyy");
    } else {
      this.baoCaoClsTheoKhoa.FromDate = null;
    }

    if (this.baoCaoClsTheoKhoa.ThoiDiemTiepNhanDenFormat != null) {
      this.baoCaoClsTheoKhoa.ToDate = CommonService.formatDateTime(
        this.baoCaoClsTheoKhoa.ThoiDiemTiepNhanDenFormat,
        "dd/mm/yyyy"
      );
    } else {
      this.baoCaoClsTheoKhoa.ToDate = null;
    }
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

  getSoLanSum(value) {
    if (value) {
      return value.sum;
    }
  }

  totalSoLan() {
    if (this.gridDataSource.data != undefined) {
      return this.gridDataSource.data.reduce((sum, item) => sum + item.SoLan, 0);
    }
  }

  totalThanhTienNiemYet() {
    if (this.gridDataSource.data != undefined) {
      return this.gridDataSource.data.reduce((sum, item) => sum + item.TongThanhTienNiemYet, 0);
    }
  }

  totalThanhTienThucThu() {
    if (this.gridDataSource.data != undefined) {
      return this.gridDataSource.data.reduce((sum, item) => sum + item.TongThanhTienThucThu, 0);
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
  ngAfterContentInit() {
    var self = this;
    self.height = jQuery(window).height() - 180;
    if (self.height < 400)
      self.height = 400;
    jQuery(window).resize(function () {
      self.height = jQuery(window).height() - 180;
      if (self.height < 400)
        self.height = 400;
    });

  }

  changeNgayBatDauRange() {

  }

  searchRefresh() {

  }


  public pageChange(event: PageChangeEvent): void {
    this.skip = event.skip;
    // this.XemBaoCao();

    if (this.gridDataSource.data.length == 0) {
      this.XemBaoCao();
    } else {
      var takeTo = +this.skip + +this.pageSize;
      let gridData = this.gridDataSource.data.slice(this.skip, takeTo);
      this.gridView = process(gridData, { group: this.groups });
      this.gridView.total = this.gridDataSource.total;

      // this.gridView.data = this.gridView.data.slice(this.skip, takeTo);
    }
  }

  XemBaoCao() {
    // if (this.baoCaoClsTheoKhoa.RangeFromDate.startDate == null || this.baoCaoClsTheoKhoa.RangeFromDate.endDate == null) {
    //   this.notificationService.showError("Ngày thực hiện từ ngày và đến ngày yêu cầu nhập");
    //   return;
    // }
    if (this.baoCaoClsTheoKhoa.ThoiDiemTiepNhanTuFormat != null) {
      this.baoCaoClsTheoKhoa.FromDate = CommonService.formatDateTime(
        this.baoCaoClsTheoKhoa.ThoiDiemTiepNhanTuFormat,
        "dd/mm/yyyy"
      );
    } else {
      this.baoCaoClsTheoKhoa.FromDate = null;
    }

    if (this.baoCaoClsTheoKhoa.ThoiDiemTiepNhanDenFormat != null) {
      this.baoCaoClsTheoKhoa.ToDate = CommonService.formatDateTime(
        this.baoCaoClsTheoKhoa.ThoiDiemTiepNhanDenFormat,
        "dd/mm/yyyy"
      );
    } else {
      this.baoCaoClsTheoKhoa.ToDate = null;
    }
    this._isLoading = true;
    this._isLoadingTotalPage = true;
    this.apiService.post<any>("BaoCaoThucHienCls/GetDataForGridAsyncHoatDongCLS", this.baoCaoClsTheoKhoa).subscribe(resultData => {
      if (resultData !== undefined && resultData != null) {
        if (resultData !== undefined && resultData != null) {
          this.showPrintExport = true;
          this.gridDataSource = {
            data: resultData.Data,
            total: resultData.TotalRowCount
          };

          var takeTo = +this.skip + +this.pageSize;
          let gridData = this.gridDataSource.data.slice(this.skip, takeTo);

          this.gridView = process(gridData, { group: this.groups });
          this.gridView.total = this.gridDataSource.total;


          this._isLoadingTotalPage = false;
          // this.gridView.data.forEach((item, idx) => {
          //   this.baoCaoThongHoatDongCLSKhoaGrid.collapseRow(idx);
          // })
          this._isLoading = false;

        }
      }
    });
  }
  reFresh() {
    this.skip = 0;
    this.XemBaoCao()
  }

  XuatBaoCao() {
    const self = this;
    if (self.authService.hasPermission(self.documentType, SecurityOperation.Process)) {
      self.dialog.open(LoadingComponent, {
        disableClose: true,
        width: '200px',
        height: '90px',
        data: { Title: 'Đang xuất excel...' }
      });
      if (this.baoCaoClsTheoKhoa.ThoiDiemTiepNhanTuFormat != null) {
        this.baoCaoClsTheoKhoa.FromDate = CommonService.formatDateTime(
          this.baoCaoClsTheoKhoa.ThoiDiemTiepNhanTuFormat,
          "dd/mm/yyyy"
        );
      } else {
        this.baoCaoClsTheoKhoa.FromDate = null;
      }

      if (this.baoCaoClsTheoKhoa.ThoiDiemTiepNhanDenFormat != null) {
        this.baoCaoClsTheoKhoa.ToDate = CommonService.formatDateTime(
          this.baoCaoClsTheoKhoa.ThoiDiemTiepNhanDenFormat,
          "dd/mm/yyyy"
        );
      } else {
        this.baoCaoClsTheoKhoa.ToDate = null;
      }
      self.apiService.postExportExcel<string>('BaoCaoThucHienCls/ExportBaoCaoHoatDongClsTheoKhoa', this.baoCaoClsTheoKhoa).subscribe(
        resultData => {
          self.dialog.closeAll();
          const dateTimeNow = new Date();
          CommonService.downLoadFile(resultData, 'application/vnd.ms-excel',
            'BaoCaoThucHienCls' + dateTimeNow.getFullYear() + '.xlsx');
        },
        (err: any) => {
          self.notificationService.showError(err.Message);
          self.dialog.closeAll();

        });
    } else {
      self.notificationService.showError(SystemMessage.UnAuthorizedMessage);
    }
  }

}
