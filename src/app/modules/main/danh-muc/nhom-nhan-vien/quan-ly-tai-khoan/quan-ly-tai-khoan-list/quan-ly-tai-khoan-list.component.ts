import { Component, OnInit, ViewChild, TemplateRef } from '@angular/core';
import { SortDescriptor } from '@progress/kendo-data-query';
import { GridComponent } from 'src/app/shared/component/grid/grid.component';
import { WindowComponent } from '@progress/kendo-angular-dialog';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';

import icMoreHoriz from '@iconify/icons-ic/twotone-more-horiz';
import { ApiService } from 'src/app/core/services/api.service';
import { AuthService } from 'src/app/core/services/auth.service';
import { SecurityOperation } from 'src/app/shared/enum/security-operation.enum';
import { SystemMessage, TaiKhoanNguoiDungMessage } from 'src/app/shared/configdata/system-message';
import { NotificationService } from 'src/app/core/services/notification.service';
import { Router } from '@angular/router';
import { PopupChangePasswordComponent } from '../popup-change-password/popup-change-password.component';
import { MatDialog } from '@angular/material';
import { PopupChangeRoleComponent } from '../popup-change-role/popup-change-role.component';
import { PopupActiveComponent } from '../popup-active/popup-active.component';
import { PopupRemoveComponent } from '../popup-remove/popup-remove.component';
import { CommonService } from 'src/app/core/utilities/common.helper';
import { ConfirmComponent } from 'src/app/shared/component/dialogs/confirm/confirm.component';
import { ApiError } from 'src/app/shared/models/api-error.model';
import { LoadingComponent } from 'src/app/shared/component/dialogs/loading/loading.component';

@Component({
  selector: 'app-quan-ly-tai-khoan-list',
  templateUrl: './quan-ly-tai-khoan-list.component.html',
  styleUrls: ['./quan-ly-tai-khoan-list.component.scss']
})
export class QuanLyTaiKhoanListComponent implements OnInit {

  sort: SortDescriptor[] = [{
    field: 'Id',
    dir: 'desc'
  }];

  icMoreHoriz = icMoreHoriz;

  documentType: DocumentType;
  gridColumns: any[] = [];

  userCurrentLoginId: number;

  @ViewChild('gridList', { static: false }) gridChild: GridComponent;
  @ViewChild(WindowComponent, { static: false }) windowChild: WindowComponent;

  @ViewChild('actionTemplate', { static: true }) actionTemplate: TemplateRef<any>;
  
  constructor(private apiService: ApiService,
    private authService: AuthService, private notificationService: NotificationService, private router: Router
    , private dialog: MatDialog) { }

  ngOnInit() {
    this.documentType = DocumentType.User;
    this.gridColumns = [
      { Field: "HoTen", Title: "Họ Tên", Width: 200, Sortable: true },
      { Field: "SoDienThoai", Title: "Số Điện Thoại", Width: 150, Sortable: true},
      { Field: "Email", Title: "Email", Width: 150, Sortable: true },
      { Field: "DiaChi", Title: "Địa Chỉ", MinWidth: 200, Sortable: true },
      { Field: "IsActiveDisplay", Title: "Trạng Thái", Width: 200, Sortable: true },
      { Field: "Action", Title: "", Width: 50, Template: this.actionTemplate }
    ];

    //console.log("--------- : ", this.authService.getAccessUser());
    this.userCurrentLoginId = this.authService.getAccessUser().Id;
  }

