import { Component, Inject, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import icClose from '@iconify/icons-ic/twotone-close';
import { SortDescriptor } from '@progress/kendo-data-query';
import { ApiService } from 'src/app/core/services/api.service';
import { CommonService } from 'src/app/core/utilities/common.helper';
import { GridComponent } from 'src/app/shared/component/grid/grid.component';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import { ApiError } from 'src/app/shared/models/api-error.model';
import { PopupTimKiemBenhNhanComponent } from '../../../tiep-nhan-benh-nhan/popup-tim-kiem-benh-nhan/popup-tim-kiem-benh-nhan.component';
import { BenhNhanTiepNhanBenhNhanViewModel, DataTimKiem, TimKiemBenhNhanGridVo, TimKiemBenhNhanSearch } from '../../../tiep-nhan-benh-nhan/tiep-nhan-benh-nhan.model';

@Component({
  selector: 'app-kham-doan-hop-dong-kham-tim-nhan-vien-popup',
  templateUrl: './kham-doan-hop-dong-kham-tim-nhan-vien-popup.component.html',
  styleUrls: ['./kham-doan-hop-dong-kham-tim-nhan-vien-popup.component.scss']
})
export class KhamDoanHopDongKhamTimNhanVienPopupComponent implements OnInit {
  icClose = icClose;
  gridColumns: any[] = [];
  gridData: any;
  documentType: DocumentType;
  timKiemBenhNhanSearch: TimKiemBenhNhanSearch = new TimKiemBenhNhanSearch();
  queryStrings: any;

  sort: SortDescriptor[] = [
    {
      field: "MaBN",
      dir: "asc",
    },
  ];

  urlGetDataGrid: string = "TiepNhanBenhNhan/GetDataForGridAsyncPopupTimKiem";
  urlGetTotalPageGrid: string = "TiepNhanBenhNhan/GetTotalPageForGridAsyncPopupTimKiem";

  @ViewChild('grid', { static: true }) grid: GridComponent;
  @ViewChild('actionTemplate', { static: true }) actionTemplate: TemplateRef<any>;

  constructor(@Inject(MAT_DIALOG_DATA) public data: DataTimKiem
    , private dialog: MatDialog, public dialogRef: MatDialogRef<PopupTimKiemBenhNhanComponent>
    , private apiService: ApiService) {  
    if (data == null || data == undefined) {
      data = new DataTimKiem();
    }
  }

  ngOnInit() {    
    this.gridColumns = [
      { Field: "MaBN", Title: "Mã NB", Width: 80, Sortable: false },
      { Field: "BHYTMaSoThe", Title: "Mã thẻ BHYT", Width: 150, Sortable: false },
      { Field: "HoTen", Title: "Họ và tên", Width: 150, Sortable: false },
      { Field: "NgaySinhDisplay", Title: "Ngày sinh", Width: 120, Sortable: false },
      { Field: "GioiTinhDisplay", Title: "GT", Width: 60, Sortable: false },
      { Field: "SoChungMinhThu", Title: "CMND", Width: 150, Sortable: false },
      { Field: "SoDienThoaiDisplay", Title: "Điện thoại", Width: 120, Sortable: false },
      { Field: "DiaChi", Title: "Địa chỉ", Width: 300, Sortable: false },
      { Field: "Action", Title: "", Width: 60, Template: this.actionTemplate },
    ];
    this.TimKiem();
  }

  close(answer: string) {
    this.dialogRef.close(answer);
  }

  chonBenhNhan(item: TimKiemBenhNhanGridVo) {
    this.apiService.post<BenhNhanTiepNhanBenhNhanViewModel>("TiepNhanBenhNhan/GetBenhNhan/?benhNhanId=" + item.Id).subscribe(
      resultData => {
        this.dialogRef.close(resultData);
      },
      (err: ApiError) => {
      });

  }

  onKey(event: any) {
    if (event.keyCode === 13) {
      this.TimKiem();
    }
  }


  TimKiem() {
    this.searchData();
  }

  searchData() {
    let stringClone = JSON.parse(JSON.stringify(this.timKiemBenhNhanSearch));
    if (this.timKiemBenhNhanSearch.NgaySinhFormat != null) {
      stringClone.NgaySinhFormat = this.removeTimeZone(new Date(this.timKiemBenhNhanSearch.NgaySinhFormat)).replace('Z', '');
    }

    this.queryStrings = JSON.stringify(stringClone);

    if (this.grid != undefined) {
      this.grid._additionalSearchString = this.queryStrings;
      this.grid.search();
    }
  }

  removeTimeZone(date) {
    let UTCDate = Date.UTC(date.getFullYear(), date.getMonth(), date.getDate(), date.getHours(), date.getMinutes()) - date.getTimezoneOffset();
    return new Date(UTCDate).toISOString();
  }

}
