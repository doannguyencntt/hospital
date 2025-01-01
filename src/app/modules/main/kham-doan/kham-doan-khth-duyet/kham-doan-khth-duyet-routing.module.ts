import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PermisssionGuard } from 'src/app/core/guards/permission-guard.service';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import { SecurityOperation } from 'src/app/shared/enum/security-operation.enum';
import { KhamDoanKhthDuyetDetailPopupComponent } from './kham-doan-khth-duyet-detail-popup/kham-doan-khth-duyet-detail-popup.component';
import { KhamDoanKhthDuyetListComponent } from './kham-doan-khth-duyet-list/kham-doan-khth-duyet-list.component';


const routes: Routes = [
  {
    path: '',
    component: KhamDoanKhthDuyetListComponent,
    data: {
      title: "Duyệt yêu cầu nhân sự khám sức khỏe - kế hoạch tổng hợp",
      DocumentType: DocumentType.KhamDoanDuyetYeuCauNhanSuKhamSucKhoeKhth,
      SecurityOperation: SecurityOperation.View
    },
    canActivate: [PermisssionGuard]
  },
  {
    path: 'chi-tiet/:id',
    component: KhamDoanKhthDuyetDetailPopupComponent,
    data: {
      title: 'Chi tiết duyệt yêu cầu nhân sự khám sức khỏe',
      DocumentType: DocumentType.KhamDoanDuyetYeuCauNhanSuKhamSucKhoeKhth,
      SecurityOperation: SecurityOperation.Update
    },
    canActivate: [PermisssionGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class KhamDoanKhthDuyetRoutingModule { }
