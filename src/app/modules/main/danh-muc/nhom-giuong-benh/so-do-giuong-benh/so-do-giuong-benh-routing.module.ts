import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { QuanLyGiuongBenhComponent } from './quan-ly-giuong-benh/quan-ly-giuong-benh.component';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import { SecurityOperation } from 'src/app/shared/enum/security-operation.enum';
import { PermisssionGuard } from 'src/app/core/guards/permission-guard.service';
import { QuanLyGiuongBenhKhoaComponent } from './quan-ly-giuong-benh-khoa/quan-ly-giuong-benh-khoa.component';
import { QuanLyGiuongBenhPhongComponent } from './quan-ly-giuong-benh-phong/quan-ly-giuong-benh-phong.component';


const routes: Routes = [
  {
    path: '',
    component: QuanLyGiuongBenhKhoaComponent,
    data: {
      title: 'Quản Lý Giường Bệnh',      
      DocumentType: DocumentType.TinhTrangGiuongBenh,
      SecurityOperation:SecurityOperation.View
    },
    canActivate: [PermisssionGuard]
  },
  {
    path: 'chinh-sua/:id',
    component: QuanLyGiuongBenhPhongComponent,
    data: {
      title: 'Quản Lý Giường Bệnh Tại Khoa',      
      DocumentType: DocumentType.DanhMucKhoDuocPham,
      SecurityOperation:SecurityOperation.View
    },

    canActivate: [PermisssionGuard]
  },
  {
    path: 'quan-ly-phong-khoa/:phongId/:khoaId',
    component: QuanLyGiuongBenhComponent,
    data: {
      title: 'Quản Lý Giường Bệnh Tại Khoa',      
      DocumentType: DocumentType.DanhMucKhoDuocPham,
      SecurityOperation:SecurityOperation.View
    },

    canActivate: [PermisssionGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SoDoGiuongBenhRoutingModule { }
