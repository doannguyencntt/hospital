import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { SecurityOperation } from 'src/app/shared/enum/security-operation.enum';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import { PermisssionGuard } from 'src/app/core/guards/permission-guard.service';
import { BaoCaoChiTietMienPhiTronVienListComponent } from './bao-cao-chi-tiet-mien-phi-tron-vien-list/bao-cao-chi-tiet-mien-phi-tron-vien-list.component';
const routes: Routes = [
  {
      path: '',
      component: BaoCaoChiTietMienPhiTronVienListComponent,
      data: {
          title: 'Báo cáo chi tiết miễn phí, giảm phí',
          DocumentType: DocumentType.BaoCaoChiTietMienPhiTronVien,
          SecurityOperation: SecurityOperation.View
      },
      canActivate: [PermisssionGuard]
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BaoCaoChiTietMienPhiTronVienRoutingModule { }
