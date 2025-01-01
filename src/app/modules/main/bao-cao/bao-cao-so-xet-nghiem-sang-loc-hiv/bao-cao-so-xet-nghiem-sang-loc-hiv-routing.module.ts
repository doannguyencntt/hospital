import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SecurityOperation } from 'src/app/shared/enum/security-operation.enum';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import { PermisssionGuard } from 'src/app/core/guards/permission-guard.service';
import { BaoCaoSoXetNghiemSangLocHivListComponent } from './bao-cao-so-xet-nghiem-sang-loc-hiv-list/bao-cao-so-xet-nghiem-sang-loc-hiv-list.component';


const routes: Routes = [
  {
    path: '',
    component: BaoCaoSoXetNghiemSangLocHivListComponent,
    data: {
      title: 'Báo cáo xuất nhập tồn',
      DocumentType: DocumentType.BaoCaoSoXetNghiemSangLocHiv,
      SecurityOperation: SecurityOperation.View
    },
    canActivate: [PermisssionGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BaoCaoSoXetNghiemSangLocHivRoutingModule { }
