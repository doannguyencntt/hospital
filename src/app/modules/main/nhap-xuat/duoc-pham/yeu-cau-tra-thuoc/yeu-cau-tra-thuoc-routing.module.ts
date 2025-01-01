import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PermisssionGuard } from 'src/app/core/guards/permission-guard.service';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import { SecurityOperation } from 'src/app/shared/enum/security-operation.enum';
import { YeuCauTraThuocCreateComponent } from './yeu-cau-tra-thuoc-create/yeu-cau-tra-thuoc-create.component';
import { YeuCauTraThuocTuChoiDuyetComponent } from './yeu-cau-tra-thuoc-tu-choi-duyet/yeu-cau-tra-thuoc-tu-choi-duyet.component';
// import { YeuCauTraThuocCreateComponent } from './yeu-cau-tra-vat-tu-create/yeu-cau-tra-vat-tu-create.component';
// import { YeuCauTraThuocUpdateComponent } from './yeu-cau-tra-vat-tu-update/yeu-cau-tra-vat-tu-update.component';
import { YeuCauTraThuocDaDuyetComponent } from './yeu-cau-tra-thuoc-da-duyet/yeu-cau-tra-thuoc-da-duyet.component';
import { YeuCauTraThuocListComponent } from './yeu-cau-tra-thuoc-list/yeu-cau-tra-thuoc-list.component';
import { YeuCauTraThuocUpdateComponent } from './yeu-cau-tra-thuoc-update/yeu-cau-tra-thuoc-update.component';

const routes: Routes = [
    {
        path: '',
        component: YeuCauTraThuocListComponent,
        data: {
            title: 'Danh Sách Yêu Cầu Hoàn Trả Dược Phẩm',
            DocumentType: DocumentType.YeuCauHoanTraDuocPham,
            SecurityOperation: SecurityOperation.View
        },
        canActivate: [PermisssionGuard]
    },
    {
        path: 'them',
        component: YeuCauTraThuocCreateComponent,
        data: {
            title: 'Thêm Yêu Cầu Hoàn Trả Dược Phẩm',
            DocumentType: DocumentType.YeuCauHoanTraDuocPham,
            SecurityOperation: SecurityOperation.Add
        },
        canActivate: [PermisssionGuard]
    },
    {
        path: 'chinh-sua/:id',
        component: YeuCauTraThuocUpdateComponent,
        data: {
            title: 'Chỉnh Sửa Yêu Cầu Hoàn Trả Dược Phẩm',
            DocumentType: DocumentType.YeuCauHoanTraDuocPham,
            SecurityOperation: SecurityOperation.Update
        },
        canActivate: [PermisssionGuard]
    },
    {
        path: 'tu-choi-duyet/:id',
        component: YeuCauTraThuocTuChoiDuyetComponent,
        data: {
            title: 'Từ Chối Duyệt Yêu Cầu Hoàn Trả Dược Phẩm',
            DocumentType: DocumentType.YeuCauHoanTraDuocPham,
            SecurityOperation: SecurityOperation.Update
        },
        canActivate: [PermisssionGuard]
    },
    {
        path: 'da-duyet/:id',
        component: YeuCauTraThuocDaDuyetComponent,
        data: {
            title: 'Đã Duyệt Yêu Cầu Hoàn Trả Dược Phẩm',
            DocumentType: DocumentType.YeuCauHoanTraDuocPham,
            SecurityOperation: SecurityOperation.Update
        },
        canActivate: [PermisssionGuard]
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class YeuCauTraThuocRoutingModule { }
