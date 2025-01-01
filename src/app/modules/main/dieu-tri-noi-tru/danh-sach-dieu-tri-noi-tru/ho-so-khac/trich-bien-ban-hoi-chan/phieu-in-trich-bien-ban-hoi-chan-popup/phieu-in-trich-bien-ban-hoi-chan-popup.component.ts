import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import icClose from '@iconify/icons-ic/twotone-close';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-phieu-in-trich-bien-ban-hoi-chan-popup',
  templateUrl: './phieu-in-trich-bien-ban-hoi-chan-popup.component.html',
  styleUrls: ['./phieu-in-trich-bien-ban-hoi-chan-popup.component.scss']
})
export class PhieuInTrichBienBanHoiChanPopupComponent implements OnInit {
  hostingName: string;
  modelPrint: any;
  src = '';
  icClose = icClose;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any, public sanitizer: DomSanitizer, private dialog: MatDialog) {
      this.src = 'data:text/html;charset=utf-8,' + encodeURIComponent(this.data.Model);
  }

  ngOnInit() {
      this.modelPrint = this.data.Model;
  }

  getSharedPrintForm() {
      return new Promise(resolve => {
          resolve(this.modelPrint);
      });
  }

  close() {
      this.dialog.closeAll();
  }
}
