import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material';
import { ThongTinBenhNhan, BaoHiemYTe } from '../../../danh-muc/bao-hiem-y-te/bao-hiem-y-te.model';
import { ApiService } from 'src/app/core/services/api.service';
import { ApiError } from 'src/app/shared/models/api-error.model';

@Component({
  selector: 'app-popup-cho-quet',
  templateUrl: './popup-cho-quet.component.html',
  styleUrls: ['./popup-cho-quet.component.scss']
})
export class PopupChoQuetComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: ThongTinBenhNhan
  , private dialog: MatDialog, private apiService: ApiService
  , public dialogRef: MatDialogRef<PopupChoQuetComponent>) { }

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
