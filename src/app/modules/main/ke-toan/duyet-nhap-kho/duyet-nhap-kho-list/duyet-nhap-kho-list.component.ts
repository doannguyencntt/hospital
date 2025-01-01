import { Component, OnInit, ViewChild, TemplateRef, ElementRef, ChangeDetectorRef } from '@angular/core';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import { GroupDescriptor, SortDescriptor } from '@progress/kendo-data-query';
import { AuthService } from 'src/app/core/services/auth.service';
import { MatDialog } from '@angular/material';
import { NotificationService } from 'src/app/core/services/notification.service';
import { ApiService } from 'src/app/core/services/api.service';
import { Router, ActivatedRoute } from '@angular/router';
import { SecurityOperation } from 'src/app/shared/enum/security-operation.enum';
import { SystemMessage } from 'src/app/shared/configdata/system-message';
import { NhapKhoDuocPhamSearch } from '../duyet-nhap-kho.model';
import icSearch from '@iconify/icons-ic/twotone-search';
import { FormControl } from '@angular/forms';
import icFileExcel from '@iconify/icons-fa-solid/file-excel';
import icFilterList from '@iconify/icons-ic/twotone-filter-list';
import { GridComponent } from 'src/app/shared/component/grid/grid.component';
import { LoadingComponent } from 'src/app/shared/component/dialogs/loading/loading.component';
import { CommonService } from 'src/app/core/utilities/common.helper';
import { LocalStorageHelper } from 'src/app/core/utilities/local-storage.helper';
import { Location } from '@angular/common';
import { PhieuNhapKhoDuocPhamPopupComponent } from '../../../nhap-xuat/duoc-pham/nhap-kho/phieu-nhap-kho-duoc-pham-popup/phieu-nhap-kho-duoc-pham-popup.component';
import { ApiError } from 'src/app/shared/models/api-error.model';
import icMoreHoriz from '@iconify/icons-ic/twotone-more-horiz';
import icUndo from "@iconify/icons-ic/undo";
import icPrint from "@iconify/icons-ic/twotone-print";


@Component({
  selector: 'app-duyet-nhap-kho-list',
  templateUrl: './duyet-nhap-kho-list.component.html',
  styleUrls: ['./duyet-nhap-kho-list.component.scss']
})
export class DuyetNhapKhoListComponent implements OnInit {
  documentType: DocumentType;
  gridChaColumns: any[] = [];
  gridConColumns: any[] = [];

  duyetNhapKhoDuocPham: NhapKhoDuocPhamSearch;
  icSearch = icSearch;
  icFileExcel = icFileExcel;
  icFilterList = icFilterList;
  icPrint = icPrint;
  icMoreHoriz = icMoreHoriz;
  icUndo = icUndo;

  searchString: string;
  searchCtrl = new FormControl;
  popupLoadingData: any;
  urlGetDataGridParentAsync = "KeToan/GetDanhSachDuyetKhoDuocPhamForGridAsync";
  urlGetDataGridChildAsync = "KeToan/GetDanhSachDuyetKhoDuocPhamChiTietForGridAsync";
  urlGetTotalPageGridChild: string = "KeToan/GetTotalDanhSachDuyetKhoDuocPhamChiTietForGridAsync";

  holdQuery: any = null;
  query: string = null;
  additionalSearchString: string = null;
  baseRoute: string = "/ke-toan/duyet-nhap-kho";
  addtionStringDefault: string = null;

  @ViewChild(GridComponent, { static: true }) gridChild: GridComponent;
  @ViewChild('ngayNhapTemplate', { static: true }) ngayNhapTemplate: TemplateRef<any>;
  @ViewChild('ngayDuyetTemplate', { static: true }) ngayDuyetTemplate: TemplateRef<any>;
  @ViewChild('vitriTemplate', { static: true }) vitriTemplate: TemplateRef<any>;
  @ViewChild('TinhTrangTemplate', { static: true }) TinhTrangTemplate: TemplateRef<any>;
  @ViewChild('TinhTrangBHYTTemplate', { static: true }) TinhTrangBHYTTemplate: TemplateRef<any>;
  @ViewChild('gridCha', { static: false }) gridCha: GridComponent;
  @ViewChild('soChungTuTemplate', { static: true }) soChungTuTemplate: TemplateRef<any>;
  @ViewChild('nhomGroupHeaderTemplate', { static: true }) nhomGroupHeaderTemplate: TemplateRef<any>;
  @ViewChild('giaNhapTemplate', { static: true }) giaNhapTemplate: TemplateRef<any>;
  @ViewChild('giaBanTemplate', { static: true }) giaBanTemplate: TemplateRef<any>;
  @ViewChild("ngayHoaDonTemplate", { static: true }) ngayHoaDonTemplate: TemplateRef<any>;
  @ViewChild('actionTemplate', { static: true }) actionTemplate: TemplateRef<any>;
  validationErrors: any[] = [];

