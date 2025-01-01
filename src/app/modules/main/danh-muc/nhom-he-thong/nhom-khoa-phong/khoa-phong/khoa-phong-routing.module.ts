import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { KhoaPhongListComponent } from './khoa-phong-list/khoa-phong-list.component';
import { KhoaPhongCreateComponent } from './khoa-phong-create/khoa-phong-create.component';
import { KhoaPhongUpdateComponent } from './khoa-phong-update/khoa-phong-update.component';
import { SecurityOperation } from 'src/app/shared/enum/security-operation.enum';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import { PermisssionGuard } from 'src/app/core/guards/permission-guard.service';

const routes: Routes = [
    {
        path: '',
        component: KhoaPhongListComponent,
        data: {
            title: 'Danh mục khoa phòng',
            DocumentType: DocumentType.DanhMucKhoaPhong,
            SecurityOperation: SecurityOperation.View
        },
        canActivate: [PermisssionGuard]
    },
    {
        path: 'them',
        component: KhoaPhongCreateComponent,
        data: {
            title: 'Thêm khoa phòng',
            DocumentType: DocumentType.DanhMucKhoaPhong,
            SecurityOperation: SecurityOperation.Add
        },
        canActivate: [PermisssionGuard]
    },
    {
        path: 'chinh-sua/:id',
        component: KhoaPhongUpdateComponent,
        data: {
            title: 'Chỉnh sửa khoa phòng',
            DocumentType: DocumentType.DanhMucKhoaPhong,
            SecurityOperation: SecurityOperation.Update
        },
        canActivate: [PermisssionGuard]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class KhoaPhongRoutingModule { }
