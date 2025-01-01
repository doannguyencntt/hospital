import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import { SecurityOperation } from 'src/app/shared/enum/security-operation.enum';
import { PermisssionGuard } from 'src/app/core/guards/permission-guard.service';
import { DanhSachXuatChungTuExcelComponent } from './danh-sach-xuat-excel-chung-tu/danh-sach-xuat-excel-chung-tu.component';

const routes: Routes = [
  {
    path: "",
    component: DanhSachXuatChungTuExcelComponent,
    data: {
      title: "Xuất excel chứng từ",
      DocumentType: DocumentType.DanhSachXuatChungTuExcel,
      SecurityOperation: SecurityOperation.View
    },
    canActivate: [PermisssionGuard]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class DanhSachXuatChungTuExcelRoutingModule { }
