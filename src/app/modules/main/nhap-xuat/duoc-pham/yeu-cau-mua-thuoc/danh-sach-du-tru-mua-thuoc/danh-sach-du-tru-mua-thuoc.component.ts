import { Component, OnInit, ViewChild, TemplateRef, ChangeDetectorRef, Input } from "@angular/core";
import { MatDialog } from "@angular/material";
import { ActivatedRoute, Router } from "@angular/router";
import { DocumentType } from "src/app/shared/enum/document-type.enum";

import { FormControl } from '@angular/forms';
import { GridComponent } from "src/app/shared/component/grid/grid.component";
import { AuthService } from "src/app/core/services/auth.service";
import { NotificationService } from "src/app/core/services/notification.service";

import { ApiService } from 'src/app/core/services/api.service';
import { CommonService } from "src/app/core/utilities/common.helper";
import { ApiError } from 'src/app/shared/models/api-error.model';
import { SecurityOperation } from 'src/app/shared/enum/security-operation.enum';
import { SystemMessage } from 'src/app/shared/configdata/system-message';
import { LoadingComponent } from 'src/app/shared/component/dialogs/loading/loading.component';
import { Location } from '@angular/common';
import { LocalStorageHelper } from 'src/app/core/utilities/local-storage.helper';
import { SortDescriptor } from '@progress/kendo-data-query';
import { ConfirmComponent } from 'src/app/shared/component/dialogs/confirm/confirm.component';
import icSearch from "@iconify/icons-ic/twotone-search";
import icMoreHoriz from '@iconify/icons-ic/twotone-more-horiz';
import icDelete from '@iconify/icons-ic/twotone-delete';
import icEdit from '@iconify/icons-ic/twotone-edit';
import icAdd from '@iconify/icons-ic/twotone-add';
import icCancel from "@iconify/icons-ic/cancel";
import icClose from "@iconify/icons-ic/twotone-close";
import icPrint from "@iconify/icons-ic/twotone-print";
import icFileExcel from "@iconify/icons-fa-solid/file-excel";
import icFilterList from "@iconify/icons-ic/twotone-filter-list";

import { PhieuYeuCauMuaThuoc, YeuCauMuaThuocGridVo } from '../yeu-cau-mua-thuoc.model';
import { PhieuMuaDuocPhamComponent } from '../phieu-mua-duoc-pham/phieu-mua-duoc-pham.component';
@Component({
  selector: 'app-danh-sach-du-tru-mua-thuoc',
  templateUrl: './danh-sach-du-tru-mua-thuoc.component.html',
  styleUrls: ['./danh-sach-du-tru-mua-thuoc.component.scss']
})
export class DanhSachDuTruMuaThuocComponent implements OnInit {
  documentType: DocumentType;
  danhSachYeuCauMuaThuoc: YeuCauMuaThuocGridVo;
  inPhieuDuocPham: PhieuYeuCauMuaThuoc = new PhieuYeuCauMuaThuoc();

  baseRoute: string = "/nhap-xuat/duoc-pham/yeu-cau-mua-duoc-pham";
  urlGetData: string = "YeuCauMuaDuocPham/GetYeuCauMuaDuocPhamDataForGridAsync";
  urlGetTotalPage: string = "YeuCauMuaDuocPham/GetYeuCauMuaDuocPhamTotalPageForGridAsync";
  popupLoadingData: any = null;
  addtionStringDefault: string = null;
  gridColumns: any[] = [];
  validationErrors: any[] = [];
  icClose = icClose;
  icCancel = icCancel;
  icDelete = icDelete;
  icMoreHoriz = icMoreHoriz;
  icFileExcel = icFileExcel;
  icFilterList = icFilterList;
  icEdit = icEdit;
  icAdd = icAdd;
  icPrint = icPrint;
  icSearch = icSearch;
  holdQuery: any = null;
  searchCtrl = new FormControl();
  additionalSearchString:string=null;
  @ViewChild(GridComponent, { static: true }) gridChild: GridComponent;
  @ViewChild('actionTemplate', { static: true }) actionTemplate: TemplateRef<any>;
  @ViewChild('tinhTrangTemplate', { static: true }) tinhTrangTemplate: TemplateRef<any>;
  @ViewChild("ngayYeuCauTemplate", { static: true }) ngayYeuCauTemplate: TemplateRef<any>;
  @ViewChild("ngayTaiKhoaTemplate", { static: true }) ngayTaiKhoaTemplate: TemplateRef<any>;
  @ViewChild("ngayTaiKhoDuocTemplate", { static: true }) ngayTaiKhoDuocTemplate: TemplateRef<any>;
  @ViewChild("ngayTaiGiamDocTemplate", { static: true }) ngayTaiGiamDocTemplate: TemplateRef<any>;
  @ViewChild('soPhieuTemplate', { static: true }) soPhieuTemplate: TemplateRef<any>;

