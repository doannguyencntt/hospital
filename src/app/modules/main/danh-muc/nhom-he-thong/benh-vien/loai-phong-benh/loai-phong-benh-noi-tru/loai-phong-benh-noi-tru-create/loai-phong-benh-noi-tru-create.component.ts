import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

import { LoaiPhongBenhNoiTruSharedComponent } from '../loai-phong-benh-noi-tru-shared/loai-phong-benh-noi-tru-shared.component';

@Component({
  selector: 'app-loai-phong-benh-noi-tru-create',
  templateUrl: './loai-phong-benh-noi-tru-create.component.html',
  styleUrls: ['./loai-phong-benh-noi-tru-create.component.scss']
})
export class LoaiPhongBenhNoiTruCreateComponent implements OnInit {
  @ViewChild(LoaiPhongBenhNoiTruSharedComponent, { static: true }) shared;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  onCreated() {
    this.router.navigate(['/danh-muc/nhom-he-thong/benh-vien/loai-phong-benh/loai-phong-benh-noi-tru']);
  }
}
