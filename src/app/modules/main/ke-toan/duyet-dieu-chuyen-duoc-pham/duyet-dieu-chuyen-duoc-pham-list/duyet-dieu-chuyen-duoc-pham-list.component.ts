import { Component, OnInit, ViewChild, TemplateRef } from '@angular/core';
import icDelete from '@iconify/icons-ic/twotone-delete';
import icEdit from '@iconify/icons-ic/twotone-edit';
import icMoreHoriz from '@iconify/icons-ic/twotone-more-horiz';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import { ApiService } from 'src/app/core/services/api.service';
import { ActivatedRoute, Router } from '@angular/router';
import { NotificationService } from 'src/app/core/services/notification.service';
import { SystemMessage, XuatKhoMessage } from 'src/app/shared/configdata/system-message';
import { GridComponent } from 'src/app/shared/component/grid/grid.component';
import { CommonService } from 'src/app/core/utilities/common.helper';
import { AuthService } from 'src/app/core/services/auth.service';
import { MatDialog } from '@angular/material';
import { ConfirmComponent } from 'src/app/shared/component/dialogs/confirm/confirm.component';
import { SecurityOperation } from 'src/app/shared/enum/security-operation.enum';
import { GroupDescriptor, SortDescriptor } from '@progress/kendo-data-query';

import icSearch from '@iconify/icons-ic/twotone-search';
import icFileExcel from '@iconify/icons-fa-solid/file-excel';
import icAdd from '@iconify/icons-ic/twotone-add';
import icFilterList from '@iconify/icons-ic/twotone-filter-list';
import icPrint from "@iconify/icons-ic/twotone-print";
import { FormControl } from '@angular/forms';
import { LocalStorageHelper } from 'src/app/core/utilities/local-storage.helper';
import { Location } from '@angular/common';
import { ApiError } from 'src/app/shared/models/api-error.model';
import { LoadingComponent } from 'src/app/shared/component/dialogs/loading/loading.component';
import { DieuChuyenKhoNoiBoDuocPhamGrid, YeuCauDieuChuyenDuocPhamPhieuIn } from '../../../nhap-xuat/duoc-pham/dieu-chuyen-kho-noi-bo-duoc-pham/dieu-chuyen-kho-noi-bo-duoc-pham.model';
import { DieuChuyenKhoNoiBoDuocPhamPopupComponent } from '../../../nhap-xuat/duoc-pham/dieu-chuyen-kho-noi-bo-duoc-pham/dieu-chuyen-kho-noi-bo-duoc-pham-popup/dieu-chuyen-kho-noi-bo-duoc-pham-popup.component';

@Component({
  selector: 'app-duyet-dieu-chuyen-duoc-pham-list',
  templateUrl: './duyet-dieu-chuyen-duoc-pham-list.component.html',
  styleUrls: ['./duyet-dieu-chuyen-duoc-pham-list.component.scss']
})
export class DuyetDieuChuyenDuocPhamListComponent implements OnInit {
  sort: SortDescriptor[] = [{
    field: 'NgayYeuCau',
    dir: 'desc'
  }];

  sortChild: SortDescriptor[] = [{
    field: 'Ten',
    dir: 'desc'
  }];
  validationErrors: any[] = [];

  icDelete = icDelete;
  icEdit = icEdit;
  icMoreHoriz = icMoreHoriz;
  addtionStringDefault: string = null;

  icSearch = icSearch;
  icFileExcel = icFileExcel;
  icAdd = icAdd;
  icFilterList = icFilterList;
  icPrint = icPrint;
  searchCtrl = new FormControl;
  baseRoute: string = "/ke-toan/duyet-dieu-chuyen-duoc-pham";
  popupLoadingData: any;
  yeuCauDieuChuyenDuocPhamPhieuIn: YeuCauDieuChuyenDuocPhamPhieuIn = new YeuCauDieuChuyenDuocPhamPhieuIn();

