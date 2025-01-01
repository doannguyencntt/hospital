import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import { PermisssionGuard } from 'src/app/core/guards/permission-guard.service';
import { SecurityOperation } from 'src/app/shared/enum/security-operation.enum';
import { BaoCaoBangKeGiaoHoaDonSangPktListComponent } from './bao-cao-bang-ke-giao-hoa-don-sang-pkt-list/bao-cao-bang-ke-giao-hoa-don-sang-pkt-list.component';



const routes: Routes = [
  {
    path: '',
    component: BaoCaoBangKeGiaoHoaDonSangPktListComponent,
    data: {
      title: 'Báo cáo biên bản kiểm kê',
      DocumentType: DocumentType.BaoCaoBangKeGiaoHoaDonSangPKT,
      SecurityOperation: SecurityOperation.View
    },
    canActivate: [PermisssionGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BaoCaoBangKeGiaoHoaDonSangPktRoutingModule { }