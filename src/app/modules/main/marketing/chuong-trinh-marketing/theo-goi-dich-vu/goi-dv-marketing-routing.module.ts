import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PermisssionGuard } from 'src/app/core/guards/permission-guard.service';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import { SecurityOperation } from 'src/app/shared/enum/security-operation.enum';
import { GoiDvCtMarketingAddComponent } from './goi-dv-marketing-create/goi-dv-marketing-create.component';
import { GoiDvCtMarketingListComponent } from './goi-dv-marketing-list/goi-dv-marketing-list.component';
import { GoiDvCtMarketingUpdateComponent } from './goi-dv-marketing-update/goi-dv-marketing-update.component';

const routes: Routes = [
    {
        path: '',
        component: GoiDvCtMarketingListComponent,
        data: {
            title: 'Danh Mục Chương Trình Marketing Theo Gói Dịch Vụ',
            DocumentType: DocumentType.GoiDichVuMarketing,
            SecurityOperation: SecurityOperation.View
        },
        canActivate: [PermisssionGuard]
    },
    {
        path: 'them',
        component: GoiDvCtMarketingAddComponent,
        data: {
            title: 'Thêm Chương Trình Marketing Theo Gói Dịch Vụ',
            DocumentType: DocumentType.GoiDichVuMarketing,
            SecurityOperation: SecurityOperation.Add
        },
        canActivate: [PermisssionGuard]
    },
    {
        path: 'them/:id',
        component: GoiDvCtMarketingAddComponent,
        data: {
            title: 'Thêm Chương Trình Marketing Theo Gói Dịch Vụ',
            DocumentType: DocumentType.GoiDichVuMarketing,
            SecurityOperation: SecurityOperation.Add
        },
        canActivate: [PermisssionGuard]
    },
    {
        path: 'chinh-sua/:id',
        component: GoiDvCtMarketingUpdateComponent,
        data: {
            title: 'Chỉnh Sửa Chương Trình Marketing Theo Gói Dịch Vụ',
            DocumentType: DocumentType.GoiDichVuMarketing,
            SecurityOperation: SecurityOperation.Update
        },
        canActivate: [PermisssionGuard]
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class GoiDvChuongTrinhMarketingRoutingModule { }
