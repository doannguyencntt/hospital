import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { stagger60ms } from 'src/@vex/animations/stagger.animation';
import { fadeInUp400ms } from 'src/@vex/animations/fade-in-up.animation';
import { IcdSharedComponent } from '../icd-shared/icd-shared.component';
@Component({
  selector: 'app-icd-create',
  templateUrl: './icd-create.component.html',
  styleUrls: ['./icd-create.component.scss'],
  animations: [
    stagger60ms,
    fadeInUp400ms
  ]
})
export class IcdCreateComponent implements OnInit {
  @ViewChild(IcdSharedComponent, { static: true }) shared: any;
  constructor(private router: Router) { }

  ngOnInit() {
  }
  onCreated() {
    this.router.navigate(['danh-muc/nhom-he-thong/benh-vien/icd']);
  }
}
