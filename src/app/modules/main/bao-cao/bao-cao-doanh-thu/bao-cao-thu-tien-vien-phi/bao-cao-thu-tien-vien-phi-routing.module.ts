import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import { SecurityOperation } from 'src/app/shared/enum/security-operation.enum';
import { BaoCaoThuTienVienPhiComponent } from './bao-cao-thu-tien-vien-phi/bao-cao-thu-tien-vien-phi.component';

const routes: Routes = [
    {
        path: '',
        component: BaoCaoThuTienVienPhiComponent,
        data: {
            title: 'Báo cáo thu tiền viện phí',
            DocumentType: DocumentType.BaoCaoThuVienPhiBenhNhan,
            SecurityOperation: SecurityOperation.View
        }
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ThuTienVienPhiRoutingModule { }
