import { Component, OnInit, ViewChild } from '@angular/core';
import { ChuanDoanSharedComponent } from '../chuan-doan-shared/chuan-doan-shared.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-chuan-doan-update',
  templateUrl: './chuan-doan-update.component.html',
  styleUrls: ['./chuan-doan-update.component.scss']
})
export class ChuanDoanUpdateComponent implements OnInit {

  
  @ViewChild(ChuanDoanSharedComponent, { static: true }) shared;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  onUpdated() {
    this.router.navigate(['/danh-muc/nhom-he-thong/benh-vien/chuan-doan']);
  }
}
