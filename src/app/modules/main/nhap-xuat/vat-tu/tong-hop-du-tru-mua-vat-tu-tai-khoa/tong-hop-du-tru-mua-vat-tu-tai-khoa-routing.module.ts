import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import { SecurityOperation } from 'src/app/shared/enum/security-operation.enum';
import { PermisssionGuard } from 'src/app/core/guards/permission-guard.service';
import {
    DsTongHopDuTruMuaVatTuTaiKhoaComponent
} from './ds-tong-hop-du-tru-mua-vat-tu-tai-khoa/ds-tong-hop-du-tru-mua-vat-tu-tai-khoa.component';
import {
    TongHopDuTruMuaVatTuTaiKhoaDetailComponent
} from './tong-hop-du-tru-mua-vat-tu-tai-khoa-detail/tong-hop-du-tru-mua-vat-tu-tai-khoa-detail.component';
import {
    GuiTongHopDuTruMuaVatTuTaiKhoaDuyetComponent
} from './gui-tong-hop-du-tru-mua-vat-tu-tai-khoa-duyet/gui-tong-hop-du-tru-mua-vat-tu-tai-khoa-duyet.component';
import {
    TongHopDuTruMuaVatTuTaiKhoaDuyetComponent
} from './tong-hop-du-tru-mua-vat-tu-tai-khoa-duyet/tong-hop-du-tru-mua-vat-tu-tai-khoa-duyet.component';

const routes: Routes = [
    {
        path: '',
        // pathMatch: 'full',
        component: DsTongHopDuTruMuaVatTuTaiKhoaComponent,
        data: {
            title: 'Danh Sách Tổng Hợp Dự Trù Mua Vật Tư Tại Khoa',
            DocumentType: DocumentType.DanhSachTongHopDuTruMuaVatTuTaiKhoa,
            SecurityOperation: SecurityOperation.View
        },
        canActivate: [PermisssionGuard]
    },
    {
        path: 'duyet/:id/:isSelected',
        component: TongHopDuTruMuaVatTuTaiKhoaDuyetComponent,
        data: {
            title: 'Duyệt Dự Trù Mua Vật Tư',
            DocumentType: DocumentType.DanhSachTongHopDuTruMuaVatTuTaiKhoa,
            SecurityOperation: SecurityOperation.Update
        },
        canActivate: [PermisssionGuard]
    },
    {
        path: 'chi-tiet/:id',
        component: TongHopDuTruMuaVatTuTaiKhoaDetailComponent,
        data: {
            title: 'Chi Tiết Dự Trù Mua Vật Tư Tại Khoa',
            DocumentType: DocumentType.DanhSachTongHopDuTruMuaVatTuTaiKhoa,
            SecurityOperation: SecurityOperation.Process
        },
        canActivate: [PermisssionGuard]
    },
    {
        path: 'gui/:id',
        component: GuiTongHopDuTruMuaVatTuTaiKhoaDuyetComponent,
        data: {
            title: 'Gửi Dự Trù Mua Vật Tư Tại Khoa',
            DocumentType: DocumentType.DanhSachTongHopDuTruMuaVatTuTaiKhoa,
            SecurityOperation: SecurityOperation.Update
        },
        canActivate: [PermisssionGuard]
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class TongHopDuTruMuaVatTuTaiKhoaRoutingModule { }
