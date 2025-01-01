import { ChangeDetectorRef, Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

import icClose from "@iconify/icons-ic/twotone-close";

@Component({
    selector: 'app-huy-dv-da-huy-thanh-toan-popup',
    templateUrl: './huy-dv-da-huy-thanh-toan-popup.component.html',
    styleUrls: ['./huy-dv-da-huy-thanh-toan-popup.component.scss']
})

export class HuyDvDaHuyThanhToanPopupComponent implements OnInit {
    validationErrors: any;
    icClose = icClose;
    lyDoHuy: string = null;

    constructor(@Inject(MAT_DIALOG_DATA) public data: any,
                private dialog: MatDialog,
                private cdRef: ChangeDetectorRef,
                private dialogRef: MatDialogRef<HuyDvDaHuyThanhToanPopupComponent>) { }
  
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