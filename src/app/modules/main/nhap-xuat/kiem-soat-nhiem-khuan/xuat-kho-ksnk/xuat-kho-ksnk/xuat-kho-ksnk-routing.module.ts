import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import { PermisssionGuard } from 'src/app/core/guards/permission-guard.service';
import { SecurityOperation } from 'src/app/shared/enum/security-operation.enum';

import { XuatKhoKSNKListComponent } from './xuat-kho-ksnk-list/xuat-kho-ksnk-list.component';
import { XuatKhoKSNKCreateComponent } from './xuat-kho-ksnk-create/xuat-kho-ksnk-create.component';
import { XuatKhoKSNKUpdateComponent } from './xuat-kho-ksnk-update/xuat-kho-vat-tu-update.component';

const routes: Routes = [
  {
    path: '',
    component: XuatKhoKSNKListComponent,
    data: {
      title: 'Xuất Kho Kiểm Soát Nhiễm Khuẩn',
      DocumentType: DocumentType.XuatKhoVatTuThuocNhomKSNK,
      SecurityOperation: SecurityOperation.View
    },
    canActivate: [PermisssionGuard]
  },
  {
    path: 'them',
    component: XuatKhoKSNKCreateComponent,
    data: {
      title: 'Thêm Xuất Kho Kiểm Soát Nhiễm Khuẩn',
      DocumentType: DocumentType.XuatKhoVatTuThuocNhomKSNK,
      SecurityOperation: SecurityOperation.Add
    },
    canActivate: [PermisssionGuard]
  },
  {
    path: 'xem-chi-tiet/:id/:loaiDuocPhamVatTu',
    component: XuatKhoKSNKUpdateComponent,
    data: {
      title: 'Xem Xuất Kho Kiểm Soát Nhiễm Khuẩn',
      DocumentType: DocumentType.XuatKhoVatTuThuocNhomKSNK,
      SecurityOperation: SecurityOperation.Update
    },

    canActivate: [PermisssionGuard]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class XuatKhoKSNKRoutingModule { }
