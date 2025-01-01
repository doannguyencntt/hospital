import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DichVuGiuongListComponent } from './dich-vu-giuong-list/dich-vu-giuong-list.component';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import { SecurityOperation } from 'src/app/shared/enum/security-operation.enum';
import { PermisssionGuard } from 'src/app/core/guards/permission-guard.service';
const routes: Routes = [
  {
    path: '',
    component: DichVuGiuongListComponent,
    data: {
      title: 'Danh mục dịch vụ giường',
      DocumentType: DocumentType.DanhMucDichVuGiuong,
      SecurityOperation: SecurityOperation.View
    },
    canActivate: [PermisssionGuard]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DichVuGiuongRoutingModule { }
