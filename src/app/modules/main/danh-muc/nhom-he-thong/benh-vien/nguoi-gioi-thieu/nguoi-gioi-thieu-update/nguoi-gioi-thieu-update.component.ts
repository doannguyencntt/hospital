import { Component, OnInit, ViewChild } from '@angular/core';
import { stagger60ms } from 'src/@vex/animations/stagger.animation';
import { fadeInUp400ms } from 'src/@vex/animations/fade-in-up.animation';
import { Router, ActivatedRoute } from '@angular/router';
import { NguoiGioiThieuSharedComponent } from '../nguoi-gioi-thieu-shared/nguoi-gioi-thieu-shared.component';
@Component({
  selector: 'app-nguoi-gioi-thieu-update',
  templateUrl: './nguoi-gioi-thieu-update.component.html',
  styleUrls: ['./nguoi-gioi-thieu-update.component.scss'],
  animations: [
    stagger60ms,
    fadeInUp400ms
  ]
})
export class NguoiGioiThieuUpdateComponent implements OnInit {
  @ViewChild(NguoiGioiThieuSharedComponent, { static: true }) shared: any;
  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
  }
  onUpdated() {
    this.router.navigate(['danh-muc/nhom-he-thong/benh-vien/nguoi-gioi-thieu']);
  }
}
