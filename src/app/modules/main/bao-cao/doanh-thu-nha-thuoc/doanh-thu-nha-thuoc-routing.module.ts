import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import { DoanhThuNhaThuocListComponent } from './doanh-thu-nha-thuoc-list/doanh-thu-nha-thuoc-list.component';
import { SecurityOperation } from 'src/app/shared/enum/security-operation.enum';

const routes: Routes = [
    {
        path: '',
        component: DoanhThuNhaThuocListComponent,
        data: {
            title: 'Báo Cáo Doanh Thu Nhà Thuốc',
            DocumentType: DocumentType.BaoCaoDoanhThuNhaThuoc,
            SecurityOperation: SecurityOperation.View
        }
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class DoanhThuNhaThuocRoutingModule { }
