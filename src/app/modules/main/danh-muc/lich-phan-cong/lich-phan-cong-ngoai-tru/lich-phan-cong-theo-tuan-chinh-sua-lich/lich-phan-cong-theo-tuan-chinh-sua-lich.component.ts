import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { fadeInUp400ms } from 'src/@vex/animations/fade-in-up.animation';
import { stagger60ms } from 'src/@vex/animations/stagger.animation';
import { LichPhanCongNgoaiTruTheoTuanComponent } from '../lich-phan-cong-ngoai-tru-theo-tuan/lich-phan-cong-ngoai-tru-theo-tuan.component';

@Component({
  selector: 'app-lich-phan-cong-theo-tuan-chinh-sua-lich',
  templateUrl: './lich-phan-cong-theo-tuan-chinh-sua-lich.component.html',
  styleUrls: ['./lich-phan-cong-theo-tuan-chinh-sua-lich.component.scss'],
  animations: [
    stagger60ms,
    fadeInUp400ms
  ]
})
export class LichPhanCongTheoTuanChinhSuaLichComponent implements OnInit {

  @ViewChild(LichPhanCongNgoaiTruTheoTuanComponent, {static: true}) shared;
  
  constructor(private router: Router) { }

  ngOnInit() {
  }

  // onResize(event) {
  //   console.log("event=",event)
  //   event.target.innerWidth;
  // }

}
