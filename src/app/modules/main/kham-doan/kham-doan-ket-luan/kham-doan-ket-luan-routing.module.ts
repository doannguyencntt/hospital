
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PermisssionGuard } from 'src/app/core/guards/permission-guard.service';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import { SecurityOperation } from 'src/app/shared/enum/security-operation.enum';
import { KetLuanKhamSucKhoeDoanChiTietComponent } from './ket-luan-kham-suc-khoe-doan-chi-tiet/ket-luan-kham-suc-khoe-doan-chi-tiet.component';
import { KetLuanKhamSucKhoeDoanListComponent } from './ket-luan-kham-suc-khoe-doan-list/ket-luan-kham-suc-khoe-doan-list.component';
const routes: Routes = [
  {
    path: '',
    component: KetLuanKhamSucKhoeDoanListComponent,
    data: {
      title: "Kết Luận KSK Đoàn",
      DocumentType: DocumentType.KhamDoanKetLuanKhamSucKhoeDoan,
      SecurityOperation: SecurityOperation.View
    },
    canActivate: [PermisssionGuard]
  },
  {
    path: 'chi-tiet', //isConclude kết luận
    component: KetLuanKhamSucKhoeDoanChiTietComponent,
    data: {
      title: "Kết Luận KSK Đoàn Chi Tiết",
      DocumentType: DocumentType.KhamDoanKetLuanKhamSucKhoeDoan,
      SecurityOperation: SecurityOperation.Update
    },
    canActivate: [PermisssionGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class KhamDoanKetLuanRoutingModule { }
