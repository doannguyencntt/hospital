import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DuocPhamBenhVienPhanNhomListComponent } from './duoc-pham-benh-vien-phan-nhom-list/duoc-pham-benh-vien-phan-nhom-list.component';
import {
    DuocPhamBenhVienPhanNhomCreateComponent
} from './duoc-pham-benh-vien-phan-nhom-create/duoc-pham-benh-vien-phan-nhom-create.component';
import {
    DuocPhamBenhVienPhanNhomUpdateComponent
} from './duoc-pham-benh-vien-phan-nhom-update/duoc-pham-benh-vien-phan-nhom-update.component';
import { SecurityOperation } from 'src/app/shared/enum/security-operation.enum';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import { PermisssionGuard } from 'src/app/core/guards/permission-guard.service';

const routes: Routes = [
    {
        path: '',
        component: DuocPhamBenhVienPhanNhomListComponent,
        data: {
            title: 'Danh Mục Dược Phẩm Bệnh Viện Phân Nhóm',
            DocumentType: DocumentType.DanhMucDuocPhamBenhVienPhanNhom,
            SecurityOperation: SecurityOperation.View
        },
        canActivate: [PermisssionGuard]
    },
    {
        path: 'them',
        component: DuocPhamBenhVienPhanNhomCreateComponent,
        data: {
            title: 'Thêm Dược Phẩm Bệnh Viện Phân Nhóm',
            DocumentType: DocumentType.DanhMucDuocPhamBenhVienPhanNhom,
            SecurityOperation: SecurityOperation.Add
        },
        canActivate: [PermisssionGuard]
    },
    {
      path: 'chinh-sua/:id/:isCreateChildren',
      component: DuocPhamBenhVienPhanNhomUpdateComponent,
        data: {
            title: 'Chỉnh Sửa Dược Phẩm Bệnh Viện Phân Nhóm',
            DocumentType: DocumentType.DanhMucDuocPhamBenhVienPhanNhom,
            SecurityOperation: SecurityOperation.Update
        },
        canActivate: [PermisssionGuard]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class DuocPhamBenhVienPhanNhomRoutingModule { }
