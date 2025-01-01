import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SecurityOperation } from 'src/app/shared/enum/security-operation.enum';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import { PermisssionGuard } from 'src/app/core/guards/permission-guard.service';
import { BaoCaoKeToanNhapXuatTonChiTietListComponent } from './bao-cao-ke-toan-nhap-xuat-ton-chi-tiet-list/bao-cao-ke-toan-nhap-xuat-ton-chi-tiet-list.component';



const routes: Routes = [
  {
    path: '',
    component: BaoCaoKeToanNhapXuatTonChiTietListComponent,
    data: {
      title: 'Báo cáo nhập xuất tồn chi tiết',
      DocumentType: DocumentType.BaoCaoKTNhapXuatTonChiTiet,
      SecurityOperation: SecurityOperation.View
    },
    canActivate: [PermisssionGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BaoCaoKeToanNhapXuatTonChiTietRoutingModule { }
