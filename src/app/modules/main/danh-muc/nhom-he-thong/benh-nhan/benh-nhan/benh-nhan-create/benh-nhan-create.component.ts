import { Component, OnInit, ViewChild } from '@angular/core';
import { fadeInUp400ms } from 'src/@vex/animations/fade-in-up.animation';
import { stagger60ms } from 'src/@vex/animations/stagger.animation';
import { BenhNhanSharedComponent } from '../benh-nhan-shared/benh-nhan-shared.component';
import { Router } from '@angular/router';
@Component({
  selector: 'app-benh-nhan-create',
  templateUrl: './benh-nhan-create.component.html',
  styleUrls: ['./benh-nhan-create.component.scss'],
  animations: [
    stagger60ms,
    fadeInUp400ms
  ]
})
export class BenhNhanCreateComponent implements OnInit {

  @ViewChild(BenhNhanSharedComponent, {static: true}) shared;
  constructor(private router : Router) { }

  ngOnInit() {
  }
  onCreated(){
    this.router.navigate(['/danh-muc/nhom-he-thong/benh-nhan/benh-nhan']);
  }

  
}
