import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SecurityOperation } from 'src/app/shared/enum/security-operation.enum';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import { PermisssionGuard } from 'src/app/core/guards/permission-guard.service';

import { DuyetTraVatTuTuBnListComponent } from './duyet-tra-tu-bn-list/duyet-tra-tu-bn-list.component';
import { DuyetTraVatTuTuBnDetailComponent } from './duyet-tra-tu-bn-detail/duyet-tra-tu-bn-detail.component';

const routes: Routes = [
    {
        path: '',
        component: DuyetTraVatTuTuBnListComponent,
        data: {
            title: 'Duyệt Phiếu Trả Vật Tư Từ Người Bệnh Nội Trú',
            DocumentType: DocumentType.DuyetTraVatTuTuBenhNhan,
            SecurityOperation: SecurityOperation.View
        },
        canActivate: [PermisssionGuard]
    },
    {
        path: 'chi-tiet/:id',
        component: DuyetTraVatTuTuBnDetailComponent,
        data: {
            title: 'Chi Tiết Duyệt Phiếu Trả Vật Tư Từ Người Bệnh Nội Trú',
            DocumentType: DocumentType.DuyetTraVatTuTuBenhNhan,
            SecurityOperation: SecurityOperation.Update
        },
        canActivate: [PermisssionGuard]
    },
];
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class DuyetTraVatTuTuBnRoutingModule { }
