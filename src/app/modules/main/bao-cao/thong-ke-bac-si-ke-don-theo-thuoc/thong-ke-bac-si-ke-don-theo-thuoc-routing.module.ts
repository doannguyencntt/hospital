import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PermisssionGuard } from 'src/app/core/guards/permission-guard.service';
import { SecurityOperation } from 'src/app/shared/enum/security-operation.enum';
import { ThongKeBacSiKeDonTheoThuocComponent } from './thong-ke-bac-si-ke-don-theo-thuoc/thong-ke-bac-si-ke-don-theo-thuoc.component';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';

const routes: Routes = [
  {
    path: '',
    component: ThongKeBacSiKeDonTheoThuocComponent,
    data: {
      title: 'Thống kê bác sĩ kê đơn theo thuốc',
      DocumentType: DocumentType.ThongKeBSKeDonTheoThuoc,
      SecurityOperation: SecurityOperation.View
    },
    canActivate: [PermisssionGuard]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class ThongKeBacSiKeDonTheoThuocRoutingModule { }
