import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material';
import icClose from '@iconify/icons-ic/twotone-close';
import { ListDataChildNew } from '../xet-nghiem-ket-qua-new.model';
@Component({
  selector: 'app-ket-qua-xet-nghiem-new-popup-goi-duyet',
  templateUrl: './ket-qua-xet-nghiem-new-popup-goi-duyet.component.html',
  styleUrls: ['./ket-qua-xet-nghiem-new-popup-goi-duyet.component.scss']
})
export class KetQuaXetNghiemNewPopupGoiDuyetComponent implements OnInit {
  icClose=icClose;
  lstData: ListDataChildNew[] = new Array<ListDataChildNew>();
  constructor(@Inject(MAT_DIALOG_DATA) public data: ListDataChildNew[]
  , private dialog: MatDialog, public dialogRef: MatDialogRef<KetQuaXetNghiemNewPopupGoiDuyetComponent>) { 
    this.lstData = data;
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