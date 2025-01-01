import { NgModule } from '@angular/core';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import { RouterModule, Routes } from '@angular/router';
import { BaoCaoHoatDongNoiTruListComponent } from './bao-cao-hoat-dong-noi-tru-list/bao-cao-hoat-dong-noi-tru-list.component';
import { SecurityOperation } from 'src/app/shared/enum/security-operation.enum';
import { PermisssionGuard } from 'src/app/core/guards/permission-guard.service';


const routes: Routes = [
  {
    path: '',
    component: BaoCaoHoatDongNoiTruListComponent,
    data: {
      title: 'Báo cáo hoạt động nội trú',
      DocumentType: DocumentType.BaoCaoBangKeGiaoHoaDonSangPKT,
      SecurityOperation: SecurityOperation.View
    },
    canActivate: [PermisssionGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BaoCaoHoatDongNoiTruRoutingModule { }