import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import { SecurityOperation } from 'src/app/shared/enum/security-operation.enum';
import { PermisssionGuard } from 'src/app/core/guards/permission-guard.service';

import { LichSuXuatThuocListComponent } from './lich-su-xuat-thuoc-list/lich-su-xuat-thuoc-list.component';
import { LichSuXuatThuocChiTietComponent } from './lich-su-xuat-thuoc-chi-tiet/lich-su-xuat-thuoc-chi-tiet.component';




const routes: Routes = [
  {
      path: '',
      component: LichSuXuatThuocListComponent,
      data: {
          title: 'Lịch sử quầy xuất thuốc',
          DocumentType: DocumentType.LichSuQuayThuoc,
          SecurityOperation: SecurityOperation.View
      },
      canActivate: [PermisssionGuard]
  },
  {
      path: 'lich-su-xuat-thuoc-chi-tiet/:id/:maBN/:loaiDuocPhamVatTu',
      component: LichSuXuatThuocChiTietComponent,
      data: {
          title: 'Lịch sử xuất thuôc chi tiết',
          DocumentType: DocumentType.LichSuQuayThuoc,
          SecurityOperation: SecurityOperation.View
      },
      canActivate: [PermisssionGuard]
  },
  // {
  //   path: 'chinh-sua/:id',
  //   component: ChucDanhUpdateComponent,
  //   data: {
  //     title: 'Chỉnh sửa chức danh',
  //     DocumentType: DocumentType.DanhMucChucDanh,
  //     SecurityOperation: SecurityOperation.Update
  //   },
  //   canActivate: [PermisssionGuard]
  // },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LichSuXuatThuocRoutingModule { }
