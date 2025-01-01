import { Component, OnInit, Optional, Inject, ViewChild, AfterViewInit, ChangeDetectorRef } from '@angular/core';
import { MatDialogRef, MatDialog, MAT_DIALOG_DATA } from '@angular/material';
import { ApiService } from 'src/app/core/services/api.service';
import { modelChiTiet, queryInfo, chiTietItem } from '../duoc-pham.model';
import { GridComponent } from 'src/app/shared/component/grid/grid.component';
import { aggregateBy, process } from '@progress/kendo-data-query';

@Component({
  selector: 'app-duoc-pham-nha-xuat-ton-kho-xem-chi-tiet',
  templateUrl: './duoc-pham-nha-xuat-ton-kho-xem-chi-tiet.component.html',
  styleUrls: ['./duoc-pham-nha-xuat-ton-kho-xem-chi-tiet.component.scss']
})
export class DuocPhamNhaXuatTonKhoXemChiTietComponent implements OnInit, AfterViewInit  {

  model: modelChiTiet;
  gridColumns: any[] = [];
  data: any;
  group: any[];
  aggregates: any[];
  chiTietModel: chiTietItem;
  @ViewChild('gridPopup', { static: true }) gridPopup: GridComponent;
  
  constructor(private dialogRef: MatDialogRef<DuocPhamNhaXuatTonKhoXemChiTietComponent>
    , private apiService: ApiService, private dialog: MatDialog, private cd: ChangeDetectorRef,
    @Optional() @Inject(MAT_DIALOG_DATA) public dataR: any) { 
      this.model = dataR.Model
    }

  ngOnInit() {
    this.gridPopup.urlGetData = "TonKho/GetDataForGridNhapXuatTonChiTietAsync";
    this.gridPopup.urlGetTotalPage = "TonKho/GetTotalPageForGridNhapXuatTonChiTietAsync";
    this.getChiTiet(this.model.KhoId, this.model.DuocPhamId);
    this.addQuery();
    this.gridColumns = [
      { Field: "STT", Title: "STT", Width: 50, Sortable: true },
      { Field: "NgayDisplay", Title: "Ngày", Width: 100, Sortable: true },
      { Field: "MaChungTu", Title: "Mã chứng từ", Width: 100, Sortable: true },
      { Field: "Nhap", Title: "Nhập", Width: 100, Sortable: true },
      { Field: "Xuat", Title: "Xuất", Width: 100, Sortable: true },
      { Field: "Ton", Title: "Tồn", Width: 100, Sortable: true },
      // { Field: "CanhBao", Title: "Cảnh báo", MinWidth: 150, Sortable: true},
      // { Field: "Action", Title: "", Width: 110, Template: this.actionTemplate }
    ];
  }

  ngAfterViewInit(){
    //this.cd.detectChanges();
    
    //this.gridPopup.search();
  }

  getChiTiet(khoId: number, duocPhamId: number){
    this.chiTietModel = new chiTietItem();
    this.chiTietModel.DuocPhamId = duocPhamId;
    this.chiTietModel.KhoId = khoId;

    this.apiService.post<any>("TonKho/GetDuocPhamAndKhoName/", this.chiTietModel).subscribe(resultData => {
      if (resultData != null) {
      this.chiTietModel = resultData;
      if(this.chiTietModel.KhoDisplay == undefined || this.chiTietModel.KhoDisplay == null || this.chiTietModel.KhoDisplay == ""){
        this.chiTietModel.KhoDisplay = "Tất cả"
      }
        //console.log("addData = ", this.data);
      }
    });

  }

  addData(queryString: string){
    //
    this.aggregates = [{field: 'UnitPrice', aggregate: 'sum'}];
    this.group = [{
      field: 'Discontinued',
      aggregates: this.aggregates
  }];
    //
    let model = new queryInfo();
    model.AdditionalSearchString = queryString;
    model.Sort = this.gridPopup.sort;
    //console.log("addData = ", model);

    this.apiService.post<any>("TonKho/GetDataForGridNhapXuatTonChiTietAsync/", model).subscribe(resultData => {
      if (resultData != null) {
      this.data = resultData.Data;
        this.data.forEach(element => {
          element.ChiTiet = {kho: this.chiTietModel.KhoDisplay, duocPham: this.chiTietModel.DuocPhamDisplay};
        });

          this.group = [{
          field: 'ChiTiet'
        }];

        this.data = process(this.data, {
          group: this.group
      }).data;

        //console.log("addData = ", this.data);
        //
      }
    });
  }

  addQuery(){
    let KhoQueryString = this.model.KhoId;
    let DuocPhamQueryString = this.model.DuocPhamId;
    let RangeDateQueryString = "{\"TuNgay\":" + "\"" + this.ConvertDateTime(this.model.RangeDate.startDate) + "\""  + ",\"DenNgay\":" + "\""  + this.ConvertDateTime(this.model.RangeDate.endDate) + "\""  + "}";

    let queryString = "{\"KhoId\":" + KhoQueryString + ",\"DuocPhamId\":" + DuocPhamQueryString + ",\"RangeDate\":" + RangeDateQueryString  + "}";
    this.gridPopup.additionalSearchString = queryString;
    //console.log(this.gridPopup);
    this.addData(queryString);
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
