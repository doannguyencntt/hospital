import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import {
    DanhSachBenhNhanPhauThuatListComponent
} from './danh-sach-benh-nhan-phau-thuat-list/danh-sach-benh-nhan-phau-thuat-list.component';
import { SecurityOperation } from 'src/app/shared/enum/security-operation.enum';

const routes: Routes = [
    {
        path: '',
        component: DanhSachBenhNhanPhauThuatListComponent,
        data: {
            title: 'Danh Sách Người Bệnh Phẫu Thuật',
            DocumentType: DocumentType.DanhSachBenhNhanPhauThuat,
            SecurityOperation: SecurityOperation.View
        }
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class DanhSachBenhNhanPhauThuatRoutingModule { }
