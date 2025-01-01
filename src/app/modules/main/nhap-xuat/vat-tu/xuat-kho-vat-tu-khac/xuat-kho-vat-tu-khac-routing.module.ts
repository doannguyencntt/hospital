import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { XuatKhoVatTuKhacCreateComponent } from './xuat-kho-vat-tu-khac-create/xuat-kho-vat-tu-khac-create.component';
import { XuatKhoVatTuKhacListComponent } from './xuat-kho-vat-tu-khac-list/xuat-kho-vat-tu-khac-list.component';
import { XuatKhoVatTuKhacUpdateComponent } from './xuat-kho-vat-tu-khac-update/xuat-kho-vat-tu-khac-update.component';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import { PermisssionGuard } from 'src/app/core/guards/permission-guard.service';
import { SecurityOperation } from 'src/app/shared/enum/security-operation.enum';

const routes: Routes = [

  {
    path: '',
    component: XuatKhoVatTuKhacListComponent,
    data: {
      title: 'Xuất Kho Vật Tư Khác',      
      DocumentType: DocumentType.XuatKhoVatTuKhac,
      SecurityOperation:SecurityOperation.View
    },
    canActivate: [PermisssionGuard]
  },
  {
    path: 'them',
    component: XuatKhoVatTuKhacCreateComponent,
    data: {
      title: 'Thêm Xuất Kho Vật Tư Khác',      
      DocumentType: DocumentType.XuatKhoVatTuKhac,
      SecurityOperation:SecurityOperation.Add
    },
    canActivate: [PermisssionGuard]
  },
  {
    path: 'xem-chi-tiet',
    component: XuatKhoVatTuKhacUpdateComponent,
    data: {
      title: 'Xem Xuất Kho Vật Tư Khác',      
      DocumentType: DocumentType.XuatKhoVatTuKhac,
      SecurityOperation:SecurityOperation.Update
    },

    canActivate: [PermisssionGuard]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class XuatKhoVatTuKhacRoutingModule { }
