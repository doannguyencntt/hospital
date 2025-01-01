import { Component, OnInit, Optional, Inject } from '@angular/core';
import icClose from '@iconify/icons-ic/twotone-close';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-tu-choi-duyet-popup',
  templateUrl: './tu-choi-duyet-popup.component.html',
  styleUrls: ['./tu-choi-duyet-popup.component.scss']
})
export class TuChoiDuyetPopupComponent implements OnInit {

  icClose = icClose;
  Title: any = null;
  Message: any = null;

  lyDo: string = null;
  constructor(private dialogRef: MatDialogRef<TuChoiDuyetPopupComponent>,
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
