import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import { SecurityOperation } from 'src/app/shared/enum/security-operation.enum';
import { PermisssionGuard } from 'src/app/core/guards/permission-guard.service';
import { DanhSachVatTuCanBuComponent } from './danh-sach-vat-tu-can-bu.component';


const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: DanhSachVatTuCanBuComponent,
    data: {
      title: 'Danh Sách Vật Tư Cần Bù',
      DocumentType: DocumentType.TaoYeuCauLinhBuVatTu,
      SecurityOperation: SecurityOperation.View
    },
    canActivate: [PermisssionGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DanhSachVatTuCanBuRoutingModule { }
