import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SecurityOperation } from 'src/app/shared/enum/security-operation.enum';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import { PermisssionGuard } from 'src/app/core/guards/permission-guard.service';
import { BaoCaoTongHopDoanhThuTheoBacSiListComponent } from './bao-cao-tong-hop-doanh-thu-theo-bac-si-list/bao-cao-tong-hop-doanh-thu-theo-bac-si-list.component';

const routes: Routes = [
    {
        path: '',
        component: BaoCaoTongHopDoanhThuTheoBacSiListComponent,
        data: {
            title: 'Báo cáo tổng hợp doanh thu bác sỹ',
            DocumentType: DocumentType.BaoCaoTongHopDoanhThuTheoBacSi,
            SecurityOperation: SecurityOperation.View
        },
        canActivate: [PermisssionGuard]
    }
];
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class BaoCaoTongHopDoanhThuTheoBacSiRoutingModule { }
