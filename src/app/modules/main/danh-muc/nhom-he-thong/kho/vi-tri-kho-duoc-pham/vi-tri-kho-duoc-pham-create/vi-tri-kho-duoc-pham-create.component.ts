import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

import { ViTriKhoDuocPhamSharedComponent } from '../vi-tri-kho-duoc-pham-shared/vi-tri-kho-duoc-pham-shared.component';

@Component({
  selector: 'app-vi-tri-kho-duoc-pham-create',
  templateUrl: './vi-tri-kho-duoc-pham-create.component.html',
  styleUrls: ['./vi-tri-kho-duoc-pham-create.component.scss']
})
export class ViTriKhoDuocPhamCreateComponent implements OnInit {
  @ViewChild(ViTriKhoDuocPhamSharedComponent, { static: true }) shared;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  onCreated() {
      this.router.navigate(['/danh-muc/nhom-he-thong/Kho/vi-tri-kho-duoc-pham-vat-tu-y-te']);
  }

}
