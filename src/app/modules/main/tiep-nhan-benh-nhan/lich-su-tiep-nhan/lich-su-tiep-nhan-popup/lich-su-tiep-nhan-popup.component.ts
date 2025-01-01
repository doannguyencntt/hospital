import { Component, OnInit, Inject, Optional } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import icClose from '@iconify/icons-ic/twotone-close';
import { ApiService } from 'src/app/core/services/api.service';
import { ApiError } from 'src/app/shared/models/api-error.model';
import { DomSanitizer } from '@angular/platform-browser';
import { CommonService } from 'src/app/core/utilities/common.helper';
import { LoadingComponent } from 'src/app/shared/component/dialogs/loading/loading.component';
import { NotificationService } from 'src/app/core/services/notification.service';
@Component({
  selector: 'app-lich-su-tiep-nhan-popup',
  templateUrl: './lich-su-tiep-nhan-popup.component.html',
  styleUrls: ['./lich-su-tiep-nhan-popup.component.scss']
})
export class LichSuTiepNhanPopupComponent implements OnInit {
  icClose = icClose;
  src: string = "";
  title: string = "";
  popupLoadingData: any;
  file: any;
  fileUrl: any;
  length: number = 0;
  constructor(private dialogRef: MatDialogRef<LichSuTiepNhanPopupComponent>,
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

  downloadAllFile() {
    const dateTimeNow = new Date();
    CommonService.downLoadFile(this.file, 'application/pdf', 'PhieuKhamBenh' + dateTimeNow.getFullYear() + '.pdf');
  }
}

