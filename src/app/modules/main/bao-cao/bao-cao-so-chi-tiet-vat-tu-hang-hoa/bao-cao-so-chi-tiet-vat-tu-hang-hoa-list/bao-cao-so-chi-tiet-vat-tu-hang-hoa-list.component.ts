import { GridDataResult, PageChangeEvent } from '@progress/kendo-angular-grid';
import { GroupDescriptor, SortDescriptor, State } from '@progress/kendo-data-query';
import { GridComponent } from 'src/app/shared/component/grid/grid.component';
import { Component, OnInit, TemplateRef, ViewChild, Input } from '@angular/core';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import { ApiService } from 'src/app/core/services/api.service';
import { CommonService } from 'src/app/core/utilities/common.helper';
declare var jQuery: any;
import { MatDialog } from '@angular/material';
import { LoadingComponent } from "src/app/shared/component/dialogs/loading/loading.component";
import { AuthService } from 'src/app/core/services/auth.service';
import { SecurityOperation } from 'src/app/shared/enum/security-operation.enum';
import { NotificationService } from 'src/app/core/services/notification.service';
import { SystemMessage } from 'src/app/shared/configdata/system-message';
import { process } from '@progress/kendo-data-query';
import { BaoCaoSoChiTietVatTuHangHoaSearch, DataChiTietVatTuHangHoa, InBaoCaoSoChiTietVatTuHangHoa } from '../bao-cao-so-chi-tiet-vat-tu-hang-hoa.model';
@Component({
  selector: 'app-bao-cao-so-chi-tiet-vat-tu-hang-hoa-list',
  templateUrl: './bao-cao-so-chi-tiet-vat-tu-hang-hoa-list.component.html',
  styleUrls: ['./bao-cao-so-chi-tiet-vat-tu-hang-hoa-list.component.scss']
})
export class BaoCaoSoChiTietVatTuHangHoaListComponent implements OnInit {

  baoCaoSearch: BaoCaoSoChiTietVatTuHangHoaSearch = new BaoCaoSoChiTietVatTuHangHoaSearch();
  inBaoCaoXuatNhapTon: InBaoCaoSoChiTietVatTuHangHoa = new InBaoCaoSoChiTietVatTuHangHoa();
  dataChiTietVatTuHangHoa: DataChiTietVatTuHangHoa[] = [];

  groups: GroupDescriptor[] = [{
    field: 'GroupNgayXuatNhap', dir: null, aggregates: [
      { field: 'SoLuongNhap', aggregate: 'sum' },
      { field: 'ThanhTienNhap', aggregate: 'sum' },
      { field: 'SoLuongXuat', aggregate: 'sum' },
      { field: 'ThanhTienXuat', aggregate: 'sum' },
      { field: 'SoLuongTon', aggregate: 'sum' },
      { field: 'ThanhTienTon', aggregate: 'sum' }
    ]
  }];

  public gridView: GridDataResult;
  minDateDenNgay: Date = null;
  minDateTuNgay: Date = null;
  documentType: DocumentType;
  IsData: boolean = false;
  gridColumns: any[];
  public pageSize = 50;
  public skip = 0;
  take: number;
  height: number;
  _isLoading: boolean = false;
  _isLoadingTotalPage: boolean = false;
  _showDefaultPagerTemplate: boolean;
  showDefaultPagerTemplate: boolean = true;

  dataSource: any = {
    data: [],
    total: 0
  };

  gridDataSource: any = {
    data: [],
    total: 0
  };

  @ViewChild(GridComponent, { static: true }) gridChild: GridComponent;
  @ViewChild('baoCaoGrid', { static: true }) baoCaoGrid: any;
  @ViewChild('sttTemplate', { static: true }) sttTemplate: TemplateRef<any>;
  ishowView: boolean;
  @ViewChild('ngayXuatNhapTemplate', { static: true }) ngayXuatNhapTemplate: TemplateRef<any>;
  constructor(
    private apiService: ApiService,
    private dialog: MatDialog,
    private authService: AuthService,
    private notificationService: NotificationService,

  ) { }

