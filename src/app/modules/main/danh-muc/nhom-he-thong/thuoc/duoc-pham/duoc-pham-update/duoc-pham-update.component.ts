import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { DuocPhamSharedComponent } from '../duoc-pham-shared/duoc-pham-shared.component';

@Component({
  selector: 'app-duoc-pham-update',
  templateUrl: './duoc-pham-update.component.html',
  styleUrls: ['./duoc-pham-update.component.scss']
})
export class DuocPhamUpdateComponent implements OnInit {

  @ViewChild(DuocPhamSharedComponent, { static: true }) shared;
  constructor(private router: Router) { }

  ngOnInit() {
  }

  onUpdated() {
    this.router.navigate(['/danh-muc/nhom-he-thong/thuoc/duoc-pham']);
}
}
