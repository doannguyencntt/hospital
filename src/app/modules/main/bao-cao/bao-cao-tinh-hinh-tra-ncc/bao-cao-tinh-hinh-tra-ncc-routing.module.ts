import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { SecurityOperation } from 'src/app/shared/enum/security-operation.enum';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import { PermisssionGuard } from 'src/app/core/guards/permission-guard.service';
import { BaoCaoTinhHinhTraNccListComponent } from './bao-cao-tinh-hinh-tra-ncc-list/bao-cao-tinh-hinh-tra-ncc-list.component';
const routes: Routes = [
  {
      path: '',
      component: BaoCaoTinhHinhTraNccListComponent,
      data: {
          title: 'Báo cáo tình hình trả nhà cung cấp',
          DocumentType: DocumentType.BaoCaoTinhHinhTraNCC,
          SecurityOperation: SecurityOperation.View
      },
      canActivate: [PermisssionGuard]
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BaoCaoTinhHinhTraNccRoutingModule { }
