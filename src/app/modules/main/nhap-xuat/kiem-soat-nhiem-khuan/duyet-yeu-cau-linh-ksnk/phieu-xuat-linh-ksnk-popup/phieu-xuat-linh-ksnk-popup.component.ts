import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import icClose from '@iconify/icons-ic/twotone-close';

@Component({
  selector: 'app-phieu-xuat-linh-ksnk-popup',
  templateUrl: './phieu-xuat-linh-ksnk-popup.component.html',
  styleUrls: ['./phieu-xuat-linh-ksnk-popup.component.scss']
})
export class PhieuXuatLinhKSNKPopupComponent implements OnInit {

  icClose = icClose;
  src: string = "";
  constructor(private dialogRef: MatDialogRef<PhieuXuatLinhKSNKPopupComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
    this.src = "data:text/html;charset=utf-8," + encodeURIComponent(this.data);
  }

  close() {
    this.dialogRef.close();
  }

  getSharedPrintForm() {
    let source = this.data.replace("<p  style='background: #005dab;color:#fff; height:40px; font-size:30px;text-align:center'><th>PHIẾU XUẤT</th></p>", "");
    const templateHeaderGayNghien =
    "<div class=\'wrap\'><div class=\'content\'>PHIẾU XUẤT THUỐC</div></div>";
    source = source.replace(templateHeaderGayNghien,"")
    return new Promise(resolve => {
      resolve(source);
      this.close();
    });
  }
}
