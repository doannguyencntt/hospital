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
import { PhieuYeuCauMuaVatTu, YeuCauMuaVatTuGridVo } from '../yeu-cau-mua-vat-tu.model';
import { PhieuMuaVatTuComponent } from '../phieu-mua-vat-tu/phieu-mua-vat-tu.component';


@Component({
  selector: 'app-danh-sach-du-tru-mua-vat-tu',
  templateUrl: './danh-sach-du-tru-mua-vat-tu.component.html',
  styleUrls: ['./danh-sach-du-tru-mua-vat-tu.component.scss']
})
export class DanhSachDuTruMuaVatTuComponent implements OnInit {
  documentType: DocumentType;
  danhSachYeuCauMuaVatTu: YeuCauMuaVatTuGridVo;
  inPhieuVatTu: PhieuYeuCauMuaVatTu = new PhieuYeuCauMuaVatTu();

  baseRoute: string = "/nhap-xuat/vat-tu/yeu-cau-mua-vat-tu";
  urlGetData: string = "YeuCauMuaVatTu/GetYeuCauMuaVatTuDataForGridAsync";
  urlGetTotalPage: string = "YeuCauMuaVatTu/GetYeuCauMuaVatTuTotalPageForGridAsync";
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
    this.documentType = DocumentType.DanhSachYeuCauDuTruMuaVatTu;
    this.danhSachYeuCauMuaVatTu = new YeuCauMuaVatTuGridVo();
    this.backWithSearch();
    this.gridColumns = [
      { Field: "SoPhieu", Title: "Số Phiếu", Width: 120, Sortable: true, Template: this.soPhieuTemplate },
      { Field: "TenKho", Title: "Kho", MinWidth: 150, Sortable: true },
      { Field: "KyDuTru", Title: "Kỳ dự trù", Width: 170, Sortable: true },
      { Field: "NgayYeuCau", Title: "Ngày yêu cầu", Width: 150, Sortable: true, Template: this.ngayYeuCauTemplate },
      { Field: "NhanVienYeuCau", Title: "Người yêu cầu", Width: 150, Sortable: true },
      { Field: "TinhTrang", Title: "Tình trạng", Width: 150, Sortable: true, Template: this.tinhTrangTemplate },
      { Field: "NgayTaiKhoa", Title: "Ngày T.Khoa Duyệt", Width: 150, Sortable: true, Template: this.ngayTaiKhoaTemplate },
      { Field: "NgayTaiKhoDuoc", Title: "Ngày K.Dược Duyệt", Width: 150, Sortable: true, Template: this.ngayTaiKhoDuocTemplate },
      { Field: "NgayTaiGiamDoc", Title: "Ngày G.Đốc Duyệt", Width: 150, Sortable: true, Template: this.ngayTaiGiamDocTemplate },
      { Field: "Action", Title: "", Width: 50, Template: this.actionTemplate },
    ]
  }

  backWithSearch() {
    let hasLocalSearchString = false;
    if (this.route.snapshot.queryParams.holdQuery != undefined) {
      let holdQuery = this.route.snapshot.queryParams.holdQuery;
      if (holdQuery != null && holdQuery) {
        this.additionalSearchString = LocalStorageHelper.getItem<string>("additionalSearchStringDanhSachYeuCauMuaVatTu");
        if (this.additionalSearchString != null) {
          this.danhSachYeuCauMuaVatTu = JSON.parse(this.additionalSearchString);
          
          if (this.danhSachYeuCauMuaVatTu.RangeFromDate.TuNgay != null
            && this.danhSachYeuCauMuaVatTu.RangeFromDate.TuNgay != 'null' && this.danhSachYeuCauMuaVatTu.RangeFromDate.TuNgay != '') {
            this.danhSachYeuCauMuaVatTu.RangeFromDate.startDate = new Date(this.danhSachYeuCauMuaVatTu.RangeFromDate.startDate);
          }
          else {
            this.danhSachYeuCauMuaVatTu.RangeFromDate.startDate = null;
          }
          if (this.danhSachYeuCauMuaVatTu.RangeFromDate.DenNgay != null
            && this.danhSachYeuCauMuaVatTu.RangeFromDate.DenNgay != 'null' && this.danhSachYeuCauMuaVatTu.RangeFromDate.DenNgay != '') {
            this.danhSachYeuCauMuaVatTu.RangeFromDate.endDate = new Date(this.danhSachYeuCauMuaVatTu.RangeFromDate.endDate);
          } else {
            this.danhSachYeuCauMuaVatTu.RangeFromDate.endDate = null;
          }
          
          this.addtionStringDefault = this.additionalSearchString;
          this.gridChild.additionalSearchString = this.additionalSearchString;
          hasLocalSearchString = true;

        }
      }
    }
    if (!hasLocalSearchString) {
      LocalStorageHelper.removeItem("additionalSearchStringDanhSachYeuCauMuaVatTu");
    }
  }

  onKey(event: any) {
    if (event.key == "Enter") {
      this.timKiem();
    }
  }

  clearSearch() {
    this.danhSachYeuCauMuaVatTu.SearchString = null;
    this.gridChild.search();
  }

  searchChanges(event: any) {
    var self = this;
    if (event != undefined && (event == null || event == "")) {
      self.gridChild.searchString = null;
      self.timKiem();
    }
  }

  changeNgayBatDauRange() {
    this.timKiem();
  }

  blur() {
    this.timKiem();
  }

  trangThaiCheckBox(event: any, tinhTrang: any) {
    if (tinhTrang == "choduyet") {
      this.danhSachYeuCauMuaVatTu.ChoDuyet = event;
    }
    if (tinhTrang == "daduyet") {
      this.danhSachYeuCauMuaVatTu.DaDuyet = event;
    }
    if (tinhTrang == "tuchoi") {
      this.danhSachYeuCauMuaVatTu.TuChoiDuyet = event;
    }
    this.timKiem();
  }
  timKiem() {
    this.location.replaceState(this.baseRoute + '?holdQuery=true');

    if (this.danhSachYeuCauMuaVatTu.RangeFromDate != null && this.danhSachYeuCauMuaVatTu.RangeFromDate.startDate != null) {
      this.danhSachYeuCauMuaVatTu.RangeFromDate.TuNgay = CommonService.formatDateTime(this.danhSachYeuCauMuaVatTu.RangeFromDate.startDate, "mm/dd/yyyy");
    }
    else {
      this.danhSachYeuCauMuaVatTu.RangeFromDate.TuNgay = null;
    }
    if (this.danhSachYeuCauMuaVatTu.RangeFromDate != null && this.danhSachYeuCauMuaVatTu.RangeFromDate.endDate != null) {
      this.danhSachYeuCauMuaVatTu.RangeFromDate.DenNgay = CommonService.formatDateTime(this.danhSachYeuCauMuaVatTu.RangeFromDate.endDate, "mm/dd/yyyy");
    }
    else {
      this.danhSachYeuCauMuaVatTu.RangeFromDate.DenNgay = null;
    }
    var queryString = JSON.stringify(this.danhSachYeuCauMuaVatTu);
    this.gridChild._additionalSearchString = queryString;
    LocalStorageHelper.setItem("additionalSearchStringDanhSachYeuCauMuaVatTu", queryString);
    this.gridChild.search();
  }

  taoPhieuMuaVatTu() {
    if (this.authService.hasPermission(this.documentType, SecurityOperation.Add)) {
      this.router.navigate(["/nhap-xuat/vat-tu/yeu-cau-mua-vat-tu/lap-phieu-mua-vat-tu/them"]);
    }
    else {
      this.notificationService.showError(SystemMessage.UnAuthorizedMessage);
    }
  }

  chinhSua(id: number) {
    if (this.authService.hasPermission(this.documentType, SecurityOperation.Update)) {
      this.router.navigate(["/nhap-xuat/vat-tu/yeu-cau-mua-vat-tu/lap-phieu-mua-vat-tu-gui-lai/" + id]);
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
          this.apiService.post<any>("YeuCauMuaVatTu/XoaYeuCauMuaDuTruVatTu?id=" + id).subscribe(
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

  inPhieu(id: number) {
    var self = this;
    self.loadingPage();
    self.dialog.open(PhieuMuaVatTuComponent, {
      disableClose: false,
      width: '1200px',
      data: { Id: id },
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
      this.apiService.postExportExcel<string>("YeuCauMuaVatTu/ExportYeuCauMuaVatTu", this.gridChild._gridQueryInfo).subscribe(res => {
        let dateTimeNow = new Date();
        CommonService.downLoadFile(res, "application/vnd.ms-excel", "YeuCauDuTruMuaVatTu" + dateTimeNow.getFullYear() + ".xlsx");
        this.dialog.closeAll();
      }, err => {
        this.notificationService.showError(err.Message);
        this.dialog.closeAll();
      })
    } else {
      this.notificationService.showError(SystemMessage.UnAuthorizedMessage);
    }
  }
}
