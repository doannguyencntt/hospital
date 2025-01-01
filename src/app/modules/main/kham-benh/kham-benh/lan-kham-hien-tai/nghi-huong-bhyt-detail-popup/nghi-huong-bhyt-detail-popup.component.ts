import { Component, OnInit, Inject } from '@angular/core';
import icClose from '@iconify/icons-ic/twotone-close';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material';
@Component({
  selector: 'app-nghi-huong-bhyt-detail-popup',
  templateUrl: './nghi-huong-bhyt-detail-popup.component.html',
  styleUrls: ['./nghi-huong-bhyt-detail-popup.component.scss']
})
export class NghiHuongBhytDetailPopupComponent implements OnInit {
  icClose = icClose;
  src: string = "";
  

  constructor(
    private dialog: MatDialog, @Inject(MAT_DIALOG_DATA) public data: any,
  ) { }

  ngOnInit() {
    this.src = "data:text/html;charset=utf-8," + encodeURIComponent(this.data.templateLienSo1);
  }
  close() {
    this.dialog.closeAll();
  }

  getSharedPrintForm() {
    return new Promise(resolve => {
      resolve(this.data.templateLienSo1);
      this.close();
    });
  }

}
