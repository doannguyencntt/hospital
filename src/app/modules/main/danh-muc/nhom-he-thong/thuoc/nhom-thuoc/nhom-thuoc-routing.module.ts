import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SecurityOperation } from 'src/app/shared/enum/security-operation.enum';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import { PermisssionGuard } from 'src/app/core/guards/permission-guard.service';

import { NhomThuocListComponent } from './nhom-thuoc-list/nhom-thuoc-list.component';

const routes: Routes = [
  {
      path: '',
      component: NhomThuocListComponent,
      data: {
          title: 'Danh mục nhóm thuốc',
          DocumentType: DocumentType.DanhMucNhomThuoc,
          SecurityOperation: SecurityOperation.View
      },
      canActivate: [PermisssionGuard]
   }
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NhomThuocRoutingModule { }
