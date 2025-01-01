import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { ViTriKhoDuocPhamSharedComponent } from '../vi-tri-kho-duoc-pham-shared/vi-tri-kho-duoc-pham-shared.component';

@Component({
  selector: 'app-vi-tri-kho-duoc-pham-update',
  templateUrl: './vi-tri-kho-duoc-pham-update.component.html',
  styleUrls: ['./vi-tri-kho-duoc-pham-update.component.scss']
})
export class ViTriKhoDuocPhamUpdateComponent implements OnInit {
  @ViewChild(ViTriKhoDuocPhamSharedComponent, { static: true }) shared;

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
  }

  onUpdated() {
      this.router.navigate(['/danh-muc/nhom-he-thong/Kho/vi-tri-kho-duoc-pham-vat-tu-y-te']);
  }
}
