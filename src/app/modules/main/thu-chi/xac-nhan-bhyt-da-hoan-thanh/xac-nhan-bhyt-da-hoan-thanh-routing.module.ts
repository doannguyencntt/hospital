import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { XacNhanBhytDaHoanThanhListComponent } from './xac-nhan-bhyt-da-hoan-thanh-list/xac-nhan-bhyt-da-hoan-thanh-list.component';
import {
    XacNhanBhytDaHoanThanhDetailedComponent
} from './xac-nhan-bhyt-da-hoan-thanh-detailed/xac-nhan-bhyt-da-hoan-thanh-detailed.component';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import { SecurityOperation } from 'src/app/shared/enum/security-operation.enum';
import { PermisssionGuard } from 'src/app/core/guards/permission-guard.service';

const routes: Routes = [
    {
        path: '',
        component: XacNhanBhytDaHoanThanhListComponent,
        data: {
            title: 'Danh sách bhyt đã hoàn thành xác nhận',
            DocumentType: DocumentType.XacNhanBhytDaHoanThanh,
            SecurityOperation: SecurityOperation.View
        },
        canActivate: [PermisssionGuard]
    },
    {
        path: 'thong-tin-chi-tiet-bao-hiem-y-te-da-hoan-thanh-xac-nhan/:id',
        component: XacNhanBhytDaHoanThanhDetailedComponent,
        data: {
            title: 'Thông tin chi tiết bhyt đã hoàn thành xác nhận',
            DocumentType: DocumentType.XacNhanBhytDaHoanThanh,
            SecurityOperation: SecurityOperation.View
        },
        canActivate: [PermisssionGuard]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class XacNhanBhytDaHoanThanhRoutingModule { }
