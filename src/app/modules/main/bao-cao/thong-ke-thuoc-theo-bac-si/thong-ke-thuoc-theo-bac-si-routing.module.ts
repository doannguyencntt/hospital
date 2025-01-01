import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PermisssionGuard } from 'src/app/core/guards/permission-guard.service';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import { SecurityOperation } from 'src/app/shared/enum/security-operation.enum';
import { ThongKeThuocTheoBacSiNewComponent } from './thong-ke-thuoc-theo-bac-si-new/thong-ke-thuoc-theo-bac-si-new.component';
import { ThongKeThuocTheoBacSiComponent } from './thong-ke-thuoc-theo-bac-si/thong-ke-thuoc-theo-bac-si.component';

const routes: Routes = [
  // {
  //   path: '',
  //   component: ThongKeThuocTheoBacSiComponent,
  //   data: {
  //     title: 'Thống kê thuốc theo bác sĩ',
  //     DocumentType: DocumentType.ThongKeThuocTheoBacSi,
  //     SecurityOperation: SecurityOperation.View
  //   },
  //   canActivate: [PermisssionGuard]
  // },
    {
    path: '',
    component: ThongKeThuocTheoBacSiNewComponent,
    data: {
      title: 'Thống kê thuốc theo bác sĩ',
      DocumentType: DocumentType.ThongKeThuocTheoBacSi,
      SecurityOperation: SecurityOperation.View
    },
    canActivate: [PermisssionGuard]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class ThongKeThuocTheoBacSiRoutingModule { }
