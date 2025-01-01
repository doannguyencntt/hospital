import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import icClose from '@iconify/icons-ic/twotone-close';
import icClear from '@iconify/icons-ic/twotone-clear';
import { CommonService } from 'src/app/core/utilities/common.helper';
import { SystemMessage } from 'src/app/shared/configdata/system-message';
import { FileExcelVatTu } from '../vat-tu-y-te.model';
import { MatDialog, MatDialogRef } from '@angular/material';
import { NotificationService } from 'src/app/core/services/notification.service';
import { ApiService } from 'src/app/core/services/api.service';
import { LoadingComponent } from 'src/app/shared/component/dialogs/loading/loading.component';
import { HttpParams } from '@angular/common/http';
@Component({
  selector: 'app-vat-tu-y-te-chon-file-popup',
  templateUrl: './vat-tu-y-te-chon-file-popup.component.html',
  styleUrls: ['./vat-tu-y-te-chon-file-popup.component.scss']
})
export class VatTuYTeChonFilePopupComponent implements OnInit {
  icClose = icClose;
  icClear = icClear;

  validationErrors: any = [];
  popupLoadingData: any;
  allowedExtensions: string[] = ['.xlsx', '.xls'];
  invalidFileExtensionMess: string = CommonService.format(SystemMessage.InvalidFileExtension, [this.allowedExtensions.toString()]);
  file: FileExcelVatTu = new FileExcelVatTu();
  loadingPopup: any;

  fileExcel: FileExcelVatTu = null;
  constructor(
    private dialog: MatDialog,
    private dialogRef: MatDialogRef<VatTuYTeChonFilePopupComponent>,
    private cdRef: ChangeDetectorRef,
    private notificationService: NotificationService,
    private apiService: ApiService
  ) { }

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
        data: { Title: "Đang tải dữ liệu..." },
      });
    }

  }

  closePopupLoadingData() {
    if (this.popupLoadingData != undefined && this.popupLoadingData != null) {
      this.popupLoadingData.close();
    }
  }

  uploadFileDone(event) {
    this.fileExcel = event;
    this.cdRef.detectChanges();
  }

  TaiFileMau() {
    const self = this;
    self.apiService.postExportExcel<string>('DuocPham/DownloadTemplateDuocPham').subscribe(
      resultData => {
        CommonService.downLoadFile(resultData, 'application/vnd.ms-excel', 'TemplateDuocPham.xlsx');
      },
      (err: any) => {
        self.notificationService.showError(err.Message);
      });
  }

  close(result = null) {
    this.dialogRef.close(result);
  }

  xuLyFile() {
    const self = this;
    if (this.fileExcel != undefined && this.fileExcel != null) {
      this.showLoadingPopup();
      const params = new HttpParams({
        fromObject: {
          tenGuid: this.fileExcel.TenGuid,
          duongDan: "hapu.tmp",
        },
      });
      self.apiService.get<any>("VatTu/ImportVatTu", params).subscribe((resp) => {
        if (resp) {
          self.notificationService.showSuccess("Thêm vật tư thành công");
          this.closeAllDialogs();
          this.dialogRef.close(resp);
        }
      }, (err: any) => {
        self.notificationService.showError(err.Message);
        this.closeAllDialogs();
      });
    }
  }

  showLoadingPopup() {
    if (!this.loadingPopup) {
      this.loadingPopup = this.dialog.open(LoadingComponent, {
        disableClose: true,
        width: '200px',
        height: '90px',
        data: { Title: 'Đang tải...' }
      });
    }
  }

  showSavingPopup() {
    if (!this.loadingPopup) {
      this.loadingPopup = this.dialog.open(LoadingComponent, {
        disableClose: true,
        width: '200px',
        height: '90px',
        data: { Title: 'Đang lưu...' }
      });
    }
  }

  closeAllDialogs() {
    if (this.loadingPopup) {
      this.loadingPopup.close();
      this.loadingPopup = null;
    }
  }
}