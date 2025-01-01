import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { XacNhanThuTienHoanThanhListComponent } from './xac-nhan-thu-tien-hoan-thanh-list/xac-nhan-thu-tien-hoan-thanh-list.component';
import { PermisssionGuard } from 'src/app/core/guards/permission-guard.service';
import { SecurityOperation } from 'src/app/shared/enum/security-operation.enum';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import { ChiTietThuTienDaHoanThanhComponent } from './chi-tiet-thu-tien-da-hoan-thanh/chi-tiet-thu-tien-da-hoan-thanh.component';

const routes: Routes = [
  {
    path: '',
    component: XacNhanThuTienHoanThanhListComponent,
    data: {     
      SecurityOperation: SecurityOperation.View,
      DocumentType: DocumentType.ThuNgan
    },   
    canActivate: [PermisssionGuard]
  },
  {
    path: 'thong-tin-chi-tiet-xac-nhan-hoan-thanh/:id',
    component: ChiTietThuTienDaHoanThanhComponent,
    data: {
        title: 'Thông tin chi tiết bhyt đã hoàn thành xác nhận',
        DocumentType: DocumentType.ThuNgan,
        SecurityOperation: SecurityOperation.View
    },
    canActivate: [PermisssionGuard]
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class XacNhanThuTienDaHoanThanhRoutingModule { }
