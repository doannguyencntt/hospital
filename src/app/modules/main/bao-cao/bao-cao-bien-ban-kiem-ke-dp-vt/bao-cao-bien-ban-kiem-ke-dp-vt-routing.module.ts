import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SecurityOperation } from 'src/app/shared/enum/security-operation.enum';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import { PermisssionGuard } from 'src/app/core/guards/permission-guard.service';
import { BaoCaoBienBanKiemKeDpVtListComponent } from './bao-cao-bien-ban-kiem-ke-dp-vt-list/bao-cao-bien-ban-kiem-ke-dp-vt-list.component';


const routes: Routes = [
  {
    path: '',
    component: BaoCaoBienBanKiemKeDpVtListComponent,
    data: {
      title: 'Báo cáo biên bản kiểm kê',
      DocumentType: DocumentType.BaoCaoBienBanKiemKeDuocVT,
      SecurityOperation: SecurityOperation.View
    },
    canActivate: [PermisssionGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BaoCaoBienBanKiemKeDpVtRoutingModule { }
