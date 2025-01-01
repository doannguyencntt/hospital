import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import icClose from '@iconify/icons-ic/twotone-close';
import { GridComponent } from 'src/app/shared/component/grid/grid.component';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import { CongTyBaoHiemTuNhanTimKiem } from '../cong-no-bao-hiem-tu-nhan.model';

@Component({
  selector: 'app-cong-no-bao-hiem-tu-nhan-cong-ty-popup',
  templateUrl: './cong-no-bao-hiem-tu-nhan-cong-ty-popup.component.html',
  styleUrls: ['./cong-no-bao-hiem-tu-nhan-cong-ty-popup.component.scss']
})
export class CongNoBaoHiemTuNhanCongTyPopupComponent implements OnInit {

  icClose = icClose;

  gridColumns: any[] = [];
  documentType: DocumentType;
  congTyBaoHiemTuNhanTimKiemObj: CongTyBaoHiemTuNhanTimKiem = new CongTyBaoHiemTuNhanTimKiem();

  @ViewChild('sttTemplate', { static: true }) sttTemplate: TemplateRef<any>;
  @ViewChild('actionTemplate', { static: true }) actionTemplate: TemplateRef<any>;
  @ViewChild(GridComponent, { static: true, read: GridComponent}) gridChild: GridComponent;
  constructor(public dialogRef: MatDialogRef<CongNoBaoHiemTuNhanCongTyPopupComponent>) { }

  ngOnInit() {
    this.documentType = DocumentType.CongNoBhtn;
        this.gridColumns = [
          { Field: "STT", Title: "#", Width: 20, Sortable: false, Template: this.sttTemplate },
            { Field: "Ma", Title: "Mã", Width: 60, Sortable: true },
            { Field: "Ten", Title: "Tên", Width: 150, Sortable: true },
            { Field: "DiaChi", Title: "Địa chỉ", Width: 150, Sortable: true },
            { Field: "DienThoai", Title: "Điện thoại", Width: 120, Sortable: true },
            { Field: "MaSoThue", Title: "Mã số thuế", Width: 100, Sortable: true },
            { Field: "Action", Title: "", Width: 60, Template: this.actionTemplate }
        ]
  }

  timKiem(){
    var queryString = JSON.stringify(this.congTyBaoHiemTuNhanTimKiemObj);
    this.gridChild._additionalSearchString = queryString;
    this.gridChild.search();
  }

  searchChanges(event, col){
    if(event != undefined && (event == null || event == ""))
    {
      if(col.Id == "Ma")
      {
        this.congTyBaoHiemTuNhanTimKiemObj.Ma = null;
      }
      if(col.Id == "Ten")
      {
        this.congTyBaoHiemTuNhanTimKiemObj.Ten = null;
      }
      if(col.Id == "DiaChi")
      {
        this.congTyBaoHiemTuNhanTimKiemObj.DiaChi = null;
      }
      if(col.Id == "DienThoai")
      {
        this.congTyBaoHiemTuNhanTimKiemObj.DienThoai = null;
      }
      if(col.Id == "MST")
      {
        this.congTyBaoHiemTuNhanTimKiemObj.MaSoThue = null;
      }
      this.timKiem();
    }
  }

  onKey(event: any) {
    if (event.key == "Enter") {
      this.timKiem();
    }
  }

  chonCongTy(dataItem){
    this.dialogRef.close(dataItem);
  }
}
