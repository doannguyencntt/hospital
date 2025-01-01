import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DuyetKetQuaXetNghiemListComponent } from './duyet-ket-qua-list/duyet-ket-qua-list.component';
import { DuyetKetQuaXetNghiemDetailedComponent } from './duyet-ket-qua-detailed/duyet-ket-qua-detailed.component';
import { SecurityOperation } from 'src/app/shared/enum/security-operation.enum';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import { PermisssionGuard } from 'src/app/core/guards/permission-guard.service';

const routes: Routes = [
    {
        path: '',
        component: DuyetKetQuaXetNghiemListComponent,
        data: {
            title: 'Danh sách duyệt kết quả xét nghiệm',
            DocumentType: DocumentType.DuyetKetQuaXetNghiem,
            SecurityOperation: SecurityOperation.View
        },
        canActivate: [PermisssionGuard]
    },
    {
        path: 'chi-tiet/:id',
        component: DuyetKetQuaXetNghiemDetailedComponent,
        data: {
            title: 'Chi tiết duyệt kết quả xét nghiệm',
            DocumentType: DocumentType.DuyetKetQuaXetNghiem,
            SecurityOperation: SecurityOperation.Update
        },
        canActivate: [PermisssionGuard]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class DuyetKetQuaXetNghiemRoutingModule { }
