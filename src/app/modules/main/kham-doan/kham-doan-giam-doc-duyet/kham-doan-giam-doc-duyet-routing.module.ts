import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PermisssionGuard } from 'src/app/core/guards/permission-guard.service';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import { SecurityOperation } from 'src/app/shared/enum/security-operation.enum';
import { KhamDoanGiamDocDuyetDetailPopupComponent } from './kham-doan-giam-doc-duyet-detail-popup/kham-doan-giam-doc-duyet-detail-popup.component';
import { KhamDoanGiamDocDuyetListComponent } from './kham-doan-giam-doc-duyet-list/kham-doan-giam-doc-duyet-list.component';


const routes: Routes = [
  {
    path: '',
    component: KhamDoanGiamDocDuyetListComponent,
    data: {
      title: "Duyệt yêu cầu nhân sự khám sức khỏe - giám đốc",
      DocumentType: DocumentType.KhamDoanDuyetYeuCauNhanSuKhamSucKhoeGiamDoc, // cần cập nhật lại
      SecurityOperation: SecurityOperation.View
    },
    canActivate: [PermisssionGuard]
  },
  {
   path: 'chi-tiet/:id',
   component: KhamDoanGiamDocDuyetDetailPopupComponent,
   data: {
     title: 'Chi tiết duyệt yêu cầu nhân sự khám sức khỏe - giám đốc',
     DocumentType: DocumentType.KhamDoanDuyetYeuCauNhanSuKhamSucKhoeGiamDoc, // cần cập nhật lại
     SecurityOperation: SecurityOperation.Update
   },
   canActivate: [PermisssionGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class KhamDoanGiamDocDuyetRoutingModule { }
