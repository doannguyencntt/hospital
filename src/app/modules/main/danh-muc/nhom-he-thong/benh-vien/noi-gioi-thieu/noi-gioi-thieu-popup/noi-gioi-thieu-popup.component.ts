import { Component, Inject, OnInit, TemplateRef, ViewChild } from '@angular/core';
import icClose from '@iconify/icons-ic/twotone-close';
import icFilterList from '@iconify/icons-ic/twotone-filter-list';
import icFileExcel from "@iconify/icons-fa-solid/file-excel";
import icSearch from "@iconify/icons-ic/twotone-search";
import icDelete from '@iconify/icons-ic/twotone-delete';
import icAdd from '@iconify/icons-ic/twotone-add';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import { FormControl } from '@angular/forms';
import { GridComponent } from 'src/app/shared/component/grid/grid.component';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material';
import { AuthService } from 'src/app/core/services/auth.service';
import { NotificationService } from 'src/app/core/services/notification.service';
import { ApiService } from 'src/app/core/services/api.service';
import { LoadingComponent } from 'src/app/shared/component/dialogs/loading/loading.component';
import { SecurityOperation } from 'src/app/shared/enum/security-operation.enum';
import { ConfirmComponent } from 'src/app/shared/component/dialogs/confirm/confirm.component';
import { SystemMessage } from 'src/app/shared/configdata/system-message';
import { CommonService } from 'src/app/core/utilities/common.helper';
import { ApiError } from 'src/app/shared/models/api-error.model';
import { DonViMau } from '../noi-gioi-thieu.model';
import icDone from '@iconify/icons-ic/twotone-done';
@Component({
  selector: 'app-noi-gioi-thieu-popup',
  templateUrl: './noi-gioi-thieu-popup.component.html',
  styleUrls: ['./noi-gioi-thieu-popup.component.scss']
})
export class NoiGioiThieuPopupComponent implements OnInit {

  donViMau: DonViMau = new DonViMau();
  isCreate = false;
  icDone = icDone;
  icClose = icClose;
  icSearch = icSearch;
  icFileExcel = icFileExcel;
  icFilterList = icFilterList;
  icDelete = icDelete;
  icAdd = icAdd;
  documentType: DocumentType = DocumentType.DanhMucNoiGioiThieu;
  searchString: string = null;
  searchCtrl = new FormControl();
  validationErrors: any;
  popupLoadingData: any;
  popupDeletingData: any;
  isShow: boolean = false;
  gridColumns: any[] = [];
  _gridColumnsFilter: any[] = [];
  _isCheckColumnFilter: boolean = true;
  urlGetData = "NoiGioiThieu/GetDataForGridDonViMauAsync";
  urlGetTotalPage = "NoiGioiThieu/GetTotalPageForGridDonViMauAsync";
  @ViewChild('maTemplate', { static: true }) maTemplate: TemplateRef<any>;
  @ViewChild('actionTemplate', { static: true }) actionTemplate: TemplateRef<any>;
  @ViewChild('trangThaiTemplate', { static: true }) trangThaiTemplate: TemplateRef<any>;

