import { Component, OnInit } from '@angular/core';
import { stagger60ms } from 'src/@vex/animations/stagger.animation';
import { fadeInUp400ms } from 'src/@vex/animations/fade-in-up.animation';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material';
import { NotificationService } from 'src/app/core/services/notification.service';
import { ErrorService } from 'src/app/core/error/error.service';
import { AuthService } from 'src/app/core/services/auth.service';
import { ConfirmComponent } from 'src/app/shared/component/dialogs/confirm/confirm.component';
import { SystemMessage } from 'src/app/shared/configdata/system-message';
import { CommonService } from 'src/app/core/utilities/common.helper';
import { ApiError } from 'src/app/shared/models/api-error.model';
import icFind from '@iconify/icons-ic/search';
import { PopupTimNhanVienComponent } from '../popup-tim-nhan-vien/popup-tim-nhan-vien.component';
import { NhanVien } from '../quan-ly-tai-khoan.model';
import { ApiService } from 'src/app/core/services/api.service';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import { SecurityOperation } from 'src/app/shared/enum/security-operation.enum';

@Component({
  selector: 'app-quan-ly-tai-khoan-create',
  templateUrl: './quan-ly-tai-khoan-create.component.html',
  styleUrls: ['./quan-ly-tai-khoan-create.component.scss'],
  animations: [
    stagger60ms,
    fadeInUp400ms
  ]
})
export class QuanLyTaiKhoanCreateComponent implements OnInit {

  loading: boolean = false;
  validationErrors: any[] = [];
  icFind = icFind;
  documentType: DocumentType;

  nhanVien: NhanVien = new NhanVien();

  constructor(private router: Router, private dialog: MatDialog, private apiService: ApiService
    , private notificationService: NotificationService, private errorService: ErrorService
    , private authService: AuthService) { }

  ngOnInit() {
  }

  them() {
    //console.log("them = ");
    if (this.authService.hasPermission(this.documentType, SecurityOperation.Update)){
      this.dialog.open(ConfirmComponent, {
        disableClose: false,
        width: '400px',
        data: { Title: "Xác nhận", Message: CommonService.format(SystemMessage.MessConfirm, ["thêm"]) }
      }).afterClosed().subscribe(result => {/* result is a string:Yes,No,No answer*/
        if (result == "Yes") {
  
          this.validationErrors = null;
          this.loading = true;
  
          this.nhanVien.IsChangePassword = true;
          this.apiService.post<any>("QuanLyTaiKhoan/TaoTaiKhoan", this.nhanVien).subscribe(
            resultData => {
              this.loading = false;
              this.router.navigate(['/danh-muc/nhom-nhan-vien/tai-khoan-nguoi-dung']);
              this.notificationService.showSuccess(CommonService.format(SystemMessage.ActionSuccessfully, ["Tạo tài khoản"]));
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
    else{
      this.notificationService.showError(SystemMessage.UnAuthorizedMessage);
    }
   

  }
  huy() {
    this.router.navigate(['/danh-muc/nhom-nhan-vien/tai-khoan-nguoi-dung']);
  }

  timNhanVien(){
    //PopupTimNhanVienComponent
    let dialogRef = this.dialog.open(PopupTimNhanVienComponent, {
      disableClose: false,
      width: '1300px',
      height: '500px',
    });
    dialogRef.afterClosed().subscribe(result => {
      //console.log(result);
      if (result != null && result != undefined) {
        this.nhanVien.HoTen = result.HoTen;
        this.nhanVien.DiaChi = result.DiaChi;
        this.nhanVien.NhanVienId = result.Id;
        this.nhanVien.SoDienThoai = result.SoDienThoai;
        this.nhanVien.Email = result.Email;
      }
    });

  }
}
