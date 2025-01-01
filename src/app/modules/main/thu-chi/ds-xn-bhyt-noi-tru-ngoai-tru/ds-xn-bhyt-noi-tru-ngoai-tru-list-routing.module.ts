import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import { SecurityOperation } from 'src/app/shared/enum/security-operation.enum';
import { PermisssionGuard } from 'src/app/core/guards/permission-guard.service';
import { DanhSachNoiTruVaNgoaiTruListComponent } from './ds-xn-bhyt-noi-tru-ngoai-tru-list/ds-xn-bhyt-noi-tru-ngoai-tru-list.component';

const routes: Routes = [
    {
        path: '',
        component: DanhSachNoiTruVaNgoaiTruListComponent,
        data: {
            title: 'Danh sách xác nhận bhyt đã hoàn thành',
            DocumentType: DocumentType.DSXNNgoaiTruVaNoiTruBHYT,
            SecurityOperation: SecurityOperation.View
        },
        canActivate: [PermisssionGuard]
    },   
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class DanhSachNoiTruVaNgoaiTruRoutingModule { }
