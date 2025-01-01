import { Component, OnInit, ViewChild } from '@angular/core';
import { stagger60ms } from 'src/@vex/animations/stagger.animation';
import { fadeInUp400ms } from 'src/@vex/animations/fade-in-up.animation';
import { Router, ActivatedRoute } from '@angular/router';
import { DinhMucDuocPhamTonKhoSharedComponent } from '../dinh-muc-duoc-pham-ton-kho-shared/dinh-muc-duoc-pham-ton-kho-shared.component';

@Component({
  selector: 'app-dinh-muc-duoc-pham-ton-kho-update',
  templateUrl: './dinh-muc-duoc-pham-ton-kho-update.component.html',
  styleUrls: ['./dinh-muc-duoc-pham-ton-kho-update.component.scss'],
  animations: [
    stagger60ms,
    fadeInUp400ms
  ]
})
export class DinhMucDuocPhamTonKhoUpdateComponent implements OnInit {
  @ViewChild(DinhMucDuocPhamTonKhoSharedComponent, { static: true }) shared;

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
  }
  onUpdated() {
    this.router.navigate(['danh-muc/nhom-he-thong/kho/dinh-muc-duoc-pham-ton-kho']);
  }

}
