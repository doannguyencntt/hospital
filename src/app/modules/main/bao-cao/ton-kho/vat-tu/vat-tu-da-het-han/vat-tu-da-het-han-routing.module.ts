import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PermisssionGuard } from 'src/app/core/guards/permission-guard.service';
import { SecurityOperation } from 'src/app/shared/enum/security-operation.enum';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import { VatTuDaHetHanListComponent } from './vat-tu-da-het-han-list/vat-tu-da-het-han-list.component';

const routes: Routes = [{
  path: '',
  component: VatTuDaHetHanListComponent,
  data: {
    title: 'Danh sách vật tư đã hết hạn',
    DocumentType: DocumentType.VatTuDaHetHan,
    SecurityOperation: SecurityOperation.View
  },
  canActivate: [PermisssionGuard]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class VatTuDaHetHanRoutingModule { }