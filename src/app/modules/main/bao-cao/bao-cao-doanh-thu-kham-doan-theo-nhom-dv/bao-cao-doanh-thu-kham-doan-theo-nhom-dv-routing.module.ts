import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PermisssionGuard } from 'src/app/core/guards/permission-guard.service';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import { SecurityOperation } from 'src/app/shared/enum/security-operation.enum';
import { BaoCaoDoanhThuKhamDoanTheoNhomDvListComponent } from './bao-cao-doanh-thu-kham-doan-theo-nhom-dv-list/bao-cao-doanh-thu-kham-doan-theo-nhom-dv-list.component';


const routes: Routes = [
  {
    path: '',
    component: BaoCaoDoanhThuKhamDoanTheoNhomDvListComponent,
    data: {
      title: 'Báo cáo doanh thu khám đoàn theo nhóm dịch vụ',
      DocumentType: DocumentType.BaoCaoDoanhThuKhamDoanTheoNhomDV,
      SecurityOperation: SecurityOperation.View
    },
    canActivate: [PermisssionGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BaoCaoDoanhThuKhamDoanTheoNhomDvRoutingModule { }