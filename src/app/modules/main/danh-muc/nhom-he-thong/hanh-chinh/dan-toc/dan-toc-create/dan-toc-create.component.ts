import { Component, OnInit, ViewChild } from '@angular/core';
import { fadeInUp400ms } from 'src/@vex/animations/fade-in-up.animation';
import { stagger60ms } from 'src/@vex/animations/stagger.animation';
import { DanTocSharedComponent } from '../dan-toc-shared/dan-toc-shared.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dan-toc-create',
  templateUrl: './dan-toc-create.component.html',
  styleUrls: ['./dan-toc-create.component.scss'],
  animations: [
    stagger60ms,
    fadeInUp400ms
  ]
})
export class DanTocCreateComponent implements OnInit {

  @ViewChild(DanTocSharedComponent, {static: true}) shared;
  constructor(private router: Router) { }

  ngOnInit() {
  }
  onCreated(){
    this.router.navigate(['danh-muc/nhom-he-thong/hanh-chinh/dan-toc']);
  }

}
