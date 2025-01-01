import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { SecurityOperation } from 'src/app/shared/enum/security-operation.enum';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import { PermisssionGuard } from 'src/app/core/guards/permission-guard.service';
import { BaoCaoThuocSapHetHanDungListComponent } from './bao-cao-thuoc-sap-het-han-dung-list/bao-cao-thuoc-sap-het-han-dung-list.component';
const routes: Routes = [
  {
      path: '',
      component: BaoCaoThuocSapHetHanDungListComponent,
      data: {
          title: 'Báo cáo thuốc sắp hết hạn dùng',
          DocumentType: DocumentType.BaoCaoThuocSapHetHanDung,
          SecurityOperation: SecurityOperation.View
      },
      canActivate: [PermisssionGuard]
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BaoCaoThuocSapHetHanDungRoutingModule { }
