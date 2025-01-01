import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { VatTuYTeTaiBenhVienSharedComponent } from '../vat-tu-y-te-tai-benh-vien-shared/vat-tu-y-te-tai-benh-vien-shared.component';

@Component({
  selector: 'app-vat-tu-y-te-tai-benh-vien-update',
  templateUrl: './vat-tu-y-te-tai-benh-vien-update.component.html',
  styleUrls: ['./vat-tu-y-te-tai-benh-vien-update.component.scss']
})
export class VatTuYTeTaiBenhVienUpdateComponent implements OnInit {

  @ViewChild(VatTuYTeTaiBenhVienSharedComponent, { static: true }) shared;

  constructor(private router: Router) { }
  ngOnInit() {
  }
  onUpdated() {
    this.router.navigate(['/danh-muc/nhom-he-thong/benh-vien/vat-tu-y-te-tai-benh-vien']);
  }
}
