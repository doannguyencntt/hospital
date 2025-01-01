import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DichVuKhamBenhListComponent } from './dich-vu-kham-benh-list/dich-vu-kham-benh-list.component';
import { DichVuKhamBenhCreateComponent } from './dich-vu-kham-benh-create/dich-vu-kham-benh-create.component';
import { DichVuKhamBenhUpdateComponent } from './dich-vu-kham-benh-update/dich-vu-kham-benh-update.component';
import { PermisssionGuard } from 'src/app/core/guards/permission-guard.service';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import { SecurityOperation } from 'src/app/shared/enum/security-operation.enum';
const routes: Routes = [
  {
    path: '',
    component: DichVuKhamBenhListComponent,
    data: {
      title: 'Danh mục dịch vụ khám bệnh',
      DocumentType: DocumentType.DanhMucDichVuKhamBenh,
      SecurityOperation: SecurityOperation.View
    },
    canActivate: [PermisssionGuard]
  },
  {
    path: 'them',
    component: DichVuKhamBenhCreateComponent,
    data: {
      title: 'Thêm dịch vụ khám bệnh',
      DocumentType: DocumentType.DanhMucDichVuKhamBenh,
      SecurityOperation: SecurityOperation.Add
    },
    canActivate: [PermisssionGuard]
  },
  {
    path: 'chinh-sua/:id',
    component: DichVuKhamBenhUpdateComponent,
    data: {
      title: 'Chỉnh sửa dịch vụ khám bệnh',
      DocumentType: DocumentType.DanhMucDichVuKhamBenh,
      SecurityOperation: SecurityOperation.Update
    },
    canActivate: [PermisssionGuard]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DichVuKhamBenhRoutingModule { }
