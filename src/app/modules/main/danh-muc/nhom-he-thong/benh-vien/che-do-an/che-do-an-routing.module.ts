import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { CheDoAnSharedComponent } from './che-do-an-shared/che-do-an-shared.component';
import { CheDoAnListComponent } from './che-do-an-list/che-do-an-list.component';
import { CheDoAnCreateComponent } from './che-do-an-create/che-do-an-create.component';
import { CheDoAnUpdateComponent } from './che-do-an-update/che-do-an-update.component';

import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import { SecurityOperation } from 'src/app/shared/enum/security-operation.enum';
import { PermisssionGuard } from 'src/app/core/guards/permission-guard.service';

const routes: Routes = [
  {
    path: '',
    component: CheDoAnListComponent,
    data: {
      title: 'Danh sách chế độ ăn',      
      DocumentType: DocumentType.DanhMucCheDoAn,
      SecurityOperation:SecurityOperation.View
    },
    canActivate: [PermisssionGuard]
  },
  {
    path: 'them',
    component: CheDoAnCreateComponent,
    data: {
      title: 'Thêm chế độ ăn',      
      DocumentType: DocumentType.DanhMucCheDoAn,
      SecurityOperation:SecurityOperation.Add
    },
    canActivate: [PermisssionGuard]
  },
  {
    path: 'chinh-sua/:id',
    component: CheDoAnUpdateComponent,
    data: {
      title: 'Chỉnh sửa chế độ ăn',
      DocumentType: DocumentType.DanhMucCheDoAn,
      SecurityOperation: SecurityOperation.Update
    },
    canActivate: [PermisssionGuard]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CheDoAnRoutingModule { }
