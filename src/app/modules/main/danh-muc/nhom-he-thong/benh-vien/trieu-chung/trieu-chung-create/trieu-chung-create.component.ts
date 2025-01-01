import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { TrieuChungSharedComponent } from '../trieu-chung-shared/trieu-chung-shared.component';

@Component({
  selector: 'app-trieu-chung-create',
  templateUrl: './trieu-chung-create.component.html',
  styleUrls: ['./trieu-chung-create.component.scss']
})
export class TrieuChungCreateComponent implements OnInit {

  @ViewChild(TrieuChungSharedComponent, { static: true }) shared;
  
  constructor(private router: Router) { }
  ngOnInit() {
  }
  onCreated() {
      this.router.navigate(['/danh-muc/nhom-he-thong/benh-vien/trieu-chung']);
  }

}
