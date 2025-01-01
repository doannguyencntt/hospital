
import { Component, OnInit, Optional, Inject } from '@angular/core';
import { ApiService } from 'src/app/core/services/api.service';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import icClose from '@iconify/icons-ic/twotone-close';
import { DomSanitizer } from '@angular/platform-browser';
import { LoadingComponent } from 'src/app/shared/component/dialogs/loading/loading.component';
import { InBaoCaoBenhNhanLamXetNghiem } from '../bao-cao-benh-nhan-lam-xet-nghiem.model';

@Component({
  selector: 'app-bao-cao-benh-nhan-lam-xet-nghiem-popup',
  templateUrl: './bao-cao-benh-nhan-lam-xet-nghiem-popup.component.html',
  styleUrls: ['./bao-cao-benh-nhan-lam-xet-nghiem-popup.component.scss']
})
export class BaoCaoBenhNhanLamXetNghiemPopupComponent implements OnInit {
  inBaoCaoBenhNhanLamXetNghiem: InBaoCaoBenhNhanLamXetNghiem = new InBaoCaoBenhNhanLamXetNghiem();
  icClose = icClose;
  src: string = "";
  constructor(
    private apiService: ApiService,
    private dialogRef: MatDialogRef<BaoCaoBenhNhanLamXetNghiemPopupComponent>,
    private dialog: MatDialog, public sanitizer: DomSanitizer,
    @Optional() @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  ngOnInit() {
    this.inBaoCaoBenhNhanLamXetNghiem = this.data;
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
    this.apiService.post<any>("BaoCao/InBaoCaoBenhNhanLamXetNghiem", this.inBaoCaoBenhNhanLamXetNghiem).subscribe(
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
      this.apiService.post<any>("BaoCao/InBaoCaoBenhNhanLamXetNghiem", this.inBaoCaoBenhNhanLamXetNghiem).subscribe(resultData => {
        resolve(resultData);
      });
      this.close();
    });
  }

}
