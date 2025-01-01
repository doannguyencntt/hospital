import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import { SecurityOperation } from 'src/app/shared/enum/security-operation.enum';
import { PermisssionGuard } from 'src/app/core/guards/permission-guard.service';
import { DanhSachKSNKCanBuComponent } from './danh-sach-ksnk-can-bu.component';


const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: DanhSachKSNKCanBuComponent,
    data: {
      title: 'Danh Sách KSNK Cần Bù',
      DocumentType: DocumentType.TaoYeuCauLinhBuKSNK,
      SecurityOperation: SecurityOperation.View
    },
    canActivate: [PermisssionGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DanhSachKSNKCanBuRoutingModule { }
