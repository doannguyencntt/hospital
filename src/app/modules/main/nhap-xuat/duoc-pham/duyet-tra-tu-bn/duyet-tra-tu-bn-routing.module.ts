import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SecurityOperation } from 'src/app/shared/enum/security-operation.enum';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import { PermisssionGuard } from 'src/app/core/guards/permission-guard.service';

import { DuyetTraThuocTuBnListComponent } from './duyet-tra-tu-bn-list/duyet-tra-tu-bn-list.component';
import { DuyetTraThuocTuBnDetailComponent } from './duyet-tra-tu-bn-detail/duyet-tra-tu-bn-detail.component';

const routes: Routes = [
    {
        path: '',
        component: DuyetTraThuocTuBnListComponent,
        data: {
            title: 'Duyệt Phiếu Trả Thuốc Từ Người Bệnh Nội Trú',
            DocumentType: DocumentType.DuyetTraThuocTuBenhNhan,
            SecurityOperation: SecurityOperation.View
        },
        canActivate: [PermisssionGuard]
    },
    {
        path: 'chi-tiet/:id',
        component: DuyetTraThuocTuBnDetailComponent,
        data: {
            title: 'Chi Tiết Duyệt Phiếu Trả Thuốc Từ Người Bệnh Nội Trú',
            DocumentType: DocumentType.DuyetTraThuocTuBenhNhan,
            SecurityOperation: SecurityOperation.Update
        },
        canActivate: [PermisssionGuard]
    },
];
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class DuyetTraThuocTuBnRoutingModule { }
