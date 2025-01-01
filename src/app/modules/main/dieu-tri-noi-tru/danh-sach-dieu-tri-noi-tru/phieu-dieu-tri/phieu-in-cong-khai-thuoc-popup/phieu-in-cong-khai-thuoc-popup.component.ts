import { Component, OnInit, Optional, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import icClose from '@iconify/icons-ic/twotone-close';
import { DomSanitizer } from '@angular/platform-browser';
@Component({
  selector: 'app-phieu-in-cong-khai-thuoc-popup',
  templateUrl: './phieu-in-cong-khai-thuoc-popup.component.html',
  styleUrls: ['./phieu-in-cong-khai-thuoc-popup.component.scss']
})
export class PhieuInCongKhaiThuocPopupComponent implements OnInit {
  title: string = null;
  laPhieuThucHien: boolean = false;
  icClose = icClose;
  src: string = "";
  constructor(public sanitizer: DomSanitizer,
    private dialogRef: MatDialogRef<PhieuInCongKhaiThuocPopupComponent>,
    @Optional() @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  ngOnInit() {
    this.title = this.data.Title;
    this.src = "data:text/html;charset=utf-8," + encodeURIComponent(this.data.Html);
    this.laPhieuThucHien= this.data.LaPhieuThucHien;
  }

  close() {
    this.dialogRef.close();
  }

  getSharedPrintForm() {
    return new Promise(resolve => {
      resolve(this.data.Html);
      this.close();
    });
  }
}

