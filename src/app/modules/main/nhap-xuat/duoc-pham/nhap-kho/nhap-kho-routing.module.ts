import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SecurityOperation } from 'src/app/shared/enum/security-operation.enum';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import { PermisssionGuard } from 'src/app/core/guards/permission-guard.service';

import { NhapKhoListComponent } from './nhap-kho-list/nhap-kho-list.component';
import { NhapKhoCreateComponent } from './nhap-kho-create/nhap-kho-create.component';
import { NhapKhoUpdateComponent } from './nhap-kho-update/nhap-kho-update.component';
import { NhapKhoTuChoiDuyetComponent } from './nhap-kho-tu-choi-duyet/nhap-kho-tu-choi-duyet.component';
import { NhapKhoTuDaDuyetComponent } from './nhap-kho-tu-da-duyet/nhap-kho-tu-da-duyet.component';

const routes: Routes = [
  {
    path: '',
    component: NhapKhoListComponent,
    data: {
      title: 'Danh Sách Nhập Kho Dược Phẩm',
      DocumentType: DocumentType.NhapKhoDuocPham,
      SecurityOperation: SecurityOperation.View
    },
    canActivate: [PermisssionGuard]
  },
  {
    path: 'them',
    component: NhapKhoCreateComponent,
    data: {
      title: 'Thêm Nhập Kho Dược Phẩm',
      DocumentType: DocumentType.NhapKhoDuocPham,
      SecurityOperation: SecurityOperation.Add
    },
    canActivate: [PermisssionGuard]
  },
  {
    path: 'chinh-sua/:id',
    component: NhapKhoUpdateComponent,
    data: {
      title: 'Chỉnh Sửa Nhập Kho Dược Phẩm',
      DocumentType: DocumentType.NhapKhoDuocPham,
      SecurityOperation: SecurityOperation.Update
    },
    canActivate: [PermisssionGuard]
  },
  {
    path: 'tu-choi-duyet/:id',
    component: NhapKhoTuChoiDuyetComponent,
    data: {
      title: 'Chỉnh Sửa Nhập Kho Dược Phẩm',
      DocumentType: DocumentType.NhapKhoDuocPham,
      SecurityOperation: SecurityOperation.Update
    },
    canActivate: [PermisssionGuard]
  },
  {
    path: 'da-duyet/:id',
    component: NhapKhoTuDaDuyetComponent,
    data: {
      title: 'Chỉnh Sửa Nhập Kho Dược Phẩm',
      DocumentType: DocumentType.NhapKhoDuocPham,
      SecurityOperation: SecurityOperation.Update
    },
    canActivate: [PermisssionGuard]
  },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NhapKhoRoutingModule { }
