import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { KhoaListComponent } from './khoa-list/khoa-list.component';
import { SecurityOperation } from 'src/app/shared/enum/security-operation.enum';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import { PermisssionGuard } from 'src/app/core/guards/permission-guard.service';

const routes: Routes = [
    {
        path: '',
        component: KhoaListComponent,
        data: {
            title: 'Danh mục chuyên khoa',
            DocumentType: DocumentType.DanhMucChuyenKhoa,
            SecurityOperation: SecurityOperation.View
        },
        canActivate: [PermisssionGuard]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class KhoaRoutingModule { }
