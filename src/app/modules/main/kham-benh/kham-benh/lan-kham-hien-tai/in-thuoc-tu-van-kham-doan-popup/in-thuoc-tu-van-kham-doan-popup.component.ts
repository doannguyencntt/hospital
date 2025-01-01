import { Component, OnInit, Optional, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import icClose from '@iconify/icons-ic/twotone-close';
import { DomSanitizer } from '@angular/platform-browser';
@Component({
  selector: 'app-in-thuoc-tu-van-kham-doan-popup',
  templateUrl: './in-thuoc-tu-van-kham-doan-popup.component.html',
  styleUrls: ['./in-thuoc-tu-van-kham-doan-popup.component.scss']
})
export class InThuocTuVanKhamDoanPopupComponent implements OnInit {

  icClose = icClose;
  src: string = "";
  constructor(public sanitizer: DomSanitizer,
    private dialogRef: MatDialogRef<InThuocTuVanKhamDoanPopupComponent>,
    @Optional() @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  ngOnInit() {
    this.src = "data:text/html;charset=utf-8," + encodeURIComponent(this.data);
  }

  close() {
    this.dialogRef.close();
  }

  getSharedPrintForm() {
    return new Promise(resolve => {
      resolve(this.data);
      this.close();
    });
  }
}
