import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

import { MauVaChePhamSharedComponent } from '../mau-va-che-pham-shared/mau-va-che-pham-shared.component';

@Component({
  selector: 'app-mau-va-che-pham-create',
  templateUrl: './mau-va-che-pham-create.component.html',
  styleUrls: ['./mau-va-che-pham-create.component.scss']
})
export class MauVaChePhamCreateComponent implements OnInit {
  @ViewChild(MauVaChePhamSharedComponent, { static: true }) shared;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  onCreated() {
      this.router.navigate(['/danh-muc/nhom-he-thong/thuoc/mau-va-che-pham']);
  }
}
