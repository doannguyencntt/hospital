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
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { AuthService } from 'src/app/core/services/auth.service';
import { NotificationService } from 'src/app/core/services/notification.service';
import { ApiService } from 'src/app/core/services/api.service';
import { LoadingComponent } from 'src/app/shared/component/dialogs/loading/loading.component';
import { SecurityOperation } from 'src/app/shared/enum/security-operation.enum';
import { ConfirmComponent } from 'src/app/shared/component/dialogs/confirm/confirm.component';
import { SystemMessage } from 'src/app/shared/configdata/system-message';
import { CommonService } from 'src/app/core/utilities/common.helper';
import { ApiError } from 'src/app/shared/models/api-error.model';
import { NoiDungMauKhamBenh } from '../../../kham-benh.model';

@Component({
  selector: 'app-noi-dung-mau-kham-benh-popup',
  templateUrl: './noi-dung-mau-kham-benh-popup.component.html',
  styleUrls: ['./noi-dung-mau-kham-benh-popup.component.scss']
})
export class NoiDungMauKhamBenhPopupComponent implements OnInit {

  icClose = icClose;
  icSearch = icSearch;
  icFileExcel = icFileExcel;
  icFilterList = icFilterList;  
  icDelete = icDelete;
  icAdd = icAdd;

  isShow: boolean = false;
  noiDungMau: NoiDungMauKhamBenh = new NoiDungMauKhamBenh();
  
  documentType: DocumentType = DocumentType.KhamBenh;
  searchString: string = null;
  searchCtrl = new FormControl();
  validationErrors: any;
  popupLoadingData: any;
  isChangeData: boolean = false;
  
  gridColumns: any[] = [];
  _gridColumnsFilter: any[] = [];
  _isCheckColumnFilter: boolean = true;
  urlGetData: string;
  urlGetTotalPage: string;

  @ViewChild('maTemplate', { static: true }) maTemplate: TemplateRef<any>;
  @ViewChild('actionTemplate', { static: true }) actionTemplate: TemplateRef<any>;

