import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LichPhanCongNgoaiTruPdfComponent } from './lich-phan-cong-ngoai-tru-pdf/lich-phan-cong-ngoai-tru-pdf.component';
import { LichPhanCongNgoaiTruTheoThangComponent }
    from './lich-phan-cong-ngoai-tru-theo-thang/lich-phan-cong-ngoai-tru-theo-thang.component';
import { LichPhanCongTheoTuanChinhSuaLichComponent }
    from './lich-phan-cong-theo-tuan-chinh-sua-lich/lich-phan-cong-theo-tuan-chinh-sua-lich.component';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import { SecurityOperation } from 'src/app/shared/enum/security-operation.enum';
import { PermisssionGuard } from 'src/app/core/guards/permission-guard.service';
const routes: Routes = [
    {
        path: '',
        component: LichPhanCongNgoaiTruTheoThangComponent,
        data: {
            title: 'Lịch phân công ngoại trú theo tháng',
            DocumentType: DocumentType.DanhMucLichPhanCongNgoaiTru,
            SecurityOperation: SecurityOperation.View
        },
        canActivate: [PermisssionGuard]
    },
    {
        path: 'xep-lich/:id/:ngay',
        component: LichPhanCongTheoTuanChinhSuaLichComponent,
        data: {
            title: 'Lịch phân công ngoại trú theo tuần chỉnh sửa',
            DocumentType: DocumentType.DanhMucLichPhanCongNgoaiTru,
            SecurityOperation: SecurityOperation.Add
        },
        canActivate: [PermisssionGuard]
    },
    {
        path: 'pdf',
        component: LichPhanCongNgoaiTruPdfComponent,
        data: {
            title: 'Lịch phân công ngoại trú theo tuần PDF',
            DocumentType: DocumentType.DanhMucLichPhanCongNgoaiTru,
            SecurityOperation: SecurityOperation.View
        },
        canActivate: [PermisssionGuard]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LichPhanCongNgoaiTruRoutingModule { }
