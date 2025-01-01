import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { PermisssionGuard } from 'src/app/core/guards/permission-guard.service';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import { SecurityOperation } from 'src/app/shared/enum/security-operation.enum';
import { TongHopDuTruMuaTaiKhoaDuocListComponent } from './tong-hop-du-tru-mua-tai-khoa-duoc-list/tong-hop-du-tru-mua-tai-khoa-duoc-list.component';
import { DuyetDuTruMuaDuocPhamUpdateComponent } from './duyet-du-tru-mua-duoc-pham-update/duyet-du-tru-mua-duoc-pham-update.component';
import { TongHopDuTruMuaTaiKhoaDuocUpdateComponent } from './tong-hop-du-tru-mua-tai-khoa-duoc-update/tong-hop-du-tru-mua-tai-khoa-duoc-update.component';
import { GoiGiamDocDuTruMuaDuocPhamSharedComponent } from './goi-giam-doc-du-tru-mua-duoc-pham-shared/goi-giam-doc-du-tru-mua-duoc-pham-shared.component';
import { GoiGiamDocDuTruMuaDuocPhamUpdateComponent } from './goi-giam-doc-du-tru-mua-duoc-pham-update/goi-giam-doc-du-tru-mua-duoc-pham-update.component';

// const routes: Routes = [];
const routes: Routes = [
  {
    path: '',
    component: TongHopDuTruMuaTaiKhoaDuocListComponent,
    data: {
      title: 'Danh sách tổng hợp dự trù mua tại khoa dược phẩm',
      DocumentType: DocumentType.DanhSachTongHopDuTruMuaDuocPhamTaiKhoaDuoc,
      SecurityOperation: SecurityOperation.View
    },
    canActivate: [PermisssionGuard]
  },
  {
    path: 'xem-chi-tiet/:id',
    component: DuyetDuTruMuaDuocPhamUpdateComponent,
    data: {
      title: 'Chi tiết duyệt dự trù mua dược phẩm',      
      DocumentType: DocumentType.DanhSachTongHopDuTruMuaDuocPhamTaiKhoaDuoc,
      SecurityOperation:SecurityOperation.View
    },
    canActivate: [PermisssionGuard]
  }
  ,
  {
    path: 'xem-chi-tiet-tu-choi/:id/:khoThuocId',
    component: DuyetDuTruMuaDuocPhamUpdateComponent,
    data: {
      title: 'Xem dự trù mua dược phẩm theo khoa',      
      DocumentType: DocumentType.DanhSachTongHopDuTruMuaDuocPhamTaiKhoaDuoc,
      SecurityOperation:SecurityOperation.View
    },
    canActivate: [PermisssionGuard]
  },
  {
    path: 'xem-chi-tiet-tu-da-xu-ly/:id/:khoThuocId',
    component: DuyetDuTruMuaDuocPhamUpdateComponent,
    data: {
      title: 'Xem dự trù mua dược phẩm theo khoa',      
      DocumentType: DocumentType.DanhSachTongHopDuTruMuaDuocPhamTaiKhoaDuoc,
      SecurityOperation:SecurityOperation.View
    },
    canActivate: [PermisssionGuard]
  },
  {
    path: 'duyet/:id/:khoThuocId/:trangThai',
    component: DuyetDuTruMuaDuocPhamUpdateComponent,
    data: {
      title: 'Duyệt dự trù mua dược phẩm',      
      DocumentType: DocumentType.DanhSachTongHopDuTruMuaDuocPhamTaiKhoaDuoc,
      SecurityOperation:SecurityOperation.Update
    },
    canActivate: [PermisssionGuard]
  },
  {
    path: 'gui/:id',
    component: GoiGiamDocDuTruMuaDuocPhamUpdateComponent,
    data: {
      title: 'Gửi dự trù mua dược phẩm',      
      DocumentType: DocumentType.DanhSachTongHopDuTruMuaDuocPhamTaiKhoaDuoc,
      SecurityOperation:SecurityOperation.Update
    },
    canActivate: [PermisssionGuard]
  }
  ,
  {
    path: 'gui/:id/:tinhTrang',
    component: GoiGiamDocDuTruMuaDuocPhamUpdateComponent,
    data: {
      title: 'Xem dự trù mua dược phẩm',      
      DocumentType: DocumentType.DanhSachTongHopDuTruMuaDuocPhamTaiKhoaDuoc,
      SecurityOperation:SecurityOperation.Update
    },
    canActivate: [PermisssionGuard]
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TongHopDuTruMuaTaiKhoaDuocRoutingModule { }
