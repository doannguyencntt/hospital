import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import icClose from '@iconify/icons-ic/twotone-close';
import { ApiService } from 'src/app/core/services/api.service';
import { ApiError } from 'src/app/shared/models/api-error.model';
import { DomSanitizer } from '@angular/platform-browser';
@Component({
  selector: 'app-the-benh-nhan-popup',
  templateUrl: './the-benh-nhan-popup.component.html',
  styleUrls: ['./the-benh-nhan-popup.component.scss']
})
export class TheBenhNhanPopupComponent implements OnInit {
  hostingName: string;
  icClose = icClose;
  src: string = "";
  loading: boolean = false;
  constructor(@Inject(MAT_DIALOG_DATA) public data: any,
    public sanitizer: DomSanitizer,
    private apiService: ApiService,
    private dialogRef: MatDialogRef<TheBenhNhanPopupComponent>,
    private dialog: MatDialog) { }

  ngOnInit() {
    if (window.location.protocol == "http:") {
      this.hostingName = "http://" + window.location.host;
    } else {
      this.hostingName = "https://" + window.location.host;
    }
    this.xemTheBenhNhan();
  }
  xemTheBenhNhan() {
    let yeuCauTiepNhanId = this.data;
    this.apiService.get<any>("DanhSachChoKham/InTheBenhNhan?yeuCauTiepNhanId=" + yeuCauTiepNhanId + "&hostingName=" + this.hostingName).subscribe(
      resultData => {
        if (resultData != null) {
          var html = resultData;
          this.src = "data:text/html;charset=utf-8," + encodeURIComponent(html);
        }
        else {
          this.src = "";
        }
        this.loading = false;

      },
      (err: ApiError) => {
      });
  }
  getSharedPrintForm() {
    let yeuCauTiepNhanId = this.data;
    return new Promise(resolve => {
      this.apiService.get<any>("DanhSachChoKham/InTheBenhNhan?yeuCauTiepNhanId=" + yeuCauTiepNhanId + "&hostingName=" + this.hostingName).subscribe(resultData => {
        resolve(resultData);
      });
      this.close();
    });
  }
  close() {
    this.dialogRef.close();
  }
}
