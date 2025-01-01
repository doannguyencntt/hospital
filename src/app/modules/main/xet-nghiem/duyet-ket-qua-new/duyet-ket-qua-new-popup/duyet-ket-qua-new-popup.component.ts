import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef, MatDialog } from '@angular/material';
import icClose from '@iconify/icons-ic/twotone-close';
import { ChonLoaiKetQuaXetNghiemNewPopupComponent } from '../chon-loai-ket-qua-xet-nghiem-new-popup/chon-loai-ket-qua-xet-nghiem-new-popup.component';
import { ListDataChildNew } from '../duyet-ket-qua-new.model';
@Component({
  selector: 'app-duyet-ket-qua-new-popup',
  templateUrl: './duyet-ket-qua-new-popup.component.html',
  styleUrls: ['./duyet-ket-qua-new-popup.component.scss']
})
export class DuyetKetQuaNewPopupComponent implements OnInit {
  icClose = icClose;
  lstData: ListDataChildNew[] = new Array<ListDataChildNew>();
  hasData = false;
  constructor(@Inject(MAT_DIALOG_DATA) public data: any
      , public dialogRef: MatDialogRef<DuyetKetQuaNewPopupComponent>,
      private dialog: MatDialog) {
      this.lstData = this.data.Model;
      if (this.lstData.some(x => x)) {
          this.hasData = true;
      }
  }

  ngOnInit() {
  }

  close() {
      this.dialogRef.close();
  }

  Khong() {
      this.dialogRef.close();
  }

  Co(option: string) {
    if (option === 'Print') {
        let dialogRef: any;
        let dichVuDuocCheck =this.data.DataChiTietXetNghiem.filter(z =>z.CheckBox)
        let objKetQuaChonIn = {
            LoaiIn:3,
            ListIn:  dichVuDuocCheck
        };
        this.dialogRef.close(objKetQuaChonIn);
    }
    else if (option === 'Yes') {
        this.dialogRef.close(option);
    }
    else
        this.dialogRef.close(null);
}
}