  documentType: DocumentType = DocumentType.DanhSachDuyetDieuChuyenNoiBoDuocPham;
  dieuChuyenKhoNoiBoDuocPham: DieuChuyenKhoNoiBoDuocPhamGrid = new DieuChuyenKhoNoiBoDuocPhamGrid();
  gridColumns: any[] = [];
  gridDuyetThuocChildColumns: any[] = [];

  urlGetDataGridChild: string = "XuatKhoDieuChuyenKhoNoiBoDuocPham/GetDataForGridChildAsync";
  urlGetTotalPageGridChild: string = "XuatKhoDieuChuyenKhoNoiBoDuocPham/GetTotalPageForGridChildAsync";
  holdQuery: any = null;
  additionalSearchString: string = null;
  groups: GroupDescriptor[] = [{ field: 'Nhom' }];
  @ViewChild('soPhieuTemplate', { static: true }) soPhieuTemplate: TemplateRef<any>;
  @ViewChild('khoXuatTemplate', { static: true }) khoXuatTemplate: TemplateRef<any>;
  @ViewChild('khoNhapTemplate', { static: true }) khoNhapTemplate: TemplateRef<any>;

  @ViewChild("ngayYeuCauTemplate", { static: true }) ngayYeuCauTemplate: TemplateRef<any>;
  @ViewChild('tinhTrangTemplate', { static: true }) tinhTrangTemplate: TemplateRef<any>;
  @ViewChild("ngayDuyetTemplate", { static: true }) ngayDuyetTemplate: TemplateRef<any>;
  @ViewChild('actionTemplate', { static: true }) actionTemplate: TemplateRef<any>;
  @ViewChild('nhomGroupHeaderTemplate', { static: true }) nhomGroupHeaderTemplate: TemplateRef<any>;
  @ViewChild("hsdTemplate", { static: true }) hsdTemplate: TemplateRef<any>;
  @ViewChild("slDieuChuyenTemplate", { static: true }) slDieuChuyenTemplate: TemplateRef<any>;

  @ViewChild(GridComponent, { static: true }) gridDuyetThuocChild: GridComponent;

  constructor(
    private apiService: ApiService,
    private authService: AuthService,
    private dialog: MatDialog,
    private location: Location,
    private route: ActivatedRoute,
    private router: Router,
    private notificationService: NotificationService

  ) { }


  ngOnInit() {
    this.backWithSearch();
    this.gridColumns = [
      { Field: "SoPhieu", Title: "Số Phiếu", Width: 100, Sortable: true, Template: this.soPhieuTemplate },
      { Field: "TenKhoXuat", Title: "Kho Xuất", Width: 170, Sortable: true, Template: this.khoXuatTemplate },
      { Field: "TenKhoNhap", Title: "Kho Nhập", Width: 170, Sortable: true, Template: this.khoNhapTemplate },
      { Field: "TenNhanVienYeuCau", Title: "Người yêu cầu", Width: 150, Sortable: true },
      { Field: "NgayYeuCau", Title: "Ngày yêu cầu", Width: 150, Sortable: true, Template: this.ngayYeuCauTemplate },
      { Field: "TinhTrang", Title: "Tình trạng", Width: 100, Sortable: true, Template: this.tinhTrangTemplate },
      { Field: "TenNhanVienDuyet", Title: "Người duyệt", Width: 150, Sortable: true },
      { Field: "NgayDuyet", Title: "Ngày duyệt", Width: 150, Sortable: true, Template: this.ngayDuyetTemplate },
      { Field: "Action", Title: "", Width: 50, Template: this.actionTemplate },
    ];

    this.gridDuyetThuocChildColumns = [
      { Field: "Nhom", Title: "Nhóm", Width: 50, Sortable: false, Hidden: true, TemplateGroupHeader: this.nhomGroupHeaderTemplate },
      { Field: "Ten", Title: "Dược phẩm", Width: 120, Sortable: true },
      { Field: "HoatChat", Title: "Hoạt chất", Width: 150, Sortable: false },
      { Field: "DVT", Title: "ĐVT", Width: 150, Sortable: false },
      { Field: "SoLo", Title: "Số lô", Width: 150, Sortable: false },
      { Field: "HanSuDung", Title: "Hạn sử dụng", Width: 150, Sortable: false, Template: this.hsdTemplate },
      { Field: "SoLuongDieuChuyen", Title: "Số lượng điều chuyển", Width: 150, Sortable: false, Template: this.slDieuChuyenTemplate },
    ];
  }

