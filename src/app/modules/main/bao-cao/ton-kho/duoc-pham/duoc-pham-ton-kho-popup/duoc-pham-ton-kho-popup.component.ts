import { Component, OnInit, Optional, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { ApiService } from 'src/app/core/services/api.service';
import { ApiError } from 'src/app/shared/models/api-error.model';
import icClose from '@iconify/icons-ic/twotone-close';
import { LoadingComponent } from 'src/app/shared/component/dialogs/loading/loading.component';

declare var $: any;
@Component({
  selector: 'app-duoc-pham-ton-kho-popup',
  templateUrl: './duoc-pham-ton-kho-popup.component.html',
  styleUrls: ['./duoc-pham-ton-kho-popup.component.scss']
})
export class DuocPhamTonKhoPopupComponent implements OnInit {
  canhBaoDuocPham: any;
  searchString: any;
  loading: boolean = false;
  icClose = icClose;
  constructor(private dialogRef: MatDialogRef<DuocPhamTonKhoPopupComponent>, private apiService: ApiService, private dialog: MatDialog,
    @Optional() @Inject(MAT_DIALOG_DATA) public data: any) {
    this.searchString = data.Model
    console.log('data Popup', data)
  }

  ngOnInit() {
    this.GetHTML();
  }
  GetHTML() {
    var loadingDialog = this.dialog.open(LoadingComponent, {
      disableClose: true,
      width: "200px",
      height: "90px",
      data: { Title: "Đang tải dữ liệu..." },
    });
    this.loading = true;
    let KhoQueryString = null;
    let CanhBaoQueryString = null;
    let SearchQueryString = null;

    if (this.searchString.KhoId != null) {
      KhoQueryString = this.searchString.KhoId;
    }
    if (this.searchString.LoaiCanhBao != null || this.searchString.LoaiCanhBao != undefined) {
      CanhBaoQueryString = "\"" + this.searchString.LoaiCanhBao + "\"";
    }
    if(this.searchString.CanhBaoId != null || this.searchString.CanhBaoId != undefined )
    if (this.searchString.CanhBaoId == 0) {
      CanhBaoQueryString = "\"" + "Tất cả" + "\"";
    }
    if (KhoQueryString == null || KhoQueryString == undefined) {
      KhoQueryString = 0;
    }
    if (this.searchString.searchString != null) {
      SearchQueryString = "\"" + this.searchString.searchString + "\"";
    }
    let queryString = "{\"KhoId\":" + KhoQueryString + ",\"CanhBao\":" + CanhBaoQueryString + ",\"searchString\":" + SearchQueryString + "}";
    this.apiService.post<any>("TonKho/GetCanhBaoDuocPhamHTML?search=" + queryString).subscribe(
      resultData => {
        loadingDialog.close();
        if (resultData != null) {
          var html = resultData;
          $(".a").show();
          $(".showPdf").append(html);
        }
        this.loading = false;
      },
      (err: ApiError) => {

      });
  }
  close() {
    this.dialog.closeAll();
  }
  getSharedPrintForm() {
    let KhoQueryString = null;
    let CanhBaoQueryString = null;
    let SearchQueryString = null;

    if (this.searchString.KhoId != null) {
      KhoQueryString = this.searchString.KhoId;
    }
    if (this.searchString.LoaiCanhBao != null || this.searchString.LoaiCanhBao != undefined) {
      CanhBaoQueryString = "\"" + this.searchString.LoaiCanhBao + "\"";
    }
    if (KhoQueryString == null || KhoQueryString == undefined) {
      KhoQueryString = 0;
    }
    if (this.searchString.searchString != null) {
      SearchQueryString = "\"" + this.searchString.searchString + "\"";
    }
    let queryString = "{\"KhoId\":" + KhoQueryString + ",\"CanhBao\":" + CanhBaoQueryString + ",\"searchString\":" + SearchQueryString + "}";
    return new Promise(resolve => {
      this.apiService.post<any>("TonKho/GetCanhBaoDuocPhamHTML?search=" + queryString).subscribe(resultData => {
        resolve(resultData);
      });
      this.close();
    });
  }
}
