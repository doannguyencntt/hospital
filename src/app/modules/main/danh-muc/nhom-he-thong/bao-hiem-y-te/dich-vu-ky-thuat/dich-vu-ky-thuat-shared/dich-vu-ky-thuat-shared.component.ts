import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BaseService } from 'src/app/core/services/base.service';
import { CommonService } from 'src/app/core/utilities/common.helper';
import { NotificationService } from 'src/app/core/services/notification.service';
import { DichVuKyThuatBaoHiemYTe, DichVuKyThuatThongTinGiaBaoHiemYTe } from '../dich-vu-ky-thuat.model';
import { ConfirmComponent } from 'src/app/shared/component/dialogs/confirm/confirm.component';
import { SystemMessage } from 'src/app/shared/configdata/system-message';
import { MatDialog } from '@angular/material';


import icAdd from '@iconify/icons-ic/twotone-add';
import icDelete from '@iconify/icons-ic/twotone-delete';
@Component({
  selector: 'app-dich-vu-ky-thuat-shared',
  templateUrl: './dich-vu-ky-thuat-shared.component.html',
  styleUrls: ['./dich-vu-ky-thuat-shared.component.scss']
})
export class DichVuKyThuatSharedComponent implements OnInit {
  isCreate: boolean = true;
  validationErrors: any;
  dichVuKyThuat: DichVuKyThuatBaoHiemYTe = new DichVuKyThuatBaoHiemYTe();
  icAdd = icAdd;
  icDelete = icDelete;

  constructor(
    private route: ActivatedRoute,
    private baseService: BaseService,
    private dialog: MatDialog,
    private notificationService: NotificationService) { }


  ngOnInit() {
    const id: number = this.route.snapshot.params.id;
    if (this.isCreate) {
      let dichVuKyThuatThongTinGiaBaoHiemYTe = new DichVuKyThuatThongTinGiaBaoHiemYTe()
      dichVuKyThuatThongTinGiaBaoHiemYTe.HieuLuc = true;
      this.dichVuKyThuat.DichVuKyThuatThongTinGias.push(dichVuKyThuatThongTinGiaBaoHiemYTe);
    }
    if (id !== undefined && id !== null) {
      this.getById(id);
      this.isCreate = false;
    }
  }


  getById(id: number) {
    this.baseService.getById<DichVuKyThuatBaoHiemYTe>(id).subscribe(resultData => {
      this.dichVuKyThuat = resultData;
    });
  }

  themThongTinGia() {
    this.validationErrors = [];
    let dichVuKyThuatThongTinGiaBaoHiemYTe = new DichVuKyThuatThongTinGiaBaoHiemYTe()
    dichVuKyThuatThongTinGiaBaoHiemYTe.HieuLuc = true;
    this.dichVuKyThuat.DichVuKyThuatThongTinGias.push(dichVuKyThuatThongTinGiaBaoHiemYTe);
  }

  xoaThongTinGia(viTri: any) {
    if (this.dichVuKyThuat.DichVuKyThuatThongTinGias.length > 1) {
      this.dialog.open(ConfirmComponent, {
        disableClose: false,
        width: '400px',
        data: { Title: "Xác nhận", Message: CommonService.format(SystemMessage.MessConfirm, ["xóa"]) }
      }).afterClosed().subscribe(result => {
        if (result === 'Yes') {
          this.dichVuKyThuat.DichVuKyThuatThongTinGias.splice(viTri, 1);
          this.notificationService.showSuccess(CommonService.format(SystemMessage.ActionSuccessfully, ["Xóa"]));
        }
      });
    }
  }

  getSharedData() {
    return this.dichVuKyThuat;
  }
}
