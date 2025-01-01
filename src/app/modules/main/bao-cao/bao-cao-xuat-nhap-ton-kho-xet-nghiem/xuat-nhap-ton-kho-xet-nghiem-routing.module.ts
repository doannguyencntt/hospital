import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SecurityOperation } from 'src/app/shared/enum/security-operation.enum';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import { PermisssionGuard } from 'src/app/core/guards/permission-guard.service';
import { BaoCaoXuatNhapTonKhoXetNghiemListComponent } from './xuat-nhap-ton-kho-xet-nghiem-list/xuat-nhap-ton-kho-xet-nghiem-list.component';


const routes: Routes = [
  {
    path: '',
    component: BaoCaoXuatNhapTonKhoXetNghiemListComponent,
    data: {
      title: 'Xuất nhập tồn kho xét nghiệm',
      DocumentType: DocumentType.BaoCaoXNXuatNhapTonKhoXetNghiem,
      SecurityOperation: SecurityOperation.View
    },
    canActivate: [PermisssionGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class BaoCaoXuatNhapTonKhoXetNghiemRoutingModule { }
