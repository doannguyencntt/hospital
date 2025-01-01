import { Component, OnInit, ViewChild } from '@angular/core';
import { stagger60ms } from 'src/@vex/animations/stagger.animation';
import { fadeInUp400ms } from 'src/@vex/animations/fade-in-up.animation';
import { Router, ActivatedRoute } from '@angular/router';
import { DanhMucChuanDoanSharedComponent } from '../danh-muc-chuan-doan-shared/danh-muc-chuan-doan-shared.component';
@Component({
  selector: 'app-danh-muc-chuan-doan-update',
  templateUrl: './danh-muc-chuan-doan-update.component.html',
  styleUrls: ['./danh-muc-chuan-doan-update.component.scss'],
  animations: [
    stagger60ms,
    fadeInUp400ms
  ]
})
export class DanhMucChuanDoanUpdateComponent implements OnInit {
  @ViewChild(DanhMucChuanDoanSharedComponent, { static: true }) shared;
  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
  }
  onUpdated() {
    this.router.navigate(['danh-muc/nhom-he-thong/benh-vien/danh-muc-chuan-doan']);
  }
}
