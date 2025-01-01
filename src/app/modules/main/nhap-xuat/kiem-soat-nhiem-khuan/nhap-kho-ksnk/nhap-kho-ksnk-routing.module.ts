import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PermisssionGuard } from 'src/app/core/guards/permission-guard.service';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import { SecurityOperation } from 'src/app/shared/enum/security-operation.enum';

import { NhapKhoKSNKListComponent } from './nhap-kho-ksnk-list/nhap-kho-ksnk-list.component';
import { NhapKhoKSNKCreateComponent } from './nhap-kho-ksnk-create/nhap-kho-ksnk-create.component';
import { NhapKhoKSNKUpdateComponent } from './nhap-kho-ksnk-update/nhap-kho-ksnk-update.component';
import { NhapKhoKSNKTuChoiDuyetComponent } from './nhap-kho-ksnk-tu-choi-duyet/nhap-kho-tu-choi-duyet.component';
import { NhapKhoKSNKTuDaDuyetComponent } from './nhap-kho-ksnk-tu-da-duyet/nhap-kho-tu-da-duyet.component';


const routes: Routes = [
  {
    path: '',
    component: NhapKhoKSNKListComponent,
    data: {
      title: 'Danh Sách Nhập Kho Vật Tư Nhóm KSNK',
      DocumentType: DocumentType.NhapVatTuThuocNhomKSNK,
      SecurityOperation: SecurityOperation.View
    },
    canActivate: [PermisssionGuard]
  },
  {
    path: 'them',
    component: NhapKhoKSNKCreateComponent,
    data: {
      title: 'Thêm Nhập Kho Vật Tư Nhóm KSNK',
      DocumentType: DocumentType.NhapVatTuThuocNhomKSNK,
      SecurityOperation: SecurityOperation.Add
    },
    canActivate: [PermisssionGuard]
  },
  {
    path: 'chinh-sua/:id',
    component: NhapKhoKSNKUpdateComponent,
    data: {
      title: 'Chỉnh Sửa Nhập Kho Vật Tư Nhóm KSNK',
      DocumentType: DocumentType.NhapVatTuThuocNhomKSNK,
      SecurityOperation: SecurityOperation.Update
    },
    canActivate: [PermisssionGuard]
  },
  {
    path: 'tu-choi-duyet/:id',
    component: NhapKhoKSNKTuChoiDuyetComponent,
    data: {
      title: 'Chỉnh Sửa Nhập Kho Vật Tư Nhóm KSNK',
      DocumentType: DocumentType.NhapVatTuThuocNhomKSNK,
      SecurityOperation: SecurityOperation.Update
    },
    canActivate: [PermisssionGuard]
  },
  {
    path: 'da-duyet/:id',
    component: NhapKhoKSNKTuDaDuyetComponent,
    data: {
      title: 'Chỉnh Sửa Nhập Kho Vật Tư Nhóm KSNK',
      DocumentType: DocumentType.NhapVatTuThuocNhomKSNK,
      SecurityOperation: SecurityOperation.Update
    },
    canActivate: [PermisssionGuard]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NhapKhoKSNKRoutingModule { }
