import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import icClose from '@iconify/icons-ic/twotone-close';

@Component({
  selector: 'app-lay-mau-xet-nghiem-xac-nhan-huy-popup',
  templateUrl: './lay-mau-xet-nghiem-xac-nhan-huy-popup.component.html',
  styleUrls: ['./lay-mau-xet-nghiem-xac-nhan-huy-popup.component.scss']
})
export class LayMauXetNghiemXacNhanHuyPopupComponent implements OnInit {

  icClose = icClose;
  Title: any = null;
  Message: any = null;

  lyDo: string = null;
  constructor(private dialogRef: MatDialogRef<LayMauXetNghiemXacNhanHuyPopupComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
    this.Title = this.data.Title;
    this.Message = this.data.Message;
  }

  close(data) {
    if(data == 'ok')
    {
      this.dialogRef.close(this.lyDo);
    }
    else
    {
      this.dialogRef.close(null);
    }
  }
}
