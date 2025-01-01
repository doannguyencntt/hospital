import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { QuocGiaShareComponent } from '../quoc-gia-share/quoc-gia-share.component';

@Component({
  selector: 'app-quoc-gia-create',
  templateUrl: './quoc-gia-create.component.html',
  styleUrls: ['./quoc-gia-create.component.scss']
})
export class QuocGiaCreateComponent implements OnInit {
  @ViewChild(QuocGiaShareComponent, { static: true }) shared;

  constructor(private router : Router) { }

  ngOnInit() {
  }

  onCreated() {
    this.router.navigate(['/danh-muc/nhom-he-thong/hanh-chinh/quoc-gia']);
  }
}
