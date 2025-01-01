import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import { SecurityOperation } from 'src/app/shared/enum/security-operation.enum';
import { BaoCaoVienPhiThuTienListComponent } from './bao-cao-vien-phi-thu-tien-list/bao-cao-vien-phi-thu-tien-list.component';

const routes: Routes = [
  {
      path: '',
      component: BaoCaoVienPhiThuTienListComponent,
      data: {
          title: 'Báo cáo viện phí thu tiền ',
          DocumentType: DocumentType.BaoCaoVienPhiThuTien,
          SecurityOperation: SecurityOperation.View
      }
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BaoCaoVienPhiThuTienRoutingModule { }
