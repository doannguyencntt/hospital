import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DanhMucGiuongBenhListComponent } from './danh-muc-giuong-benh-list/danh-muc-giuong-benh-list.component';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import { SecurityOperation } from 'src/app/shared/enum/security-operation.enum';
import { PermisssionGuard } from 'src/app/core/guards/permission-guard.service';
import { DanhMucGiuongBenhCreateComponent } from './danh-muc-giuong-benh-create/danh-muc-giuong-benh-create.component';
import { DanhMucGiuongBenhUpdateComponent } from './danh-muc-giuong-benh-update/danh-muc-giuong-benh-update.component';

const routes: Routes = [
  {
    path: '',
    component: DanhMucGiuongBenhListComponent,
    data: {
      title: 'Danh Mục Giường Bệnh',      
      DocumentType: DocumentType.DanhMucGiuongBenh,
      SecurityOperation:SecurityOperation.View
    },
    canActivate: [PermisssionGuard]
  },
  {
    path: 'them',
    component: DanhMucGiuongBenhCreateComponent,
    data: {
      title: 'Thêm Giường Bệnh',      
      DocumentType: DocumentType.DanhMucGiuongBenh,
      SecurityOperation:SecurityOperation.Add
    },
    canActivate: [PermisssionGuard]
  },
  {
    path: 'chinh-sua/:id',
    component: DanhMucGiuongBenhUpdateComponent,
    data: {
      title: 'Chỉnh Sửa Giường Bệnh',      
      DocumentType: DocumentType.DanhMucGiuongBenh,
      SecurityOperation:SecurityOperation.Update
    },
    canActivate: [PermisssionGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DanhMucGiuongBenhRoutingModule { }
