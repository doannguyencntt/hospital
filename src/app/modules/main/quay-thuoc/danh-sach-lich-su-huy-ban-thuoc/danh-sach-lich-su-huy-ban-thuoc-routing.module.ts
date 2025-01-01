import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import { SecurityOperation } from 'src/app/shared/enum/security-operation.enum';
import { PermisssionGuard } from 'src/app/core/guards/permission-guard.service';
import { LichSuHuyBanThuocDetailComponent } from './lich-su-huy-ban-thuoc-detail/lich-su-huy-ban-thuoc-detail.component';
import { LichSuHuyBanThuocListComponent } from './lich-su-huy-ban-thuoc-list/lich-su-huy-ban-thuoc-list.component';



const routes: Routes = [
    {
        path: '',
        component: LichSuHuyBanThuocListComponent,
        data: {
            title: 'Lịch sử hủy bán bán thuốc',
            DocumentType: DocumentType.DanhSachLichSuHuyBanThuoc,
            SecurityOperation: SecurityOperation.View
        },
        canActivate: [PermisssionGuard]
    },
    {
        path: 'lich-su-huy-ban-thuoc-chi-tiet/:id/:idBenhNhan/:idTaiKhoanBenhNhanThu',
        component: LichSuHuyBanThuocDetailComponent,
        data: {
            title: 'Lịch sử hủy bán thuốc chi tiết',
            DocumentType: DocumentType.DanhSachLichSuHuyBanThuoc,
            SecurityOperation: SecurityOperation.View
        },
        canActivate: [PermisssionGuard]
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LichSuHuyBanThuocRoutingModule { }
