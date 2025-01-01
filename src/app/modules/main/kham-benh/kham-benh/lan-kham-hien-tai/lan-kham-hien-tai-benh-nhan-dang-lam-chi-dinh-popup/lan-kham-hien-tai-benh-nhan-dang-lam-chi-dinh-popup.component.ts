import { Component, OnInit, Inject, ViewChild, TemplateRef } from '@angular/core';
import icClose from '@iconify/icons-ic/twotone-close';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import icAssignment from '@iconify/icons-ic/assignment';

@Component({
  selector: 'app-lan-kham-hien-tai-benh-nhan-dang-lam-chi-dinh-popup',
  templateUrl: './lan-kham-hien-tai-benh-nhan-dang-lam-chi-dinh-popup.component.html',
  styleUrls: ['./lan-kham-hien-tai-benh-nhan-dang-lam-chi-dinh-popup.component.scss']
})
export class LanKhamHienTaiBenhNhanDangLamChiDinhPopupComponent implements OnInit {

  icClose=icClose;
  gridColumns: any[] = [];
  documentType: DocumentType.KhamBenh;
  icAssignment = icAssignment;

  urlData: string = "KhamBenh/GetDataForGridBenhNhanLamChiDinhAsync";
  urlTotalPage: string = "KhamBenh/GetTotalPageForGriBenhNhanLamChiDinhdAsync";
  @ViewChild('actionTemplate', { static: true }) actionTemplate: TemplateRef<any>;
  constructor(private dialog: MatDialog, @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
    this.gridColumns = [
      { Field: "MaYeuCauTiepNhan", Title: "Mã TN", Width: 64, Sortable: true },
      { Field: "MaBN", Title: "Mã NB", Width: 55, Sortable: true },
      { Field: "HoTen", Title: "Họ tên", Width: 135, Sortable: true },
      { Field: "TenGioiTinh", Title: "GT", Width: 55, Sortable: true },
      { Field: "Tuoi", Title: "Tuổi", Width: 52, Sortable: true },
      { Field: "DiaChi", Title: "Địa chỉ", Width: 120, Sortable: true },
      { Field: "TinhTrang", Title: "Tình trạng", Width: 80, Sortable: true },
      { Field: "Action", Title: "", Width: 80, Sortable: true, Template: this.actionTemplate }
    ]
  }

  close(){
    this.dialog.closeAll();
  }
}
