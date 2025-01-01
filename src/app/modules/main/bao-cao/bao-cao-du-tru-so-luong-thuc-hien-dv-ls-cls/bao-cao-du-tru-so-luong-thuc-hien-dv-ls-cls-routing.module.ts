import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SecurityOperation } from 'src/app/shared/enum/security-operation.enum';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import { PermisssionGuard } from 'src/app/core/guards/permission-guard.service';
import { BaoCaoDuTruSoLuongThucHienDvLsClsListComponent } from './bao-cao-du-tru-so-luong-thuc-hien-dv-ls-cls-list/bao-cao-du-tru-so-luong-thuc-hien-dv-ls-cls-list.component';


const routes: Routes = [
  {
    path: '',
    component: BaoCaoDuTruSoLuongThucHienDvLsClsListComponent,
    data: {
      title: 'Dự trù số lượng người khám sức khỏe thực hiện dịch vụ lâm sàng - cận lâm sàng',
      DocumentType: DocumentType.KhamDoanThongKeSoNguoiKhamSucKhoeLSCLS,
      SecurityOperation: SecurityOperation.View
    },
    canActivate: [PermisssionGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BaoCaoDuTruSoLuongThucHienDvLsClsRoutingModule { }
