import { Component, OnInit, Inject } from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';
import { TiepNhanBenhNhanViewModel } from '../tiep-nhan-benh-nhan.model';
import { MatDialog } from '@angular/material';
import icClose from '@iconify/icons-ic/twotone-close';


@Component({
  selector: 'app-tiep-nhan-benh-nhan-popup',
  templateUrl: './tiep-nhan-benh-nhan-popup.component.html',
  styleUrls: ['./tiep-nhan-benh-nhan-popup.component.scss']
})
export class TiepNhanBenhNhanPopupComponent implements OnInit {

  icClose=icClose;
  constructor(@Inject(MAT_DIALOG_DATA) public data: TiepNhanBenhNhanViewModel
  , private dialog: MatDialog) { }

  ngOnInit() {
    //console.log(this.data);
  }

  close(){
    this.dialog.closeAll();
  }
}
