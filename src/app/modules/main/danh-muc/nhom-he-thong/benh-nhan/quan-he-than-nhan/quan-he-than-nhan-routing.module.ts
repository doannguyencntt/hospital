import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { QuanHeThanNhanListComponent } from './quan-he-than-nhan-list/quan-he-than-nhan-list.component';
import { QuanHeThanNhanCreateComponent } from './quan-he-than-nhan-create/quan-he-than-nhan-create.component';
import { QuanHeThanNhanUpdateComponent } from './quan-he-than-nhan-update/quan-he-than-nhan-update.component';
import { SecurityOperation } from 'src/app/shared/enum/security-operation.enum';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import { PermisssionGuard } from 'src/app/core/guards/permission-guard.service';

const routes: Routes = [
    {
        path: '',
        component: QuanHeThanNhanListComponent,
        data: {
            title: 'Danh mục quan hệ thân nhân',
            DocumentType: DocumentType.DanhMucQuanHeThanNhan,
            SecurityOperation: SecurityOperation.View
        },
        canActivate: [PermisssionGuard]
    },
    {
        path: 'them',
        component: QuanHeThanNhanCreateComponent,
        data: {
            title: 'Thêm quan hệ thân nhân',
            DocumentType: DocumentType.DanhMucQuanHeThanNhan,
            SecurityOperation: SecurityOperation.Add
        },
        canActivate: [PermisssionGuard]
    },
    {
        path: 'chinh-sua/:id',
        component: QuanHeThanNhanUpdateComponent,
        data: {
            title: 'Chỉnh sửa quan hệ thân nhân',
            DocumentType: DocumentType.DanhMucQuanHeThanNhan,
            SecurityOperation: SecurityOperation.Update
        },
        canActivate: [PermisssionGuard]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class QuanHeThanNhanRoutingModule { }
