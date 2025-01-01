import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { SecurityOperation } from 'src/app/shared/enum/security-operation.enum';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import { PermisssionGuard } from 'src/app/core/guards/permission-guard.service';
import { BaoCaoLuuTruBenhAnComponent } from './bao-cao-luu-tru-benh-an/bao-cao-luu-tru-benh-an.component';
const routes: Routes = [
  {
      path: '',
      component: BaoCaoLuuTruBenhAnComponent,
      data: {
          title: 'Báo cáo lưu trữ hố sơ bệnh án',
          DocumentType: DocumentType.BaoCaoLuuTruHoSoBenhAn,
          SecurityOperation: SecurityOperation.View
      },
      canActivate: [PermisssionGuard]
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BaoCaoLuuTruBenhAnRoutingModule { }
