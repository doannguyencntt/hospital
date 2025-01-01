import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import { SecurityOperation } from 'src/app/shared/enum/security-operation.enum';
import { PermisssionGuard } from 'src/app/core/guards/permission-guard.service';
import { DinhMucVatTuTonKhoListComponent } from './dinh-muc-vat-tu-ton-kho-list/dinh-muc-vat-tu-ton-kho-list.component';
import { DinhMucVatTuTonKhoCreateComponent } from './dinh-muc-vat-tu-ton-kho-create/dinh-muc-vat-tu-ton-kho-create.component';
import { DinhMucVatTuTonKhoUpdateComponent } from './dinh-muc-vat-tu-ton-kho-update/dinh-muc-vat-tu-ton-kho-update.component';


const routes: Routes = [
    {
        path: '',
        component: DinhMucVatTuTonKhoListComponent,
        data: {
            title: 'Danh mục định mức vật tư tồn kho',
            DocumentType: DocumentType.DanhMucDinhMucVatTuTonKho,
            SecurityOperation: SecurityOperation.View
        },
        canActivate: [PermisssionGuard]
    },
    {
        path: 'them',
        component: DinhMucVatTuTonKhoCreateComponent,
        data: {
            title: 'Thêm định mức vật tư tồn kho',
            DocumentType: DocumentType.DanhMucDinhMucVatTuTonKho,
            SecurityOperation: SecurityOperation.Add
        },
        canActivate: [PermisssionGuard]
    },
    {
        path: 'chinh-sua/:id',
        component: DinhMucVatTuTonKhoUpdateComponent,
        data: {
            title: 'Chỉnh sửa định mức vật tư tồn kho',
            DocumentType: DocumentType.DanhMucDinhMucVatTuTonKho,
            SecurityOperation: SecurityOperation.Update
        },
        canActivate: [PermisssionGuard]
    },

];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class DinhMucVatTuTonKhoRoutingModule { }
