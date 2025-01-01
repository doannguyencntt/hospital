import { Component, Inject, OnInit,ViewChild } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';
import icClose from '@iconify/icons-ic/twotone-close';
import { LoadingComponent } from 'src/app/shared/component/dialogs/loading/loading.component';

import { ApiService } from 'src/app/core/services/api.service';
import { PopupChonPhieuInChiDinhComponent } from '../popup-chon-phieu-in-chi-dinh/popup-chon-phieu-in-chi-dinh.component';
import { PrintFormComponent } from 'src/app/shared/component/print-form/print-form.component';

@Component({
  selector: 'app-phieu-dieu-tri-popup-in-phieu-cls',
  templateUrl: './phieu-dieu-tri-popup-in-phieu-cls.component.html',
  styleUrls: ['./phieu-dieu-tri-popup-in-phieu-cls.component.scss']
})
export class PhieuDieuTriPopupInPhieuClsComponent implements OnInit {

  hostingName: string = '';
    src: string = '';
    modelPrint: any;
    ChonKieuInChung: boolean = true;
    showLoaiPhieuIn : boolean = false ; // kieu in
    printLayout: string = 'Portrait';
    printSize: string = 'A4';

    icClose = icClose;

    @ViewChild(PrintFormComponent, {static: true}) shared;
  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private dialog: MatDialog
  , private apiService: ApiService, public sanitizer: DomSanitizer) { }

  ngOnInit() {
    let dialogRef = this.dialog.open(LoadingComponent, {
      disableClose: true,
      width: '200px',
      height: '90px',
      data: { Title: "Đang tải dữ liệu..." }
  });
  this.showLoaiPhieuIn = this.data.Model.InChungChiDinh == 0 ? false : true;

  this.data.Model.IsFromPhieuDieuTri = true;
  this.apiService.post<any>("PhauThuatThuThuat/InPhieuChiDinh", this.data.Model).subscribe(res => {
      this.src= "data:text/html;charset=utf-8," + encodeURIComponent(res);
      this.modelPrint = res;
      dialogRef.close();
  });
  }

close() {
    this.dialog.closeAll();
}

getSharedPrintForm(dataPrint: any) {
  let tmpPhieuChiDinh = "<table id='showHeader' style='width: 100%; height: 40px; background: #005dab;color:#fff;'> <tr><th rowspan = '3' style = 'font-size: 20px;'>PHIẾU CHỈ ĐỊNH CẬN LÂM SÀNG</th></tr></table>";
    let data : string = '';
    data = this.modelPrint.split(tmpPhieuChiDinh).join("");
    return new Promise(resolve => { 
      resolve(data);
    });
     
}

}
