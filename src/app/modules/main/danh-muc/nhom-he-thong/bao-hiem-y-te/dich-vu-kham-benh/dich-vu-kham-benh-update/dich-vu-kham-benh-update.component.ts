import { Component, OnInit, ViewChild } from '@angular/core';
import { stagger60ms } from 'src/@vex/animations/stagger.animation';
import { fadeInUp400ms } from 'src/@vex/animations/fade-in-up.animation';
import { Router, ActivatedRoute } from '@angular/router';
import { DichVuKhamBenhSharedComponent } from '../dich-vu-kham-benh-shared/dich-vu-kham-benh-shared.component';

@Component({
  selector: 'app-dich-vu-kham-benh-update',
  templateUrl: './dich-vu-kham-benh-update.component.html',
  styleUrls: ['./dich-vu-kham-benh-update.component.scss'],
  animations: [
    stagger60ms,
    fadeInUp400ms
  ]
})
export class DichVuKhamBenhUpdateComponent implements OnInit {
  @ViewChild(DichVuKhamBenhSharedComponent, { static: true }) shared;
  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
  }
  onUpdated() {
    this.router.navigate(['danh-muc/nhom-he-thong/bao-hiem-y-te/dich-vu-kham-benh']);
  }
}
