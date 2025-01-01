import { Component, OnInit, Input, ChangeDetectorRef } from '@angular/core';
import { DoiTuongUuDai, DoiTuongUuDaiDichVuKyThuatAdd } from '../doi-tuong-uu-dai-dich-vu-ky-thuat.model';
import icAdd from '@iconify/icons-ic/twotone-add';
import icRemove from '@iconify/icons-ic/delete';
import { ApiService } from 'src/app/core/services/api.service';
import { AuthService } from 'src/app/core/services/auth.service';
import { NotificationService } from 'src/app/core/services/notification.service';
import { Router, ActivatedRoute } from '@angular/router';
import { MatDialog } from '@angular/material';
import { BaseService } from 'src/app/core/services/base.service';

@Component({
  selector: 'app-doi-tuong-uu-dai-dich-vu-ky-thuat-shared',
  templateUrl: './doi-tuong-uu-dai-dich-vu-ky-thuat-shared.component.html',
  styleUrls: ['./doi-tuong-uu-dai-dich-vu-ky-thuat-shared.component.scss']
})
export class DoiTuongUuDaiDichVuKyThuatSharedComponent implements OnInit {
  dichvuKyThuatId:number=0;
  doiTuongUuDai: DoiTuongUuDai;
  doiTuongUuDaiKyThuat:DoiTuongUuDaiDichVuKyThuatAdd;
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
    this.doiTuongUuDaiKyThuat = new DoiTuongUuDaiDichVuKyThuatAdd();
    this.doiTuongUuDaiKyThuat.DoiTuongUuDai.push(this.doiTuongUuDai);
    if (this.id != undefined) {
      this.getDoiTuongUuDai(this.id);
    }
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
  getSharedData(){
    if(this.doiTuongUuDaiKyThuat.DichVuKyThuatBenhVienId != null)
    {
      this.doiTuongUuDaiKyThuat.ListDichVuKyThuatBenhVienId.push(this.doiTuongUuDaiKyThuat.DichVuKyThuatBenhVienId);
    }
    return this.doiTuongUuDaiKyThuat;
  }
  getDoiTuongUuDai(id: number) {

    this.baseService.getById<any>(id).subscribe(
      resultData => {
        if (resultData !== null && resultData !== undefined) {
          this.doiTuongUuDaiKyThuat = resultData;
          this.dichvuKyThuatId=resultData.DichVuKyThuatBenhVienId;
          this.doiTuongUuDaiKyThuat.DichVuKyThuatBenhVienOld=resultData.DichVuKyThuatBenhVienId;
        }
        console.log(resultData)
      },
      () => {
        //console.log("error")
      });

  }
}
