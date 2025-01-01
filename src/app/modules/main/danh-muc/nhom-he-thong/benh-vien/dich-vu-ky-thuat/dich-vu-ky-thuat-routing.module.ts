import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SecurityOperation } from 'src/app/shared/enum/security-operation.enum';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import { PermisssionGuard } from 'src/app/core/guards/permission-guard.service';

import { DichVuKyThuatListComponent } from './dich-vu-ky-thuat-list/dich-vu-ky-thuat-list.component';


const routes: Routes = [
  {
    path: '',
    component: DichVuKyThuatListComponent,
    data: {
      title: 'Danh sách tên bệnh viện',
      DocumentType: DocumentType.DanhMucDichVuKyThuat,
      SecurityOperation: SecurityOperation.View
    },
    canActivate: [PermisssionGuard]
  },


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DichVuKyThuatRoutingModule { }
