import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import icClose from '@iconify/icons-ic/twotone-close';

@Component({
  selector: 'app-phieu-xuat-linh-thuoc-popup',
  templateUrl: './phieu-xuat-linh-thuoc-popup.component.html',
  styleUrls: ['./phieu-xuat-linh-thuoc-popup.component.scss']
})
export class PhieuXuatLinhThuocPopupComponent implements OnInit {

  icClose = icClose;
  src: string = "";
  constructor(private dialogRef: MatDialogRef<PhieuXuatLinhThuocPopupComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
    this.src = "data:text/html;charset=utf-8," + encodeURIComponent(this.data);
  }

  close() {
    this.dialogRef.close();
  }

  getSharedPrintForm() {
    //   let source = this.data.replace("<p  style='background: #005dab;color:#fff; height:40px; font-size:30px;text-align:center'><th>PHIẾU XUẤT</th></p>", "");
    //   return new Promise(resolve => {
    //     resolve(source);
    //     this.close();
    //   });
    // }
    let dataReplaceemplateHeaderGayNghien = "";
    const templateHeaderGayNghien =
    "<div class=\'wrap\'><div class=\'content\'>PHIẾU XUẤT THUỐC</div></div>";
    dataReplaceemplateHeaderGayNghien = this.replaceAll(this.data, templateHeaderGayNghien, '');
    return new Promise(resolve => {
      resolve(dataReplaceemplateHeaderGayNghien);
    });
  }
  replaceAll(str, find, replace) {
    return str.replace(new RegExp(find, "g"), replace);
  }
}
