import { Component, OnInit, Input, ChangeDetectorRef } from '@angular/core';
import { MatDialog } from '@angular/material';
import { Router, ActivatedRoute } from '@angular/router';
import { NotificationService } from 'src/app/core/services/notification.service';
import { AuthService } from 'src/app/core/services/auth.service';
import { BaseService } from 'src/app/core/services/base.service';
import { ChuanDoan } from '../chuan-doan.model';
import { ApiService } from 'src/app/core/services/api.service';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';
@Component({
  selector: 'app-chuan-doan-shared',
  templateUrl: './chuan-doan-shared.component.html',
  styleUrls: ['./chuan-doan-shared.component.scss']
})
export class ChuanDoanSharedComponent implements OnInit {



  chuanDoan: ChuanDoan;
  id: number;
  isDisplay: boolean = true;

  documentType: DocumentType;
  validationErrors: any;

  @Input() isCreate: boolean = false;
  constructor(private apiService: ApiService, private dialog: MatDialog
    , private authService: AuthService, private router: Router
    , private notificationService: NotificationService
    , private route: ActivatedRoute, private cd: ChangeDetectorRef
    , private baseService: BaseService) { }

  ngOnInit() {
    this.id = this.route.snapshot.params.id;
    this.documentType = DocumentType.DanhMucChuanDoan;
    this.chuanDoan = new ChuanDoan();

    if (this.id != undefined) {
      this.getDichVuKyThuatBenhVien(this.id);
      console.log('co vao', this.id)
    }
  }

  getDichVuKyThuatBenhVien(id: number) {

    this.baseService.getById<any>(id).subscribe(
      resultData => {
        if (resultData !== null && resultData !== undefined) {
          this.chuanDoan = resultData;
        }
      },
      () => {
        //console.log("error")
      });

  }

  getSharedData() {
    return this.chuanDoan;
  }

}
