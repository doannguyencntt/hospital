import { Component, OnInit, Optional, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import icClose from '@iconify/icons-ic/twotone-close';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-giay-chung-nhan-phau-thuat-popup',
  templateUrl: './giay-chung-nhan-phau-thuat-popup.component.html',
  styleUrls: ['./giay-chung-nhan-phau-thuat-popup.component.scss']
})
export class GiayChungNhanPhauThuatPopupComponent implements OnInit {

  icClose = icClose;
  src: string = "";
  constructor(public sanitizer: DomSanitizer,
    private dialogRef: MatDialogRef<GiayChungNhanPhauThuatPopupComponent>,
    @Optional() @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  ngOnInit() {
    this.src = "data:text/html;charset=utf-8," + encodeURIComponent(this.data.Model);
  }

  close() {
    this.dialogRef.close();
  }

  getSharedPrintForm() {
    return new Promise(resolve => {
      resolve(this.data.Model);
      this.close();
    });
  }

}

