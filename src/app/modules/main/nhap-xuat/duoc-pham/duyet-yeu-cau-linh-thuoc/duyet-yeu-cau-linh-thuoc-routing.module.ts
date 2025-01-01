import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DuyetYeuCauLinhThuocListComponent } from './duyet-yeu-cau-linh-thuoc-list/duyet-yeu-cau-linh-thuoc-list.component';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import { SecurityOperation } from 'src/app/shared/enum/security-operation.enum';
import { PermisssionGuard } from 'src/app/core/guards/permission-guard.service';
import { DuyetYeuCauLinhThuocThuongComponent } from './duyet-yeu-cau-linh-thuoc-thuong/duyet-yeu-cau-linh-thuoc-thuong.component';
import { DuyetYeuCauLinhThuocBuComponent } from './duyet-yeu-cau-linh-thuoc-bu/duyet-yeu-cau-linh-thuoc-bu.component';
import { DuyetYeuCauLinhThuocTrucTiepComponent } from './duyet-yeu-cau-linh-thuoc-truc-tiep/duyet-yeu-cau-linh-thuoc-truc-tiep.component';


const routes: Routes = [
  {
    path: '',
    component: DuyetYeuCauLinhThuocListComponent,
    data: {
      title: 'Danh Sách Duyệt Yêu Cầu Lĩnh Thuốc',
      DocumentType: DocumentType.DuyetYeuCauLinhDuocPham,
      SecurityOperation: SecurityOperation.View
    },
    canActivate: [PermisssionGuard]
  },
  {
    path: 'duyet-phieu-linh-thuoc-thuong/:id',
    component: DuyetYeuCauLinhThuocThuongComponent,
    data: {
      title: 'Duyệt Phiếu Lĩnh Thường',
      DocumentType: DocumentType.DuyetYeuCauLinhDuocPham,
      SecurityOperation: SecurityOperation.View
    },
    canActivate: [PermisssionGuard]
  },
  {
    path: 'duyet-phieu-linh-thuoc-bu/:id',
    component: DuyetYeuCauLinhThuocBuComponent,
    data: {
      title: 'Duyệt Phiếu Lĩnh Bù',
      DocumentType: DocumentType.DuyetYeuCauLinhDuocPham,
      SecurityOperation: SecurityOperation.View
    },
    canActivate: [PermisssionGuard]
  },
  {
    path: 'duyet-phieu-linh-thuoc-truc-tiep/:id',
    component: DuyetYeuCauLinhThuocTrucTiepComponent,
    data: {
      title: 'Duyệt Phiếu Lĩnh Trực tiếp',
      DocumentType: DocumentType.DuyetYeuCauLinhDuocPham,
      SecurityOperation: SecurityOperation.View
    },
    canActivate: [PermisssionGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DuyetYeuCauLinhThuocRoutingModule { }
