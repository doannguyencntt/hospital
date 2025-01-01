import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PermisssionGuard } from 'src/app/core/guards/permission-guard.service';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import { SecurityOperation } from 'src/app/shared/enum/security-operation.enum';
import { TongHopYLenhDetailBackgroundComponent } from './tong-hop-y-lenh-detail-background/tong-hop-y-lenh-detail-background.component';
import { TongHopYLenhListComponent } from './tong-hop-y-lenh-list/tong-hop-y-lenh-list.component';


const routes: Routes = [
  {
    path: '',
    component: TongHopYLenhListComponent,
    data: {
      title: 'Tổng hợp y lệnh',
      DocumentType: DocumentType.TongHopYLenh,
      SecurityOperation: SecurityOperation.View
    },
    canActivate: [PermisssionGuard]
  },
  {
    // path: 'chi-tiet/:id',
    path: 'chi-tiet',
    component: TongHopYLenhDetailBackgroundComponent,
    data: {
      title: 'Tổng hợp y lệnh chi tiết',
      DocumentType: DocumentType.TongHopYLenh,
      SecurityOperation: SecurityOperation.View
    },
    canActivate: [PermisssionGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TongHopYLenhRoutingModule { }
