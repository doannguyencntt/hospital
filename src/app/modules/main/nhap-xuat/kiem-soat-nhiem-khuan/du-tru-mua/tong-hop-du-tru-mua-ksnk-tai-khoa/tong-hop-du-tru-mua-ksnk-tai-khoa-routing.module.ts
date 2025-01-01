import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import { SecurityOperation } from 'src/app/shared/enum/security-operation.enum';
import { PermisssionGuard } from 'src/app/core/guards/permission-guard.service';
import { DsTongHopDuTruMuaKSNKTaiKhoaComponent } from './ds-tong-hop-du-tru-mua-ksnk-tai-khoa/ds-tong-hop-du-tru-mua-ksnk-tai-khoa.component';
import { TongHopDuTruMuaKSNKTaiKhoaDuyetComponent } from './tong-hop-du-tru-mua-ksnk-tai-khoa-duyet/tong-hop-du-tru-mua-ksnk-tai-khoa-duyet.component';
import { TongHopDuTruMuaKSNKTaiKhoaDetailComponent } from './tong-hop-du-tru-mua-ksnk-tai-khoa-detail/tong-hop-du-tru-mua-ksnk-tai-khoa-detail.component';
// import { GuiTongHopDuTruMuaKSNKTaiKhoaDuyetComponent } from './gui-tong-hop-du-tru-mua-ksnk-tai-khoa-duyet/gui-tong-hop-du-tru-mua-ksnk-tai-khoa-duyet.component';

const routes: Routes = [
    {
        path: '',        
        component: DsTongHopDuTruMuaKSNKTaiKhoaComponent,
        data: {
            title: 'Danh Sách Tổng Hợp Dự Trù Mua Kiểm Soát Nhiễm Khuẩn Tại Khoa',
            DocumentType: DocumentType.THDTMuaTaiKSNK,
            SecurityOperation: SecurityOperation.View
        },
        canActivate: [PermisssionGuard]
    },
    {
        path: 'duyet/:id/:isSelected',
        component: TongHopDuTruMuaKSNKTaiKhoaDuyetComponent,
        data: {
            title: 'Duyệt Dự Trù Mua KSNK',
            DocumentType: DocumentType.THDTMuaTaiKSNK,
            SecurityOperation: SecurityOperation.Update
        },
        canActivate: [PermisssionGuard]
    },
    {
        path: 'chi-tiet/:id',
        component: TongHopDuTruMuaKSNKTaiKhoaDetailComponent,
        data: {
            title: 'Chi Tiết Dự Trù Mua Kiểm Soát Nhiễm Khuẩn Tại Khoa',
            DocumentType: DocumentType.THDTMuaTaiKSNK,
            SecurityOperation: SecurityOperation.Process
        },
        canActivate: [PermisssionGuard]
    },
    {
        path: 'gui/:id',
        // component: GuiTongHopDuTruMuaKSNKTaiKhoaDuyetComponent,
        data: {
            title: 'Gửi Dự Trù Mua Kiểm Soát Nhiễm Khuẩn Tại Khoa',
            DocumentType: DocumentType.THDTMuaTaiKSNK,
            SecurityOperation: SecurityOperation.Update
        },
        canActivate: [PermisssionGuard]
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class TongHopDuTruMuaKSNKTaiKhoaRoutingModule { }
