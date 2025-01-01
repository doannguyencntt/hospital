import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PermisssionGuard } from 'src/app/core/guards/permission-guard.service';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import { SecurityOperation } from 'src/app/shared/enum/security-operation.enum';
import { KhamDoanNhanSuDuyetDetailPopupComponent } from './kham-doan-nhan-su-duyet-detail-popup/kham-doan-nhan-su-duyet-detail-popup.component';
import { KhamDoanNhanSuDuyetListComponent } from './kham-doan-nhan-su-duyet-list/kham-doan-nhan-su-duyet-list.component';


const routes: Routes = [
  {
    path: '',
    component: KhamDoanNhanSuDuyetListComponent,
    data: {
      title: "Duyệt yêu cầu nhân sự khám sức khỏe - nhân sự",
      DocumentType: DocumentType.KhamDoanDuyetYeuCauNhanSuKhamSucKhoePhongNhanSu, // cần cập nhật lại
      SecurityOperation: SecurityOperation.View
    }
  },
  {
   path: 'chi-tiet/:id',
   component: KhamDoanNhanSuDuyetDetailPopupComponent,
   data: {
     title: 'Chi tiết duyệt yêu cầu nhân sự khám sức khỏe - nhân sự',
     DocumentType: DocumentType.KhamDoanDuyetYeuCauNhanSuKhamSucKhoePhongNhanSu, // cần cập nhật lại
     SecurityOperation: SecurityOperation.Update
   },
   canActivate: [PermisssionGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class KhamDoanNhanSuDuyetRoutingModule { }
