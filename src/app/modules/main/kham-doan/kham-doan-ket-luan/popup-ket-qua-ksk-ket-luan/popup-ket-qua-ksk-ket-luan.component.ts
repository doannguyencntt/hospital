import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material';
import icClose from "@iconify/icons-ic/twotone-close";
import { ApiService } from 'src/app/core/services/api.service';
import { NotificationService } from 'src/app/core/services/notification.service';
import { CommonService } from 'src/app/core/utilities/common.helper';
import { LoadingComponent } from 'src/app/shared/component/dialogs/loading/loading.component';
import { ApiError } from 'src/app/shared/models/api-error.model';

@Component({
  selector: 'app-popup-ket-qua-ksk-ket-luan',
  templateUrl: './popup-ket-qua-ksk-ket-luan.component.html',
  styleUrls: ['./popup-ket-qua-ksk-ket-luan.component.scss']
})
export class PopupKetQuaKskKetLuanComponent implements OnInit {
  icClose = icClose;
  popupLoadingData: any;
  file: any;
  fileUrl: any;
  title="KẾT QUẢ KHÁM SỨC KHỎE";
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private dialog: MatDialog,
    private apiService: ApiService,
    private notificationService: NotificationService) { }

  ngOnInit() {
    this.getHtml();
  }

  getHtml() {
    this.showPopupLoadingData();
    var obj = {
      "Id": this.data,
      "HostingName": window.location.protocol + "//" + window.location.host
    };
    this.apiService.postExportPdf<any>("KhamDoan/XuLyInKetQuaKhamSucKhoeKetLuanAsync", obj).subscribe(res => {
      let newBlob = new Blob([res], { type: "application/pdf" });
      let datalocalURL = window.URL.createObjectURL(newBlob);

      this.fileUrl = datalocalURL;
      this.file = res;

      this.closePopupLoadingData();
    }, err => {
      if (err.Message != "Validation Failed") {
        this.notificationService.showError(err.Message);
      }
      this.closePopupLoadingData();
    });
  }

  // getFilePDFFromHtml(html) {
  //   var obj = {
  //     "Html": html,
  //     "TenFile": "KetQuaKhamSucKhoe"
  //   }
  //   this.apiService.postExportPdf<any>('KhamDoan/GetFilePDFFromHtml', obj).subscribe(
  //     file => {
  //       let newBlob = new Blob([file], { type: "application/pdf" });
  //       let datalocalURL = window.URL.createObjectURL(newBlob);

  //       this.fileUrl = datalocalURL;
  //       this.file = file;

  //       this.closePopupLoadingData();
  //     },
  //     (err: ApiError) => {
  //       if (err.Message !== 'Validation Failed') {
  //         this.notificationService.showError(err.Message);
  //       }
  //       this.closePopupLoadingData();
  //     });
  // }

  downloadFile() {
    const dateTimeNow = new Date();
    CommonService.downLoadFile(this.file, 'application/pdf', 'KetQuaKhamSucKhoe' + dateTimeNow.getFullYear() + '.pdf');
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
