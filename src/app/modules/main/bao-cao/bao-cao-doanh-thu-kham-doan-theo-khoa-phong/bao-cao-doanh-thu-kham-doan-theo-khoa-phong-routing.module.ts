import { NgModule } from '@angular/core';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import { RouterModule, Routes } from '@angular/router';
import { BaoCaoDoanhThuKhamDoanTheoKhoaPhongListComponent } from './bao-cao-doanh-thu-kham-doan-theo-khoa-phong-list/bao-cao-doanh-thu-kham-doan-theo-khoa-phong-list.component';
import { SecurityOperation } from 'src/app/shared/enum/security-operation.enum';
import { PermisssionGuard } from 'src/app/core/guards/permission-guard.service';


const routes: Routes = [
  {
    path: '',
    component: BaoCaoDoanhThuKhamDoanTheoKhoaPhongListComponent,
    data: {
      title: 'Báo cáo doanh thu khám đoàn theo khoa phòng',
      DocumentType: DocumentType.BaoCaoDoanhThuKhamDoanTheoKP,
      SecurityOperation: SecurityOperation.View
    },
    canActivate: [PermisssionGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BaoCaoDoanhThuKhamDoanTheoKhoaPhongRoutingModule { }