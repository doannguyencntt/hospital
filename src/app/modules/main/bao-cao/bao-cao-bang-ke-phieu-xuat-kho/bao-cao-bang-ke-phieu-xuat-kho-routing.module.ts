import { NgModule } from '@angular/core';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import { BaoCaoBangKePhieuXuatKhoListComponent } from './bao-cao-bang-ke-phieu-xuat-kho-list/bao-cao-bang-ke-phieu-xuat-kho-list.component';
import { RouterModule, Routes } from '@angular/router';
import { SecurityOperation } from 'src/app/shared/enum/security-operation.enum';
import { PermisssionGuard } from 'src/app/core/guards/permission-guard.service';

const routes: Routes = [
  {
    path: '',
    component: BaoCaoBangKePhieuXuatKhoListComponent,
    data: {
      title: 'Báo cáo bảng kê phiếu xuất kho',
      DocumentType: DocumentType.BaoCaoBangKePhieuXuatKho,
      SecurityOperation: SecurityOperation.View
    },
    canActivate: [PermisssionGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BaoCaoBangKePhieuXuatKhoRoutingModule { }