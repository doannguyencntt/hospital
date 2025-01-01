import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HopDongThauVatTuListComponent } from './hop-dong-thau-vat-tu-list/hop-dong-thau-vat-tu-list.component';
import { HopDongThauVatTuCreateComponent } from './hop-dong-thau-vat-tu-create/hop-dong-thau-vat-tu-create.component';
import { HopDongThauVatTuUpdateComponent } from './hop-dong-thau-vat-tu-update/hop-dong-thau-vat-tu-update.component';
import { SecurityOperation } from 'src/app/shared/enum/security-operation.enum';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import { PermisssionGuard } from 'src/app/core/guards/permission-guard.service';

const routes: Routes = [
    {
        path: '',
        component: HopDongThauVatTuListComponent,
        data: {
            title: 'Danh Mục Hợp Đồng Thầu Vật Tư',
            DocumentType: DocumentType.DanhMucHopDongThauVatTu,
            SecurityOperation: SecurityOperation.View
        },
        canActivate: [PermisssionGuard]
    },
    {
        path: 'them',
        component: HopDongThauVatTuCreateComponent,
        data: {
            title: 'Thêm Hợp Đồng Thầu Vật Tư',
            DocumentType: DocumentType.DanhMucHopDongThauVatTu,
            SecurityOperation: SecurityOperation.Add
        },
        canActivate: [PermisssionGuard]
    },
    {
        path: 'chinh-sua/:id',
        component: HopDongThauVatTuUpdateComponent,
        data: {
            title: 'Chỉnh Sửa Hợp Đồng Thầu Vật Tư',
            DocumentType: DocumentType.DanhMucHopDongThauVatTu,
            SecurityOperation: SecurityOperation.Update
        },
        canActivate: [PermisssionGuard]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class HopDongThauVatTuRoutingModule { }
