import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SecurityOperation } from 'src/app/shared/enum/security-operation.enum';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import { PermisssionGuard } from 'src/app/core/guards/permission-guard.service';
import { BaoCaoTongHopDoanhThuTheoKhoaPhongListComponent } from './bcth-doanh-thu-theo-khoa-phong-list/bcth-doanh-thu-theo-khoa-phong-list.component';

const routes: Routes = [
    {
        path: '',
        component: BaoCaoTongHopDoanhThuTheoKhoaPhongListComponent,
        data: {
            title: 'Doanh Thu Theo Khoa Phòng',
            DocumentType: DocumentType.BaoCaoTongHopDoanhThuTheoKhoaPhong,
            SecurityOperation: SecurityOperation.View
        },
        canActivate: [PermisssionGuard]
    }
];
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class BaoCaoTongHopDoanhThuTheoKhoaPhongRoutingModule { }
