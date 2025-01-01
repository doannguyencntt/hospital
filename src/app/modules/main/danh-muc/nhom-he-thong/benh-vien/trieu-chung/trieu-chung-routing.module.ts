import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SecurityOperation } from 'src/app/shared/enum/security-operation.enum';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import { PermisssionGuard } from 'src/app/core/guards/permission-guard.service';

import { TrieuChungListComponent } from './trieu-chung-list/trieu-chung-list.component';
import { TrieuChungCreateComponent } from './trieu-chung-create/trieu-chung-create.component';
import { TrieuChungUpdateComponent } from './trieu-chung-update/trieu-chung-update.component';

const routes: Routes = [
  {
    path: '',
    component: TrieuChungListComponent,
    data: {
      title: 'Danh mục triệu chứng',
      DocumentType: DocumentType.DanhMucTrieuChung,
      SecurityOperation: SecurityOperation.View
    },
    canActivate: [PermisssionGuard]
  },
  {
    path: 'them',
    component: TrieuChungCreateComponent,
    data: {
      title: 'Thêm triệu chứng',
      DocumentType: DocumentType.DanhMucTrieuChung,
      SecurityOperation: SecurityOperation.Add
    },
    canActivate: [PermisssionGuard]
  },
  {
    path: 'them/:id/:isShowView',
    component: TrieuChungCreateComponent,
    data: {
      title: 'Thêm triệu chứng',
      DocumentType: DocumentType.DanhMucTrieuChung,
      SecurityOperation: SecurityOperation.Add
    },
    canActivate: [PermisssionGuard]
  },
  {
    path: 'chinh-sua/:id/:isShowView',
    component: TrieuChungUpdateComponent,
    data: {
      title: 'Chỉnh sửa triệu chứng',
      DocumentType: DocumentType.DanhMucTrieuChung,
      SecurityOperation: SecurityOperation.Update
    },
    canActivate: [PermisssionGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TrieuChungRoutingModule { }
