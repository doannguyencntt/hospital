import { Component, OnInit, ChangeDetectorRef, Inject } from '@angular/core';
import { ThongTinLyDoHuyNhapKhoDuocPham } from '../duyet-nhap-kho.model';
import icClose from "@iconify/icons-ic/twotone-close";
import { MatDialog, MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-tu-choi-duyet-duoc-pham',
  templateUrl: './tu-choi-duyet-duoc-pham.component.html',
  styleUrls: ['./tu-choi-duyet-duoc-pham.component.scss']
})
export class TuChoiDuyetDuocPhamComponent implements OnInit {
  validationErrors: any;
  icClose = icClose;
  thongTinLyDoHuyNhapKhoDuocPham = new ThongTinLyDoHuyNhapKhoDuocPham();

  constructor(@Inject(MAT_DIALOG_DATA) public data: any,
    private dialog: MatDialog,
    private cdRef: ChangeDetectorRef,
    private dialogRef: MatDialogRef<any>) {

  }

  ngOnInit() {
    this.thongTinLyDoHuyNhapKhoDuocPham.LyDoHuy = "";
  }

  Huy() {
    this.validationErrors = [];
    this.cdRef.detectChanges();
    if (this.thongTinLyDoHuyNhapKhoDuocPham.LyDoHuy == "") {
      this.validationErrors.push({
        Message: "Bạn phải nhập lí do từ chối phê duyệt.",
        Field: "LyDoHuy",
      });
      return true;
    } else {
      this.dialogRef.close(this.thongTinLyDoHuyNhapKhoDuocPham.LyDoHuy);
    }
  }

  close() {
    this.dialog.closeAll();
  }
}
