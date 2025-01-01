import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PermisssionGuard } from 'src/app/core/guards/permission-guard.service';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import { SecurityOperation } from 'src/app/shared/enum/security-operation.enum';
import { LichSuKhamChuaBenhListComponent } from './lich-su-kham-chua-benh-list/lich-su-kham-chua-benh-list.component';


const routes: Routes = [
  {
    path: '',
    component: LichSuKhamChuaBenhListComponent,
    data: {
      title: "Lịch sử khám chữa bệnh",
      DocumentType: DocumentType.LichSuKhamChuaBenh,
      SecurityOperation: SecurityOperation.View
    },
    canActivate: [PermisssionGuard]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LichSuKhamChuaBenhRoutingModule { }
