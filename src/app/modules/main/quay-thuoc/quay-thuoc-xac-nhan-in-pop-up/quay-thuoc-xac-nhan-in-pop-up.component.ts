import { Component, OnInit, Optional, Inject} from '@angular/core';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ConfirmPrint } from '../quay-thuoc.model';

@Component({
  selector: 'app-quay-thuoc-xac-nhan-in-pop-up',
  templateUrl: './quay-thuoc-xac-nhan-in-pop-up.component.html',
  styleUrls: ['./quay-thuoc-xac-nhan-in-pop-up.component.scss']
})
export class QuayThuocXacNhanInPopUpComponent implements OnInit {
  thongTin: ConfirmPrint;
  Title: any = null;
  constructor(private dialogRef: MatDialogRef<QuayThuocXacNhanInPopUpComponent>, @Optional() @Inject(MAT_DIALOG_DATA) public dataItem: any) {
    this.thongTin = new ConfirmPrint();
    this.thongTin.TaiKhoanBenhNhanThuId = dataItem.Model.TaiKhoanBenhNhanThuId
    this.Title = dataItem.Title
  }

  ngOnInit() {
  }
  close(answer: any) {
    this.thongTin.Response = answer;
    this.dialogRef.close(this.thongTin);
  }
}
