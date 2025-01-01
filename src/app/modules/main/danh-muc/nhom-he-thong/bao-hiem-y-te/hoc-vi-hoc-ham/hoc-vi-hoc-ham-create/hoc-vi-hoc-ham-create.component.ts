
import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { fadeInUp400ms } from 'src/@vex/animations/fade-in-up.animation';
import { stagger60ms } from 'src/@vex/animations/stagger.animation';
import { HocViHocHamShareComponent } from '../hoc-vi-hoc-ham-share/hoc-vi-hoc-ham-share.component';

@Component({
  selector: 'app-hoc-vi-hoc-ham-create',
  templateUrl: './hoc-vi-hoc-ham-create.component.html',
  styleUrls: ['./hoc-vi-hoc-ham-create.component.scss'], 
  animations: [
    stagger60ms,
    fadeInUp400ms
  ]
})
export class HocViHocHamCreateComponent implements OnInit {

  @ViewChild(HocViHocHamShareComponent, {static: true}) shared;
  constructor(private router: Router) { }

  ngOnInit() {
  }
  onCreated(){ this.router.navigate(['/danh-muc/nhom-he-thong/bao-hiem-y-te/hoc-vi-hoc-ham']);}

}
