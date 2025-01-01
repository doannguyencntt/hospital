import { Component, OnInit, Optional, Inject, ViewChild, TemplateRef, Output } from '@angular/core';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import icClose from '@iconify/icons-ic/twotone-close';
import { ApiService } from 'src/app/core/services/api.service';
import { DomSanitizer } from '@angular/platform-browser';
import { LoadingComponent } from "src/app/shared/component/dialogs/loading/loading.component";
import { EventEmitter } from 'protractor';


@Component({
  selector: 'app-in-dich-vu-chi-dinh-ngoai-goi',
  templateUrl: './in-dich-vu-chi-dinh-ngoai-goi.component.html',
  styleUrls: ['./in-dich-vu-chi-dinh-ngoai-goi.component.scss']
})
export class InDichVuChiDinhNgoaiGoiComponent implements OnInit {
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
    let tmpPhieuChiDinh = "<table id='showHeader' style='width: 100%; height: 40px; background: #005dab;color:#fff;'> <tr><th rowspan = '3' style = 'font-size: 20px;'>PHIẾU CHỈ ĐỊNH CẬN LÂM SÀNG</th></tr></table>";
    let data: string = "";
    data = this.modelPrint.split(tmpPhieuChiDinh).join("");
      return new Promise(resolve => {
          resolve(data);
      });
  }

  close() {
      this.dialog.closeAll();
  }
}
