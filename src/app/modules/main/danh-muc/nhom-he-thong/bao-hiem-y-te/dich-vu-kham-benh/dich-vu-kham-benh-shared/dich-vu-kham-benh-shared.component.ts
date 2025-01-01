import { Component, OnInit } from '@angular/core';
import { DichVuKhamBenh, DichVuKhamBenhThongTinGiaBaoHiemYTe } from '../dich-vu-kham-benh.model';
import { ActivatedRoute } from '@angular/router';
import { BaseService } from 'src/app/core/services/base.service';
import { NotificationService } from 'src/app/core/services/notification.service';
import { MatDialog } from '@angular/material';

import icAdd from '@iconify/icons-ic/twotone-add';
import icDelete from '@iconify/icons-ic/twotone-delete';
import { SystemMessage } from 'src/app/shared/configdata/system-message';
import { CommonService } from 'src/app/core/utilities/common.helper';
import { ConfirmComponent } from 'src/app/shared/component/dialogs/confirm/confirm.component';
@Component({
  selector: 'app-dich-vu-kham-benh-shared',
  templateUrl: './dich-vu-kham-benh-shared.component.html',
  styleUrls: ['./dich-vu-kham-benh-shared.component.scss']
})
export class DichVuKhamBenhSharedComponent implements OnInit {
  dichvukhambenh: DichVuKhamBenh = new DichVuKhamBenh();
  validationErrors: any;
  isCreate = true;
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
      let dichVuKhamBenhThongTinGiaBaoHiemYTe = new DichVuKhamBenhThongTinGiaBaoHiemYTe()
      dichVuKhamBenhThongTinGiaBaoHiemYTe.HieuLuc = true;
      this.dichvukhambenh.DichVuKhamBenhThongTinGias.push(dichVuKhamBenhThongTinGiaBaoHiemYTe);
    }
    if (id !== undefined && id !== null) {
      this.getById(id);
      this.isCreate = false;
    }
  }
  getById(id: number) {
    this.baseService.getById<DichVuKhamBenh>(id).subscribe(resultData => {
      this.dichvukhambenh = resultData;
    });
  }

  themThongTinGia() {
    this.validationErrors = [];
    let dichVuKhamBenhThongTinGiaBaoHiemYTe = new DichVuKhamBenhThongTinGiaBaoHiemYTe()
    dichVuKhamBenhThongTinGiaBaoHiemYTe.HieuLuc = true;
    this.dichvukhambenh.DichVuKhamBenhThongTinGias.push(dichVuKhamBenhThongTinGiaBaoHiemYTe);
  }

  xoaThongTinGia(viTri: any) {
    if (this.dichvukhambenh.DichVuKhamBenhThongTinGias.length > 1) {
      this.dialog.open(ConfirmComponent, {
        disableClose: false,
        width: '400px',
        data: { Title: "Xác nhận", Message: CommonService.format(SystemMessage.MessConfirm, ["xóa"]) }
      }).afterClosed().subscribe(result => {
        if (result === 'Yes') {
          this.dichvukhambenh.DichVuKhamBenhThongTinGias.splice(viTri, 1);
          this.notificationService.showSuccess(CommonService.format(SystemMessage.ActionSuccessfully, ["Xóa"]));
        }
      });
    }
  }


  getSharedData() {
    return this.dichvukhambenh;
  }

}
