import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SecurityOperation } from 'src/app/shared/enum/security-operation.enum';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import { PermisssionGuard } from 'src/app/core/guards/permission-guard.service';
import { NhomBenhVaTenBenhListComponent } from './nhom-benh-va-ten-benh-list/nhom-benh-va-ten-benh-list.component';
import { NhomBenhVaTenBenhUpdateComponent } from './nhom-benh-va-ten-benh-update/nhom-benh-va-ten-benh-update.component';
import { NhomBenhVaTenBenhCreateComponent } from './nhom-benh-va-ten-benh-create/nhom-benh-va-ten-benh-create.component';

const routes: Routes = [
    {
        path: '',
        component: NhomBenhVaTenBenhListComponent,
        data: {
            title: 'Danh nhóm bệnh và tên bệnh',
            DocumentType: DocumentType.DanhMucBenhVaNhomBenh,
            SecurityOperation: SecurityOperation.View
        },
        canActivate: [PermisssionGuard]
    },
    {
        path: 'them',
        component: NhomBenhVaTenBenhCreateComponent,
        data: {
            title: 'Thêm nhóm bệnh và tên bệnh',
            DocumentType: DocumentType.DanhMucBenhVaNhomBenh,
            SecurityOperation: SecurityOperation.Add
        },
        canActivate: [PermisssionGuard]
    },   
    {
        path: 'chinh-sua/:id',
        component: NhomBenhVaTenBenhUpdateComponent,
        data: {
            title: 'Chỉnh sửa nhóm  bệnh và tên bệnh',
            DocumentType: DocumentType.DanhMucBenhVaNhomBenh,
            SecurityOperation: SecurityOperation.Update
        },
        canActivate: [PermisssionGuard]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class NhomBenhVaTenBenhRoutingModule { }
