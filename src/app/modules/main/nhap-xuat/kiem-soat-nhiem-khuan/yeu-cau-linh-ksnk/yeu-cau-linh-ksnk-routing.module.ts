import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DanhSachYeuCauLinhKSNKComponent } from './danh-sach-yeu-cau-linh-ksnk/danh-sach-yeu-cau-linh-ksnk.component';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import { SecurityOperation } from 'src/app/shared/enum/security-operation.enum';
import { PermisssionGuard } from 'src/app/core/guards/permission-guard.service';
import { TaoPhieuLinhKSNKThuongComponent } from './tao-phieu-linh-ksnk-thuong/tao-phieu-linh-ksnk-thuong.component';
import { TaoPhieuLinhKSNKBuComponent } from './tao-phieu-linh-ksnk-bu/tao-phieu-linh-ksnk-bu.component';
import { PhieuLinhKSNKThuongGuiLaiComponent } from './phieu-linh-ksnk-thuong-gui-lai/phieu-linh-ksnk-thuong-gui-lai.component';
import { PhieuLinhKSNKBuGuiLaiComponent } from './phieu-linh-ksnk-bu-gui-lai/phieu-linh-ksnk-bu-gui-lai.component';



const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: DanhSachYeuCauLinhKSNKComponent,
    data: {
      title: 'Danh Sách Yêu Cầu Lĩnh Vật Tư',
      DocumentType: DocumentType.DanhSachYeuCauLinhKSNK,
      SecurityOperation: SecurityOperation.View
    },
    canActivate: [PermisssionGuard]
  },
  {
    path: 'tao-phieu-linh-ksnk-thuong',
    component: TaoPhieuLinhKSNKThuongComponent,
    data: {
      title: 'Yêu Cầu Lĩnh Vật Tư',
      DocumentType: DocumentType.TaoYeuCauLinhThuongKSNK,
      SecurityOperation: SecurityOperation.View
    },
    canActivate: [PermisssionGuard]
  },
  {
    path: 'tao-phieu-linh-ksnk-bu',
    component: TaoPhieuLinhKSNKBuComponent,
    data: {
      title: 'Yêu Cầu Lĩnh Bù Vật Tư',
      DocumentType: DocumentType.TaoYeuCauLinhThuongKSNK,
      SecurityOperation: SecurityOperation.View
    },
    canActivate: [PermisssionGuard]
  },
  {
    path: 'gui-lai-phieu-linh-ksnk-thuong/:id/:value/:valueChiTiet',
    component: PhieuLinhKSNKThuongGuiLaiComponent,
    data: {
      title: 'Yêu Cầu Lĩnh Vật Tư',
      DocumentType: DocumentType.TaoYeuCauLinhThuongKSNK,
      SecurityOperation: SecurityOperation.View
    },
    canActivate: [PermisssionGuard]
  },
  {
    path: 'gui-lai-phieu-linh-ksnk-bu/:id/:value',
    component: PhieuLinhKSNKBuGuiLaiComponent,
    data: {
      title: 'Yêu Cầu Lĩnh Bù Vật Tư',
      DocumentType: DocumentType.TaoYeuCauLinhBuKSNK,
      SecurityOperation: SecurityOperation.View
    },
    canActivate: [PermisssionGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class YeuCauLinhKSNKRoutingModule { }
