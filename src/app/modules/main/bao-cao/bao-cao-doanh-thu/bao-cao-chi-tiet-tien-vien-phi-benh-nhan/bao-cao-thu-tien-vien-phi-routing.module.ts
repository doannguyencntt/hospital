import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';

import { SecurityOperation } from 'src/app/shared/enum/security-operation.enum';
import { BaoCaoChiTietThuTienVienPhiBenhNhanComponent } from './bao-cao-danh-sach-thu-tien-vien-phi/bao-cao-danh-sach-thu-tien-vien-phi.component';

const routes: Routes = [
    {
        path: '',
        component: BaoCaoChiTietThuTienVienPhiBenhNhanComponent,
        data: {
            title: 'Báo cáo chi tiết thu tiền viện phí người bệnh',
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
