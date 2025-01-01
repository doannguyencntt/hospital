import { Component, OnInit, ViewChild } from '@angular/core';
import { ChucVuSharedComponent } from '../chuc-vu-shared/chuc-vu-shared.component';
import { Router } from '@angular/router';
import { stagger60ms } from 'src/@vex/animations/stagger.animation';
import { fadeInUp400ms } from 'src/@vex/animations/fade-in-up.animation';
@Component({
  selector: 'app-chuc-vu-create',
  templateUrl: './chuc-vu-create.component.html',
  styleUrls: ['./chuc-vu-create.component.scss'],
  animations: [
    stagger60ms,
    fadeInUp400ms
  ]
})
export class ChucVuCreateComponent implements OnInit {
  @ViewChild(ChucVuSharedComponent, {static: true}) shared;
  constructor(private router: Router) { }

  ngOnInit() {
  }
  onCreated() {
    this.router.navigate(['danh-muc/nhom-he-thong/hanh-chinh/chuc-vu']);
  }
}
