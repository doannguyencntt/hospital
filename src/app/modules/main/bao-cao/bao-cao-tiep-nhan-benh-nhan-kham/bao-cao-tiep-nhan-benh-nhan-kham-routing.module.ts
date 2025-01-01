import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SecurityOperation } from 'src/app/shared/enum/security-operation.enum';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import { PermisssionGuard } from 'src/app/core/guards/permission-guard.service';
import { BaoCaoTiepNhanBenhNhanKhamListComponent } from './bao-cao-tiep-nhan-benh-nhan-kham-list/bao-cao-tiep-nhan-benh-nhan-kham-list.component';

const routes: Routes = [
  {
    path: '',
    component: BaoCaoTiepNhanBenhNhanKhamListComponent,
    data: {
      title: 'Báo cáo tiếp nhận người bệnh khám',
      DocumentType: DocumentType.BaoCaoTiepNhanBenhNhanKham,
      SecurityOperation: SecurityOperation.View
    },
    canActivate: [PermisssionGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BaoCaoTiepNhanBenhNhanKhamRoutingModule { }
