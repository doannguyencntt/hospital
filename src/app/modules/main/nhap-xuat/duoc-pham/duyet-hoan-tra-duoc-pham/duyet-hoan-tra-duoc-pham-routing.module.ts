import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import { SecurityOperation } from 'src/app/shared/enum/security-operation.enum';
import { PermisssionGuard } from 'src/app/core/guards/permission-guard.service';
import { DuyetHoanTraDuocPhamListComponent } from './duyet-hoan-tra-duoc-pham-list/duyet-hoan-tra-duoc-pham-list.component';
import { DuyetHoanTraDuocPhamChiTietComponent } from './duyet-hoan-tra-duoc-pham-chi-tiet/duyet-hoan-tra-duoc-pham-chi-tiet.component';

const routes: Routes = [
  {
    path: '',
    component: DuyetHoanTraDuocPhamListComponent,
    data: {
      title: 'Danh Sách Duyệt Hoàn Trả Dược Phẩm',
      DocumentType: DocumentType.DuyetYeuCauHoanTraDuocPham,
      SecurityOperation: SecurityOperation.View
    },
    canActivate: [PermisssionGuard]
  },

  {
    path: 'chi-tiet/:id',
    component: DuyetHoanTraDuocPhamChiTietComponent,
    data: {
      title: 'Duyệt Hoàn Trả Dược Phẩm',
      DocumentType: DocumentType.DuyetYeuCauHoanTraDuocPham,
      SecurityOperation: SecurityOperation.Update
    },
    canActivate: [PermisssionGuard]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class DuyetHoanTraDuocPhamRoutingModule { }
