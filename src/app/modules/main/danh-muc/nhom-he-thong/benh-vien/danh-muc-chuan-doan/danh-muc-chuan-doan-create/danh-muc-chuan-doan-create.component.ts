import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { stagger60ms } from 'src/@vex/animations/stagger.animation';
import { fadeInUp400ms } from 'src/@vex/animations/fade-in-up.animation';
import { DanhMucChuanDoanSharedComponent } from '../danh-muc-chuan-doan-shared/danh-muc-chuan-doan-shared.component';
@Component({
  selector: 'app-danh-muc-chuan-doan-create',
  templateUrl: './danh-muc-chuan-doan-create.component.html',
  styleUrls: ['./danh-muc-chuan-doan-create.component.scss'],
  animations: [
    stagger60ms,
    fadeInUp400ms
  ]
})
export class DanhMucChuanDoanCreateComponent implements OnInit {
  @ViewChild(DanhMucChuanDoanSharedComponent, { static: true }) shared;
  constructor(private router: Router) { }

  ngOnInit() {
  }
  onCreated() {
    this.router.navigate(['danh-muc/nhom-he-thong/benh-vien/danh-muc-chuan-doan']);
  }

}
