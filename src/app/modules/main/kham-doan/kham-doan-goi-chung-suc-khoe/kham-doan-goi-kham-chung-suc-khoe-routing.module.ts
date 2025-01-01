import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PermisssionGuard } from 'src/app/core/guards/permission-guard.service';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import { SecurityOperation } from 'src/app/shared/enum/security-operation.enum';
import { KhamDoanGoiKhamChungSucKhoeDetailPopupComponent } from './kham-doan-goi-kham-chung-suc-khoe-detail-popup/kham-doan-goi-kham-chung-suc-khoe-detail-popup.component';
import { KhamDoanGoiKhamChungSucKhoeListComponent } from './kham-doan-goi-kham-chung-suc-khoe-list/kham-doan-goi-kham-chung-suc-khoe-list.component';


const routes: Routes = [
  {
    path: '',
    component: KhamDoanGoiKhamChungSucKhoeListComponent,
    data: {
      title: "Gói khám chung sức khỏe",
      DocumentType: DocumentType.KhamDoanGoiKhamSucKhoe,
      SecurityOperation: SecurityOperation.View
    },
    canActivate: [PermisssionGuard]
  },
  {
    path: 'them',
    component: KhamDoanGoiKhamChungSucKhoeDetailPopupComponent,
    data: {
      title: 'Thêm gói khám chung sức khỏe',
      DocumentType: DocumentType.KhamDoanGoiKhamSucKhoe,
      SecurityOperation: SecurityOperation.Update
    },
    canActivate: [PermisssionGuard]
  },
  {
    path: 'chi-tiet',
    component: KhamDoanGoiKhamChungSucKhoeDetailPopupComponent,
    data: {
      title: 'Chi tiết gói khám chung sức khỏe',
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
export class KhamDoanGoiChungKhamSucKhoeRoutingModule { }
