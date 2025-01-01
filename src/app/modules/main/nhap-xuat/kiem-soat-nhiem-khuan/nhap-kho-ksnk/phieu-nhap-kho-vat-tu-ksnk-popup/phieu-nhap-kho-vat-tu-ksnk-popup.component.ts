import { Component, OnInit, Optional, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import icClose from '@iconify/icons-ic/twotone-close';
import { DomSanitizer } from '@angular/platform-browser';
@Component({
  selector: 'app-phieu-nhap-kho-vat-tu-ksnk-popup',
  templateUrl: './phieu-nhap-kho-vat-tu-ksnk-popup.component.html',
  styleUrls: ['./phieu-nhap-kho-vat-tu-ksnk-popup.component.scss']
})
export class PhieuNhapKhoVatTuKSNKPopupComponent implements OnInit {
  icClose = icClose;
  src: string = "";
  constructor(private dialog: MatDialog, public sanitizer: DomSanitizer,
    private dialogRef: MatDialogRef<PhieuNhapKhoVatTuKSNKPopupComponent>,

  @Optional() @Inject(MAT_DIALOG_DATA) public data: any) { }

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
