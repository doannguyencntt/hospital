import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import icClose from '@iconify/icons-ic/twotone-close';
import icDelete from '@iconify/icons-ic/twotone-delete';
import { ApiService } from 'src/app/core/services/api.service';
import { AuthService } from 'src/app/core/services/auth.service';
import { NotificationService } from 'src/app/core/services/notification.service';
import { LoadingComponent } from 'src/app/shared/component/dialogs/loading/loading.component';
import { SystemMessage } from 'src/app/shared/configdata/system-message';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import { SecurityOperation } from 'src/app/shared/enum/security-operation.enum';

@Component({
  selector: 'app-kham-doan-cong-ty-phong-popup',
  templateUrl: './kham-doan-cong-ty-phong-popup.component.html',
  styleUrls: ['./kham-doan-cong-ty-phong-popup.component.scss']
})
export class KhamDoanCongTyPhongPopupComponent implements OnInit {

  icClose = icClose;
  icDelete = icDelete;

  documentType: DocumentType;
  validationErrors: any = [];
  popupLoadingData: any;

  title: string = "";
  constructor(
    private authService: AuthService,
    private dialog: MatDialog,
    private notificationService: NotificationService,
    private apiService: ApiService,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private dialogRef: MatDialogRef<KhamDoanCongTyPhongPopupComponent>
  ) { }

  ngOnInit() {
    this.documentType = DocumentType.User; // cần cập nhật lại
    if(this.data.Id == null)
    {
      this.title = "Thêm phòng";
    }
    else
    {
      this.title = "Cập nhật phòng";
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

  xuLyThem() {
    if (this.authService.hasPermission(this.documentType, SecurityOperation.Add)) {
      
    }
    else {
      this.notificationService.showError(SystemMessage.UnAuthorizedMessage);
    }
  }

  xuLyLuu() {
    if (this.authService.hasPermission(this.documentType, SecurityOperation.Update)) {
      
    }
    else {
      this.notificationService.showError(SystemMessage.UnAuthorizedMessage);
    }
  }

  close()
  {
    this.dialogRef.close();
  }
}
