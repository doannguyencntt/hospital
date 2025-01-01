import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NhomVatTuListComponent } from './nhom-vat-tu-list/nhom-vat-tu-list.component';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import { SecurityOperation } from 'src/app/shared/enum/security-operation.enum';
import { PermisssionGuard } from 'src/app/core/guards/permission-guard.service';

const routes: Routes = [
  {
    path: '',
    component: NhomVatTuListComponent,
    data: {
      title: 'Danh mục nhóm vật tư',
      DocumentType: DocumentType.DanhMucNhomVatTuYTe,
      SecurityOperation: SecurityOperation.View
    },
    canActivate: [PermisssionGuard]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NhomVatTuRoutingModule { }
