import { Component, OnInit, Optional, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import icClose from '@iconify/icons-ic/twotone-close';
import { DomSanitizer } from '@angular/platform-browser';
@Component({
  selector: 'app-phieu-in-truyen-mau-popup',
  templateUrl: './phieu-in-truyen-mau-popup.component.html',
  styleUrls: ['./phieu-in-truyen-mau-popup.component.scss']
})
export class PhieuInTruyenMauPopupComponent implements OnInit {

  icClose = icClose;
  src: string = "";
  constructor(public sanitizer: DomSanitizer,
    private dialogRef: MatDialogRef<PhieuInTruyenMauPopupComponent>,
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