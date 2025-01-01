import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import icClose from '@iconify/icons-ic/twotone-close';

@Component({
  selector: 'app-kham-doan-tat-ca-phong-dv-chua-thuc-hien-popup',
  templateUrl: './kham-doan-tat-ca-phong-dv-chua-thuc-hien-popup.component.html',
  styleUrls: ['./kham-doan-tat-ca-phong-dv-chua-thuc-hien-popup.component.scss']
})
export class KhamDoanTatCaPhongDvChuaThucHienPopupComponent implements OnInit {

  icClose = icClose;
  
  soDichVuChuaKham: number = null;
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<KhamDoanTatCaPhongDvChuaThucHienPopupComponent>
  ) { }

  ngOnInit() {
    this.soDichVuChuaKham = this.data.DichVuKhamBenhs.length + this.data.DichVuKyThuats.length;
  }

  close(result: any) {
    this.dialogRef.close(result);
  }
}
