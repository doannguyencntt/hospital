import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PermisssionGuard } from 'src/app/core/guards/permission-guard.service';
import { SecurityOperation } from 'src/app/shared/enum/security-operation.enum';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import { QuayThuocChoThanhToanComponent } from './quay-thuoc-cho-thanh-toan/quay-thuoc-cho-thanh-toan.component';
import { QuayThuocMuaThuocComponent } from './quay-thuoc-mua-thuoc/quay-thuoc-mua-thuoc.component';
import { QuayThuocToaThuocCuComponent } from './quay-thuoc-toa-thuoc-cu/quay-thuoc-toa-thuoc-cu.component';
import { QuayThuocKhachVangLaiComponent } from './quay-thuoc-khach-vang-lai/quay-thuoc-khach-vang-lai.component';

const routes: Routes = [{
  path: '',
  component: QuayThuocChoThanhToanComponent,
  data: {
    title: 'Tìm thông tin',
    DocumentType: DocumentType.QuayThuoc,
    SecurityOperation: SecurityOperation.View
  },
  canActivate: [PermisssionGuard]
},
{
  path: 'mua-thuoc/:id/:idsub/:tt/:ttcheck',
  component: QuayThuocMuaThuocComponent,
  data: {
    title: 'Mua thuốc',
    DocumentType: DocumentType.QuayThuoc,
    SecurityOperation: SecurityOperation.Update
  },
  canActivate: [PermisssionGuard]
},
{
  path: 'mua-toa-cu/:id/:ttcheck',
  component: QuayThuocToaThuocCuComponent,
  data: {
    title: 'Mua thuốc',
    DocumentType: DocumentType.QuayThuoc,
    SecurityOperation: SecurityOperation.Update
  },
  canActivate: [PermisssionGuard]
},
{
  path: 'khach-vang-lai',
  component: QuayThuocKhachVangLaiComponent,
  data: {
    title: 'Mua thuốc',
    DocumentType: DocumentType.QuayThuoc,
    SecurityOperation: SecurityOperation.Update
  },
  canActivate: [PermisssionGuard]
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class QuayThuocRoutingModule { }
