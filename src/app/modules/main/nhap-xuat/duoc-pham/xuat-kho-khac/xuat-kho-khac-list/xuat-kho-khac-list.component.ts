import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { GroupDescriptor, SortDescriptor } from '@progress/kendo-data-query';
import { ConfirmComponent } from 'src/app/shared/component/dialogs/confirm/confirm.component';
import { GridComponent } from 'src/app/shared/component/grid/grid.component';
import icSearch from '@iconify/icons-ic/twotone-search';
import icFileExcel from '@iconify/icons-fa-solid/file-excel';
import icAdd from '@iconify/icons-ic/twotone-add';
import icFilterList from '@iconify/icons-ic/twotone-filter-list';
import icDelete from '@iconify/icons-ic/twotone-delete';
import icEdit from '@iconify/icons-ic/twotone-edit';
import icMoreHoriz from '@iconify/icons-ic/twotone-more-horiz';
import { MatDialog } from '@angular/material';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/core/services/api.service';
import { AuthService } from 'src/app/core/services/auth.service';
import { NotificationService } from 'src/app/core/services/notification.service';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import { SecurityOperation } from 'src/app/shared/enum/security-operation.enum';
import { SystemMessage } from 'src/app/shared/configdata/system-message';
import { CommonService } from 'src/app/core/utilities/common.helper';
import { LocalStorageHelper } from 'src/app/core/utilities/local-storage.helper';
import { Location } from '@angular/common';
import { PhieuXuatKhoKhacVo, XuatKhoKhacGrid } from '../xuat-kho-khac.model';
import { LoadingComponent } from 'src/app/shared/component/dialogs/loading/loading.component';
import { ApiError } from 'src/app/shared/models/api-error.model';
import icPrint from "@iconify/icons-ic/twotone-print";
import { PhieuXuatKhoDpVtPopupComponent } from '../phieu-xuat-kho-dp-vt-popup/phieu-xuat-kho-dp-vt-popup.component';


@Component({
  selector: 'app-xuat-kho-khac-list',
  templateUrl: './xuat-kho-khac-list.component.html',
  styleUrls: ['./xuat-kho-khac-list.component.scss']
})
export class XuatKhoKhacListComponent implements OnInit {
  phieuXuatKhoKhacVo: PhieuXuatKhoKhacVo = new PhieuXuatKhoKhacVo();
  baseRoute: string = "/nhap-xuat/duoc-pham/xuat-kho-khac";
  sort: SortDescriptor[] = [{
    field: 'NgayXuat',
    dir: 'desc'
  }];
  validationErrors: any;
  // sortChild: SortDescriptor[] = [{
  //   field: 'DuocPham',
  //   dir: 'desc'
  // }];

  icDelete = icDelete;
  icEdit = icEdit;
  icMoreHoriz = icMoreHoriz;
  icPrint = icPrint;
  icSearch = icSearch;
  icFileExcel = icFileExcel;
  icAdd = icAdd;
  icFilterList = icFilterList;
  searchCtrl = new FormControl;

  documentType: DocumentType;
  gridColumns: any[] = [];
  gridChildColumns: any[] = [];
  urlGetDataDuocPham: string = "XuatKhoDuocPhamKhac/GetDataForGridAsync";
  urlGetTotalPageDuocPham: string = "XuatKhoDuocPhamKhac/GetTotalPageForGridAsync";

  urlGetDataGridChild: string = "XuatKhoDuocPhamKhac/GetDataForGridChildAsync";
  urlGetTotalPageGridChild: string = "XuatKhoDuocPhamKhac/GetTotalPageForGridChildAsync";

  @ViewChild('trangThaiTemplate', { static: true }) trangThaiTemplate: TemplateRef<any>;
  @ViewChild('parentGrid', { static: true }) gridChild: GridComponent;
  @ViewChild('gridChildOfParent', { static: true }) gridChildOfParent: GridComponent;
  @ViewChild('actionTemplate', { static: true }) actionTemplate: TemplateRef<any>;
  @ViewChild('hsdListTemplate', { static: true }) hsdListTemplate: TemplateRef<any>;

  holdQuery: any = null;
  additionalSearchString: string = null;

  //update xuat kho 14/9/2020
  xuatKhoSearch: XuatKhoKhacGrid = new XuatKhoKhacGrid();
  groups: GroupDescriptor[] = [{ field: 'TenNhom' }];
  @ViewChild('tenNhomGroupHeaderTemplate', { static: true }) tenNhomGroupHeaderTemplate: TemplateRef<any>;
  //
  @ViewChild('soChungTuTemplate', { static: true }) soChungTuTemplate: TemplateRef<any>;
  @ViewChild('tinhTrangTemplate', { static: true }) tinhTrangTemplate: TemplateRef<any>;
  @ViewChild("ngayXuatTemplate", { static: true }) ngayXuatTemplate: TemplateRef<any>;
  @ViewChild('khoXuatTemplate', { static: true }) khoXuatTemplate: TemplateRef<any>;


  constructor(private apiService: ApiService, private authService: AuthService, private dialog: MatDialog,
    private location: Location, private route: ActivatedRoute,
    private router: Router, private notificationService: NotificationService) { }

