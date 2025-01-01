import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SecurityOperation } from 'src/app/shared/enum/security-operation.enum';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import { PermisssionGuard } from 'src/app/core/guards/permission-guard.service';
import { BaoCaoDuocTinhHinhXuatNoiBoListComponent } from './bao-cao-duoc-tinh-hinh-xuat-noi-bo-list/bao-cao-duoc-tinh-hinh-xuat-noi-bo-list.component';



const routes: Routes = [
  {
    path: '',
    component: BaoCaoDuocTinhHinhXuatNoiBoListComponent,
    data: {
      title: 'Báo cáo dược tình hình xuất nội bộ',
      DocumentType: DocumentType.BaoCaoDuocTinhHinhXuatNoiBo,
      SecurityOperation: SecurityOperation.View
    },
    canActivate: [PermisssionGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BaoCaoDuocTinhHinhXuatNoiBoRoutingModule { }
