import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DanhSachYeuCauLinhVatTuComponent } from './danh-sach-yeu-cau-linh-vat-tu/danh-sach-yeu-cau-linh-vat-tu.component';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import { SecurityOperation } from 'src/app/shared/enum/security-operation.enum';
import { PermisssionGuard } from 'src/app/core/guards/permission-guard.service';
import { TaoPhieuLinhVatTuThuongComponent } from './tao-phieu-linh-vat-tu-thuong/tao-phieu-linh-vat-tu-thuong.component';
import { TaoPhieuLinhVatTuBuComponent } from './tao-phieu-linh-vat-tu-bu/tao-phieu-linh-vat-tu-bu.component';
import { TaoPhieuLinhVatTuTrucTiepComponent } from './tao-phieu-linh-vat-tu-truc-tiep/tao-phieu-linh-vat-tu-truc-tiep.component';
import { PhieuLinhVatTuThuongGuiLaiComponent } from './phieu-linh-vat-tu-thuong-gui-lai/phieu-linh-vat-tu-thuong-gui-lai.component';
import { PhieuLinhVatTuBuGuiLaiComponent } from './phieu-linh-vat-tu-bu-gui-lai/phieu-linh-vat-tu-bu-gui-lai.component';
import { PhieuLinhVatTuTrucTiepGuiLaiComponent } from './phieu-linh-vat-tu-truc-tiep-gui-lai/phieu-linh-vat-tu-truc-tiep-gui-lai.component';


const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: DanhSachYeuCauLinhVatTuComponent,
    data: {
      title: 'Danh Sách Yêu Cầu Lĩnh Vật Tư',
      DocumentType: DocumentType.DanhSachYeuCauLinhVatTu,
      SecurityOperation: SecurityOperation.View
    },
    canActivate: [PermisssionGuard]
  },
  {
    path: 'tao-phieu-linh-vat-tu-thuong',
    component: TaoPhieuLinhVatTuThuongComponent,
    data: {
      title: 'Yêu Cầu Lĩnh Vật Tư',
      DocumentType: DocumentType.TaoYeuCauLinhThuongVatTu,
      SecurityOperation: SecurityOperation.View
    },
    canActivate: [PermisssionGuard]
  },
  {
    path: 'tao-phieu-linh-vat-tu-bu',
    component: TaoPhieuLinhVatTuBuComponent,
    data: {
      title: 'Yêu Cầu Lĩnh Bù Vật Tư',
      DocumentType: DocumentType.TaoYeuCauLinhThuongVatTu,
      SecurityOperation: SecurityOperation.View
    },
    canActivate: [PermisssionGuard]
  },
  {
    path: 'tao-phieu-linh-vat-tu-truc-tiep',
    component: TaoPhieuLinhVatTuTrucTiepComponent,
    data: {
      title: 'Yêu Cầu Lĩnh Trực Tiếp Vật Tư',
      DocumentType: DocumentType.TaoYeuCauLinhTrucTiepVatTu,
      SecurityOperation: SecurityOperation.View
    },
    canActivate: [PermisssionGuard]
  },
  {
    path: 'gui-lai-phieu-linh-vat-tu-thuong/:id',
    component: PhieuLinhVatTuThuongGuiLaiComponent,
    data: {
      title: 'Yêu Cầu Lĩnh Vật Tư',
      DocumentType: DocumentType.TaoYeuCauLinhThuongVatTu,
      SecurityOperation: SecurityOperation.View
    },
    canActivate: [PermisssionGuard]
  },
  {
    path: 'gui-lai-phieu-linh-vat-tu-bu/:id',
    component: PhieuLinhVatTuBuGuiLaiComponent,
    data: {
      title: 'Yêu Cầu Lĩnh Bù Vật Tư',
      DocumentType: DocumentType.TaoYeuCauLinhBuVatTu,
      SecurityOperation: SecurityOperation.View
    },
    canActivate: [PermisssionGuard]
  },
  {
    path: 'gui-lai-phieu-linh-vat-tu-truc-tiep/:id',
    component: PhieuLinhVatTuTrucTiepGuiLaiComponent,
    data: {
      title: 'Yêu Cầu Lĩnh Trực Tiếp Vật Tư',
      DocumentType: DocumentType.TaoYeuCauLinhTrucTiepVatTu,
      SecurityOperation: SecurityOperation.View
    },
    canActivate: [PermisssionGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class YeuCauLinhVatTuRoutingModule { }
