import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HopDongThauDuocPhamListComponent } from './hop-dong-thau-duoc-pham-list/hop-dong-thau-duoc-pham-list.component';
import { HopDongThauDuocPhamCreateComponent } from './hop-dong-thau-duoc-pham-create/hop-dong-thau-duoc-pham-create.component';
import { HopDongThauDuocPhamUpdateComponent } from './hop-dong-thau-duoc-pham-update/hop-dong-thau-duoc-pham-update.component';
import { SecurityOperation } from 'src/app/shared/enum/security-operation.enum';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import { PermisssionGuard } from 'src/app/core/guards/permission-guard.service';

const routes: Routes = [
    {
        path: '',
        component: HopDongThauDuocPhamListComponent,
        data: {
            title: 'Danh Mục Hợp Đồng Thầu Dược Phẩm',
            DocumentType: DocumentType.DanhMucHopDongThauDuocPham,
            SecurityOperation: SecurityOperation.View
        },
        canActivate: [PermisssionGuard]
    },
    {
        path: 'them',
        component: HopDongThauDuocPhamCreateComponent,
        data: {
            title: 'Thêm Hợp Đồng Thầu Dược Phẩm',
            DocumentType: DocumentType.DanhMucHopDongThauDuocPham,
            SecurityOperation: SecurityOperation.Add
        },
        canActivate: [PermisssionGuard]
    },
    {
        path: 'chinh-sua/:id',
        component: HopDongThauDuocPhamUpdateComponent,
        data: {
            title: 'Chỉnh Sửa Hợp Đồng Thầu Dược Phẩm',
            DocumentType: DocumentType.DanhMucHopDongThauDuocPham,
            SecurityOperation: SecurityOperation.Update
        },
        canActivate: [PermisssionGuard]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class HopDongThauDuocPhamRoutingModule { }