  theFirstSearch: any;
  sortNhapKho: SortDescriptor[] =
    [{
      field: "NgayNhap",
      dir: "desc"
    }]

  sortNhapKhoChild: SortDescriptor[] =
    [
      {
        field: "Id",
        dir: "asc"
      }]

  public groups: GroupDescriptor[] = [{
    field: 'Nhom', aggregates: [
      { field: 'DonGiaNhap', aggregate: 'sum' }
    ]
  }];

  constructor(
    private authService: AuthService, private cd: ChangeDetectorRef,
    private dialog: MatDialog, private elem: ElementRef,
    private notificationService: NotificationService,
    private location: Location,
    private apiService: ApiService, private router: Router, private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.documentType = DocumentType.DuyetNhapKhoDuocPham;
    this.duyetNhapKhoDuocPham = new NhapKhoDuocPhamSearch();
    this.backWithSearch();

    this.gridChaColumns = [
      { Field: "NgayNhap", Title: "Ngày Nhập", Width: 150, Sortable: true, Template: this.ngayNhapTemplate },
      { Field: "TenKho", Title: "Kho Nhập", Width: 150, Sortable: true },
      { Field: "SoChungTu", Title: "Số hóa đơn", Width: 200, Sortable: true, Template: this.soChungTuTemplate },
      { Field: "NgayHoaDon", Title: "Ngày hóa đơn", Width: 150, Sortable: true, Template: this.ngayHoaDonTemplate },
      { Field: "TenNguoiNhap", Title: "Người Nhập", Width: 150, Sortable: true },
      // { Field: "NgayNhapDisplay", Title: "Ngày Nhập", Width: 150, Sortable: true },
      { Field: "TinhTrangNumber", Title: "Tình Trạng", Width: 120, Sortable: false, Template: this.TinhTrangTemplate },
      { Field: "NguoiDuyet", Title: "Người Duyệt", Width: 150, Sortable: false },
      { Field: "NgayDuyet", Title: "Ngày Duyệt", Width: 150, Sortable: true, Template: this.ngayDuyetTemplate },
      { Field: "Action", Title: "", Width: 50, Template: this.actionTemplate }

    ];

    this.gridConColumns = [
      { Field: "Nhom", Title: "", Width: 100, Hidden: true, TemplateGroupHeader: this.nhomGroupHeaderTemplate },
      { Field: "NhaCungCap", Title: "NCC", Width: 100 },
      { Field: "HopDongThau", Title: "Hợp Đồng Thầu", Width: 100 },
      { Field: "DuocPham", Title: "Tên Dược Phẩm", Width: 100 },
      { Field: "LoaiBHYT", Title: "Loại", Width: 140, Template: this.TinhTrangBHYTTemplate },
      { Field: "SoLo", Title: "Số Lô", Width: 100 },
      { Field: "HanSuDung", Title: "Hạn Sử Dụng", Width: 140 },
      { Field: "MaVach", Title: "Mã Vạch", Width: 100 },
      { Field: "SLConLaiHD", Title: "Số Lượng Còn Lại HĐ", Width: 140 },
      { Field: "SoLuongNhap", Title: "Số Lượng Nhập", Width: 100 },
      { Field: "DonGiaNhap", Title: "Đơn Giá Nhập", Width: 100, Template: this.giaNhapTemplate },
      { Field: "VAT", Title: "VAT(%)", Width: 50 },
      { Field: "TiLeBHYTThanhToan", Title: "TL BH THANH TOÁN(%)", Width: 120 },
      { Field: "GiaBan", Title: "Giá bán", Width: 100, Template: this.giaBanTemplate },
    ];
    //this.theFirstSearch = JSON.stringify(this.duyetNhapKhoDuocPham);
  }

