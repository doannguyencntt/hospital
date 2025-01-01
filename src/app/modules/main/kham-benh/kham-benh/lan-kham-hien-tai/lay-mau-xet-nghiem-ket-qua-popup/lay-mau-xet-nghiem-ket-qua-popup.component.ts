import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material';
import icClose from "@iconify/icons-ic/twotone-close";
import { ApiService } from 'src/app/core/services/api.service';
import { NotificationService } from 'src/app/core/services/notification.service';
import { CommonService } from 'src/app/core/utilities/common.helper';
import { LoadingComponent } from 'src/app/shared/component/dialogs/loading/loading.component';
import { ApiError } from 'src/app/shared/models/api-error.model';

@Component({
  selector: 'app-lay-mau-xet-nghiem-ket-qua-popup',
  templateUrl: './lay-mau-xet-nghiem-ket-qua-popup.component.html',
  styleUrls: ['./lay-mau-xet-nghiem-ket-qua-popup.component.scss']
})
export class LayMauXetNghiemKetQuaPopupComponent implements OnInit {

  icClose = icClose;
  arrFilePdf: Array<any> = [];
  arrFileUrl: Array<any> = [];
  popupLoadingData: any;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any,
  private apiService: ApiService,
  private dialog: MatDialog,
  private notificationService: NotificationService) { }

  ngOnInit() {
    this.getALlFilePDFFromHtml(this.data);
  }

  getALlFilePDFFromHtml(arrHtml) {
    this.showPopupLoadingData();
    arrHtml.forEach(html => {
      var obj = {
        "Html": html,
        "TenFile": "KetQuaXetNghiem"
      }
      this.apiService.postExportPdf<any>('XetNghiem/GetFilePDFFromHtml', obj).subscribe(
        file => {
          let newBlob = new Blob([file], { type: "application/pdf" });
          let datalocalURL = window.URL.createObjectURL(newBlob);
          // document.querySelector("iframe").src = datalocalURL;
          console.log('datalocalURL', datalocalURL);
          this.arrFileUrl.push(datalocalURL);
          this.arrFilePdf.push(file);

          if (this.arrFileUrl.length == arrHtml.length) {
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
}
