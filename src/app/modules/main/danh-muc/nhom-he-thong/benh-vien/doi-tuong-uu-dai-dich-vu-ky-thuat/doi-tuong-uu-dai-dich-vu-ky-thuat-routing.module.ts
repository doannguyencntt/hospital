import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DichVuKyThuatBenhVienListComponent } from '../dich-vu-ky-thuat-benh-vien/dich-vu-ky-thuat-benh-vien-list/dich-vu-ky-thuat-benh-vien-list.component';

import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import { SecurityOperation } from 'src/app/shared/enum/security-operation.enum';
import { PermisssionGuard } from 'src/app/core/guards/permission-guard.service';
import { DoiTuongUuDaiDichVuKyThuatListComponent } from './doi-tuong-uu-dai-dich-vu-ky-thuat-list/doi-tuong-uu-dai-dich-vu-ky-thuat-list.component';
import { DoiTuongUuDaiDichVuKyThuatCreateComponent } from './doi-tuong-uu-dai-dich-vu-ky-thuat-create/doi-tuong-uu-dai-dich-vu-ky-thuat-create.component';
import { DoiTuongUuDaiDichVuKyThuatUpdateComponent } from './doi-tuong-uu-dai-dich-vu-ky-thuat-update/doi-tuong-uu-dai-dich-vu-ky-thuat-update.component';
const routes: Routes = [{
  path: '',
  component: DoiTuongUuDaiDichVuKyThuatListComponent,
  data: {
    title: 'Đối tượng ưu đãi dịch vụ kỹ thuật',
    DocumentType: DocumentType.DoiTuongUuDaiDichVuKyThuat,
    SecurityOperation: SecurityOperation.View
  },
  canActivate: [PermisssionGuard]
},
{
  path: 'them',
  component: DoiTuongUuDaiDichVuKyThuatCreateComponent,
  data: {
    title: 'Thêm đối tượng ưu đãi dịch vụ kỹ thuật',      
    DocumentType: DocumentType.DoiTuongUuDaiDichVuKyThuat,
    SecurityOperation:SecurityOperation.Add
  },
  canActivate: [PermisssionGuard]
},
{
  path: 'chinh-sua/:id',
  component: DoiTuongUuDaiDichVuKyThuatUpdateComponent,
  data: {
    title: 'Chỉnh sửa đối tượng ưu đãi dịch vụ kỹ thuật',      
    DocumentType: DocumentType.DoiTuongUuDaiDichVuKyThuat,
    SecurityOperation:SecurityOperation.Update
  },

  canActivate: [PermisssionGuard]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DoiTuongUuDaiDichVuKyThuatRoutingModule { }
