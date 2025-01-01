import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DanhSachChoXacNhanBhytComponent } from './danh-sach-cho-xac-nhan-bhyt/danh-sach-cho-xac-nhan-bhyt.component';
import { ChiTietXacNhanBhytComponent } from './chi-tiet-xac-nhan-bhyt/chi-tiet-xac-nhan-bhyt.component';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import { SecurityOperation } from 'src/app/shared/enum/security-operation.enum';
import { PermisssionGuard } from 'src/app/core/guards/permission-guard.service';

const routes: Routes = [
    {
        path: '',
        component: DanhSachChoXacNhanBhytComponent,
        data: {
            title: 'Danh sách chờ xác nhận bhyt',
            DocumentType: DocumentType.XacNhanBHYT,
            SecurityOperation: SecurityOperation.View
        },
        canActivate: [PermisssionGuard]
    },
    {
        path: 'ds-xac-nhan-bhyt/:id',
        component: ChiTietXacNhanBhytComponent,
        data: {
            title: 'Thông tin chi tiết chờ xác nhận bhyt',
            DocumentType: DocumentType.XacNhanBHYT,
            SecurityOperation: SecurityOperation.View
        },
        canActivate: [PermisssionGuard]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class XacNhanBhytRoutingModule { }
