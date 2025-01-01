import { Component, OnInit, ViewChild } from '@angular/core';
import { stagger60ms } from 'src/@vex/animations/stagger.animation';
import { fadeInUp400ms } from 'src/@vex/animations/fade-in-up.animation';
import { Router, ActivatedRoute } from '@angular/router';
import { NoiGioiThieuSharedComponent } from '../noi-gioi-thieu-shared/noi-gioi-thieu-shared.component';
@Component({
  selector: 'app-noi-gioi-thieu-update',
  templateUrl: './noi-gioi-thieu-update.component.html',
  styleUrls: ['./noi-gioi-thieu-update.component.scss'],
  animations: [
    stagger60ms,
    fadeInUp400ms
  ]
})
export class NoiGioiThieuUpdateComponent implements OnInit {
  @ViewChild(NoiGioiThieuSharedComponent, { static: true }) shared: any;
  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
  }
  onUpdated() {
    this.router.navigate(['danh-muc/nhom-he-thong/benh-vien/noi-gioi-thieu']);
  }
}
