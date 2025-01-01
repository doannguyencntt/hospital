
import { Component, OnInit, Optional, Inject } from '@angular/core';
import { ApiService } from 'src/app/core/services/api.service';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import icClose from '@iconify/icons-ic/twotone-close';
import { DomSanitizer } from '@angular/platform-browser';
import { LoadingComponent } from 'src/app/shared/component/dialogs/loading/loading.component';
import { InBaoCaoSoXetNghiemSangLocHiv } from '../bao-cao-so-xet-nghiem-sang-loc-hiv.model';

@Component({
  selector: 'app-bao-cao-so-xet-nghiem-sang-loc-hiv-popup',
  templateUrl: './bao-cao-so-xet-nghiem-sang-loc-hiv-popup.component.html',
  styleUrls: ['./bao-cao-so-xet-nghiem-sang-loc-hiv-popup.component.scss']
})
export class BaoCaoSoXetNghiemSangLocHivPopupComponent implements OnInit {
  inBaoCaoSoXetNghiemSangLocHiv: InBaoCaoSoXetNghiemSangLocHiv = new InBaoCaoSoXetNghiemSangLocHiv();
  icClose = icClose;
  src: string = "";
  constructor(
    private apiService: ApiService,
    private dialogRef: MatDialogRef<BaoCaoSoXetNghiemSangLocHivPopupComponent>,
    private dialog: MatDialog, public sanitizer: DomSanitizer,
    @Optional() @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  ngOnInit() {
    this.inBaoCaoSoXetNghiemSangLocHiv = this.data;
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
    this.apiService.post<any>("BaoCao/InBaoCaoSoXetNghiemSangLocHiv", this.inBaoCaoSoXetNghiemSangLocHiv).subscribe(
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
      this.apiService.post<any>("BaoCao/InBaoCaoSoXetNghiemSangLocHiv", this.inBaoCaoSoXetNghiemSangLocHiv).subscribe(resultData => {
        resolve(resultData);
      });
      this.close();
    });
  }

}
