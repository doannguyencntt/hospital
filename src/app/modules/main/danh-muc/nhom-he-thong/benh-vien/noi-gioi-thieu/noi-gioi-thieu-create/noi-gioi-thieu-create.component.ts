import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { stagger60ms } from 'src/@vex/animations/stagger.animation';
import { fadeInUp400ms } from 'src/@vex/animations/fade-in-up.animation';
import { NoiGioiThieuSharedComponent } from '../noi-gioi-thieu-shared/noi-gioi-thieu-shared.component';
@Component({
  selector: 'app-noi-gioi-thieu-create',
  templateUrl: './noi-gioi-thieu-create.component.html',
  styleUrls: ['./noi-gioi-thieu-create.component.scss'],
  animations: [
    stagger60ms,
    fadeInUp400ms
  ]
})
export class NoiGioiThieuCreateComponent implements OnInit {
  @ViewChild(NoiGioiThieuSharedComponent, { static: true }) shared: any;
  constructor(private router: Router) { }

  ngOnInit() {
  }
  onCreated() {
    this.router.navigate(['danh-muc/nhom-he-thong/benh-vien/noi-gioi-thieu']);
  }

}
