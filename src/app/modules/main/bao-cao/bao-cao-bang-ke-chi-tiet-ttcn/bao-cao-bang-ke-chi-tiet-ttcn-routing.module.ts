import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SecurityOperation } from 'src/app/shared/enum/security-operation.enum';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import { PermisssionGuard } from 'src/app/core/guards/permission-guard.service';
import { BaoCaoBangKeChiTietTtcnListComponent } from './bao-cao-bang-ke-chi-tiet-ttcn-list/bao-cao-bang-ke-chi-tiet-ttcn-list.component';
const routes: Routes = [
  {
    path: '',
    component: BaoCaoBangKeChiTietTtcnListComponent,
    data: {
      title: 'Báo cáo bảng kê chi tiết TTCN',
      DocumentType: DocumentType.BaoCaoBangKeChiTietTTCN,
      SecurityOperation: SecurityOperation.View
    },
    canActivate: [PermisssionGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BaoCaoBangKeChiTietTtcnRoutingModule { }
