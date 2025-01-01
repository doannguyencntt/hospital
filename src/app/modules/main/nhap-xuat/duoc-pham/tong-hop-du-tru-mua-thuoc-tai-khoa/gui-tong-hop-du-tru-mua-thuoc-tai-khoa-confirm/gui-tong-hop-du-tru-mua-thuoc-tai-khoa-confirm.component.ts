import { Component, OnInit, Optional, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import icClose from '@iconify/icons-ic/twotone-close';
@Component({
  selector: 'app-gui-tong-hop-du-tru-mua-thuoc-tai-khoa-confirm',
  templateUrl: './gui-tong-hop-du-tru-mua-thuoc-tai-khoa-confirm.component.html',
  styleUrls: ['./gui-tong-hop-du-tru-mua-thuoc-tai-khoa-confirm.component.scss']
})
export class GuiTongHopDuTruMuaThuocTaiKhoaConfirmComponent implements OnInit {
  icClose = icClose;
  Title: any = null;
  Message: any = null;
  ButtonYes:string="Có";
  ButtonYesAndPrint:string="Có & In Phiếu";
  ButtonNo:string="Không";
  constructor(
    private dialogRef: MatDialogRef<GuiTongHopDuTruMuaThuocTaiKhoaConfirmComponent>,
    @Optional() @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  ngOnInit() {
    this.Title = this.data.Title;
    this.Message = this.data.Message;
  }

  close(result: any) {
    this.dialogRef.close(result);
  }


}
