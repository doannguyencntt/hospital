import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SecurityOperation } from 'src/app/shared/enum/security-operation.enum';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import { PermisssionGuard } from 'src/app/core/guards/permission-guard.service';

import { ViTriKhoDuocPhamCreateComponent } from './vi-tri-kho-duoc-pham-create/vi-tri-kho-duoc-pham-create.component';
import { ViTriKhoDuocPhamUpdateComponent } from './vi-tri-kho-duoc-pham-update/vi-tri-kho-duoc-pham-update.component';
import { ViTriKhoDuocPhamListComponent } from './vi-tri-kho-duoc-pham-list/vi-tri-kho-duoc-pham-list.component';

const routes: Routes = [
  {
      path: '',
      component: ViTriKhoDuocPhamListComponent,
      data: {
          title: 'Danh mục vị trí kho dược phẩm',
          DocumentType: DocumentType.DanhMucKhoDuocPhamViTri,
          SecurityOperation: SecurityOperation.View
      },
      canActivate: [PermisssionGuard]
   },
  {
      path: 'them',
      component: ViTriKhoDuocPhamCreateComponent,
      data: {
          title: 'Thêm vị trí kho dược phẩm',
          DocumentType: DocumentType.DanhMucKhoDuocPhamViTri,
          SecurityOperation: SecurityOperation.Add
      },
      canActivate: [PermisssionGuard]
  },
  {
      path: 'chinh-sua/:id',
      component: ViTriKhoDuocPhamUpdateComponent,
      data: {
          title: 'Chỉnh sửa vị trí kho dược phẩm',
          DocumentType: DocumentType.DanhMucKhoDuocPhamViTri,
          SecurityOperation: SecurityOperation.Update
      },
      canActivate: [PermisssionGuard]
   }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ViTriKhoDuocPhamRoutingModule { }
