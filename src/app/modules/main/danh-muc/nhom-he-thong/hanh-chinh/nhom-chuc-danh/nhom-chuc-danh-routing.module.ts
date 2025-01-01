import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SecurityOperation } from 'src/app/shared/enum/security-operation.enum';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import { PermisssionGuard } from 'src/app/core/guards/permission-guard.service';

import { NhomChucDanhListComponent } from './nhom-chuc-danh-list/nhom-chuc-danh-list.component';
import { NhomChucDanhCreateComponent } from './nhom-chuc-danh-create/nhom-chuc-danh-create.component';
import { NhomChucDanhUpdateComponent } from './nhom-chuc-danh-update/nhom-chuc-danh-update.component';

const routes: Routes = [
  {
    path: '',
    component: NhomChucDanhListComponent,
    data: {
      title: 'Danh sách nhóm chức danh',
      DocumentType: DocumentType.DanhMucNhomChucDanh,
      SecurityOperation: SecurityOperation.View
    },
    canActivate: [PermisssionGuard]
  },
  {
    path: 'them',
    component: NhomChucDanhCreateComponent,
    data: {
      title: 'Thêm tên nhóm chức danh',
      DocumentType: DocumentType.DanhMucNhomChucDanh,
      SecurityOperation: SecurityOperation.Add
    },
    canActivate: [PermisssionGuard]
  },
  {
    path: 'chinh-sua/:id',
    component: NhomChucDanhUpdateComponent,
    data: {
      title: 'Chỉnh sửa nhóm chức danh',
      DocumentType: DocumentType.DanhMucNhomChucDanh,
      SecurityOperation: SecurityOperation.Update
    },
    canActivate: [PermisssionGuard]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NhomChucDanhRoutingModule { }