  ngOnInit() {
    this.documentType = DocumentType.XuatKhoDuocPhamKhac;
    // var now = new Date();
    // this.xuatKhoSearch.RangeFromDate.startDate = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 0, 0, 0);
    // this.xuatKhoSearch.RangeFromDate.endDate = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 23, 59, 59);
    this.backWithSearch();
    this.gridColumns = [
      { Field: "SoPhieu", Title: "Số phiếu", Width: 90, Sortable: true, Template: this.soChungTuTemplate },
      { Field: "KhoDuocPhamXuat", Title: "Nơi xuất", Width: 200, Sortable: true, Template: this.khoXuatTemplate },
      { Field: "TenNguoiXuat", Title: "Người xuất", Width: 150, Sortable: true },
      { Field: "NgayXuat", Title: "Ngày xuất", Width: 150, Sortable: true, Template: this.ngayXuatTemplate },
      { Field: "TenNguoiNhan", Title: "Người nhận", Width: 150, Sortable: true },
      { Field: "TinhTrang", Title: "Tình trạng", Width: 100, Sortable: true, Template: this.tinhTrangTemplate },
      { Field: "LyDoXuatKho", Title: "Lý do xuất", Width: 165, Sortable: true },
      { Field: "Action", Title: "", Width: 50, Template: this.actionTemplate },
    ];
    this.gridChildColumns = [
      { Field: "TenNhom", Title: "Tên Nhóm", Sortable: false, Hidden: true, HideFilter: true, TemplateGroupHeader: this.tenNhomGroupHeaderTemplate },
      { Field: "Ma", Title: "Mã", Width: 40, Sortable: true, ShowTooltip: true },
      { Field: "Ten", Title: "Dược phẩm", Width: 100, Sortable: false, ShowTooltip: true },
      { Field: "HamLuong", Title: "Hàm lượng", Width: 50, Sortable: false, ShowTooltip: true },
      { Field: "SoLo", Title: "Số lô", Width: 50, Sortable: false, ShowTooltip: true },
      { Field: "HanSuDung", Title: "Hạn sử dụng", Width: 100, Sortable: false, Template: this.hsdListTemplate },
      { Field: "DVT", Title: "ĐVT", Width: 70, Sortable: false },
      { Field: "SoLuongXuat", Title: "SL Xuất", Width: 100, Sortable: false },
      { Field: "SoPhieu", Title: "Số phiếu", Width: 150, Sortable: false },
    ];
  }

  backWithSearch() {
    let hasLocalSearchString = false;
    if (this.route.snapshot.queryParams.holdQuery != undefined) {
      let holdQuery = this.route.snapshot.queryParams.holdQuery;
      if (holdQuery != null && holdQuery) {
        var additionalSearchString = LocalStorageHelper.getItem<string>("additionalSearchStringXuatKhoKhacDp");
        if (additionalSearchString != null) {
          this.xuatKhoSearch = JSON.parse(additionalSearchString);

          if (this.xuatKhoSearch.RangeFromDate.TuNgay != null
            && this.xuatKhoSearch.RangeFromDate.TuNgay != 'null' && this.xuatKhoSearch.RangeFromDate.TuNgay != '') {
            this.xuatKhoSearch.RangeFromDate.startDate = new Date(this.xuatKhoSearch.RangeFromDate.startDate);
          }
          else {
            this.xuatKhoSearch.RangeFromDate.startDate = null;
          }

          if (this.xuatKhoSearch.RangeFromDate.DenNgay != null
            && this.xuatKhoSearch.RangeFromDate.DenNgay != 'null' && this.xuatKhoSearch.RangeFromDate.DenNgay != '') {
            this.xuatKhoSearch.RangeFromDate.endDate = new Date(this.xuatKhoSearch.RangeFromDate.endDate);
          } else {
            this.xuatKhoSearch.RangeFromDate.endDate = null;
          }
          // this.addtionStringDefault = additionalSearchString;
          this.gridChild.additionalSearchString = additionalSearchString;
          hasLocalSearchString = true;
        }
      }
    }
    if (!hasLocalSearchString) {
      LocalStorageHelper.removeItem("additionalSearchStringXuatKhoKhacDp");
    }
  }

  xemChiTiet(id: number, tinhTrang: number) {
    if (this.authService.hasPermission(this.documentType, SecurityOperation.View)) {
      let url = '/xem-chi-tiet';
      this.router.navigate([this.baseRoute + url], { queryParams: { Id: id, F: tinhTrang } });
    }
    else {
      this.notificationService.showError(SystemMessage.UnAuthorizedMessage);
    }
  }

