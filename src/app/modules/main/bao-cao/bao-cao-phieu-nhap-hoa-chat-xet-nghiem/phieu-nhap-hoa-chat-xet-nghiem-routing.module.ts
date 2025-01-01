import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SecurityOperation } from 'src/app/shared/enum/security-operation.enum';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import { PermisssionGuard } from 'src/app/core/guards/permission-guard.service';
import { BaoCaoPhieuNhapHoaChatXetNghiemListComponent } from './phieu-nhap-hoa-chat-xet-nghiem-list/phieu-nhap-hoa-chat-xet-nghiem-list.component';


const routes: Routes = [
  {
    path: '',
    component: BaoCaoPhieuNhapHoaChatXetNghiemListComponent,
    data: {
      title: 'Phiếu nhập hoá chất',
      DocumentType: DocumentType.BaoCaoXNPhieuNhapHoaChat,
      SecurityOperation: SecurityOperation.View
    },
    canActivate: [PermisssionGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class BaoCaoPhieuNhapHoaChatXetNghiemRoutingModule { }
