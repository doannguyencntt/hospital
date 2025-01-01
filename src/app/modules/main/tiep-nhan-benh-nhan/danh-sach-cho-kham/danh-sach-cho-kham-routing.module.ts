import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DanhSachChoKhamListComponent } from './danh-sach-cho-kham-list/danh-sach-cho-kham-list.component';

import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import { SecurityOperation } from 'src/app/shared/enum/security-operation.enum';
import { PermisssionGuard } from 'src/app/core/guards/permission-guard.service';
import { DanhSachChoKhamPdfComponent } from './danh-sach-cho-kham-pdf/danh-sach-cho-kham-pdf.component';
import { DanhSachChoKhamUpdateComponent } from './danh-sach-cho-kham-update/danh-sach-cho-kham-update.component';
const routes: Routes = [
  {
    path: '',
    component: DanhSachChoKhamListComponent,
    data: {
      title: 'Danh Sách Tiếp Nhận',      
      DocumentType: DocumentType.DanhSachChoKham,
      SecurityOperation:SecurityOperation.View
    },
    canActivate: [PermisssionGuard]
  },
  {
    path: 'pdf',
    component: DanhSachChoKhamPdfComponent,
    data: {
      title: 'Danh Sách Tiếp Nhận PDF',      
      DocumentType: DocumentType.DanhSachChoKham,
      SecurityOperation:SecurityOperation.View
    },
    canActivate: [PermisssionGuard]
  },
  {
    path: 'chinh-sua/:id',
    component: DanhSachChoKhamUpdateComponent,
    data: {
      title: 'Chỉnh sửa yêu cầu khám bệnh',
      DocumentType: DocumentType.DanhSachChoKham,
      SecurityOperation: SecurityOperation.Update
    },
    canActivate: [PermisssionGuard]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DanhSachChoKhamRoutingModule { }
