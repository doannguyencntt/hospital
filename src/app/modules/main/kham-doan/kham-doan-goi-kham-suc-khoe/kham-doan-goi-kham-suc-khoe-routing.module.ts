import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PermisssionGuard } from 'src/app/core/guards/permission-guard.service';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import { SecurityOperation } from 'src/app/shared/enum/security-operation.enum';
import { KhamDoanGoiKhamSucKhoeDetailPopupComponent } from './kham-doan-goi-kham-suc-khoe-detail-popup/kham-doan-goi-kham-suc-khoe-detail-popup.component';
import { KhamDoanGoiKhamSucKhoeListComponent } from './kham-doan-goi-kham-suc-khoe-list/kham-doan-goi-kham-suc-khoe-list.component';


const routes: Routes = [
  {
    path: '',
    component: KhamDoanGoiKhamSucKhoeListComponent,
    data: {
      title: "Gói khám sức khỏe",
      DocumentType: DocumentType.KhamDoanGoiKhamSucKhoe,
      SecurityOperation: SecurityOperation.View
    },
    canActivate: [PermisssionGuard]
  },
  {
    path: 'them',
    component: KhamDoanGoiKhamSucKhoeDetailPopupComponent,
    data: {
      title: 'Thêm gói khám sức khỏe',
      DocumentType: DocumentType.KhamDoanGoiKhamSucKhoe,
      SecurityOperation: SecurityOperation.Update
    },
    canActivate: [PermisssionGuard]
  },
  {
    path: 'chi-tiet',
    component: KhamDoanGoiKhamSucKhoeDetailPopupComponent,
    data: {
      title: 'Chi tiết gói khám sức khỏe',
      DocumentType: DocumentType.KhamDoanGoiKhamSucKhoe,
      SecurityOperation: SecurityOperation.Update
    },
    canActivate: [PermisssionGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class KhamDoanGoiKhamSucKhoeRoutingModule { }
