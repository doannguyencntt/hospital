import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SecurityOperation } from 'src/app/shared/enum/security-operation.enum';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import { PermisssionGuard } from 'src/app/core/guards/permission-guard.service';
import { BaoCaoTonKhoVatTuYteListComponent } from './bao-cao-ton-kho-vat-tu-y-te-list/bao-cao-ton-kho-vat-tu-y-te-list.component';

const routes: Routes = [
  {
    path: '',
    component: BaoCaoTonKhoVatTuYteListComponent,
    data: {
      title: 'Báo cáo xuất nhập tồn vật tư y tế',
      DocumentType: DocumentType.BaoCaoTonKhoVatTuYTe,
      SecurityOperation: SecurityOperation.View
    },
    canActivate: [PermisssionGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BaoCaoTonKhoRoutingModule { }
