import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import icClose from '@iconify/icons-ic/twotone-close';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-in-linh-duoc-pham',
  templateUrl: './in-linh-duoc-pham.component.html',
  styleUrls: ['./in-linh-duoc-pham.component.scss']
})
export class InLinhDuocPhamComponent implements OnInit {

  hostingName: string;
    modelPrint: any;
    src = '';
    icClose = icClose;
    loaiPhieuLinh: string ="";
    constructor(@Inject(MAT_DIALOG_DATA) public data: any, public sanitizer: DomSanitizer, private dialog: MatDialog) {
        this.src = 'data:text/html;charset=utf-8,' + encodeURIComponent(this.data.Model);
    }

    ngOnInit() {
        this.modelPrint = this.data.Model;
        this.loaiPhieuLinh = this.data.LoaiPhieuLinh;
    }

    getSharedPrintForm() {
      let dataReplaceemplateHeaderGayNghien ="";
    const templateHeaderGayNghien =
      '<div class=\'wrap\'><div class=\'content\'>PHIẾU LĨNH DƯỢC PHẨM</div></div>';
      dataReplaceemplateHeaderGayNghien = this.replaceAll(this.modelPrint, templateHeaderGayNghien,'');
      return new Promise(resolve => {
        resolve(dataReplaceemplateHeaderGayNghien);
    });
  }
  replaceAll(str, find, replace) {
    return str.replace(new RegExp(find, "g"), replace);
  }

    close() {
        this.dialog.closeAll();
    }

}
