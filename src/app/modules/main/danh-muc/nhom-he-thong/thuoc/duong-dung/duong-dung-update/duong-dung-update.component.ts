import { Component, OnInit, ViewChild } from '@angular/core';
import { stagger60ms } from 'src/@vex/animations/stagger.animation';
import { fadeInUp400ms } from 'src/@vex/animations/fade-in-up.animation';
import { Router, ActivatedRoute } from '@angular/router';
import { DuongDungSharedComponent } from '../duong-dung-shared/duong-dung-shared.component';
@Component({
  selector: 'app-duong-dung-update',
  templateUrl: './duong-dung-update.component.html',
  styleUrls: ['./duong-dung-update.component.scss'],
  animations: [
    stagger60ms,
    fadeInUp400ms
  ]
})
export class DuongDungUpdateComponent implements OnInit {
  @ViewChild(DuongDungSharedComponent, {static: true}) shared;
  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
  }
  onUpdated() {
    this.router.navigate(['danh-muc/nhom-he-thong/thuoc/duong-dung']);
  }
}
