import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PermisssionGuard } from 'src/app/core/guards/permission-guard.service';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import { SecurityOperation } from 'src/app/shared/enum/security-operation.enum';

import { LichSuTiemChungChiTietComponent } from './lich-su-tiem-chung-chi-tiet/lich-su-tiem-chung-chi-tiet.component';
import { LichSuTiemChungComponent } from './lich-su-tiem-chung/lich-su-tiem-chung.component';

const routes: Routes = [
    {
        path: '',
        component: LichSuTiemChungComponent,
        data: {
            title: 'Lịch sử tiêm chủng',
            DocumentType: DocumentType.TiemChungLichSuTiem,
            SecurityOperation: SecurityOperation.View
        },
        canActivate: [PermisssionGuard]
    },
    {
        path: 'chi-tiet/:id',
        component: LichSuTiemChungChiTietComponent,
        data: {
            title: 'Chi tiết tiêm chủng',
            DocumentType: DocumentType.TiemChungLichSuTiem,
            SecurityOperation: SecurityOperation.View
        },
        canActivate: [PermisssionGuard]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class LichSuTiemChungRoutingModule { }