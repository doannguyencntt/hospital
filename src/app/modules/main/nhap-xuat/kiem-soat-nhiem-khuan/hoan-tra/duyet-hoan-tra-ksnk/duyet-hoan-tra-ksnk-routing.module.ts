import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import { SecurityOperation } from 'src/app/shared/enum/security-operation.enum';
import { PermisssionGuard } from 'src/app/core/guards/permission-guard.service';
import { DuyetHoanTraKSNKListComponent } from './duyet-hoan-tra-ksnk-list/duyet-hoan-tra-ksnk-list.component';
import { DuyetHoanTraKSNKChiTietComponent } from './duyet-hoan-tra-ksnk-chi-tiet/duyet-hoan-tra-ksnk-chi-tiet.component';


const routes: Routes = [
  {
    path: '',
    component: DuyetHoanTraKSNKListComponent,
    data: {
      title: 'Danh Sách Duyệt Hoàn Trả Kiểm Soát Nhiễm Khuẩn',
      DocumentType: DocumentType.DuyetYeuCauHoanTraKSNK,
      SecurityOperation: SecurityOperation.View
    },
    canActivate: [PermisssionGuard]
  },

  {
    path: 'chi-tiet/:id/:loaiduocphamvattu',
    component: DuyetHoanTraKSNKChiTietComponent,
    data: {
      title: 'Duyệt Hoàn Trả Kiểm Soát Nhiễm Khuẩn',
      DocumentType: DocumentType.DuyetYeuCauHoanTraKSNK,
      SecurityOperation: SecurityOperation.Update
    },
    canActivate: [PermisssionGuard]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DuyetHoanTraKSNKRoutingModule { }
