import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VatTuYTeListComponent } from './vat-tu-y-te-list/vat-tu-y-te-list.component';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import { SecurityOperation } from 'src/app/shared/enum/security-operation.enum';
import { PermisssionGuard } from 'src/app/core/guards/permission-guard.service';
import { VatTuYTeCreateComponent } from './vat-tu-y-te-create/vat-tu-y-te-create.component';
import { VatTuYTeUpdateComponent } from './vat-tu-y-te-update/vat-tu-y-te-update.component';

const routes: Routes = [
  {
    path: '',
    component: VatTuYTeListComponent,
    data: {
      title: 'Danh mục vật tư',
      DocumentType: DocumentType.DanhMucVatTuYTe,
      SecurityOperation: SecurityOperation.View
    },
    canActivate: [PermisssionGuard]
  },
  {
    path: 'them',
    component: VatTuYTeCreateComponent,
    data: {
      title: 'Thêm vật tư',
      DocumentType: DocumentType.DanhMucVatTuYTe,
      SecurityOperation: SecurityOperation.Add
    },
    canActivate: [PermisssionGuard]
  },
  {
    path: 'chinh-sua/:id',
    component: VatTuYTeUpdateComponent,
    data: {
      title: 'Chỉnh sửa vật tư',
      DocumentType: DocumentType.DanhMucVatTuYTe,
      SecurityOperation: SecurityOperation.Update
    },
    canActivate: [PermisssionGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VatTuYTeRoutingModule { }
