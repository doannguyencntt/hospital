import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NhomDichVuBenhVienListComponent } from './nhom-dich-vu-benh-vien-list/nhom-dich-vu-benh-vien-list.component';
import { NhomDichVuBenhVienCreateComponent } from './nhom-dich-vu-benh-vien-create/nhom-dich-vu-benh-vien-create.component';
import { NhomDichVuBenhVienUpdateComponent } from './nhom-dich-vu-benh-vien-update/nhom-dich-vu-benh-vien-update.component';
import { SecurityOperation } from 'src/app/shared/enum/security-operation.enum';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import { PermisssionGuard } from 'src/app/core/guards/permission-guard.service';

const routes: Routes = [
    {
        path: '',
        component: NhomDichVuBenhVienListComponent,
        data: {
            title: 'Danh mục nhóm dịch vụ tại bệnh viện',
            DocumentType: DocumentType.DanhMucNhomDichVuBenhVien,
            SecurityOperation: SecurityOperation.View
        },
        canActivate: [PermisssionGuard]
    },
    {
        path: 'them',
        component: NhomDichVuBenhVienCreateComponent,
        data: {
            title: 'Thêm nhóm dịch vụ tại bệnh viện',
            DocumentType: DocumentType.DanhMucNhomDichVuBenhVien,
            SecurityOperation: SecurityOperation.Add
        },
        canActivate: [PermisssionGuard]
    },
    {
        path: 'them/:id/:isShowView',
        component: NhomDichVuBenhVienCreateComponent,
        data: {
            title: 'Thêm nhóm dịch vụ tại bệnh viện',
            DocumentType: DocumentType.DanhMucNhomDichVuBenhVien,
            SecurityOperation: SecurityOperation.Add
        },
        canActivate: [PermisssionGuard]
    },
    {
        path: 'chinh-sua/:id/:isShowView',
        component: NhomDichVuBenhVienUpdateComponent,
        data: {
            title: 'Chỉnh sửa nhóm dịch vụ tại bệnh viện',
            DocumentType: DocumentType.DanhMucNhomDichVuBenhVien,
            SecurityOperation: SecurityOperation.Update
        },
        canActivate: [PermisssionGuard]
    },
    {
        path: 'chinh-sua/:id',
        component: NhomDichVuBenhVienUpdateComponent,
        data: {
            title: 'Chỉnh sửa nhóm dịch vụ tại bệnh viện',
            DocumentType: DocumentType.DanhMucNhomDichVuBenhVien,
            SecurityOperation: SecurityOperation.Update
        },
        canActivate: [PermisssionGuard]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class NhomDichVuBenhVienRoutingModule { }
