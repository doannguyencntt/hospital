import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import { BaoCaoTonKhoKtListComponent } from './bao-cao-ton-kho-kt-list/bao-cao-ton-kho-kt-list.component';
import { PermisssionGuard } from 'src/app/core/guards/permission-guard.service';
import { SecurityOperation } from 'src/app/shared/enum/security-operation.enum';

const routes: Routes = [
  {
    path: '',
    component: BaoCaoTonKhoKtListComponent,
    data: {
      title: 'Báo cáo xuất nhập tồn',
      DocumentType: DocumentType.BaoCaoTonKhoKT,
      SecurityOperation: SecurityOperation.View
    },
    canActivate: [PermisssionGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BaoCaoTonKhoKtRoutingModule { }