import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';
import { ApiService } from 'src/app/core/services/api.service';
import icClose from '@iconify/icons-ic/twotone-close';


@Component({
  selector: 'app-xn-covid-sarscov2-popup',
  templateUrl: './xn-covid-sarscov2-popup.component.html',
  styleUrls: ['./xn-covid-sarscov2-popup.component.scss']
})
export class XnCovidSarscov2PopupComponent implements OnInit {
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
    const tmpPhieuXNCoVId =
      '<table id=\'showHeader\' style=\'width: 100%; height: 40px; background: #005dab;color:#fff;\'> <tr><th rowspan = \'3\' style = \'font-size: 20px;\'>PHIẾU CHỈ ĐỊNH XÉT NGHIỆM TEST NHANH KHÁNG NGUYÊN SARS-CoV-2 </th></tr></table>';
  
    let data = this.modelPrint.replaceAll(tmpPhieuXNCoVId,'');
      return new Promise(resolve => {
          resolve(data);
      });
  }

  close() {
      this.dialog.closeAll();
  }
}

