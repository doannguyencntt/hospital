import { Component, OnInit, Optional, Inject } from '@angular/core';
import icClose from '@iconify/icons-ic/twotone-close';
import { MatDialogRef, MatDialog, MAT_DIALOG_DATA } from '@angular/material';
import { ApiService } from 'src/app/core/services/api.service';
import { ApiError } from 'src/app/shared/models/api-error.model';
declare var $: any;
@Component({
  selector: 'app-duoc-pham-nhap-xuat-ton-kho-popup',
  templateUrl: './duoc-pham-nhap-xuat-ton-kho-popup.component.html',
  styleUrls: ['./duoc-pham-nhap-xuat-ton-kho-popup.component.scss']
})
export class DuocPhamNhapXuatTonKhoPopupComponent implements OnInit {

  canhBaoDuocPham: any;
  searchString: any;
  loading: boolean = false;
  icClose = icClose;

  constructor(private dialogRef: MatDialogRef<DuocPhamNhapXuatTonKhoPopupComponent>, private apiService: ApiService, private dialog: MatDialog,
    @Optional() @Inject(MAT_DIALOG_DATA) public data: any) { 
      console.log("DuocPhamNhapXuatTonKhoPopupComponent = ", data.Model, data);
      this.searchString = data.Model
    }

  ngOnInit() {
    this.GetHTML();
    //this.getSharedPrintForm();
  }

  GetHTML() {
    //console.log("GetHTML = ", this.searchString)
    this.loading = true;
    let KhoQueryString = null;
    let SearchQueryString = null;
    let RangeDateQueryString = null;
    let SortQueryString = null;
    if (this.searchString.KhoId != null) {
      KhoQueryString = this.searchString.KhoId;
    }
    if (this.searchString.Description != null) {
      SearchQueryString = "\"" + this.searchString.Description + "\"";
    }
    if (this.searchString.RangeDate != null) {
      //RangeDateQueryString = "\"" + this.searchInfo3.RangeDate + "\"";
      RangeDateQueryString = "{\"TuNgay\":" + "\"" + this.ConvertDateTime(this.searchString.RangeDate.startDate) + "\""  + ",\"DenNgay\":" + "\""  + this.ConvertDateTime(this.searchString.RangeDate.endDate) + "\""  + "}";
    }
    if(this.searchString.Sort != null){
      SortQueryString = JSON.stringify(this.searchString.Sort);
    }
    let queryString = "{\"KhoId\":" + KhoQueryString + ",\"Description\":" + SearchQueryString + ",\"RangeDate\":" + RangeDateQueryString + ",\"Sort\":" + SortQueryString +"}";
    this.apiService.post<any>("TonKho/GetXuatNhapTonKhoHTML?search=" + queryString).subscribe(
      resultData => {
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
    let SearchQueryString = null;
    let RangeDateQueryString = null;
    let SortQueryString = null;
    if (this.searchString.KhoId != null) {
      KhoQueryString = this.searchString.KhoId;
    }
    if (this.searchString.Description != null) {
      SearchQueryString = "\"" + this.searchString.Description + "\"";
    }
    if (this.searchString.RangeDate != null) {
      //RangeDateQueryString = "\"" + this.searchInfo3.RangeDate + "\"";
      RangeDateQueryString = "{\"TuNgay\":" + "\"" + this.ConvertDateTime(this.searchString.RangeDate.startDate) + "\""  + ",\"DenNgay\":" + "\""  + this.ConvertDateTime(this.searchString.RangeDate.endDate) + "\""  + "}";
    }
    if(this.searchString.Sort != null){
      SortQueryString = JSON.stringify(this.searchString.Sort);
    }
    let queryString = "{\"KhoId\":" + KhoQueryString + ",\"Description\":" + SearchQueryString + ",\"RangeDate\":" + RangeDateQueryString+ ",\"Sort\":" + SortQueryString  +"}";
    return new Promise(resolve => {
      this.apiService.post<any>("TonKho/GetXuatNhapTonKhoHTML?search=" + queryString).subscribe(resultData => {
        resolve(resultData);
      });
    });
  }
  
  ConvertDateTime(datime): String {
    //console.log("ConvertDateTime = ",datime);
    var date = new Date(datime);
    var year = date.getFullYear();
    var rawMonth = parseInt(String(date.getMonth())) + 1;
    var month = rawMonth < 10 ? '0' + rawMonth : rawMonth;
    var rawDay = parseInt(String(date.getDate()));
    var day = rawDay < 10 ? '0' + rawDay : rawDay;
    return year + '-' + month + '-' + day;
}

}
