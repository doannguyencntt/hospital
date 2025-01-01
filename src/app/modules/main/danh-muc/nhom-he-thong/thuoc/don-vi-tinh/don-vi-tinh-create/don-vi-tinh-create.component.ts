import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

import { DonViTinhSharedComponent } from '../don-vi-tinh-shared/don-vi-tinh-shared.component';

@Component({
  selector: 'app-don-vi-tinh-create',
  templateUrl: './don-vi-tinh-create.component.html',
  styleUrls: ['./don-vi-tinh-create.component.scss']
})
export class DonViTinhCreateComponent implements OnInit {
  @ViewChild(DonViTinhSharedComponent, { static: true }) shared;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  onCreated() {
      this.router.navigate(['/danh-muc/nhom-he-thong/thuoc/don-vi-tinh']);
  }
}