  backWithSearch() {
    let hasLocalSearchString = false;
    if (this.route.snapshot.queryParams.holdQuery != undefined) {
      let holdQuery = this.route.snapshot.queryParams.holdQuery;
      if (holdQuery != null && holdQuery) {
        var additionalSearchString = LocalStorageHelper.getItem<string>("additionalSearchStringDuyetNhapKhoDP");
        if (additionalSearchString != null) {
          this.duyetNhapKhoDuocPham = JSON.parse(additionalSearchString);

          if (this.duyetNhapKhoDuocPham.RangeNhap.TuNgay != null
            && this.duyetNhapKhoDuocPham.RangeNhap.TuNgay != 'null' && this.duyetNhapKhoDuocPham.RangeNhap.TuNgay != '') {
            this.duyetNhapKhoDuocPham.RangeNhap.startDate = new Date(this.duyetNhapKhoDuocPham.RangeNhap.startDate);
          }
          else {
            this.duyetNhapKhoDuocPham.RangeNhap.startDate = null;
          }

          if (this.duyetNhapKhoDuocPham.RangeNhap.DenNgay != null
            && this.duyetNhapKhoDuocPham.RangeNhap.DenNgay != 'null' && this.duyetNhapKhoDuocPham.RangeNhap.DenNgay != '') {
            this.duyetNhapKhoDuocPham.RangeNhap.endDate = new Date(this.duyetNhapKhoDuocPham.RangeNhap.endDate);
          } else {
            this.duyetNhapKhoDuocPham.RangeNhap.endDate = null;
          }

          if (this.duyetNhapKhoDuocPham.RangeDuyet.TuNgay != null
            && this.duyetNhapKhoDuocPham.RangeDuyet.TuNgay != 'null' && this.duyetNhapKhoDuocPham.RangeDuyet.TuNgay != '') {
            this.duyetNhapKhoDuocPham.RangeDuyet.startDate = new Date(this.duyetNhapKhoDuocPham.RangeDuyet.startDate);
          }
          else {
            this.duyetNhapKhoDuocPham.RangeDuyet.startDate = null;
          }

          if (this.duyetNhapKhoDuocPham.RangeDuyet.DenNgay != null
            && this.duyetNhapKhoDuocPham.RangeDuyet.DenNgay != 'null' && this.duyetNhapKhoDuocPham.RangeDuyet.DenNgay != '') {
            this.duyetNhapKhoDuocPham.RangeDuyet.endDate = new Date(this.duyetNhapKhoDuocPham.RangeDuyet.endDate);
          } else {
            this.duyetNhapKhoDuocPham.RangeDuyet.endDate = null;
          }

          this.addtionStringDefault = additionalSearchString;
          this.gridChild.additionalSearchString = additionalSearchString;
          hasLocalSearchString = true;

        }
      }
    } else {
      this.addtionStringDefault = JSON.stringify(this.duyetNhapKhoDuocPham);
    }
    if (!hasLocalSearchString) {
      LocalStorageHelper.removeItem("additionalSearchStringDuyetNhapKhoDP");
    }
  }

  xemChiTiet(id: number) {
    if (this.authService.hasPermission(this.documentType, SecurityOperation.Update)) {
      this.router.navigate(["/ke-toan/duyet-nhap-kho/chi-tiet/" + id]);
    }
    else {
      this.notificationService.showError(SystemMessage.UnAuthorizedMessage);
    }
  }
  sortDuyetKhoChild: SortDescriptor[] = [{ field: "Id", dir: "asc" }]

  blur(ev: any) {
    this.Timkiem();
  }

  Timkiem() {
    this.location.replaceState(this.baseRoute + '?holdQuery=true');

    if (this.duyetNhapKhoDuocPham.RangeNhap != null && this.duyetNhapKhoDuocPham.RangeNhap.startDate != null) {
      this.duyetNhapKhoDuocPham.RangeNhap.TuNgay = CommonService.formatDateTime(this.duyetNhapKhoDuocPham.RangeNhap.startDate, "mm/dd/yyyy");
    }
    else {
      this.duyetNhapKhoDuocPham.RangeNhap.TuNgay = null;
    }
    if (this.duyetNhapKhoDuocPham.RangeNhap != null && this.duyetNhapKhoDuocPham.RangeNhap.endDate != null) {
      this.duyetNhapKhoDuocPham.RangeNhap.DenNgay = CommonService.formatDateTime(this.duyetNhapKhoDuocPham.RangeNhap.endDate, "mm/dd/yyyy");
    }
    else {
      this.duyetNhapKhoDuocPham.RangeNhap.DenNgay = null;
    }

    if (this.duyetNhapKhoDuocPham.RangeDuyet != null && this.duyetNhapKhoDuocPham.RangeDuyet.startDate != null) {
      this.duyetNhapKhoDuocPham.RangeDuyet.TuNgay = CommonService.formatDateTime(this.duyetNhapKhoDuocPham.RangeDuyet.startDate, "mm/dd/yyyy");
    }
    else {
      this.duyetNhapKhoDuocPham.RangeDuyet.TuNgay = null;
    }
    if (this.duyetNhapKhoDuocPham.RangeDuyet != null && this.duyetNhapKhoDuocPham.RangeDuyet.endDate != null) {
      this.duyetNhapKhoDuocPham.RangeDuyet.DenNgay = CommonService.formatDateTime(this.duyetNhapKhoDuocPham.RangeDuyet.endDate, "mm/dd/yyyy");
    }
    else {
      this.duyetNhapKhoDuocPham.RangeDuyet.DenNgay = null;
    }

    var queryString = JSON.stringify(this.duyetNhapKhoDuocPham);
    this.gridChild._additionalSearchString = queryString;
    LocalStorageHelper.setItem("additionalSearchStringDuyetNhapKhoDP", queryString);
    this.gridChild.search();
  }