  exportExcel() {
    if (this.authService.hasPermission(this.documentType, SecurityOperation.Process)) {
      this.dialog.open(LoadingComponent, {
        disableClose: true,
        width: '200px',
        height: '90px',
        data: { Title: 'Đang xuất excel...' }
      });
      this.apiService.postExportExcel<string>("XuatKhoDuocPhamKhac/ExportData", this.gridChild._gridQueryInfo).subscribe(
        resultData => {
          let dateTimeNow = new Date();
          CommonService.downLoadFile(resultData, "application/vnd.ms-excel", "XuatKhoDuocPhamKhac" + dateTimeNow.getFullYear() + ".xlsx");
          this.dialog.closeAll();

        }
        , err => {
          this.notificationService.showError(err.Message);
          this.dialog.closeAll();
        });
    }
    else {
      this.notificationService.showError(SystemMessage.UnAuthorizedMessage);
    }
  }

  onKey(event: any) {
    if (event.key == "Enter") {
      this.timKiem();
    }
  }

  trangThaiCheckBox(event: any, tinhTrang: any) {
    if (tinhTrang == "choduyet") {
      this.xuatKhoSearch.ChoDuyet = event;
    }
    if (tinhTrang == "daduyet") {
      this.xuatKhoSearch.DaDuyet = event;
    }
    this.timKiem();
  }

  changeNgayBatDauRange() {
    this.timKiem();
  }

  searchChanges(event: any) {
    var self = this;
    if (event != undefined && (event == null || event == "")) {
      self.gridChild.searchString = null;
      self.timKiem();
    }
  }

  timKiem() {
    this.location.replaceState(this.baseRoute + '?holdQuery=true');

    if (this.xuatKhoSearch.RangeFromDate != null && this.xuatKhoSearch.RangeFromDate.startDate != null) {
      this.xuatKhoSearch.RangeFromDate.TuNgay = CommonService.formatDateTime(this.xuatKhoSearch.RangeFromDate.startDate, "mm/dd/yyyy");
    }
    else {
      this.xuatKhoSearch.RangeFromDate.TuNgay = null;
    }
    if (this.xuatKhoSearch.RangeFromDate != null && this.xuatKhoSearch.RangeFromDate.endDate != null) {
      this.xuatKhoSearch.RangeFromDate.DenNgay = CommonService.formatDateTime(this.xuatKhoSearch.RangeFromDate.endDate, "mm/dd/yyyy");
    }
    else {
      this.xuatKhoSearch.RangeFromDate.DenNgay = null;
    }

    var queryString = JSON.stringify(this.xuatKhoSearch);
    this.gridChild._additionalSearchString = queryString;
    LocalStorageHelper.setItem("additionalSearchStringXuatKhoKhacDp", queryString);
    this.gridChild.search();
  }

  themMoiXuatKho() {
    if (this.authService.hasPermission(this.documentType, SecurityOperation.Add)) {
      this.router.navigate(["/nhap-xuat/duoc-pham/xuat-kho-khac/them"]);
    }
    else {
      this.notificationService.showError(SystemMessage.UnAuthorizedMessage);
    }
  }
  popupLoadingData: any;

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

  inPhieu(data: any) {
    this.loadingPage();
    this.phieuXuatKhoKhacVo.Id = data.Id;
    this.phieuXuatKhoKhacVo.HostingName = window.location.protocol + "//" + window.location.host;
    this.phieuXuatKhoKhacVo.CoNCC = data.CoNCC;
    this.phieuXuatKhoKhacVo.DuocDuyet = data.DuocDuyet;
    this.phieuXuatKhoKhacVo.LaDuocPham = true;
    this.apiService.post<any>("XuatKhoDuocPhamKhac/InPhieuXuatKhoKhac", this.phieuXuatKhoKhacVo).subscribe(
      resData => {
        if (resData != undefined && resData != null) {
          this.closePopupLoadingData();
          this.dialog.open(PhieuXuatKhoDpVtPopupComponent, {
            disableClose: true,
            width: "1200px",
            data: { html: resData, title: "PHIẾU XUẤT SỬ DỤNG THUỐC, HÓA CHẤT, VẬT TƯ" },
          }).afterClosed().subscribe(() => {
          });
        }
      },
      (err: ApiError) => {
        this.validationErrors = err.ValidationErrors;
        if (err.Message != "Validation Failed") {
          this.notificationService.showError(err.Message);
        }
        this.closePopupLoadingData();
      })
  }
  blur() {
    this.timKiem();
  }

  xoa(id: number) {
    var self = this;
    self.dialog.open(ConfirmComponent, {
      disableClose: false,
      width: "500px",
      data: {
        Title: "Xác nhận",
        Message: "Bạn có chắc chắn muốn xóa dữ liệu này không ?",
      },
    }).afterClosed().subscribe((res) => {
      if (res == "Yes") {
        if (self.authService.hasPermission(self.documentType, SecurityOperation.Delete)) {
          this.apiService.post<any>("XuatKhoDuocPhamKhac/XoaYeuCauXuatThuoc?id=" + id).subscribe(
            () => {
              self.notificationService.showSuccess(CommonService.format(SystemMessage.ActionSuccessfully, ["Xóa"]));
              this.timKiem();
            },
            (err: ApiError) => {
              this.validationErrors = err.ValidationErrors;
              if (err.Message != "Validation Failed") {
                this.notificationService.showError(err.Message);
              }
            });
        } else {
          self.notificationService.showError(SystemMessage.UnAuthorizedMessage);
        }
      }
    })
  }
}
