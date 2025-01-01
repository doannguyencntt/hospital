import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import { TiepNhanBenhNhanComponent } from './tiep-nhan-benh-nhan/tiep-nhan-benh-nhan.component';
import { SecurityOperation } from 'src/app/shared/enum/security-operation.enum';
import { PermisssionGuard } from 'src/app/core/guards/permission-guard.service';

const routes: Routes = [
  {
    path: ':id',
    component: TiepNhanBenhNhanComponent,
    data: {
      title: 'Tiếp Nhận Người Bệnh',      
      DocumentType: DocumentType.YeuCauTiepNhan,
      SecurityOperation:SecurityOperation.View
    },
    canActivate: [PermisssionGuard]
  },
  {
    path: '',
    component: TiepNhanBenhNhanComponent,
    data: {
      title: 'Tiếp Nhận Người Bệnh',      
      DocumentType: DocumentType.YeuCauTiepNhan,
      SecurityOperation:SecurityOperation.View
    },
    canActivate: [PermisssionGuard]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TiepNhanBenhNhanRoutingModule { }
