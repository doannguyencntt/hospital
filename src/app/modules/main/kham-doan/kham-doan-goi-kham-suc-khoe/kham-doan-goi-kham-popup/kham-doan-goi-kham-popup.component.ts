import { ChangeDetectorRef, Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import icClose from '@iconify/icons-ic/twotone-close';
import icClear from '@iconify/icons-ic/twotone-clear';
import { ApiService } from 'src/app/core/services/api.service';
import { ActivatedRoute, Router } from '@angular/router';
import { NotificationService } from 'src/app/core/services/notification.service';

@Component({
  selector: 'kham-doan-goi-kham-popup',
  templateUrl: './kham-doan-goi-kham-popup.component.html',
  styleUrls: ['./kham-doan-goi-kham-popup.component.scss']
})
export class GoiKhamViewPopupComponent implements OnInit {

  icClose = icClose;
  icClear = icClear;
  dataKhamDoan: any;

  public chonGoiKham: Boolean = true;
  public isCreatedHopDongKhamSucKhoe: Boolean = true;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private dialogRef: MatDialogRef<any>
  ) { }

  ngOnInit() {
    if (this.data.khamDoanHopDongKham !== undefined && this.data.khamDoanHopDongKham != null) {
      this.isCreatedHopDongKhamSucKhoe = this.data.khamDoanHopDongKham.IsCreatedHopDongKhamSucKhoe;
      if (this.isCreatedHopDongKhamSucKhoe === false) {
        this.chonGoiKham = false;
      }
      this.dataKhamDoan = {
        CongTyKhamSucKhoeId: this.data.khamDoanHopDongKham.CongTyKhamSucKhoeId,
        HopDongKhamSucKhoeId: this.data.khamDoanHopDongKham.HopDongKhamSucKhoeId,
        TenCongTyKhamSucKhoe: this.data.khamDoanHopDongKham.TenCongTyKhamSucKhoe,

        TenHopDongKhamSucKhoe: this.data.khamDoanHopDongKham.TenHopDongKhamSucKhoe,
        NgayHieuLuc: this.data.khamDoanHopDongKham.NgayHieuLuc,
        NgayKetThuc: this.data.khamDoanHopDongKham.NgayKetThuc,
        GoiKhamId: this.data.khamDoanHopDongKham.GoiKhamId,
        LaHopDongKhamSucKhoe: this.data.khamDoanHopDongKham.LaHopDongKhamSucKhoe,
        IsCreatedHopDongKhamSucKhoe: this.data.khamDoanHopDongKham.IsCreatedHopDongKhamSucKhoe,
      }
    }
  }

  afterChangedFromHopDongKham(ev: any) {
    this.dialogRef.close("Yes");
  }

}
