import { Component, OnInit, Input, Optional, Inject } from '@angular/core';
import { ApiService } from 'src/app/core/services/api.service';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import icClose from '@iconify/icons-ic/twotone-close';
import { ApiError } from 'src/app/shared/models/api-error.model';
import { DomSanitizer } from '@angular/platform-browser';
@Component({
  selector: 'app-the-benh-nhan-benh-nhan-popup',
  templateUrl: './the-benh-nhan-benh-nhan-popup.component.html',
  styleUrls: ['./the-benh-nhan-benh-nhan-popup.component.scss']
})
export class TheBenhNhanBenhNhanPopupComponent implements OnInit {
  hostingName: string;
  icClose = icClose;
  loading: boolean = false;
  src: string = "";

  constructor(private apiService: ApiService,
    private dialogRef: MatDialogRef<TheBenhNhanBenhNhanPopupComponent>,
    private dialog: MatDialog, public sanitizer: DomSanitizer,
    @Optional() @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  ngOnInit() {
    console.log("data:", this.data)
    if (window.location.protocol == "http:") {
      this.hostingName = "http://" + window.location.host;
    } else {
      this.hostingName = "https://" + window.location.host;
    }
    this.xemTheBenhNhan();
  }
  close() {
    this.dialog.closeAll();
  }

  xemTheBenhNhan() {
    let benhNhanId = this.data;
    this.apiService.get<any>("BenhNhan/InTheBenhNhanBenhNhan?benhNhanId=" + benhNhanId + "&hostingName=" + this.hostingName).subscribe(
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
    let benhNhanId = this.data;
    return new Promise(resolve => {
      this.apiService.get<any>("BenhNhan/InTheBenhNhanBenhNhan?benhNhanId=" + benhNhanId + "&hostingName=" + this.hostingName).subscribe(resultData => {
        resolve(resultData);
      });
      this.close();
    });
  }
}
