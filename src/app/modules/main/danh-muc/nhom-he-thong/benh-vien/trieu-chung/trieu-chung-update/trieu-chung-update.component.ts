import { Component, OnInit, ViewChild } from '@angular/core';
import { stagger60ms } from 'src/@vex/animations/stagger.animation';
import { fadeInUp400ms } from 'src/@vex/animations/fade-in-up.animation';
import { Router, ActivatedRoute } from '@angular/router';
import { TrieuChungSharedComponent } from '../trieu-chung-shared/trieu-chung-shared.component';

@Component({
  selector: 'app-trieu-chung-update',
  templateUrl: './trieu-chung-update.component.html',
  styleUrls: ['./trieu-chung-update.component.scss']
})
export class TrieuChungUpdateComponent implements OnInit {
  @ViewChild(TrieuChungSharedComponent, { static: true }) shared;
  
  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
  }

  onUpdated() {
      this.router.navigate(['/danh-muc/nhom-he-thong/benh-vien/trieu-chung']);
  }

}
