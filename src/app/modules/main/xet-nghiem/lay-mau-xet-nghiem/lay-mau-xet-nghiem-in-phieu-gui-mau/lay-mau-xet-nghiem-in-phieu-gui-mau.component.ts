import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import icClose from '@iconify/icons-ic/twotone-close';

@Component({
  selector: 'app-lay-mau-xet-nghiem-in-phieu-gui-mau',
  templateUrl: './lay-mau-xet-nghiem-in-phieu-gui-mau.component.html',
  styleUrls: ['./lay-mau-xet-nghiem-in-phieu-gui-mau.component.scss']
})
export class LayMauXetNghiemInPhieuGuiMauComponent implements OnInit {

  icClose = icClose;
  src: string = "";
  constructor(private dialogRef: MatDialogRef<LayMauXetNghiemInPhieuGuiMauComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
    this.src = "data:text/html;charset=utf-8," + encodeURIComponent(this.data);
  }

  close() {
    this.dialogRef.close();
  }

  getSharedPrintForm() {
    let source = this.data.replace("<p  style='background: #005dab;color:#fff; height:40px; font-size:30px;text-align:center'><th>PHIẾU GỬI MẪU</th></p>", "");
    return new Promise(resolve => {
      resolve(source);
      this.close();
    });
  }

  // getSharedExportHtmlContent(){
  //   let htmlContent = this.data.replace("<p  style='background: #005dab;color:#fff; height:40px; font-size:30px;text-align:center'><th>PHIẾU GỬI MẪU</th></p>", "");
  //   htmlContent = htmlContent.replace('Times New Roman', 'DejaVu Sans');
  //   return new Promise(resolve => {
  //     resolve(htmlContent);
  //   });
  // }
}
