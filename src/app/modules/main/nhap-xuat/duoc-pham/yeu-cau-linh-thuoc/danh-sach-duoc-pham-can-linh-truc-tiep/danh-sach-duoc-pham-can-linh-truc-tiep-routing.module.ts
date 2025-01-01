import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import { SecurityOperation } from 'src/app/shared/enum/security-operation.enum';
import { PermisssionGuard } from 'src/app/core/guards/permission-guard.service';
import { DanhSachDuocPhamCanLinhTrucTiepComponent } from './danh-sach-duoc-pham-can-linh-truc-tiep.component';


const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: DanhSachDuocPhamCanLinhTrucTiepComponent,
    data: {
      title: 'Danh Sách Dược Phẩm Cần Lĩnh Trực Tiếp',
      DocumentType: DocumentType.TaoYeuCauLinhTrucTiepDuocPham,
      SecurityOperation: SecurityOperation.View
    },
    canActivate: [PermisssionGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DanhSachDuocPhamCanLinhTrucTiepRoutingModule { }
