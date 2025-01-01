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
import { GroupDescriptor, SortDescriptor } from '@progress/kendo-data-query';
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
import { YeuCauTraVatTuTuBenhNhanGrid } from "../yeu-cau-tra-vat-tu-tu-benh-nhan.model";
import { PhieuTraVatTuTuBenhNhanPopupComponent } from "../phieu-tra-vat-tu-tu-benh-nhan-popup/phieu-tra-vat-tu-tu-benh-nhan-popup.component";
import { InPhieuHoanTraCompoment } from "../../../duoc-pham/duyet-hoan-tra-duoc-pham/in-phieu-hoan-tra/in-phieu-hoan-tra.component";
@Component({
  selector: 'app-yeu-cau-tra-vat-tu-tu-benh-nhan-list',
  templateUrl: './yeu-cau-tra-vat-tu-tu-benh-nhan-list.component.html',
  styleUrls: ['./yeu-cau-tra-vat-tu-tu-benh-nhan-list.component.scss']
})
export class YeuCauTraVatTuTuBenhNhanListComponent implements OnInit {
  documentType: DocumentType;
  danhSachYeuCauTraVatTu: YeuCauTraVatTuTuBenhNhanGrid;

  baseRoute: string = "/nhap-xuat/vat-tu/tu-benh-nhan/yeu-cau-tra-vat-tu";
  urlGetData: string = "YeuCauTraVatTuTuBenhNhan/GetDataForGridAsync";
  urlGetTotalPage: string = "YeuCauTraVatTuTuBenhNhan/GetTotalPageForGridAsync";
  urlGetDataVatTu: string = "YeuCauTraVatTuTuBenhNhan/GetDataForGridAsyncVatTuChild";
  urlGetTotalPageVatTu: string = "YeuCauTraVatTuTuBenhNhan/GetTotalPageForGridAsyncVatTuChild";
  urlGetDataBenhNhan: string = "YeuCauTraVatTuTuBenhNhan/GetDataForGridAsyncBenhNhanChild";
  urlGetTotalPageBenhNhan: string = "YeuCauTraVatTuTuBenhNhan/GetTotalPageForGridAsyncBenhNhanChild";
  popupLoadingData: any = null;
  addtionStringDefault: string = null;
  gridColumns: any[] = [];
  gridVatTuColumns: any[] = [];
  gridYeuCauChiTietColumns: any[] = [];

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
  @ViewChild(GridComponent, { static: true }) gridChild: GridComponent;
  @ViewChild('tinhTrangTemplate', { static: true }) tinhTrangTemplate: TemplateRef<any>;
  @ViewChild('soPhieuTemplate', { static: true }) soPhieuTemplate: TemplateRef<any>;
  @ViewChild('actionTemplate', { static: true }) actionTemplate: TemplateRef<any>;
  @ViewChild("ngayYeuCauTemplate", { static: true }) ngayYeuCauTemplate: TemplateRef<any>;
  @ViewChild("ngayDuyetTemplate", { static: true }) ngayDuyetTemplate: TemplateRef<any>;

  @ViewChild("ngayDieuTriTemplate", { static: true }) ngayDieuTriTemplate: TemplateRef<any>;
  @ViewChild("ngayTraTemplate", { static: true }) ngayTraTemplate: TemplateRef<any>;

  @ViewChild('benhNhanGroupHeaderTemplate', { static: true }) benhNhanGroupHeaderTemplate: TemplateRef<any>;
  @ViewChild('nhomGroupHeaderTemplate', { static: true }) nhomGroupHeaderTemplate: TemplateRef<any>;
  @ViewChild('donGiaTemplate', { static: true }) donGiaTemplate: TemplateRef<any>;
  @ViewChild('thanhTienTemplate', { static: true }) thanhTienTemplate: TemplateRef<any>;

  groups: GroupDescriptor[] = [{ field: 'Nhom' }];
  groupBenhNhan: GroupDescriptor[] = [{ field: 'BenhNhan' }];


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
    this.danhSachYeuCauTraVatTu = new YeuCauTraVatTuTuBenhNhanGrid();
    this.backWithSearch();
    this.gridColumns = [
      { Field: "SoPhieu", Title: "Số Phiếu", Width: 100, Sortable: true, Template: this.soPhieuTemplate },
      { Field: "TenKhoa", Title: "Khoa Hoàn Trả", Width: 150, Sortable: true },
      { Field: "TenKho", Title: "Hoàn Trả Về Kho", Width: 170, Sortable: true },
      { Field: "NhanVienYeuCau", Title: "Người yêu cầu", Width: 150, Sortable: true },
      { Field: "NgayYeuCau", Title: "Ngày yêu cầu", Width: 150, Sortable: true, Template: this.ngayYeuCauTemplate },
      { Field: "TinhTrang", Title: "Tình trạng", Width: 100, Sortable: true, Template: this.tinhTrangTemplate },
      { Field: "NhanVienDuyet", Title: "Người duyệt", Width: 150, Sortable: true },
      { Field: "NgayDuyet", Title: "Ngày duyệt", Width: 150, Sortable: true, Template: this.ngayDuyetTemplate },
      { Field: "Action", Title: "", Width: 50, Template: this.actionTemplate },
    ];

