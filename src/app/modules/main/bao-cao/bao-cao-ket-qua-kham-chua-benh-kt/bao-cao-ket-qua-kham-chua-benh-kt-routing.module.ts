import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import { SecurityOperation } from 'src/app/shared/enum/security-operation.enum';
import { DanhSachBaoCaoKetQuaKhamChuaBenhKTComponent } from './danh-sach-bao-cao-ket-qua-kham-chua-benh-kt/danh-sach-bao-cao-ket-qua-kham-chua-benh-kt.component';

const routes: Routes = [
    {
        path: '',
        component: DanhSachBaoCaoKetQuaKhamChuaBenhKTComponent,
        data: {
            title: 'Báo cáo kết quả khám chữa bệnh KT',
            DocumentType: DocumentType.BaoCaoKetQuaKhamChuaBenhKT,
            SecurityOperation: SecurityOperation.View
        }
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class DanhSachBaoCaoKetQuaKhamChuaBenhKTRoutingModule { }
