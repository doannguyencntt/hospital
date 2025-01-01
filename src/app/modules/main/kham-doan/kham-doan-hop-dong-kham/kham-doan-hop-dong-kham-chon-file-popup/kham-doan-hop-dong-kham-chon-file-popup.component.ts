import { ChangeDetectorRef, Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import icClose from '@iconify/icons-ic/twotone-close';
import icClear from '@iconify/icons-ic/twotone-clear';
import { LoadingComponent } from 'src/app/shared/component/dialogs/loading/loading.component';
import { FileExcelNhanVien } from '../kham-doan-hop-dong-kham.model';
import { CommonService } from 'src/app/core/utilities/common.helper';
import { SystemMessage } from 'src/app/shared/configdata/system-message';
import { ApiService } from 'src/app/core/services/api.service';
import { ActivatedRoute, Router } from '@angular/router';
import { NotificationService } from 'src/app/core/services/notification.service';
import { HttpParams } from '@angular/common/http';

@Component({
  selector: 'app-kham-doan-hop-dong-kham-chon-file-popup',
  templateUrl: './kham-doan-hop-dong-kham-chon-file-popup.component.html',
  styleUrls: ['./kham-doan-hop-dong-kham-chon-file-popup.component.scss']
})
export class KhamDoanHopDongKhamChonFilePopupComponent implements OnInit {

  icClose = icClose;
  icClear = icClear;

  validationErrors: any = [];
  popupLoadingData: any;
  allowedExtensions: string[] = ['.xlsx', '.xls'];
  invalidFileExtensionMess: string = CommonService.format(SystemMessage.InvalidFileExtension, [this.allowedExtensions.toString()]);
  file: FileExcelNhanVien = new FileExcelNhanVien();
  hopDongKhamSucKhoeId: string;
  loadingPopup: any;

  fileExcel: FileExcelNhanVien = null;
  constructor(
    private dialog: MatDialog,
    private dialogRef: MatDialogRef<KhamDoanHopDongKhamChonFilePopupComponent>,
    private cdRef: ChangeDetectorRef,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private notificationService: NotificationService,
    private apiService: ApiService, private router: Router, private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.hopDongKhamSucKhoeId = this.data.hopDongKhamSucKhoeId;
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
    self.apiService.postExportExcel<string>('KhamDoan/DownloadTemplateNhanVienKSK').subscribe(
      resultData => {
        CommonService.downLoadFile(resultData, 'application/vnd.ms-excel', 'NhanVienKhamSucKhoe.xlsx');
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
          hopDongKhamSucKhoeId: this.hopDongKhamSucKhoeId,
        },
      });
      self.apiService.get<any>("KhamDoan/ImportNhanVien", params).subscribe((resp) => {
        if (resp) {
          self.notificationService.showSuccess("Thêm nhân viên thành công");
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
