import { Component, OnInit, ViewChild } from '@angular/core';
import { stagger60ms } from 'src/@vex/animations/stagger.animation';
import { fadeInUp400ms } from 'src/@vex/animations/fade-in-up.animation';
import { Router } from '@angular/router';
import { ChiSoXetNghiemShareComponent } from '../chi-so-xet-nghiem-share/chi-so-xet-nghiem-share.component';

@Component({
  selector: 'app-chi-so-xet-nghiem-update',
  templateUrl: './chi-so-xet-nghiem-update.component.html',
  styleUrls: ['./chi-so-xet-nghiem-update.component.scss'],
  animations: [
    stagger60ms,
    fadeInUp400ms
  ]
})
export class ChiSoXetNghiemUpdateComponent implements OnInit {
  @ViewChild(ChiSoXetNghiemShareComponent, {static: true}) shared;
  constructor(private router: Router) { }
  ngOnInit() {}
  onUpdated(){ this.router.navigate(['/danh-muc/nhom-he-thong/bao-hiem-y-te/chi-so-xet-nghiem']);}
}
