import { Component, OnInit, Optional, Inject } from '@angular/core';
import { ApiService } from 'src/app/core/services/api.service';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import icClose from '@iconify/icons-ic/twotone-close';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-phieu-linh-thuoc-truc-tiep-popup',
  templateUrl: './phieu-linh-thuoc-truc-tiep-popup.component.html',
  styleUrls: ['./phieu-linh-thuoc-truc-tiep-popup.component.scss']
})
export class PhieuLinhThuocTrucTiepPopupComponent implements OnInit {

  hostingName: string;
  modelPrint: any;
  src = '';
  icClose = icClose;
  loaiPhieuLinh: string ="";
  showNutIn:boolean = true;
  constructor(@Inject(MAT_DIALOG_DATA) public data: any, public sanitizer: DomSanitizer, private dialog: MatDialog) {
      this.src = 'data:text/html;charset=utf-8,' + encodeURIComponent(this.data.Model);
      if(this.data.showIn != undefined && this.data.showIn != null)
      {
        this.showNutIn = this.data.showIn;
      }
  }

  ngOnInit() {
      this.modelPrint = this.data.Model;
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
