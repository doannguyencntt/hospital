import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import icClose from '@iconify/icons-ic/twotone-close';

@Component({
  selector: 'app-xuat-kho-ksnk-in-phieu-dp-vt-popup',
  templateUrl: './xuat-kho-ksnk-in-phieu-dp-vt-popup.component.html',
  styleUrls: ['./xuat-kho-ksnk-in-phieu-dp-vt-popup.component.scss']
})
export class XuatKhoKSNKInPhieuDPVTPopupComponent implements OnInit {

  icClose = icClose;
  src: string = "";

  constructor(private dialogRef: MatDialogRef<XuatKhoKSNKInPhieuDPVTPopupComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
    this.src = "data:text/html;charset=utf-8," + encodeURIComponent(this.data);
  }

  close() {
    this.dialogRef.close();
  }

  getSharedPrintForm() {    
    let htmlAllDPvaVT = "";
    if(this.data.length > 0){
      this.data.forEach(item => {
        htmlAllDPvaVT += item.replace("<p  style='background: #005dab;color:#fff; height:40px; font-size:30px;text-align:center'><th>PHIẾU XUẤT</th></p>", "");   
      });
    } 
    return new Promise(resolve => {
      resolve(htmlAllDPvaVT);     
    });
  }
  
}
