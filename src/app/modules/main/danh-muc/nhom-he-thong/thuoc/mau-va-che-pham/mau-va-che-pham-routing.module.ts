import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SecurityOperation } from 'src/app/shared/enum/security-operation.enum';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import { PermisssionGuard } from 'src/app/core/guards/permission-guard.service';

import { MauVaChePhamListComponent } from './mau-va-che-pham-list/mau-va-che-pham-list.component';
import { MauVaChePhamCreateComponent } from './mau-va-che-pham-create/mau-va-che-pham-create.component';
import { MauVaChePhamUpdateComponent } from './mau-va-che-pham-update/mau-va-che-pham-update.component';

const routes: Routes = [
  {
      path: '',
      component: MauVaChePhamListComponent,
      data: {
          title: 'Danh mục máu và chế phẩm',
          DocumentType: DocumentType.DanhMucMauVaChePham,
          SecurityOperation: SecurityOperation.View
      },
      canActivate: [PermisssionGuard]
   },
  {
      path: 'them',
      component: MauVaChePhamCreateComponent,
      data: {
          title: 'Thêm máu và chế phẩm',
          DocumentType: DocumentType.DanhMucMauVaChePham,
          SecurityOperation: SecurityOperation.Add
      },
      canActivate: [PermisssionGuard]
  },
  {
      path: 'chinh-sua/:id',
      component: MauVaChePhamUpdateComponent,
      data: {
          title: 'Chỉnh sửa máu và chế phẩm',
          DocumentType: DocumentType.DanhMucMauVaChePham,
          SecurityOperation: SecurityOperation.Update
      },
      canActivate: [PermisssionGuard]
   }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MauVaChePhamRoutingModule { }