  backWithSearch() {
    let hasLocalSearchString = false;
    if (this.route.snapshot.queryParams.holdQuery != undefined) {
      let holdQuery = this.route.snapshot.queryParams.holdQuery;
      if (holdQuery != null && holdQuery) {
        var additionalSearchString = LocalStorageHelper.getItem<string>("additionalSearchStringDuyetDieuChuyenKhoNoiBoDuocPham");
        if (additionalSearchString != null) {
          this.dieuChuyenKhoNoiBoDuocPham = JSON.parse(additionalSearchString);

          if (this.dieuChuyenKhoNoiBoDuocPham.RangeFromDate.TuNgay != null
            && this.dieuChuyenKhoNoiBoDuocPham.RangeFromDate.TuNgay != 'null' && this.dieuChuyenKhoNoiBoDuocPham.RangeFromDate.TuNgay != '') {
            this.dieuChuyenKhoNoiBoDuocPham.RangeFromDate.startDate = new Date(this.dieuChuyenKhoNoiBoDuocPham.RangeFromDate.startDate);
          }
          else {
            this.dieuChuyenKhoNoiBoDuocPham.RangeFromDate.startDate = null;
          }

          if (this.dieuChuyenKhoNoiBoDuocPham.RangeFromDate.DenNgay != null
            && this.dieuChuyenKhoNoiBoDuocPham.RangeFromDate.DenNgay != 'null' && this.dieuChuyenKhoNoiBoDuocPham.RangeFromDate.DenNgay != '') {
            this.dieuChuyenKhoNoiBoDuocPham.RangeFromDate.endDate = new Date(this.dieuChuyenKhoNoiBoDuocPham.RangeFromDate.endDate);
          } else {
            this.dieuChuyenKhoNoiBoDuocPham.RangeFromDate.endDate = null;
          }

          this.addtionStringDefault = additionalSearchString;
          this.gridDuyetThuocChild.additionalSearchString = additionalSearchString;
          hasLocalSearchString = true;

        }
      }
    }
    if (!hasLocalSearchString) {
      LocalStorageHelper.removeItem("additionalSearchStringDuyetDieuChuyenKhoNoiBoDuocPham");
    }
  }


  onKey(event: any) {
    if (event.key == "Enter") {
      this.timKiem();
    }
  }

  trangThaiCheckBox(event: any, tinhTrang: any) {
    if (tinhTrang == "choduyet") {
      this.dieuChuyenKhoNoiBoDuocPham.ChoDuyet = event;
    }
    if (tinhTrang == "daduyet") {
      this.dieuChuyenKhoNoiBoDuocPham.DaDuyet = event;
    }
    if (tinhTrang == "tuchoiduyet") {
      this.dieuChuyenKhoNoiBoDuocPham.TuChoiDuyet = event;
    }
    this.timKiem();
  }

  changeNgayBatDauRange() {
    this.timKiem();
  }

  blur() {
    this.timKiem();
  }

  searchChanges(event: any) {
    var self = this;
    if (event != undefined && (event == null || event == "")) {
      self.gridDuyetThuocChild.searchString = null;
      self.timKiem();
    }
  }

