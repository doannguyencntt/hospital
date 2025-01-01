import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import { SecurityOperation } from 'src/app/shared/enum/security-operation.enum';
import { PermisssionGuard } from 'src/app/core/guards/permission-guard.service';
import { XuatKhoKhacListComponent } from './xuat-kho-khac-list/xuat-kho-khac-list.component';
import { XuatKhoKhacCreateComponent } from './xuat-kho-khac-create/xuat-kho-khac-create.component';
import { XuatKhoKhacUpdateComponent } from './xuat-kho-khac-update/xuat-kho-khac-update.component';

const routes: Routes = [

  {
    path: '',
    component: XuatKhoKhacListComponent,
    data: {
      title: 'Xuất Kho Dược Phẩm Khác',      
      DocumentType: DocumentType.XuatKhoDuocPhamKhac,
      SecurityOperation:SecurityOperation.View
    },
    canActivate: [PermisssionGuard]
  },
  {
    path: 'them',
    component: XuatKhoKhacCreateComponent,
    data: {
      title: 'Thêm Xuất Kho Dược Phẩm Khác',      
      DocumentType: DocumentType.XuatKhoDuocPhamKhac,
      SecurityOperation:SecurityOperation.Add
    },
    canActivate: [PermisssionGuard]
  },
  {
    path: 'xem-chi-tiet',
    component: XuatKhoKhacUpdateComponent,
    data: {
      title: 'Xem Xuất Kho Dược Phẩm Khác',      
      DocumentType: DocumentType.XuatKhoDuocPhamKhac,
      SecurityOperation:SecurityOperation.Update
    },

    canActivate: [PermisssionGuard]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class XuatKhoKhacRoutingModule { }
