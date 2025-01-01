import { Component, OnInit, Inject, ViewEncapsulation } from '@angular/core';
import icClose from '@iconify/icons-ic/twotone-close';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material';
import { ApiService } from 'src/app/core/services/api.service';

@Component({
  selector: 'app-lan-kham-hien-tai-hoan-thanh-kham-popup',
  templateUrl: './lan-kham-hien-tai-hoan-thanh-kham-popup.component.html',
  styleUrls: ['./lan-kham-hien-tai-hoan-thanh-kham-popup.component.scss']
})
export class LanKhamHienTaiHoanThanhKhamPopupComponent implements OnInit {

  icClose = icClose;
  yeuCauKhamBenhId: number;
  maTN: string;
  hoTen: string;
  quayLai: boolean = null;
  constructor(private dialog: MatDialog, @Inject(MAT_DIALOG_DATA) public data: any, 
    private apiService: ApiService) { }

  ngOnInit() {
     this.yeuCauKhamBenhId = this.data.YeuCauKhamBenhId;
     this.maTN = this.data.MaTN;
     this.hoTen = this.data.HoTen;
  }

  // xuLyQuayLaiYeuCauKhamBenhTruoc() {
  //   this.apiService.post("KhamBenh/CapNhatThongTinQuayLaiYeuCauKhamTruoc", this.data.YeuCauKhamBenh)
  //     .subscribe(resultData => {
  //       console.log('afasdfsdf', resultData);
  //     });
  // }

  close(){
    this.dialog.closeAll();
  }
}
