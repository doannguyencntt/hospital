import { Component, OnInit, Optional, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import icClose from '@iconify/icons-ic/twotone-close';
import { DomSanitizer } from '@angular/platform-browser';
@Component({
  selector: 'app-dieu-chuyen-kho-noi-bo-duoc-pham-popup',
  templateUrl: './dieu-chuyen-kho-noi-bo-duoc-pham-popup.component.html',
  styleUrls: ['./dieu-chuyen-kho-noi-bo-duoc-pham-popup.component.scss']
})
export class DieuChuyenKhoNoiBoDuocPhamPopupComponent implements OnInit {
  title: string = null;

  icClose = icClose;
  src: string = "";
  constructor(public sanitizer: DomSanitizer,
    private dialogRef: MatDialogRef<DieuChuyenKhoNoiBoDuocPhamPopupComponent>,
    @Optional() @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  ngOnInit() {
    this.title = "PHIẾU XUẤT KHO";
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
