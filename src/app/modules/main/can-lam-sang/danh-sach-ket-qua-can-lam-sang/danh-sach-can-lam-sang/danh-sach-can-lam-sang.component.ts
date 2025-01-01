import {
  Component,
  OnInit,
  ViewChild,
  TemplateRef,
  HostListener,
} from "@angular/core";
import { CanLamSangTimKiem } from "../can-lam-sang";
import { DocumentType } from "src/app/shared/enum/document-type.enum";
import { MatDialog } from "@angular/material";
import { GridComponent } from "src/app/shared/component/grid/grid.component";
import { ActivatedRoute, Router } from "@angular/router";
import icSearch from "@iconify/icons-ic/twotone-search";
import { CommonService } from "src/app/core/utilities/common.helper";
import { FormControl } from "@angular/forms";
import { LocalStorageHelper } from "src/app/core/utilities/local-storage.helper";
import { ApiService } from "src/app/core/services/api.service";
import { NotificationService } from "src/app/core/services/notification.service";
import { SystemMessage } from "src/app/shared/configdata/system-message";
import { LoadingComponent } from "src/app/shared/component/dialogs/loading/loading.component";
import { AuthService } from "src/app/core/services/auth.service";
import { SecurityOperation } from "src/app/shared/enum/security-operation.enum";
import icFileExcel from "@iconify/icons-fa-solid/file-excel";
import { Location } from '@angular/common';
import { SortDescriptor } from '@progress/kendo-data-query';
import icFilterList from '@iconify/icons-ic/twotone-filter-list';
import icBlock from "@iconify/icons-ic/twotone-block";
import { ApiError } from "src/app/shared/models/api-error.model";
import { ConfirmComponent } from "src/app/shared/component/dialogs/confirm/confirm.component";
@Component({
  selector: "app-danh-sach-can-lam-sang",
  templateUrl: "./danh-sach-can-lam-sang.component.html",
  styleUrls: ["./danh-sach-can-lam-sang.component.scss"],
})

export class DanhSachCanLamSangComponent implements OnInit {

  icSearch = icSearch;
  icFileExcel = icFileExcel;
  icFilterList = icFilterList;
  icBlock = icBlock;
  searchCtrl = new FormControl();
  documentType: DocumentType;
  gridColumns: any;
  _gridColumnsFilter: any[] = [];
  _isCheckColumnFilter: boolean = true;
  strAdditionalSearchString: string = "";
  IsFirstLoad: boolean = true;
  validationErrors: any;
  baseRoute: string = "/ket-qua-cdha-tdcn";
  timKiemObj: CanLamSangTimKiem = new CanLamSangTimKiem();
  modelQRCode: any;
  isScanF1: boolean = false;
  popupCancelingData: any;

  @ViewChild("gridChild", { static: true }) gridChild: GridComponent;
  @ViewChild("maYeuCauTiepNhanTemplate", { static: true }) maYeuCauTiepNhanTemplate: TemplateRef<any>;
  @ViewChild("ngayChiDinhTemplate", { static: true }) ngayChiDinhTemplate: TemplateRef<any>;
  @ViewChild("trangThaiTemplate", { static: true }) trangThaiTemplate: TemplateRef<any>;
  @ViewChild("actionTemplate", { static: true }) actionTemplate: TemplateRef<any>;

