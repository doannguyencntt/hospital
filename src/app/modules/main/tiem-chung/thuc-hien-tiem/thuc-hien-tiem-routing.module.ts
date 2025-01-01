import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PermisssionGuard } from 'src/app/core/guards/permission-guard.service';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import { SecurityOperation } from 'src/app/shared/enum/security-operation.enum';

import { ThucHienTiemComponent } from './thuc-hien-tiem/thuc-hien-tiem.component';

const routes: Routes = [
    {
        path: '',
        component: ThucHienTiemComponent,
        data: {
            title: 'Thực hiện tiêm chủng',
            DocumentType: DocumentType.TiemChungThucHienTiem,
            SecurityOperation: SecurityOperation.View
        },
        canActivate: [PermisssionGuard]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class ThucHienTiemRoutingModule { }