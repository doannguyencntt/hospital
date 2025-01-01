import { Component, OnInit, Inject, ChangeDetectorRef } from '@angular/core';
import icClose from '@iconify/icons-ic/twotone-close';
import { MatDialog, MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { ApiService } from 'src/app/core/services/api.service';
import { NotificationService } from 'src/app/core/services/notification.service';
import { ApiError } from 'src/app/shared/models/api-error.model';
import { KeVatTuItem } from '../../../kham-benh.model';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';
@Component({
  selector: 'app-chinh-sua-vat-tu-chi-tiet-popup',
  templateUrl: './chinh-sua-vat-tu-chi-tiet-popup.component.html',
  styleUrls: ['./chinh-sua-vat-tu-chi-tiet-popup.component.scss']
})
export class ChinhSuaVatTuChiTietPopupComponent implements OnInit {
  icClose = icClose;
  validationErrors: any[] = [];
  validationErrorsUpdate: any = null;
  vatTuEdit: KeVatTuItem = new KeVatTuItem();
  loaiDuocPhamHoacVatTu: number = 2;
  isSelectDuocPham: boolean = false;
  IsKhamBenhDangKham: boolean = false;

  documentType: DocumentType;
  constructor(
    private ref: ChangeDetectorRef,
    private notificationService: NotificationService,
    private apiService: ApiService,
    private dialog: MatDialog, @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<ChinhSuaVatTuChiTietPopupComponent>
  ) { }

  ngOnInit() {
    this.vatTuEdit = this.data.Model;
    this.vatTuEdit.DuocPhamId = this.vatTuEdit.VatTuBenhVienId;
    this.documentType = this.data.documentType;
    this.IsKhamBenhDangKham = this.data.IsKhamBenhDangKham != undefined && this.data.IsKhamBenhDangKham;
  }

  onKey(event: any) {
    if (event.key == "Enter") {
      if (this.isSelectDuocPham != true) {
      }
      else {
        this.isSelectDuocPham = false;
      }
    }
  }


  openCombobox(event: any) {
    if (event) {
      this.isSelectDuocPham = true;
    }
    else {
      this.isSelectDuocPham = false;
    }
  }

  luuVatTu() {
    var self = this;
    self.validationErrorsUpdate = null;
    self.ref.detectChanges();
    if (self.documentType == DocumentType.KhamBenhDangKham || this.IsKhamBenhDangKham) {
      self.vatTuEdit.IsKhamBenhDangKham = true;
    }
    self.apiService.post("KhamBenh/UpdateVatTuChiTiet", self.vatTuEdit).subscribe(
      (res) => {
        let obj = {
          VatTuEdit: self.vatTuEdit,
          Status: "CapNhat",
          MucTranChiPhi: res
        }
        self.closePopup(obj);
      },
      (err: ApiError) => {
        self.validationErrorsUpdate = err.ValidationErrors;
        if (err.Message != "Validation Failed") {
          self.notificationService.showError(err.Message);
        }
      });
  }
  close() {
    this.dialog.closeAll();
  }
  closePopup(result: any) {
    this.dialogRef.close(result);
  }
}
