import { Component, OnInit, Inject, Optional } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import icClose from '@iconify/icons-ic/twotone-close';
import { ApiService } from 'src/app/core/services/api.service';
import { ApiError } from 'src/app/shared/models/api-error.model';
import { DomSanitizer } from '@angular/platform-browser';
import { LoadingComponent } from "src/app/shared/component/dialogs/loading/loading.component";
import { NotificationService } from 'src/app/core/services/notification.service';
import { CommonService } from 'src/app/core/utilities/common.helper';

@Component({
  selector: 'app-ho-so-benh-an-popup',
  templateUrl: './ho-so-benh-an-popup.component.html',
  styleUrls: ['./ho-so-benh-an-popup.component.scss']
})
export class HoSoBenhAnPopupComponent implements OnInit {
  icClose = icClose;
  src: string = "";
  title: string = "";
  popupLoadingData: any;
  arrFilePdf: Array<any> = [];
  arrFileUrl: Array<any> = [];
  constructor(
    private dialogRef: MatDialogRef<HoSoBenhAnPopupComponent>,
    public sanitizer: DomSanitizer,
    private apiService: ApiService,
    private dialog: MatDialog,
    private notificationService: NotificationService,
    @Optional() @Inject(MAT_DIALOG_DATA) public data: any
  ) { }
  ngOnInit() {
    this.getALlFilePDFFromHtml(this.data.html);
  }
  close() {
    this.dialogRef.close();
  }

  getALlFilePDFFromHtml(arrHtml: any[]) {
    this.showPopupLoadingData();
    arrHtml.forEach(html => {
      const obj = {
        Html: html,
        TenFile: 'PhieuKhamBenh',
        LaPhieuKhamBenh: true
      };
      this.apiService.postExportPdf<any>('XetNghiem/GetFilePDFFromHtml', obj).subscribe(
        file => {
          const newBlob = new Blob([file], { type: 'application/pdf' });
          const datalocalURL = window.URL.createObjectURL(newBlob);
          // document.querySelector("iframe").src = datalocalURL;
          this.arrFileUrl.push(datalocalURL);
          this.arrFilePdf.push(file);

          if (this.arrFileUrl.length === arrHtml.length) {
            this.closePopupLoadingData();
          }
        },
        (err: ApiError) => {
          if (err.Message !== 'Validation Failed') {
            this.notificationService.showError(err.Message);
          }
          this.closePopupLoadingData();
        });
    });
  }

  downloadAllFile() {
    const dateTimeNow = new Date();
    this.arrFilePdf.forEach(file => {
      CommonService.downLoadFile(file, 'application/pdf', 'PhieuKhamBenh' + dateTimeNow.getFullYear() + '.pdf');
    });
  }

  showPopupLoadingData() {
    if (this.popupLoadingData == null
      || this.popupLoadingData.openDialogs == null
      || (this.popupLoadingData.openDialogs != null && this.popupLoadingData.openDialogs.length === 0)) {
      this.popupLoadingData = this.dialog.open(LoadingComponent, {
        disableClose: true,
        width: '200px',
        height: '90px',
        data: { Title: 'Đang tải dữ liệu...' },
      });
    }
  }

  closePopupLoadingData() {
    if (this.popupLoadingData) {
      this.popupLoadingData.close();
    }
  }

}
