import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PermisssionGuard } from 'src/app/core/guards/permission-guard.service';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import { SecurityOperation } from 'src/app/shared/enum/security-operation.enum';
import { BaoCaoDichVuHopDongKhamDoanHopDongListComponent } from './bao-cao-dich-vu-hop-dong-kham-doan-hop-dong-list/bao-cao-dich-vu-hop-dong-kham-doan-hop-dong-list.component';
import { BaoCaoDichVuHopDongKhamDoanNhanVienListComponent } from './bao-cao-dich-vu-hop-dong-kham-doan-nhan-vien-list/bao-cao-dich-vu-hop-dong-kham-doan-nhan-vien-list.component';

const routes: Routes = [
  {
    path: '',
    component: BaoCaoDichVuHopDongKhamDoanHopDongListComponent,
    data: {
      title: 'DANH SÁCH BỆNH NHÂN KHÁM SỨC KHỎE THEO HỢP ĐỒNG',
      DocumentType: DocumentType.BaoCaoDichVuTrongGoiKhamDoan,
      SecurityOperation: SecurityOperation.View
    },
    canActivate: [PermisssionGuard]
  },
  {
    path: 'xem-chi-tiet',
    component: BaoCaoDichVuHopDongKhamDoanNhanVienListComponent,
    data: {
      title: 'DANH SÁCH BỆNH NHÂN KHÁM SỨC KHỎE THEO HỢP ĐỒNG CHI TIẾT',      
      DocumentType: DocumentType.BaoCaoDichVuTrongGoiKhamDoan,
      SecurityOperation:SecurityOperation.View
    },

    canActivate: [PermisssionGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BaoCaoDichVuHopDongKhamDoanRoutingModule { }
