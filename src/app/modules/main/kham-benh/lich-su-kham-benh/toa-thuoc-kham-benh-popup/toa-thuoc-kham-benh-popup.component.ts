import { Component, OnInit, Optional, Inject } from '@angular/core';
import { ApiService } from 'src/app/core/services/api.service';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import icClose from '@iconify/icons-ic/twotone-close';
import { DomSanitizer } from '@angular/platform-browser';
@Component({
  selector: 'app-toa-thuoc-kham-benh-popup',
  templateUrl: './toa-thuoc-kham-benh-popup.component.html',
  styleUrls: ['./toa-thuoc-kham-benh-popup.component.scss']
})
export class ToaThuocKhamBenhPopupComponent implements OnInit {
  icClose = icClose;
  src: string = "";
  constructor(
    private dialog: MatDialog, public sanitizer: DomSanitizer,
    @Optional() @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  ngOnInit() {
    this.src = "data:text/html;charset=utf-8," + encodeURIComponent(this.data);
  }

  close() {
    this.dialog.closeAll();
  }

  getSharedPrintForm() {
    var source = this.data;
    source = source.replace("<p style='background: #005dab;color:#fff; height:40px; font-size:30px;text-align:center'><th>TOA THUỐC BẢO HIỂM Y TẾ</th></p>", "");
    source = source.replace("<p style='background: #005dab;color:#fff; height:40px; font-size:30px;text-align:center'>" +
      "<th>TOA THUỐC KHÔNG BẢO HIỂM Y TẾ</th>" + "</p>", "");
    source = source.replace("<p style='background: #005dab;color:#fff; height:40px; font-size:30px;text-align:center'>" +
      "<th>TOA THUỐC NGOÀI BỆNH VIỆN</th>" + "</p>", "");
    source = source.replace("<p  style='background: #005dab;color:#fff; height:40px; font-size:30px;text-align:center'>" +
      "<th>TOA THUỐC THỰC PHẨM CHỨC NĂNG</ th>" + "</p>", "");
    source = source.replace("<p style='background: #005dab;color:#fff; height:40px; font-size:30px;text-align:center'>" +
      "<th>VẬT TƯ Y TẾ</th>" + "</p>", "");
    return new Promise(resolve => {
      resolve(source);
      this.close();
    });

  }
}
