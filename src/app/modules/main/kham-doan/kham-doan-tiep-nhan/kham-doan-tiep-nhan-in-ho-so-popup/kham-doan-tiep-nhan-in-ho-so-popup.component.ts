import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import icClose from '@iconify/icons-ic/twotone-close';
import { ChonPhieuInKhamSucKhoe } from '../kham-doan-tiep-nhan.model';

@Component({
  selector: 'app-kham-doan-tiep-nhan-in-ho-so-popup',
  templateUrl: './kham-doan-tiep-nhan-in-ho-so-popup.component.html',
  styleUrls: ['./kham-doan-tiep-nhan-in-ho-so-popup.component.scss']
})
export class KhamDoanTiepNhanInHoSoPopupComponent implements OnInit {

  icClose = icClose;
  chonPhieuInKhamSucKhoe: ChonPhieuInKhamSucKhoe = new ChonPhieuInKhamSucKhoe();
  constructor(
    private dialogRef: MatDialogRef<KhamDoanTiepNhanInHoSoPopupComponent>
  ) { }

  ngOnInit() {
  }

  close(data) {
    if(data == 'ok')
    {
      this.dialogRef.close(this.chonPhieuInKhamSucKhoe);
    }
    else
    {
      this.dialogRef.close(null);
    }
  }
}
