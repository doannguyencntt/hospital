import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChuanDoanListComponent } from './chuan-doan-list/chuan-doan-list.component';
import { SecurityOperation } from 'src/app/shared/enum/security-operation.enum';
import { PermisssionGuard } from 'src/app/core/guards/permission-guard.service';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import { ChuanDoanCreateComponent } from './chuan-doan-create/chuan-doan-create.component';
import { ChuanDoanUpdateComponent } from './chuan-doan-update/chuan-doan-update.component';

const routes: Routes = [{
    path: '',
    component: ChuanDoanListComponent,
    data: {
        title: 'Danh sách Chẩn đoán',
        DocumentType: DocumentType.DanhMucChuanDoan,
        SecurityOperation: SecurityOperation.View
    },
    canActivate: [PermisssionGuard]
}, {
    path: 'them',
    component: ChuanDoanCreateComponent,
    data: {
        title: 'Thêm Chẩn đoán',
        DocumentType: DocumentType.DanhMucChuanDoan,
        SecurityOperation: SecurityOperation.Add
    },
    canActivate: [PermisssionGuard]
}, {
    path: 'chinh-sua/:id',
    component: ChuanDoanUpdateComponent,
    data: {
        title: 'Chỉnh sửa Chẩn đoán',
        DocumentType: DocumentType.DanhMucChuanDoan,
        SecurityOperation: SecurityOperation.Update
    },

    canActivate: [PermisssionGuard]
}];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ChuanDoanRoutingModule { }
