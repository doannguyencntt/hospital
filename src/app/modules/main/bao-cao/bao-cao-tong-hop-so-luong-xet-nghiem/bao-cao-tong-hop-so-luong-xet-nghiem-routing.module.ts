import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SecurityOperation } from 'src/app/shared/enum/security-operation.enum';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import { PermisssionGuard } from 'src/app/core/guards/permission-guard.service';
import { BaoCaoTongHopSoLuongXetNghiemListComponent } from './bao-cao-tong-hop-so-luong-xet-nghiem-list/bao-cao-tong-hop-so-luong-xet-nghiem-list.component';


const routes: Routes = [
  {
    path: '',
    component: BaoCaoTongHopSoLuongXetNghiemListComponent,
    data: {
      title: 'Báo cáo xuất nhập tồn',
      DocumentType: DocumentType.BaoCaoTongHopSoLuongXetNghiem,
      SecurityOperation: SecurityOperation.View
    },
    canActivate: [PermisssionGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BaoCaoTongHopSoLuongXetNghiemRoutingModule { }
