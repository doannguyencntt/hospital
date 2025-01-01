import { GridDataResult, PageChangeEvent } from '@progress/kendo-angular-grid';
import { GroupDescriptor, SortDescriptor, State } from '@progress/kendo-data-query';
import { GridComponent } from 'src/app/shared/component/grid/grid.component';
import { Component, OnInit, TemplateRef, ViewChild, Input, ChangeDetectorRef } from '@angular/core';
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
import { BangKeThuocVatTuSearch, PhongPTLookupItemVo, DanhSachThuocVaVatTuPhauThuat, InBangKeThuocVatTu, ThongTinBenhNhanLookupItemVo, ThongTinBenhNhanPhauThuatQueryInfo } from '../bang-ke-thuoc-va-vat-tu-phau-thuat.model';
import { LookupQueryInfo } from 'src/app/shared/models/common.model';
import { elementAt } from 'rxjs-compat/operator/elementAt';




@Component({
  selector: 'app-bang-ke-thuoc-va-vat-tu-phau-thuat-list',
  templateUrl: './bang-ke-thuoc-va-vat-tu-phau-thuat-list.component.html',
  styleUrls: ['./bang-ke-thuoc-va-vat-tu-phau-thuat-list.component.scss']
})
export class BangKeThuocVaVatTuPhauThuatListComponent implements OnInit {

  baoCaoSearch: BangKeThuocVatTuSearch = new BangKeThuocVatTuSearch();
  inBaoCaoXuatNhapTon: InBangKeThuocVatTu = new InBangKeThuocVatTu();

  danhSachThuocVaVatTuPhauThuat: DanhSachThuocVaVatTuPhauThuat[] = [];
  thongTinBenhNhanLookupItemVo: ThongTinBenhNhanLookupItemVo[] = [];
  thongTinBenhNhanPhauThuatQueryInfo = new ThongTinBenhNhanPhauThuatQueryInfo();
  phongLookupItemVos: PhongPTLookupItemVo[] = [];

