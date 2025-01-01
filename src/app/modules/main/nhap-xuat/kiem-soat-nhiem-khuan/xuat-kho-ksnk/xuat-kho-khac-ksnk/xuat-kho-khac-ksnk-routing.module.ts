import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import { PermisssionGuard } from 'src/app/core/guards/permission-guard.service';
import { SecurityOperation } from 'src/app/shared/enum/security-operation.enum';
import { XuatKhoKhacKSNKListComponent } from './xuat-kho-khac-ksnk-list/xuat-kho-khac-ksnk-list.component';
import { XuatKhoKhacKSNKUpdateComponent } from './xuat-kho-khac-ksnk-update/xuat-kho-khac-ksnk-update.component';
import { XuatKhoKhacKSNKCreateComponent } from './xuat-kho-khac-ksnk-create/xuat-kho-khac-ksnk-create.component';

const routes: Routes = [

  {
    path: '',
    component: XuatKhoKhacKSNKListComponent,
    data: {
      title: 'Xuất Kho Khác KSNK',      
      DocumentType: DocumentType.XuatKhoKhacVatTuThuocNhomKSNK,
      SecurityOperation:SecurityOperation.View
    },
    canActivate: [PermisssionGuard]
  },
  {
    path: 'them',
    component: XuatKhoKhacKSNKCreateComponent,
    data: {
      title: 'Thêm Xuất Kho Khác KSNK',      
      DocumentType: DocumentType.XuatKhoKhacVatTuThuocNhomKSNK,
      SecurityOperation:SecurityOperation.Add
    },
    canActivate: [PermisssionGuard]
  },
  {
    path: 'xem-chi-tiet',
    component: XuatKhoKhacKSNKUpdateComponent,
    data: {
      title: 'Xem Xuất Kho Khác KSNK',      
      DocumentType: DocumentType.XuatKhoKhacVatTuThuocNhomKSNK,
      SecurityOperation:SecurityOperation.Update
    },

    canActivate: [PermisssionGuard]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class XuatKhoKhacKSNKRoutingModule { }
