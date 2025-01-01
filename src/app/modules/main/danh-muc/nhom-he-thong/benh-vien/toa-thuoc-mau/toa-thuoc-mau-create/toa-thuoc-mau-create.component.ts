import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { stagger60ms } from 'src/@vex/animations/stagger.animation';
import { fadeInUp400ms } from 'src/@vex/animations/fade-in-up.animation';
import { ToaThuocMauSharedComponent } from '../toa-thuoc-mau-shared/toa-thuoc-mau-shared.component';
@Component({
  selector: 'app-toa-thuoc-mau-create',
  templateUrl: './toa-thuoc-mau-create.component.html',
  styleUrls: ['./toa-thuoc-mau-create.component.scss'],
  animations: [
    stagger60ms,
    fadeInUp400ms
  ]
})
export class ToaThuocMauCreateComponent implements OnInit {
  @ViewChild(ToaThuocMauSharedComponent, {static: true}) shared: any;
  constructor(private router: Router) { }

  ngOnInit() {
    
  }
  onCreated() {
    this.router.navigate(['danh-muc/nhom-he-thong/benh-vien/toa-thuoc-mau']);
  }

}
