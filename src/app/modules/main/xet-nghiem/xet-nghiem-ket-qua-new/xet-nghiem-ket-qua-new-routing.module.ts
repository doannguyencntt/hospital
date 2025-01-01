import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import { SecurityOperation } from 'src/app/shared/enum/security-operation.enum';
import { PermisssionGuard } from 'src/app/core/guards/permission-guard.service';
import { KetQuaXetNghiemNewListComponent } from './ket-qua-xet-nghiem-new-list/ket-qua-xet-nghiem-new-list.component';
import { KetQuaXetNghiemNewUpdateComponent } from './ket-qua-xet-nghiem-new-update/ket-qua-xet-nghiem-new-update.component';
import { KetQuaXetNghiemNewDetailComponent } from './ket-qua-xet-nghiem-new-detail/ket-qua-xet-nghiem-new-detail.component';

const routes: Routes = [
  {
    path: '',
    component: KetQuaXetNghiemNewListComponent,
    data: {
      title: 'Kết Quả Xét Nghiệm',      
      DocumentType: DocumentType.KetQuaXetNghiem,
      SecurityOperation:SecurityOperation.View
    },
    canActivate: [PermisssionGuard]
  },
  {
    path: 'cap-nhat/:id/:type/:yctn',
    component: KetQuaXetNghiemNewUpdateComponent,
    data: {
      title: 'Cập Nhật Kết Quả Xét Nghiệm',      
      DocumentType: DocumentType.KetQuaXetNghiem,
      SecurityOperation:SecurityOperation.Update
    },
    canActivate: [PermisssionGuard]
  },
  {
    path: 'xem-chi-tiet/:id',
    component: KetQuaXetNghiemNewDetailComponent,
    data: {
      title: 'Xem Kết Quả Xét Nghiệm',      
      DocumentType: DocumentType.KetQuaXetNghiem,
      SecurityOperation:SecurityOperation.Update
    },

    canActivate: [PermisssionGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class XetNghiemKetQuaNEWRoutingModule { }
