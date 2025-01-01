import { Component, Optional, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import icClose from '@iconify/icons-ic/twotone-close';
import icWarning from '@iconify/icons-ic/warning';
@Component({
  selector: 'app-trung-thuoc-popup',
  templateUrl: './trung-thuoc-popup.component.html',
  styleUrls: ['./trung-thuoc-popup.component.scss']
})
export class TrungThuocPopupComponent implements OnInit {
  icClose = icClose;
  Title: any = null;
  Message: any = null;
  icWarning = icWarning;
  ButtonOk: string = "Tiếp tục";
  ButtonCancel: string = "Quay lại";
  ButtonClose: string = "Đóng";
  HideClose: boolean = false;
  isOver30Days: boolean = false;
  constructor(private dialogRef: MatDialogRef<TrungThuocPopupComponent>,
    @Optional() @Inject(MAT_DIALOG_DATA) public data: any) {
    this.Title = data.Title;
    this.Message = data.Message;
    console.log("data.SoNgay: ", data.SoNgay)
    if (Number(data.SoNgay) > 30) {
      this.isOver30Days = true;
    } else {
      this.isOver30Days = false;
    }
  }

  ngOnInit() {

  }
  close(answer: string) {
    this.dialogRef.close(answer);
  }
}
