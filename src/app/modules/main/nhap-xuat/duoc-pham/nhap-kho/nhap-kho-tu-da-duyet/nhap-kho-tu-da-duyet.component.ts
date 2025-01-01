import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/core/services/api.service';
import { AuthService } from 'src/app/core/services/auth.service';
import { MatDialog } from '@angular/material';
import { NhapKhoShareComponent } from '../nhap-kho-share/nhap-kho-share.component';
import { stagger60ms } from 'src/@vex/animations/stagger.animation';
import { fadeInUp400ms } from 'src/@vex/animations/fade-in-up.animation';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';

@Component({
  selector: 'app-nhap-kho-tu-da-duyet',
  templateUrl: './nhap-kho-tu-da-duyet.component.html',
  styleUrls: ['./nhap-kho-tu-da-duyet.component.scss'],
  animations: [
    stagger60ms,
    fadeInUp400ms
  ]
})
export class NhapKhoTuDaDuyetComponent implements OnInit {

  documentType: DocumentType;

  @ViewChild(NhapKhoShareComponent, { static: true }) shared;
  
  constructor(private router: Router, private route: ActivatedRoute
    , private apiService: ApiService, private authService: AuthService
    ,  private dialog: MatDialog) { }

  ngOnInit() {
    this.documentType = DocumentType.NhapKhoDuocPham;

    const id: number = this.route.snapshot.params.id;
    if (id !== undefined && id!== null) {
      this.getById(id);
    }

  }

  getById(id: number){
    
  }
  
  huy(){
    this.router.navigateByUrl('nhap-xuat/duoc-pham/nhap-kho?holdQuery=true');
  }
}
