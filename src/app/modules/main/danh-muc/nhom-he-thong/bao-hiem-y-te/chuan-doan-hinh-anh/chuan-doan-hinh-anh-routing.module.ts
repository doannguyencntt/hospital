import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChuanDoanHinhAnhListComponent } from './chuan-doan-hinh-anh-list/chuan-doan-hinh-anh-list.component';
import { ChuanDoanHinhAnhCreateComponent } from './chuan-doan-hinh-anh-create/chuan-doan-hinh-anh-create.component';
import { ChuanDoanHinhAnhUpdateComponent } from './chuan-doan-hinh-anh-update/chuan-doan-hinh-anh-update.component';
import { SecurityOperation } from 'src/app/shared/enum/security-operation.enum';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import { PermisssionGuard } from 'src/app/core/guards/permission-guard.service';

const routes: Routes = [
    {
        path: '',
        component: ChuanDoanHinhAnhListComponent,
        data: {
            title: 'Nhóm Chẩn Đoán Hình Ảnh',
            DocumentType: DocumentType.DanhMucChuanDoanHinhAnh,
            SecurityOperation: SecurityOperation.View
        },
        canActivate: [PermisssionGuard]
    },
    {
        path: 'them',
        component: ChuanDoanHinhAnhCreateComponent,
        data: {
            title: 'Thêm Chẩn đoán Hình Ảnh',
            DocumentType: DocumentType.DanhMucChuanDoanHinhAnh,
            SecurityOperation: SecurityOperation.Add
        },
        canActivate: [PermisssionGuard]
    },
    {
        path: 'chinh-sua/:id',
        component: ChuanDoanHinhAnhUpdateComponent,
        data: {
            title: 'Chỉnh Sửa Chẩn đoán Hình Ảnh',
            DocumentType: DocumentType.DanhMucChuanDoanHinhAnh,
            SecurityOperation: SecurityOperation.Update
        },
        canActivate: [PermisssionGuard]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ChuanDoanHinhAnhRoutingModule { }
