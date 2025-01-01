import { Component, OnInit, ViewChild } from '@angular/core';
import { stagger60ms } from 'src/@vex/animations/stagger.animation';
import { fadeInUp400ms } from 'src/@vex/animations/fade-in-up.animation';
import { Router, ActivatedRoute } from '@angular/router';
import { AdrPhanUngCoHaiCuaThuocSharedComponent } from '../adr-phan-ung-co-hai-cua-thuoc-shared/adr-phan-ung-co-hai-cua-thuoc-shared.component';

@Component({
  selector: 'app-adr-phan-ung-co-hai-cua-thuoc-update',
  templateUrl: './adr-phan-ung-co-hai-cua-thuoc-update.component.html',
  styleUrls: ['./adr-phan-ung-co-hai-cua-thuoc-update.component.scss'],
  animations: [
    stagger60ms,
    fadeInUp400ms
  ]
})
export class AdrPhanUngCoHaiCuaThuocUpdateComponent implements OnInit {
  @ViewChild(AdrPhanUngCoHaiCuaThuocSharedComponent, { static: true }) shared;
  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
  }
  onUpdated() {
    this.router.navigate(['danh-muc/nhom-he-thong/thuoc/adr-phan-ung-co-hai-cua-thuoc']);
  }
}
