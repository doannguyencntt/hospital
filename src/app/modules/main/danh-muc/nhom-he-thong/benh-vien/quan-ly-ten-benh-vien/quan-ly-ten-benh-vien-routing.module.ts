import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SecurityOperation } from 'src/app/shared/enum/security-operation.enum';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import { PermisssionGuard } from 'src/app/core/guards/permission-guard.service';

import { QuanLyTenBenhVienListComponent } from './quan-ly-ten-benh-vien-list/quan-ly-ten-benh-vien-list.component';
import { QuanLyTenBenhVienCreateComponent } from './quan-ly-ten-benh-vien-create/quan-ly-ten-benh-vien-create.component';
import { QuanLyTenBenhVienUpdateComponent } from './quan-ly-ten-benh-vien-update/quan-ly-ten-benh-vien-update.component';




const routes: Routes = [
  {
    path: '',
    component: QuanLyTenBenhVienListComponent,
    data: {
      title: 'Danh sách tên bệnh viện',
      DocumentType: DocumentType.DanhMucBenhVien,
      SecurityOperation: SecurityOperation.View
    },
    canActivate: [PermisssionGuard]
  },
  {
    path: 'them',
    component: QuanLyTenBenhVienCreateComponent,
    data: {
      title: 'Thêm tên bệnh viện',
      DocumentType: DocumentType.DanhMucBenhVien,
      SecurityOperation: SecurityOperation.Add
    },
    canActivate: [PermisssionGuard]
  },
  {
    path: 'chinh-sua/:id',
    component: QuanLyTenBenhVienUpdateComponent,
    data: {
      title: 'Cập nhật tên bệnh viện',
      DocumentType: DocumentType.DanhMucBenhVien,
      SecurityOperation: SecurityOperation.Update
    },
    canActivate: [PermisssionGuard]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class QuanLyTenBenhVienRoutingModule { }
