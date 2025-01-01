import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { QuocGiaListComponent } from './quoc-gia-list/quoc-gia-list.component';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import { SecurityOperation } from 'src/app/shared/enum/security-operation.enum';
import { PermisssionGuard } from 'src/app/core/guards/permission-guard.service';
import { QuocGiaCreateComponent } from './quoc-gia-create/quoc-gia-create.component';
import { QuocGiaUpdateComponent } from './quoc-gia-update/quoc-gia-update.component';

const routes: Routes = [
  {
    path: '',
    component: QuocGiaListComponent,
    data: {
      title: 'Danh sách quốc gia',
      DocumentType: DocumentType.DanhMucQuocGia,
      SecurityOperation: SecurityOperation.View
    },
    canActivate: [PermisssionGuard]
  },
  {
    path: 'them',
    component: QuocGiaCreateComponent,
    data: {
      title: 'Thêm quốc gia',
      DocumentType: DocumentType.DanhMucQuocGia,
      SecurityOperation: SecurityOperation.Add
    },
    canActivate: [PermisssionGuard]
  },
  {
    path: 'chinh-sua/:id',
    component: QuocGiaUpdateComponent,
    data: {
      title: 'Chỉnh sửa quốc gia',
      DocumentType: DocumentType.DanhMucQuocGia,
      SecurityOperation: SecurityOperation.Update
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class QuocGiaRoutingModule { }