import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PermisssionGuard } from 'src/app/core/guards/permission-guard.service';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import { SecurityOperation } from 'src/app/shared/enum/security-operation.enum';
import { CongNoBaoHiemTuNhanListComponent } from './cong-no-bao-hiem-tu-nhan-list/cong-no-bao-hiem-tu-nhan-list.component';


const routes: Routes = [
  {
    path: '',
    component: CongNoBaoHiemTuNhanListComponent,
    data: {
      title: 'Công nợ bảo hiểm tư nhân',
      DocumentType: DocumentType.CongNoBhtn,
      SecurityOperation: SecurityOperation.View
    },
    canActivate: [PermisssionGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CongNoBaoHiemTuNhanRoutingModule { }
