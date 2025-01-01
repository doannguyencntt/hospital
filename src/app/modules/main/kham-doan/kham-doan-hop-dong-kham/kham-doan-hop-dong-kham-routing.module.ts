import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PermisssionGuard } from 'src/app/core/guards/permission-guard.service';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import { SecurityOperation } from 'src/app/shared/enum/security-operation.enum';
import { KhamDoanHopDongKhamDetailPopupComponent } from './kham-doan-hop-dong-kham-detail-popup/kham-doan-hop-dong-kham-detail-popup.component';
import { KhamDoanHopDongKhamListComponent } from './kham-doan-hop-dong-kham-list/kham-doan-hop-dong-kham-list.component';


const routes: Routes = [
  {
    path: '',
    component: KhamDoanHopDongKhamListComponent,
    data: {
      title: "Hợp đồng khám sức khỏe",
      DocumentType: DocumentType.KhamDoanHopDongKham,
      SecurityOperation: SecurityOperation.View
    },
    canActivate: [PermisssionGuard]
  },
  {
    path: 'them',
    component: KhamDoanHopDongKhamDetailPopupComponent,
    data: {
      title: 'Thêm hợp đồng khám sức khỏe',
      DocumentType: DocumentType.KhamDoanHopDongKham,
      SecurityOperation: SecurityOperation.Update
    },
    canActivate: [PermisssionGuard]
  },
  {
    path: 'chi-tiet/:id',
    component: KhamDoanHopDongKhamDetailPopupComponent,
    data: {
      title: 'Chi tiết hợp đồng khám sức khỏe',
      DocumentType: DocumentType.KhamDoanHopDongKham,
      SecurityOperation: SecurityOperation.Update
    },
    canActivate: [PermisssionGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class KhamDoanHopDongKhamRoutingModule { }
