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
import { NhapKhoVatTuSearch } from '../duyet-nhap-kho.model';
import icicdone from '@iconify/icons-ic/twotone-done';
import icClose from '@iconify/icons-ic/twotone-close';
import icEdit from '@iconify/icons-ic/twotone-edit';
import icSearch from '@iconify/icons-ic/twotone-search';
import { FormControl } from '@angular/forms';
import icFileExcel from '@iconify/icons-fa-solid/file-excel';
import icFilterList from '@iconify/icons-ic/twotone-filter-list';
import { GridComponent } from 'src/app/shared/component/grid/grid.component';
import { LoadingComponent } from 'src/app/shared/component/dialogs/loading/loading.component';
import { CommonService } from 'src/app/core/utilities/common.helper';
import { LocalStorageHelper } from 'src/app/core/utilities/local-storage.helper';
import icMoreHoriz from '@iconify/icons-ic/twotone-more-horiz';
import icUndo from "@iconify/icons-ic/undo";
import icPrint from "@iconify/icons-ic/twotone-print";
import { ApiError } from 'src/app/shared/models/api-error.model';
import { PhieuNhapKhoVatTuPopupComponent } from '../../../nhap-xuat/vat-tu/nhap-kho/phieu-nhap-kho-vat-tu-popup/phieu-nhap-kho-vat-tu-popup.component';
import { InPhieuNhapKhoVatTu } from '../../../nhap-xuat/vat-tu/nhap-kho/nhap-kho';
import { XacNhanChonPhieuInVatTuPopupComponent } from '../../../nhap-xuat/vat-tu/nhap-kho/xac-nhan-chon-phieu-in-vat-tu-popup/xac-nhan-chon-phieu-in-vat-tu-popup.component';
@Component({
  selector: 'app-duyet-nhap-kho-list',
  templateUrl: './duyet-nhap-kho-list.component.html',
  styleUrls: ['./duyet-nhap-kho-list.component.scss']
})
export class DuyetVatTuNhapKhoListComponent implements OnInit {
  documentType: DocumentType;
  gridChaColumns: any[] = [];
  gridConColumns: any[] = [];

  holdQuery: any = null;
  query: string = null;
  additionalSearchString: string = null;
  popupLoadingData: any;

  duyetNhapKhoVatTu: NhapKhoVatTuSearch;
  icSearch = icSearch;
  icFileExcel = icFileExcel;
  icFilterList = icFilterList;
  icPrint = icPrint;
  icMoreHoriz = icMoreHoriz;
  icUndo = icUndo;
  searchString: string;
  searchCtrl = new FormControl;
  theFirstSearch: any;
  addtionStringDefault: string = null;

  urlGetDataGridParentAsync = "KeToan/GetDanhSachDuyetKhoVatTuForGridAsync";
  urlGetDataGridChildAsync = "KeToan/GetDanhSachDuyetKhoVatTuChiTietForGridAsync";
  urlGetTotalPageGridChild: string = "KeToan/GetTotalDanhSachDuyetKhoVatTuChiTietForGridAsync";
  inPhieuNhapKhoVatTu: InPhieuNhapKhoVatTu = new InPhieuNhapKhoVatTu();

