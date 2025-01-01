
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SecurityOperation } from 'src/app/shared/enum/security-operation.enum';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import { PermisssionGuard } from 'src/app/core/guards/permission-guard.service';
import { DuyetKetQuaNewDetailedComponent } from './duyet-ket-qua-new-detailed/duyet-ket-qua-new-detailed.component';
import { DuyetKetQuaNewListComponent } from './duyet-ket-qua-new-list/duyet-ket-qua-new-list.component';

const routes: Routes = [
  {
    path: '',
    component: DuyetKetQuaNewListComponent,
    data: {
        title: 'Danh sách duyệt kết quả xét nghiệm',
        DocumentType: DocumentType.DuyetKetQuaXetNghiem,
        SecurityOperation: SecurityOperation.View
    },
    canActivate: [PermisssionGuard]
},
{
    path: 'chi-tiet/:id',
    component: DuyetKetQuaNewDetailedComponent,
    data: {
        title: 'Chi tiết duyệt kết quả xét nghiệm',
        DocumentType: DocumentType.DuyetKetQuaXetNghiem,
        SecurityOperation: SecurityOperation.Update
    },
    canActivate: [PermisssionGuard]
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DuyetKetQuaNewRoutingModule { }
