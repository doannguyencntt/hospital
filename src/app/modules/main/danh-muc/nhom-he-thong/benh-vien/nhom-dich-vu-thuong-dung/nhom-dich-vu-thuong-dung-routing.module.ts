import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DanhSachNhomDichVuThuongDungComponent } from './danh-sach-nhom-dich-vu-thuong-dung/danh-sach-nhom-dich-vu-thuong-dung.component';
import { NhomDichVuThuongDungCreateComponent } from './nhom-dich-vu-thuong-dung-create/nhom-dich-vu-thuong-dung-create.component';
import { NhomDichVuThuongDungUpdateComponent } from './nhom-dich-vu-thuong-dung-update/nhom-dich-vu-thuong-dung-update.component';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import { SecurityOperation } from 'src/app/shared/enum/security-operation.enum';
import { PermisssionGuard } from 'src/app/core/guards/permission-guard.service';

const routes: Routes = [{
  path: '',
  component: DanhSachNhomDichVuThuongDungComponent,
  data: {
    title: 'Danh mục nhóm dịch vụ thường dùng',
    DocumentType: DocumentType.GoiDichVuNhomThuongDung,
    SecurityOperation: SecurityOperation.View
  },
  canActivate: [PermisssionGuard]
},
{
  path: 'chinh-sua/:id',
  component: NhomDichVuThuongDungUpdateComponent,
  data: {
    title: 'Chỉnh sửa nhóm dịch vụ thường dùng',
    DocumentType: DocumentType.GoiDichVuNhomThuongDung,
    SecurityOperation: SecurityOperation.Update
  },
   canActivate: [PermisssionGuard]
},
{
  path: 'them',
  component: NhomDichVuThuongDungCreateComponent,
  data: {
    title: 'Thêm toa nhóm dịch vụ thường dùng',
    DocumentType: DocumentType.GoiDichVuNhomThuongDung,
    SecurityOperation: SecurityOperation.Add
  },
   canActivate: [PermisssionGuard]
},
{
  path: 'them/:id',
  component: NhomDichVuThuongDungCreateComponent,
  data: {
    title: 'Thêm toa nhóm dịch vụ thường dùng',
    DocumentType: DocumentType.GoiDichVuNhomThuongDung,
    SecurityOperation: SecurityOperation.Add
  },
   canActivate: [PermisssionGuard]
},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NhomDichVuThuongDungRoutingModule { }
