import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoaiBenhVienListComponent } from './loai-benh-vien-list/loai-benh-vien-list.component';
import { LoaiBenhVienCreateComponent } from './loai-benh-vien-create/loai-benh-vien-create.component';
import { LoaiBenhVienUpdateComponent } from './loai-benh-vien-update/loai-benh-vien-update.component';
import { SecurityOperation } from 'src/app/shared/enum/security-operation.enum';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import { PermisssionGuard } from 'src/app/core/guards/permission-guard.service';

const routes: Routes = [
    {
        path: '',
        component: LoaiBenhVienListComponent,
        data: {
            title: 'Danh mục loại bệnh viện',
            DocumentType: DocumentType.DanhMucLoaiBenhVien,
            SecurityOperation: SecurityOperation.View
        },
        canActivate: [PermisssionGuard]
    },
    {
        path: 'them',
        component: LoaiBenhVienCreateComponent,
        data: {
            title: 'Thêm loại bệnh viện',
            DocumentType: DocumentType.DanhMucLoaiBenhVien,
            SecurityOperation: SecurityOperation.Add
        },
        canActivate: [PermisssionGuard]
    },
    {
        path: 'chinh-sua/:id',
        component: LoaiBenhVienUpdateComponent,
        data: {
            title: 'Chỉnh sửa loại bệnh viện',
            DocumentType: DocumentType.DanhMucLoaiBenhVien,
            SecurityOperation: SecurityOperation.Update
        },
        canActivate: [PermisssionGuard]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LoaiBenhVienRoutingModule { }
