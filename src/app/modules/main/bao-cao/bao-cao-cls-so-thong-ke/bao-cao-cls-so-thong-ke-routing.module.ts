import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PermisssionGuard } from 'src/app/core/guards/permission-guard.service';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import { SecurityOperation } from 'src/app/shared/enum/security-operation.enum';
import { BaoCaoClsSoThongKeListComponent } from './bao-cao-cls-so-thong-ke-list/bao-cao-cls-so-thong-ke-list.component';
const routes: Routes = [
  {
    path: '',
    component: BaoCaoClsSoThongKeListComponent,
    data: {
      title: 'Sổ Thống Kê CLS',
      DocumentType: DocumentType.BaoCaoSoThongKeCls,
      SecurityOperation: SecurityOperation.View
    },
    canActivate: [PermisssionGuard]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BaoCaoClsSoThongKeRoutingModule { }
