import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import icClose from '@iconify/icons-ic/twotone-close';
import { ApiService } from 'src/app/core/services/api.service';
import { AuthService } from 'src/app/core/services/auth.service';
import { NotificationService } from 'src/app/core/services/notification.service';
import { CommonService } from 'src/app/core/utilities/common.helper';
import { LoadingComponent } from 'src/app/shared/component/dialogs/loading/loading.component';
import { SystemMessage } from 'src/app/shared/configdata/system-message';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import { SecurityOperation } from 'src/app/shared/enum/security-operation.enum';
import { ApiError } from 'src/app/shared/models/api-error.model';

@Component({
  selector: 'app-tiep-nhan-noi-tru-huy-nhap-vien-popup',
  templateUrl: './tiep-nhan-noi-tru-huy-nhap-vien-popup.component.html',
  styleUrls: ['./tiep-nhan-noi-tru-huy-nhap-vien-popup.component.scss']
})
export class TiepNhanNoiTruHuyNhapVienPopupComponent implements OnInit {

  icClose = icClose;
  validationErrors: any;
  documentType: DocumentType = DocumentType.TiepNhanNoiTru;
  popupLoadingData: any;

  lyDo: string = null;
  constructor(private dialogRef: MatDialogRef<TiepNhanNoiTruHuyNhapVienPopupComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private authService: AuthService,
    private notificationService: NotificationService,
    private apiService: ApiService,
    private dialog: MatDialog) { }

  ngOnInit() {
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
        data: { Title: "Đang hủy dữ liệu..." },
      });
    }

  }

  closePopupLoadingData() {
    if (this.popupLoadingData != undefined && this.popupLoadingData != null) {
      this.popupLoadingData.close();
    }
  }

  XuLyHuyNhapVien(){
    if (this.authService.hasPermission(this.documentType, SecurityOperation.Update)) {
      this.showPopupLoadingData();
      this.validationErrors = [];
      let obj = {
        "Id": this.data.YeuCauTiepNhanId,
        "LyDo": this.lyDo
      }
      this.apiService.put<any>("DieuTriNoiTru/XuLyHuyNhapVien", obj)
        .subscribe(
          () => {
            this.closePopupLoadingData();
            this.notificationService.showSuccess(CommonService.format(SystemMessage.ActionSuccessfully, ["Hủy nhập viện"]));
            this.close('ok');
          },
          (err: ApiError) => {
            this.validationErrors = err.ValidationErrors;
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

  close(data) {
    if(data == 'ok')
    {
      this.dialogRef.close(this.lyDo);
    }
    else
    {
      this.dialogRef.close(null);
    }
  }
}
