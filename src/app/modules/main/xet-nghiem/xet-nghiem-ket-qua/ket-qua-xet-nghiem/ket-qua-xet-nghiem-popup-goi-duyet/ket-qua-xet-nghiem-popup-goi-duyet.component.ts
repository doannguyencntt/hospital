import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material';
import icClose from '@iconify/icons-ic/twotone-close';
import { ListDataChild } from '../ket-qua-xet-nghiem.model';

@Component({
  selector: 'app-ket-qua-xet-nghiem-popup-goi-duyet',
  templateUrl: './ket-qua-xet-nghiem-popup-goi-duyet.component.html',
  styleUrls: ['./ket-qua-xet-nghiem-popup-goi-duyet.component.scss']
})
export class KetQuaXetNghiemPopupGoiDuyetComponent implements OnInit {

  icClose=icClose;
  lstData: ListDataChild[] = new Array<ListDataChild>();
  constructor(@Inject(MAT_DIALOG_DATA) public data: ListDataChild[]
  , private dialog: MatDialog, public dialogRef: MatDialogRef<KetQuaXetNghiemPopupGoiDuyetComponent>) { 
    this.lstData = data;
    console.log("data = ", this.lstData);
  }

  ngOnInit() {
  }

  close(){
    this.dialogRef.close();
  }
  Khong(){
    this.dialogRef.close();
  }
  Co(){
    this.dialogRef.close("Yes");
  }
}
