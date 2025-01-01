import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SecurityOperation } from 'src/app/shared/enum/security-operation.enum';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import { PermisssionGuard } from 'src/app/core/guards/permission-guard.service';

import { NhaSanXuatListComponent } from './nha-san-xuat-list/nha-san-xuat-list.component';
import { NhaSanXuatCreateComponent } from '../../thuoc/nha-san-xuat/nha-san-xuat-create/nha-san-xuat-create.component';
import { NhaSanXuatUpdateComponent } from './nha-san-xuat-update/nha-san-xuat-update.component';

const routes: Routes = [
  {
      path: '',
      component: NhaSanXuatListComponent,
      data: {
          title: 'Danh mục nhà sản xuất',
          DocumentType: DocumentType.DanhMucNhaSanXuat,
          SecurityOperation: SecurityOperation.View
      },
      canActivate: [PermisssionGuard]
   },
  {
      path: 'them',
      component: NhaSanXuatCreateComponent,
      data: {
          title: 'Thêm nhà sản xuất',
          DocumentType: DocumentType.DanhMucNhaSanXuat,
          SecurityOperation: SecurityOperation.Add
      },
      canActivate: [PermisssionGuard]
  },
  {
      path: 'chinh-sua/:id',
      component: NhaSanXuatUpdateComponent,
      data: {
          title: 'Chỉnh sửa nhà sản xuất',
          DocumentType: DocumentType.DanhMucNhaSanXuat,
          SecurityOperation: SecurityOperation.Update
      },
      canActivate: [PermisssionGuard]
   }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NhaSanXuatRoutingModule { }
