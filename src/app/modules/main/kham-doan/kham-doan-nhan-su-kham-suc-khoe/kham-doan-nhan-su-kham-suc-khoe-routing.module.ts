import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PermisssionGuard } from 'src/app/core/guards/permission-guard.service';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import { SecurityOperation } from 'src/app/shared/enum/security-operation.enum';
import { KhamDoanNhanSuKhamSucKhoeDetailPopupComponent } from './kham-doan-nhan-su-kham-suc-khoe-detail-popup/kham-doan-nhan-su-kham-suc-khoe-detail-popup.component';
import { KhamDoanNhanSuKhamSucKhoeListComponent } from './kham-doan-nhan-su-kham-suc-khoe-list/kham-doan-nhan-su-kham-suc-khoe-list.component';


const routes: Routes = [
  {
    path: '',
    component: KhamDoanNhanSuKhamSucKhoeListComponent,
    data: {
      title: "Yêu cầu nhân sự khám sức khỏe",
      DocumentType: DocumentType.User, // cần cập nhật lại
      SecurityOperation: SecurityOperation.View
    }
  },
  {
    path: 'them',
    component: KhamDoanNhanSuKhamSucKhoeDetailPopupComponent,
    data: {
      title: 'Tạo yêu cầu nhân sự khám sức khỏe',
      DocumentType: DocumentType.User, // cần cập nhật lại
      SecurityOperation: SecurityOperation.Update
    },
    canActivate: [PermisssionGuard]
   },
   {
    path: 'chi-tiet/:id',
    component: KhamDoanNhanSuKhamSucKhoeDetailPopupComponent,
    data: {
      title: 'Chi tiết yêu cầu nhân sự khám sức khỏe',
      DocumentType: DocumentType.User, // cần cập nhật lại
      SecurityOperation: SecurityOperation.Update
    },
    canActivate: [PermisssionGuard]
   },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class KhamDoanNhanSuKhamSucKhoeRoutingModule { }
