import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import { SecurityOperation } from 'src/app/shared/enum/security-operation.enum';
import { DanhSachBaoCaoHoatDongNoiTruChiTietComponent } from './danh-sach-bao-cao-hoat-dong-noi-tru-chi-tiet/danh-sach-bao-cao-hoat-dong-noi-tru-chi-tiet.component';

const routes: Routes = [
    {
        path: '',
        component: DanhSachBaoCaoHoatDongNoiTruChiTietComponent,
        data: {
            title: 'Báo cáo hoạt động nội trú chi tiết',
            DocumentType: DocumentType.BaoCaoHoatDongNoiTruChiTiet,
            SecurityOperation: SecurityOperation.View
        }
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class DSBaoCaoHoatDongNoiTruChiTietRoutingModule { }
