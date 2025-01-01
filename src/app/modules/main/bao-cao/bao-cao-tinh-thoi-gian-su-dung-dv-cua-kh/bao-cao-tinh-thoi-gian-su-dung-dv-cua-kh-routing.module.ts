import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PermisssionGuard } from 'src/app/core/guards/permission-guard.service';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import { SecurityOperation } from 'src/app/shared/enum/security-operation.enum';
import { BaoCaoTinhThoiGianSuDungDvCuaKhListComponent } from './bao-cao-tinh-thoi-gian-su-dung-dv-cua-kh-list/bao-cao-tinh-thoi-gian-su-dung-dv-cua-kh-list.component';


const routes: Routes = [
  {
    path: '',
    component: BaoCaoTinhThoiGianSuDungDvCuaKhListComponent,
    data: {
      title: 'Báo cáo tính thời gian sử dụng dv của khách hàng',
      DocumentType: DocumentType.BaoCaoSoLieuThoiGianSuDungDV,
      SecurityOperation: SecurityOperation.View
    },
    canActivate: [PermisssionGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BaoCaoTinhThoiGianSuDungDvCuaKhRoutingModule { }