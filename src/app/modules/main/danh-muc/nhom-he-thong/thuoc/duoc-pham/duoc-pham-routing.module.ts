import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SecurityOperation } from 'src/app/shared/enum/security-operation.enum';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import { PermisssionGuard } from 'src/app/core/guards/permission-guard.service';

import {DuocPhamCreateComponent} from './duoc-pham-create/duoc-pham-create.component';
import {DuocPhamUpdateComponent} from './duoc-pham-update/duoc-pham-update.component';
import {DuocPhamListComponent} from './duoc-pham-list/duoc-pham-list.component';


const routes: Routes = [
  {
    path: '',
    component:DuocPhamListComponent,
    data: {
      title: 'Danh mục dược phẩm',
      DocumentType: DocumentType.DanhMucDuocPham,
      SecurityOperation: SecurityOperation.View
    },
    canActivate: [PermisssionGuard]
  },
  {
    path: 'them',
    component: DuocPhamCreateComponent,
    data: {
      title: 'Thêm dược phẩm',
      DocumentType: DocumentType.DanhMucDuocPham,
      SecurityOperation: SecurityOperation.Add
    },
    canActivate: [PermisssionGuard]
  },
  {
    path: 'chinh-sua/:id',
    component: DuocPhamUpdateComponent,
    data: {
      title: 'Chỉnh sửa dược phẩm',
      DocumentType: DocumentType.DanhMucDuocPham,
      SecurityOperation: SecurityOperation.Update
    },
    canActivate: [PermisssionGuard]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class  DuocPhamRoutingModule { }
