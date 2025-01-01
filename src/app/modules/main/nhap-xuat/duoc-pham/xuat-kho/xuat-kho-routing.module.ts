import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { XuatKhoListComponent } from './xuat-kho-list/xuat-kho-list.component';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import { SecurityOperation } from 'src/app/shared/enum/security-operation.enum';
import { PermisssionGuard } from 'src/app/core/guards/permission-guard.service';
import { XuatKhoCreateComponent } from './xuat-kho-create/xuat-kho-create.component';
import { XuatKhoUpdateComponent } from './xuat-kho-update/xuat-kho-update.component';

const routes: Routes = [
  {
    path: '',
    component: XuatKhoListComponent,
    data: {
      title: 'Xuất Kho Dược Phẩm',      
      DocumentType: DocumentType.XuatKhoDuocPham,
      SecurityOperation:SecurityOperation.View
    },
    canActivate: [PermisssionGuard]
  },
  {
    path: 'them',
    component: XuatKhoCreateComponent,
    data: {
      title: 'Thêm Xuất Kho Dược Phẩm',      
      DocumentType: DocumentType.XuatKhoDuocPham,
      SecurityOperation:SecurityOperation.Add
    },
    canActivate: [PermisssionGuard]
  },
  {
    path: 'xem-chi-tiet/:id',
    component: XuatKhoUpdateComponent,
    data: {
      title: 'Xem Xuất Kho Dược Phẩm',      
      DocumentType: DocumentType.XuatKhoDuocPham,
      SecurityOperation:SecurityOperation.Update
    },

    canActivate: [PermisssionGuard]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class XuatKhoRoutingModule { }
