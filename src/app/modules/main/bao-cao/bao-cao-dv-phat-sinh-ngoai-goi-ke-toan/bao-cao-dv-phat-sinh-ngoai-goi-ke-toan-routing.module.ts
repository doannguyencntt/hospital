import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import { SecurityOperation } from 'src/app/shared/enum/security-operation.enum';
import { BaoCaoDvPhatSinhNgoaiGoiKeToanListComponent } from './bao-cao-dv-phat-sinh-ngoai-goi-ke-toan-list/bao-cao-dv-phat-sinh-ngoai-goi-ke-toan-list.component';

const routes: Routes = [
  {
      path: '',
      component: BaoCaoDvPhatSinhNgoaiGoiKeToanListComponent,
      data: {
          title: 'Báo cáo  dịch vụ phát sinh ngoài gói của kế toán ',
          DocumentType: DocumentType.BaoCaoDichVuPhatSinhNgoaiGoiCuaKeToan,
          SecurityOperation: SecurityOperation.View
      }
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BaoCaoDvPhatSinhNgoaiGoiKeToanRoutingModule { }
