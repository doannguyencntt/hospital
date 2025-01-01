import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { VanBangChuyenMonShareComponent } from '../van-bang-chuyen-mon-share/van-bang-chuyen-mon-share.component';



@Component({
  selector: 'app-van-bang-chuyen-mon-update',
  templateUrl: './van-bang-chuyen-mon-update.component.html',
  styleUrls: ['./van-bang-chuyen-mon-update.component.scss']
})
export class VanBangChuyenMonUpdateComponent implements OnInit {

  @ViewChild(VanBangChuyenMonShareComponent, { static: true }) shared;

  constructor(private router: Router) { }

  ngOnInit() {
  }
  
  onUpdated() {
    this.router.navigate(['/danh-muc/nhom-he-thong/hanh-chinh/van-bang-chuyen-mon']);
  }


}
