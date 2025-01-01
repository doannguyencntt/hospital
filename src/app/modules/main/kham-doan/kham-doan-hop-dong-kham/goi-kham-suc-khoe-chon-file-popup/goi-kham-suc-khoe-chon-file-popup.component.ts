import { ChangeDetectorRef, Component, Inject, OnInit } from '@angular/core';
import icClose from '@iconify/icons-ic/twotone-close';
import icClear from '@iconify/icons-ic/twotone-clear';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonService } from 'src/app/core/utilities/common.helper';
import { FileExcelDichVu } from '../../kham-doan-goi-kham-suc-khoe/kham-doan-goi-kham-suc-khoe.model';
import { AuthService } from 'src/app/core/services/auth.service';
import { NotificationService } from 'src/app/core/services/notification.service';
import { SystemMessage } from 'src/app/shared/configdata/system-message';
import { ApiService } from 'src/app/core/services/api.service';

import { HttpParams } from '@angular/common/http';
import { LoadingComponent } from 'src/app/shared/component/dialogs/loading/loading.component';
@Component({
  selector: 'goi-kham-suc-khoe-chon-file-popup',
  templateUrl: './goi-kham-suc-khoe-chon-file-popup.component.html',
  styleUrls: ['./goi-kham-suc-khoe-chon-file-popup.component.scss']
})
export class HopDongKhamChonGoiKhamFilePopupComponent implements OnInit {
  icClose = icClose;
  icClear = icClear;
  hopDongKhamSucKhoeId : string;
  validationErrors: any = [];
  popupLoadingData: any;
  allowedExtensions: string[] = ['.xlsx', '.xls'];
  invalidFileExtensionMess:string = CommonService.format(SystemMessage.InvalidFileExtension, [this.allowedExtensions.toString()]);
  file: FileExcelDichVu = new FileExcelDichVu();
  loadingPopup : any;

  fileExcel: FileExcelDichVu = null;
  constructor(
    private dialog: MatDialog,
    private dialogRef: MatDialogRef<HopDongKhamChonGoiKhamFilePopupComponent>,
    private cdRef: ChangeDetectorRef,
    private authService: AuthService, private cd: ChangeDetectorRef,
    private notificationService: NotificationService,
    @Inject(MAT_DIALOG_DATA) public data: any,
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

  uploadFileDone(event)
  {   
    this.fileExcel = event;
    this.cdRef.detectChanges();
  }

  xuLyFile(){    
    const self = this; 
    if (this.fileExcel != undefined && this.fileExcel != null) {
      this.showLoadingPopup();
      const params = new HttpParams({
        fromObject: {
          tenGuid: this.fileExcel.TenGuid,
          duongDan:  "hapu.tmp",
          hopDongKhamSucKhoeId:  this.hopDongKhamSucKhoeId,
        },
      });
      self.apiService.get<any>("KhamDoan/ImportGoiKham", params).subscribe((resp) => {
        if (resp) {
          
          self.notificationService.showSuccess("Thêm gói khám thành công"); 
          this.closeAllDialogs();
          this.dialogRef.close(resp);                
        }
      },(err: any) => {
        self.notificationService.showError(err.Message);      
        this.closeAllDialogs();
      });   
    }
     
  }

  TaiFileMau(){
    const self = this;
    self.apiService.postExportExcel<string>('KhamDoan/DownloadTemplateGoiKham').subscribe(
      resultData => {       
        CommonService.downLoadFile(resultData, 'application/vnd.ms-excel','TemplateGoiKham.xlsx');
      },
      (err: any) => {
        self.notificationService.showError(err.Message);      
      });
  }

  close(result = null)
  {
    this.dialogRef.close(result);
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
