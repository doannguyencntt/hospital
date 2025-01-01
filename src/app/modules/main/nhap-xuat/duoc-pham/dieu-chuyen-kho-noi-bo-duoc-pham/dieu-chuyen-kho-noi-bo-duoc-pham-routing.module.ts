import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PermisssionGuard } from 'src/app/core/guards/permission-guard.service';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import { SecurityOperation } from 'src/app/shared/enum/security-operation.enum';
import { DieuChuyenKhoNoiBoDuocPhamCreateComponent } from './dieu-chuyen-kho-noi-bo-duoc-pham-create/dieu-chuyen-kho-noi-bo-duoc-pham-create.component';
import { DieuChuyenKhoNoiBoDuocPhamListComponent } from './dieu-chuyen-kho-noi-bo-duoc-pham-list/dieu-chuyen-kho-noi-bo-duoc-pham-list.component';
import { DieuChuyenKhoNoiBoDuocPhamUpdateComponent } from './dieu-chuyen-kho-noi-bo-duoc-pham-update/dieu-chuyen-kho-noi-bo-duoc-pham-update.component';


const routes: Routes = [
  {
    path: '',
    component: DieuChuyenKhoNoiBoDuocPhamListComponent,
    data: {
      title: 'Danh Sách Dược Phẩm Điều Chuyển Kho Nội Bộ',
      DocumentType: DocumentType.DanhSachDieuChuyenNoiBoDuocPham,
      SecurityOperation: SecurityOperation.View
    },
    canActivate: [PermisssionGuard]
  },
  {
    path: 'them',
    component: DieuChuyenKhoNoiBoDuocPhamCreateComponent,
    data: {
      title: 'Tạo Yêu Cầu Dược Phẩm Điều Chuyển Kho Nội Bộ',
      DocumentType: DocumentType.DanhSachDieuChuyenNoiBoDuocPham,
      SecurityOperation: SecurityOperation.Add
    },
    canActivate: [PermisssionGuard]
  },
  {
    path: 'chi-tiet/:id',
    component: DieuChuyenKhoNoiBoDuocPhamUpdateComponent,
    data: {
      title: 'Chi Tiết Yêu Cầu Dược Phẩm Điều Chuyển Kho Nội Bộ',
      DocumentType: DocumentType.DanhSachDieuChuyenNoiBoDuocPham,
      SecurityOperation: SecurityOperation.Update
    },
    canActivate: [PermisssionGuard]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DieuChuyenKhoNoiBoDuocPhamRoutingModule { }
