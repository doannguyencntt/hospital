import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import icClose from '@iconify/icons-ic/twotone-close';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-phieu-cong-khai-thuoc-popup',
  templateUrl: './phieu-cong-khai-thuoc-popup.component.html',
  styleUrls: ['./phieu-cong-khai-thuoc-popup.component.scss']
})
export class PhieuCongKhaiThuocPopupComponent implements OnInit {
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
      let data: string ="";
      let header = this.modelPrint.split('<div class="header"></div>');
      let bodyNoiDung = this.modelPrint.split("<div style='break-after:page'></div>");
      let fistValue : boolean = true;
      let indexPage = 0;
      let currentHeader = header[0];
      for (let index = 0; index < bodyNoiDung.length-1; index++) {
          const element = bodyNoiDung[index];

          if(fistValue== true)
          {
            data += bodyNoiDung[index] + '<div style="break-after:page"></div>';
            fistValue = false;
            indexPage++;
          }
          else{
            let coHeader = bodyNoiDung[index].includes("<style>");
            if(coHeader)
            {
              currentHeader = bodyNoiDung[index].split('<div class="header"></div>')[0];
              data += bodyNoiDung[index] ;
            }
            else
            {
                // data +=header[0] +bodyNoiDung[index] ;
                data += currentHeader +bodyNoiDung[index] ;
            }

            if(indexPage < bodyNoiDung.length-2){
              data +='<div style="break-after:page"></div>'
            }
            indexPage++;
          }
      }
      return new Promise(resolve => {
        console.log(data);
        resolve(data);
    });
  }
  close() {
      this.dialog.closeAll();
  }

}
