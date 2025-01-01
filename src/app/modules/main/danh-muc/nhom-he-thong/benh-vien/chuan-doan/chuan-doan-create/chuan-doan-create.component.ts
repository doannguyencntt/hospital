import { Component, OnInit, ViewChild } from '@angular/core';
import { ChuanDoanSharedComponent } from '../chuan-doan-shared/chuan-doan-shared.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-chuan-doan-create',
  templateUrl: './chuan-doan-create.component.html',
  styleUrls: ['./chuan-doan-create.component.scss']
})
export class ChuanDoanCreateComponent implements OnInit {

  constructor(private router: Router) { }
  validationErrors: any;
  @ViewChild(ChuanDoanSharedComponent, { static: true }) shared;
  ngOnInit() {
  }
  onCreated(){ 
    this.router.navigate(['/danh-muc/nhom-he-thong/benh-vien/chuan-doan']);

  }

}
