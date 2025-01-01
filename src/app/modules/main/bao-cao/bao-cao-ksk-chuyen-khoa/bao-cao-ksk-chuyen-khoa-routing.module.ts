import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PermisssionGuard } from 'src/app/core/guards/permission-guard.service';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import { SecurityOperation } from 'src/app/shared/enum/security-operation.enum';
import { BaoCaoKskChuyenKhoaListComponent } from './bao-cao-ksk-chuyen-khoa-list/bao-cao-ksk-chuyen-khoa-list.component';

const routes: Routes = [{
    path: '',
    component: BaoCaoKskChuyenKhoaListComponent,
    data: {
      title: 'DANH SÁCH KHÁM SỨC KHỎE THEO CHUYÊN KHOA',
      DocumentType: DocumentType.BaoCaoKSKChuyenKhoa,
      SecurityOperation: SecurityOperation.View
    },
    canActivate: [PermisssionGuard]
  },];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BaoCaoKskChuyenKhoaRoutingModule { }