  @ViewChild("gridChild", { static: true }) gridChild: GridComponent;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private dialogRef: MatDialogRef<NoiDungMauKhamBenhPopupComponent>,
    private authService: AuthService,
    private notificationService: NotificationService,
    private apiService: ApiService,
    private dialog: MatDialog
  ) { }

  ngOnInit() {
    this.urlGetData = "KhamBenh/GetDataForGridNoiDungMauKhamBenh";
    this.urlGetTotalPage = "KhamBenh/GetTotalPageForGridNoiDungMauKhamBenh";
    this.documentType = this.data.documentType;

    this.gridColumns = [
      { Field: "Ma", Title: "Mã", Width: 80, Sortable: true, Template: this.maTemplate},
      { Field: "Ten", Title: "Tên", Width: 260, Sortable: true},
      { Field: "Action", Title: "", Width: 40, Sortable: false, Template: this.actionTemplate }
    ];

    this._gridColumnsFilter = this.gridColumns.filter(p => p.Title != '');
  }

  timeoutSearchChange: any;
  searchChange(event) {
    if (event == null || event == "") {
      this.gridChild.search();
    }
  }

  onKey(event: any) {
    if (event.key == "Enter") {
      this.gridChild.search();
    }
  }

  clearSearch() {
    this.searchString = null;
    this.gridChild.searchString = null;
    this.gridChild.search();
  }

  showPopupLoadingData() {
    if (this.popupLoadingData == undefined
      || this.popupLoadingData == null
      || this.popupLoadingData.openDialogs == undefined
      || (this.popupLoadingData.openDialogs != undefined && this.popupLoadingData.openDialogs.length == 0)) {
      this.popupLoadingData = this.dialog.open(LoadingComponent, {
        disableClose: true,
        width: "200px",
        height: "90px",
        data: { Title: "Đang tải dữ liệu..." },
      });
    }

  }

  closePopupLoadingData() {
    if (this.popupLoadingData != undefined && this.popupLoadingData != null) {
      this.popupLoadingData.close();
    }
  }

  huy(){
    this.validationErrors = [];
    this.noiDungMau = new NoiDungMauKhamBenh();
    this.isShow = false;
    this.isChangeData = false;
  }

  xem(id: number, loadingData: boolean = true) {
    if (this.authService.hasPermission(this.documentType, SecurityOperation.Update)) {
      if (this.isChangeData 
        && (this.noiDungMau.Id != 0
        || (this.noiDungMau.Ma != null && this.noiDungMau.Ma != "")
        || (this.noiDungMau.Ten != null && this.noiDungMau.Ten != "")
        || (this.noiDungMau.NoiDung != null && this.noiDungMau.NoiDung != ""))) {
        this.dialog
          .open(ConfirmComponent, {
            disableClose: false,
            width: "400px",
            data: {
              Title: "Xác nhận",
              Message: "Có dữ liệu chưa được lưu, bạn có muốn lưu dữ liệu không?",
            },
          })
          .afterClosed()
          .subscribe((result) => {
            if (result == "Yes") {
              this.luu(id, true);
            }
            else
            {
              this.xuLyGetData(id, loadingData);
            }
          });
      }
      else
      {
        this.xuLyGetData(id, loadingData);
      }
    }
    else {
      this.notificationService.showError(SystemMessage.UnAuthorizedMessage);
    }
  }

  xuLyGetData(id: number, loadingData: boolean = true) {
    if(loadingData)
    {
      this.showPopupLoadingData();
    }
    this.isChangeData = false;
    this.apiService
      .get<any>("KhamBenh/GetThongTinNoiDungMauKhamBenh?id=" + id)
      .subscribe(
        (resultData) => {
          this.noiDungMau = resultData;
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

  them() {
    if (this.authService.hasPermission(this.documentType, SecurityOperation.Add)) {
      if (this.isChangeData 
        && (this.noiDungMau.Id != 0
        || (this.noiDungMau.Ma != null && this.noiDungMau.Ma != "")
        || (this.noiDungMau.Ten != null && this.noiDungMau.Ten != "")
        || (this.noiDungMau.NoiDung != null && this.noiDungMau.NoiDung != ""))) {
        this.dialog
          .open(ConfirmComponent, {
            disableClose: false,
            width: "400px",
            data: {
              Title: "Xác nhận",
              Message: "Có dữ liệu chưa được lưu, bạn có muốn lưu dữ liệu không?",
            },
          })
          .afterClosed()
          .subscribe((result) => {
            if (result == "Yes") {
              this.luu(null, false, true);
            }
            else
            {
              this.taoMoiObjNoiDUngMau();
            }
          });
      }
      else
      {
        this.taoMoiObjNoiDUngMau();
      }
    }
    else {
      this.notificationService.showError(SystemMessage.UnAuthorizedMessage);
    }
  }

  taoMoiObjNoiDUngMau(){
    this.noiDungMau = new NoiDungMauKhamBenh();
    this.isShow = true;
    this.isChangeData = false;
  }

  xoa(id: number) {
    if (this.authService.hasPermission(this.documentType, SecurityOperation.Delete)) {
      this.dialog.open(ConfirmComponent, {
        disableClose: false,
        width: "400px",
        data: {
          Title: "Xác nhận",
          Message: CommonService.format(SystemMessage.MessConfirm, [
            "xóa",
          ]),
        },
      })
        .afterClosed()
        .subscribe((result) => {
          if (result == "Yes") {
            this.apiService.delete("KhamBenh/XoaThongTinNoiDungMauKhamBenh?id=" + id).subscribe(() => {
              this.gridChild.search();
              if (id == this.noiDungMau.Id) {
                this.huy();
              }
              this.notificationService.showSuccess(CommonService.format(SystemMessage.ActionSuccessfully, ['Xóa']));
            }, (err: ApiError) => {
              this.notificationService.showError(err.Message);
            });
          }
      });
    }
    else {
      this.notificationService.showError(SystemMessage.UnAuthorizedMessage);
    }
  }

  luu(id: number = null, isXem: boolean = false, isThem: boolean = false){
    this.showPopupLoadingData();
    if (this.authService.hasPermission(this.documentType, SecurityOperation.Update)) {
      this.apiService.post<any>("KhamBenh/LuuThongTinNoiDungMauKhamBenh", this.noiDungMau).subscribe(res => {
        this.notificationService.showSuccess(CommonService.format(SystemMessage.ActionSuccessfully, ["Lưu"]));
        if(isXem)
        {
          this.xuLyGetData(id, false);
        }
        else if(isThem){
          this.taoMoiObjNoiDUngMau();
        }
        else
        {
          this.huy();
        }
        this.gridChild.search();
        this.closePopupLoadingData();
      }, err => {
        this.validationErrors = err.ValidationErrors;
        if (err.Message != "Validation Failed") {
          this.notificationService.showError(err.Message);
        }
        this.closePopupLoadingData();
      })
    }
    else {
      this.notificationService.showError(SystemMessage.UnAuthorizedMessage);
    }
  }

  changeData(){
    this.isChangeData = true;
  }

  close()
  {
    this.dialogRef.close();
  }
}