  trangThaiCheckBox(event: any, tinhTrang: any) {
    if (tinhTrang == "choduyet") {
      this.duyetNhapKhoDuocPham.DangChoDuyet = event;
    }
    if (tinhTrang == "daduyet") {
      this.duyetNhapKhoDuocPham.DaDuyet = event;
    }
    if (tinhTrang == "tuchoiduyet") {
      this.duyetNhapKhoDuocPham.TuChoiDuyet = event;
    }
    this.Timkiem();
  }

  onKey(event: any) {
    if (event.key == "Enter") {
      this.Timkiem();
    }
  }

  clearSearch(event: any) {
    if (event == "" || event == null) {
      this.gridChild.searchString = "";
      this.Timkiem();
    }
  }

  //End fillter checkbox 
  onKeyNgayNhap(event: any) {
    if (event.key == "Enter") {
      this.Timkiem();
    }
  }

  changeNgayNhapRange(ev: any) {
    this.Timkiem();
  }

  onKeyNgayDuyet(event: any) {
    if (event.key == "Enter") {
      this.Timkiem();
    }
  }

  changeNgayDuyetRange(ev: any) {
    this.Timkiem();
  }

  exportExcel() {
    const self = this;
    self.showPopupLoadingData();
    if (self.authService.hasPermission(self.documentType, SecurityOperation.Process)) {
      self.apiService.postExportExcel<string>('KeToan/ExportDuyetDuocPham',
        self.gridCha._gridQueryInfo).subscribe(
          resultData => {
            self.closePopupLoadingData();
            const dateTimeNow = new Date();
            CommonService.downLoadFile(resultData, 'application/vnd.ms-excel',
              'DuyetNhapKhoDuocPham' + dateTimeNow.getFullYear() + '.xlsx');
          },
          (err: any) => {
            self.notificationService.showError(err.Message);
          });
    } else {
      self.notificationService.showError(SystemMessage.UnAuthorizedMessage);
    }
  }

  showPopupLoadingData() {
    this.dialog.open(LoadingComponent, {
      disableClose: true,
      width: '200px',
      height: '90px',
      data: { Title: 'Đang xuất excel...' }
    });
  }

  closePopupLoadingData() {
    this.dialog.closeAll();
  }

  duyetLai(id: number) {
    var self = this;
    self.loadingPage();
    self.apiService.post<any>("KeToan/HuyDuyetNhapKhoDuocPham?yeuCauNhapKhoDuocPhamId=" + id).subscribe(
      () => {
        self.closePopupLoadingDatas();
        self.notificationService.showSuccess(CommonService.format(SystemMessage.ActionSuccessfully, ["Duyệt lại"]));
        self.Timkiem();
      },
      (err: ApiError) => {
        self.validationErrors = err.ValidationErrors;
        if (err.Message != "Validation Failed") {
          self.notificationService.showError(err.Message);
        }
        self.closePopupLoadingDatas();
      }
    );
  }

  loadingPage() {
    this.popupLoadingData = this.dialog.open(LoadingComponent, {
      disableClose: true,
      width: "200px",
      height: "90px",
      data: { Title: "Đang tải dữ liệu..." },
    });
  }

  closePopupLoadingDatas() {
    if (this.popupLoadingData != undefined && this.popupLoadingData != null) {
      this.popupLoadingData.close();
    }
  }

  inPhieu(id: number) {
    var self = this;
    self.loadingPage();
    self.apiService.post<any>("NhapKhoDuocPham/InPhieuYeuCauNhapKhoDuocPham?yeuCauNhapKhoDuocPhamId=" + id).subscribe(
      resData => {
        if (resData != undefined && resData != null) {
          self.closePopupLoadingData();
          self.dialog.open(PhieuNhapKhoDuocPhamPopupComponent, {
            disableClose: false,
            width: '1200px',
            data: resData,
          }).afterClosed().subscribe(() => {
            self.closePopupLoadingDatas();
          });
        }
      },
      (err: ApiError) => {
        self.validationErrors = err.ValidationErrors;
        if (err.Message != "Validation Failed") {
          self.notificationService.showError(err.Message);
        }
        self.closePopupLoadingDatas();
      }
    );
  }
}
