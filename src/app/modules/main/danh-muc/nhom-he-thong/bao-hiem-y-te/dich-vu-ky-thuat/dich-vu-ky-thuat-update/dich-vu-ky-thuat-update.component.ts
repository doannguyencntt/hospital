import { Component, OnInit, ViewChild } from '@angular/core';
import { stagger60ms } from 'src/@vex/animations/stagger.animation';
import { fadeInUp400ms } from 'src/@vex/animations/fade-in-up.animation';
import { Router, ActivatedRoute } from '@angular/router';
import { DichVuKyThuatSharedComponent } from '../dich-vu-ky-thuat-shared/dich-vu-ky-thuat-shared.component';
@Component({
  selector: 'app-dich-vu-ky-thuat-update',
  templateUrl: './dich-vu-ky-thuat-update.component.html',
  styleUrls: ['./dich-vu-ky-thuat-update.component.scss'],
  animations: [
    stagger60ms,
    fadeInUp400ms
  ]
})
export class DichVuKyThuatUpdateComponent implements OnInit {
  @ViewChild(DichVuKyThuatSharedComponent, { static: true }) shared: any;
  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
  }
  onUpdated() {
    this.router.navigate(['danh-muc/nhom-he-thong/bao-hiem-y-te/dich-vu-ky-thuat']);
  }

}