  @Input() sort: SortDescriptor[] = [
    {
      field: "TinhTrang",
      dir: "asc",
    },
  ];


  constructor(
    private dialog: MatDialog,
    private router: Router,
    private apiService: ApiService,
    private authService: AuthService,
    private notificationService: NotificationService,
    private route: ActivatedRoute,
    private location: Location,
  ) { }

  ngOnInit() {
    this.documentType = DocumentType.DanhSachYeuCauDuTruMuaDuocPham;
    this.danhSachYeuCauMuaThuoc = new YeuCauMuaThuocGridVo();
    this.backWithSearch();
    this.gridColumns = [
      { Field: "SoPhieu", Title: "Số Phiếu", Width: 120, Sortable: true, Template: this.soPhieuTemplate },
      { Field: "TenNhomDuTru", Title: "Nhóm", Width: 150, Sortable: true },
      { Field: "TenKho", Title: "Kho", MinWidth: 150, Sortable: true },
      { Field: "KyDuTru", Title: "Kỳ dự trù", Width: 170, Sortable: true },
      { Field: "NgayYeuCau", Title: "Ngày yêu cầu", Width: 150, Sortable: true, Template: this.ngayYeuCauTemplate },
      { Field: "NhanVienYeuCau", Title: "Người yêu cầu", Width: 150, Sortable: true },
      { Field: "TinhTrang", Title: "Tình trạng", Width: 150, Sortable: true, Template: this.tinhTrangTemplate },
      { Field: "NgayTaiKhoa", Title: "Ngày T.Khoa duyệt", Width: 150, Sortable: true, Template: this.ngayTaiKhoaTemplate },
      { Field: "NgayTaiKhoDuoc", Title: "Ngày K.Dược duyệt", Width: 150, Sortable: true, Template: this.ngayTaiKhoDuocTemplate },
      { Field: "NgayTaiGiamDoc", Title: "Ngày G.Đốc duyệt", Width: 150, Sortable: true, Template: this.ngayTaiGiamDocTemplate },
      { Field: "Action", Title: "", Width: 50, Template: this.actionTemplate },

    ];
  }

  backWithSearch() {
    let hasLocalSearchString = false;
    if (this.route.snapshot.queryParams.holdQuery != undefined) {
      let holdQuery = this.route.snapshot.queryParams.holdQuery;
      if (holdQuery != null && holdQuery) {
        this.additionalSearchString = LocalStorageHelper.getItem<string>("additionalSearchStringDanhSachYeuCauMuaThuoc");
        if (this.additionalSearchString != null) {
          this.danhSachYeuCauMuaThuoc = JSON.parse(this.additionalSearchString);

          if (this.danhSachYeuCauMuaThuoc.RangeFromDate.TuNgay != null
            && this.danhSachYeuCauMuaThuoc.RangeFromDate.TuNgay != 'null' && this.danhSachYeuCauMuaThuoc.RangeFromDate.TuNgay != '') {
            this.danhSachYeuCauMuaThuoc.RangeFromDate.startDate = new Date(this.danhSachYeuCauMuaThuoc.RangeFromDate.startDate);
          }
          else {
            this.danhSachYeuCauMuaThuoc.RangeFromDate.startDate = null;
          }

          if (this.danhSachYeuCauMuaThuoc.RangeFromDate.DenNgay != null
            && this.danhSachYeuCauMuaThuoc.RangeFromDate.DenNgay != 'null' && this.danhSachYeuCauMuaThuoc.RangeFromDate.DenNgay != '') {
            this.danhSachYeuCauMuaThuoc.RangeFromDate.endDate = new Date(this.danhSachYeuCauMuaThuoc.RangeFromDate.endDate);
          } else {
            this.danhSachYeuCauMuaThuoc.RangeFromDate.endDate = null;
          }

          this.addtionStringDefault = this.additionalSearchString;
          this.gridChild.additionalSearchString = this.additionalSearchString;
          hasLocalSearchString = true;

        }
      }
    }
    if (!hasLocalSearchString) {
      LocalStorageHelper.removeItem("additionalSearchStringDanhSachYeuCauMuaThuoc");
    }
  }

  onKey(event: any) {
    if (event.key == "Enter") {
      this.timKiem();
    }
  }

  clearSearch() {
    this.danhSachYeuCauMuaThuoc.SearchString = null;
    this.gridChild.search();
  }

  searchChanges(event: any) {
    var self = this;
    if (event != undefined && (event == null || event == "")) {
      self.gridChild.searchString = null;
      self.timKiem();
    }
  }

