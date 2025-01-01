import { Component, OnInit, ViewChild, TemplateRef } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material';
import icClose from '@iconify/icons-ic/twotone-close';
import { GridComponent } from 'src/app/shared/component/grid/grid.component';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import { SearchTimNhanVien, TimNhanVienGridVo } from '../quan-ly-tai-khoan.model';
import { stringify } from 'querystring';
import { SortDescriptor } from '@progress/kendo-data-query';

@Component({
  selector: 'app-popup-tim-nhan-vien',
  templateUrl: './popup-tim-nhan-vien.component.html',
  styleUrls: ['./popup-tim-nhan-vien.component.scss']
})
export class PopupTimNhanVienComponent implements OnInit {

  icClose=icClose;
  
  gridColumns: any[] = [];
  documentType: DocumentType;

  timKiemNhanVien: SearchTimNhanVien = new SearchTimNhanVien();

  @ViewChild('grid', { static: false }) grid: GridComponent;
  @ViewChild('actionTemplate', { static: true }) actionTemplate: TemplateRef<any>;
  
  constructor(private dialog: MatDialog, public dialogRef: MatDialogRef<PopupTimNhanVienComponent>) { }

  sort: SortDescriptor[] = [{
    field: 'Id',
    dir: 'desc'
  }];
  
  ngOnInit() {
    this.documentType = DocumentType.User;

    this.gridColumns = [
      { Field: "HoTen", Title: "Họ Tên", Width: 200, Sortable: false },
      { Field: "GioiTinhDisplay", Title: "GT", Width: 100, Sortable: false },
      { Field: "SoDienThoai", Title: "Số Điện Thoại", Width: 200, Sortable: false },
      { Field: "Email", Title: "Email", Width: 200, Sortable: false },
      { Field: "DiaChi", Title: "Địa chỉ", Width: 250, Sortable: false },
      { Field: "Action", Title: "", Width: 60, Template: this.actionTemplate },
    ];
  }

  close(){
    //this.dialog.closeAll();
    this.dialogRef.close();
  }

  onKey(event: any){
    if (event.keyCode === 13){
      this.TimKiem();
    }
  }

  TimKiem(){
    let queryString = JSON.stringify(this.timKiemNhanVien);
    this.grid._additionalSearchString = queryString;
    this.grid.search();
  }

  chonNhanVien(item: TimNhanVienGridVo){
    if(item != null && item != undefined){
      this.dialogRef.close(item);
    }
  }
}
