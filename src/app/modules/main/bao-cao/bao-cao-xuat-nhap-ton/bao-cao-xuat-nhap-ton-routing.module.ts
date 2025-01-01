import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SecurityOperation } from 'src/app/shared/enum/security-operation.enum';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import { PermisssionGuard } from 'src/app/core/guards/permission-guard.service';
import { BaoCaoXuatNhapTonListComponent } from './bao-cao-xuat-nhap-ton-list/bao-cao-xuat-nhap-ton-list.component';


const routes: Routes = [
  {
    path: '',
    component: BaoCaoXuatNhapTonListComponent,
    data: {
      title: 'Báo cáo xuất nhập tồn',
      DocumentType: DocumentType.BaoCaoXuatNhapTon,
      SecurityOperation: SecurityOperation.View
    },
    canActivate: [PermisssionGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BaoCaoXuatNhapTonRoutingModule { }