  @ViewChild("grid", { static: true }) grid: GridComponent;
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private authService: AuthService,
    private notificationService: NotificationService,
    private apiService: ApiService,
    private dialog: MatDialog
  ) { }

  ngOnInit() {
    this.gridColumns = [
      { Field: "Ma", Title: "Mã", Width: 80, Sortable: true, Template: this.maTemplate },
      { Field: "Ten", Title: "Tên", Width: 260, Sortable: true },
      // { Field: "IsDefault", Title: "Trạng Thái", Width: 200, Template: this.trangThaiTemplate },
      { Field: "Action", Title: "", Width: 40, Sortable: false, Template: this.actionTemplate }
    ];
    this._gridColumnsFilter = this.gridColumns.filter(p => p.Title != '');

  }
  onKey(event: any) {
    if (event.key == "Enter") {
      this.grid.searchString = this.searchString;
      this.grid.search();
    }
  }

  searchChange(event: any) {
    if (event == null || event == "") {
      this.clearSearch();
    }
  }

  clearSearch() {
    this.searchString = null;
    this.grid.searchString = null;
    this.grid.search();
  }

  popupSavingData: any = null;
  savingPage() {
    this.popupSavingData = this.dialog.open(LoadingComponent, {
      disableClose: true,
      width: "200px",
      height: "90px",
      data: { Title: "Đang lưu dữ liệu..." },
    });
  }

  closepopupSavingData() {
    if (this.popupSavingData != undefined && this.popupSavingData != null) {
      this.popupSavingData.close();
    }
  }

  popupAddingData: any = null;
  addingPage() {
    this.popupAddingData = this.dialog.open(LoadingComponent, {
      disableClose: true,
      width: "200px",
      height: "90px",
      data: { Title: "Đang thêm dữ liệu..." },
    });
  }

  closePopupAddingData() {
    if (this.popupAddingData != undefined && this.popupAddingData != null) {
      this.popupAddingData.close();
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

  deletingPage() {
    this.popupDeletingData = this.dialog.open(LoadingComponent, {
      disableClose: true,
      width: "200px",
      height: "90px",
      data: { Title: "Đang xóa dữ liệu..." },
    });
  }

  closePopupDeletingData() {
    if (this.popupDeletingData != undefined && this.popupDeletingData != null) {
      this.popupDeletingData.close();
    }
  }

  them() {
    this.validationErrors = [];
    this.donViMau = new DonViMau();
    this.isShow = true;
    this.isCreate = true;
  }

  luu() {
    if (this.isCreate) {
      if (this.authService.hasPermission(this.documentType, SecurityOperation.Add)) {
        this.addingPage();
        this.apiService.post<any>("NoiGioiThieu/ThemDonViMau", this.donViMau).subscribe(
          () => {
            this.closePopupAddingData();
            let mess = CommonService.format(SystemMessage.ActionSuccessfully, ["Thêm"]);
            this.notificationService.showSuccess(mess);
            this.grid.search();
            this.huy();
          },
          (err: ApiError) => {
            this.validationErrors = err.ValidationErrors;
            if (err.Message != "Validation Failed") {
              this.notificationService.showError(err.Message);
            }
            this.closePopupAddingData();
          });
      }
      else {
        this.notificationService.showError(SystemMessage.UnAuthorizedMessage);
      }
    } else {
      if (this.authService.hasPermission(this.documentType, SecurityOperation.Update)) {
        if (this.isDefault) {
          this.notificationService.showError("Dữ liệu này không thể sửa (dữ liệu mặc định).");
        } else {
          this.savingPage();
          this.apiService.post<any>("NoiGioiThieu/CapNhatDonViMau", this.donViMau).subscribe(
            () => {
              this.closepopupSavingData();
              let mess = CommonService.format(SystemMessage.ActionSuccessfully, ["Lưu"]);
              this.notificationService.showSuccess(mess);
              this.grid.search();
              this.huy();
            },
            (err: ApiError) => {
              this.validationErrors = err.ValidationErrors;
              if (err.Message != "Validation Failed") {
                this.notificationService.showError(err.Message);
              }
              this.closepopupSavingData();
            });
        }
      }
      else {
        this.notificationService.showError(SystemMessage.UnAuthorizedMessage);
      }
    }
  }

  huy() {
    this.validationErrors = [];
    this.donViMau = new DonViMau();
    this.isShow = false;
    this.isCreate = false;
  }
  isDefault: boolean = false;
  xem(id: number, isDefault: boolean) {
    this.isDefault = isDefault;
    if (this.authService.hasPermission(this.documentType, SecurityOperation.Update)) {
      this.loadingPage();
      this.apiService.get<any>("NoiGioiThieu/GetDonViMau?id=" + id)
        .subscribe((resultData) => {
          this.donViMau = resultData;
          this.isShow = true;
          this.closePopupLoadingData();
        },
          (err: ApiError) => {
            if (err.Message != "Validation Failed") {
              this.notificationService.showError(err.Message);
            }
            this.closePopupLoadingData();
          }
        );
    }
    else {
      this.notificationService.showError(SystemMessage.UnAuthorizedMessage);
    }
  }

  xoa(id: number, isDefault: boolean) {
    if (isDefault) {
      this.notificationService.showError("Dữ liệu này không thể xóa (dữ liệu mặc định).");
    } else {
      this.dialog.open(ConfirmComponent, {
        disableClose: false,
        width: '400px',
        data: { Title: "Xác nhận", Message: CommonService.format(SystemMessage.MessConfirm, ["xóa"]) }
      }).afterClosed().subscribe(result => {
        if (result === 'Yes') {
          if (this.authService.hasPermission(this.documentType, SecurityOperation.Delete)) {
            this.deletingPage();
            this.apiService.post<any>("NoiGioiThieu/XoaDonViMau?id=" + id)
              .subscribe(() => {
                this.notificationService.showSuccess(CommonService.format(SystemMessage.ActionSuccessfully, ["Xóa"]));
                this.huy();
                this.grid.search();
                this.closePopupDeletingData();
              },
                (err: ApiError) => {
                  this.validationErrors = err.ValidationErrors;
                  if (err.Message != "Validation Failed") {
                    this.notificationService.showError(err.Message);
                  }
                  this.closePopupDeletingData();
                }
              );
          }
          else {
            this.notificationService.showError(SystemMessage.UnAuthorizedMessage);
          }
        }
      });
    }
  }
}
