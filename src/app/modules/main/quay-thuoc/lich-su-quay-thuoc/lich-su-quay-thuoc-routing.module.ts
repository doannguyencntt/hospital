import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import { SecurityOperation } from 'src/app/shared/enum/security-operation.enum';
import { PermisssionGuard } from 'src/app/core/guards/permission-guard.service';

import { LichSuQuayXuatThuocListComponent } from './lich-su-quay-xuat-thuoc-list/lich-su-quay-xuat-thuoc-list.component';
import { LichSuQuayXuatThuocDetailComponent } from './lich-su-quay-xuat-thuoc-detail/lich-su-quay-xuat-thuoc-detail.component';




const routes: Routes = [
    {
        path: '',
        component: LichSuQuayXuatThuocListComponent,
        data: {
            title: 'Lịch sử  bán thuốc',
            DocumentType: DocumentType.LichSuQuayThuoc,
            SecurityOperation: SecurityOperation.View
        },
        canActivate: [PermisssionGuard]
    },
    {
        path: 'lich-su-xuat-thuoc-chi-tiet/:id/:idBenhNhan/:idTaiKhoanBenhNhanThu',
        component: LichSuQuayXuatThuocDetailComponent,
        data: {
            title: 'Lịch sử bán thuốc chi tiết',
            DocumentType: DocumentType.LichSuQuayThuoc,
            SecurityOperation: SecurityOperation.View
        },
        canActivate: [PermisssionGuard]
    },
    // {
    //   path: 'chinh-sua/:id',
    //   component: ChucDanhUpdateComponent,
    //   data: {
    //     title: 'Chỉnh sửa chức danh',
    //     DocumentType: DocumentType.DanhMucChucDanh,
    //     SecurityOperation: SecurityOperation.Update
    //   },
    //   canActivate: [PermisssionGuard]
    // },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LichSuQuayThuocRoutingModule { }
