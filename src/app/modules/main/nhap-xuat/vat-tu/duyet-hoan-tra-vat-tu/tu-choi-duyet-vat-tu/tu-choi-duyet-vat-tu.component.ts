import { Component, OnInit, ChangeDetectorRef, Inject } from '@angular/core';
import icClose from "@iconify/icons-ic/twotone-close";
import { MatDialog, MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-tu-choi-duyet-vat-tu',
  templateUrl: './tu-choi-duyet-vat-tu.component.html',
  styleUrls: ['./tu-choi-duyet-vat-tu.component.scss']
})
export class TuChoiDuyetVatTuComponent implements OnInit {
  validationErrors: any;
  icClose = icClose;
  lyDoHuy: string;
  // thongTinLyDoHuyHoanTraVatTu = new ThongTinLyDoHuyHoanTraVatTu();

  constructor(@Inject(MAT_DIALOG_DATA) public data: any,
    private dialog: MatDialog,
    private cdRef: ChangeDetectorRef,
    private dialogRef: MatDialogRef<any>) {

  }

  ngOnInit() {
    // this.thongTinLyDoHuyHoanTraVatTu.LyDoHuy = "";
    this.lyDoHuy = "";
  }

  Huy() {
    this.validationErrors = [];
    this.cdRef.detectChanges();
    if (this.lyDoHuy == "") {
      this.validationErrors.push({
        Message: "Bạn phải nhập lí do từ chối phê duyệt.",
        Field: "LyDoHuy",
      });
      return true;
    } else {
      this.dialogRef.close(this.lyDoHuy);
    }
  }

  close() {
    this.dialog.closeAll();
  }
}
