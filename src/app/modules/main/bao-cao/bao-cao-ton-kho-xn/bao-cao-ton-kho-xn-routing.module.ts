import { NgModule } from '@angular/core';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import { BaoCaoTonKhoXnListComponent } from './bao-cao-ton-kho-xn-list/bao-cao-ton-kho-xn-list.component';
import { RouterModule, Routes } from '@angular/router';
import { SecurityOperation } from 'src/app/shared/enum/security-operation.enum';
import { PermisssionGuard } from 'src/app/core/guards/permission-guard.service';

const routes: Routes = [
  {
    path: '',
    component: BaoCaoTonKhoXnListComponent,
    data: {
      title: 'Báo cáo xuất nhập tồn',
      DocumentType: DocumentType.BaoCaoTonKhoXN,
      SecurityOperation: SecurityOperation.View
    },
    canActivate: [PermisssionGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BaoCaoTonKhoXnRoutingModule { }