import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChucVuListComponent } from './chuc-vu-list/chuc-vu-list.component';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import { SecurityOperation } from 'src/app/shared/enum/security-operation.enum';
import { PermisssionGuard } from 'src/app/core/guards/permission-guard.service';
import { ChucVuCreateComponent } from './chuc-vu-create/chuc-vu-create.component';
import { ChucVuUpdateComponent } from './chuc-vu-update/chuc-vu-update.component';

const routes: Routes = [
  {
    path: '',
    component: ChucVuListComponent,
    data: {
      title: 'Danh mục chức vụ',
      DocumentType: DocumentType.DanhMucChucVu,
      SecurityOperation: SecurityOperation.View
    },
    canActivate: [PermisssionGuard]
  },
  {
    path: 'them',
    component: ChucVuCreateComponent,
    data: {
      title: 'Thêm chức vụ',
      DocumentType: DocumentType.DanhMucChucVu,
      SecurityOperation: SecurityOperation.Add
    },
    canActivate: [PermisssionGuard]
  },
  {
    path: 'chinh-sua/:id',
    component: ChucVuUpdateComponent,
    data: {
      title: 'Chỉnh sửa chức vụ',
      DocumentType: DocumentType.DanhMucChucVu,
      SecurityOperation: SecurityOperation.Update
    },
    canActivate: [PermisssionGuard]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChucVuRoutingModule { }
