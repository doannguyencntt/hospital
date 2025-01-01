import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SecurityOperation } from 'src/app/shared/enum/security-operation.enum';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import { PermisssionGuard } from 'src/app/core/guards/permission-guard.service';

import { HoSoNhanVienListComponent } from './ho-so-nhan-vien-list/ho-so-nhan-vien-list.component';
import { HoSoNhanVienCreateComponent } from './ho-so-nhan-vien-create/ho-so-nhan-vien-create.component';
import { HoSoNhanVienUpdateComponent } from './ho-so-nhan-vien-update/ho-so-nhan-vien-update.component';

const routes: Routes = [
  {
    path: '',
    component: HoSoNhanVienListComponent,
    data: {
      title: 'Danh sách hồ sơ nhân viên',
      DocumentType: DocumentType.DanhMucNhanVien,
      SecurityOperation: SecurityOperation.View
    },
    canActivate: [PermisssionGuard]
  },
  {
    path: 'them',
    component: HoSoNhanVienCreateComponent,
    data: {
      title: 'Thêm nhân viên',
      DocumentType: DocumentType.DanhMucNhanVien,
      SecurityOperation: SecurityOperation.Add
    },
    canActivate: [PermisssionGuard]
  },
  {
    path: 'chinh-sua/:id',
    component: HoSoNhanVienUpdateComponent,
    data: {
      title: 'Chỉnh sửa nhân viên',
      DocumentType: DocumentType.DanhMucNhanVien,
      SecurityOperation: SecurityOperation.Update
    },
    canActivate: [PermisssionGuard]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HoSoNhanVienRoutingModule { }
