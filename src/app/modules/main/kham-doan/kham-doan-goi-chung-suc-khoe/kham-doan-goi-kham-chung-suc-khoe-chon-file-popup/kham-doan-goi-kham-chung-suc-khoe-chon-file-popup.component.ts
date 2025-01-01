import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import icClose from '@iconify/icons-ic/twotone-close';
import icClear from '@iconify/icons-ic/twotone-clear';
import { CommonService } from 'src/app/core/utilities/common.helper';
import { SystemMessage } from 'src/app/shared/configdata/system-message';
import { MatDialog, MatDialogRef } from '@angular/material';
import { LoadingComponent } from 'src/app/shared/component/dialogs/loading/loading.component';
import { FileExcelDichVu } from '../kham-doan-goi-kham-chung-suc-khoe.model';

@Component({
  selector: 'kham-doan-goi-kham-chung-suc-khoe-chon-file-popup',
  templateUrl: './kham-doan-goi-kham-chung-suc-khoe-chon-file-popup.component.html',
  styleUrls: ['./kham-doan-goi-kham-chung-suc-khoe-chon-file-popup.component.scss']
})
export class KhamDoanGoiKhamChungSucKhoeChonFilePopupComponent implements OnInit {

  icClose = icClose;
  icClear = icClear;

  validationErrors: any = [];
  popupLoadingData: any;
  allowedExtensions: string[] = ['.xlsx', '.xls'];
  invalidFileExtensionMess:string = CommonService.format(SystemMessage.InvalidFileExtension, [this.allowedExtensions.toString()]);
  file: FileExcelDichVu = new FileExcelDichVu();

  fileExcel: FileExcelDichVu = null;
  constructor(
    private dialog: MatDialog,
    private dialogRef: MatDialogRef<KhamDoanGoiKhamChungSucKhoeChonFilePopupComponent>,
    private cdRef: ChangeDetectorRef
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

  uploadFileDone(event)
  {
    this.fileExcel = event;
    this.cdRef.detectChanges();
  }

  close(result = null)
  {
    this.dialogRef.close(result);
  }
}