  ngOnInit() {
    this.documentType = DocumentType.BaoCaoSoChiTietVatTuHangHoa;
    this._showDefaultPagerTemplate = this.showDefaultPagerTemplate;
    this.skip = 0;
    this.take = (this.pageSize * this.skip) + this.pageSize;
    this.gridColumns = [
      { Field: "STT", Title: "STT", Width: 70, Template: this.sttTemplate },
      { Field: "NgayXuatNhapStr", Title: "Ngày", Width: 200, },
      { Field: "ChungTu", Title: "Chứng từ", Width: 120, },
      { Field: "SoChungTu", Title: "Số hiệu", Width: 120, },
      { Field: "NgayChungTuStr", Title: "Ngày chứng từ", Width: 200, },
      { Field: "DienGiai", Title: "Diễn giải", Width: 250, },
      { Field: "DonGia", Title: "Đơn giá", Width: 120 },
      { Field: "Nhap", Title: "Nhập", Width: 250 },
      { Field: "SoLuongNhap", Title: "Số lượng", Width: 100 },
      { Field: "ThanhTienNhap", Title: "Thành tiền", Width: 150 },
      { Field: "Xuat", Title: "Xuất", Width: 250 },
      { Field: "SoLuongXuat", Title: "Số lượng", Width: 100 },
      { Field: "ThanhTienXuat", Title: "Thành tiền", Width: 150 },
      { Field: "Ton", Title: "Tồn", Width: 250 },
      { Field: "SoLuongTon", Title: "Số lượng", Width: 100 },
      { Field: "ThanhTienTon", Title: "Thành tiền", Width: 150 },

      {
        Field: "GroupNgayXuatNhap", Title: "Ngày Xuất Nhập",
        Width: 150,
        Sortable: true,
        Hidden: true,
        HideFilter: true,
        // TemplateGroupHeader: this.ngayXuatNhapTemplate
      },
    ];

    this.minDateTuNgay = new Date();
    this.minDateTuNgay.setHours(0, 0, 0, 0);
    var firstDayOfMonth = new Date(this.minDateTuNgay.getFullYear(), this.minDateTuNgay.getMonth(), 1);

    if (this.baoCaoSearch.TuNgayFormat == null) {
      this.baoCaoSearch.TuNgayFormat = firstDayOfMonth;
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

  KhoChange(event: any) {
    this.baoCaoSearch.DuocPhamHoacVatTuBenhVienId = null;
    this.baoCaoSearch.LoaiDuocPhamHoacVatTu = null;
  }

  DuocPhamHoacVatTuBenhVienChange(event: any) {
    if (event != undefined && event != null) {
      this.baoCaoSearch.DuocPhamHoacVatTuBenhVienId = event.DuocPhamHoacVatTuBenhVienId;
      this.baoCaoSearch.LoaiDuocPhamHoacVatTu = event.LoaiDuocPhamHoacVatTu;
    }
  }

  exportExcel() {
    if (this.baoCaoSearch.TuNgayFormat == null || this.baoCaoSearch.DenNgayFormat == null) {
      this.notificationService.showError("Từ ngày và đến ngày yêu cầu nhập");
      return;
    }

    if (this.baoCaoSearch.KhoId == null) {
      this.notificationService.showError("Kho yêu cầu nhập");
      return;
    }

    if (!this.baoCaoSearch.DuocPhamHoacVatTuBenhVienId) {
      this.notificationService.showError("Dược phẩm và vật tư yêu cầu nhập");
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

      this.baoCaoSearch.FromDate = this.baoCaoSearch.TuNgayFormat;
      this.baoCaoSearch.ToDate = this.baoCaoSearch.DenNgayFormat;
      this.baoCaoSearch.AdditionalSearchString = tuNgay + ";" + denNgay + ";" + this.inBaoCaoXuatNhapTon.HostingName;
      this.apiService.postExportExcel<any>("BaoCao/ExportBaoCaoBangTheKhoSoChiTietVatTuHangHoa", this.baoCaoSearch)
        .subscribe(res => {
          let dateTimeNow = new Date();
          CommonService.downLoadFile(res, "application/vnd.ms-excel", "BaoCaoSoChiTietVatTuHangHoa" + dateTimeNow.getFullYear() + ".xlsx");
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

  pageChange(event): void {
    this.skip = event.skip;
    if (this.dataSource.data.length == 0) {
      this.XemBaoCao();
    } else {
      var takeTo = this.skip + this.pageSize;
      console.log(this.dataSource.data)
      let gridData = this.dataSource.data.slice(this.skip, takeTo);
      this.gridView = process(gridData, { group: this.groups });
      this.gridView.total = this.dataSource.total;
    }
  }

  XemBaoCao() {
    this._isLoading = true;
    this._isLoadingTotalPage = true;
    if (this.baoCaoSearch.TuNgayFormat == null || this.baoCaoSearch.DenNgayFormat == null) {
      this.notificationService.showError("Từ ngày và đến ngày yêu cầu nhập");
      this._isLoading = false;
      this._isLoadingTotalPage = false;
      return;
    }
    if (this.baoCaoSearch.TuNgayFormat == null) {
      this.minDateTuNgay = new Date();
      this.minDateTuNgay.setHours(0, 0, 0, 0);
      this.baoCaoSearch.FromDate = CommonService.formatDateTime(this.minDateTuNgay, "dd/mm/yyyy");
    }
    if (this.baoCaoSearch.DenNgayFormat == null) {
      this.minDateTuNgay = new Date();
      this.baoCaoSearch.ToDate = CommonService.formatDateTime(this.minDateTuNgay, "dd/mm/yyyy");
    }
    if (this.baoCaoSearch.KhoId == null) {
      this.notificationService.showError("Kho yêu cầu nhập");
      this._isLoading = false;
      this._isLoadingTotalPage = false;
      return;
    }

    if (!this.baoCaoSearch.DuocPhamHoacVatTuBenhVienId) {
      this.notificationService.showError("Dược phẩm và vật tư yêu cầu nhập");
      this._isLoading = false;
      this._isLoadingTotalPage = false;
      return;
    }

    let tuNgay = CommonService.formatDateTime(this.baoCaoSearch.TuNgayFormat, "dd/mm/yyyy");
    let denNgay = CommonService.formatDateTime(this.baoCaoSearch.DenNgayFormat, "dd/mm/yyyy");

    this.baoCaoSearch.FromDate = this.baoCaoSearch.TuNgayFormat;
    this.baoCaoSearch.ToDate = this.baoCaoSearch.DenNgayFormat;
    this.baoCaoSearch.AdditionalSearchString = tuNgay + ";" + denNgay;
    this.apiService.post<any>("BaoCao/GetDataBaoCaoSoChiTietVatTuHangHoaForGridAsync", this.baoCaoSearch).subscribe(resultData => {
      if (resultData !== undefined && resultData != null) {
        this.IsData = true;

        this.dataChiTietVatTuHangHoa = resultData.Data;
        this.dataChiTietVatTuHangHoa.forEach(element => {
          let dateTime = new Date(element.NgayXuatNhap);
          var month = dateTime.getMonth() + 1;
          var monthstr = month < 10 ? '0' + month : month;
          var year = dateTime.getFullYear();
          element.GroupNgayXuatNhap = (monthstr + "/" + year).toString();
        });

        this.dataSource = {
          data: this.dataChiTietVatTuHangHoa,
          total: resultData.TotalRowCount
        };

        var takeTo = +this.skip + +this.pageSize;
        let gridData = this.dataSource.data.slice(this.skip, takeTo);

        this.gridView = process(gridData, { group: this.groups });
        this.gridView.total = this.dataSource.total;

        this._isLoading = false;
        this._isLoadingTotalPage = false;
      }
    });
  }

  soLuongTonCuoiCung(dataItem) {
    return dataItem.items.length > 0 ?  dataItem.items[dataItem.items.length - 1].SoLuongTon : 0;
  }

  soLuongTonThanhTien(dataItem) {
    return dataItem.items.length > 0 ?  dataItem.items[dataItem.items.length - 1].ThanhTienTon : 0;
  }

}
