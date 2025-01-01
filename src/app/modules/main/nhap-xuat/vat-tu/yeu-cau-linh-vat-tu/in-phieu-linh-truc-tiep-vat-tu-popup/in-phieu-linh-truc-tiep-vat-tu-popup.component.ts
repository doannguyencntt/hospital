import { Component, OnInit, Optional, Inject } from '@angular/core';
import { ApiService } from 'src/app/core/services/api.service';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import icClose from '@iconify/icons-ic/twotone-close';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-in-phieu-linh-truc-tiep-vat-tu-popup',
  templateUrl: './in-phieu-linh-truc-tiep-vat-tu-popup.component.html',
  styleUrls: ['./in-phieu-linh-truc-tiep-vat-tu-popup.component.scss']
})
export class InPhieuLinhTrucTiepVatTuPopupComponent implements OnInit {
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
      return new Promise(resolve => {
          resolve(this.modelPrint);
          this.close();
      });
      
  }

  close() {
      this.dialog.closeAll();
  }

}
