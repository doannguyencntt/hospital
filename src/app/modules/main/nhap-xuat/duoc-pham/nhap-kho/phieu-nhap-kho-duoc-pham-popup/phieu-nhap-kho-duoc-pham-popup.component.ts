import { Component, OnInit, Optional, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import icClose from '@iconify/icons-ic/twotone-close';
import { DomSanitizer } from '@angular/platform-browser';
@Component({
  selector: 'app-phieu-nhap-kho-duoc-pham-popup',
  templateUrl: './phieu-nhap-kho-duoc-pham-popup.component.html',
  styleUrls: ['./phieu-nhap-kho-duoc-pham-popup.component.scss']
})
export class PhieuNhapKhoDuocPhamPopupComponent implements OnInit {
  icClose = icClose;
  src: string = "";
  constructor(private dialog: MatDialog, public sanitizer: DomSanitizer,
    private dialogRef: MatDialogRef<PhieuNhapKhoDuocPhamPopupComponent>,

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
    });
  }

}
