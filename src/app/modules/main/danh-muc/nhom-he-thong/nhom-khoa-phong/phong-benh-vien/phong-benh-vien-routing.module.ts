import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PhongBenhVienListComponent } from './phong-benh-vien-list/phong-benh-vien-list.component';
import { PhongBenhVienCreateComponent } from './phong-benh-vien-create/phong-benh-vien-create.component';
import { PhongBenhVienUpdateComponent } from './phong-benh-vien-update/phong-benh-vien-update.component';
import { SecurityOperation } from 'src/app/shared/enum/security-operation.enum';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import { PermisssionGuard } from 'src/app/core/guards/permission-guard.service';

const routes: Routes = [
    {
        path: '',
        component: PhongBenhVienListComponent,
        data: {
            title: 'Danh mục khoa phòng - phòng khám',
            DocumentType: DocumentType.DanhMucKhoaPhongPhongKham,
            SecurityOperation: SecurityOperation.View
        },
        canActivate: [PermisssionGuard]
    },
    {
        path: 'them',
        component: PhongBenhVienCreateComponent,
        data: {
            title: 'Thêm khoa phòng - phòng khám',
            DocumentType: DocumentType.DanhMucKhoaPhongPhongKham,
            SecurityOperation: SecurityOperation.Add
        },
        canActivate: [PermisssionGuard]
    },
    {
        path: 'chinh-sua/:id',
        component: PhongBenhVienUpdateComponent,
        data: {
            title: 'Chỉnh sửa khoa phòng - phòng khám',
            DocumentType: DocumentType.DanhMucKhoaPhongPhongKham,
            SecurityOperation: SecurityOperation.Update
        },
        canActivate: [PermisssionGuard]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PhongBenhVienRoutingModule { }
