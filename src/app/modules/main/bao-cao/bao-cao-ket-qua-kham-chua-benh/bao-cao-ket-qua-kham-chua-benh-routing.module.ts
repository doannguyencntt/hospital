import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { SecurityOperation } from 'src/app/shared/enum/security-operation.enum';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import { PermisssionGuard } from 'src/app/core/guards/permission-guard.service';
import { BaoCaoKetQuaKhamChuaBenhComponent } from './bao-cao-ket-qua-kham-chua-benh/bao-cao-ket-qua-kham-chua-benh.component';


const routes: Routes = [
  {
      path: '',
      component: BaoCaoKetQuaKhamChuaBenhComponent,
      data: {
          title: 'Báo cáo kết quả khám chữa bệnh',
          DocumentType: DocumentType.BaoCaoKetQuaKhamChuaBenh,
          SecurityOperation: SecurityOperation.View
      },
      canActivate: [PermisssionGuard]
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BaoCaoKetQuaKhamChuaBenhRoutingModule { }
