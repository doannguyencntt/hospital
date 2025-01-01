import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PermisssionGuard } from 'src/app/core/guards/permission-guard.service';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import { SecurityOperation } from 'src/app/shared/enum/security-operation.enum';
import { TiepNhanNoiTruListComponent } from './tiep-nhan-noi-tru-list/tiep-nhan-noi-tru-list.component';


const routes: Routes = [
  {
    path: '',
    component: TiepNhanNoiTruListComponent,
    data: {
      title: 'Danh sách tiếp nhận nội trú',
      DocumentType: DocumentType.TiepNhanNoiTru,
      SecurityOperation: SecurityOperation.View
    },
    canActivate: [PermisssionGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TiepNhanNoiTruRoutingModule { }
