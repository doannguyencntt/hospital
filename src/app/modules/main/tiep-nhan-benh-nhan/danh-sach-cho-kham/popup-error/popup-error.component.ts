import { Component, OnInit, Inject } from '@angular/core';
import { TiepNhanBenhNhanMessage } from 'src/app/shared/configdata/system-message';
import icClose from '@iconify/icons-ic/twotone-close';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material';
import { TiepNhanBenhNhanViewModel } from '../../tiep-nhan-benh-nhan.model';
import { CommonService } from 'src/app/core/utilities/common.helper';

@Component({
  selector: 'app-popup-error',
  templateUrl: './popup-error.component.html',
  styleUrls: ['./popup-error.component.scss']
})
export class PopupErrorComponent implements OnInit {

  errorMessage: string;
  icClose=icClose;
  messageErrFromBHYT: string = "";
  constructor(@Inject(MAT_DIALOG_DATA) public data: TiepNhanBenhNhanViewModel
  , private dialog: MatDialog, public dialogRef: MatDialogRef<PopupErrorComponent>) { }

  ngOnInit() {
    this.errorMessage = TiepNhanBenhNhanMessage.MessageSaiThongTinBenhNhan;
    if(this.data != null){
      //console.log(this.data);
      this.data.NgayThangNamSinhDisplay = CommonService.formatDate(new Date(this.data.NgayThangNamSinh),"dd/mm/yyyy");

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
    //console.log("close");
    this.dialog.closeAll();
    //this.dialogRef.close(1);
  }

  khamKhongBHYT(){
    //this.dialog.closeAll();
    this.dialogRef.close(1);
  }

  huy(){
    //console.log("huy");
    this.dialog.closeAll();
    //this.dialogRef.close(1);
  }

  chapNhanBHYTNhapTay(){
    this.dialogRef.close(2);
  }
}
