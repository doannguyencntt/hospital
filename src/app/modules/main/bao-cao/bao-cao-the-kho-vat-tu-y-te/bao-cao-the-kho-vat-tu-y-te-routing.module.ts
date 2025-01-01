import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SecurityOperation } from 'src/app/shared/enum/security-operation.enum';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import { PermisssionGuard } from 'src/app/core/guards/permission-guard.service';
import { BaoCaoTheKhoVatTuListComponent } from './bao-cao-the-kho-vat-tu-y-te-list/bao-cao-the-kho-vat-tu-y-te-list.component';


const routes: Routes = [
  {
    path: '',
    component: BaoCaoTheKhoVatTuListComponent,
    data: {
      title: 'Báo cáo thẻ kho vật tư',
      DocumentType: DocumentType.BaoCaoTheKhoVatTuYTe,
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
