import { Component, OnInit, Inject } from '@angular/core';
import { TiepNhanBenhNhanMessage } from 'src/app/shared/configdata/system-message';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material';
import { TiepNhanBenhNhanViewModel } from '../tiep-nhan-benh-nhan.model';
import icClose from '@iconify/icons-ic/twotone-close';
import { CommonService } from 'src/app/core/utilities/common.helper';

@Component({
  selector: 'app-tiep-nhan-benh-nhan-error',
  templateUrl: './tiep-nhan-benh-nhan-error.component.html',
  styleUrls: ['./tiep-nhan-benh-nhan-error.component.scss']
})
export class TiepNhanBenhNhanErrorComponent implements OnInit {

  errorMessage: string;
  icClose=icClose;
  messageErrFromBHYT: string = "";
  constructor(@Inject(MAT_DIALOG_DATA) public data: TiepNhanBenhNhanViewModel
  , private dialog: MatDialog, public dialogRef: MatDialogRef<TiepNhanBenhNhanErrorComponent>) { }

  ngOnInit() {
    this.errorMessage = TiepNhanBenhNhanMessage.MessageSaiThongTinBenhNhan;
    if(this.data != null){
      //console.log(this.data);
      let dateFormat = new Date(this.data.NgayThangNamSinh);
      this.data.NgayThangNamSinhDisplay = CommonService.formatDate(dateFormat,"dd/mm/yyyy");

      if (this.data.MessageErrFromBHYT != undefined && this.data.MessageErrFromBHYT != null && this.data.MessageErrFromBHYT != "") {
        this.messageErrFromBHYT = this.data.MessageErrFromBHYT;
      }
      else {
        this.messageErrFromBHYT = "Người bệnh này không tồn tại trên cổng BHYT";
      }
    }
    else
    {
      this.messageErrFromBHYT = "Người bệnh này không tồn tại trên cổng BHYT";
    }
  }

  close(){
    this.dialog.closeAll();
    //this.dialogRef.close(1);
  }

  khamKhongBHYT(){
    //this.dialog.closeAll();
    this.dialogRef.close(1);
  }

  huy(){
    this.dialog.closeAll();
    //this.dialogRef.close(1);
  }

  chapNhanBHYTNhapTay(){
    this.dialogRef.close(2);
  }
}
