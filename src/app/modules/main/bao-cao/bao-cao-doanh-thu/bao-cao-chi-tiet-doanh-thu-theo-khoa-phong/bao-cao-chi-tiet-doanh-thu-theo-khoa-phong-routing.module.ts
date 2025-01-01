import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SecurityOperation } from 'src/app/shared/enum/security-operation.enum';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import { PermisssionGuard } from 'src/app/core/guards/permission-guard.service';
import { BaoCaoChiTietDoanhThuTheoKhoaPhongListComponent } from './bcct-doanh-thu-theo-khoa-phong-list/bcct-doanh-thu-theo-khoa-phong-list.component';

const routes: Routes = [
    {
        path: '',
        component: BaoCaoChiTietDoanhThuTheoKhoaPhongListComponent,
        data: {
            title: 'Doanh Thu Theo Khoa Phòng Mẫu 2',
            DocumentType: DocumentType.BaoCaoChiTietDoanhThuTheoKhoaPhong,
            SecurityOperation: SecurityOperation.View
        },
        canActivate: [PermisssionGuard]
    }
];
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class BaoCaoChiTietDoanhThuTheoKhoaPhongRoutingModule { }