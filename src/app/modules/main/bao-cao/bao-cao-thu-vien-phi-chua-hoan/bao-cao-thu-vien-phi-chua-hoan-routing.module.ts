import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PermisssionGuard } from 'src/app/core/guards/permission-guard.service';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import { SecurityOperation } from 'src/app/shared/enum/security-operation.enum';
import { BaoCaoThuVienPhiChuaHoanListComponent } from './bao-cao-thu-vien-phi-chua-hoan-list/bao-cao-thu-vien-phi-chua-hoan-list.component';

const routes: Routes = [
  {
    path: '',
    component: BaoCaoThuVienPhiChuaHoanListComponent,
    data: {
      title: 'Báo cáo hoạt động khám bệnh theo dịch vụ',
      DocumentType: DocumentType.BaoCaoThuVienPhiChuaHoan,
      SecurityOperation: SecurityOperation.View
    },
    canActivate: [PermisssionGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BaoCaoThuVienPhiChuaHoanRoutingModule { }
