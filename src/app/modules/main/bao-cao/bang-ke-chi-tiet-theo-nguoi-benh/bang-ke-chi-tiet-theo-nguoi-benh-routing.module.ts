import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PermisssionGuard } from 'src/app/core/guards/permission-guard.service';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import { SecurityOperation } from 'src/app/shared/enum/security-operation.enum';
import { BangKeChiTietTheoNguoiBenhListComponent } from './bang-ke-chi-tiet-theo-nguoi-benh-list/bang-ke-chi-tiet-theo-nguoi-benh-list.component';


const routes: Routes = [
  {
    path: '',
    component: BangKeChiTietTheoNguoiBenhListComponent,
    data: {
      title: 'Bảng kê chi tiết theo người bệnh',
      DocumentType: DocumentType.BaoCaoTongHopCongNoChuaThanhToan,
      SecurityOperation: SecurityOperation.View
    },
    canActivate: [PermisssionGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BangKeChiTietTheoNguoiBenhRoutingModule { }
