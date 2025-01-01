import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SecurityOperation } from 'src/app/shared/enum/security-operation.enum';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import { PermisssionGuard } from 'src/app/core/guards/permission-guard.service';

import { NhomDichVuKyThuatListComponent } from './nhom-dich-vu-ky-thuat-list/nhom-dich-vu-ky-thuat-list.component';

const routes: Routes = [
  {
      path: '',
      component: NhomDichVuKyThuatListComponent,
      data: {
          title: 'Danh mục nhóm dịch vụ kỹ thuật',
          DocumentType: DocumentType.DanhMucNhomDichVuKyThuat,
          SecurityOperation: SecurityOperation.View
      },
      canActivate: [PermisssionGuard]
   },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NhomDichVuKyThuatRoutingModule { }
