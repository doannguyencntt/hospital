import { Component, OnInit, Input, ChangeDetectorRef } from '@angular/core';
import icAdd from '@iconify/icons-ic/twotone-add';
import icRemove from '@iconify/icons-ic/delete';
import { ApiService } from 'src/app/core/services/api.service';
import { AuthService } from 'src/app/core/services/auth.service';
import { NotificationService } from 'src/app/core/services/notification.service';
import { Router, ActivatedRoute } from '@angular/router';
import { MatDialog } from '@angular/material';
import { BaseService } from 'src/app/core/services/base.service';
import { DoiTuongUuDai, DoiTuongUuDaiDichVuKhamBenhAdd } from '../doi-tuong-uu-dai-dich-vu-kham-benh.model';

@Component({
  selector: 'app-doi-tuong-uu-dai-dich-vu-kham-benh-shared',
  templateUrl: './doi-tuong-uu-dai-dich-vu-kham-benh-shared.component.html',
  styleUrls: ['./doi-tuong-uu-dai-dich-vu-kham-benh-shared.component.scss']
})
export class DoiTuongUuDaiDichVuKhamBenhSharedComponent implements OnInit {
  dichvuKyThuatId:number=0;
  doiTuongUuDai: DoiTuongUuDai;
  doiTuongUuDaiKyThuat:DoiTuongUuDaiDichVuKhamBenhAdd;
  id: number;
  isDisplay: boolean = true;
  icAdd = icAdd;
  icRemove = icRemove;
  documentType: DocumentType;
  validationErrors: any;
  @Input() isCreate: boolean = false;
  @Input() isUpdate: boolean = false;
  constructor(private apiService: ApiService, private dialog: MatDialog
    , private authService: AuthService, private router: Router
    , private notificationService: NotificationService
    , private route: ActivatedRoute, private cd: ChangeDetectorRef
    , private baseService: BaseService) { }

  ngOnInit() {
    this.id = this.route.snapshot.params.id;
    this.doiTuongUuDai = new DoiTuongUuDai();
    this.doiTuongUuDaiKyThuat = new DoiTuongUuDaiDichVuKhamBenhAdd();
    this.doiTuongUuDaiKyThuat.DoiTuongUuDai.push(this.doiTuongUuDai); 
    if (this.id != undefined) {
      this.getDoiTuongUuDai(this.id);
    }
  }
  getSharedData(){
    
    console.log("doiTuongUuDaiKyThuat",this.doiTuongUuDaiKyThuat)
    if(this.doiTuongUuDaiKyThuat.DichVuKhamBenhBenhVienId != null)
    {
      this.doiTuongUuDaiKyThuat.ListDichVuKhamBenhBenhVienId.push(this.doiTuongUuDaiKyThuat.DichVuKhamBenhBenhVienId);
    }
    return this.doiTuongUuDaiKyThuat;
  }
  getDoiTuongUuDai(id: number) {

    this.baseService.getById<any>(id).subscribe(
      resultData => {
        if (resultData !== null && resultData !== undefined) {
          this.doiTuongUuDaiKyThuat = resultData;
          this.dichvuKyThuatId=resultData.DichVuKhamBenhBenhVienId;
          this.doiTuongUuDaiKyThuat.DichVuKhamBenhBenhVienOld=resultData.DichVuKhamBenhBenhVienId;
        }
        console.log(resultData)
      },
      () => {
        //console.log("error")
      });

  }
  ThemBaoHiem(){
  
    let viTriNew = new DoiTuongUuDai();
    this.doiTuongUuDaiKyThuat.DoiTuongUuDai.push(viTriNew);
  }
  XoaBaoHiem(position: any){
    if(this.doiTuongUuDaiKyThuat.DoiTuongUuDai.length >1){
     this.doiTuongUuDaiKyThuat.DoiTuongUuDai.splice(position, 1);
    }
  }

}
