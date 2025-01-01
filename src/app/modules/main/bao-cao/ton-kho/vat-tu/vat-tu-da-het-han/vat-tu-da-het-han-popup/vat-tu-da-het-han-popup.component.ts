import { Component, OnInit, Optional, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import icClose from '@iconify/icons-ic/twotone-close';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-vat-tu-da-het-han-popup',
  templateUrl: './vat-tu-da-het-han-popup.component.html',
  styleUrls: ['./vat-tu-da-het-han-popup.component.scss']
})
export class VatTuDaHetHanPopupComponent implements OnInit {
  icClose = icClose;
  src: string = "";
  constructor(private dialog: MatDialog, public sanitizer: DomSanitizer,
    @Optional() @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  ngOnInit() {
    this.src = "data:text/html;charset=utf-8," + encodeURIComponent(this.data);
  }

  close() {
    this.dialog.closeAll();
  }

  getSharedPrintForm() {
    let source = this.data.replace("<p  style='background: #005dab;color:#fff; height:40px; font-size:30px;text-align:center'><th>DANH MỤC VẬT TƯ ĐÃ HẾT HẠN</th></p>", "");
    return new Promise(resolve => {
      resolve(source);
      this.close();
    });
  }
}
