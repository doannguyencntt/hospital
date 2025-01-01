import { Component, OnInit, Inject, ChangeDetectorRef } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material';
import { ApiService } from 'src/app/core/services/api.service';
import icClose from '@iconify/icons-ic/twotone-close';
import { YeuCauKhamBenh } from '../../../kham-benh.model';
import { ApiError } from 'src/app/shared/models/api-error.model';
import { NotificationService } from 'src/app/core/services/notification.service';
import { LoadingComponent } from 'src/app/shared/component/dialogs/loading/loading.component';

@Component({
  selector: 'app-lan-kham-hien-tai-chuyen-kham',
  templateUrl: './lan-kham-hien-tai-chuyen-kham.component.html',
  styleUrls: ['./lan-kham-hien-tai-chuyen-kham.component.scss']
})
export class LanKhamHienTaiChuyenKhamComponent implements OnInit {

  icClose = icClose;

  yeuCauKhamBenh: YeuCauKhamBenh = new YeuCauKhamBenh();
  validationErrors: any;
  popupLoadingData: any;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private dialog: MatDialog, private apiService: ApiService,
  private ref: ChangeDetectorRef, private notificationService: NotificationService, private dialogRef: MatDialogRef<any>,) { }

  ngOnInit() {
    this.yeuCauKhamBenh.YeuCauTiepNhanId = this.data.YeuCauTiepNhanId;
    this.yeuCauKhamBenh.YeuCauKhamBenhTruocId = this.data.YeuCauKhamBenhId;
  }

  luuChuyenKham() {
    var self = this;
    self.showPopupLoadingData();
    self.validationErrors = [];
    //self.ref.detectChanges();

    self.apiService.post("KhamBenh/KiemTraValidationChuyenKham", self.yeuCauKhamBenh)
      .subscribe(resultData => {
        self.closePopupLoadingData();
        self.dialogRef.close(self.yeuCauKhamBenh);
      },
        (err: ApiError) => {
          self.validationErrors = err.ValidationErrors;
          if (err.Message != "Validation Failed") {
            self.notificationService.showError(err.Message);
          }
          self.closePopupLoadingData();
        });
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
        data: { Title: "Đang kiểm tra dữ liệu..." },
      });
    }

  }
  closePopupLoadingData() {
    if (this.popupLoadingData != undefined && this.popupLoadingData != null) {
      this.popupLoadingData.close();
    }
  }

  closes(){
    this.dialog.closeAll();
  }
}
