import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import { BaoCaoThucHienClsListComponent } from './bao-cao-thuc-hien-cls-list/bao-cao-thuc-hien-cls-list.component';
import { SecurityOperation } from 'src/app/shared/enum/security-operation.enum';

const routes: Routes = [
    {
        path: '',
        component: BaoCaoThucHienClsListComponent,
        data: {
            title: 'Báo Cáo Thực Hiện Cận Lâm Sàng',
            DocumentType: DocumentType.BaoCaoThucHienCls,
            SecurityOperation: SecurityOperation.View
        }
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class BaoCaoThucHienClsRoutingModule { }
