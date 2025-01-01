import { Component, OnInit, ViewChild } from '@angular/core';
import { fadeInUp400ms } from 'src/@vex/animations/fade-in-up.animation';
import { stagger60ms } from 'src/@vex/animations/stagger.animation';
import { Router } from '@angular/router';
import { DichVuKyThuatSharedComponent } from '../dich-vu-ky-thuat-shared/dich-vu-ky-thuat-shared.component';

@Component({
  selector: 'app-dich-vu-ky-thuat-create',
  templateUrl: './dich-vu-ky-thuat-create.component.html',
  styleUrls: ['./dich-vu-ky-thuat-create.component.scss'],
  animations: [
    stagger60ms,
    fadeInUp400ms
  ]
})
export class DichVuKyThuatCreateComponent implements OnInit {
  @ViewChild(DichVuKyThuatSharedComponent, { static: true }) shared: any;
  constructor(private router: Router) { }

  ngOnInit() {
  }
  onCreated() {
    this.router.navigate(['danh-muc/nhom-he-thong/bao-hiem-y-te/dich-vu-ky-thuat']);
  }

}
