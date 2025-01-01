import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PermisssionGuard } from 'src/app/core/guards/permission-guard.service';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import { SecurityOperation } from 'src/app/shared/enum/security-operation.enum';

import { KhamSangLocComponent } from './kham-sang-loc/kham-sang-loc.component';

const routes: Routes = [
  {
    path: '',
    component: KhamSangLocComponent,
    data: {
      title: 'Khám sàng lọc tiêm chủng',
      DocumentType: DocumentType.TiemChungKhamSangLoc,
      SecurityOperation: SecurityOperation.View
    },
    canActivate: [PermisssionGuard]
  }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class KhamSangLocRoutingModule { }