import { Component, OnInit, ViewChild } from '@angular/core';
import { stagger60ms } from 'src/@vex/animations/stagger.animation';
import { fadeInUp400ms } from 'src/@vex/animations/fade-in-up.animation';
import { Router, ActivatedRoute } from '@angular/router';
import { IcdSharedComponent } from '../icd-shared/icd-shared.component';
@Component({
  selector: 'app-icd-update',
  templateUrl: './icd-update.component.html',
  styleUrls: ['./icd-update.component.scss'],
  animations: [
    stagger60ms,
    fadeInUp400ms
  ]
})
export class IcdUpdateComponent implements OnInit {
  @ViewChild(IcdSharedComponent, { static: true }) shared: any;
  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
  }
  onUpdated() {
    this.router.navigate(['danh-muc/nhom-he-thong/benh-vien/icd']);
  }

}
