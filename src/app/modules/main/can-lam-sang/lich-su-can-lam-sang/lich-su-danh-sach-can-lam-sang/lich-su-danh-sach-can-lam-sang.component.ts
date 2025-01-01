import { Component, OnInit, ViewChild, TemplateRef } from "@angular/core";
import { DocumentType } from "src/app/shared/enum/document-type.enum";
import { GridComponent } from "src/app/shared/component/grid/grid.component";
import { ActivatedRoute, Router } from "@angular/router";
import icSearch from "@iconify/icons-ic/twotone-search";
import { CommonService } from "src/app/core/utilities/common.helper";
import icCancel from "@iconify/icons-ic/cancel";
import icicclose from "@iconify/icons-ic/twotone-close";
import { FormControl } from "@angular/forms";
import { CanLamSangLichSuTimKiem } from "../lich-su-can-lam-sang";
import { AuthService } from 'src/app/core/services/auth.service';
import { SecurityOperation } from 'src/app/shared/enum/security-operation.enum';
import { ApiService } from 'src/app/core/services/api.service';
import { NotificationService } from 'src/app/core/services/notification.service';
import { SystemMessage } from 'src/app/shared/configdata/system-message';
import { LoadingComponent } from 'src/app/shared/component/dialogs/loading/loading.component';
import icFileExcel from "@iconify/icons-fa-solid/file-excel";
import { LocalStorageHelper } from 'src/app/core/utilities/local-storage.helper';
import { Location } from '@angular/common';
import icFilterList from '@iconify/icons-ic/twotone-filter-list';
import { MatDialog } from "@angular/material";
@Component({
  selector: "app-lich-su-danh-sach-can-lam-sang",
  templateUrl: "./lich-su-danh-sach-can-lam-sang.component.html",
  styleUrls: ["./lich-su-danh-sach-can-lam-sang.component.scss"],
})
export class LichSuDanhSachCanLamSangComponent implements OnInit {

  icSearch = icSearch;
  icCancel = icCancel;
  icicclose = icicclose;
  icFileExcel = icFileExcel;
  icFilterList = icFilterList;

  timKiemObj: CanLamSangLichSuTimKiem = new CanLamSangLichSuTimKiem();
  searchCtrl = new FormControl();
  documentType: DocumentType;
  gridColumns: any;
  _gridColumnsFilter: any[] = [];
  _isCheckColumnFilter: boolean = true;
  strAdditionalSearchString: string = "";
  IsFirstLoad: boolean = true;

  baseRoute: string = "/lich-su-ket-qua-cdha-tdcn";
  searchString: string;

  @ViewChild(GridComponent, { static: true }) gridChild: GridComponent;
  @ViewChild("maYeuCauTiepNhanTemplate", { static: true }) maYeuCauTiepNhanTemplate: TemplateRef<any>;

  constructor(
    private router: Router,
    private authService: AuthService,
    private dialog: MatDialog,
    private apiService: ApiService,
    private notificationService: NotificationService,
    private route: ActivatedRoute,
    private location: Location,
  ) { }

  ngOnInit() {
    this.documentType = DocumentType.CanLamSang;

    let hasLocalSearchString = false;
    if (this.route.snapshot.queryParams.holdQuery != undefined) {
      let holdQuery = this.route.snapshot.queryParams.holdQuery;
      if (holdQuery != null && holdQuery) {
        var additionalSearchString = LocalStorageHelper.getItem<string>("additionalSearchStringDanhSachLichSuKetQuaCDHATDCN");
        if (additionalSearchString != null) {
          this.timKiemObj = JSON.parse(additionalSearchString);
          if(this.timKiemObj.TuNgayDenNgay.TuNgay != null && this.timKiemObj.TuNgayDenNgay.TuNgay != 'null' && this.timKiemObj.TuNgayDenNgay.TuNgay != '')
          {
            this.timKiemObj.TuNgayDenNgay.startDate = new Date(this.timKiemObj.TuNgayDenNgay.startDate);
          }
          if(this.timKiemObj.TuNgayDenNgay.DenNgay != null && this.timKiemObj.TuNgayDenNgay.DenNgay != 'null' && this.timKiemObj.TuNgayDenNgay.DenNgay != '')
          {
            this.timKiemObj.TuNgayDenNgay.endDate = new Date(this.timKiemObj.TuNgayDenNgay.endDate);
          }
          this.gridChild.additionalSearchString = this.strAdditionalSearchString = additionalSearchString;
          hasLocalSearchString = true;
        }
      }
    }
    if(!hasLocalSearchString)
    {
      this.gridChild.additionalSearchString = null;
      LocalStorageHelper.removeItem("additionalSearchStringDanhSachLichSuKetQuaCDHATDCN");
    }
    
    this.gridColumns = [
      { Field: "MaYeuCauTiepNhan", Title: "Mã TN", Width: 60, Sortable: true, Template: this.maYeuCauTiepNhanTemplate, },
      { Field: "SoBenhAn", Title: "Số BA", Width: 60, Sortable: true },
      { Field: "MaBN", Title: "Mã NB", Width: 60, Sortable: true },
      { Field: "HoTen", Title: "Họ tên", Width: 120, Sortable: true },
      { Field: "GioiTinh", Title: "Giới Tính", Width: 60, Sortable: true },
      { Field: "DiaChi", Title: "Địa chỉ", Width: 80, Sortable: true},
      { Field: "SoDienThoai", Title: "Số điện thoại", Width: 120, Sortable: true }
    ];

    this._gridColumnsFilter = this.gridColumns.filter(p => p.Title != '');
  }

  timeoutSearchChange: any;
  searchChange(event) {
    if ((event == null || event == "") && this.strAdditionalSearchString != "") {
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
    else
    {
      this.timKiemObj.TuNgayDenNgay.DenNgay = null;
    }
    let queryString = JSON.stringify(this.timKiemObj);
    this.gridChild._additionalSearchString = this.strAdditionalSearchString = queryString;

    LocalStorageHelper.setItem("additionalSearchStringDanhSachLichSuKetQuaCDHATDCN",queryString);
    this.gridChild.search();
  }

  view(id: any) {
    if (this.authService.hasPermission(this.documentType, SecurityOperation.View)) {
      this.router.navigate(["/lich-su-ket-qua-cdha-tdcn/chi-tiet/" + id,]);
    }
    else {
      this.notificationService.showError(SystemMessage.UnAuthorizedMessage);
    }
  }

  exportExcel() {
    const self = this;
    self.showPopupLoadingData();
    if (self.authService.hasPermission(self.documentType, SecurityOperation.Process)) {
      self.apiService
        .postExportExcel<string>("CanLamSang/ExportLichSuCanLamSang", this.gridChild._gridQueryInfo)
        .subscribe(
          (resultData) => {
            self.closePopupLoadingData();
            const dateTimeNow = new Date();
            CommonService.downLoadFile(
              resultData,
              "application/vnd.ms-excel",
              "LichSuKetQuaCDHATDCN" + dateTimeNow.getFullYear() + ".xlsx"
            );
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
}
