import { Component, OnInit, Optional, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import icClose from '@iconify/icons-ic/twotone-close';
import { DomSanitizer } from '@angular/platform-browser';
@Component({
  selector: 'app-phieu-linh-thuoc-thuong-popup',
  templateUrl: './phieu-linh-thuoc-thuong-popup.component.html',
  styleUrls: ['./phieu-linh-thuoc-thuong-popup.component.scss']
})
export class PhieuLinhThuocThuongPopupComponent implements OnInit {
  icClose = icClose;
  src: string = "";
  constructor(private dialog: MatDialog, public sanitizer: DomSanitizer,
    private dialogRef: MatDialogRef<PhieuLinhThuocThuongPopupComponent>,

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
    //   let source = this.data.replace("<p  style='background: #005dab;color:#fff; height:40px; font-size:30px;text-align:center'><th>PHIẾU LĨNH THUỐC</th></p>", "");
    //   return new Promise(resolve => {
    //     resolve(source);
    //     //this.close();
    //   });
    // }
    //let source = this.data.replace("<div class=\'wrap\'><div class=\'content\'>PHIẾU LĨNH THUỐC</div></div>", "");
    let dataReplaceemplateHeaderGayNghien = "";
    const templateHeaderGayNghien =
      '<div class=\'wrap\'><div class=\'content\'>PHIẾU LĨNH DƯỢC PHẨM</div></div>';
    dataReplaceemplateHeaderGayNghien = this.replaceAll(this.data, templateHeaderGayNghien, '');
    return new Promise(resolve => {
      resolve(dataReplaceemplateHeaderGayNghien);
    });
  }
  replaceAll(str, find, replace) {
    return str.replace(new RegExp(find, "g"), replace);
  }
}
