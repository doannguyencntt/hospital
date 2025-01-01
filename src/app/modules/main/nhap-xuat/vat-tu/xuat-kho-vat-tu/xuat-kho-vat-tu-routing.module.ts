import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { XuatKhoVatTuCreateComponent } from './xuat-kho-vat-tu-create/xuat-kho-vat-tu-create.component';
import { XuatKhoVatTuListComponent } from './xuat-kho-vat-tu-list/xuat-kho-vat-tu-list.component';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import { PermisssionGuard } from 'src/app/core/guards/permission-guard.service';
import { SecurityOperation } from 'src/app/shared/enum/security-operation.enum';
import { XuatKhoVatTuUpdateComponent } from './xuat-kho-vat-tu-update/xuat-kho-vat-tu-update.component';


const routes: Routes = [
  {
    path: '',
    component: XuatKhoVatTuListComponent,
    data: {
      title: 'Xuất Kho Vật Tư',      
      DocumentType: DocumentType.XuatKhoVatTu,
      SecurityOperation:SecurityOperation.View
    },
    canActivate: [PermisssionGuard]
  },
  {
    path: 'them',
    component: XuatKhoVatTuCreateComponent,
    data: {
      title: 'Thêm Xuất Kho Vật Tư',      
      DocumentType: DocumentType.XuatKhoVatTu,
      SecurityOperation:SecurityOperation.Add
    },
    canActivate: [PermisssionGuard]
  },
  {
    path: 'xem-chi-tiet/:id',
    component: XuatKhoVatTuUpdateComponent,
    data: {
      title: 'Xem Xuất Kho Vật Tư',      
      DocumentType: DocumentType.XuatKhoVatTu,
      SecurityOperation:SecurityOperation.Update
    },

    canActivate: [PermisssionGuard]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class XuatKhoVatTuRoutingModule { }
