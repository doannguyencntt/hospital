import { ChangeDetectorRef, Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { NotificationService } from 'src/app/core/services/notification.service';
import { FileExcelDichVuKyThuat } from '../dich-vu-ky-thuat.model';
import icClose from '@iconify/icons-ic/twotone-close';
import icClear from '@iconify/icons-ic/twotone-clear';
import { CommonService } from 'src/app/core/utilities/common.helper';
import { SystemMessage } from 'src/app/shared/configdata/system-message';
import { LoadingComponent } from 'src/app/shared/component/dialogs/loading/loading.component';
import { ApiService } from 'src/app/core/services/api.service';
import { HttpParams } from '@angular/common/http';
@Component({
  selector: 'app-dich-vu-ky-thuat-chon-file-popup',
  templateUrl: './dich-vu-ky-thuat-chon-file-popup.component.html',
  styleUrls: ['./dich-vu-ky-thuat-chon-file-popup.component.scss']
})
export class DichVuKyThuatChonFilePopupComponent implements OnInit {
  
  icClose = icClose;
  icClear = icClear;

  validationErrors: any = [];
  popupLoadingData: any;
  allowedExtensions: string[] = ['.xlsx', '.xls'];
  invalidFileExtensionMess: string = CommonService.format(SystemMessage.InvalidFileExtension, [this.allowedExtensions.toString()]);
 
  hopDongKhamSucKhoeId: string;
  loadingPopup: any;
  file: FileExcelDichVuKyThuat = new FileExcelDichVuKyThuat();
  fileExcel: FileExcelDichVuKyThuat = null;
  constructor(private dialog: MatDialog,
    private dialogRef: MatDialogRef<DichVuKyThuatChonFilePopupComponent>,
    private cdRef: ChangeDetectorRef,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private notificationService: NotificationService,
    private apiService: ApiService) { }

  ngOnInit() {
  }
  uploadFileDone(event) {
    this.fileExcel = event;
    this.cdRef.detectChanges();
  }
  close(result = null) {
    this.dialogRef.close(result);
  }
  closePopupLoadingData() {
    if (this.popupLoadingData != undefined && this.popupLoadingData != null) {
      this.popupLoadingData.close();
    }
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
      self.apiService.get<any>("DichVuKyThuat/ImportDichVuKyThuat", params).subscribe((resp) => {
        if (resp) {
          self.notificationService.showSuccess("Thêm dịch vụ kỹ thuật thành công");
          this.closeAllDialogs();
          this.dialogRef.close(resp);
        }
      }, (err: any) => {
        self.notificationService.showError(err.Message);
        this.closeAllDialogs();
      });
    }
  }

  TaiFileMau(){
    this.apiService.postExportExcel<string>('DichVuKyThuat/DownloadTemplateDichVuKyThuat').subscribe(
      resultData => {
        CommonService.downLoadFile(resultData, 'application/vnd.ms-excel', 'TemplateDichVuKyThuat.xlsx');
      },
      (err: any) => {
        this.notificationService.showError(err.Message);
      });
  }

}
