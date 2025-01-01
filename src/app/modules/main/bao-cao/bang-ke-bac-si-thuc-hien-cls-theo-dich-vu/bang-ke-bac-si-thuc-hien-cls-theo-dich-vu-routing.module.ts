import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PermisssionGuard } from 'src/app/core/guards/permission-guard.service';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import { SecurityOperation } from 'src/app/shared/enum/security-operation.enum';
import { BangKeBacSiThucHienClsTheoDichVuListComponent } from './bang-ke-bac-si-thuc-hien-cls-theo-dich-vu-list/bang-ke-bac-si-thuc-hien-cls-theo-dich-vu-list.component';


const routes: Routes = [
  {
    path: '',
    component: BangKeBacSiThucHienClsTheoDichVuListComponent,
    data: {
      title: 'Báo cáo hoạt động khám bệnh theo dịch vụ',
      DocumentType: DocumentType.BaoCaoHoatDongKhamBenhTheoDichVu,
      SecurityOperation: SecurityOperation.View
    },
    canActivate: [PermisssionGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BangKeBacSiThucHienClsTheoDichVuRoutingModule { }
