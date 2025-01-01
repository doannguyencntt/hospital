import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PermisssionGuard } from 'src/app/core/guards/permission-guard.service';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import { SecurityOperation } from 'src/app/shared/enum/security-operation.enum';
import { BaoCaoHoatDongKhamDoanListComponent } from './bao-cao-hoat-dong-kham-doan-list/bao-cao-hoat-dong-kham-doan-list.component';

const routes: Routes = [
  {
    path: '',
    component: BaoCaoHoatDongKhamDoanListComponent,
    data: {
      title: 'BÁO CÁO HOẠT ĐỘNG KHÁM ĐOÀN',
      DocumentType: DocumentType.BaoCaoHoatDongKhamDoan,
      SecurityOperation: SecurityOperation.View
    },
    canActivate: [PermisssionGuard]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BaoCaoHoatDongKhamDoanRoutingModule { }
