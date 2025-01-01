import { Component, OnInit, ViewChild } from '@angular/core';
import { stagger60ms } from 'src/@vex/animations/stagger.animation';
import { fadeInUp400ms } from 'src/@vex/animations/fade-in-up.animation';
import { Router, ActivatedRoute } from '@angular/router';
import { ToaThuocMauSharedComponent } from '../toa-thuoc-mau-shared/toa-thuoc-mau-shared.component';
@Component({
  selector: 'app-toa-thuoc-mau-update',
  templateUrl: './toa-thuoc-mau-update.component.html',
  styleUrls: ['./toa-thuoc-mau-update.component.scss'],
  animations: [
    stagger60ms,
    fadeInUp400ms
  ]
})
export class ToaThuocMauUpdateComponent implements OnInit {
  @ViewChild(ToaThuocMauSharedComponent, { static: true }) shared: any;
  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
  }
  onUpdated() {
    this.router.navigate(['danh-muc/nhom-he-thong/benh-vien/toa-thuoc-mau']);
  }
}
