import { Component, OnInit, Optional, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import icClose from '@iconify/icons-ic/twotone-close';
import { DomSanitizer } from '@angular/platform-browser';
@Component({
  selector: 'app-phieu-kham-benh-noi-tru-popup',
  templateUrl: './phieu-kham-benh-noi-tru-popup.component.html',
  styleUrls: ['./phieu-kham-benh-noi-tru-popup.component.scss']
})
export class PhieuKhamBenhNoiTruPopupComponent implements OnInit {
  icClose = icClose;
  src: string = "";
  constructor(public sanitizer: DomSanitizer,
    private dialogRef: MatDialogRef<PhieuKhamBenhNoiTruPopupComponent>,
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
      // this.close();
    });
  }
}