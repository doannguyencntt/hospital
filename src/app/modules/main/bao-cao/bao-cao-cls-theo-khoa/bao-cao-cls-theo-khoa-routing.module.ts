import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PermisssionGuard } from 'src/app/core/guards/permission-guard.service';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import { SecurityOperation } from 'src/app/shared/enum/security-operation.enum';
import { BaoCaoClsTheoKhoaListComponent } from './bao-cao-cls-theo-khoa-list/bao-cao-cls-theo-khoa-list.component';


const routes: Routes = [
  {
    path: '',
    component: BaoCaoClsTheoKhoaListComponent,
    data: {
      title: 'Hoạt Động CLS Theo Khoa',
      DocumentType: DocumentType.BaoCaoHoatDongClsTheoKhoa,
      SecurityOperation: SecurityOperation.View
    },
    canActivate: [PermisssionGuard]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BaoCaoClsTheoKhoaRoutingModule { }
