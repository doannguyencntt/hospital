import { Component, OnInit, ViewChild } from '@angular/core';
import { stagger60ms } from 'src/@vex/animations/stagger.animation';
import { fadeInUp400ms } from 'src/@vex/animations/fade-in-up.animation';
import { DuongDungSharedComponent } from '../duong-dung-shared/duong-dung-shared.component';
import { Router } from '@angular/router';
@Component({
  selector: 'app-duong-dung-create',
  templateUrl: './duong-dung-create.component.html',
  styleUrls: ['./duong-dung-create.component.scss'],
  animations: [
    stagger60ms,
    fadeInUp400ms
  ]
  
})
export class DuongDungCreateComponent implements OnInit {
  @ViewChild(DuongDungSharedComponent, {static: true}) shared;
  constructor(private router: Router) { }

  ngOnInit() {
  }
  onCreated() {
    this.router.navigate(['danh-muc/nhom-he-thong/thuoc/duong-dung']);
  }
}
