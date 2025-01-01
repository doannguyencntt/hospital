import { Component, OnInit, ViewChild } from '@angular/core';
import { AdrPhanUngCoHaiCuaThuocSharedComponent } from '../adr-phan-ung-co-hai-cua-thuoc-shared/adr-phan-ung-co-hai-cua-thuoc-shared.component';
import { Router } from '@angular/router';
import { stagger60ms } from 'src/@vex/animations/stagger.animation';
import { fadeInUp400ms } from 'src/@vex/animations/fade-in-up.animation';
@Component({
  selector: 'app-adr-phan-ung-co-hai-cua-thuoc-create',
  templateUrl: './adr-phan-ung-co-hai-cua-thuoc-create.component.html',
  styleUrls: ['./adr-phan-ung-co-hai-cua-thuoc-create.component.scss'],
  animations: [
    stagger60ms,
    fadeInUp400ms
  ]
})
export class AdrPhanUngCoHaiCuaThuocCreateComponent implements OnInit {
  @ViewChild(AdrPhanUngCoHaiCuaThuocSharedComponent, {static: true}) shared;

  constructor(private router: Router) { }

  ngOnInit() {
  }
  onCreated() {
    this.router.navigate(['danh-muc/nhom-he-thong/thuoc/adr-phan-ung-co-hai-cua-thuoc']);
  }

}
