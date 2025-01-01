import { Component, OnInit, Optional, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import icClose from '@iconify/icons-ic/twotone-close';
import { DomSanitizer } from '@angular/platform-browser';
@Component({
  selector: 'app-phieu-linh-thuoc-bu-popup',
  templateUrl: './phieu-linh-thuoc-bu-popup.component.html',
  styleUrls: ['./phieu-linh-thuoc-bu-popup.component.scss']
})
export class PhieuLinhThuocBuPopupComponent implements OnInit {
  icClose = icClose;
  src: string = "";
  showNutIn :boolean = true;
  constructor(private dialog: MatDialog, public sanitizer: DomSanitizer,
    private dialogRef: MatDialogRef<PhieuLinhThuocBuPopupComponent>,
    @Optional() @Inject(MAT_DIALOG_DATA) public data: any
  ) { 
    this.src = "data:text/html;charset=utf-8," + encodeURIComponent(this.data.Model);
    if(this.data.showIn != undefined && this.data.showIn != null)
    {
      this.showNutIn = this.data.showIn;
    }
  }

  ngOnInit() {
   
  }

  close() {
    this.dialogRef.close();
  }

  getSharedPrintForm() {
    let dataReplaceemplateHeaderGayNghien ="";
    const templateHeaderGayNghien =
      '<div class=\'wrap\'><div class=\'content\'>PHIẾU LĨNH DƯỢC PHẨM</div></div>';
      dataReplaceemplateHeaderGayNghien = this.replaceAll(this.data.Model, templateHeaderGayNghien,'');
      return new Promise(resolve => {
        resolve(dataReplaceemplateHeaderGayNghien);
    });
  }
  replaceAll(str, find, replace) {
    return str.replace(new RegExp(find, "g"), replace);
  }
}
