import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import { SecurityOperation } from 'src/app/shared/enum/security-operation.enum';
import { PermisssionGuard } from 'src/app/core/guards/permission-guard.service';
import { DsTongHopDuTruMuaThuocTaiKhoaComponent } from './ds-tong-hop-du-tru-mua-thuoc-tai-khoa/ds-tong-hop-du-tru-mua-thuoc-tai-khoa.component';
import { TongHopDuTruMuaThuocTaiKhoaDetailComponent } from './tong-hop-du-tru-mua-thuoc-tai-khoa-detail/tong-hop-du-tru-mua-thuoc-tai-khoa-detail.component';
import { GuiTongHopDuTruMuaThuocTaiKhoaDuyetComponent } from './gui-tong-hop-du-tru-mua-thuoc-tai-khoa-duyet/gui-tong-hop-du-tru-mua-thuoc-tai-khoa-duyet.component';
import { TongHopDuTruMuaThuocTaiKhoaDuyetComponent } from './tong-hop-du-tru-mua-thuoc-tai-khoa-duyet/tong-hop-du-tru-mua-thuoc-tai-khoa-duyet.component';

const routes: Routes = [
  {
    path: '',
    // pathMatch: 'full',
    component: DsTongHopDuTruMuaThuocTaiKhoaComponent,
    data: {
      title: 'Danh Sách Tổng Hợp Dự Trù Mua Dược Phẩm Tại Khoa',
      DocumentType: DocumentType.DanhSachTongHopDuTruMuaDuocPhamTaiKhoa,
      SecurityOperation: SecurityOperation.View
    },
    canActivate: [PermisssionGuard]
  },
  {
    path: 'duyet/:id/:isSelected',
    component: TongHopDuTruMuaThuocTaiKhoaDuyetComponent,
    data: {
      title: 'Duyệt Dự Trù Mua Dược Phẩm',
      DocumentType: DocumentType.DanhSachTongHopDuTruMuaDuocPhamTaiKhoa,
      SecurityOperation: SecurityOperation.Update
    },
    canActivate: [PermisssionGuard]
  },
  {
    path: 'chi-tiet/:id',
    component: TongHopDuTruMuaThuocTaiKhoaDetailComponent,
    data: {
      title: 'Chi Tiết Dự Trù Mua Dược Phẩm Tại Khoa',
      DocumentType: DocumentType.DanhSachTongHopDuTruMuaDuocPhamTaiKhoa,
      SecurityOperation: SecurityOperation.View
    },
    canActivate: [PermisssionGuard]
  },
  {
    path: 'gui/:id',
    component: GuiTongHopDuTruMuaThuocTaiKhoaDuyetComponent,
    data: {
      title: 'Gửi Dự Trù Mua Dược Phẩm Tại Khoa',
      DocumentType: DocumentType.DanhSachTongHopDuTruMuaDuocPhamTaiKhoa,
      SecurityOperation: SecurityOperation.Update
    },
    canActivate: [PermisssionGuard]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TongHopDuTruMuaThuocTaiKhoaRoutingModule { }
