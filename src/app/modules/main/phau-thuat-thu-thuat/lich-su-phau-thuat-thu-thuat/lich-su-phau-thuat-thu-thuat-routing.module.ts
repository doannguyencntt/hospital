import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import { SecurityOperation } from 'src/app/shared/enum/security-operation.enum';
import { PermisssionGuard } from 'src/app/core/guards/permission-guard.service';
import { LichSuPhauThuatThuThuatListComponent } from './lich-su-phau-thuat-thu-thuat-list/lich-su-phau-thuat-thu-thuat-list.component';
import { LichSuPhauThuatThuThuatChiTietComponent } from './lich-su-phau-thuat-thu-thuat-chi-tiet/lich-su-phau-thuat-thu-thuat-chi-tiet.component';

const routes: Routes = [
  {
    path: '',
    component: LichSuPhauThuatThuThuatListComponent,
    data: {
      title: "Lịch Sử Phẫu Thuật Thủ Thuật",
      DocumentType: DocumentType.LichSuPhauThuatThuThuat,
      SecurityOperation: SecurityOperation.View
    },
    canActivate: [PermisssionGuard]
  },
  {
    path: 'chi-tiet/:id/:laKhongThucHien',
    component: LichSuPhauThuatThuThuatChiTietComponent,
    data: {
      title: "Lịch Sử Phẫu Thuật Thủ Thuật Chi Tiết",
      DocumentType: DocumentType.LichSuPhauThuatThuThuat,
      SecurityOperation: SecurityOperation.View
    },
    canActivate: [PermisssionGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class LichSuPhauThuatThuThuatRoutingModule { }