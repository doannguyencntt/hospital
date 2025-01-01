import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { SecurityOperation } from 'src/app/shared/enum/security-operation.enum';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import { PermisssionGuard } from 'src/app/core/guards/permission-guard.service';
import { BaoCaoTinhHinhNhapNccChiTietListComponent } from './bao-cao-tinh-hinh-nhap-ncc-chi-tiet-list/bao-cao-tinh-hinh-nhap-ncc-chi-tiet-list.component';
const routes: Routes = [
  {
      path: '',
      component: BaoCaoTinhHinhNhapNccChiTietListComponent,
      data: {
          title: 'Báo cáo tình hình nhập nhà cung cấp chi tiết',
          DocumentType: DocumentType.BaoCaoTinhHinhNhapNCCChiTiet,
          SecurityOperation: SecurityOperation.View
      },
      canActivate: [PermisssionGuard]
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BaoCaoTinhHinhNhapNccChiTietRoutingModule { }
