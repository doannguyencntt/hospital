import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import { SecurityOperation } from 'src/app/shared/enum/security-operation.enum';
import { BcLuuKetQuaXetNghiemHangNgayListComponent } from './bc-luu-ket-qua-xet-nghiem-hang-ngay-list/bc-luu-ket-qua-xet-nghiem-hang-ngay-list.component';

const routes: Routes = [
  {
      path: '',
      component: BcLuuKetQuaXetNghiemHangNgayListComponent,
      data: {
          title: 'Báo cáo lưu kết quả xét nghiệm hàng ngày ',
          DocumentType: DocumentType.BaoCaoLuuKetQuaXetNghiemHangNgay,
          SecurityOperation: SecurityOperation.View
      }
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BcBcLuuKetQuaXetNghiemHangNgayRoutingModule { }
