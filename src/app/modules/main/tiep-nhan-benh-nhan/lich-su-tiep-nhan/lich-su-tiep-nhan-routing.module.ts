import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import { SecurityOperation } from 'src/app/shared/enum/security-operation.enum';
import { PermisssionGuard } from 'src/app/core/guards/permission-guard.service';
import { LichSuTiepNhanListComponent } from './lich-su-tiep-nhan-list/lich-su-tiep-nhan-list.component';
import { LichSuTiepNhanChiTietComponent } from './lich-su-tiep-nhan-chi-tiet/lich-su-tiep-nhan-chi-tiet.component';
const routes: Routes = [
  {
    path: '',
    component: LichSuTiepNhanListComponent,
    data: {
      title: 'Lịch Sử Tiếp Nhận',       
      DocumentType: DocumentType.LichSuTiepNhan,
      SecurityOperation:SecurityOperation.View
    },
    canActivate: [PermisssionGuard]
  },
  {
    path: 'chi-tiet/:id',
    component: LichSuTiepNhanChiTietComponent,
    data: {
      title: "Lịch Sử Tiếp Nhận Chi Tiết",
      DocumentType: DocumentType.LichSuTiepNhan,
      SecurityOperation: SecurityOperation.View
    },
    canActivate: [PermisssionGuard]

  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LichSuTiepNhanRoutingModule { }
