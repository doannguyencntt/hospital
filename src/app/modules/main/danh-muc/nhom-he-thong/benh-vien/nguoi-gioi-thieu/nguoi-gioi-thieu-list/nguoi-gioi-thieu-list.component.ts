import { Component, OnInit, ViewChild, TemplateRef } from '@angular/core';
import { GridComponent } from 'src/app/shared/component/grid/grid.component';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';

@Component({
  selector: 'app-nguoi-gioi-thieu-list',
  templateUrl: './nguoi-gioi-thieu-list.component.html',
  styleUrls: ['./nguoi-gioi-thieu-list.component.scss']
})
export class NguoiGioiThieuListComponent implements OnInit {
  documentType: DocumentType;
  gridColumns: any[] = [];
  @ViewChild(GridComponent, {static: true}) gridChild: GridComponent;
  constructor() { }

  ngOnInit() {
    //this.documentType = DocumentType.DanhMucNguoiGioiThieu;
    this.gridColumns = [
      { Field: "HoTen", Title: "Họ Tên", Width: 240, Sortable: true, LinkDetail: true },
      { Field: "SoDienThoaiDisplay", Title: "Số Điện Thoại", Width: 180, Sortable: true },
      { Field: "HoTenNhanVienQuanLy", Title: "Người Quản Lý", MinWidth: 300, Sortable: true },

    ];
  }

}
