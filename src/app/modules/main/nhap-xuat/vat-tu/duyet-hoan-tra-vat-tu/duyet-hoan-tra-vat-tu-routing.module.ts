import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import { SecurityOperation } from 'src/app/shared/enum/security-operation.enum';
import { PermisssionGuard } from 'src/app/core/guards/permission-guard.service';
import { BaseService } from 'src/app/core/services/base.service';
import { DuyetHoanTraVatTuService } from './duyet-hoan-tra-vat-tu.service'
import { DuyetHoanTraVatTuListComponent } from './duyet-hoan-tra-vat-tu-list/duyet-hoan-tra-vat-tu-list.component';
import { DuyetHoanTraVatTuChiTietComponent } from './duyet-hoan-tra-vat-tu-chi-tiet/duyet-hoan-tra-vat-tu-chi-tiet.component';

const routes: Routes = [
  {
    path: '',
    component: DuyetHoanTraVatTuListComponent,
    data: {
      title: 'Danh Sách Duyệt Hoàn Trả Vật Tư',
      DocumentType: DocumentType.DuyetYeuCauHoanTraVatTu,
      SecurityOperation: SecurityOperation.View
    },
    canActivate: [PermisssionGuard]
  },

  {
    path: 'chi-tiet/:id',
    component: DuyetHoanTraVatTuChiTietComponent,
    data: {
      title: 'Duyệt Hoàn Trả Vật Tư',
      DocumentType: DocumentType.DuyetYeuCauHoanTraVatTu,
      SecurityOperation: SecurityOperation.Update
    },
    canActivate: [PermisssionGuard]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DuyetHoanTraVatTuRoutingModule { }
