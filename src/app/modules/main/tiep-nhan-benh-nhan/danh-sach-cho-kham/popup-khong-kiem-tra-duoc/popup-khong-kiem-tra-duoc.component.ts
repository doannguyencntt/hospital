import { Component, OnInit, Inject } from '@angular/core';
import { ThongTinBenhNhan } from '../../../danh-muc/bao-hiem-y-te/bao-hiem-y-te.model';
import icClose from '@iconify/icons-ic/twotone-close';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material';
import { TiepNhanBenhNhanViewModel } from '../../tiep-nhan-benh-nhan.model';
import { PopupChoQuetComponent } from '../popup-cho-quet/popup-cho-quet.component';
import { PopupErrorComponent } from '../popup-error/popup-error.component';

@Component({
  selector: 'app-popup-khong-kiem-tra-duoc',
  templateUrl: './popup-khong-kiem-tra-duoc.component.html',
  styleUrls: ['./popup-khong-kiem-tra-duoc.component.scss']
})
export class PopupKhongKiemTraDuocComponent implements OnInit {

  thongTinBenhNhan: ThongTinBenhNhan = new ThongTinBenhNhan();
  
  icClose=icClose;
  constructor(@Inject(MAT_DIALOG_DATA) public data: TiepNhanBenhNhanViewModel
  , private dialog: MatDialog, public dialogRef: MatDialogRef<PopupKhongKiemTraDuocComponent>) { }

  ngOnInit() {
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

    let dialogRef = this.dialog.open(PopupChoQuetComponent, {
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
        let dialogRef = this.dialog.open(PopupErrorComponent, {
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
