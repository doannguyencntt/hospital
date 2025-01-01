import { Component, OnInit, Inject, ChangeDetectorRef, Optional, TemplateRef, ViewChild } from "@angular/core";
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from "@angular/material";
import icClose from "@iconify/icons-ic/twotone-close";
import icInfo from '@iconify/icons-ic/baseline-info';

@Component({
  selector: "huy-thong-tin-quyet-toan-popup",
  templateUrl: "./huy-thong-tin-quyet-toan-popup.component.html",
  styleUrls: ["./huy-thong-tin-quyet-toan-popup.component.scss"],
})
export class HuyThongTinQuyetToanComponent implements OnInit {
  icClose = icClose;
  Title: any = null;
  Message: any = null;
  lyDoHuy: any = null;

  ButtonYes: string = "Có";
  ButtonNo: string = "Không";

  constructor(
    private dialogRef: MatDialogRef<any>,
    @Optional() @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.Message = this.data.Message;
  }

  ngOnInit() {


  }

  close(result: any) {
    if (result == "Yes") {
      this.dialogRef.close(this.lyDoHuy);
    } else {
      this.dialogRef.close(null);
    }
  }
}
