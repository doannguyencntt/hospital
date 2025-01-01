import { Component, OnInit, Optional, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import icClose from '@iconify/icons-ic/twotone-close';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-phieu-tra-thuoc-tu-benh-nhan-popup',
  templateUrl: './phieu-tra-thuoc-tu-benh-nhan-popup.component.html',
  styleUrls: ['./phieu-tra-thuoc-tu-benh-nhan-popup.component.scss']
})
export class PhieuTraThuocTuBenhNhanPopupComponent implements OnInit {
  icClose = icClose;
  src: string = "";
  constructor(private dialog: MatDialog, public sanitizer: DomSanitizer,
    private dialogRef: MatDialogRef<PhieuTraThuocTuBenhNhanPopupComponent>,

    @Optional() @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  ngOnInit() {
    this.src = "data:text/html;charset=utf-8," + encodeURIComponent(this.data);
  }

  close() {
    this.dialogRef.close();
  }

  // close() {
  //   this.dialog.closeAll();
  // }

  getSharedPrintForm() {
    let dataReplaceemplateHeaderGayNghien = "";
    const templateHeaderGayNghien =
      '<div style=\'width: 100%; height: 40px; background: #005dab;color:#fff;text-align: center;font-size: 23px\'> PHIẾU HOÀN TRẢ THUỐC</div>';
    dataReplaceemplateHeaderGayNghien = this.replaceAll(this.data, templateHeaderGayNghien, '');
    return new Promise(resolve => {
      resolve(dataReplaceemplateHeaderGayNghien);
    });
  }
  replaceAll(str, find, replace) {
    return str.replace(new RegExp(find, "g"), replace);
  }

}