    this.gridVatTuColumns = [
      { Field: "Nhom", Title: "Nhóm", Width: 50, Sortable: true, Hidden: true, TemplateGroupHeader: this.nhomGroupHeaderTemplate },
      { Field: "Ten", Title: "Vật tư", Width: 120, Sortable: true },
      { Field: "DVT", Title: "ĐVT", Width: 150, Sortable: false },
      { Field: "TongSoLuongChiDinh", Title: "Tổng SL chỉ định", Width: 150, Sortable: false },
      { Field: "TongSoLuongDaTra", Title: "Tổng SL đã trả", Width: 150, Sortable: false, },
      { Field: "TongSoLuongTraLanNay", Title: "Tổng SL trả lần này", Width: 150, Sortable: false },
    ];

    this.gridYeuCauChiTietColumns = [
      { Field: "NgayDieuTri", Title: "Ngày Điều Trị", Width: 120, Sortable: false, Template: this.ngayDieuTriTemplate },
      { Field: "NgayTra", Title: "Ngày Trả", Width: 150, Sortable: false, Template: this.ngayTraTemplate },
      { Field: "BenhNhan", Title: "", Width: 150, Sortable: false, Hidden: true, TemplateGroupHeader: this.benhNhanGroupHeaderTemplate },
      { Field: "NhanVienYeuCau", Title: "Người trả", Width: 150, Sortable: false },
      // { Field: "SoLuongChiDinh", Title: "SL chỉ định", Width: 150, Sortable: false },
      //{ Field: "SoLuongDaTra", Title: "SL đã trả", Width: 150, Sortable: false, },
      { Field: "SoLuongTraLanNay", Title: "SL trả lần này", Width: 150, Sortable: false },
      { Field: "DonGia", Title: "Đơn giá", Width: 150, Sortable: false, Template: this.donGiaTemplate },
      { Field: "ThanhTien", Title: "Thành tiền", Width: 150, Sortable: false, Template: this.thanhTienTemplate },

    ];
  }

  backWithSearch() {
    let hasLocalSearchString = false;
    if (this.route.snapshot.queryParams.holdQuery != undefined) {
      let holdQuery = this.route.snapshot.queryParams.holdQuery;
      if (holdQuery != null && holdQuery) {
        var additionalSearchString = LocalStorageHelper.getItem<string>("additionalSearchStringDanhSachYeuCauTraVatTu");
        if (additionalSearchString != null) {
          this.danhSachYeuCauTraVatTu = JSON.parse(additionalSearchString);

          if (this.danhSachYeuCauTraVatTu.RangeFromDate.TuNgay != null
            && this.danhSachYeuCauTraVatTu.RangeFromDate.TuNgay != 'null' && this.danhSachYeuCauTraVatTu.RangeFromDate.TuNgay != '') {
            this.danhSachYeuCauTraVatTu.RangeFromDate.startDate = new Date(this.danhSachYeuCauTraVatTu.RangeFromDate.startDate);
          }
          else {
            this.danhSachYeuCauTraVatTu.RangeFromDate.startDate = null;
          }

          if (this.danhSachYeuCauTraVatTu.RangeFromDate.DenNgay != null
            && this.danhSachYeuCauTraVatTu.RangeFromDate.DenNgay != 'null' && this.danhSachYeuCauTraVatTu.RangeFromDate.DenNgay != '') {
            this.danhSachYeuCauTraVatTu.RangeFromDate.endDate = new Date(this.danhSachYeuCauTraVatTu.RangeFromDate.endDate);
          } else {
            this.danhSachYeuCauTraVatTu.RangeFromDate.endDate = null;
          }

          this.addtionStringDefault = additionalSearchString;
          this.gridChild.additionalSearchString = additionalSearchString;
          hasLocalSearchString = true;

        }
      }
    }
    else {
      this.addtionStringDefault = JSON.stringify(this.danhSachYeuCauTraVatTu);
    }
    if (!hasLocalSearchString) {
      LocalStorageHelper.removeItem("additionalSearchStringDanhSachYeuCauTraVatTu");
    }
  }

  onKey(event: any) {
    if (event.key == "Enter") {
      this.timKiem();
    }
  }

  clearSearch() {
    this.danhSachYeuCauTraVatTu.SearchString = null;
    this.gridChild.search();
  }

  searchChanges(event: any) {
    var self = this;
    if (event != undefined && (event == null || event == "")) {
      self.gridChild.searchString = null;
      self.timKiem();
    }
  }

  taoPhieuMuaVatTu() {
    if (this.authService.hasPermission(this.documentType, SecurityOperation.Add)) {
      this.router.navigate(["/nhap-xuat/vat-tu/tu-benh-nhan/yeu-cau-tra-vat-tu/them"]);
    }
    else {
      this.notificationService.showError(SystemMessage.UnAuthorizedMessage);
    }
  }

  timKiem() {
    this.location.replaceState(this.baseRoute + '?holdQuery=true');

    if (this.danhSachYeuCauTraVatTu.RangeFromDate != null && this.danhSachYeuCauTraVatTu.RangeFromDate.startDate != null) {
      this.danhSachYeuCauTraVatTu.RangeFromDate.TuNgay = CommonService.formatDateTime(this.danhSachYeuCauTraVatTu.RangeFromDate.startDate, "mm/dd/yyyy");
    }
    else {
      this.danhSachYeuCauTraVatTu.RangeFromDate.TuNgay = null;
    }
    if (this.danhSachYeuCauTraVatTu.RangeFromDate != null && this.danhSachYeuCauTraVatTu.RangeFromDate.endDate != null) {
      this.danhSachYeuCauTraVatTu.RangeFromDate.DenNgay = CommonService.formatDateTime(this.danhSachYeuCauTraVatTu.RangeFromDate.endDate, "mm/dd/yyyy");
    }
    else {
      this.danhSachYeuCauTraVatTu.RangeFromDate.DenNgay = null;
    }

    var queryString = JSON.stringify(this.danhSachYeuCauTraVatTu);
    this.gridChild._additionalSearchString = queryString;
    LocalStorageHelper.setItem("additionalSearchStringDanhSachYeuCauTraVatTu", queryString);
    this.gridChild.search();
  }


  chinhSua(id: number) {
    if (this.authService.hasPermission(this.documentType, SecurityOperation.Update)) {
      this.router.navigate(["/nhap-xuat/vat-tu/tu-benh-nhan/yeu-cau-tra-vat-tu/chi-tiet/" + id]);
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
        Message: "Bạn có chắc chắn muốn xóa phiếu trả thuốc này không ?",
      },
    }).afterClosed().subscribe((res) => {
      if (res == "Yes") {
        if (self.authService.hasPermission(self.documentType, SecurityOperation.Delete)) {
          this.apiService.post<any>("YeuCauTraVatTuTuBenhNhan/XoaPhieuTraVatTu?id=" + id).subscribe(
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

  trangThaiCheckBox(event: any, tinhTrang: any) {
    if (tinhTrang == "choduyet") {
      this.danhSachYeuCauTraVatTu.ChoDuyet = event;
    }
    if (tinhTrang == "daduyet") {
      this.danhSachYeuCauTraVatTu.DaDuyet = event;
    }
    this.timKiem();
  }

  changeNgayBatDauRange() {
    this.timKiem();
  }

  blur() {
    this.timKiem();
  }

  xuatExcel() {
    this.dialog.open(LoadingComponent, {
      disableClose: true,
      width: '200px',
      height: '90px',
      data: { Title: 'Đang xuất excel...' }
    });
    if (this.authService.hasPermission(this.documentType, SecurityOperation.Process)) {
      this.apiService.postExportExcel<string>("YeuCauTraVatTuTuBenhNhan/ExportPhieuTraVatTuTuBenhNhanNoiTru", this.gridChild._gridQueryInfo).subscribe(res => {
        let dateTimeNow = new Date();
        CommonService.downLoadFile(res, "application/vnd.ms-excel", "DSPhieuTraVatTuTuBenhNhanNoiTru" + dateTimeNow.getFullYear() + ".xlsx");
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
    // var self = this;
    // let objIn = {
    //   YeuCauTraVatTuTuBenhNhanId: id,
    //   HostingName: window.location.protocol + "//" + window.location.host,
    // };
    // self.loadingPage();
    // self.apiService.post<any>("YeuCauTraVatTuTuBenhNhan/InPhieuYeuCauTraVatTuTuBenhNhan", objIn).subscribe(
    //   resData => {
    //     self.closePopupLoadingData();
    //     if (resData != undefined && resData != null) {
    //       self.dialog.open(PhieuTraVatTuTuBenhNhanPopupComponent, {
    //         disableClose: true,
    //         width: "1200px",
    //         data: resData,
    //       }).afterClosed().subscribe(() => {
    //       });
    //     }

    //   }, (err: ApiError) => {
    //     this.validationErrors = err.ValidationErrors;
    //     if (err.Message != "Validation Failed") {
    //       this.notificationService.showError(err.Message);
    //     }
    //     self.closePopupLoadingData();
    //   }
    // )
    this.dialog.open(InPhieuHoanTraCompoment, {
      disableClose: true,
      width: "1200px",
      data: { Title: "PHIẾU TRẢ THUỐC/ VẬT TƯ Y TẾ", YeuCauHoanTraDuocPhamVatTuId: id, LaDuocPham: false, LaTuTruc: false , DuocDuyet: false},
    }).afterClosed().subscribe((result) => {
    });
  }
}