import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PermisssionGuard } from 'src/app/core/guards/permission-guard.service';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import { SecurityOperation } from 'src/app/shared/enum/security-operation.enum';
// import { BaoCaoDichVuPLASMAHoTroDieuTruVetThuongComponent } from './bao-cao-dich-vu-tia-plasma-ho-tro-dieu-tri-vet-thuong/bao-cao-dich-vu-tia-plasma-ho-tro-dieu-tri-vet-thuong.component';

const routes: Routes = [
  {
    path: '',
    // component: BaoCaoDichVuPLASMAHoTroDieuTruVetThuongComponent,
    data: {
      title: 'Báo cáo dịch vụ tia plasma hổ trợ điều trị vết thương',
      DocumentType: DocumentType.BaoCaoDichVuTiaPlasMaHoTroDieuTriVetThuong,
      SecurityOperation: SecurityOperation.View
    },
    canActivate: [PermisssionGuard]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BaoCaoDichVuPLASMAHoTroDieuTruVetThuongRoutingModule { }