  thayDoiMatKhau(id: number){
    if (this.authService.hasPermission(this.documentType, SecurityOperation.Update)) {

      let dialogRef = this.dialog.open(PopupChangePasswordComponent, {
        disableClose: false,
        width: '800px',
        height: '300px',
        data: id,
      });
      dialogRef.afterClosed().subscribe(result => {
        if (result != null && result != undefined) {
          this.gridChild.searchString = "";
          this.gridChild.search();
          this.notificationService.showSuccess(CommonService.format(TaiKhoanNguoiDungMessage.MessageChangeSuccessfully, ["Thay đổi mật khẩu"]));
        }
      });
    }
    else {
      this.notificationService.showError(SystemMessage.UnAuthorizedMessage);
    }
  }
  thayDoiQuyen(id: number){
    if (this.authService.hasPermission(this.documentType, SecurityOperation.Update)) {

      let dialogRef = this.dialog.open(PopupChangeRoleComponent, {
        disableClose: false,
        width: '800px',
        height: '300px',
        data: id,
      });
      dialogRef.afterClosed().subscribe(result => {
        if (result != null && result != undefined) {
          this.gridChild.searchString = "";
          this.gridChild.search();
          this.notificationService.showSuccess(CommonService.format(TaiKhoanNguoiDungMessage.MessageChangeSuccessfully, ["Thay đổi quyền"]));
        }
      });
    }
    else {
      this.notificationService.showError(SystemMessage.UnAuthorizedMessage);
    }

  }
  kichHoat(data: any) {
    let messageChange = "";
    let messageSuccessfully = "";
    if (data.IsActive == true) {
      messageChange = "bỏ kích hoạt";
      messageSuccessfully = "Bỏ kích hoạt";
    }
    else {
      messageChange = "kích hoạt";
      messageSuccessfully = "Kích hoạt";
    }
    if (this.authService.hasPermission(this.documentType, SecurityOperation.Update)) {

      this.dialog.open(ConfirmComponent, {
        disableClose: false,
        width: '400px',
        data: { Title: "Xác nhận", Message: CommonService.format(TaiKhoanNguoiDungMessage.MessageChange, [messageChange]) }
      }).afterClosed().subscribe(result => {/* result is a string:Yes,No,No answer*/
        if (result == "Yes") {

          this.apiService.post<any>("QuanLyTaiKhoan/ChangeActive?nhanVienId=" + data.Id).subscribe(
            resultData => {
              this.gridChild.searchString = "";
              this.gridChild.search();
              this.notificationService.showSuccess(CommonService.format(TaiKhoanNguoiDungMessage.MessageChangeSuccessfully, [messageSuccessfully]));

            },
            (err: any) => {
              if (err != undefined && err.ValidationErrors != null) {
              }
              else if (err != undefined && err.Errors == null) {
                //self.validationErrors.push({ "Message": err.Message });
                this.notificationService.showError(err.Message);
              }
            });

        }
        (err: ApiError) => {
        }
      });

    }
    else {
      this.notificationService.showError(SystemMessage.UnAuthorizedMessage);
    }

  }
  xoa(id: number){
    if (this.authService.hasPermission(this.documentType, SecurityOperation.Delete)) {

      this.dialog.open(ConfirmComponent, {
        disableClose: false,
        width: '400px',
        data: { Title: "Xác nhận", Message: CommonService.format(TaiKhoanNguoiDungMessage.MessageChange, ["xóa"]) }
      }).afterClosed().subscribe(result => {/* result is a string:Yes,No,No answer*/
        if (result == "Yes") {

          

      if(this.userCurrentLoginId == id){
        this.notificationService.showError(TaiKhoanNguoiDungMessage.MessageDontRemove);
        return;
      }

          this.apiService.post<any>("QuanLyTaiKhoan/RemoveAccount?nhanVienId=" + id).subscribe(
            resultData => {
              this.gridChild.searchString = "";
              this.gridChild.search();
              this.notificationService.showSuccess(CommonService.format(TaiKhoanNguoiDungMessage.MessageChangeSuccessfully, ["Xóa"]));

            },
            (err: any) => {
              if (err != undefined && err.ValidationErrors != null) {
              }
              else if (err != undefined && err.Errors == null) {
                //self.validationErrors.push({ "Message": err.Message });
                this.notificationService.showError(err.Message);
              }
            });

        }
        (err: ApiError) => {
        }
      });
      
    }
    else {
      this.notificationService.showError(SystemMessage.UnAuthorizedMessage);
    }

  }

  exportExcel() {
    this.dialog.open(LoadingComponent, {
      disableClose: true,
      width: '200px',
      height: '90px',
      data: { Title: 'Đang xuất excel...' }
    });

    if(this.authService.hasPermission(this.documentType, SecurityOperation.Process)) {
      this.apiService.postExportExcel<string>("QuanLyTaiKhoan/ExportTaiKhoan", this.gridChild._gridQueryInfo).subscribe(res => {
        let dateTimeNow = new Date();
        CommonService.downLoadFile(res, "application/vnd.ms-excel", "TaiKhoanNguoiDung" + dateTimeNow.getFullYear() + ".xlsx");
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
