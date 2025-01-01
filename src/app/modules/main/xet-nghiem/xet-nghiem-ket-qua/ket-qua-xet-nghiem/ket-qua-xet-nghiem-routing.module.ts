import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { KetQuaXetNghiemListComponent } from './ket-qua-xet-nghiem-list/ket-qua-xet-nghiem-list.component';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import { SecurityOperation } from 'src/app/shared/enum/security-operation.enum';
import { PermisssionGuard } from 'src/app/core/guards/permission-guard.service';
import { KetQuaXetNghiemUpdateComponent } from './ket-qua-xet-nghiem-update/ket-qua-xet-nghiem-update.component';
import { KetQuaXetNghiemDetailComponent } from './ket-qua-xet-nghiem-detail/ket-qua-xet-nghiem-detail.component';

const routes: Routes = [
  {
    path: '',
    component: KetQuaXetNghiemListComponent,
    data: {
      title: 'Kết Quả Xét Nghiệm',      
      DocumentType: DocumentType.KetQuaXetNghiem,
      SecurityOperation:SecurityOperation.View
    },
    canActivate: [PermisssionGuard]
  },
  {
    path: 'cap-nhat/:id/:type/:yctn',
    component: KetQuaXetNghiemUpdateComponent,
    data: {
      title: 'Cập Nhật Kết Quả Xét Nghiệm',      
      DocumentType: DocumentType.KetQuaXetNghiem,
      SecurityOperation:SecurityOperation.Update
    },
    canActivate: [PermisssionGuard]
  },
  {
    path: 'xem-chi-tiet/:id',
    component: KetQuaXetNghiemDetailComponent,
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
export class KetQuaXetNghiemRoutingModule { }
