import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PermisssionGuard } from 'src/app/core/guards/permission-guard.service';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import { SecurityOperation } from 'src/app/shared/enum/security-operation.enum';
import { BaoCaoTraCuuDuLieuComponent } from './bao-cao-tra-cuu-du-lieu/bao-cao-tra-cuu-du-lieu.component';

const routes: Routes = [
  {
    path: '',
    component: BaoCaoTraCuuDuLieuComponent,
    data: {
      title: 'Tra cứu dữ liệu',
      DocumentType: DocumentType.BaoCaoTraCuuDuLieu,
      SecurityOperation: SecurityOperation.View
    },
    canActivate: [PermisssionGuard]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BaoCaoTraCuuDuLieuRoutingModule { }
