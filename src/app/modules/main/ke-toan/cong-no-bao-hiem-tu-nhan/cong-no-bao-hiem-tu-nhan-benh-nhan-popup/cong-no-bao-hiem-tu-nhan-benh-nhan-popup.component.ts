import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import icClose from '@iconify/icons-ic/twotone-close';
import { GridComponent } from 'src/app/shared/component/grid/grid.component';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import { GachNoBenhNhan } from '../cong-no-bao-hiem-tu-nhan.model';

@Component({
  selector: 'app-cong-no-bao-hiem-tu-nhan-benh-nhan-popup',
  templateUrl: './cong-no-bao-hiem-tu-nhan-benh-nhan-popup.component.html',
  styleUrls: ['./cong-no-bao-hiem-tu-nhan-benh-nhan-popup.component.scss']
})
export class CongNoBaoHiemTuNhanBenhNhanPopupComponent implements OnInit {

  icClose = icClose;

  gridColumns: any[] = [];
  documentType: DocumentType;
  benhNhanTimKiemObj: GachNoBenhNhan = new GachNoBenhNhan();

  @ViewChild('sttTemplate', { static: true }) sttTemplate: TemplateRef<any>;
  @ViewChild('soDienThoaiTemplate', { static: true }) soDienThoaiTemplate: TemplateRef<any>;
  @ViewChild('actionTemplate', { static: true }) actionTemplate: TemplateRef<any>;
  @ViewChild(GridComponent, { static: true, read: GridComponent}) gridChild: GridComponent;
  constructor(public dialogRef: MatDialogRef<CongNoBaoHiemTuNhanBenhNhanPopupComponent>) { }

  ngOnInit() {
    this.documentType = DocumentType.CongNoBhtn;
        this.gridColumns = [
          { Field: "STT", Title: "#", Width: 30, Sortable: false, Template: this.sttTemplate },
            { Field: "MaBN", Title: "Mã", Width: 70, Sortable: true },
            { Field: "HoTen", Title: "Tên", Width: 150, Sortable: true },
            { Field: "NgayThangNamSinh", Title: "Ngày sinh", Width: 100, Sortable: true },
            { Field: "TenGioiTinh", Title: "Giới Tính", Width: 80, Sortable: true },
            { Field: "SoChungMinhThu", Title: "CMND", Width: 100, Sortable: true },
            { Field: "DienThoai", Title: "Điện thoại", Width: 100, Sortable: true, Template: this.soDienThoaiTemplate },
            { Field: "DiaChiDayDu", Title: "Địa chỉ", Width: 150, Sortable: true },
            { Field: "Action", Title: "", Width: 60, Template: this.actionTemplate }
        ]
  }

  timKiem(){
    var queryString = JSON.stringify(this.benhNhanTimKiemObj);
    this.gridChild._additionalSearchString = queryString;
    this.gridChild.search();
  }

  searchChanges(event, col){
    if(event != undefined && (event == null || event == ""))
    {
      if(col.Id == "Ma")
      {
        this.benhNhanTimKiemObj.MaBN = null;
      }
      if(col.Id == "Ten")
      {
        this.benhNhanTimKiemObj.HoTen = null;
      }
      if(col.Id == "DiaChi")
      {
        this.benhNhanTimKiemObj.DiaChiDayDu = null;
      }
      if(col.Id == "DienThoai")
      {
        this.benhNhanTimKiemObj.SoDienThoai = null;
      }
      if(col.Id == "CMT")
      {
        this.benhNhanTimKiemObj.SoChungMinhThu = null;
      }
      this.timKiem();
    }
  }

  onKey(event: any) {
    if (event.key == "Enter") {
      this.timKiem();
    }
  }

  chonBenhNhan(dataItem){
    this.dialogRef.close(dataItem);
  }
}
