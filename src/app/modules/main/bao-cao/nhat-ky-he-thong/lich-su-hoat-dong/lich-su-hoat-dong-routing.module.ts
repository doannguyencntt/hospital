import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LichSuHoatDongListComponent } from './lich-su-hoat-dong-list/lich-su-hoat-dong-list.component';
import { PermisssionGuard } from 'src/app/core/guards/permission-guard.service';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import { SecurityOperation } from 'src/app/shared/enum/security-operation.enum';

const routes: Routes = [
    {
        path: '',
        component: LichSuHoatDongListComponent,
        data: {
            title: 'Danh sách lịch sử hoạt động',
            DocumentType: DocumentType.QuanLyNhatKyHeThong,
            SecurityOperation: SecurityOperation.View
        },
        canActivate: [PermisssionGuard]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LichSuHoatDongRoutingModule { }
