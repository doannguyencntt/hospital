import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PermisssionGuard } from 'src/app/core/guards/permission-guard.service';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import { SecurityOperation } from 'src/app/shared/enum/security-operation.enum';
import { NhapKhoMauCreateComponent } from './nhap-kho-mau-create/nhap-kho-mau-create.component';
import { NhapKhoMauListComponent } from './nhap-kho-mau-list/nhap-kho-mau-list.component';
import { NhapKhoMauUpdateComponent } from './nhap-kho-mau-update/nhap-kho-mau-update.component';


const routes: Routes = [
  {
    path: '',
    component: NhapKhoMauListComponent,
    data: {
      title: 'Danh sách nhập kho máu',
      DocumentType: DocumentType.NhapKhoMau,
      SecurityOperation: SecurityOperation.View
    },
    canActivate: [PermisssionGuard]
  },
  {
    path: 'them',
    component: NhapKhoMauCreateComponent,
    data: {
      title: 'Nhập máu',
      DocumentType: DocumentType.NhapKhoMau,
      SecurityOperation: SecurityOperation.Add
    },
    canActivate: [PermisssionGuard]
  },
  {
    path: 'chinh-sua/:id',
    component: NhapKhoMauUpdateComponent,
    data: {
      title: 'Chi tiết phiếu nhập máu',
      DocumentType: DocumentType.NhapKhoMau,
      SecurityOperation: SecurityOperation.Update
    },
    canActivate: [PermisssionGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MauRoutingModule { }
