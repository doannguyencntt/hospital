import { Component, OnInit, ViewChild } from '@angular/core';
import { stagger60ms } from 'src/@vex/animations/stagger.animation';
import { fadeInUp400ms } from 'src/@vex/animations/fade-in-up.animation';
import { Router, ActivatedRoute } from '@angular/router';
import { DanTocSharedComponent } from '../dan-toc-shared/dan-toc-shared.component';

@Component({
  selector: 'app-dan-toc-update',
  templateUrl: './dan-toc-update.component.html',
  styleUrls: ['./dan-toc-update.component.scss'],
  animations: [
    stagger60ms,
    fadeInUp400ms
  ]
})
export class DanTocUpdateComponent implements OnInit {
  @ViewChild(DanTocSharedComponent, { static: true }) shared;
  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
  }
  onUpdated() {
    this.router.navigate(['danh-muc/nhom-he-thong/hanh-chinh/dan-toc']);
  }

}
