import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { SecurityOperation } from 'src/app/shared/enum/security-operation.enum';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import { PermisssionGuard } from 'src/app/core/guards/permission-guard.service';
import { BaoCaoBsDsKhamNgoaiTruComponent } from './bao-cao-bs-ds-kham-ngoai-tru/bao-cao-bs-ds-kham-ngoai-tru.component';
const routes: Routes = [
  {
      path: '',
      component: BaoCaoBsDsKhamNgoaiTruComponent,
      data: {
          title: 'Báo cáo người bệnh khám ngoại trú',
          DocumentType: DocumentType.BaoCaoBSDanhSachKhamNgoaiTru,
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
