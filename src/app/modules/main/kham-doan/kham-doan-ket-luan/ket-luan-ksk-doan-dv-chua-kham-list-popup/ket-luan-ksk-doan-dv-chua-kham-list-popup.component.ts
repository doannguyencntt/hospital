import { Component, OnInit, Inject } from '@angular/core';
import icClose from '@iconify/icons-ic/twotone-close';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import { KhamDoanChuaKetLuan } from '../kham-doan-ket-luan.model';
@Component({
  selector: 'app-ket-luan-ksk-doan-dv-chua-kham-list-popup',
  templateUrl: './ket-luan-ksk-doan-dv-chua-kham-list-popup.component.html',
  styleUrls: ['./ket-luan-ksk-doan-dv-chua-kham-list-popup.component.scss']
})
export class KetLuanKskDoanDvChuaKhamListPopupComponent implements OnInit {
  icClose = icClose;
  popupSavingData: any = null;
  documentType: DocumentType = DocumentType.KhamDoanKetLuanKhamSucKhoeDoan;
  khamDoanChuaKetLuan: KhamDoanChuaKetLuan = new KhamDoanChuaKetLuan();
  soDichVuChuaKham: number = null;
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<KetLuanKskDoanDvChuaKhamListPopupComponent>
  ) { }

  ngOnInit() {
    // console.log("data ", this.data)
    this.soDichVuChuaKham = this.data.DichVuKhamChuaKhams.length + this.data.DichVuKyThuatChuaThucHiens.length;
    this.khamDoanChuaKetLuan = this.data.Model;
  }

  close(result: any) {
    this.dialogRef.close(result);
  }

}
