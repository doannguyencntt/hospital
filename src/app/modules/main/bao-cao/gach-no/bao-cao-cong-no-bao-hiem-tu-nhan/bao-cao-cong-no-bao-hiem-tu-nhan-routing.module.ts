import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PermisssionGuard } from 'src/app/core/guards/permission-guard.service';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import { SecurityOperation } from 'src/app/shared/enum/security-operation.enum';
import { BaoCaoCongNoBaoHiemTuNhanListComponent } from './bao-cao-cong-no-bao-hiem-tu-nhan-list/bao-cao-cong-no-bao-hiem-tu-nhan-list.component';


const routes: Routes = [
  {
    path: '',
    component: BaoCaoCongNoBaoHiemTuNhanListComponent,
    data: {
      title: 'Báo cáo công nợ công ty bảo hiểm tư nhân',
      DocumentType: DocumentType.BaoCaoCongNoCongTyBhtn,
      SecurityOperation: SecurityOperation.View
    },
    canActivate: [PermisssionGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BaoCaoCongNoBaoHiemTuNhanRoutingModule { }
