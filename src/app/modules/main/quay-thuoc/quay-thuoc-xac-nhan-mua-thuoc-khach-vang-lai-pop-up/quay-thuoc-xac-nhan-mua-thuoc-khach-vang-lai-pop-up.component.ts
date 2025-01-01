import { Component, OnInit, Optional, Inject } from '@angular/core';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ConfirmPrint } from '../quay-thuoc.model';
import { Router } from '@angular/router';
import data from '@iconify/icons-ic/twotone-keyboard-voice';

@Component({
  selector: 'app-quay-thuoc-xac-nhan-mua-thuoc-khach-vang-lai-pop-up',
  templateUrl: './quay-thuoc-xac-nhan-mua-thuoc-khach-vang-lai-pop-up.component.html',
  styleUrls: ['./quay-thuoc-xac-nhan-mua-thuoc-khach-vang-lai-pop-up.component.scss']
})
export class QuayThuocXacNhanMuaThuocKhachVangLaiPopUpComponent implements OnInit {
  thongTin: ConfirmPrint;
  Title: any = null;
  typeDanhSachThanhToan: number;
  constructor(private dialogRef: MatDialogRef<QuayThuocXacNhanMuaThuocKhachVangLaiPopUpComponent>, @Optional() @Inject(MAT_DIALOG_DATA) public dataItem: any, private router: Router) {
    this.Title = dataItem.Title
    this.typeDanhSachThanhToan = dataItem.KiemTraThanhToan;
  }

  ngOnInit() {
  }
  close(answer: any) {
    if (answer == 1) {
      this.dialogRef.close();
    }
    else {
      if (this.dataItem.Model != null) {
        this.router.navigate(['nha-thuoc/khach-vang-lai'], { queryParams: { page: this.typeDanhSachThanhToan, maBN: this.dataItem.Model.MaBN } });
        this.dialogRef.close();
      }
      else {
        if (this.dataItem.TenBenhNhanSearch != null && this.dataItem.SoDienThoaiSearch != null) {
          this.router.navigate(['nha-thuoc/khach-vang-lai'], { queryParams: { page: this.typeDanhSachThanhToan, TenBenhNhan: this.dataItem.TenBenhNhanSearch, SDT: this.dataItem.SoDienThoaiSearch } });
        } else if (this.dataItem.TenBenhNhanSearch != null  && this.dataItem.SoDienThoaiSearch == null) {
          this.router.navigate(['nha-thuoc/khach-vang-lai'], { queryParams: { page: this.typeDanhSachThanhToan, TenBenhNhan: this.dataItem.TenBenhNhanSearch } });
        }
        else {
          this.router.navigate(['nha-thuoc/khach-vang-lai'], { queryParams: { page: this.typeDanhSachThanhToan, SDT: this.dataItem.SoDienThoaiSearch } });
        }
        this.dialogRef.close();
      }
    }
  }
}
