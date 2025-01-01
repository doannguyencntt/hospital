import { Component, OnInit } from '@angular/core';
import icAddCircle from '@iconify/icons-ic/add-circle';
@Component({
  selector: 'app-thong-tin-chuan-doan',
  templateUrl: './thong-tin-chuan-doan.component.html',
  styleUrls: ['./thong-tin-chuan-doan.component.scss']
})
export class ThognTinChuanDoanComponent implements OnInit {
  gridTreSoSinhColumns: any[] = [];
  sampleData: any[] = [];
  constructor() { }
  icAddCircle = icAddCircle;
  ngOnInit() {
    this.gridTreSoSinhColumns = [
      { Field: "ICD", Title: "GIỚI TÍNH", Width: 100, Sortable: true },
      { Field: "ChuanDoan", Title: "TÌNH TRẠNG", Width: 150, Sortable: true },
      { Field: "ICD", Title: "DỊ TẬT", Width: 100, Sortable: true },
      { Field: "ChuanDoan", Title: "CÂN NẶNG(g)", Width: 150, Sortable: true }
    ];
  }
}
