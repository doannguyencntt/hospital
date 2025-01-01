import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import { SecurityOperation } from 'src/app/shared/enum/security-operation.enum';
import { PermisssionGuard } from 'src/app/core/guards/permission-guard.service';
import { ChiSoXetNghiemListComponent } from './chi-so-xet-nghiem-list/chi-so-xet-nghiem-list.component';
const routes: Routes = [
  {
    path: '',
    component: ChiSoXetNghiemListComponent,
    data: {
      title: 'Chỉ Số Xét Nghiệm',      
      DocumentType: DocumentType.ChiSoXetNghiem,
      SecurityOperation:SecurityOperation.View
    },
    canActivate: [PermisssionGuard]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChiSoXetNghiemRoutingModule { }
