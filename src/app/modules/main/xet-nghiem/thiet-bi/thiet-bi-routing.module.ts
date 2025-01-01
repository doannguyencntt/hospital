import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ThietBiXetNghiemListComponent } from './thiet-bi-list/thiet-bi-list.component';
import { ThietBiXetNghiemCreateComponent } from './thiet-bi-create/thiet-bi-create.component';
import { ThietBiXetNghiemUpdateComponent } from './thiet-bi-update/thiet-bi-update.component';
import { SecurityOperation } from 'src/app/shared/enum/security-operation.enum';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import { PermisssionGuard } from 'src/app/core/guards/permission-guard.service';

const routes: Routes = [
    {
        path: '',
        component: ThietBiXetNghiemListComponent,
        data: {
            title: 'Thiết bị xét nghiệm',
            DocumentType: DocumentType.ThietBiXetNghiem,
            SecurityOperation: SecurityOperation.View
        },
        canActivate: [PermisssionGuard]
    },
    {
        path: 'them',
        component: ThietBiXetNghiemCreateComponent,
        data: {
            title: 'Thêm thiết bị xét nghiệm',
            DocumentType: DocumentType.ThietBiXetNghiem,
            SecurityOperation: SecurityOperation.Add
        },
        canActivate: [PermisssionGuard]
    },
    {
        path: 'them/:id',
        component: ThietBiXetNghiemCreateComponent,
        data: {
            title: 'Thêm thiết bị xét nghiệm',
            DocumentType: DocumentType.ThietBiXetNghiem,
            SecurityOperation: SecurityOperation.Add
        },
        canActivate: [PermisssionGuard]
    },
    {
        path: 'chinh-sua/:id',
        component: ThietBiXetNghiemUpdateComponent,
        data: {
            title: 'Chỉnh sửa thiết bị xét nghiệm',
            DocumentType: DocumentType.ThietBiXetNghiem,
            SecurityOperation: SecurityOperation.Update
        },
        canActivate: [PermisssionGuard]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ThietBiXetNghiemRoutingModule { }
