import { Component, OnInit, Optional, Inject } from '@angular/core';
import icClose from '@iconify/icons-ic/twotone-close';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-khong-duyet-popup',
  templateUrl: './khong-duyet-popup.component.html',
  styleUrls: ['./khong-duyet-popup.component.scss']
})
export class KhongDuyetPopupComponent implements OnInit {

  icClose = icClose;
  Title: any = null;
  Message: any = null;

  lyDo: string = null;
  constructor(private dialogRef: MatDialogRef<KhongDuyetPopupComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {

  }

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
