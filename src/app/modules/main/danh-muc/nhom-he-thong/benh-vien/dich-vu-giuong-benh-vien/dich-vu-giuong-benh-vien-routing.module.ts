import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DichVuGiuongBenhVienListComponent } from './dich-vu-giuong-benh-vien-list/dich-vu-giuong-benh-vien-list.component';
import { DichVuGiuongBenhVienCreateComponent } from './dich-vu-giuong-benh-vien-create/dich-vu-giuong-benh-vien-create.component';
import { DichVuGiuongBenhVienUpdateComponent } from './dich-vu-giuong-benh-vien-update/dich-vu-giuong-benh-vien-update.component';
import { SecurityOperation } from 'src/app/shared/enum/security-operation.enum';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import { PermisssionGuard } from 'src/app/core/guards/permission-guard.service';

const routes: Routes = [
    {
        path: '',
        component: DichVuGiuongBenhVienListComponent,
        data: {
            title: 'Danh Mục Dịch Vụ Giường Tại Bệnh Viện',
            DocumentType: DocumentType.DanhMucDichVuGiuongTaiBenhVien,
            SecurityOperation: SecurityOperation.View
        },
        canActivate: [PermisssionGuard]
    },
    {
        path: 'them',
        component: DichVuGiuongBenhVienCreateComponent,
        data: {
            title: 'Thêm Dịch Vụ Giường Tại Bệnh Viện',
            DocumentType: DocumentType.DanhMucDichVuGiuongTaiBenhVien,
            SecurityOperation: SecurityOperation.Add
        },
        canActivate: [PermisssionGuard]
    },
    {
        path: 'chinh-sua/:id',
        component: DichVuGiuongBenhVienUpdateComponent,
        data: {
            title: 'Chỉnh Sửa Dịch Vụ Giường Tại Bệnh Viện',
            DocumentType: DocumentType.DanhMucDichVuGiuongTaiBenhVien,
            SecurityOperation: SecurityOperation.Update
        },
        canActivate: [PermisssionGuard]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class DichVuGiuongBenhVienRoutingModule { }
