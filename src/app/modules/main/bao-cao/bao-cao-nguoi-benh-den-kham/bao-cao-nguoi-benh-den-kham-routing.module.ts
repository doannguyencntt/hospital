import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PermisssionGuard } from 'src/app/core/guards/permission-guard.service';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import { SecurityOperation } from 'src/app/shared/enum/security-operation.enum';
import { BaoCaoNguoiBenhDenKhamListComponent } from './bao-cao-nguoi-benh-den-kham-list/bao-cao-nguoi-benh-den-kham-list.component';


const routes: Routes = [
  {
    path: '',
    component: BaoCaoNguoiBenhDenKhamListComponent,
    data: {
      title: 'Báo cáo người bệnh đến khám',
      DocumentType: DocumentType.BaoCaoNguoiBenhDenKham,
      SecurityOperation: SecurityOperation.View
    },
    canActivate: [PermisssionGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BaoCaoNguoiBenhDenKhamRoutingModule { }
