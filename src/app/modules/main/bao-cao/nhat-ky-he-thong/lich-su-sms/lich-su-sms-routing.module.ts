import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SecurityOperation } from 'src/app/shared/enum/security-operation.enum';
import { PermisssionGuard } from 'src/app/core/guards/permission-guard.service';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import { LichSuSMSListComponent } from './lich-su-sms-list/lich-su-sms-list.component';

const routes: Routes = [
    {
        path: '',
        component: LichSuSMSListComponent,
        data: {
            title: 'Danh sách lịch sử SMS',
            DocumentType: DocumentType.QuanLyLichSuSMS,
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
export class LichSuSMSRoutingModule { }
