import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DuyetYeuCauLinhVatTuListComponent } from './duyet-yeu-cau-linh-vat-tu-list/duyet-yeu-cau-linh-vat-tu-list.component';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import { SecurityOperation } from 'src/app/shared/enum/security-operation.enum';
import { PermisssionGuard } from 'src/app/core/guards/permission-guard.service';
import { DuyetYeuCauLinhVatTuThuongComponent } from './duyet-yeu-cau-linh-vat-tu-thuong/duyet-yeu-cau-linh-vat-tu-thuong.component';
import { DuyetYeuCauLinhVatTuBuComponent } from './duyet-yeu-cau-linh-vat-tu-bu/duyet-yeu-cau-linh-vat-tu-bu.component';
import { DuyetYeuCauLinhVatTuTrucTiepComponent } from './duyet-yeu-cau-linh-vat-tu-truc-tiep/duyet-yeu-cau-linh-vat-tu-truc-tiep.component';


const routes: Routes = [
  {
    path: '',
    component: DuyetYeuCauLinhVatTuListComponent,
    data: {
      title: 'Danh Sách Duyệt Yêu Cầu Lĩnh Vật Tư',
      DocumentType: DocumentType.DuyetYeuCauLinhVatTu,
      SecurityOperation: SecurityOperation.View
    },
    canActivate: [PermisssionGuard]
  },
  {
    path: 'duyet-phieu-linh-vat-tu-thuong/:id',
    component: DuyetYeuCauLinhVatTuThuongComponent,
    data: {
      title: 'Duyệt Phiếu Lĩnh Thường',
      DocumentType: DocumentType.DuyetYeuCauLinhVatTu,
      SecurityOperation: SecurityOperation.Update
    },
    canActivate: [PermisssionGuard]
  },
  {
    path: 'duyet-phieu-linh-vat-tu-bu/:id',
    component: DuyetYeuCauLinhVatTuBuComponent,
    data: {
      title: 'Duyệt Phiếu Lĩnh Bù',
      DocumentType: DocumentType.DuyetYeuCauLinhVatTu,
      SecurityOperation: SecurityOperation.Update
    },
    canActivate: [PermisssionGuard]
  },
  {
    path: 'duyet-phieu-linh-vat-tu-truc-tiep/:id',
    component: DuyetYeuCauLinhVatTuTrucTiepComponent,
    data: {
      title: 'Duyệt Phiếu Lĩnh Trực tiếp',
      DocumentType: DocumentType.DuyetYeuCauLinhVatTu,
      SecurityOperation: SecurityOperation.Update
    },
    canActivate: [PermisssionGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DuyetYeuCauLinhVatTuRoutingModule { }
