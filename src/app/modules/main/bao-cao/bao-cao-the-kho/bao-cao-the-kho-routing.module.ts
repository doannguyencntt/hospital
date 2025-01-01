import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SecurityOperation } from 'src/app/shared/enum/security-operation.enum';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import { PermisssionGuard } from 'src/app/core/guards/permission-guard.service';
import { BaoCaoTheKhoListComponent } from './bao-cao-the-kho-list/bao-cao-the-kho-list.component';


const routes: Routes = [
  {
    path: '',
    component: BaoCaoTheKhoListComponent,
    data: {
      title: 'Báo cáo thẻ kho',
      DocumentType: DocumentType.BaoCaoTheKho,
      SecurityOperation: SecurityOperation.View
    },
    canActivate: [PermisssionGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BaoCaoTheKhoRoutingModule { }
