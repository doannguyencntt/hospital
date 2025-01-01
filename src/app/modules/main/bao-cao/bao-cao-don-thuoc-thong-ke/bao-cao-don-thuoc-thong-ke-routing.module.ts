import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { SecurityOperation } from 'src/app/shared/enum/security-operation.enum';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import { PermisssionGuard } from 'src/app/core/guards/permission-guard.service';
import { BaoCaoDonThuocThongKeListComponent } from './bao-cao-don-thuoc-thong-ke-list/bao-cao-don-thuoc-thong-ke-list.component';
const routes: Routes = [
  {
      path: '',
      component: BaoCaoDonThuocThongKeListComponent,
      data: {
          title: 'Báo cáo thống kê đơn thuốc',
          DocumentType: DocumentType.BaoCaoBSDanhSachKhamNgoaiTru,
          SecurityOperation: SecurityOperation.View
      },
      canActivate: [PermisssionGuard]
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BaoCaoDonThuocThongKeRoutingModule { }
