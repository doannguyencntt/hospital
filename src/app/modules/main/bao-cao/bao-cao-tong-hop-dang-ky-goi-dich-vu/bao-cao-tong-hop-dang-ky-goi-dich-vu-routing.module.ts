import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { SecurityOperation } from 'src/app/shared/enum/security-operation.enum';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import { PermisssionGuard } from 'src/app/core/guards/permission-guard.service';
import { BaoCaoTongHopDangKyGoiDichVuListComponent } from './bao-cao-tong-hop-dang-ky-goi-dich-vu-list/bao-cao-tong-hop-dang-ky-goi-dich-vu-list.component';
const routes: Routes = [
  {
      path: '',
      component: BaoCaoTongHopDangKyGoiDichVuListComponent,
      data: {
          title: 'Báo cáo tổng hợp đăng ký gói dịch vụ',
          DocumentType: DocumentType.BaoCaoTongHopDangKyGoiDichVu,
          SecurityOperation: SecurityOperation.View
      },
      canActivate: [PermisssionGuard]
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BaoCaoTongHopDangKyGoiDichVuRoutingModule { }
