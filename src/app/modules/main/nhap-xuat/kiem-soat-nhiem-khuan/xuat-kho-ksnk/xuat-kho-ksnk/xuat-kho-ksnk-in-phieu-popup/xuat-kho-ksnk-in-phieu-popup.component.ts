import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import icClose from '@iconify/icons-ic/twotone-close';

@Component({
  selector: 'app-xuat-kho-ksnk-in-phieu-popup',
  templateUrl: './xuat-kho-ksnk-in-phieu-popup.component.html',
  styleUrls: ['./xuat-kho-ksnk-in-phieu-popup.component.scss']
})
export class XuatKhoKSNKInPhieuPopupComponent implements OnInit {

  icClose = icClose;
  src: string = "";

  constructor(private dialogRef: MatDialogRef<XuatKhoKSNKInPhieuPopupComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
    this.src = "data:text/html;charset=utf-8," + encodeURIComponent(this.data);
  }

  close() {
    this.dialogRef.close();
  }

  getSharedPrintForm() {
    let source = this.data.replace("<p  style='background: #005dab;color:#fff; height:40px; font-size:30px;text-align:center'><th>PHIẾU XUẤT</th></p>", "");
    return new Promise(resolve => {
      resolve(source);
      // this.close();
    });
  }
  
}
