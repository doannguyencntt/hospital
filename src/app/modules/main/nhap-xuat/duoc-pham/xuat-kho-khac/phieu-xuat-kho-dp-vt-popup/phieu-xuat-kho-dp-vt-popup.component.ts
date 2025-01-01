import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import icClose from '@iconify/icons-ic/twotone-close';
@Component({
  selector: 'app-phieu-xuat-kho-dp-vt-popup',
  templateUrl: './phieu-xuat-kho-dp-vt-popup.component.html',
  styleUrls: ['./phieu-xuat-kho-dp-vt-popup.component.scss']
})
export class PhieuXuatKhoDpVtPopupComponent implements OnInit {
  icClose = icClose;
  src: string = "";
  constructor(private dialogRef: MatDialogRef<PhieuXuatKhoDpVtPopupComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
    this.src = "data:text/html;charset=utf-8," + encodeURIComponent(this.data.html);
  }

  close() {
    this.dialogRef.close();
  }

  getSharedPrintForm() {
    let source = this.data.html;
    return new Promise(resolve => {
      resolve(source);
      // this.close();
    });
  }
}
