import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PermisssionGuard } from 'src/app/core/guards/permission-guard.service';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import { SecurityOperation } from 'src/app/shared/enum/security-operation.enum';
import { BaoCaoDichVuNgoaiHopDongKhamDoanListComponent } from './bao-cao-dich-vu-ngoai-hop-dong-kham-doan-list/bao-cao-dich-vu-ngoai-hop-dong-kham-doan-list.component';


const routes: Routes = [
  {
    path: '',
    component: BaoCaoDichVuNgoaiHopDongKhamDoanListComponent,
    data: {
      title: 'DANH SÁCH DỊCH VỤ NGOÀI HỢP ĐỒNG KHÁM SỨC KHỎE',
      DocumentType: DocumentType.BaoCaoDichVuNgoaiGoiKhamDoan,
      SecurityOperation: SecurityOperation.View
    },
    canActivate: [PermisssionGuard]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BaoCaoDichVuNgoaiHopDongKhamDoanRoutingModule { }
