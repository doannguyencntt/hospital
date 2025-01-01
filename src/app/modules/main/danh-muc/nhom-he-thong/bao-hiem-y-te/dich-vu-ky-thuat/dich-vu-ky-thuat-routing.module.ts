import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SecurityOperation } from 'src/app/shared/enum/security-operation.enum';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import { PermisssionGuard } from 'src/app/core/guards/permission-guard.service';

import { DichVuKyThuatListComponent } from './dich-vu-ky-thuat-list/dich-vu-ky-thuat-list.component';
import { DichVuKyThuatCreateComponent } from './dich-vu-ky-thuat-create/dich-vu-ky-thuat-create.component';
import { DichVuKyThuatUpdateComponent } from './dich-vu-ky-thuat-update/dich-vu-ky-thuat-update.component';


const routes: Routes = [
  {
    path: '',
    component: DichVuKyThuatListComponent,
    data: {
      title: 'Danh sách tên bệnh viện',
      DocumentType: DocumentType.DanhMucDichVuKyThuat,
      SecurityOperation: SecurityOperation.View
    },
    canActivate: [PermisssionGuard]
  },
  //tạm thời ko làm thêm/xóa/sửa
  {
    path: 'them',
    component: DichVuKyThuatCreateComponent,
    data: {
      title: 'Thêm dịch vụ kỹ thuật',
      DocumentType: DocumentType.DanhMucDichVuKyThuat,
      SecurityOperation: SecurityOperation.Add
    },
    canActivate: [PermisssionGuard]
  },
  {
    path: 'chinh-sua/:id',
    component: DichVuKyThuatUpdateComponent,
    data: {
      title: 'Chỉnh sửa dịch vụ kỹ thuật',
      DocumentType: DocumentType.DanhMucDichVuKyThuat,
      SecurityOperation: SecurityOperation.Update
    },
    canActivate: [PermisssionGuard]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DichVuKyThuatRoutingModule { }
