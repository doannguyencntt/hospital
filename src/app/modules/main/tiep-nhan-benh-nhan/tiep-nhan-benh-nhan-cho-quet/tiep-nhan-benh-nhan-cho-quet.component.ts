import { Component, OnInit, Inject } from '@angular/core';
import { BaoHiemYTe, ThongTinBenhNhan } from '../../danh-muc/bao-hiem-y-te/bao-hiem-y-te.model';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material';
import { ApiService } from 'src/app/core/services/api.service';
import { ApiError } from 'src/app/shared/models/api-error.model';

@Component({
  selector: 'app-tiep-nhan-benh-nhan-cho-quet',
  templateUrl: './tiep-nhan-benh-nhan-cho-quet.component.html',
  styleUrls: ['./tiep-nhan-benh-nhan-cho-quet.component.scss']
})
export class TiepNhanBenhNhanChoQuetComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: ThongTinBenhNhan
  , private dialog: MatDialog, private apiService: ApiService
  , public dialogRef: MatDialogRef<TiepNhanBenhNhanChoQuetComponent>) { }

  ngOnInit() {
    this.quetThongTinBenhNhan(this.data);
  }

  quetThongTinBenhNhan(model: ThongTinBenhNhan){
    //console.log("quetThongTinBenhNhan = ", this.data);
    this.apiService.post<BaoHiemYTe>("BHYT/GetLichSuKhamChuaBenh", model).subscribe(
      resultData => {
        if(resultData!=undefined){
          //this.setValueBHYT(resultData);
        //console.log("resultData === ", resultData);
          this.dialogRef.close(resultData);

        }
    },
      (err: ApiError) => {
        //console.log("err = ", err);
        let errBHYT = new BaoHiemYTe();
        if (err.Message != "Validation Failed" && err.Message != null && err.Message != '') {
          errBHYT.ghiChu = err.Message;
        }
        else
        {
          errBHYT = null;
        }
        this.dialogRef.close(errBHYT);
      });
  }
}
