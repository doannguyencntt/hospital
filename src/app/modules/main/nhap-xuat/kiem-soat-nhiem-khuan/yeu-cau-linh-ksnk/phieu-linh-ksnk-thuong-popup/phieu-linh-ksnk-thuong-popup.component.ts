import { Component, OnInit, Optional, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import icClose from '@iconify/icons-ic/twotone-close';
import { DomSanitizer } from '@angular/platform-browser';
@Component({
  selector: 'app-phieu-linh-ksnk-thuong-popup',
  templateUrl: './phieu-linh-ksnk-thuong-popup.component.html',
  styleUrls: ['./phieu-linh-ksnk-thuong-popup.component.scss']
})
export class PhieuLinhKSNKThuongPopupComponent implements OnInit {
  icClose = icClose;
  src: string = "";
  showNutIn :boolean = true;
  constructor(private dialog: MatDialog, public sanitizer: DomSanitizer,
    private dialogRef: MatDialogRef<PhieuLinhKSNKThuongPopupComponent>,
    @Optional() @Inject(MAT_DIALOG_DATA) public data: any
  ) { 
    this.src = "data:text/html;charset=utf-8," + encodeURIComponent(this.data.Model);
    if(this.data.showIn != undefined && this.data.showIn != null)
    {
      this.showNutIn = this.data.showIn;
    }
  }

  ngOnInit() {
    // this.src = "data:text/html;charset=utf-8," + encodeURIComponent(this.data);
  }

  close() {
    this.dialogRef.close();
  }

  getSharedPrintForm() {
    let source = this.data.Model.replace("<p  style='background: #005dab;color:#fff; height:40px; font-size:30px;text-align:center'>" +
    "<th>PHIẾU LĨNH KNSK</th>" +
      "</p>", "");
    return new Promise(resolve => {
      resolve(source);
      //this.close();
    });
  }
}