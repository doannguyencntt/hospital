import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import { SecurityOperation } from 'src/app/shared/enum/security-operation.enum';
import { PermisssionGuard } from 'src/app/core/guards/permission-guard.service';
import { LichSuKhamBenhChiTietComponent } from './lich-su-kham-benh-chi-tiet/lich-su-kham-benh-chi-tiet.component';
import { LichSuKhamBenhListComponent } from './lich-su-kham-benh-list/lich-su-kham-benh-list.component';

const routes: Routes = [
  {
    path: '',
    component: LichSuKhamBenhListComponent,
    data: {
      title: "Lịch Sử Khám Bệnh",
      DocumentType: DocumentType.LichSuKhamBenh,
      SecurityOperation: SecurityOperation.View
    },
    canActivate: [PermisssionGuard]
  },
  {
    path: 'chi-tiet/:id',
    component: LichSuKhamBenhChiTietComponent,
    data: {
      title: "Lịch Sử Khám Bệnh Chi Tiết",
      DocumentType: DocumentType.LichSuKhamBenh,
      SecurityOperation: SecurityOperation.View
    },
    canActivate: [PermisssionGuard]

  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LichSuKhamBenhRoutingModule { }
