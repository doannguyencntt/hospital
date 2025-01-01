import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PhanQuyenNguoiDungListComponent } from './phan-quyen-nguoi-dung-list/phan-quyen-nguoi-dung-list.component';
import { PhanQuyenNguoiDungCreateComponent } from './phan-quyen-nguoi-dung-create/phan-quyen-nguoi-dung-create.component';
import { PhanQuyenNguoiDungUpdateComponent } from './phan-quyen-nguoi-dung-update/phan-quyen-nguoi-dung-update.component';
import { SecurityOperation } from 'src/app/shared/enum/security-operation.enum';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import { PermisssionGuard } from 'src/app/core/guards/permission-guard.service';

const routes: Routes = [
    {
        path: '',
        component: PhanQuyenNguoiDungListComponent,
        data: {
            title: 'Danh mục phân quyền người dùng',
            DocumentType: DocumentType.Role,
            SecurityOperation: SecurityOperation.View
        },
        canActivate: [PermisssionGuard]
    },
    {
        path: 'them',
        component: PhanQuyenNguoiDungCreateComponent,
        data: {
            title: 'Thêm phân quyền người dùng',
            DocumentType: DocumentType.Role,
            SecurityOperation: SecurityOperation.Add
        },
        canActivate: [PermisssionGuard]
    },
    {
        path: 'chinh-sua/:id',
        component: PhanQuyenNguoiDungUpdateComponent,
        data: {
            title: 'Chỉnh sửa phân quyền người dùng',
            DocumentType: DocumentType.Role,
            SecurityOperation: SecurityOperation.Update
        },
        canActivate: [PermisssionGuard]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PhanQuyenNguoiDungRoutingModule { }
