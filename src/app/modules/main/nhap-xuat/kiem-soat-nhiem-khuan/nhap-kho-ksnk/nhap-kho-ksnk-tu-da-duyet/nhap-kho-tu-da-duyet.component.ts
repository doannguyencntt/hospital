import { Component, OnInit, ViewChild } from '@angular/core';
import { stagger60ms } from 'src/@vex/animations/stagger.animation';
import { fadeInUp400ms } from 'src/@vex/animations/fade-in-up.animation';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import { MatDialog } from '@angular/material';
import { Router, ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/core/services/api.service';
import { AuthService } from 'src/app/core/services/auth.service';
import { NhapKhoKSNKShareComponent } from '../nhap-kho-ksnk-share/nhap-kho-ksnk-share.component';

@Component({
  selector: 'app-nhap-kho-tu-da-duyet',
  templateUrl: './nhap-kho-tu-da-duyet.component.html',
  styleUrls: ['./nhap-kho-tu-da-duyet.component.scss'],
  animations: [
    stagger60ms,
    fadeInUp400ms
  ]
})
export class NhapKhoKSNKTuDaDuyetComponent implements OnInit {
  documentType: DocumentType;
  @ViewChild(NhapKhoKSNKShareComponent, { static: true }) shared;

  constructor(private router: Router, private route: ActivatedRoute
    , private apiService: ApiService, private authService: AuthService
    , private dialog: MatDialog) { }

  ngOnInit() {
    this.documentType = DocumentType.NhapVatTuThuocNhomKSNK;
    const id: number = this.route.snapshot.params.id;
  }

  huy() {
    this.router.navigateByUrl('nhap-xuat/ksnk/nhap-kho?holdQuery=true');
  }
}
