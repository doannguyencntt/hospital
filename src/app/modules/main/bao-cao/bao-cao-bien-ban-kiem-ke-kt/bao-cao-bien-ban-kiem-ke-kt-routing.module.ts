import { NgModule } from '@angular/core';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import { RouterModule, Routes } from '@angular/router';
import { BaoCaoBienBanKiemKeKtListComponent } from './bao-cao-bien-ban-kiem-ke-kt-list/bao-cao-bien-ban-kiem-ke-kt-list.component';
import { SecurityOperation } from 'src/app/shared/enum/security-operation.enum';
import { PermisssionGuard } from 'src/app/core/guards/permission-guard.service';

const routes: Routes = [
  {
    path: '',
    component: BaoCaoBienBanKiemKeKtListComponent,
    data: {
      title: 'Báo cáo biên bản kiểm kê',
      DocumentType: DocumentType.BaoCaoBienBanKiemKeKT,
      SecurityOperation: SecurityOperation.View
    },
    canActivate: [PermisssionGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BaoCaoBienBanKiemKeKtRoutingModule { }