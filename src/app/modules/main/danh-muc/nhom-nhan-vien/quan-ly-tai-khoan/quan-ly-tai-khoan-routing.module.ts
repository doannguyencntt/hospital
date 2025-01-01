import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import { QuanLyTaiKhoanListComponent } from './quan-ly-tai-khoan-list/quan-ly-tai-khoan-list.component';
import { SecurityOperation } from 'src/app/shared/enum/security-operation.enum';
import { PermisssionGuard } from 'src/app/core/guards/permission-guard.service';
import { QuanLyTaiKhoanCreateComponent } from './quan-ly-tai-khoan-create/quan-ly-tai-khoan-create.component';

const routes: Routes = [
  {
    path: '',
    component: QuanLyTaiKhoanListComponent,
    data: {
      title: 'Quản lý tài khoản',      
      DocumentType: DocumentType.User,
      SecurityOperation:SecurityOperation.View
    },
    canActivate: [PermisssionGuard]
  },
  {
    path: 'them',
    component: QuanLyTaiKhoanCreateComponent,
    data: {
      title: 'Tạo tài khoản',      
      DocumentType: DocumentType.User,
      SecurityOperation:SecurityOperation.Add
    },
    canActivate: [PermisssionGuard]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class QuanLyTaiKhoanRoutingModule { }
