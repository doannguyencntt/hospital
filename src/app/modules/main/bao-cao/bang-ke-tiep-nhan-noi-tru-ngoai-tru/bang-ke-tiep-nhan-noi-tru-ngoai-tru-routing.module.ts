import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PermisssionGuard } from 'src/app/core/guards/permission-guard.service';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import { SecurityOperation } from 'src/app/shared/enum/security-operation.enum';
import { DanhSachBangKeTiepNhanNoiTruVaNgoaiTruComponent } from './danh-sach-bang-ke-tiep-nhan-noi-tru-ngoai-tru/danh-sach-bang-ke-tiep-nhan-noi-tru-ngoai-tru.component';

const routes: Routes = [
  {
    path: '',
    component: DanhSachBangKeTiepNhanNoiTruVaNgoaiTruComponent,
    data: {
      title: 'Bảng thống kê tiếp nhân nội trú và ngoại trú',
      DocumentType: DocumentType.BangThongKeTiepNhanNoiTruVaNgoaiTru,
      SecurityOperation: SecurityOperation.View
    },
    canActivate: [PermisssionGuard]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BangKeTiepNhanNoiTruVaNgoaiTruRoutingModule { }
