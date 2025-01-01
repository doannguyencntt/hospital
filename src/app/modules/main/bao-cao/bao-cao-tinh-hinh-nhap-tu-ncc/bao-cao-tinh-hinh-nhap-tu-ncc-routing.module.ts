import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import { SecurityOperation } from 'src/app/shared/enum/security-operation.enum';
import { PermisssionGuard } from 'src/app/core/guards/permission-guard.service';
import { BaoCaoTinhHinhNhapTuNccListComponent } from './bao-cao-tinh-hinh-nhap-tu-ncc-list/bao-cao-tinh-hinh-nhap-tu-ncc-list.component';

const routes: Routes = [
  {
    path: '',
    component: BaoCaoTinhHinhNhapTuNccListComponent,
    data: {
      title: 'Báo cáo tình hình nhập từ nhà cung cấp',
      DocumentType: DocumentType.BaoCaoTinhHinhNhapTuNhaCungCap,
      SecurityOperation: SecurityOperation.View
    },
    canActivate: [PermisssionGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BaoCaoTinhHinhNhapTuNccRoutingModule { }