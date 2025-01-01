import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PermisssionGuard } from 'src/app/core/guards/permission-guard.service';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import { SecurityOperation } from 'src/app/shared/enum/security-operation.enum';
import { LuuTruHoSoListComponent } from './luu-tru-ho-so-list/luu-tru-ho-so-list.component';


const routes: Routes = [
  {
    path: '',
    component: LuuTruHoSoListComponent,
    data: {
      title: 'Lưu trữ hồ sơ',
      DocumentType: DocumentType.LuuTruHoSo,
      SecurityOperation: SecurityOperation.View
    },
    canActivate: [PermisssionGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LuuTruHoSoRoutingModule { }
