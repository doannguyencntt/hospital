import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import { SecurityOperation } from 'src/app/shared/enum/security-operation.enum';
import { PermisssionGuard } from 'src/app/core/guards/permission-guard.service';
import { TuDienDichVuKyThuatListComponent } from './tu-dien-dich-vu-ky-thuat/tu-dien-dich-vu-ky-thuat-list.component';
const routes: Routes = [
  {
    path: '',
    component: TuDienDichVuKyThuatListComponent,
    data: {
      title: 'Từ điển dịch vụ kỹ thuật',      
      DocumentType: DocumentType.TuDienDichVuKyThuat,
      SecurityOperation:SecurityOperation.View
    },
    canActivate: [PermisssionGuard]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TuDienDichVuKyThuatRoutingModule { }