  @ViewChild(GridComponent, { static: true }) gridChild: GridComponent;
  @ViewChild('ngayNhapTemplate', { static: true }) ngayNhapTemplate: TemplateRef<any>;
  @ViewChild('ngayDuyetTemplate', { static: true }) ngayDuyetTemplate: TemplateRef<any>;
  @ViewChild('vitriTemplate', { static: true }) vitriTemplate: TemplateRef<any>;
  @ViewChild('TinhTrangTemplate', { static: true }) TinhTrangTemplate: TemplateRef<any>;
  @ViewChild('gridCha', { static: false }) gridCha: GridComponent;
  @ViewChild('soChungTuTemplate', { static: true }) soChungTuTemplate: TemplateRef<any>;
  @ViewChild('TinhTrangBHYTTemplate', { static: true }) TinhTrangBHYTTemplate: TemplateRef<any>;
  @ViewChild('nhomGroupHeaderTemplate', { static: true }) nhomGroupHeaderTemplate: TemplateRef<any>;
  @ViewChild('giaNhapTemplate', { static: true }) giaNhapTemplate: TemplateRef<any>;
  @ViewChild('giaBanTemplate', { static: true }) giaBanTemplate: TemplateRef<any>;
  @ViewChild("ngayHoaDonTemplate", { static: true }) ngayHoaDonTemplate: TemplateRef<any>;
  @ViewChild('actionTemplate', { static: true }) actionTemplate: TemplateRef<any>;
  validationErrors: any[] = [];

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
    field: 'LoaiSuDung', aggregates: [
      { field: 'DonGiaNhap', aggregate: 'sum' }
    ]
  }];
  sortDuyetKhoChild: SortDescriptor[] =
    [
      {
        field: "Id",
        dir: "asc"
      }]
  constructor(
    private authService: AuthService, private cd: ChangeDetectorRef,
    private dialog: MatDialog, private elem: ElementRef,
    private notificationService: NotificationService,
    private apiService: ApiService, private router: Router, private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.documentType = DocumentType.DuyetNhapKhoVatTu;
    this.duyetNhapKhoVatTu = new NhapKhoVatTuSearch();
    this.backWithSearch();

    this.gridChaColumns = [
      { Field: "NgayNhap", Title: "Ngày Nhập", Width: 150, Sortable: true, Template: this.ngayNhapTemplate },
      { Field: "TenKho", Title: "Kho Nhập", Width: 150, Sortable: true },
      { Field: "SoChungTu", Title: "Số hóa đơn", MinWidth: 200, Sortable: true, Template: this.soChungTuTemplate },
      { Field: "NgayHoaDon", Title: "Ngày hóa đơn", Width: 150, Sortable: true, Template: this.ngayHoaDonTemplate },
      { Field: "TenNguoiNhap", Title: "Người Nhập", Width: 150, Sortable: true },
      { Field: "TinhTrangNumber", Title: "Tình Trạng", Width: 120, Sortable: true, Template: this.TinhTrangTemplate },
      { Field: "NguoiDuyet", Title: "Người Duyệt", Width: 150, Sortable: true },
      { Field: "NgayDuyet", Title: "Ngày Duyệt", Width: 150, Sortable: true, Template: this.ngayDuyetTemplate },
      { Field: "Action", Title: "", Width: 50, Template: this.actionTemplate }

    ];

    this.gridConColumns = [
      { Field: "LoaiSuDung", Title: "", Width: 100, Hidden: true, TemplateGroupHeader: this.nhomGroupHeaderTemplate },
      { Field: "NhaCungCap", Title: "NCC", Width: 100 },
      { Field: "HopDongThau", Title: "Hợp Đồng Thầu", Width: 100 },
      { Field: "VatTu", Title: "Tên Vật Tư", MinWidth: 100 },
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

    //this.theFirstSearch = JSON.stringify(this.duyetNhapKhoVatTu);
  }

  backWithSearch() {
    let hasLocalSearchString = false;
    if (this.route.snapshot.queryParams.holdQuery != undefined) {
      let holdQuery = this.route.snapshot.queryParams.holdQuery;
      if (holdQuery != null && holdQuery) {
        var additionalSearchString = LocalStorageHelper.getItem<string>("additionalSearchStringDuyetNhapKhoVT");
        if (additionalSearchString != null) {
          this.duyetNhapKhoVatTu = JSON.parse(additionalSearchString);

          if (this.duyetNhapKhoVatTu.RangeNhap.TuNgay != null
            && this.duyetNhapKhoVatTu.RangeNhap.TuNgay != 'null' && this.duyetNhapKhoVatTu.RangeNhap.TuNgay != '') {
            this.duyetNhapKhoVatTu.RangeNhap.startDate = new Date(this.duyetNhapKhoVatTu.RangeNhap.startDate);
          }
          else {
            this.duyetNhapKhoVatTu.RangeNhap.startDate = null;
          }

          if (this.duyetNhapKhoVatTu.RangeNhap.DenNgay != null
            && this.duyetNhapKhoVatTu.RangeNhap.DenNgay != 'null' && this.duyetNhapKhoVatTu.RangeNhap.DenNgay != '') {
            this.duyetNhapKhoVatTu.RangeNhap.endDate = new Date(this.duyetNhapKhoVatTu.RangeNhap.endDate);
          } else {
            this.duyetNhapKhoVatTu.RangeNhap.endDate = null;
          }

          if (this.duyetNhapKhoVatTu.RangeDuyet.TuNgay != null
            && this.duyetNhapKhoVatTu.RangeDuyet.TuNgay != 'null' && this.duyetNhapKhoVatTu.RangeDuyet.TuNgay != '') {
            this.duyetNhapKhoVatTu.RangeDuyet.startDate = new Date(this.duyetNhapKhoVatTu.RangeDuyet.startDate);
          }
          else {
            this.duyetNhapKhoVatTu.RangeDuyet.startDate = null;
          }

          if (this.duyetNhapKhoVatTu.RangeDuyet.DenNgay != null
            && this.duyetNhapKhoVatTu.RangeDuyet.DenNgay != 'null' && this.duyetNhapKhoVatTu.RangeDuyet.DenNgay != '') {
            this.duyetNhapKhoVatTu.RangeDuyet.endDate = new Date(this.duyetNhapKhoVatTu.RangeDuyet.endDate);
          } else {
            this.duyetNhapKhoVatTu.RangeDuyet.endDate = null;
          }

          this.addtionStringDefault = additionalSearchString;
          this.gridChild.additionalSearchString = additionalSearchString;
          hasLocalSearchString = true;

        }
      }
    } else {
      this.addtionStringDefault = JSON.stringify(this.duyetNhapKhoVatTu);
    }
    if (!hasLocalSearchString) {
      LocalStorageHelper.removeItem("additionalSearchStringDuyetNhapKhoVT");
    }
  }

  xemChiTiet(id: number) {
    if (this.authService.hasPermission(this.documentType, SecurityOperation.Update)) {
      this.router.navigate(["/ke-toan/duyet-nhap-kho-vat-tu/chi-tiet/" + id]);
    }
    else {
      this.notificationService.showError(SystemMessage.UnAuthorizedMessage);
    }
  }
  Timkiem() {
    if (this.duyetNhapKhoVatTu.RangeNhap != null && this.duyetNhapKhoVatTu.RangeNhap.startDate != null) {
      this.duyetNhapKhoVatTu.RangeNhap.TuNgay = CommonService.formatDateTime(this.duyetNhapKhoVatTu.RangeNhap.startDate, "mm/dd/yyyy");
    }
    else {
      this.duyetNhapKhoVatTu.RangeNhap.TuNgay = null;
    }
    if (this.duyetNhapKhoVatTu.RangeNhap != null && this.duyetNhapKhoVatTu.RangeNhap.endDate != null) {
      this.duyetNhapKhoVatTu.RangeNhap.DenNgay = CommonService.formatDateTime(this.duyetNhapKhoVatTu.RangeNhap.endDate, "mm/dd/yyyy");
    }
    else {
      this.duyetNhapKhoVatTu.RangeNhap.DenNgay = null;
    }

    if (this.duyetNhapKhoVatTu.RangeDuyet != null && this.duyetNhapKhoVatTu.RangeDuyet.startDate != null) {
      this.duyetNhapKhoVatTu.RangeDuyet.TuNgay = CommonService.formatDateTime(this.duyetNhapKhoVatTu.RangeDuyet.startDate, "mm/dd/yyyy");
    }
    else {
      this.duyetNhapKhoVatTu.RangeDuyet.TuNgay = null;
    }
    if (this.duyetNhapKhoVatTu.RangeDuyet != null && this.duyetNhapKhoVatTu.RangeDuyet.endDate != null) {
      this.duyetNhapKhoVatTu.RangeDuyet.DenNgay = CommonService.formatDateTime(this.duyetNhapKhoVatTu.RangeDuyet.endDate, "mm/dd/yyyy");
    }
    else {
      this.duyetNhapKhoVatTu.RangeDuyet.DenNgay = null;
    }
    var queryString = JSON.stringify(this.duyetNhapKhoVatTu);
    this.gridChild._additionalSearchString = queryString;
    LocalStorageHelper.setItem("additionalSearchStringDuyetNhapKhoVT", queryString);
    this.gridChild.search();
  }

  trangThaiCheckBox(event: any, tinhTrang: any) {
    if (tinhTrang == "choduyet") {
      this.duyetNhapKhoVatTu.DangChoDuyet = event;
    }
    if (tinhTrang == "daduyet") {
      this.duyetNhapKhoVatTu.DaDuyet = event;
    }
    if (tinhTrang == "tuchoiduyet") {
      this.duyetNhapKhoVatTu.TuChoiDuyet = event;
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
      self.apiService.postExportExcel<string>('KeToan/ExportDuyetVatTu',
        self.gridCha._gridQueryInfo).subscribe(
          resultData => {
            self.closePopupLoadingData();
            const dateTimeNow = new Date();
            CommonService.downLoadFile(resultData, 'application/vnd.ms-excel',
              'DuyetNhapKhoVatTu' + dateTimeNow.getFullYear() + '.xlsx');
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
    // var self = this;
    // self.loadingPage();
    // self.inPhieuNhapKhoVatTu.HostingName = window.location.protocol + "//" + window.location.host;
    // self.inPhieuNhapKhoVatTu.YeuCauNhapKhoVatTuId = id;
    // self.inPhieuNhapKhoVatTu.CoTheoBenhVien = true;
    // self.inPhieuNhapKhoVatTu.CoTheoThongTu = false;
    // self.apiService.post<any>("NhapKhoVatTu/InPhieuYeuCauNhapKhoVatTu", self.inPhieuNhapKhoVatTu).subscribe(
    //   resData => {
    //     if (resData != undefined && resData != null) {
    //       self.closePopupLoadingData();
    //       self.dialog.open(XacNhanChonPhieuInVatTuPopupComponent, {
    //         disableClose: false,
    //         width: '1200px',
    //         data: resData,
    //       }).afterClosed().subscribe(() => {
    //         self.closePopupLoadingDatas();
    //       });
    //     }
    //   },
    //   (err: ApiError) => {
    //     self.validationErrors = err.ValidationErrors;
    //     if (err.Message != "Validation Failed") {
    //       self.notificationService.showError(err.Message);
    //     }
    //     self.closePopupLoadingDatas();
    //   }
    // );
    var self = this;
    self.loadingPage();
    self.inPhieuNhapKhoVatTu.YeuCauNhapKhoVatTuId = id;
    this.inPhieuNhapKhoVatTu.HostingName = window.location.protocol + "//" + window.location.host;
    self.inPhieuNhapKhoVatTu.CoTheoBenhVien = true;
    self.inPhieuNhapKhoVatTu.CoTheoThongTu = true;
    self.dialog.open(XacNhanChonPhieuInVatTuPopupComponent, {
      disableClose: false,
      width: "400px",
      data: self.inPhieuNhapKhoVatTu,
    }).afterClosed().subscribe(() => {
      this.router.navigateByUrl('/ke-toan/duyet-nhap-kho-vat-tu?holdQuery=true');
    });
  }

  duyetLai(id: number) {
    var self = this;
    self.loadingPage();
    self.apiService.post<any>("KeToan/HuyDuyetNhapKhoVatTu?yeuCauNhapKhoVatTuId=" + id).subscribe(
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
}
