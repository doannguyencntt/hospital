import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import { DichVuKyThuatBenhVienListComponent } from './dich-vu-ky-thuat-benh-vien-list/dich-vu-ky-thuat-benh-vien-list.component';
import { SecurityOperation } from 'src/app/shared/enum/security-operation.enum';
import { PermisssionGuard } from 'src/app/core/guards/permission-guard.service';
import { DichVuKyThuatBenhVienCreateComponent } from './dich-vu-ky-thuat-benh-vien-create/dich-vu-ky-thuat-benh-vien-create.component';
import { DichVuKyThuatBenhVienUpdateComponent } from './dich-vu-ky-thuat-benh-vien-update/dich-vu-ky-thuat-benh-vien-update.component';

const routes: Routes = [
  {
    path: '',
    component: DichVuKyThuatBenhVienListComponent,
    data: {
      title: 'Dịch vụ kỹ thuật tại bệnh viện',
      DocumentType: DocumentType.DanhMucDichVuKyThuatTaiBenhVien,
      SecurityOperation: SecurityOperation.View
    },
    canActivate: [PermisssionGuard]
  },
  {
    path: 'them',
    component: DichVuKyThuatBenhVienCreateComponent,
    data: {
      title: 'Thêm dịch vụ kỹ thuật tại bệnh viện',      
      DocumentType: DocumentType.DanhMucDichVuKyThuatTaiBenhVien,
      SecurityOperation:SecurityOperation.Add
    },
    canActivate: [PermisssionGuard]
  },
  {
    path: 'chinh-sua/:id',
    component: DichVuKyThuatBenhVienUpdateComponent,
    data: {
      title: 'Chỉnh sửa dịch vụ kỹ thuật tại bệnh viện',      
      DocumentType: DocumentType.DanhMucDichVuKyThuatTaiBenhVien,
      SecurityOperation:SecurityOperation.Update
    },

    canActivate: [PermisssionGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DichVuKyThuatBenhVienRoutingModule { }
