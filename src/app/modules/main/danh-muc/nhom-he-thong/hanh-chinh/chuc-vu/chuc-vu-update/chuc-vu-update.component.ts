import { Component, OnInit, ViewChild } from '@angular/core';
import { stagger60ms } from 'src/@vex/animations/stagger.animation';
import { fadeInUp400ms } from 'src/@vex/animations/fade-in-up.animation';
import { Router, ActivatedRoute } from '@angular/router';
import { ChucVuSharedComponent } from '../chuc-vu-shared/chuc-vu-shared.component';

@Component({
  selector: 'app-chuc-vu-update',
  templateUrl: './chuc-vu-update.component.html',
  styleUrls: ['./chuc-vu-update.component.scss'],
  animations: [
    stagger60ms,
    fadeInUp400ms
  ]
})
export class ChucVuUpdateComponent implements OnInit {
  @ViewChild(ChucVuSharedComponent, { static: true }) shared;
  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
  }
  onUpdated() {
    this.router.navigate(['danh-muc/nhom-he-thong/hanh-chinh/chuc-vu']);
  }
}
