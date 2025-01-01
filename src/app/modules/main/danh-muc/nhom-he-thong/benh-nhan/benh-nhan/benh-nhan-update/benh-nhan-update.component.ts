import { Component, OnInit, ViewChild } from '@angular/core';
import { stagger60ms } from 'src/@vex/animations/stagger.animation';
import { fadeInUp400ms } from 'src/@vex/animations/fade-in-up.animation';
import { Router } from '@angular/router';
import { BenhNhanSharedComponent } from '../benh-nhan-shared/benh-nhan-shared.component';
@Component({
  selector: 'app-benh-nhan-update',
  templateUrl: './benh-nhan-update.component.html',
  styleUrls: ['./benh-nhan-update.component.scss'],
  animations: [
    stagger60ms,
    fadeInUp400ms
  ]
})
export class BenhNhanUpdateComponent implements OnInit {

  @ViewChild(BenhNhanSharedComponent, {static: true}) shared;
  constructor(private router: Router) { }

  ngOnInit() {
  }

  onUpdated() {
    this.router.navigate(['/danh-muc/nhom-he-thong/benh-nhan/benh-nhan']);
}
}
