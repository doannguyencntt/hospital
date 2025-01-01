import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SecurityOperation } from 'src/app/shared/enum/security-operation.enum';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import { PermisssionGuard } from 'src/app/core/guards/permission-guard.service';

import { DuocPhamBenhVienListComponent } from './duoc-pham-benh-vien-list/duoc-pham-benh-vien-list.component';
import { DuocPhamBenhVienCreateComponent } from './duoc-pham-benh-vien-create/duoc-pham-benh-vien-create.component';
import { DuocPhamBenhVienUpdateComponent } from './duoc-pham-benh-vien-update/duoc-pham-benh-vien-update.component';

const routes: Routes = [
  {
      path: '',
      component: DuocPhamBenhVienListComponent,
      data: {
          title: 'Danh mục dược phẩm bệnh viện',
          DocumentType: DocumentType.DanhMucDuocPhamBenhVien,
          SecurityOperation: SecurityOperation.View
      },
      canActivate: [PermisssionGuard]
   },
  {
      path: 'them',
      component: DuocPhamBenhVienCreateComponent,
      data: {
          title: 'Thêm dược phẩm bệnh viện',
          DocumentType: DocumentType.DanhMucDuocPhamBenhVien,
          SecurityOperation: SecurityOperation.Add
      },
      canActivate: [PermisssionGuard]
  },
  {
      path: 'chinh-sua/:id',
      component: DuocPhamBenhVienUpdateComponent,
      data: {
          title: 'Chỉnh sửa dược phẩm bệnh viện',
          DocumentType: DocumentType.DanhMucDuocPhamBenhVien,
          SecurityOperation: SecurityOperation.Update
      },
      canActivate: [PermisssionGuard]
   }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DuocPhamBenhVienRoutingModule { }
