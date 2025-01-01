import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { TiepNhanBenhNhanViewModel } from '../tiep-nhan-benh-nhan.model';
import icClose from '@iconify/icons-ic/twotone-close';
import { TiepNhanBenhNhanChoQuetComponent } from '../tiep-nhan-benh-nhan-cho-quet/tiep-nhan-benh-nhan-cho-quet.component';
import { TiepNhanBenhNhanErrorComponent } from '../tiep-nhan-benh-nhan-error/tiep-nhan-benh-nhan-error.component';
import { ThongTinBenhNhan } from '../../danh-muc/bao-hiem-y-te/bao-hiem-y-te.model';

@Component({
  selector: 'app-tiep-nhan-benh-nhan-popup-khong-kiem-tra-duoc',
  templateUrl: './tiep-nhan-benh-nhan-popup-khong-kiem-tra-duoc.component.html',
  styleUrls: ['./tiep-nhan-benh-nhan-popup-khong-kiem-tra-duoc.component.scss']
})
export class TiepNhanBenhNhanPopupKhongKiemTraDuocComponent implements OnInit {

  thongTinBenhNhan: ThongTinBenhNhan = new ThongTinBenhNhan();
  
  icClose=icClose;
  constructor(@Inject(MAT_DIALOG_DATA) public data: TiepNhanBenhNhanViewModel
  , private dialog: MatDialog, public dialogRef: MatDialogRef<TiepNhanBenhNhanPopupKhongKiemTraDuocComponent>
  , public dialogRef2: MatDialogRef<TiepNhanBenhNhanErrorComponent>) { }

  ngOnInit() {
    //console.log("TiepNhanBenhNhanPopupKhongKiemTraDuocComponent = ", this.data);
  }

  khamKhongBHYT(){
    this.dialogRef.close(false);
    //this.dialogRef2.close();
  }

  chapNhanBHYTNhapTay(){
    this.dialogRef.close(true);
  }

  // chapNhanCoBHYT(){
  //   this.dialogRef.close(true);
  //   //this.dialogRef2.close();

  // }
  close(){
    this.dialogRef.close(false);
  }
  thuLai(){
    this.thongTinBenhNhan.MaThe = this.data.BHYTMaSoThe;
    this.thongTinBenhNhan.TenBenhNhan = this.data.HoTen;
    this.thongTinBenhNhan.NgaySinh = this.data.NgayThangNamSinh;

    let dialogRef = this.dialog.open(TiepNhanBenhNhanChoQuetComponent, {
      disableClose: true,
      width: '500px',
      height: '250px',
      data: this.thongTinBenhNhan,
    });
    dialogRef.afterClosed().subscribe(result => {
      //console.log("close = ", result);
      // if (result == null || (result != null && result.maKetQua == "050")) {
      if (result == null || (result != null && result.maKetQua !== "000" && result.maKetQua !== "004")) {
        //this.notificationService.showError(TiepNhanBenhNhanMessage.MessageSaiThongTinBenhNhan);

        //
        this.thongTinBenhNhan.MessageErrFromBHYT = result != null ? result.ghiChu : null;
        let dialogRef = this.dialog.open(TiepNhanBenhNhanErrorComponent, {
          disableClose: false,
          width: '400px',
          height: '100px',
          data: this.thongTinBenhNhan
        });
        dialogRef.afterClosed().subscribe(result => {
          //document.getElementById("SoTheBHYTisAutoFocus").focus();
        });
      //

      }
      else {
        //console.log("thuLai = ", result);
        this.dialogRef.close(result);
        //this.dialogRef2.close();

      }
    });
  }
}
