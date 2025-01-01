import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import { SecurityOperation } from 'src/app/shared/enum/security-operation.enum';
import { BaoCaoDoanhThuDichVuTheoNhomBVComponent } from './bao-cao-doanh-thu-dich-vu-theo-nhom-bv/bao-cao-doanh-thu-dich-vu-theo-nhom-bv.component';

const routes: Routes = [
    {
        path: '',
        component: BaoCaoDoanhThuDichVuTheoNhomBVComponent,
        data: {
            title: 'Báo cáo doanh thu dịch vụ theo nhóm bệnh viện',
            DocumentType: DocumentType.BaoCaoDoanhThuTheoNhomDichVu,
            SecurityOperation: SecurityOperation.View
        }
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class BaoCaoDoanhThuDichVuTheoNhomBenhVienRoutingModule { }
