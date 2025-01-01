import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { KhoaPhongNhanVienListComponent } from './khoa-phong-nhan-vien-list/khoa-phong-nhan-vien-list.component';
import { KhoaPhongNhanVienCreateComponent } from './khoa-phong-nhan-vien-create/khoa-phong-nhan-vien-create.component';
import { KhoaPhongNhanVienUpdateComponent } from './khoa-phong-nhan-vien-update/khoa-phong-nhan-vien-update.component';
import { SecurityOperation } from 'src/app/shared/enum/security-operation.enum';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import { PermisssionGuard } from 'src/app/core/guards/permission-guard.service';

const routes: Routes = [
    {
        path: '',
        component: KhoaPhongNhanVienListComponent,
        data: {
            title: 'Danh mục khoa phòng - nhân viên',
            DocumentType: DocumentType.DanhMucKhoaPhongNhanVien,
            SecurityOperation: SecurityOperation.View
        },
        canActivate: [PermisssionGuard]
    },
    {
        path: 'them',
        component: KhoaPhongNhanVienCreateComponent,
        data: {
            title: 'Thêm khoa phòng - nhân viên',
            DocumentType: DocumentType.DanhMucKhoaPhongNhanVien,
            SecurityOperation: SecurityOperation.Add
        },
        canActivate: [PermisssionGuard]
    },
    {
        path: 'chinh-sua/:id',
        component: KhoaPhongNhanVienUpdateComponent,
        data: {
            title: 'Chỉnh sửa khoa phòng - nhân viên',
            DocumentType: DocumentType.DanhMucKhoaPhongNhanVien,
            SecurityOperation: SecurityOperation.Update
        },
        canActivate: [PermisssionGuard]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class KhoaPhongNhanVienRoutingModule { }
