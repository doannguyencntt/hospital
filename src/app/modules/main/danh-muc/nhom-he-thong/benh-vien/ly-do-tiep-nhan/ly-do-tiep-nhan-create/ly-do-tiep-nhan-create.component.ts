import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { LyDoTiepNhanSharedComponent } from '../ly-do-tiep-nhan-shared/ly-do-tiep-nhan-shared.component';

@Component({
  selector: 'app-ly-do-tiep-nhan-create',
  templateUrl: './ly-do-tiep-nhan-create.component.html',
  styleUrls: ['./ly-do-tiep-nhan-create.component.scss']
})
export class LyDoTiepNhanCreateComponent implements OnInit {

  @ViewChild(LyDoTiepNhanSharedComponent, { static: true }) shared: any;
  
  constructor(private router: Router) { }

  ngOnInit() {
  }

  onCreated() {
      this.router.navigate(['/danh-muc/nhom-he-thong/benh-vien/ly-do-tiep-nhan']);
  }

}
