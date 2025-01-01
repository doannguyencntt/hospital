import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PermisssionGuard } from 'src/app/core/guards/permission-guard.service';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import { SecurityOperation } from 'src/app/shared/enum/security-operation.enum';
import { KhamDoanTiepNhanNhanVienDetailPopupComponent } from '../kham-doan-tiep-nhan/kham-doan-tiep-nhan-nhan-vien-detail-popup/kham-doan-tiep-nhan-nhan-vien-detail-popup.component';
import { KhamDoanLsTiepNhanDetailPopupComponent } from './kham-doan-ls-tiep-nhan-detail-popup/kham-doan-ls-tiep-nhan-detail-popup.component';
import { KhamDoanLsTiepNhanKhamSucKhoeListComponent } from './kham-doan-ls-tiep-nhan-kham-suc-khoe-list/kham-doan-ls-tiep-nhan-kham-suc-khoe-list.component';
import { KhamDoanLsTiepNhanNhanVienDetailPopupComponent } from './kham-doan-ls-tiep-nhan-nhan-vien-detail-popup/kham-doan-ls-tiep-nhan-nhan-vien-detail-popup.component';


const routes: Routes = [
  {
    path: '',
    component: KhamDoanLsTiepNhanKhamSucKhoeListComponent,
    data: {
      title: "Tiếp nhận",
      DocumentType: DocumentType.KhamDoanLichSuTiepNhanKhamSucKhoe, // cần cập nhật lại
      SecurityOperation: SecurityOperation.View
    },
    canActivate: [PermisssionGuard]
  },
  {
    path: 'hop-dong/:idHopDong/:idCongTy',
    component: KhamDoanLsTiepNhanDetailPopupComponent,
    data: {
      title: 'Chi tiết hợp đồng khám sức khỏe',
      DocumentType: DocumentType.KhamDoanLichSuTiepNhanKhamSucKhoe,
      SecurityOperation: SecurityOperation.Update
    },
    canActivate: [PermisssionGuard]
   },
   {
    path: 'nhan-vien/:id',
    component: KhamDoanTiepNhanNhanVienDetailPopupComponent,
    data: {
      title: 'Chi tiết khám sức khỏe của nhân viên',
      DocumentType: DocumentType.KhamDoanTiepNhan,
      SecurityOperation: SecurityOperation.Update
    },
    canActivate: [PermisssionGuard]
   },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class KhamDoanLsTiepNhanKhamSucKhoeRoutingModule { }
