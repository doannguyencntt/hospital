import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import { SecurityOperation } from 'src/app/shared/enum/security-operation.enum';
import { PermisssionGuard } from 'src/app/core/guards/permission-guard.service';
import { LichSuCapThuocBHYTListComponent } from './lich-su-cap-thuoc-bhyt-list/lich-su-cap-thuoc-bhyt-list.component';
import { LichSuCapThuocBHYTChiTietComponent } from './lich-su-cap-thuoc-bhyt-chi-tiet/lich-su-cap-thuoc-bhyt-chi-tiet.component';

const routes: Routes = [
  {
    path: '',
    component: LichSuCapThuocBHYTListComponent,
    data: {
      title: 'Lịch sử quầy cấp thuốc bhyt',
      DocumentType: DocumentType.LichSuXuatThuocCapThuocBHYT,
      SecurityOperation: SecurityOperation.View
    },
    canActivate: [PermisssionGuard]
  },
  {
    path: 'lich-su-cap-thuoc-bhyt-chi-tiet/:id/:maBN/:loaiDuocPhamVatTu',
    component: LichSuCapThuocBHYTChiTietComponent,
    data: {
      title: 'Lịch sử cấp thuốc bhyt chi tiết',
      DocumentType: DocumentType.LichSuXuatThuocCapThuocBHYT,
      SecurityOperation: SecurityOperation.View
    },
    canActivate: [PermisssionGuard]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class LichSuCapThuocBHYTRoutingModule { }
