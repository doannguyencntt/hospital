import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PermisssionGuard } from 'src/app/core/guards/permission-guard.service';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import { SecurityOperation } from 'src/app/shared/enum/security-operation.enum';
import { BangKeBacSiThucHienClsTheoKhoaPhongListComponent } from './bang-ke-bac-si-thuc-hien-cls-theo-khoa-phong-list/bang-ke-bac-si-thuc-hien-cls-theo-khoa-phong-list.component';


const routes: Routes = [
  {
    path: '',
    component: BangKeBacSiThucHienClsTheoKhoaPhongListComponent,
    data: {
      title: 'Báo cáo hoạt động khám bệnh theo khoa phòng',
      DocumentType: DocumentType.BaoCaoHoatDongKhamBenhTheoKhoaPhong,
      SecurityOperation: SecurityOperation.View
    },
    canActivate: [PermisssionGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BangKeBacSiThucHienClsTheoKhoaPhongRoutingModule { }
