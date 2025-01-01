import { Component, OnInit, Optional, Inject, Input } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import icClose from '@iconify/icons-ic/twotone-close';
import { DomSanitizer } from '@angular/platform-browser';
import { ChiTietDieuTriNoiTruViewModel } from '../../../dieu-tri-noi-tru.model';
@Component({
  selector: 'app-ban-kiem-truoc-tiem-chung-tre-em-popup',
  templateUrl: './ban-kiem-truoc-tiem-chung-tre-em-popup.component.html',
  styleUrls: ['./ban-kiem-truoc-tiem-chung-tre-em-popup.component.scss']
})
export class BanKiemTruocTiemChungTreEmPopupComponent implements OnInit {
  icClose = icClose;
  src: string = "";
  @Input() dieuTriNoiTruModel: ChiTietDieuTriNoiTruViewModel;
  constructor(public sanitizer: DomSanitizer,
    private dialogRef: MatDialogRef<BanKiemTruocTiemChungTreEmPopupComponent>,
    @Optional() @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  ngOnInit() {
    this.src = "data:text/html;charset=utf-8," + encodeURIComponent(this.data);
  }

  close() {
    this.dialogRef.close();
  }

  getSharedPrintForm() {
    return new Promise(resolve => {
      resolve(this.data);
      this.close();
    });
  }
}
