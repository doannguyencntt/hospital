import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PhauThuatThuThuatTheoNgayComponent } from './phau-thuat-thu-thuat-theo-ngay/phau-thuat-thu-thuat-theo-ngay.component';
// import { LichSuPhauThuatThuThuatComponent } from './lich-su-phau-thuat-thu-thuat/lich-su-phau-thuat-thu-thuat.component';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import { SecurityOperation } from 'src/app/shared/enum/security-operation.enum';
import { PermisssionGuard } from 'src/app/core/guards/permission-guard.service';

const routes: Routes = [
    {
        path: '',
        component: PhauThuatThuThuatTheoNgayComponent,
        data: {
            title: "Phẫu Thuật Thủ Thuật Theo Ngày",
            DocumentType: DocumentType.PhauThuatThuThuatTheoNgay,
            SecurityOperation: SecurityOperation.View
        },
        canActivate: [PermisssionGuard]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class PhauThuatThuThuatRoutingModule { }
