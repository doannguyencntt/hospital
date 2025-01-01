import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { LyDoTiepNhanSharedComponent } from '../ly-do-tiep-nhan-shared/ly-do-tiep-nhan-shared.component';

@Component({
  selector: 'app-ly-do-tiep-nhan-update',
  templateUrl: './ly-do-tiep-nhan-update.component.html',
  styleUrls: ['./ly-do-tiep-nhan-update.component.scss']
})
export class LyDoTiepNhanUpdateComponent implements OnInit {

  @ViewChild(LyDoTiepNhanSharedComponent, { static: true }) shared: any;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  onUpdated() {
    this.router.navigate(['/danh-muc/nhom-he-thong/benh-vien/ly-do-tiep-nhan']);
  }

}
