import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { stagger60ms } from 'src/@vex/animations/stagger.animation';
import { fadeInUp400ms } from 'src/@vex/animations/fade-in-up.animation';
import { NguoiGioiThieuSharedComponent } from '../nguoi-gioi-thieu-shared/nguoi-gioi-thieu-shared.component';
@Component({
  selector: 'app-nguoi-gioi-thieu-create',
  templateUrl: './nguoi-gioi-thieu-create.component.html',
  styleUrls: ['./nguoi-gioi-thieu-create.component.scss'],
  animations: [
    stagger60ms,
    fadeInUp400ms
  ]
})
export class NguoiGioiThieuCreateComponent implements OnInit {
  @ViewChild(NguoiGioiThieuSharedComponent, {static: true}) shared: any;
  constructor(private router: Router) { }

  ngOnInit() {
  }
  onCreated() {
    this.router.navigate(['danh-muc/nhom-he-thong/benh-vien/nguoi-gioi-thieu']);
  }
}

