import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import { SecurityOperation } from 'src/app/shared/enum/security-operation.enum';
import { PermisssionGuard } from 'src/app/core/guards/permission-guard.service';
import { DichVuKhamBenhBenhVienListComponent } from './dich-vu-kham-benh-benh-vien-list/dich-vu-kham-benh-benh-vien-list.component';
import { DichVuKhamBenhBenhVienCreateComponent } from './dich-vu-kham-benh-benh-vien-create/dich-vu-kham-benh-benh-vien-create.component';
import { DichVuKhamBenhBenhVienUpdatedComponent } from './dich-vu-kham-benh-benh-vien-updated/dich-vu-kham-benh-benh-vien-updated.component';

const routes: Routes = [
  {
    path: '',
    component: DichVuKhamBenhBenhVienListComponent,
    data: {
      title: 'Danh sách dịch vụ khám bệnh tại bệnh viện',
      DocumentType: DocumentType.DanhMucDichVuKhamBenhTaiBenhVien,
      SecurityOperation: SecurityOperation.View
    },
    canActivate: [PermisssionGuard]
  },
  {
    path: 'them',
    component: DichVuKhamBenhBenhVienCreateComponent,
    data: {
      title: 'Thêm dịch vụ khám bệnh tại bệnh viện',      
      DocumentType: DocumentType.DanhMucDichVuKhamBenhTaiBenhVien,
      SecurityOperation:SecurityOperation.Add
    },
    canActivate: [PermisssionGuard]
  },
  {
    path: 'chinh-sua/:id',
    component: DichVuKhamBenhBenhVienUpdatedComponent,
    data: {
      title: 'Chỉnh sửa dịch vụ khám bệnh tại bệnh viện',      
      DocumentType: DocumentType.DanhMucDichVuKhamBenhTaiBenhVien,
      SecurityOperation:SecurityOperation.Update
    },

    canActivate: [PermisssionGuard]
  }


];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DichVuKhamBenhBenhVienRoutingModule { }
