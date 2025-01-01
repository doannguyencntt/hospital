import { Component, Inject, OnInit, Optional } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import icClose from '@iconify/icons-ic/twotone-close';

@Component({
  selector: 'app-kham-benh-dich-vu-chua-thuc-hien-popup',
  templateUrl: './kham-benh-dich-vu-chua-thuc-hien-popup.component.html',
  styleUrls: ['./kham-benh-dich-vu-chua-thuc-hien-popup.component.scss']
})
export class KhamBenhDichVuChuaThucHienPopupComponent implements OnInit {

  icClose = icClose;
  
  dichVus: Array<any> = [];
  constructor(
    private dialogRef: MatDialogRef<KhamBenhDichVuChuaThucHienPopupComponent>,
    @Optional() @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  ngOnInit() {
    this.dichVus = this.data.DichVus;
  }

  close(answer: string) {
    this.dialogRef.close(answer);
  }
}
