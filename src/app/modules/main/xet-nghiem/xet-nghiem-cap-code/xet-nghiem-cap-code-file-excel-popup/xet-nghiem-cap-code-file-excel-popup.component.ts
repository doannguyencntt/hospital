import { ChangeDetectorRef, Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { LoadingComponent } from 'src/app/shared/component/dialogs/loading/loading.component';
import { CommonService } from 'src/app/core/utilities/common.helper';
import { SystemMessage } from 'src/app/shared/configdata/system-message';
import { ApiService } from 'src/app/core/services/api.service';
import { NotificationService } from 'src/app/core/services/notification.service';
import { FileExcelNhanVien } from '../../../kham-doan/kham-doan-hop-dong-kham/kham-doan-hop-dong-kham.model';
import icClose from '@iconify/icons-ic/twotone-close';
import icClear from '@iconify/icons-ic/twotone-clear';
import { XetNghiemCapCodeFileExcelErrosPopupComponent } from '../xet-nghiem-cap-code-file-excel-erros-popup/xet-nghiem-cap-code-file-excel-erros-popup.component';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import { SecurityOperation } from 'src/app/shared/enum/security-operation.enum';
import { AuthService } from 'src/app/core/services/auth.service';
@Component({
  selector: 'app-xet-nghiem-cap-code-file-excel-popup',
  templateUrl: './xet-nghiem-cap-code-file-excel-popup.component.html',
  styleUrls: ['./xet-nghiem-cap-code-file-excel-popup.component.scss']
})
export class XetNghiemCapCodeFileExcelPopupComponent implements OnInit {
  icClose = icClose;
  icClear = icClear;

  documentType: DocumentType = DocumentType.LayMauXetNghiem;
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
    private dialogRef: MatDialogRef<XetNghiemCapCodeFileExcelPopupComponent>,
    private cdRef: ChangeDetectorRef,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private notificationService: NotificationService,
    private apiService: ApiService,
    private authService: AuthService,

  ) { }

  ngOnInit() {
  }

  uploadFileDone(event: any) {
    this.fileExcel = event;
    this.cdRef.detectChanges();
  }

  close() {
    this.dialogRef.close();
  }
  popupAddingData: any = null;
  addingPage() {
    this.popupAddingData = this.dialog.open(LoadingComponent, {
      disableClose: true,
      width: "200px",
      height: "90px",
      data: { Title: "Đang cấp barcode..." },
    });
  }

  closepopupAddingData() {
    if (this.popupAddingData != undefined && this.popupAddingData != null) {
      this.popupAddingData.close();
    }
  }

  xuLyFile() {
    const self = this;
    if (self.authService.hasPermission(self.documentType, SecurityOperation.Update)) {
      if (self.fileExcel != undefined && self.fileExcel != null) {
        let obj = {
          TenGuid: self.fileExcel.TenGuid,
          DuongDan: "hapu.tmp"
        }
        self.addingPage();
        self.apiService.post<any>("XetNghiem/ImportNguoiBenhChuaCapBarcodeXetNghiem", obj).subscribe((resp) => {
          if (resp) {
            self.closepopupAddingData();
            if (resp.length > 0 && resp.some((z: any) => z.IsError)) {
              this.dialog.open(XetNghiemCapCodeFileExcelErrosPopupComponent, {
                disableClose: false,
                width: '1300px',
                data: { Title: 'DS Người Bệnh Chưa Cấp Barcode Bị Lỗi.', Data: resp }
              }).afterClosed().subscribe(() => {
                if (resp.some((z: { IsError: any; }) => !z.IsError)) {
                  self.notificationService.showSuccess("Cấp barcode thành công");
                } else {
                  self.notificationService.showError("Cấp barcode không thành công");
                }
                self.close();
              });
            } else {
              self.notificationService.showSuccess("Cấp barcode thành công");
              self.close();
            }
          }
        }, (err: any) => {
          self.notificationService.showError(err.Message);
          self.closepopupAddingData();
        });
      }
    } else {
      this.notificationService.showError(SystemMessage.UnAuthorizedMessage);
    }
  }
}