  trangThaiCheckBox(event: any, tinhTrang: any) {
    if (tinhTrang == "choduyet") {
      this.danhSachYeuCauMuaThuoc.ChoDuyet = event;
    }
    if (tinhTrang == "daduyet") {
      this.danhSachYeuCauMuaThuoc.DaDuyet = event;
    }
    if (tinhTrang == "tuchoi") {
      this.danhSachYeuCauMuaThuoc.TuChoiDuyet = event;
    }
    this.timKiem();
  }

  timKiem() {
    this.location.replaceState(this.baseRoute + '?holdQuery=true');

    if (this.danhSachYeuCauMuaThuoc.RangeFromDate != null && this.danhSachYeuCauMuaThuoc.RangeFromDate.startDate != null) {
      this.danhSachYeuCauMuaThuoc.RangeFromDate.TuNgay = CommonService.formatDateTime(this.danhSachYeuCauMuaThuoc.RangeFromDate.startDate, "mm/dd/yyyy");
    }
    else {
      this.danhSachYeuCauMuaThuoc.RangeFromDate.TuNgay = null;
    }
    if (this.danhSachYeuCauMuaThuoc.RangeFromDate != null && this.danhSachYeuCauMuaThuoc.RangeFromDate.endDate != null) {
      this.danhSachYeuCauMuaThuoc.RangeFromDate.DenNgay = CommonService.formatDateTime(this.danhSachYeuCauMuaThuoc.RangeFromDate.endDate, "mm/dd/yyyy");
    }
    else {
      this.danhSachYeuCauMuaThuoc.RangeFromDate.DenNgay = null;
    }

    var queryString = JSON.stringify(this.danhSachYeuCauMuaThuoc);
    this.gridChild._additionalSearchString = queryString;
    LocalStorageHelper.setItem("additionalSearchStringDanhSachYeuCauMuaThuoc", queryString);
    this.gridChild.search();
  }

  taoPhieuMuaThuoc() {
    if (this.authService.hasPermission(this.documentType, SecurityOperation.Add)) {
      this.router.navigate(["/nhap-xuat/duoc-pham/yeu-cau-mua-duoc-pham/lap-phieu-mua-duoc-pham/them"]);
    }
    else {
      this.notificationService.showError(SystemMessage.UnAuthorizedMessage);
    }
  }

  chinhSua(id: number) {
    if (this.authService.hasPermission(this.documentType, SecurityOperation.Update)) {
      this.router.navigate(["/nhap-xuat/duoc-pham/yeu-cau-mua-duoc-pham/lap-phieu-mua-duoc-pham-gui-lai/" + id]);
    } else {
      this.notificationService.showError(SystemMessage.UnAuthorizedMessage);
    }
  }

  xoa(id: number) {
    var self = this;
    self.dialog.open(ConfirmComponent, {
      disableClose: false,
      width: "500px",
      data: {
        Title: "Xác nhận",
        Message: "Bạn có chắc chắn muốn xóa phiếu dự trù này không ?",
      },
    }).afterClosed().subscribe((res) => {
      if (res == "Yes") {
        if (self.authService.hasPermission(self.documentType, SecurityOperation.Delete)) {
          this.apiService.post<any>("YeuCauMuaDuocPham/XoaYeuCauMuaDuTru?id=" + id).subscribe(
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

  inPhieu(id: number, loai: number) {
    var self = this;
    self.loadingPage();
    self.dialog.open(PhieuMuaDuocPhamComponent, {
      disableClose: false,
      width: '1200px',
      data: { Id: id, Loai: loai },
    }).afterClosed().subscribe(() => {
      self.closePopupLoadingData();
    });
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

  XuatExcel() {
    this.dialog.open(LoadingComponent, {
      disableClose: true,
      width: '200px',
      height: '90px',
      data: { Title: 'Đang xuất excel...' }
    });

    if (this.authService.hasPermission(this.documentType, SecurityOperation.Process)) {
      this.apiService.postExportExcel<string>("YeuCauMuaDuocPham/ExportYeuCauMuaDuocPham", this.gridChild._gridQueryInfo).subscribe(res => {
        let dateTimeNow = new Date();
        CommonService.downLoadFile(res, "application/vnd.ms-excel", "YeuCauDuTruMuaDuocPham" + dateTimeNow.getFullYear() + ".xlsx");
        this.dialog.closeAll();
      }, err => {
        this.notificationService.showError(err.Message);
        this.dialog.closeAll();
      })
    } else {
      this.notificationService.showError(SystemMessage.UnAuthorizedMessage);
    }
  }

  changeNgayBatDauRange() {
    this.timKiem();
  }

  blur() {
    this.timKiem();
  }
}