  sortCanLamSang: SortDescriptor[] =
  [{
    field: "NgayChiDinh",
    dir: "desc"
  }, {
    field: "TrangThai",
    dir: "asc"
  }]

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private dialog: MatDialog,
    private apiService: ApiService,
    private authService: AuthService,
    private notificationService: NotificationService,
    private location: Location
  ) { }

  ngOnInit() {
    this.documentType = DocumentType.CanLamSang;
    let dateNow = new Date();
  
    this.timKiemObj.TuNgayDenNgay.startDate = new Date(dateNow.getFullYear(), dateNow.getMonth(), dateNow.getDate());
    this.timKiemObj.TuNgayDenNgay.endDate = new Date(dateNow.getFullYear(), dateNow.getMonth(), dateNow.getDate(), 23, 59, 59, 59);

    if (this.timKiemObj.TuNgayDenNgay != null && this.timKiemObj.TuNgayDenNgay.startDate != null) {
      this.timKiemObj.TuNgayDenNgay.TuNgay = CommonService.formatDateTime(this.timKiemObj.TuNgayDenNgay.startDate, "mm/dd/yyyy");
    }
    else {
      this.timKiemObj.TuNgayDenNgay.TuNgay = null;
    }
    if (this.timKiemObj.TuNgayDenNgay != null && this.timKiemObj.TuNgayDenNgay.endDate != null) {
      this.timKiemObj.TuNgayDenNgay.DenNgay = CommonService.formatDateTime(this.timKiemObj.TuNgayDenNgay.endDate, "mm/dd/yyyy");
    }
    else {
      this.timKiemObj.TuNgayDenNgay.DenNgay = null;
    }

    this.timKiemObj.TrangThai.ChoKetQua = true;
    let queryString = JSON.stringify(this.timKiemObj);
    this.gridChild.additionalSearchString = this.strAdditionalSearchString = queryString;

    let hasLocalSearchString = false;
    if (this.route.snapshot.queryParams.holdQuery != undefined) {
      let holdQuery = this.route.snapshot.queryParams.holdQuery;
      if (holdQuery != null && holdQuery) {
        var additionalSearchString = LocalStorageHelper.getItem<string>("additionalSearchStringDanhSachKetQuaCDHATDCN");
        if (additionalSearchString != null) {
          this.timKiemObj = JSON.parse(additionalSearchString);

          if (this.timKiemObj.TuNgayDenNgay.TuNgay != null && this.timKiemObj.TuNgayDenNgay.TuNgay != 'null' && this.timKiemObj.TuNgayDenNgay.TuNgay != '') {
            this.timKiemObj.TuNgayDenNgay.startDate = new Date(this.timKiemObj.TuNgayDenNgay.startDate);
          }
          if (this.timKiemObj.TuNgayDenNgay.DenNgay != null && this.timKiemObj.TuNgayDenNgay.DenNgay != 'null' && this.timKiemObj.TuNgayDenNgay.DenNgay != '') {
            this.timKiemObj.TuNgayDenNgay.endDate = new Date(this.timKiemObj.TuNgayDenNgay.endDate);
          }

          if (this.timKiemObj.ThucHienTuNgayDenNgay.TuNgay != null && this.timKiemObj.ThucHienTuNgayDenNgay.TuNgay != 'null' && this.timKiemObj.ThucHienTuNgayDenNgay.TuNgay != '') {
            this.timKiemObj.ThucHienTuNgayDenNgay.startDate = new Date(this.timKiemObj.ThucHienTuNgayDenNgay.startDate);
          }
          if (this.timKiemObj.ThucHienTuNgayDenNgay.DenNgay != null && this.timKiemObj.ThucHienTuNgayDenNgay.DenNgay != 'null' && this.timKiemObj.ThucHienTuNgayDenNgay.DenNgay != '') {
            this.timKiemObj.ThucHienTuNgayDenNgay.endDate = new Date(this.timKiemObj.ThucHienTuNgayDenNgay.endDate);
          }

          this.gridChild.additionalSearchString = this.strAdditionalSearchString = additionalSearchString;
          hasLocalSearchString = true;
        }
      }
    }
    if (!hasLocalSearchString) {
      //this.gridChild.additionalSearchString = null;
      LocalStorageHelper.removeItem("additionalSearchStringDanhSachKetQuaCDHATDCN");
    }

    this.gridColumns = [
      { Field: "MaYeuCauTiepNhan", Title: "Mã TN", Width: 60, Sortable: true, Template: this.maYeuCauTiepNhanTemplate, },
      { Field: "HoTen", Title: "Họ tên", Width: 120, Sortable: true },
      { Field: "GioiTinh", Title: "Giới Tính", Width: 60, Sortable: true },
      { Field: "NgayThangNam", Title: "NĂM SINH", Width: 80, Sortable: true },               
      { Field: "ChiDinh", Title: "Chỉ định", Width: 150, Sortable: true },
      { Field: "ChuanDoanDisplay", Title: "Chuẩn đoán", Width: 90, Sortable: true },
      { Field: "BacSiCDDisplay", Title: "Bác sĩ CĐ", Width: 80, Sortable: true }, 
      { Field: "KetLuanDisplay", Title: "Kết Luận", Width: 160, Sortable: true }, 
      { Field: "BacSiKetLuanDisplay", Title: "Bác sĩ KL", Width: 80, Sortable: true }, 
      { Field: "KyThuatVien1Display", Title: "KTV1", Width: 80, Sortable: true }, 
      { Field: "DoiTuong", Title: "Đối tượng", Width: 60, Sortable: true },
      { Field: "TrangThai", Title: "Trạng thái", Width: 80, Sortable: true, Template: this.trangThaiTemplate }, 
      { Field: "NgayChiDinh", Title: "Ngày chỉ định", Width: 80, Sortable: true, Template: this.ngayChiDinhTemplate },
      { Field: "NgayThucHienDisplay", Title: "Ngày thực hiện", Width: 120, Sortable: true },    
      { Field: "NoiChiDinh", Title: "Nơi chỉ định", Width: 120, Sortable: true },
      { Field: "MaBN", Title: "Mã NB", Width: 60, Sortable: true },
      { Field: "SoBenhAn", Title: "Số BA", Width: 60, Sortable: true }
    ];
    this._gridColumnsFilter = this.gridColumns.filter(p => p.Title != '');
  }

  timeoutSearchChange: any;
  searchChange(event) {
    var self = this;
    if (event != null && typeof event == "string" && event.endsWith("@")) {
      self.timeoutSearchChange = setTimeout(function () {
        self.modelQRCode = event;
        self.changeQR(self.modelQRCode);
      }, 10);
    }
    else if ((event == null || event == "") && this.strAdditionalSearchString != "" && !this.IsFirstLoad) {
      this.modelQRCode = null;
      this.timKiemNangCao();
    }
  }

  onKey(event: any) {
    if (event.key == "Enter") {
      this.timKiemNangCao();
    }
  }

  clearSearch() {
    this.timKiemObj.SearchString = null;
    this.gridChild.searchString = null;
    this.timKiemNangCao();
  }

  timKiemNangCao() {
    this.location.replaceState(this.baseRoute + '?holdQuery=true');

    if (this.timKiemObj.TuNgayDenNgay != null && this.timKiemObj.TuNgayDenNgay.startDate != null) {
      this.timKiemObj.TuNgayDenNgay.TuNgay = CommonService.formatDateTime(this.timKiemObj.TuNgayDenNgay.startDate, "mm/dd/yyyy");
    }
    else {
      this.timKiemObj.TuNgayDenNgay.TuNgay = null;
    }
    if (this.timKiemObj.TuNgayDenNgay != null && this.timKiemObj.TuNgayDenNgay.endDate != null) {
      this.timKiemObj.TuNgayDenNgay.DenNgay = CommonService.formatDateTime(this.timKiemObj.TuNgayDenNgay.endDate, "mm/dd/yyyy");
    }
    else {
      this.timKiemObj.TuNgayDenNgay.DenNgay = null;
    }

    if (this.timKiemObj.ThucHienTuNgayDenNgay != null && this.timKiemObj.ThucHienTuNgayDenNgay.startDate != null) {
      this.timKiemObj.ThucHienTuNgayDenNgay.TuNgay = CommonService.formatDateTime(this.timKiemObj.ThucHienTuNgayDenNgay.startDate, "mm/dd/yyyy");
    }
    else {
      this.timKiemObj.ThucHienTuNgayDenNgay.TuNgay = null;
    }
    if (this.timKiemObj.ThucHienTuNgayDenNgay != null && this.timKiemObj.ThucHienTuNgayDenNgay.endDate != null) {
      this.timKiemObj.ThucHienTuNgayDenNgay.DenNgay = CommonService.formatDateTime(this.timKiemObj.ThucHienTuNgayDenNgay.endDate, "mm/dd/yyyy");
    }
    else {
      this.timKiemObj.ThucHienTuNgayDenNgay.DenNgay = null;
    }

    let queryString = JSON.stringify(this.timKiemObj);
    this.gridChild._additionalSearchString = this.strAdditionalSearchString = queryString;

    LocalStorageHelper.setItem("additionalSearchStringDanhSachKetQuaCDHATDCN", queryString);
    this.gridChild.search();
  }

  changeTrangThai() {
    var self = this;
    setTimeout(function () {
      self.timKiemNangCao();
    }, 50);
  }

  onDataBound(event) {
    if (this.IsFirstLoad) {
      this.IsFirstLoad = false;
    }
    else {
      if (event != undefined && event != null && event.Data.length == 1) {
        // this.view(event.Data[0].Id);
      }
    }

  }

  view(id: any) {
    if (this.authService.hasPermission(this.documentType, SecurityOperation.Update)) {
      this.router.navigateByUrl("/ket-qua-cdha-tdcn/chi-tiet/" + id);
    } else {
      this.notificationService.showError(SystemMessage.UnAuthorizedMessage);
    }
  }

  QuetMaQRCodeClick() {
    let elementBarcode: HTMLElement = document.getElementById(
      "barcodeActive"
    ) as HTMLElement;
    if (elementBarcode != undefined) {
      elementBarcode.click();
    }
  }

  changeQR(event) {
    if (event != null && typeof event == "string" && event.endsWith("@")) {
      // this.modelQRCode = event;
      var dataTimKiem = event.split("|");
      if (dataTimKiem.length > 1) {
        this.timKiemObj.SearchString = dataTimKiem[0];
      } else {
        this.timKiemObj.SearchString = event.slice(0, -1);
      }
      this.timKiemNangCao();
    } else {
      this.notificationService.showError("Không tìm thấy thông tin cần tìm.");
    }
    this.isScanF1 = false;
  }

  exportExcel() {
    const self = this;
    if (self.authService.hasPermission(self.documentType, SecurityOperation.Process)
    ) {
      self.showPopupLoadingData();
      self.apiService
        .postExportExcel<string>("CanLamSang/ExportCanLamSang", this.gridChild._gridQueryInfo)
        .subscribe(
          (resultData) => {
            self.closePopupLoadingData();
            const dateTimeNow = new Date();
            CommonService.downLoadFile(resultData, "application/vnd.ms-excel", "KetQuaCDHATDCN" + dateTimeNow.getFullYear() + ".xlsx");
          },
          (err: any) => {
            self.notificationService.showError(err.Message);
            self.closePopupLoadingData();
          }
        );
    } else {
      self.notificationService.showError(SystemMessage.UnAuthorizedMessage);
    }
  }

  showPopupLoadingData() {
    this.dialog.open(LoadingComponent, {
      disableClose: true,
      width: "200px",
      height: "90px",
      data: { Title: "Đang xuất excel..." },
    });
  }

  closePopupLoadingData() {
    this.dialog.closeAll();
  } 

  showPopupCancelingData() {
    this.popupCancelingData = this.dialog.open(LoadingComponent, {
      disableClose: true,
      width: "200px",
      height: "90px",
      data: { Title: "Đang hủy kết quả..." },
    });
  }

  closePopupCancelingData() {
    if (this.popupCancelingData != undefined && this.popupCancelingData != null) {
      this.popupCancelingData.close();
    }
  }

  huyKetQua(id: number) {
    var self = this;
    self.dialog.open(ConfirmComponent, {
      disableClose: false,
      width: "500px",
      data: {
        Title: "Xác nhận",
        Message: "Bạn có chắc chắn muốn hủy kết quả này không ?",
      },
    }).afterClosed().subscribe((res) => {
      if (res == "Yes") {
        if (self.authService.hasPermission(self.documentType, SecurityOperation.Update)) {
          self.showPopupCancelingData();
          self.apiService.post<any>("CanLamSang/HuyKetQuaCDHA?id=" + id).subscribe(
            () => {
              self.notificationService.showSuccess(CommonService.format(SystemMessage.ActionSuccessfully, ["Hủy"]));
              self.timKiemNangCao();
              self.closePopupCancelingData();
            },
            (err: ApiError) => {
              self.validationErrors = err.ValidationErrors;
              if (err.Message != "Validation Failed") {
                self.notificationService.showError(err.Message);
              }
              self.closePopupCancelingData();
            });
        } else {
          self.notificationService.showError(SystemMessage.UnAuthorizedMessage);
        }
      }
    })
  }

  @HostListener("document:keydown", ["$event"])
  keyEvent(event: KeyboardEvent) {
    // scan
    if (event.keyCode == 81 && event.ctrlKey && this.isScanF1 != true) {
      this.isScanF1 = true;
      event.preventDefault();
      this.QuetMaQRCodeClick();
    }
  }
}
