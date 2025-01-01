import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PermisssionGuard } from 'src/app/core/guards/permission-guard.service';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import { SecurityOperation } from 'src/app/shared/enum/security-operation.enum';
import { YeuCauTraKSNKCreateComponent } from './yeu-cau-tra-ksnk-create/yeu-cau-tra-ksnk-create.component';
import { YeuCauTraKSNKDaDuyetComponent } from './yeu-cau-tra-ksnk-da-duyet/yeu-cau-tra-ksnk-da-duyet.component';
import { YeuCauTraKSNKListComponent } from './yeu-cau-tra-ksnk-list/yeu-cau-tra-ksnk-list.component';
import { YeuCauTraKSNKTuChoiDuyetComponent } from './yeu-cau-tra-ksnk-tu-choi-duyet/yeu-cau-tra-ksnk-tu-choi-duyet.component';
import { YeuCauTraKSNKUpdateComponent } from './yeu-cau-tra-ksnk-update/yeu-cau-tra-ksnk-update.component';

const routes: Routes = [
    {
        path: '',
        component: YeuCauTraKSNKListComponent,
        data: {
            title: 'Danh Sách Yêu Cầu Hoàn Trả Kiễm Soát Nhiễm Khuẩn',
            DocumentType: DocumentType.YeuCauHoanTraKSNK ,
            SecurityOperation: SecurityOperation.View
        },
        canActivate: [PermisssionGuard]
    },
    {
        path: 'them',
        component: YeuCauTraKSNKCreateComponent,
        data: {
            title: 'Thêm Yêu Cầu Hoàn Trả Kiễm Soát Nhiễm Khuẩn',
            DocumentType: DocumentType.YeuCauHoanTraKSNK ,
            SecurityOperation: SecurityOperation.Add
        },
        canActivate: [PermisssionGuard]
    },
    {
        path: 'chinh-sua/:id/:loaiduocphamvattu',
        component: YeuCauTraKSNKUpdateComponent,
        data: {
            title: 'Chỉnh Sửa Yêu Cầu Hoàn Trả Kiễm Soát Nhiễm Khuẩn',
            DocumentType: DocumentType.YeuCauHoanTraKSNK ,
            SecurityOperation: SecurityOperation.Update
        },
        canActivate: [PermisssionGuard]
    },
    {
        path: 'tu-choi-duyet/:id/:loaiduocphamvattu',
        component: YeuCauTraKSNKTuChoiDuyetComponent,
        data: {
            title: 'Từ Chối Duyệt Yêu Cầu Hoàn Trả Kiễm Soát Nhiễm Khuẩn',
            DocumentType: DocumentType.YeuCauHoanTraKSNK ,
            SecurityOperation: SecurityOperation.Update
        },
        canActivate: [PermisssionGuard]
    },
    {
        path: 'da-duyet/:id/:loaiduocphamvattu',
        component: YeuCauTraKSNKDaDuyetComponent,
        data: {
            title: 'Đã Duyệt Yêu Cầu Hoàn Trả Kiễm Soát Nhiễm Khuẩn',
            DocumentType: DocumentType.YeuCauHoanTraKSNK ,
            SecurityOperation: SecurityOperation.Update
        },
        canActivate: [PermisssionGuard]
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class YeuCauTraKSNKRoutingModule { }
