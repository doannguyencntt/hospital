import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { stagger60ms } from 'src/@vex/animations/stagger.animation';
import { fadeInUp400ms } from 'src/@vex/animations/fade-in-up.animation';
import { DinhMucDuocPhamTonKhoSharedComponent } from '../dinh-muc-duoc-pham-ton-kho-shared/dinh-muc-duoc-pham-ton-kho-shared.component';

@Component({
  selector: 'app-dinh-muc-duoc-pham-ton-kho-create',
  templateUrl: './dinh-muc-duoc-pham-ton-kho-create.component.html',
  styleUrls: ['./dinh-muc-duoc-pham-ton-kho-create.component.scss'],
  animations: [
    stagger60ms,
    fadeInUp400ms
  ]

})
export class DinhMucDuocPhamTonKhoCreateComponent implements OnInit {

  @ViewChild(DinhMucDuocPhamTonKhoSharedComponent, { static: true }) shared;
  constructor(private router: Router) { }
  ngOnInit() {

  }
  onCreated() {
    this.router.navigate(['danh-muc/nhom-he-thong/kho/dinh-muc-duoc-pham-ton-kho']);
  }
}
