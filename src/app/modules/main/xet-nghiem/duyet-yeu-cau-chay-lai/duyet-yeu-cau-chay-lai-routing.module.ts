import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PermisssionGuard } from 'src/app/core/guards/permission-guard.service';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import { SecurityOperation } from 'src/app/shared/enum/security-operation.enum';
import { DuyetYeuCauChayLaiDuyetComponent } from './duyet-yeu-cau-chay-lai-duyet/duyet-yeu-cau-chay-lai-duyet.component';
import { DuyetYeuCauChayLaiListComponent } from './duyet-yeu-cau-chay-lai-list/duyet-yeu-cau-chay-lai-list.component';


const routes: Routes = [
  {
    path: '',
    component: DuyetYeuCauChayLaiListComponent,
    data : {
      title: 'Danh sách duyệt yêu cầu chạy lại xét nghiệm',
      DocumentType: DocumentType.DuyetYeuCauChayLaiXetNghiem,
      SecurityOperation: SecurityOperation.View
    },
    canActivate: [PermisssionGuard]
  },
  {
    path: 'chi-tiet/:id/:phienXetNghiemId',
    component: DuyetYeuCauChayLaiDuyetComponent,
    data : {
      title: 'Chi tiết duyệt yêu cầu chạy lại xét nghiệm',
      DocumentType: DocumentType.DuyetYeuCauChayLaiXetNghiem,
      SecurityOperation: SecurityOperation.View
    },
    canActivate: [PermisssionGuard]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DuyetYeuCauChayLaiRoutingModule { }
