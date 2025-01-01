import { Component, OnInit, Optional, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import icClose from '@iconify/icons-ic/twotone-close';
@Component({
  selector: 'app-gui-phieu-mua-duoc-pham-confirm',
  templateUrl: './gui-phieu-mua-duoc-pham-confirm.component.html',
  styleUrls: ['./gui-phieu-mua-duoc-pham-confirm.component.scss']
})
export class GuiPhieuMuaDuocPhamConfirmComponent implements OnInit {
  icClose = icClose;
  Title: any = null;
  Message: any = null;
  ButtonYes: string = "Có";
  ButtonYesAndPrint: string = "Có & In Phiếu";
  ButtonNo: string = "Không";
  constructor(
    private dialogRef: MatDialogRef<GuiPhieuMuaDuocPhamConfirmComponent>,
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
