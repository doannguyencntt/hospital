import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef, MatDialog } from '@angular/material/dialog';
import icClose from '@iconify/icons-ic/twotone-close';
import { KhamDoanKetQuaMau } from '../kham-doan-ket-luan.model';

@Component({
  selector: 'app-ket-luan-kham-suc-khoe-doan-ket-qua-mau-popup',
  templateUrl: './ket-luan-kham-suc-khoe-doan-ket-qua-mau-popup.component.html',
  styleUrls: ['./ket-luan-kham-suc-khoe-doan-ket-qua-mau-popup.component.scss']
})
export class KetLuanKhamSucKhoeDoanKetQuaMauPopupComponent implements OnInit {
  icClose = icClose;
  khamDoanKetQuaMaus: KhamDoanKetQuaMau[] = [];
  constructor(
    private dialog: MatDialog,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<KetLuanKhamSucKhoeDoanKetQuaMauPopupComponent>

  ) { }

  ngOnInit() {
    this.khamDoanKetQuaMaus = this.data;
    // console.log("khamDoanKetQuaMau:", this.khamDoanKetQuaMaus)
  }
  close() {
    this.dialog.closeAll();
  }

  closePopup(result: any) {
    this.dialogRef.close(result);
  }

  ok() {
    this.closePopup(this.khamDoanKetQuaMaus);
  }
}
