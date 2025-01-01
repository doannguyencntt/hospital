import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { SecurityOperation } from 'src/app/shared/enum/security-operation.enum';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import { PermisssionGuard } from 'src/app/core/guards/permission-guard.service';
import { BaoCaoTongHopDoanhThuThaiSanDaSinhListComponent } from './bao-cao-tong-hop-doanh-thu-thai-san-da-sinh-list/bao-cao-tong-hop-doanh-thu-thai-san-da-sinh-list.component';
const routes: Routes = [
  {
      path: '',
      component: BaoCaoTongHopDoanhThuThaiSanDaSinhListComponent,
      data: {
          title: 'Báo cáo tổng hợp doanh thu thai sản đã sinh',
          DocumentType: DocumentType.BaoCaoTongHopDoanhThuThaiSanDaSinh,
          SecurityOperation: SecurityOperation.View
      },
      canActivate: [PermisssionGuard]
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BaoCaoTongHopDoanhThuThaiSanDaSinhRoutingModule { }
