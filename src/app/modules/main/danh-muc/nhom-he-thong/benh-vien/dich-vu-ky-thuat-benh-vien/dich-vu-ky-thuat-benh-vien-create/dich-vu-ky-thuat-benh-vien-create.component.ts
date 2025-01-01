import { Component, OnInit, ViewChild } from '@angular/core';
import { stagger60ms } from 'src/@vex/animations/stagger.animation';
import { fadeInUp400ms } from 'src/@vex/animations/fade-in-up.animation';
import { DichVuKyThuatBenhVienSharedComponent } from '../dich-vu-ky-thuat-benh-vien-shared/dich-vu-ky-thuat-benh-vien-shared.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dich-vu-ky-thuat-benh-vien-create',
  templateUrl: './dich-vu-ky-thuat-benh-vien-create.component.html',
  styleUrls: ['./dich-vu-ky-thuat-benh-vien-create.component.scss'],
  animations: [
    stagger60ms,
    fadeInUp400ms
  ]
})
export class DichVuKyThuatBenhVienCreateComponent implements OnInit {


  @ViewChild(DichVuKyThuatBenhVienSharedComponent, { static: true }) shared;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  onCreated(){ 
    this.router.navigate(['/danh-muc/nhom-he-thong/benh-vien/dich-vu-ky-thuat-benh-vien']);

  }

}
