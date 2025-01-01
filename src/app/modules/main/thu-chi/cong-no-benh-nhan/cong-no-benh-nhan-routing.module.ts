import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PermisssionGuard } from 'src/app/core/guards/permission-guard.service';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import { SecurityOperation } from 'src/app/shared/enum/security-operation.enum';
import { CongNoBenhNhanChiTietComponent } from './cong-no-benh-nhan-chi-tiet/cong-no-benh-nhan-chi-tiet.component';

import { CongNoBenhNhanListComponent } from './cong-no-benh-nhan-list/cong-no-benh-nhan-list.component';

const routes: Routes = [
    {
        path: '',
        component: CongNoBenhNhanListComponent,
        data: {
        title: 'Công nợ người bệnh',      
            DocumentType: DocumentType.CongNoBenhNhan,
            SecurityOperation:SecurityOperation.View
        },
        canActivate: [PermisssionGuard]
    },
    {
        path: 'chi-tiet/:id',
        component: CongNoBenhNhanChiTietComponent,
        data: {
        title: 'Chi tiết công nợ người bệnh',      
            DocumentType: DocumentType.CongNoBenhNhan,
            SecurityOperation:SecurityOperation.Update
        },
        canActivate: [PermisssionGuard]
    },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class CongNoBenhNhanRoutingModule { }