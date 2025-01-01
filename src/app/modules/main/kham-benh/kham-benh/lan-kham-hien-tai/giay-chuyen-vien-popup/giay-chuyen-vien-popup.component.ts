import { Component, OnInit, Input, Optional, Inject } from '@angular/core';
import { ApiService } from 'src/app/core/services/api.service';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import icClose from '@iconify/icons-ic/twotone-close';
import { ApiError } from 'src/app/shared/models/api-error.model';
import { DomSanitizer } from '@angular/platform-browser';
@Component({
  selector: 'app-giay-chuyen-vien-popup',
  templateUrl: './giay-chuyen-vien-popup.component.html',
  styleUrls: ['./giay-chuyen-vien-popup.component.scss']
})
export class GiayChuyenVienPopupComponent implements OnInit {
  icClose = icClose;
  loading: boolean = false;
  src: string = "";
  html: string = "";
  constructor(private apiService: ApiService,
    private dialogRef: MatDialogRef<GiayChuyenVienPopupComponent>,
    private dialog: MatDialog, public sanitizer: DomSanitizer,
    @Optional() @Inject(MAT_DIALOG_DATA) public data: any
  ) { }
  ngOnInit() {
    console.log("data:", this.data)
    this.xemGiayChuyenVien();
  }
  close() {
    this.dialogRef.close();
  }
  xemGiayChuyenVien() {
    this.loading = true;
    let yeuCauKhamBenhId = this.data.Model.YeuCauKhamBenhId;
    this.apiService.get<any>("KhamBenh/InGiayChuyenVien?yeuCauKhamBenhId=" + yeuCauKhamBenhId).subscribe(
      resultData => {
        if (resultData != null) {
          this.html = resultData;
          this.src = "data:text/html;charset=utf-8," + encodeURIComponent(this.html);
        }
        this.loading = false;
      },
      (err: ApiError) => {
      });
  }
  getSharedPrintForm() {
    return new Promise(resolve => {
      resolve(this.html);
      this.close();
    });
  }
}
