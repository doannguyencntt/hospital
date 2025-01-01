import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NgheNghiepListComponent } from './nghe-nghiep-list/nghe-nghiep-list.component';
import { NgheNghiepCreateComponent } from './nghe-nghiep-create/nghe-nghiep-create.component';
import { NgheNghiepUpdateComponent } from './nghe-nghiep-update/nghe-nghiep-update.component';
import { SecurityOperation } from 'src/app/shared/enum/security-operation.enum';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import { PermisssionGuard } from 'src/app/core/guards/permission-guard.service';

const routes: Routes = [
  {
    path: '',
    component: NgheNghiepListComponent,
    data: {
      title: 'Danh mục nghề nghiệp',
      DocumentType: DocumentType.DanhMucNgheNghiep,
      SecurityOperation: SecurityOperation.View
    },
    canActivate: [PermisssionGuard]
  },
  {
    path: 'them',
    component: NgheNghiepCreateComponent,
    data: {
      title: 'Thêm nghề nghiệp',
      DocumentType: DocumentType.DanhMucNgheNghiep,
      SecurityOperation: SecurityOperation.Add
    },
    canActivate: [PermisssionGuard]
  },
  {
    path: 'chinh-sua/:id',
    component: NgheNghiepUpdateComponent,
    data: {
      title: 'Chỉnh sửa nghề nghiệp',
      DocumentType: DocumentType.DanhMucNgheNghiep,
      SecurityOperation: SecurityOperation.Update
    },
    canActivate: [PermisssionGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NgheNghiepRoutingModule { }
