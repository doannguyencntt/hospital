
import { Component, OnInit, Optional, Inject } from '@angular/core';
import { ApiService } from 'src/app/core/services/api.service';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import icClose from '@iconify/icons-ic/twotone-close';
import { DomSanitizer } from '@angular/platform-browser';
import { LoadingComponent } from 'src/app/shared/component/dialogs/loading/loading.component';
import { InBaoCaoTonKho } from '../bao-cao-ton-kho.model';

@Component({
  selector: 'app-bao-cao-ton-kho-popup',
  templateUrl: './bao-cao-ton-kho-popup.component.html',
  styleUrls: ['./bao-cao-ton-kho-popup.component.scss']
})
export class BaoCaoTonKhoPopupComponent implements OnInit {
  inBaoCaoTonKho: InBaoCaoTonKho = new InBaoCaoTonKho();
  icClose = icClose;
  src: string = "";
  constructor(
    private apiService: ApiService,
    private dialogRef: MatDialogRef<BaoCaoTonKhoPopupComponent>,
    private dialog: MatDialog, public sanitizer: DomSanitizer,
    @Optional() @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  ngOnInit() {
    this.inBaoCaoTonKho = this.data;
    this.showBaoCao();
  }
  close() {
    this.dialogRef.close();
  }
  showBaoCao() {
    var loaded = this.dialog.open(LoadingComponent, {
      disableClose: true,
      width: '200px',
      height: '90px',
      data: { Title: "Đang tải dữ liệu..." }
    });
    this.apiService.post<any>("BaoCao/InBaoCaoTonKho", this.inBaoCaoTonKho).subscribe(
      resultData => {
        if (resultData != "" && resultData != null) {
          this.src = "data:text/html;charset=utf-8," + encodeURIComponent(resultData);
        }
        loaded.close();
      },
      () => {
        this.close();
      });
  }

  getSharedPrintForm() {
    return new Promise(resolve => {
      this.apiService.post<any>("BaoCao/InBaoCaoTonKho", this.inBaoCaoTonKho).subscribe(resultData => {
        resolve(resultData);
      });
      this.close();
    });
  }

}
