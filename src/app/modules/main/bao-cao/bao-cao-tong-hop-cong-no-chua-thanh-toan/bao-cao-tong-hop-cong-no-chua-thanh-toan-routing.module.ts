import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PermisssionGuard } from 'src/app/core/guards/permission-guard.service';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import { SecurityOperation } from 'src/app/shared/enum/security-operation.enum';
import { BaoCaoTongHopCongNoChuaThanhToanListComponent } from './bao-cao-tong-hop-cong-no-chua-thanh-toan-list/bao-cao-tong-hop-cong-no-chua-thanh-toan-list.component';


const routes: Routes = [
  {
    path: '',
    component: BaoCaoTongHopCongNoChuaThanhToanListComponent,
    data: {
      title: 'Báo cáo tổng hợp công nợ chưa thanh toán',
      DocumentType: DocumentType.BaoCaoTongHopCongNoChuaThanhToan,
      SecurityOperation: SecurityOperation.View
    },
    canActivate: [PermisssionGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BaoCaoTongHopCongNoChuaThanhToanRoutingModule { }
