import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import { SecurityOperation } from 'src/app/shared/enum/security-operation.enum';
import { PermisssionGuard } from 'src/app/core/guards/permission-guard.service';
import { IcdListComponent } from './icd-list/icd-list.component';
import { IcdCreateComponent } from './icd-create/icd-create.component';
import { IcdUpdateComponent } from './icd-update/icd-update.component';
const routes: Routes = [
  {
    path: '',
    component: IcdListComponent,
    data: {
      title: 'Danh mục quản lý ICD',
      DocumentType: DocumentType.QuanLyICD,
      SecurityOperation: SecurityOperation.View
    },
    canActivate: [PermisssionGuard]
  },
  {
    path: 'them',
    component: IcdCreateComponent,
    data: {
      title: 'Thêm ICD',
      DocumentType: DocumentType.QuanLyICD,
      SecurityOperation: SecurityOperation.Add
    },
    canActivate: [PermisssionGuard]
  },
  {
    path: 'chinh-sua/:id',
    component: IcdUpdateComponent,
    data: {
      title: 'Chỉnh sửa ICD',
      DocumentType: DocumentType.QuanLyICD,
      SecurityOperation: SecurityOperation.Update
    },
    canActivate: [PermisssionGuard]
  },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IcdRoutingModule { }
