import { NgModule } from '@angular/core';
import { BaoCaoSoPhucTrinhPhauThuatThuThuatListComponent } from './bao-cao-so-phuc-trinh-phau-thuat-thu-thuat-list/bao-cao-so-phuc-trinh-phau-thuat-thu-thuat-list.component';
import { RouterModule, Routes } from '@angular/router';
import { PermisssionGuard } from 'src/app/core/guards/permission-guard.service';
import { SecurityOperation } from 'src/app/shared/enum/security-operation.enum';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';

const routes: Routes = [
  {
    path: '',
    component: BaoCaoSoPhucTrinhPhauThuatThuThuatListComponent,
    data: {
      title: 'Báo cáo sổ phúc trình phẩu thuật thủ thuật',
      DocumentType: DocumentType.BaoCaoSoPhucTrinhPhauThuatThuThuat,
      SecurityOperation: SecurityOperation.View
    },
   canActivate: [PermisssionGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BaoCaoSoPhucTrinhPhauThuatThuThuatRoutingModule { }