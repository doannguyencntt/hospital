import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material';
import icClose from '@iconify/icons-ic/twotone-close';
import { ApiService } from 'src/app/core/services/api.service';
import { NotificationService } from 'src/app/core/services/notification.service';
import { CommonService } from 'src/app/core/utilities/common.helper';
import { LoadingComponent } from 'src/app/shared/component/dialogs/loading/loading.component';
import { ApiError } from 'src/app/shared/models/api-error.model';
@Component({
  selector: 'app-ket-qua-phieu-new-popup',
  templateUrl: './ket-qua-phieu-new-popup.component.html',
  styleUrls: ['./ket-qua-phieu-new-popup.component.scss']
})
export class KetQuaPhieuNewPopupComponent implements OnInit {
  icClose = icClose;
  arrFilePdf: Array<any> = [];
  arrFileUrl: Array<any> = [];
  popupLoadingData: any;

  constructor(
      @Inject(MAT_DIALOG_DATA) public data: any,
      private apiService: ApiService,
      private dialog: MatDialog,
      private notificationService: NotificationService
  ) { }

  ngOnInit() {
      this.getALlFilePDFFromHtml(this.data);
  }

  getALlFilePDFFromHtml(arrHtml) {
      this.showPopupLoadingData();
      arrHtml.forEach(html => {
          const obj = {
              Html: html,
              TenFile: 'KetQuaXetNghiem'
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
          CommonService.downLoadFile(file, 'application/pdf', 'KetQuaXetNghiem' + dateTimeNow.getFullYear() + '.pdf');
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
