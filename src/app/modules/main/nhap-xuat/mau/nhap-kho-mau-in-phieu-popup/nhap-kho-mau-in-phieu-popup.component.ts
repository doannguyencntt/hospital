import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import icClose from '@iconify/icons-ic/twotone-close';

@Component({
  selector: 'app-nhap-kho-mau-in-phieu-popup',
  templateUrl: './nhap-kho-mau-in-phieu-popup.component.html',
  styleUrls: ['./nhap-kho-mau-in-phieu-popup.component.scss']
})
export class NhapKhoMauInPhieuPopupComponent implements OnInit {

  icClose = icClose;
  src: string = "";
  constructor(private dialogRef: MatDialogRef<NhapKhoMauInPhieuPopupComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
    this.src = "data:text/html;charset=utf-8," + encodeURIComponent(this.data);
  }

  close() {
    this.dialogRef.close();
  }

  replaceAll(str, find, replace) {
    return str.replace(new RegExp(find, "g"), replace);
  }

  getSharedPrintForm() {
    // this.data.replace("<p  style='background: #005dab;color:#fff; height:40px; font-size:30px;text-align:center'><th>PHIẾU TRUYỀN MÁU</th></p>", "");
    return new Promise(resolve => {
      let source = this.replaceAll(this.data, "<p  style='background: #005dab;color:#fff; height:40px; font-size:30px;text-align:center'><th>PHIẾU TRUYỀN MÁU</th></p>", "");
      source = this.replaceAll(source, "zoom:100%;", "zoom:80%;");
      setTimeout(function () {
        resolve(source);
      }, 100);
      this.close();
    });
  }
}
