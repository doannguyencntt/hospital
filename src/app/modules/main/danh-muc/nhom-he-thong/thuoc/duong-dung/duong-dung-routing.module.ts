import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DuongDungListComponent } from './duong-dung-list/duong-dung-list.component';
import { DuongDungCreateComponent } from './duong-dung-create/duong-dung-create.component';
import { DuongDungUpdateComponent } from './duong-dung-update/duong-dung-update.component';

import { SecurityOperation } from 'src/app/shared/enum/security-operation.enum';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import { PermisssionGuard } from 'src/app/core/guards/permission-guard.service';

const routes: Routes = [
  {
    path: '',
    component: DuongDungListComponent,
    data: {
      title: 'Danh mục đường dùng',
      DocumentType: DocumentType.DanhMucDuongDung,
      SecurityOperation: SecurityOperation.View
    },
    canActivate: [PermisssionGuard]
  },
  {
    path: 'them',
    component: DuongDungCreateComponent,
    data: {
      title: 'Thêm đường dùng',
      DocumentType: DocumentType.DanhMucDuongDung,
      SecurityOperation: SecurityOperation.Add
    },
    canActivate: [PermisssionGuard]
  },
  {
    path: 'chinh-sua/:id',
    component: DuongDungUpdateComponent,
    data: {
      title: 'Chỉnh sửa đường dùng',
      DocumentType: DocumentType.DanhMucDuongDung,
      SecurityOperation: SecurityOperation.Update
    },
    canActivate: [PermisssionGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DuongDungRoutingModule { }
