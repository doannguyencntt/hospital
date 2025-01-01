import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LichSuEmailListComponent } from './lich-su-email-list/lich-su-email-list.component';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import { SecurityOperation } from 'src/app/shared/enum/security-operation.enum';
import { PermisssionGuard } from 'src/app/core/guards/permission-guard.service';

const routes: Routes = [
    {
        path: '',
        component: LichSuEmailListComponent,
        data: {
            title: 'Danh sách lịch sử email',
            DocumentType: DocumentType.QuanLyLichSuEmail,
            SecurityOperation: SecurityOperation.View
        },
        canActivate: [PermisssionGuard],
        pathMatch: 'full'
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LichSuEmailRoutingModule { }
