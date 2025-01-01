import { Component, OnInit, Input } from '@angular/core';
import { SecurityOperation } from 'src/app/shared/enum/security-operation.enum';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import { ActivatedRoute } from '@angular/router';
import { BaseService } from 'src/app/core/services/base.service';
import { ApiService } from 'src/app/core/services/api.service';
import { MatDialog } from '@angular/material';
import { NotificationService } from 'src/app/core/services/notification.service';
import { AuthService } from 'src/app/core/services/auth.service';
import { GiuongBenhViewModel } from '../danh-muc-giuong-benh.model';

@Component({
  selector: 'app-danh-muc-giuong-benh-shared',
  templateUrl: './danh-muc-giuong-benh-shared.component.html',
  styleUrls: ['./danh-muc-giuong-benh-shared.component.scss']
})
export class DanhMucGiuongBenhSharedComponent implements OnInit {

  @Input() isUpdate : boolean = false ;
  
  documentType: DocumentType;
  validationErrors:any;

  giuongBenh: GiuongBenhViewModel = new GiuongBenhViewModel();

  constructor(private route: ActivatedRoute, 
            private baseService: BaseService, 
            private apiService: ApiService, private dialog: MatDialog, 
            private notificationService: NotificationService,
            private authService: AuthService) { }

  ngOnInit() {
    this.documentType = DocumentType.NhapKhoDuocPham
    const id: number = this.route.snapshot.params.id;

    if (id !== undefined && id!== null) {
      this.getById(id);
    }

  }

  getById(id: number){

    this.baseService.getById<GiuongBenhViewModel>(id).subscribe(resultData => {
      if(resultData !== null && resultData !== undefined){
        //console.log("getById = ", resultData);
        this.giuongBenh = resultData;
      }
    });

  }

  getSharedData(){
    return this.giuongBenh;
  }
}
