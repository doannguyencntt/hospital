import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SecurityOperation } from 'src/app/shared/enum/security-operation.enum';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import { PermisssionGuard } from 'src/app/core/guards/permission-guard.service';
import { BaoCaoChiTietDoanhThuTheoBacSiListComponent } from './bao-cao-chi-tiet-doanh-thu-theo-bac-si-list/bao-cao-chi-tiet-doanh-thu-theo-bac-si-list.component';

const routes: Routes = [
    {
        path: '',
        component: BaoCaoChiTietDoanhThuTheoBacSiListComponent,
        data: {
            title: 'Báo cáo chi tiết doanh thu theo bác sĩ',
            DocumentType: DocumentType.BaoCaoChiTietDoanhThuTheoBacSi,
            SecurityOperation: SecurityOperation.View
        },
        canActivate: [PermisssionGuard]
    }
];


@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class BaoCaoChiTietDoanhThuTheoBacSiRoutingModule { }
