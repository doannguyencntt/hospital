
import { Component, OnInit, ViewChild } from '@angular/core';
import { fadeInUp400ms } from 'src/@vex/animations/fade-in-up.animation';
import { stagger60ms } from 'src/@vex/animations/stagger.animation';
import { QuanLyTenBenhVienShareComponent } from '../quan-ly-ten-benh-vien-share/quan-ly-ten-benh-vien-share.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-quan-ly-ten-benh-vien-update',
  templateUrl: './quan-ly-ten-benh-vien-update.component.html',
  styleUrls: ['./quan-ly-ten-benh-vien-update.component.scss'],
  animations: [
    stagger60ms,
    fadeInUp400ms
  ]
})
export class QuanLyTenBenhVienUpdateComponent implements OnInit {

  @ViewChild(QuanLyTenBenhVienShareComponent, { static: true }) shared;

  constructor(private router: Router) { }

  ngOnInit() {
  }
  
  onUpdated() {
    this.router.navigate(['/danh-muc/nhom-he-thong/benh-vien/ten-benh-vien']);
  }
}
