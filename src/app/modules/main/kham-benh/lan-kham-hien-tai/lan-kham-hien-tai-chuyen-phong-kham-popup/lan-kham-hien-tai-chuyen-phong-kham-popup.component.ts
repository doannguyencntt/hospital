import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import icClose from '@iconify/icons-ic/twotone-close';
import { ApiService } from 'src/app/core/services/api.service';
import { AuthService } from 'src/app/core/services/auth.service';
import { NotificationService } from 'src/app/core/services/notification.service';
import { LoadingComponent } from 'src/app/shared/component/dialogs/loading/loading.component';
import { SystemMessage } from 'src/app/shared/configdata/system-message';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import { SecurityOperation } from 'src/app/shared/enum/security-operation.enum';
import { ApiError } from 'src/app/shared/models/api-error.model';
import { CapNhatThongTinThucHienDvktPopupComponent } from '../../kham-benh/lan-kham-hien-tai/cap-nhat-thong-tin-thuc-hien-dvkt-popup/cap-nhat-thong-tin-thuc-hien-dvkt-popup.component';

@Component({
  selector: 'app-lan-kham-hien-tai-chuyen-phong-kham-popup',
  templateUrl: './lan-kham-hien-tai-chuyen-phong-kham-popup.component.html',
  styleUrls: ['./lan-kham-hien-tai-chuyen-phong-kham-popup.component.scss']
})
export class LanKhamHienTaiChuyenPhongKhamPopupComponent implements OnInit {

  icClose = icClose;

  documentType: DocumentType;
  validationErrors: any;

  phongThucHienId: number = null;
  hangDoiIdStr: string = '';
  popupLoadingData: any;

  constructor(
    private dialog: MatDialog, @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<CapNhatThongTinThucHienDvktPopupComponent>,
    private apiService: ApiService,
    private authService: AuthService,
    private notificationService: NotificationService) { }

  ngOnInit() {
    this.documentType = this.data.DocumentType;
    if(this.data.HangDoiIds){
      this.hangDoiIdStr = this.data.HangDoiIds.join(";");
    }
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

  xuLyChuyenPhongThucHienDichVuKham() {
    if (this.authService.hasPermission(this.documentType, SecurityOperation.Update)) {
      this.showPopupLoadingData();
      let obj = {
        HangDoiIds: this.data.HangDoiIds,
        PhongHienTaiId: this.data.PhongHienTaiId,
        PhongThucHienId: this.phongThucHienId
      }
      this.apiService.put<any>("KhamBenh/XuLyChuyenPhongThucHienDichVuKham", obj).subscribe(
        resultData => {
          this.closePopupLoadingData();
          this.dialogRef.close(true);
        },
        (err: ApiError) => {
          this.validationErrors = err.ValidationErrors;
          if (err.Message != "Validation Failed") {
            this.notificationService.showError(err.Message);
          }
          this.closePopupLoadingData();
        });
    }
    else {
      this.notificationService.showError(SystemMessage.UnAuthorizedMessage);
    }
  }

  close(){
    this.dialogRef.close();
  }
}
