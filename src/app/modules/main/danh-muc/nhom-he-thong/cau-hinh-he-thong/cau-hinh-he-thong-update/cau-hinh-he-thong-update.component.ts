import { Component, OnInit, ViewChild } from '@angular/core';
import { stagger60ms } from 'src/@vex/animations/stagger.animation';
import { fadeInUp400ms } from 'src/@vex/animations/fade-in-up.animation';
import { Router, ActivatedRoute } from '@angular/router';
import { CauHinhHeThongSharedComponent } from '../cau-hinh-he-thong-shared/cau-hinh-he-thong-shared.component';

@Component({
  selector: 'app-cau-hinh-he-thong-update',
  templateUrl: './cau-hinh-he-thong-update.component.html',
  styleUrls: ['./cau-hinh-he-thong-update.component.scss']
})
export class CauHinhHeThongUpdateComponent implements OnInit {
  @ViewChild(CauHinhHeThongSharedComponent, { static: true }) shared;

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
  }

  onUpdated() {
      this.router.navigate(['/danh-muc/nhom-he-thong/cau-hinh-he-thong/thong-so-mac-dinh']);
  }
}
