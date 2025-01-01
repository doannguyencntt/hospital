import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BaseService } from 'src/app/core/services/base.service';
import { QuocGia } from '../quoc-gia.model';
import { NotificationService } from 'src/app/core/services/notification.service';

@Component({
  selector: 'app-quoc-gia-share',
  templateUrl: './quoc-gia-share.component.html',
  styleUrls: ['./quoc-gia-share.component.scss']
})
export class QuocGiaShareComponent implements OnInit {
  quocGia = {} as QuocGia;
  isCreate = true;
  validationErrors: any;

  constructor(private route: ActivatedRoute, private baseService: BaseService,  private notificationService: NotificationService) { }

  ngOnInit() {
    this.quocGia.IsDisabled = false;
    
    const id: number = this.route.snapshot.params.id;
    if(id !== undefined && id !== null) {
      this.getById(id);
      this.isCreate = false;
    }
  }
  
  getById(id: number) {
    this.baseService.getById<QuocGia>(id).subscribe(res => {
      this.quocGia = res;
    })
  }

  getSharedData() {
    return this.quocGia;
  }

  maDienThoaiChanged(value) {
    if(parseInt(value) <= 0) {
      this.notificationService.showError("Mã điện thoại quốc tế phải lớn hơn 0.")
      this.quocGia.MaDienThoaiQuocTe = '1';
    }
  }
}
