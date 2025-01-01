import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DuyetYeuCauLinhKSNKListComponent } from './duyet-yeu-cau-linh-ksnk-list/duyet-yeu-cau-linh-ksnk-list.component';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import { SecurityOperation } from 'src/app/shared/enum/security-operation.enum';
import { PermisssionGuard } from 'src/app/core/guards/permission-guard.service';
import { DuyetYeuCauLinhKSNKThuongComponent } from './duyet-yeu-cau-linh-ksnk-thuong/duyet-yeu-cau-linh-ksnk-thuong.component';
import { DuyetYeuCauLinhKSNKBuComponent } from './duyet-yeu-cau-linh-ksnk-bu/duyet-yeu-cau-linh-ksnk-bu.component';



const routes: Routes = [
  {
    path: '',
    component: DuyetYeuCauLinhKSNKListComponent,
    data: {
      title: 'Danh Sách Duyệt Yêu Cầu Lĩnh Vật Tư',
      DocumentType: DocumentType.DuyetYeuCauLinhKSNK,
      SecurityOperation: SecurityOperation.View
    },
    canActivate: [PermisssionGuard]
  },
  {
    path: 'duyet-phieu-linh-ksnk-thuong/:id/:value',
    component: DuyetYeuCauLinhKSNKThuongComponent,
    data: {
      title: 'Duyệt Phiếu Lĩnh Thường',
      DocumentType: DocumentType.DuyetYeuCauLinhKSNK,
      SecurityOperation: SecurityOperation.Update
    },
    canActivate: [PermisssionGuard]
  },
  {
    path: 'duyet-phieu-linh-ksnk-bu/:id/:value',
    component: DuyetYeuCauLinhKSNKBuComponent,
    data: {
      title: 'Duyệt Phiếu Lĩnh Bù',
      DocumentType: DocumentType.DuyetYeuCauLinhKSNK,
      SecurityOperation: SecurityOperation.Update
    },
    canActivate: [PermisssionGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DuyetYeuCauLinhKSNKRoutingModule { }
