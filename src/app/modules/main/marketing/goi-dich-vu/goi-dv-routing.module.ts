import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PermisssionGuard } from 'src/app/core/guards/permission-guard.service';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import { SecurityOperation } from 'src/app/shared/enum/security-operation.enum';
import { GoiDvAddComponent } from './goi-dv-create/goi-dv-create.component';
import { GoiDvListComponent } from './goi-dv-list/goi-dv-list.component';
import { GoiDvUpdateComponent } from './goi-dv-update/goi-dv-update.component';

const routes: Routes = [
    {
        path: '',
        component: GoiDvListComponent,
        data: {
            title: 'Danh Mục Gói DV',
            DocumentType: DocumentType.GoiDichVuMarketing,
            SecurityOperation: SecurityOperation.View
        },
        canActivate: [PermisssionGuard]
    },
    {
        path: 'them',
        component: GoiDvAddComponent,
        data: {
            title: 'Thêm Gói DV',
            DocumentType: DocumentType.GoiDichVuMarketing,
            SecurityOperation: SecurityOperation.Add
        },
        canActivate: [PermisssionGuard]
    },
    {
        path: 'them/:id',
        component: GoiDvAddComponent,
        data: {
            title: 'Thêm Gói DV',
            DocumentType: DocumentType.GoiDichVuMarketing,
            SecurityOperation: SecurityOperation.Add
        },
        canActivate: [PermisssionGuard]
    },
    {
        path: 'chinh-sua/:id',
        component: GoiDvUpdateComponent,
        data: {
            title: 'Chỉnh Sửa Gói DV',
            DocumentType: DocumentType.GoiDichVuMarketing,
            SecurityOperation: SecurityOperation.Update
        },
        canActivate: [PermisssionGuard]
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class GoiDvRoutingModule { }
