import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import icClose from '@iconify/icons-ic/twotone-close';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-giay-nghi-duong-thai-noi-tru-popup',
  templateUrl: './giay-nghi-duong-thai-noi-tru-popup.component.html',
  styleUrls: ['./giay-nghi-duong-thai-noi-tru-popup.component.scss']
})
export class GiayNghiDuongThaiNoiTruPopupComponent implements OnInit {

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
      let tmpNgoai ="<table id='showHeader' style='width: 100%; height: 40px; background: #005dab;color:#fff;'> <tr><th rowspan = '3' style = 'font-size: 20px;'>Giấy nghỉ dưỡng thai ngoại trú</th></tr></table>";
      let tmpNoi ="<table id='showHeader' style='width: 100%; height: 40px; background: #005dab;color:#fff;'> <tr><th rowspan = '3' style = 'font-size: 20px;'>Giấy nghỉ dưỡng thai nội trú</th></tr></table>";
      let tmpNgoaiBHXH ="<table id='showHeader' style='width: 100%; height: 40px; background: #005dab;color:#fff;'> <tr><th rowspan = '3' style = 'font-size: 20px;'>Giấy nghỉ hưởng BHXH ngoại trú</th></tr></table>";
      let tmpNoiBHXH ="<table id='showHeader' style='width: 100%; height: 40px; background: #005dab;color:#fff;'> <tr><th rowspan = '3' style = 'font-size: 20px;'>Giấy nghỉ hưởng BHXH nội trú</th></tr></table>";
      
      let data = this.modelPrint.replace(tmpNgoai, '');
      data = data.replace(tmpNoi, '');
      return new Promise(resolve => {
          resolve(data);
      });
  }

  close() {
      this.dialog.closeAll();
  }

}
