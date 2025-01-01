import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LichSuDanhSachThuNganComponent } from './lich-su-danh-sach-thu-ngan/lich-su-danh-sach-thu-ngan.component';
import { ChiTietLichSuThuNganComponent } from './chi-tiet-lich-su-thu-ngan/chi-tiet-lich-su-thu-ngan.component';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import { SecurityOperation } from 'src/app/shared/enum/security-operation.enum';

const routes: Routes = [{
  path: '',
  component: LichSuDanhSachThuNganComponent,
  data: {
    title: "Lịch sử thu ngân",
    DocumentType: DocumentType.LichSuThuNgan,
    SecurityOperation: SecurityOperation.View
  }
},
{
  path: 'chi-tiet-lich-su-thu-ngan/:id/:yeuCauTiepNhanId/:loaiId',
  component: ChiTietLichSuThuNganComponent,
  data: {
    title: "Chi tiết lịch sử thu ngân",
    DocumentType: DocumentType.LichSuThuNgan,
    SecurityOperation: SecurityOperation.View
  }
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LichSuDanhSachThuNganRoutingModule { }
