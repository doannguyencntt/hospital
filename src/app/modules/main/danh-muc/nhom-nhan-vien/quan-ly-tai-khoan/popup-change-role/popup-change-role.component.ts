import { Component, OnInit, Inject } from '@angular/core';
import { NhanVien } from '../quan-ly-tai-khoan.model';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { ApiService } from 'src/app/core/services/api.service';
import { NotificationService } from 'src/app/core/services/notification.service';
import { ErrorService } from 'src/app/core/error/error.service';
import { ConfirmComponent } from 'src/app/shared/component/dialogs/confirm/confirm.component';
import { CommonService } from 'src/app/core/utilities/common.helper';
import { TaiKhoanNguoiDungMessage } from 'src/app/shared/configdata/system-message';
import { ApiError } from 'src/app/shared/models/api-error.model';
import { stagger60ms } from 'src/@vex/animations/stagger.animation';
import { fadeInUp400ms } from 'src/@vex/animations/fade-in-up.animation';

@Component({
  selector: 'app-popup-change-role',
  templateUrl: './popup-change-role.component.html',
  styleUrls: ['./popup-change-role.component.scss'],
  animations: [
    stagger60ms,
    fadeInUp400ms
  ]
})
export class PopupChangeRoleComponent implements OnInit {

  nhanVien: NhanVien = new NhanVien();
  loading: boolean = false;
  validationErrors: any[] = [];

  nhanVienId: number = null;

  constructor(private dialog: MatDialog, public dialogRef: MatDialogRef<PopupChangeRoleComponent>
    , private apiService: ApiService, private notificationService: NotificationService
    , private errorService: ErrorService
    , @Inject(MAT_DIALOG_DATA) public data: number) { 
      this.nhanVienId = data;
    }

  ngOnInit() {
    if(this.data != null && this.data != undefined){
      this.getNhanVien(this.data);
    }
  }

  getNhanVien(id: number){
    this.validationErrors = null;
    this.apiService.get<NhanVien>("QuanLyTaiKhoan/GetNhanVien/?nhanVienId=" + id).subscribe(
      resultData => {
        if(resultData != null && resultData != undefined){
          this.nhanVien = resultData;
        }
      },
      (err: any) => {
          if (err != undefined && err.ValidationErrors != null) {
              this.validationErrors = err.ValidationErrors;
          }
          else if (err != undefined && err.Errors == null) {
              //self.validationErrors.push({ "Message": err.Message });
              this.notificationService.showError(err.Message);
          }
      });
  }

  huy(){
    this.close();
  }

  close(){
    //this.dialog.closeAll();
    this.dialogRef.close();
  }

  capNhat(){
    this.validationErrors = null;

          this.dialog.open(ConfirmComponent, {
            disableClose: false,
            width: '400px',
            data: { Title: "Xác nhận", Message: CommonService.format(TaiKhoanNguoiDungMessage.MessageChange, ["thay đổi quyền"])  }
          }).afterClosed().subscribe(result => {/* result is a string:Yes,No,No answer*/
            if (result == "Yes") {
      
              
        this.loading = true;
        this.apiService.post<any>("QuanLyTaiKhoan/ChangeRole", this.nhanVien).subscribe(
          resultData => {
            this.loading = false;
            this.dialogRef.close(true);
          },
          (err: any) => {
            this.loading = false;
              if (err != undefined && err.ValidationErrors != null) {
                  this.validationErrors = err.ValidationErrors;
              }
              else if (err != undefined && err.Errors == null) {
                  //self.validationErrors.push({ "Message": err.Message });
                  this.notificationService.showError(err.Message);
              }
          });
      
            }
            (err: ApiError) => {
      
              this.loading = false;
            }
          });
  }
}
