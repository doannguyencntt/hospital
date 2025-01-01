import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DanhMucGiuongBenhSharedComponent } from '../danh-muc-giuong-benh-shared/danh-muc-giuong-benh-shared.component';

@Component({
  selector: 'app-danh-muc-giuong-benh-create',
  templateUrl: './danh-muc-giuong-benh-create.component.html',
  styleUrls: ['./danh-muc-giuong-benh-create.component.scss']
})
export class DanhMucGiuongBenhCreateComponent implements OnInit {

  constructor(private router: Router, private route: ActivatedRoute) { }

  @ViewChild(DanhMucGiuongBenhSharedComponent, { static: true }) shared;

  ngOnInit() {
  }

  onCreated() {
    this.router.navigate(['danh-muc/nhom-giuong-benh/danh-muc-giuong-benh/']);
  }

}
