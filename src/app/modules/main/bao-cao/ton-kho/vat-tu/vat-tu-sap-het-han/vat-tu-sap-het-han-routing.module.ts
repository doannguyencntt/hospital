import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PermisssionGuard } from 'src/app/core/guards/permission-guard.service';
import { SecurityOperation } from 'src/app/shared/enum/security-operation.enum';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import { VatTuSapHetHanListComponent } from './vat-tu-sap-het-han-list/vat-tu-sap-het-han-list.component';

const routes: Routes = [{
  path: '',
  component: VatTuSapHetHanListComponent,
  data: {
    title: 'Danh sách vật tư sắp hết hạn',
    DocumentType: DocumentType.VatTuSapHetHan,
    SecurityOperation: SecurityOperation.View
  },
  canActivate: [PermisssionGuard]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class VatTuSapHetHanRoutingModule { }