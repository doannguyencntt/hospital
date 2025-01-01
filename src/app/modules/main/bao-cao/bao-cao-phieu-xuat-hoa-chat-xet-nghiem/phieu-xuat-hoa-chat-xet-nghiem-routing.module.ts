import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SecurityOperation } from 'src/app/shared/enum/security-operation.enum';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import { PermisssionGuard } from 'src/app/core/guards/permission-guard.service';
import { BaoCaoPhieuXuatHoaChatXetNghiemListComponent } from './phieu-xuat-hoa-chat-xet-nghiem-list/phieu-xuat-hoa-chat-xet-nghiem-list.component';


const routes: Routes = [
  {
    path: '',
    component: BaoCaoPhieuXuatHoaChatXetNghiemListComponent,
    data: {
      title: 'Phiếu xuất hoá chất',
      DocumentType: DocumentType.BaoCaoXNPhieuXuatHoaChat,
      SecurityOperation: SecurityOperation.View
    },
    canActivate: [PermisssionGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class BaoCaoPhieuXuatHoaChatXetNghiemRoutingModule { }
