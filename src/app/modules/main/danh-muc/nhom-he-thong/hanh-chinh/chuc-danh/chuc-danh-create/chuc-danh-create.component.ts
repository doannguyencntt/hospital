import { Component, OnInit, ViewChild } from '@angular/core';
import { fadeInUp400ms } from 'src/@vex/animations/fade-in-up.animation';
import { stagger60ms } from 'src/@vex/animations/stagger.animation';
import { ChucDanhSharedComponent } from '../chuc-danh-shared/chuc-danh-shared.component';
import { Router } from '@angular/router';
@Component({
  selector: 'app-chuc-danh-create',
  templateUrl: './chuc-danh-create.component.html',
  styleUrls: ['./chuc-danh-create.component.scss'],
  animations: [
    stagger60ms,
    fadeInUp400ms
  ]

})
export class ChucDanhCreateComponent implements OnInit {
  @ViewChild(ChucDanhSharedComponent, {static: true}) shared;
  constructor(private router: Router) { }

  ngOnInit() {
  }
  onCreated(){
    this.router.navigate(['danh-muc/nhom-he-thong/hanh-chinh/chuc-danh']);
  }

}
