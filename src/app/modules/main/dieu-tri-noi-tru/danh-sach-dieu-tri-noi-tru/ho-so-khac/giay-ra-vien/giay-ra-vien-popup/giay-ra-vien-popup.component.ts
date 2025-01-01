import { Component, OnInit, Optional, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import icClose from '@iconify/icons-ic/twotone-close';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-giay-ra-vien-popup',
  templateUrl: './giay-ra-vien-popup.component.html',
  styleUrls: ['./giay-ra-vien-popup.component.scss']
})
export class GiayRaVienPopupComponent implements OnInit {

  icClose = icClose;
  src: string = "";
  constructor(public sanitizer: DomSanitizer,
    private dialogRef: MatDialogRef<GiayRaVienPopupComponent>,
    @Optional() @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  ngOnInit() {
    this.src = "data:text/html;charset=utf-8," + encodeURIComponent(this.data.Data);
  }

  close() {
    this.dialogRef.close();
  }

  getSharedPrintForm() {
    return new Promise(resolve => {
      resolve(this.data.Data);
      this.close();
    });
  }

}
