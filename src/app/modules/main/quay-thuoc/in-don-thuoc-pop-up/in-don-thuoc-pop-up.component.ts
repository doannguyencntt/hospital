import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import icClose from '@iconify/icons-ic/twotone-close';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-in-don-thuoc-pop-up',
  templateUrl: './in-don-thuoc-pop-up.component.html',
  styleUrls: ['./in-don-thuoc-pop-up.component.scss']
})
export class InDonThuocPopUpComponent implements OnInit {

  hostingName: string;
  src = '';
  icClose = icClose;
  InPhieuThu : boolean;
  InBangKe : boolean;
  loaiPhieu : any ;
  kiemtraPhieuInManhinh: boolean = false;
  constructor(
      @Inject(MAT_DIALOG_DATA) public data: any,
      public sanitizer: DomSanitizer,
      private dialog: MatDialog
  ) {      
  }
  modelPrint: any;
  ngOnInit() {
      this.modelPrint = this.data.Model;
      this.kiemtraPhieuInManhinh = this.data.InDonThuocDanhSachList;
      this.InPhieuThu = this.data.InPhieuThu;
      this.InBangKe = this.data.InBangKe;
      this.src = 'data:text/html;charset=utf-8,' + encodeURIComponent(this.data.Model);

  }

  InPhieu(loaiPhieu){
      this.loaiPhieu = loaiPhieu;
      this.getSharedPrintForm();
  }
  getSharedPrintForm() {
      const tmpBHYT =
          "<p  style='background: #005dab;color:#fff; height:40px; font-size:30px;text-align:center'>" +
          "<th>TOA THUỐC BẢO HIỂM Y TẾ</th>" +
          "</p>";
      const tmpKBHYT =
          "<p  style='background: #005dab;color:#fff; height:40px; font-size:30px;text-align:center'>" +
          "<th>TOA THUỐC KHÔNG BẢO HIỂM Y TẾ</th>" +
          "</p>";
      const tmpTNBV =
          "<p  style='background: #005dab;color:#fff; height:40px; font-size:30px;text-align:center'>" +
          "<th>TOA THUỐC NGOÀI BỆNH VIỆN</ th>" +
          "</p>";

          const tmpTuVan =
          "<p  style='background: #005dab;color:#fff; height:40px; font-size:30px;text-align:center'>" +
                                 "<th>ĐƠN TƯ VẤN</ th>" +
                                 "</p>";
      let data: string;
      data = this.modelPrint.replace(tmpBHYT, '');
      data = data.replace(tmpKBHYT, '');
      data = data.replace(tmpKBHYT, '');
      data = data.replace(tmpTuVan, '');
      data = data.replace(tmpTNBV, '');
      // in 2 phieu theo ngang-doc kho a5
      let dataphieukeThuTienThuoc = data.split('<div class=\"pagebreak\"></div>');
      if(this.loaiPhieu == 1)
      {
          return new Promise(resolve => {
              resolve(dataphieukeThuTienThuoc[0]);
          });
      }
      else{
          if(dataphieukeThuTienThuoc[1] != undefined || dataphieukeThuTienThuoc[1] != null){
              return new Promise(resolve => {
                  resolve(dataphieukeThuTienThuoc[1]);
              });
          }
         else{
             let message ="Không có phiếu thu tiền"
          return new Promise(resolve => {
              resolve(message);
          });
         }
      }
  }

  close() {
      this.dialog.closeAll();
  }

}
