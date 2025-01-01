import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PhamViHanhNgheListComponent } from './pham-vi-hanh-nghe-list/pham-vi-hanh-nghe-list.component';
import { PhamViHanhNgheCreateComponent } from './pham-vi-hanh-nghe-create/pham-vi-hanh-nghe-create.component';
import { PhamViHanhNgheUpdateComponent } from './pham-vi-hanh-nghe-update/pham-vi-hanh-nghe-update.component';
import { SecurityOperation } from 'src/app/shared/enum/security-operation.enum';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import { PermisssionGuard } from 'src/app/core/guards/permission-guard.service';

const routes: Routes = [
    {
        path: '',
        component: PhamViHanhNgheListComponent,
        data: {
            title: 'Danh mục phạm vi hành nghề',
            DocumentType: DocumentType.DanhMucPhamViHanhNghe,
            SecurityOperation: SecurityOperation.View
        },
        canActivate: [PermisssionGuard]
    },
    {
        path: 'them',
        component: PhamViHanhNgheCreateComponent,
        data: {
            title: 'Thêm phạm vi hành nghề',
            DocumentType: DocumentType.DanhMucPhamViHanhNghe,
            SecurityOperation: SecurityOperation.Add
        },
        canActivate: [PermisssionGuard]
    },
    {
        path: 'chinh-sua/:id',
        component: PhamViHanhNgheUpdateComponent,
        data: {
            title: 'Chỉnh sửa phạm vi hành nghề',
            DocumentType: DocumentType.DanhMucPhamViHanhNghe,
            SecurityOperation: SecurityOperation.Update
        },
        canActivate: [PermisssionGuard]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PhamViHanhNgheRoutingModule { }
