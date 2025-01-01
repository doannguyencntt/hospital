import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DoiTuongUuDaiDichVuKhamBenhListComponent } from './doi-tuong-uu-dai-dich-vu-kham-benh-list/doi-tuong-uu-dai-dich-vu-kham-benh-list.component';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import { SecurityOperation } from 'src/app/shared/enum/security-operation.enum';
import { PermisssionGuard } from 'src/app/core/guards/permission-guard.service';
import { DoiTuongUuDaiDichVuKhamBenhCreateComponent } from './doi-tuong-uu-dai-dich-vu-kham-benh-create/doi-tuong-uu-dai-dich-vu-kham-benh-create.component';
import { DoiTuongUuDaiDichVuKhamBenhUpdateComponent } from './doi-tuong-uu-dai-dich-vu-kham-benh-update/doi-tuong-uu-dai-dich-vu-kham-benh-update.component';

const routes: Routes = [{
  path: '',
  component: DoiTuongUuDaiDichVuKhamBenhListComponent,
  data: {
    title: 'Đối tượng ưu đãi dịch vụ khám bệnh',
    DocumentType: DocumentType.DoiTuongUuDaiDichVuKhamBenh,
    SecurityOperation: SecurityOperation.View
  },
  canActivate: [PermisssionGuard]
},
{
  path: 'them',
  component: DoiTuongUuDaiDichVuKhamBenhCreateComponent,
  data: {
    title: 'Thêm đối tượng ưu đãi dịch vụ khám bệnh',
    DocumentType: DocumentType.DoiTuongUuDaiDichVuKhamBenh,
    SecurityOperation:SecurityOperation.Add
  },
  canActivate: [PermisssionGuard]
},
{
  path: 'chinh-sua/:id',
  component: DoiTuongUuDaiDichVuKhamBenhUpdateComponent,
  data: {
    title: 'Chỉnh sửa đối tượng ưu đãi dịch vụ khám bệnh',
    DocumentType: DocumentType.DoiTuongUuDaiDichVuKhamBenh,
    SecurityOperation:SecurityOperation.Update
  },

  canActivate: [PermisssionGuard]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DoiTuongUuDaiDichVuKhamBenhRoutingModule { }
