
import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { fadeInUp400ms } from 'src/@vex/animations/fade-in-up.animation';
import { stagger60ms } from 'src/@vex/animations/stagger.animation';
import { QuanLyTenBenhVienShareComponent } from '../quan-ly-ten-benh-vien-share/quan-ly-ten-benh-vien-share.component';

@Component({
  selector: 'app-quan-ly-ten-benh-vien-create',
  templateUrl: './quan-ly-ten-benh-vien-create.component.html',
  styleUrls: ['./quan-ly-ten-benh-vien-create.component.scss'],
  animations: [
    stagger60ms,
    fadeInUp400ms
  ]
})
export class QuanLyTenBenhVienCreateComponent implements OnInit {

  @ViewChild(QuanLyTenBenhVienShareComponent, {static: true}) shared;
  constructor(private router: Router) { }

  ngOnInit() {
  }
  onCreated(){ this.router.navigate(['/danh-muc/nhom-he-thong/benh-vien/ten-benh-vien']);}

}
