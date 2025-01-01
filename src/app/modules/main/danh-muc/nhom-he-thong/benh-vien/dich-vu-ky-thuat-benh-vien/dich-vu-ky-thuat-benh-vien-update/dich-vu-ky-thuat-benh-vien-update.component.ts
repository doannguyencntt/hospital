import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { stagger60ms } from 'src/@vex/animations/stagger.animation';
import { fadeInUp400ms } from 'src/@vex/animations/fade-in-up.animation';
import { DichVuKyThuatBenhVienSharedComponent } from '../dich-vu-ky-thuat-benh-vien-shared/dich-vu-ky-thuat-benh-vien-shared.component';

@Component({
  selector: 'app-dich-vu-ky-thuat-benh-vien-update',
  templateUrl: './dich-vu-ky-thuat-benh-vien-update.component.html',
  styleUrls: ['./dich-vu-ky-thuat-benh-vien-update.component.scss'],
  animations: [
    stagger60ms,
    fadeInUp400ms
  ]
})
export class DichVuKyThuatBenhVienUpdateComponent implements OnInit {


  @ViewChild(DichVuKyThuatBenhVienSharedComponent, { static: true }) shared;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  onUpdated() {
    this.router.navigate(['/danh-muc/nhom-he-thong/benh-vien/dich-vu-ky-thuat-benh-vien']);
  }

}
