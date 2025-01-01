import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PermisssionGuard } from 'src/app/core/guards/permission-guard.service';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import { SecurityOperation } from 'src/app/shared/enum/security-operation.enum';
import { YeuCauTraVatTuCreateComponent } from './yeu-cau-tra-vat-tu-create/yeu-cau-tra-vat-tu-create.component';
import { YeuCauTraVatTuUpdateComponent } from './yeu-cau-tra-vat-tu-update/yeu-cau-tra-vat-tu-update.component';
import { YeuCauTraVatTuTuChoiDuyetComponent } from './yeu-cau-tra-vat-tu-tu-choi-duyet/yeu-cau-tra-vat-tu-tu-choi-duyet.component';
import { YeuCauTraVatTuDaDuyetComponent } from './yeu-cau-tra-vat-tu-da-duyet/yeu-cau-tra-vat-tu-da-duyet.component';
import { YeuCauTraVatTuListComponent } from './yeu-cau-tra-vat-tu-list/yeu-cau-tra-vat-tu-list.component';

const routes: Routes = [
    {
        path: '',
        component: YeuCauTraVatTuListComponent,
        data: {
            title: 'Danh Sách Yêu Cầu Hoàn Trả Vật Tư',
            DocumentType: DocumentType.YeuCauHoanTraVatTu,
            SecurityOperation: SecurityOperation.View
        },
        canActivate: [PermisssionGuard]
    },
    {
        path: 'them',
        component: YeuCauTraVatTuCreateComponent,
        data: {
            title: 'Thêm Yêu Cầu Hoàn Trả Vật Tư',
            DocumentType: DocumentType.YeuCauHoanTraVatTu,
            SecurityOperation: SecurityOperation.Add
        },
        canActivate: [PermisssionGuard]
    },
    {
        path: 'chinh-sua/:id',
        component: YeuCauTraVatTuUpdateComponent,
        data: {
            title: 'Chỉnh Sửa Yêu Cầu Hoàn Trả Vật Tư',
            DocumentType: DocumentType.YeuCauHoanTraVatTu,
            SecurityOperation: SecurityOperation.Update
        },
        canActivate: [PermisssionGuard]
    },
    {
        path: 'tu-choi-duyet/:id',
        component: YeuCauTraVatTuTuChoiDuyetComponent,
        data: {
            title: 'Từ Chối Duyệt Yêu Cầu Hoàn Trả Vật Tư',
            DocumentType: DocumentType.YeuCauHoanTraVatTu,
            SecurityOperation: SecurityOperation.Update
        },
        canActivate: [PermisssionGuard]
    },
    {
        path: 'da-duyet/:id',
        component: YeuCauTraVatTuDaDuyetComponent,
        data: {
            title: 'Đã Duyệt Yêu Cầu Hoàn Trả Vật Tư',
            DocumentType: DocumentType.YeuCauHoanTraVatTu,
            SecurityOperation: SecurityOperation.Update
        },
        canActivate: [PermisssionGuard]
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class YeuCauTraVatTuRoutingModule { }
