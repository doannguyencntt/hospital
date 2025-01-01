import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import icClose from '@iconify/icons-ic/twotone-close';

@Component({
  selector: 'app-tong-hop-y-lenh-in-phieu-popup',
  templateUrl: './tong-hop-y-lenh-in-phieu-popup.component.html',
  styleUrls: ['./tong-hop-y-lenh-in-phieu-popup.component.scss']
})
export class TongHopYLenhInPhieuPopupComponent implements OnInit {

  icClose = icClose;
  src: string = "";
  constructor(private dialogRef: MatDialogRef<TongHopYLenhInPhieuPopupComponent>,
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
    let source = this.replaceAll(this.data, "<p  style='background: #005dab;color:#fff; height:40px; font-size:30px;text-align:center'><th>PHIẾU CHĂM SÓC</th></p>", "");
    return new Promise(resolve => {
      setTimeout(function () {
        resolve(source);
      }, 100);
      this.close();
      
    });
  }
}
