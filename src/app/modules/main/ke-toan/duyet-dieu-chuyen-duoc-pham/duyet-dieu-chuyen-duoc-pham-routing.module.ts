import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PermisssionGuard } from 'src/app/core/guards/permission-guard.service';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import { SecurityOperation } from 'src/app/shared/enum/security-operation.enum';
import { DuyetDieuChuyenDuocPhamChiTietComponent } from './duyet-dieu-chuyen-duoc-pham-chi-tiet/duyet-dieu-chuyen-duoc-pham-chi-tiet.component';
import { DuyetDieuChuyenDuocPhamListComponent } from './duyet-dieu-chuyen-duoc-pham-list/duyet-dieu-chuyen-duoc-pham-list.component';


const routes: Routes = [
  {
    path: '',
    component: DuyetDieuChuyenDuocPhamListComponent,
    data: {
      title: 'Danh Sách Duyệt Dược Phẩm Điều Chuyển Kho Nội Bộ',
      DocumentType: DocumentType.DanhSachDuyetDieuChuyenNoiBoDuocPham,
      SecurityOperation: SecurityOperation.View
    },
    canActivate: [PermisssionGuard]
  },
  {
    path: 'chi-tiet/:id',
    component: DuyetDieuChuyenDuocPhamChiTietComponent,
    data: {
      title: 'Chi Tiết Duyệt Yêu Cầu Dược Phẩm Điều Chuyển Kho Nội Bộ',
      DocumentType: DocumentType.DanhSachDuyetDieuChuyenNoiBoDuocPham,
      SecurityOperation: SecurityOperation.View
    },
    canActivate: [PermisssionGuard]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DuyetDieuChuyenDuocPhamRoutingModule { }
