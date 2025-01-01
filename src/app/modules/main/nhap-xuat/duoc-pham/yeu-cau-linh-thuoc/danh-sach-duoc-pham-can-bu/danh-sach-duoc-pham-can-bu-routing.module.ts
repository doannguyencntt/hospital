import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import { SecurityOperation } from 'src/app/shared/enum/security-operation.enum';
import { PermisssionGuard } from 'src/app/core/guards/permission-guard.service';
import { DanhSachDuocPhamCanBuComponent } from './danh-sach-duoc-pham-can-bu.component';


const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: DanhSachDuocPhamCanBuComponent,
    data: {
      title: 'Danh Sách Dược Phẩm Cần Bù',
      DocumentType: DocumentType.TaoYeuCauLinhBuDuocPham,
      SecurityOperation: SecurityOperation.View
    },
    canActivate: [PermisssionGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DanhSachDuocPhamCanBuRoutingModule { }
