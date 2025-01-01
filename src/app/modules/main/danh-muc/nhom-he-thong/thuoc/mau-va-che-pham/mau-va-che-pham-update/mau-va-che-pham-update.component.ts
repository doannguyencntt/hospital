import { Component, OnInit, ViewChild } from '@angular/core';
import { stagger60ms } from 'src/@vex/animations/stagger.animation';
import { fadeInUp400ms } from 'src/@vex/animations/fade-in-up.animation';
import { Router, ActivatedRoute } from '@angular/router';
import { MauVaChePhamSharedComponent } from '../mau-va-che-pham-shared/mau-va-che-pham-shared.component';

@Component({
  selector: 'app-mau-va-che-pham-update',
  templateUrl: './mau-va-che-pham-update.component.html',
  styleUrls: ['./mau-va-che-pham-update.component.scss']
})
export class MauVaChePhamUpdateComponent implements OnInit {
  idsub: number;
  @ViewChild(MauVaChePhamSharedComponent, { static: true }) shared;

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
      this.idsub = this.route.snapshot.params.id;
  }

  onUpdated() {
      this.router.navigate(['/danh-muc/nhom-he-thong/thuoc/mau-va-che-pham']);
  }

}
