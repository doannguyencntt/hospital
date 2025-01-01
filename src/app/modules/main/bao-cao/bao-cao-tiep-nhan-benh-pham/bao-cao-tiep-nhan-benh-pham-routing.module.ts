import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { PermisssionGuard } from 'src/app/core/guards/permission-guard.service';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import { BaoCaoTiepNhanBenhPhamListComponent } from './bao-cao-tiep-nhan-benh-pham-list/bao-cao-tiep-nhan-benh-pham-list.component';
import { SecurityOperation } from 'src/app/shared/enum/security-operation.enum';

const routes: Routes = [
  {
    path: '',
    component: BaoCaoTiepNhanBenhPhamListComponent,
    data: {
      title: 'Báo cáo xuất nhập tồn',
      DocumentType: DocumentType.BaoCaoTiepNhanBenhPham,
      SecurityOperation: SecurityOperation.View
    },
    canActivate: [PermisssionGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BaoCaoTiepNhanBenhPhamRoutingModule { }
