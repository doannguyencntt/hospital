import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SecurityOperation } from 'src/app/shared/enum/security-operation.enum';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import { PermisssionGuard } from 'src/app/core/guards/permission-guard.service';
import { BaoCaoBenhNhanLamXetNghiemListComponent } from './bao-cao-benh-nhan-lam-xet-nghiem-list/bao-cao-benh-nhan-lam-xet-nghiem-list.component';


const routes: Routes = [
  {
    path: '',
    component: BaoCaoBenhNhanLamXetNghiemListComponent,
    data: {
      title: 'Báo cáo xuất nhập tồn',
      DocumentType: DocumentType.BaoCaoBenhNhanLamXetNghiem,
      SecurityOperation: SecurityOperation.View
    },
    canActivate: [PermisssionGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BaoCaoBenhNhanLamXetNghiemRoutingModule { }
