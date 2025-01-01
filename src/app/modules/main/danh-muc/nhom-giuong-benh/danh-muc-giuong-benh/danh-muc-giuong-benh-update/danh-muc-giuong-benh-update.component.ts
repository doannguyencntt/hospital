import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/core/services/api.service';
import { DanhMucGiuongBenhSharedComponent } from '../danh-muc-giuong-benh-shared/danh-muc-giuong-benh-shared.component';

@Component({
  selector: 'app-danh-muc-giuong-benh-update',
  templateUrl: './danh-muc-giuong-benh-update.component.html',
  styleUrls: ['./danh-muc-giuong-benh-update.component.scss']
})
export class DanhMucGiuongBenhUpdateComponent implements OnInit {

  @ViewChild(DanhMucGiuongBenhSharedComponent, { static: true }) shared;
  constructor(private router: Router, private route: ActivatedRoute, private apiService: ApiService) { }

  ngOnInit() {
  }

  onUpdated() {
    this.router.navigate(['danh-muc/nhom-giuong-benh/danh-muc-giuong-benh/']);
  }

}
