import { NgModule } from '@angular/core';
import { BaoCaoBenhNhanKhamNgoaiTruListComponent } from './bao-cao-benh-nhan-kham-ngoai-tru-list/bao-cao-benh-nhan-kham-ngoai-tru-list.component';
import { RouterModule, Routes } from '@angular/router';
import { SecurityOperation } from 'src/app/shared/enum/security-operation.enum';
import { PermisssionGuard } from 'src/app/core/guards/permission-guard.service';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';

const routes: Routes = [
  {
      path: '',
      component: BaoCaoBenhNhanKhamNgoaiTruListComponent,
      data: {
          title: 'Báo cáo người bệnh khám ngoại trú',
          DocumentType: DocumentType.BaoCaoBenhNhanKhamNgoaiTru,
          SecurityOperation: SecurityOperation.View
      },
      canActivate: [PermisssionGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BaoCaoBenhNhanKhamNgoaiTruRoutingModule { }