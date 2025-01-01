import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CapQuanLyBenhVienListComponent } from './cap-quan-ly-benh-vien-list/cap-quan-ly-benh-vien-list.component';
import { CapQuanLyBenhVienCreateComponent } from './cap-quan-ly-benh-vien-create/cap-quan-ly-benh-vien-create.component';
import { CapQuanLyBenhVienUpdateComponent } from './cap-quan-ly-benh-vien-update/cap-quan-ly-benh-vien-update.component';
import { SecurityOperation } from 'src/app/shared/enum/security-operation.enum';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import { PermisssionGuard } from 'src/app/core/guards/permission-guard.service';

const routes: Routes = [
    {
        path: '',
        component: CapQuanLyBenhVienListComponent,
        data: {
            title: 'Danh mục cấp quản lý bệnh viện',
            DocumentType: DocumentType.DanhMucCapQuanLyBenhVien,
            SecurityOperation: SecurityOperation.View
        },
        canActivate: [PermisssionGuard]
    },
    {
        path: 'them',
        component: CapQuanLyBenhVienCreateComponent,
        data: {
            title: 'Thêm cấp quản lý bệnh viện',
            DocumentType: DocumentType.DanhMucCapQuanLyBenhVien,
            SecurityOperation: SecurityOperation.Add
        },
        canActivate: [PermisssionGuard]
    },
    {
        path: 'chinh-sua/:id',
        component: CapQuanLyBenhVienUpdateComponent,
        data: {
            title: 'Chỉnh sửa cấp quản lý bệnh viện',
            DocumentType: DocumentType.DanhMucCapQuanLyBenhVien,
            SecurityOperation: SecurityOperation.Update
        },
        canActivate: [PermisssionGuard]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class CapQuanLyBenhVienRoutingModule { }
