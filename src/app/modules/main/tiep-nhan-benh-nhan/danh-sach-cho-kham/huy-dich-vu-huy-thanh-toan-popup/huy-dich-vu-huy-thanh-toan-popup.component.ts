import { ChangeDetectorRef, Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import icClose from "@iconify/icons-ic/twotone-close";

@Component({
  selector: 'app-huy-dich-vu-huy-thanh-toan-popup',
  templateUrl: './huy-dich-vu-huy-thanh-toan-popup.component.html',
  styleUrls: ['./huy-dich-vu-huy-thanh-toan-popup.component.scss']
})
export class HuyDichVuHuyThanhToanPopupComponent implements OnInit {

  validationErrors: any;
  icClose = icClose;
  lyDoHuy: string = null;
  constructor(@Inject(MAT_DIALOG_DATA) public data: any,
  private dialog: MatDialog,
  private cdRef: ChangeDetectorRef,
  private dialogRef: MatDialogRef<HuyDichVuHuyThanhToanPopupComponent>) { }

  ngOnInit() {
  }

  Huy() {
    this.validationErrors = [];
    this.cdRef.detectChanges();
    if (this.lyDoHuy == null || this.lyDoHuy == "") {
      this.validationErrors.push({
        Message: "Lý do yêu cầu nhập.",
        Field: "LyDoHuy",
      });
      return true;
    } else {
      this.dialogRef.close(this.lyDoHuy);
    }
  }

  close() {
    this.dialog.closeAll();
  }
}
