import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import { SecurityOperation } from 'src/app/shared/enum/security-operation.enum';
import { DanhSachBaoCaoTinhHinhBenhTatTuVongComponent } from './ds-bao-cao-tinh-hinh-benh-tat-tu-vong/ds-bao-cao-tinh-hinh-benh-tat-tu-vong.component';

const routes: Routes = [
    {
        path: '',
        component: DanhSachBaoCaoTinhHinhBenhTatTuVongComponent,
        data: {
            title: 'Báo cáo tình hình bệnh tật tử vong',
            DocumentType: DocumentType.BaoCaoTinhHinhBenhTatTuVong,
            SecurityOperation: SecurityOperation.View
        }
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class BaoCaoTinhHinhBenhTatTuVongRoutingModule { }