  public groups: GroupDescriptor[] = [{
    field: 'Loai',
    aggregates: [
      { field: 'ThanhTien', aggregate: 'sum' },
    ]
  }, {
    field: 'Nhom',
    aggregates: [
      { field: 'ThanhTien', aggregate: 'sum' },
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
  ishowView: boolean;

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
  @ViewChild('ngayXuatNhapTemplate', { static: true }) ngayXuatNhapTemplate: TemplateRef<any>;
  @ViewChild('nhomGroupHeaderTemplate', { static: true }) nhomGroupHeaderTemplate: TemplateRef<any>;

  constructor(
    private apiService: ApiService,
    private dialog: MatDialog,
    private authService: AuthService,
    private notificationService: NotificationService,
    private cdref: ChangeDetectorRef
  ) { }

  ngOnInit() {
    this.documentType = DocumentType.BangKeThuocVatTuPhauThuat;
    this._showDefaultPagerTemplate = this.showDefaultPagerTemplate;
    this.skip = 0;  

    this.gridColumns = [
      { Field: "STT", Title: "STT", Width: 70, Template: this.sttTemplate },
      { Field: "TenDichVu", Title: "Tên thuốc,VTYT", Width: 200, },
      { Field: "HamLuongNoiSanXuat", Title: "Hàm lượng/Nơi sản xuất", Width: 120, },
      { Field: "DonViTinh", Title: "ĐVT", Width: 120, },
      { Field: "SoLuong", Title: "Số lượng", Width: 200, },
      { Field: "DonGia", Title: "Đơn giá", Width: 120 },
      { Field: "ThanhTien", Title: "Thành tiền", Width: 250 },

      { Field: "Nhom", Title: "Nhóm", Width: 100, Sortable: true, Hidden: true, TemplateGroupHeader: this.nhomGroupHeaderTemplate },
      { Field: "Loai", Title: "Loại", Width: 100, Sortable: true, Hidden: true, TemplateGroupHeader: this.nhomGroupHeaderTemplate },

    ];

    this.minDateTuNgay = new Date();
    this.minDateTuNgay.setHours(0, 0, 0, 0);

    if (this.baoCaoSearch.TuNgay == null) {
      this.baoCaoSearch.TuNgay = this.minDateTuNgay;
    }
    if (this.baoCaoSearch.DenNgay == null) {
      this.baoCaoSearch.DenNgay = new Date();
      this.baoCaoSearch.DenNgay.setHours(23, 59, 59);
    }

    this.getDataPhong();
  }

  ngAfterContentChecked() {
    this.cdref.detectChanges();
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

  getDataPhong() {
    let queryInfo = new LookupQueryInfo();
    this.apiService.post<any>("BaoCaoBangKeThuocVaVatTuPhauThuat/GetPhongPhauThuats",
      queryInfo)
      .subscribe((resultData) => {
        if (resultData !== null && resultData !== undefined) {
          this.phongLookupItemVos = resultData;
        }
      });
  }

  modelChangeTuNgay(event: any) {
    if (event !== undefined && event !== null) {
      this.benhNhanModelChange();
    }
    else {
      this.thongTinBenhNhanLookupItemVo = [];
    }
  }

  modelChangeDenNgay(event: any) {
    if (event !== undefined && event !== null) {
      this.benhNhanModelChange();
    }
    else {
      this.thongTinBenhNhanLookupItemVo = [];
      this.baoCaoSearch.MaYeuCauTiepNhan = null;
    }
  }

  phongSelectionChange(event: any) {
    if (event !== undefined && event !== null) {
      this.baoCaoSearch.PhongBenhVienId = event.KeyId;
      this.benhNhanModelChange();
    }
    else {
      this.thongTinBenhNhanLookupItemVo = [];
      this.baoCaoSearch.MaYeuCauTiepNhan = null;
    }
  }

  benhNhanModelChange() {
    if (this.baoCaoSearch.TuNgay == null || this.baoCaoSearch.DenNgay == null) {
      this.thongTinBenhNhanLookupItemVo = [];
      this.baoCaoSearch.MaYeuCauTiepNhan = null;
      return;
    }
    else if (this.baoCaoSearch.PhongBenhVienId == null) {
      this.thongTinBenhNhanLookupItemVo = [];
      this.baoCaoSearch.MaYeuCauTiepNhan = null;
      return;
    }
    else {
      this.thongTinBenhNhanPhauThuatQueryInfo.PhongBenhVienId = this.baoCaoSearch.PhongBenhVienId;
      this.thongTinBenhNhanPhauThuatQueryInfo.TuNgay = this.baoCaoSearch.TuNgay;
      this.thongTinBenhNhanPhauThuatQueryInfo.DenNgay = this.baoCaoSearch.DenNgay;

      this.apiService.post<any[]>("BaoCaoBangKeThuocVaVatTuPhauThuat/GetBenhNhanPhongPhauThuats", this.thongTinBenhNhanPhauThuatQueryInfo)
        .subscribe((resultData) => {         
          if (resultData.length > 0) {
            this.thongTinBenhNhanLookupItemVo = resultData;
          }
          else{
            this.thongTinBenhNhanLookupItemVo = [];
            this.baoCaoSearch.MaYeuCauTiepNhan = null;
          }
        });
    }


  }

  benhNhanSelectionChange(event: any) {
    if (event != undefined && event != null) {
      this.baoCaoSearch.MaYeuCauTiepNhan = event.MaYeuCauTiepNhan;
    } else {
      this.baoCaoSearch.MaYeuCauTiepNhan = null;
    }
  }

  exportExcel() {
    if (this.baoCaoSearch.TuNgay == null || this.baoCaoSearch.DenNgay == null) {
      this.notificationService.showError("Từ ngày và đến ngày yêu cầu nhập");
      return;
    }

    if (this.baoCaoSearch.PhongBenhVienId === null) {
      this.notificationService.showError("Phòng yêu cầu nhập");
      return;
    }

    if (this.baoCaoSearch.MaYeuCauTiepNhan === null) {
      this.notificationService.showError("Vui lòng chọn bệnh nhân");
      return;
    }

    if (this.authService.hasPermission(this.documentType, SecurityOperation.Process)) {
      this.dialog.open(LoadingComponent, {
        disableClose: true,
        width: '200px',
        height: '90px',
        data: { Title: 'Đang xuất excel...' }
      });
      this.apiService.postExportExcel<any>("BaoCaoBangKeThuocVaVatTuPhauThuat/ExportBangKeThuocVatTuPT", this.baoCaoSearch)
        .subscribe(res => {
          let dateTimeNow = new Date();
          CommonService.downLoadFile(res, "application/vnd.ms-excel", "BangKeThuocVatTuPT" + dateTimeNow.getFullYear() + ".xlsx");
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

    if (this.baoCaoSearch.TuNgay == null || this.baoCaoSearch.DenNgay == null) {
      this.notificationService.showError("Từ ngày và đến ngày yêu cầu nhập");
      this._isLoading = false;
      this._isLoadingTotalPage = false;
      return;
    }

    if (this.baoCaoSearch.PhongBenhVienId === null) {
      this.notificationService.showError("Phòng yêu cầu nhập");
      this._isLoading = false;
      this._isLoadingTotalPage = false;
      return;
    }

    if (this.baoCaoSearch.MaYeuCauTiepNhan === null) {
      this.notificationService.showError("Vui lòng chọn bệnh nhân");
      this._isLoading = false;
      this._isLoadingTotalPage = false;
      return;
    }  
    this.apiService.post<any>("BaoCaoBangKeThuocVaVatTuPhauThuat/GetDataForGridAsync", this.baoCaoSearch).subscribe(resultData => {
      if (resultData !== undefined && resultData != null) {

        this.IsData = true;
        this.danhSachThuocVaVatTuPhauThuat = resultData.Data;
        this.dataSource = {
          data: this.danhSachThuocVaVatTuPhauThuat,
          total: this.danhSachThuocVaVatTuPhauThuat.length
        };

        this.take =this.dataSource.total;     

        this.gridView = process(this.dataSource.data, { group: this.groups });
        this.gridView.total = this.dataSource.total;
        this.pageSize = this.dataSource.total;

        this._isLoading = false;
        this._isLoadingTotalPage = false;
      }
    });
  }

  totalThanhTien(field){
    switch (field) {
      case 'ThanhTien':
        if (this.danhSachThuocVaVatTuPhauThuat != undefined && this.danhSachThuocVaVatTuPhauThuat != null) {
          return this.danhSachThuocVaVatTuPhauThuat.reduce((sum: any, item: { ThanhTien: any; }) => sum + item.ThanhTien, 0);
        }
      
    }
  }
}