  timKiem() {
    this.location.replaceState(this.baseRoute + '?holdQuery=true');

    if (this.dieuChuyenKhoNoiBoDuocPham.RangeFromDate != null && this.dieuChuyenKhoNoiBoDuocPham.RangeFromDate.startDate != null) {
      this.dieuChuyenKhoNoiBoDuocPham.RangeFromDate.TuNgay = CommonService.formatDateTime(this.dieuChuyenKhoNoiBoDuocPham.RangeFromDate.startDate, "mm/dd/yyyy");
    }
    else {
      this.dieuChuyenKhoNoiBoDuocPham.RangeFromDate.TuNgay = null;
    }
    if (this.dieuChuyenKhoNoiBoDuocPham.RangeFromDate != null && this.dieuChuyenKhoNoiBoDuocPham.RangeFromDate.endDate != null) {
      this.dieuChuyenKhoNoiBoDuocPham.RangeFromDate.DenNgay = CommonService.formatDateTime(this.dieuChuyenKhoNoiBoDuocPham.RangeFromDate.endDate, "mm/dd/yyyy");
    }
    else {
      this.dieuChuyenKhoNoiBoDuocPham.RangeFromDate.DenNgay = null;
    }

    var queryString = JSON.stringify(this.dieuChuyenKhoNoiBoDuocPham);
    this.gridDuyetThuocChild._additionalSearchString = queryString;
    LocalStorageHelper.setItem("additionalSearchStringDuyetDieuChuyenKhoNoiBoDuocPham", queryString);
    this.gridDuyetThuocChild.search();
  }


  chinhSua(id: number) {
    if (this.authService.hasPermission(this.documentType, SecurityOperation.Update)) {
      this.router.navigate(["/ke-toan/duyet-dieu-chuyen-duoc-pham/chi-tiet/" + id]);
    } else {
      this.notificationService.showError(SystemMessage.UnAuthorizedMessage);
    }
  }


  xuatExcel() {
    this.dialog.open(LoadingComponent, {
      disableClose: true,
      width: '200px',
      height: '90px',
      data: { Title: 'Đang xuất excel...' }
    });
    if (this.authService.hasPermission(this.documentType, SecurityOperation.Process)) {
      this.apiService.postExportExcel<string>("XuatKhoDieuChuyenKhoNoiBoDuocPham/ExportDuyetYeuCauDieuChuyenThuoc", this.gridDuyetThuocChild._gridQueryInfo).subscribe(res => {
        let dateTimeNow = new Date();
        CommonService.downLoadFile(res, "application/vnd.ms-excel", "DuyetDieuChuyenKhoNoiBo" + dateTimeNow.getFullYear() + ".xlsx");
        this.dialog.closeAll();
      }, err => {
        this.notificationService.showError(err.Message);
        this.dialog.closeAll();
      })
    } else {
      this.notificationService.showError(SystemMessage.UnAuthorizedMessage);
    }
  }

  loadingPage() {
    this.popupLoadingData = this.dialog.open(LoadingComponent, {
      disableClose: true,
      width: "200px",
      height: "90px",
      data: { Title: "Đang tải dữ liệu..." },
    });
  }


  closePopupLoadingData() {
    if (this.popupLoadingData != undefined && this.popupLoadingData != null) {
      this.popupLoadingData.close();
    }
  }

  inPhieu(id: number) {
    var self = this;
    self.yeuCauDieuChuyenDuocPhamPhieuIn.HostingName = window.location.protocol + "//" + window.location.host;
    self.yeuCauDieuChuyenDuocPhamPhieuIn.YeuCauDieuChuyenDuocPhamId = id;
    self.loadingPage();
    self.apiService.post<any>("XuatKhoDieuChuyenKhoNoiBoDuocPham/InPhieuXuatKhoDuocPhamDieuChuyen", self.yeuCauDieuChuyenDuocPhamPhieuIn).subscribe(
      resData => {
        if (resData != undefined && resData != null) {
          self.closePopupLoadingData();
          self.dialog.open(DieuChuyenKhoNoiBoDuocPhamPopupComponent, {
            disableClose: true,
            width: "1200px",
            data: resData,
          }).afterClosed().subscribe(() => {
            // self.location.back();
          });
        }
      },
      (err: ApiError) => {
        self.validationErrors = err.ValidationErrors;
        if (err.Message != "Validation Failed") {
          self.notificationService.showError(err.Message);
        }
        self.closePopupLoadingData();
      })
  }

}
