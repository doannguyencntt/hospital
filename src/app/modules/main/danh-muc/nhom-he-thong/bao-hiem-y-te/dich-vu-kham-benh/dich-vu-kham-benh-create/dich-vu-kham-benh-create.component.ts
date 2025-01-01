import { Component, OnInit, ViewChild } from '@angular/core';
import { stagger60ms } from 'src/@vex/animations/stagger.animation';
import { fadeInUp400ms } from 'src/@vex/animations/fade-in-up.animation';
import { DichVuKhamBenhSharedComponent } from '../dich-vu-kham-benh-shared/dich-vu-kham-benh-shared.component';
import { Router } from '@angular/router';
@Component({
  selector: 'app-dich-vu-kham-benh-create',
  templateUrl: './dich-vu-kham-benh-create.component.html',
  styleUrls: ['./dich-vu-kham-benh-create.component.scss'],
  animations: [
    stagger60ms,
    fadeInUp400ms
  ]
})
export class DichVuKhamBenhCreateComponent implements OnInit {
  @ViewChild(DichVuKhamBenhSharedComponent, {static: true}) shared;
  constructor(private router: Router) { }

  ngOnInit() {
  }
  onCreated() {
    this.router.navigate(['danh-muc/nhom-he-thong/bao-hiem-y-te/dich-vu-kham-benh']);
  }
}
