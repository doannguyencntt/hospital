import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import icClose from '@iconify/icons-ic/twotone-close';

@Component({
  selector: 'app-khong-duyet',
  templateUrl: './khong-duyet.component.html',
  styleUrls: ['./khong-duyet.component.scss']
})
export class KhongDuyetComponent implements OnInit {

  icClose = icClose;
  Title: any = null;
  Message: any = null;

  lyDo: string = null;
  constructor(private dialogRef: MatDialogRef<KhongDuyetComponent>,
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
