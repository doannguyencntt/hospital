import { Component, OnInit, Input, Optional, Inject } from '@angular/core';
import {  MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import icClose from '@iconify/icons-ic/twotone-close';
import { ApiService } from 'src/app/core/services/api.service';
import { ApiError } from 'src/app/shared/models/api-error.model';
declare var $: any;
@Component({
  selector: 'app-duoc-pham-sap-het-han-popup-xem',
  templateUrl: './duoc-pham-sap-het-han-popup-xem.component.html',
  styleUrls: ['./duoc-pham-sap-het-han-popup-xem.component.scss']
})
export class DuocPhamSapHetHanPopupXemComponent implements OnInit {
searchString:any;
url :string;
loading:boolean = false;
duocPhamSapHetHan:any;
  constructor(private dialogRef: MatDialogRef<DuocPhamSapHetHanPopupXemComponent>,private apiService: ApiService,
    @Optional() @Inject(MAT_DIALOG_DATA) public data: any) {
     this.searchString=data.Model
     console.log('123',data)
  }

  ngOnInit() {
    console.log('Data', this.searchString)
    
    this.GetValue();
  }
  
  GetValue(){
    this.loading = true;
    console.log('search String: ',this.searchString)
    let KhoQueryString = null;
    let SearchQueryString = null;
    if(this.searchString.KhoId != null)
    {
      KhoQueryString = this.searchString.KhoId;
    }
    if(this.searchString.searchString != null)
    {
      SearchQueryString = "\"" + this.searchString.searchString + "\"";
    }
    if(KhoQueryString==null || KhoQueryString == undefined){
      KhoQueryString= 0;
    }
    let queryString = "{\"KhoId\":" + KhoQueryString + ",\"DuocPham\":" + SearchQueryString +"}";
    this.apiService.post<any>("DuocPhamSapHetHan/GetDuocPhamSapHetHan?search="+queryString).subscribe(
      resultData => {
        this.duocPhamSapHetHan=resultData;
        console.log('Du lieu tra ve: ',resultData)
        this.GetHTML();
    },
      (err: ApiError) => {
        
      });
  }
  getSharedPrintForm() {
    let KhoQueryString = null;
    let SearchQueryString = null;
    if(this.searchString.KhoId != null)
    {
      KhoQueryString = this.searchString.KhoId;
    }
    if(this.searchString.searchString != null)
    {
      SearchQueryString = "\"" + this.searchString.searchString + "\"";
    }
    if(KhoQueryString==null || KhoQueryString == undefined){
      KhoQueryString= 0;
    }
    let queryString = "{\"KhoId\":" + KhoQueryString + ",\"DuocPham\":" + SearchQueryString +"}";
    return new Promise(resolve => {
      this.apiService.get<any>("DuocPhamSapHetHan/InBaoCaoDuocPhamSapHetHan?search="+queryString).subscribe(resultData => {
        resolve(resultData);
        this.dialogRef.close(resultData);
      });
    });
  }
  GetHTML(){
    this.loading=true;
    let KhoQueryString = null;
    let SearchQueryString = null;
    if(this.searchString.KhoId != null)
    {
      KhoQueryString = this.searchString.KhoId;
    }
    if(this.searchString.searchString != null)
    {
      SearchQueryString = "\"" + this.searchString.searchString + "\"";
    }
    if(KhoQueryString==null || KhoQueryString == undefined){
      KhoQueryString= 0;
    }
    let queryString = "{\"KhoId\":" + KhoQueryString + ",\"DuocPham\":" + SearchQueryString +"}";
    this.apiService.post<any>("DuocPhamSapHetHan/GetHTML?search="+queryString).subscribe(
      resultData => {
        if(resultData != null)
       {
        var html=resultData;
        $(".a").show();
        $(".showPdf").append(html);
       }
       this.loading=false;
    },
      (err: ApiError) => {
        
      });
  }
}
