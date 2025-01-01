import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import icClose from '@iconify/icons-ic/twotone-close';

@Component({
  selector: 'app-phieu-cong-khai-vat-tu-loai-in-popup',
  templateUrl: './phieu-cong-khai-vat-tu-loai-in-popup.component.html',
  styleUrls: ['./phieu-cong-khai-vat-tu-loai-in-popup.component.scss']
})
export class PhieuCongKhaiVatTuLoaiInPopupComponent implements OnInit {

  icClose = icClose;

  loaiPhieu: number = 1;
  constructor(@Inject(MAT_DIALOG_DATA) public data: any,
  public dialogRef: MatDialogRef<PhieuCongKhaiVatTuLoaiInPopupComponent>) { }

  ngOnInit() {
  }

  close(huy: boolean = false) {
    if(huy)
    {
      this.dialogRef.close();
    }
    else
    {
      this.dialogRef.close(this.loaiPhieu);
    }
  }
}
