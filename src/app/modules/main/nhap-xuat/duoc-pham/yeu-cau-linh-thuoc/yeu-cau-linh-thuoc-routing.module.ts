import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DanhSachYeuCauLinhThuocComponent } from './danh-sach-yeu-cau-linh-thuoc/danh-sach-yeu-cau-linh-thuoc.component';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import { SecurityOperation } from 'src/app/shared/enum/security-operation.enum';
import { PermisssionGuard } from 'src/app/core/guards/permission-guard.service';
import { TaoPhieuLinhThuocThuongComponent } from './tao-phieu-linh-thuoc-thuong/tao-phieu-linh-thuoc-thuong.component';
import { TaoPhieuLinhThuocBuComponent } from './tao-phieu-linh-thuoc-bu/tao-phieu-linh-thuoc-bu.component';
import { PhieuLinhThuocThuongGuiLaiComponent } from './phieu-linh-thuoc-thuong-gui-lai/phieu-linh-thuoc-thuong-gui-lai.component';
import { PhieuLinhThuocBuGuiLaiComponent } from './phieu-linh-thuoc-bu-gui-lai/phieu-linh-thuoc-bu-gui-lai.component';
import { TaoPhieuLinhThuocTrucTiepComponent } from './tao-phieu-linh-thuoc-truc-tiep/tao-phieu-linh-thuoc-truc-tiep.component';
import { PhieuLinhThuocTrucTiepGuiLaiComponent } from './phieu-linh-thuoc-truc-tiep-gui-lai/phieu-linh-thuoc-truc-tiep-gui-lai.component';


const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: DanhSachYeuCauLinhThuocComponent,
    data: {
      title: 'Danh Sách Yêu Cầu Lĩnh Thuốc',
      DocumentType: DocumentType.DanhSachYeuCauLinhDuocPham,
      SecurityOperation: SecurityOperation.View
    },
    canActivate: [PermisssionGuard]
  },
  {
    path: 'tao-phieu-linh-thuoc-thuong',
    component: TaoPhieuLinhThuocThuongComponent,
    data: {
      title: 'Yêu Cầu Lĩnh Dược Phẩm',
      DocumentType: DocumentType.TaoYeuCauLinhThuongDuocPham,
      SecurityOperation: SecurityOperation.Add
    },
    canActivate: [PermisssionGuard]
  },
  {
    path: 'tao-phieu-linh-thuoc-bu',
    component: TaoPhieuLinhThuocBuComponent,
    data: {
      title: 'Yêu Cầu Lĩnh bù Dược Phẩm',
      DocumentType: DocumentType.TaoYeuCauLinhBuDuocPham,
      SecurityOperation: SecurityOperation.Add
    },
    canActivate: [PermisssionGuard]
  },
  {
    path: 'tao-phieu-linh-thuoc-truc-tiep',
    component: TaoPhieuLinhThuocTrucTiepComponent,
    data: {
      title: 'Yêu Cầu Lĩnh Trực Tiếp Dược Phẩm',
      DocumentType: DocumentType.TaoYeuCauLinhTrucTiepDuocPham, //LinhDuocPhamTrucTiep
      SecurityOperation: SecurityOperation.Add
    },
    canActivate: [PermisssionGuard]
  },
  {
    path: 'gui-lai-phieu-linh-thuoc-thuong/:id',
    component: PhieuLinhThuocThuongGuiLaiComponent,
    data: {
      title: 'Yêu Cầu Lĩnh Dược Phẩm',
      DocumentType: DocumentType.TaoYeuCauLinhThuongDuocPham,
      SecurityOperation: SecurityOperation.Update
    },
    canActivate: [PermisssionGuard]
  },
  {
    path: 'gui-lai-phieu-linh-thuoc-bu/:id',
    component: PhieuLinhThuocBuGuiLaiComponent,
    data: {
      title: 'Yêu Cầu Lĩnh bù Dược Phẩm',
      DocumentType: DocumentType.TaoYeuCauLinhBuDuocPham,
      SecurityOperation: SecurityOperation.Update
    },
    canActivate: [PermisssionGuard]
  },
  {
    path: 'gui-lai-phieu-linh-thuoc-truc-tiep/:id',
    component: PhieuLinhThuocTrucTiepGuiLaiComponent,
    data: {
      title: 'Yêu Cầu Lĩnh Trực Tiếp Dược Phẩm',
      DocumentType: DocumentType.TaoYeuCauLinhTrucTiepDuocPham,
      SecurityOperation: SecurityOperation.Add
    },
    canActivate: [PermisssionGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class YeuCauLinhThuocRoutingModule { }
