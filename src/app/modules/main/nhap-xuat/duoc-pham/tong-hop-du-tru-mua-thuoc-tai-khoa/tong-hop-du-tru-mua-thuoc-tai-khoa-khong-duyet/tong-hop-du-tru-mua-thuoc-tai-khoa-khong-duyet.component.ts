import { Component, OnInit, Optional, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import icClose from '@iconify/icons-ic/twotone-close';
@Component({
  selector: 'app-tong-hop-du-tru-mua-thuoc-tai-khoa-khong-duyet',
  templateUrl: './tong-hop-du-tru-mua-thuoc-tai-khoa-khong-duyet.component.html',
  styleUrls: ['./tong-hop-du-tru-mua-thuoc-tai-khoa-khong-duyet.component.scss']
})
export class TongHopDuTruMuaThuocTaiKhoaKhongDuyetComponent implements OnInit {
  icClose = icClose;
  Title: any = null;
  Message: any = null;
  lyDo: string = null;
  ButtonYes: string = "Có";
  ButtonNo: string = "Không";
  constructor(
    private dialogRef: MatDialogRef<TongHopDuTruMuaThuocTaiKhoaKhongDuyetComponent>,
    @Optional() @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  ngOnInit() {
    this.Title = "Xác nhận";
    this.Message = "Bạn có muốn từ chối phiếu dự trù này không?";
  }

  close(result: any) {
    if (result == 'Yes') {
      this.dialogRef.close(this.lyDo);
    }
    else {
      this.dialogRef.close("");
    }
  }
}
