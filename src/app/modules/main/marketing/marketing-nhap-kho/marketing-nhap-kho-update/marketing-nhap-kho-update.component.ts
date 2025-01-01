import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MarketingNhapKhoSharedComponent } from '../marketing-nhap-kho-shared/marketing-nhap-kho-shared.component';
import { stagger60ms } from 'src/@vex/animations/stagger.animation';
import { fadeInUp400ms } from 'src/@vex/animations/fade-in-up.animation';
@Component({
  selector: 'app-marketing-nhap-kho-update',
  templateUrl: './marketing-nhap-kho-update.component.html',
  styleUrls: ['./marketing-nhap-kho-update.component.scss'],
  animations: [
    stagger60ms,
    fadeInUp400ms
  ]
})
export class MarketingNhapKhoUpdateComponent implements OnInit {
  @ViewChild(MarketingNhapKhoSharedComponent, { static: true }) shared;
  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
  }
  onUpdated() {
    this.router.navigate(['/marketing/nhap-kho-marketing']);
  }
}
