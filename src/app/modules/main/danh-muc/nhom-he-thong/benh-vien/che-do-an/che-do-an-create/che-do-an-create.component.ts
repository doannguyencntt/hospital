import { Component, OnInit, ViewChild } from '@angular/core';
import { fadeInUp400ms } from 'src/@vex/animations/fade-in-up.animation';
import { stagger60ms } from 'src/@vex/animations/stagger.animation';
import { CheDoAnSharedComponent } from '../che-do-an-shared/che-do-an-shared.component';
import { Router } from '@angular/router';
@Component({
  selector: 'app-che-do-an-create',
  templateUrl: './che-do-an-create.component.html',
  styleUrls: ['./che-do-an-create.component.scss'],
  animations: [
    stagger60ms,
    fadeInUp400ms
  ]

})
export class CheDoAnCreateComponent implements OnInit {
  @ViewChild(CheDoAnSharedComponent, {static: true}) shared;
  constructor(private router: Router) { }

  ngOnInit() {
  }
  onCreated(){
    this.router.navigate(['danh-muc/nhom-he-thong/benh-vien/che-do-an']);
  }

}
