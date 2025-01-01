import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SecurityOperation } from 'src/app/shared/enum/security-operation.enum';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import { PermisssionGuard } from 'src/app/core/guards/permission-guard.service';
import { BaoCaoTongHopKqKskListComponent } from './bao-cao-tong-hop-kq-ksk-list/bao-cao-tong-hop-kq-ksk-list.component';



const routes: Routes = [
  {
    path: '',
    component: BaoCaoTongHopKqKskListComponent,
    data: {
      title: 'Báo cáo tổng hợp kết quả khám sức khỏe',
      DocumentType: DocumentType.BaoCaoTongHopKetQuaKSK,
      SecurityOperation: SecurityOperation.View
    },
    canActivate: [PermisssionGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BaoCaoTongHopKqKskRoutingModule { }
