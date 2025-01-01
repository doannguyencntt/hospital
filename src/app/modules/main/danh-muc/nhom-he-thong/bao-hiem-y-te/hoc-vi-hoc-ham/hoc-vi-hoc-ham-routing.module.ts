import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SecurityOperation } from 'src/app/shared/enum/security-operation.enum';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import { PermisssionGuard } from 'src/app/core/guards/permission-guard.service';

import { HocViHocHamListComponent } from './hoc-vi-hoc-ham-list/hoc-vi-hoc-ham-list.component';
import { HocViHocHamShareComponent } from './hoc-vi-hoc-ham-share/hoc-vi-hoc-ham-share.component';
import { HocViHocHamCreateComponent } from './hoc-vi-hoc-ham-create/hoc-vi-hoc-ham-create.component';
import { HocViHocHamUpdateComponent } from './hoc-vi-hoc-ham-update/hoc-vi-hoc-ham-update.component';

const routes: Routes = [
  {
    path: '',
    component: HocViHocHamListComponent,
    data: {
      title: 'Danh sách học vị học hàm',
      DocumentType: DocumentType.DanhMucHocViHocHam,
      SecurityOperation: SecurityOperation.View
    },
    canActivate: [PermisssionGuard]
  },
  {
    path: 'them',
    component: HocViHocHamCreateComponent,
    data: {
      title: 'Thêm học vị học hàm',
      DocumentType: DocumentType.DanhMucHocViHocHam,
      SecurityOperation: SecurityOperation.Add
    },
    canActivate: [PermisssionGuard]
  },
  {
    path: 'chinh-sua/:id',
    component: HocViHocHamUpdateComponent,
    data: {
      title: 'Cập nhật học vị học hàm',
      DocumentType: DocumentType.DanhMucHocViHocHam,
      SecurityOperation: SecurityOperation.Update
    },
    canActivate: [PermisssionGuard]
   },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HocViHocHamRoutingModule { }
