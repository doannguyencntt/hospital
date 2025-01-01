import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PermisssionGuard } from 'src/app/core/guards/permission-guard.service';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import { SecurityOperation } from 'src/app/shared/enum/security-operation.enum';
import { KhamDoanKetLuanClsKskDoanDetailComponent } from './kham-doan-ket-luan-cls-ksk-doan-detail/kham-doan-ket-luan-cls-ksk-doan-detail.component';
import { KhamDoanKetLuanClsKskListComponent } from './kham-doan-ket-luan-cls-ksk-list/kham-doan-ket-luan-cls-ksk-list.component';

const routes: Routes = [
  {
    path: '',
    component: KhamDoanKetLuanClsKskListComponent,
    data: {
      title: "Kết luận cls khám sức khỏe ",
      DocumentType: DocumentType.KhamDoanKetLuanCanLamSangKhamSucKhoeDoan, // cần cập nhật lại
      SecurityOperation: SecurityOperation.View
    },
    canActivate: [PermisssionGuard]
  },
  {
    path: 'detail/:id/:hopDongNhanVienId/:congTyId',
    component: KhamDoanKetLuanClsKskDoanDetailComponent,
    data: {
      title: 'Kết luận cls khám sức khỏe đoàn',
      DocumentType: DocumentType.KhamDoanKetLuanCanLamSangKhamSucKhoeDoan,
      SecurityOperation: SecurityOperation.Update
    },
    canActivate: [PermisssionGuard]
   },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class KhamDoanKetLuanClsKskRoutingModule { }
