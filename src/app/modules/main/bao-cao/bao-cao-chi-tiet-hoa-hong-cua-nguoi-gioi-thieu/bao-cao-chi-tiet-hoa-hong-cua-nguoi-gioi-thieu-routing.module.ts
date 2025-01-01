import { NgModule } from '@angular/core';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import { RouterModule, Routes } from '@angular/router';
import { BaoCaoChiTietHoaHongCuaNguoiGioiThieuListComponent } from './bao-cao-chi-tiet-hoa-hong-cua-nguoi-gioi-thieu-list/bao-cao-chi-tiet-hoa-hong-cua-nguoi-gioi-thieu-list.component';
import { SecurityOperation } from 'src/app/shared/enum/security-operation.enum';
import { PermisssionGuard } from 'src/app/core/guards/permission-guard.service';


const routes: Routes = [
  {
    path: '',
    component: BaoCaoChiTietHoaHongCuaNguoiGioiThieuListComponent,
    data: {
      title: 'Báo cáo chi tiết hoa hồng của người giới thiệu',
      DocumentType: DocumentType.BaoCaoChiTietHoaHongCuaNguoiGT,
      SecurityOperation: SecurityOperation.View
    },
    canActivate: [PermisssionGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BaoCaoChiTietHoaHongCuaNguoiGioiThieuRoutingModule { }