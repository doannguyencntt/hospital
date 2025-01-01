import { Component, OnInit, ViewChild } from '@angular/core';
import { fadeInUp400ms } from 'src/@vex/animations/fade-in-up.animation';
import { stagger60ms } from 'src/@vex/animations/stagger.animation';
import { NoiDungMauPdfShareComponent } from '../noi-dung-mau-pdf-share/noi-dung-mau-pdf-share.component';
import { Router } from '@angular/router';


@Component({
  selector: 'app-noi-dung-mau-pdf-update',
  templateUrl: './noi-dung-mau-pdf-update.component.html',
  styleUrls: ['./noi-dung-mau-pdf-update.component.scss'],
  animations: [
    stagger60ms,
    fadeInUp400ms
  ]
})
export class NoiDungMauPdfUpdateComponent implements OnInit {
  @ViewChild(NoiDungMauPdfShareComponent, { static: true }) shared;

  constructor(private router: Router) { }

  ngOnInit() {
  }
  
  onUpdated() {
    this.router.navigate(['/danh-muc/nhom-he-thong/noi-dung-mau/noi-dung-mau-xuat-ra-pdf']);
  }
}
