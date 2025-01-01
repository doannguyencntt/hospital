import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material';
import { ThongTinBenhNhan, BaoHiemYTe } from '../../../danh-muc/bao-hiem-y-te/bao-hiem-y-te.model';
import { ApiService } from 'src/app/core/services/api.service';
import { ApiError } from 'src/app/shared/models/api-error.model';

@Component({
  selector: 'app-danh-sach-cho-kham-cho-quyet',
  templateUrl: './danh-sach-cho-kham-cho-quyet.component.html',
  styleUrls: ['./danh-sach-cho-kham-cho-quyet.component.scss']
})
export class DanhSachChoKhamChoQuyetComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: ThongTinBenhNhan
  , private dialog: MatDialog, private apiService: ApiService
  , public dialogRef: MatDialogRef<DanhSachChoKhamChoQuyetComponent>) { }

  ngOnInit() {
    this.quetThongTinBenhNhan(this.data);
  }

  quetThongTinBenhNhan(model: ThongTinBenhNhan){
    this.apiService.post<BaoHiemYTe>("BHYT/GetLichSuKhamChuaBenh", model).subscribe(
      resultData => {
        if(resultData!=undefined){
          //this.setValueBHYT(resultData);
          this.dialogRef.close(resultData);

        }
    },
      (err: ApiError) => {
        //console.log("err = ", err);
        this.dialogRef.close(null);
      });
  }

}
