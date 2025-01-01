import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import icClose from '@iconify/icons-ic/twotone-close';

@Component({
  selector: 'app-kham-doan-khth-duyet-tu-choi-popup',
  templateUrl: './kham-doan-khth-duyet-tu-choi-popup.component.html',
  styleUrls: ['./kham-doan-khth-duyet-tu-choi-popup.component.scss']
})
export class KhamDoanKhthDuyetTuChoiPopupComponent implements OnInit {

  icClose = icClose;
  Title: any = null;
  Message: any = null;
  validationErrors: any;

  lyDo: string = null;
  constructor(private dialogRef: MatDialogRef<KhamDoanKhthDuyetTuChoiPopupComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
    this.Title = this.data.Title;
    this.Message = this.data.Message;
  }

  close(data) {
    if(data == 'ok')
    {
      this.validationErrors = [];
      if(this.lyDo == undefined || this.lyDo == null || this.lyDo == '')
      {
        this.validationErrors.push({ Message: 'Lý do yêu cầu nhập', Field: 'lyDo' });
      }
      else
      {
        this.dialogRef.close(this.lyDo);
      }
    }
    else
    {
      this.dialogRef.close(null);
    }
  }
}
