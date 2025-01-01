import { Component, OnInit, Inject } from '@angular/core';
import icClose from '@iconify/icons-ic/twotone-close';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material';
@Component({
  selector: 'app-chan-doan-cua-bac-si-khac-popup',
  templateUrl: './chan-doan-cua-bac-si-khac-popup.component.html',
  styleUrls: ['./chan-doan-cua-bac-si-khac-popup.component.scss']
})
export class ChanDoanCuaBacSiKhacPopupComponent implements OnInit {
  icClose = icClose;
  urlGetData: string = "KhamBenh/GetChanDoanBacSiKhacDataForGridAsync";
  urlGetTotalPage: string = "KhamBenh/GetChanDoanBacSiKhacTotalPageForGridAsync";
  urlGetDataDetail: string = "KhamBenh/GetICDKhacDataForGridAsyncDetail";
  urlGetTotalPageDetail: string = "KhamBenh/GetICDKhacTotalPageForGridAsyncDetail";
  yeuCauKhamBenhId: number = null;
  validationErrors: any[] = [];
  gridColumns: any[] = [];
  gridColumnsChild: any[] = [];

  dataChanDoan = {
    data: [],
    total: 0
  }
  constructor(
    private dialog: MatDialog, @Inject(MAT_DIALOG_DATA) public data: any
  ) { 
  }

  ngOnInit() {
    this.yeuCauKhamBenhId = this.data.Model.Id;
    this.gridColumns = [
      { Field: "TenDichVu", Title: "Dịch vụ khám", Width: 150 , Sortable: true },
      { Field: "TenBacSiKham", Title: "Bác sĩ khám", Width: 150 , Sortable: true },
    ];

    this.gridColumnsChild = [
      { Field: "TenICDKhac", Title: "Chẩn đoán ICD kèm theo", Width: 150 , Sortable: true },
      { Field: "GhiChu", Title: "Chẩn đoán", Width: 150 , Sortable: true },
    ];

  }

  close() {
    this.dialog.closeAll();
  }



}
