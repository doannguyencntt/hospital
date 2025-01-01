import { Component, OnInit,ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { VatTuYTeSharedComponent } from '../vat-tu-y-te-shared/vat-tu-y-te-shared.component';

@Component({
  selector: 'app-vat-tu-y-te-create',
  templateUrl: './vat-tu-y-te-create.component.html',
  styleUrls: ['./vat-tu-y-te-create.component.scss']
})
export class VatTuYTeCreateComponent implements OnInit {
  @ViewChild(VatTuYTeSharedComponent, {static: true}) shared;
  constructor(private router: Router) { }

  ngOnInit() {
  }

  onCreated() {
    this.router.navigate(['/danh-muc/nhom-he-thong/bao-hiem-y-te/vat-tu-y-te']);
}
}
