import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PermisssionGuard } from 'src/app/core/guards/permission-guard.service';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import { SecurityOperation } from 'src/app/shared/enum/security-operation.enum';
import { NhapGiaMauDetailComponent } from './nhap-gia-mau-detail/nhap-gia-mau-detail.component';
import { NhapGiaMauListComponent } from './nhap-gia-mau-list/nhap-gia-mau-list.component';


const routes: Routes = [
  {
    path: '',
    component: NhapGiaMauListComponent,
    data: {
      title: 'Danh sách nhập giá máu',
      DocumentType: DocumentType.DuyetNhapKhoMau,
      SecurityOperation: SecurityOperation.View
    },
    canActivate: [PermisssionGuard]
  },
  {
    path: 'chi-tiet/:id',
    component: NhapGiaMauDetailComponent,
    data: {
      title: 'Chi tiết phiếu nhập giá máu',
      DocumentType: DocumentType.DuyetNhapKhoMau,
      SecurityOperation: SecurityOperation.Update
    },
    canActivate: [PermisssionGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NhapGiaMauRoutingModule { }
