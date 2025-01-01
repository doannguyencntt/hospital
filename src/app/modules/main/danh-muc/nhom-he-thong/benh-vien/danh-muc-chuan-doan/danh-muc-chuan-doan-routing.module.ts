import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import { SecurityOperation } from 'src/app/shared/enum/security-operation.enum';
import { PermisssionGuard } from 'src/app/core/guards/permission-guard.service';

import { DanhMucChuanDoanListComponent } from './danh-muc-chuan-doan-list/danh-muc-chuan-doan-list.component';
import { DanhMucChuanDoanCreateComponent } from './danh-muc-chuan-doan-create/danh-muc-chuan-doan-create.component';
import { DanhMucChuanDoanUpdateComponent } from './danh-muc-chuan-doan-update/danh-muc-chuan-doan-update.component';

const routes: Routes = [
  {
    path: '',
    component: DanhMucChuanDoanListComponent,
    data: {
      title: 'Nhóm Chẩn Đoán',
      DocumentType: DocumentType.DanhMucNhomChanDoan,
      SecurityOperation: SecurityOperation.View
    },
    canActivate: [PermisssionGuard]
  },
  {
    path: 'them',
    component: DanhMucChuanDoanCreateComponent,
    data: {
      title: 'Thêm Nhóm Chẩn Đoán',
      DocumentType: DocumentType.DanhMucNhomChanDoan,
      SecurityOperation: SecurityOperation.Add
    },
    canActivate: [PermisssionGuard]
  },
  {
    path: 'chinh-sua/:id',
    component: DanhMucChuanDoanUpdateComponent,
    data: {
      title: 'Chỉnh sửa Nhóm Chẩn Đoán',
      DocumentType: DocumentType.DanhMucNhomChanDoan,
      SecurityOperation: SecurityOperation.Update
    },
    canActivate: [PermisssionGuard]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DanhMucChuanDoanRoutingModule { }
