import { Component, OnInit,Inject,Optional } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-lich-su-kham-benh-popup',
  templateUrl: './lich-su-kham-benh-popup.component.html',
  styleUrls: ['./lich-su-kham-benh-popup.component.scss']
})
export class LichSuKhamBenhPopupComponent implements OnInit {
yeuCauTiepNhanId : number = 0 ;
benhNhanId : number = 0 ;
  constructor(@Optional() @Inject(MAT_DIALOG_DATA) public data: any) {
  
   }


  ngOnInit() {
   this.benhNhanId = this.data.BenhNhanId;
   this.yeuCauTiepNhanId = this.data.YeuCauTiepNhanId;
  }

}
