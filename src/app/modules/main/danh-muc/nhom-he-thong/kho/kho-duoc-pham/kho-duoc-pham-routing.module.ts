import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { KhoDuocPhamListComponent } from './kho-duoc-pham-list/kho-duoc-pham-list.component';
import { KhoDuocPhamCreateComponent } from './kho-duoc-pham-create/kho-duoc-pham-create.component';
import { KhoDuocPhamUpdateComponent } from './kho-duoc-pham-update/kho-duoc-pham-update.component';
import { SecurityOperation } from 'src/app/shared/enum/security-operation.enum';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import { PermisssionGuard } from 'src/app/core/guards/permission-guard.service';

const routes: Routes = [
  {
      path: '',
      component: KhoDuocPhamListComponent,
      data: {
          title: 'Danh Mục Kho Dược Phẩm',
          DocumentType: DocumentType.DanhMucKhoDuocPham,
          SecurityOperation: SecurityOperation.View
      },
      canActivate: [PermisssionGuard]
  },
  {
      path: 'them',
      component: KhoDuocPhamCreateComponent,
      data: {
          title: 'Thêm Kho Dược Phẩm',
          DocumentType: DocumentType.DanhMucKhoDuocPham,
          SecurityOperation: SecurityOperation.Add
      },
      canActivate: [PermisssionGuard]
  },
  {
      path: 'chinh-sua/:id',
      component: KhoDuocPhamUpdateComponent,
      data: {
          title: 'Chỉnh Sửa Kho Dược Phẩm',
          DocumentType: DocumentType.DanhMucKhoDuocPham,
          SecurityOperation: SecurityOperation.Update
      },
      canActivate: [PermisssionGuard]
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class KhoDuocPhamRoutingModule { }
