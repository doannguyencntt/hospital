import { Component, OnInit, Optional, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import icClose from '@iconify/icons-ic/twotone-close';
import { DomSanitizer } from '@angular/platform-browser';
import { ApiService } from 'src/app/core/services/api.service';
import { NotificationService } from 'src/app/core/services/notification.service';
import { LoadingComponent } from 'src/app/shared/component/dialogs/loading/loading.component';
import { ApiError } from 'src/app/shared/models/api-error.model';
import { CommonService } from 'src/app/core/utilities/common.helper';

@Component({
  selector: 'app-phieu-kham-benh-vao-vien-popup',
  templateUrl: './phieu-kham-benh-vao-vien-popup.component.html',
  styleUrls: ['./phieu-kham-benh-vao-vien-popup.component.scss']
})
export class PhieuKhamBenhVaoVienPopupComponent implements OnInit {
  icClose = icClose;
  src: string = "";
  title: string = "";
  popupLoadingData: any;
  file: any;
  fileUrl: any;
  length: number = 0;
  constructor(private dialogRef: MatDialogRef<PhieuKhamBenhVaoVienPopupComponent>,
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
    this.length = arrHtml.length;
    this.showPopupLoadingData();
    const obj = {
      Htmls: arrHtml,
      TenFile: 'PhieuKhamBenh',
      LaPhieuKhamBenh: true
    };
    this.apiService.postExportPdf<any>('KhamBenh/GetFilePDFFromHtmls', obj).subscribe(
      file => {
        const newBlob = new Blob([file], { type: 'application/pdf' });
        const datalocalURL = window.URL.createObjectURL(newBlob);
        this.fileUrl = datalocalURL;
        this.file = file;
        this.closePopupLoadingData();
      },
      (err: ApiError) => {
        if (err.Message !== 'Validation Failed') {
          this.notificationService.showError(err.Message);
        }
        this.closePopupLoadingData();
      });
  }

  downloadAllFile() {
    const dateTimeNow = new Date();
    CommonService.downLoadFile(this.file, 'application/pdf', 'PhieuKhamBenh' + dateTimeNow.getFullYear() + '.pdf');
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

  getSharedPrintForm() {
    let html = this.data.html.replace("<p  style='background: #005dab;color:#fff; height:40px; font-size:30px;text-align:center'><th>PHIẾU KHÁM BỆNH</th></p>", "")
      .replace("<p  style='background: #005dab;color:#fff; height:40px; font-size:30px;text-align:center'><th>PHIẾU KHÁM BỆNH VÀO VIỆN</th></p>", "");
    return new Promise(resolve => {
      resolve(html);
      this.close();
    });
  }
}
