import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import { SecurityOperation } from 'src/app/shared/enum/security-operation.enum';
import { PermisssionGuard } from 'src/app/core/guards/permission-guard.service';
import { DanTocListComponent } from './dan-toc-list/dan-toc-list.component';
import { DanTocCreateComponent } from './dan-toc-create/dan-toc-create.component';
import { DanTocUpdateComponent } from './dan-toc-update/dan-toc-update.component';
const routes: Routes = [
  {
    path: '',
    component: DanTocListComponent,
    data: {
      title: 'Danh sách dân tộc',      
      DocumentType: DocumentType.DanToc,
      SecurityOperation:SecurityOperation.View
    },
    canActivate: [PermisssionGuard]
   },
  {
    path: 'them',
    component: DanTocCreateComponent,
    data: {
      title: 'Thêm dân tộc',      
      DocumentType: DocumentType.DanToc,
      SecurityOperation:SecurityOperation.Add
    },
    canActivate: [PermisssionGuard]
  },
  {
    path: 'chinh-sua/:id',
    component: DanTocUpdateComponent,
    data: {
      title: 'Chỉnh sửa dân tộc',
      DocumentType: DocumentType.DanToc,
      SecurityOperation: SecurityOperation.Update
    },
    canActivate: [PermisssionGuard]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DanTocRoutingModule { }
