import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SecurityOperation } from 'src/app/shared/enum/security-operation.enum';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import { PermisssionGuard } from 'src/app/core/guards/permission-guard.service';

import { DonViTinhListComponent } from './don-vi-tinh-list/don-vi-tinh-list.component';
import { DonViTinhCreateComponent } from './don-vi-tinh-create/don-vi-tinh-create.component';
import { DonViTinhUpdateComponent } from './don-vi-tinh-update/don-vi-tinh-update.component';

const routes: Routes = [
  {
      path: '',
      component: DonViTinhListComponent,
      data: {
          title: 'Danh mục đơn vị tính',
          DocumentType: DocumentType.DanhMucDonViTinh,
          SecurityOperation: SecurityOperation.View
      },
      canActivate: [PermisssionGuard]
   },
  {
      path: 'them',
      component: DonViTinhCreateComponent,
      data: {
          title: 'Thêm đơn vị tính',
          DocumentType: DocumentType.DanhMucDonViTinh,
          SecurityOperation: SecurityOperation.Add
      },
      canActivate: [PermisssionGuard]
  },
  {
      path: 'chinh-sua/:id',
      component: DonViTinhUpdateComponent,
      data: {
          title: 'Chỉnh sửa đơn vị tính',
          DocumentType: DocumentType.DanhMucDonViTinh,
          SecurityOperation: SecurityOperation.Update
      },
      canActivate: [PermisssionGuard]
   }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DonViTinhRoutingModule { }
