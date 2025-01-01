import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CauHinhHeThongListComponent } from './cau-hinh-he-thong-list/cau-hinh-he-thong-list.component';
import { CauHinhHeThongUpdateComponent } from './cau-hinh-he-thong-update/cau-hinh-he-thong-update.component';

import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import { PermisssionGuard } from 'src/app/core/guards/permission-guard.service';
import { SecurityOperation } from 'src/app/shared/enum/security-operation.enum';
;
const routes: Routes = [
  {
      path: '',
      component: CauHinhHeThongListComponent,
      data: {
          title: 'Danh mục cấu hình hệ thống',
          DocumentType: DocumentType.QuanLyCacCauHinh,
          SecurityOperation: SecurityOperation.View
      },
      canActivate: [PermisssionGuard]
  },
  {
      path: 'chinh-sua/:id',
      component: CauHinhHeThongUpdateComponent,
      data: {
          title: 'Chỉnh sửa cấu hình hệ thống',
          DocumentType: DocumentType.QuanLyCacCauHinh,
          SecurityOperation: SecurityOperation.Update
      },
      canActivate: [PermisssionGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class CauHinhHeThongRoutingModule { }
