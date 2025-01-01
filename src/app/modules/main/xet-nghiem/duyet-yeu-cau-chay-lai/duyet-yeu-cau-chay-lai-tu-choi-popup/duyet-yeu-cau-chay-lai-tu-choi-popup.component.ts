import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import icClose from '@iconify/icons-ic/twotone-close';

@Component({
  selector: 'app-duyet-yeu-cau-chay-lai-tu-choi-popup',
  templateUrl: './duyet-yeu-cau-chay-lai-tu-choi-popup.component.html',
  styleUrls: ['./duyet-yeu-cau-chay-lai-tu-choi-popup.component.scss']
})
export class DuyetYeuCauChayLaiTuChoiPopupComponent implements OnInit {

  icClose = icClose;
  Title: any = null;
  Message: any = null;

  lyDo: string = null;
  constructor(private dialogRef: MatDialogRef<DuyetYeuCauChayLaiTuChoiPopupComponent>,
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
