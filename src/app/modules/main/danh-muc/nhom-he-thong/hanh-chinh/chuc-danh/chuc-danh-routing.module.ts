import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { ChucDanhSharedComponent } from './chuc-danh-shared/chuc-danh-shared.component';
import { ChucDanhListComponent } from './chuc-danh-list/chuc-danh-list.component';
import { ChucDanhCreateComponent } from './chuc-danh-create/chuc-danh-create.component';
import { ChucDanhUpdateComponent } from './chuc-danh-update/chuc-danh-update.component';

import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import { SecurityOperation } from 'src/app/shared/enum/security-operation.enum';
import { PermisssionGuard } from 'src/app/core/guards/permission-guard.service';

const routes: Routes = [
  {
    path: '',
    component: ChucDanhListComponent,
    data: {
      title: 'Danh sách chức danh',      
      DocumentType: DocumentType.DanhMucChucDanh,
      SecurityOperation:SecurityOperation.View
    },
    canActivate: [PermisssionGuard]
  },
  {
    path: 'them',
    component: ChucDanhCreateComponent,
    data: {
      title: 'Thêm chức danh',      
      DocumentType: DocumentType.DanhMucChucDanh,
      SecurityOperation:SecurityOperation.Add
    },
    canActivate: [PermisssionGuard]
  },
  {
    path: 'chinh-sua/:id',
    component: ChucDanhUpdateComponent,
    data: {
      title: 'Chỉnh sửa chức danh',
      DocumentType: DocumentType.DanhMucChucDanh,
      SecurityOperation: SecurityOperation.Update
    },
    canActivate: [PermisssionGuard]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChucDanhRoutingModule { }
