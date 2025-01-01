import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import { SecurityOperation } from 'src/app/shared/enum/security-operation.enum';
import { PermisssionGuard } from 'src/app/core/guards/permission-guard.service';
import { MarketingXuatKhoListComponent } from './marketing-xuat-kho-list/marketing-xuat-kho-list.component';
import { MarketingXuatKhoChiTietComponent } from './marketing-xuat-kho-chi-tiet/marketing-xuat-kho-chi-tiet.component';

const routes: Routes = [
  {
    path: '',
    component: MarketingXuatKhoListComponent,
    data: {
      title: 'Danh Sách Xuất Kho Marketing',
      DocumentType: DocumentType.XuatKhoMarketing,
      SecurityOperation: SecurityOperation.View
    },
    canActivate: [PermisssionGuard]
  },
  {
    path: 'chi-tiet/:id',
    component: MarketingXuatKhoChiTietComponent,
    data: {
      title: "Xuất Kho Marketing Chi Tiết",
      DocumentType: DocumentType.XuatKhoMarketing,
      SecurityOperation: SecurityOperation.View
    },
    canActivate: [PermisssionGuard]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MarketingXuatKhoRoutingModule { }
