import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { GridComponent } from 'src/app/shared/component/grid/grid.component';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';

@Component({
  selector: 'app-tai-kham',
  templateUrl: './tai-kham.component.html',
  styleUrls: ['./tai-kham.component.scss']
})
export class TaiKhamComponent implements OnInit {

  documentType: DocumentType;

  gridColumns: any[] = [];
  urlGetDataGrid: string = "TiepNhanBenhNhan/GetDataForGridAsyncTaiKham";
  urlGetTotalPageGrid: string = "TiepNhanBenhNhan/GetTotalPageForGridAsyncTaiKham";

  @ViewChild(GridComponent, { static: true }) gridChild: GridComponent;

  @Input() BenhNhan: number = null;
  
  constructor() { }

  ngOnInit() {
    this.documentType = DocumentType.YeuCauTiepNhan;

    this.gridColumns = [
      { Field: "TenDichVu", Title: "Tên dịch vụ", Width: 150, Sortable: false },
      { Field: "BacSiThucHien", Title: "Bác sĩ thực hiện", Width: 150, Sortable: false},
      { Field: "NgayTaiKhamDisplay", Title: "Ngày tái khám", Width: 150, Sortable: false},
      { Field: "GhiChuTaiKham", Title: "Ghi chú tái khám", Width: 150, Sortable: false},
    ];
  }

}
