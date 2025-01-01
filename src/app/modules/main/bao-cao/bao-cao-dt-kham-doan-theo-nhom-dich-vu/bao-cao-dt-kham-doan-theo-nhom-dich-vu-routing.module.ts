import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PermisssionGuard } from 'src/app/core/guards/permission-guard.service';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import { SecurityOperation } from 'src/app/shared/enum/security-operation.enum';
import { BaoCaoDtKhamDoanTheoNhomDichVuListComponent } from './bao-cao-dt-kham-doan-theo-nhom-dich-vu-list/bao-cao-dt-kham-doan-theo-nhom-dich-vu-list.component';



const routes: Routes = [
  {
    path: '',
    component: BaoCaoDtKhamDoanTheoNhomDichVuListComponent,
    data: {
      title: 'Báo cáo doanh thu khám đoàn theo nhóm dịch vụ ',
      DocumentType: DocumentType.BaoCaoDoanhThuKhamDoanTheoNhomDichVu,
      SecurityOperation: SecurityOperation.View
    },
    canActivate: [PermisssionGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BaoCaoDtKhamDoanTheoNhomDichVuRoutingModule { }
