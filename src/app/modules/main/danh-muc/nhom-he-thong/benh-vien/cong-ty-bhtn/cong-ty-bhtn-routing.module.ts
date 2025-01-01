import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CongTyBhtnListComponent } from './cong-ty-bhtn-list/cong-ty-bhtn-list.component';
import { CongTyBhtnCreateComponent } from './cong-ty-bhtn-create/cong-ty-bhtn-create.component';
import { CongTyBhtnUpdateComponent } from './cong-ty-bhtn-update/cong-ty-bhtn-update.component';
import { SecurityOperation } from 'src/app/shared/enum/security-operation.enum';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import { PermisssionGuard } from 'src/app/core/guards/permission-guard.service';

const routes: Routes = [
    {
        path: '',
        component: CongTyBhtnListComponent,
        data: {
            title: 'Danh mục công ty bảo hiểm tư nhân',
            DocumentType: DocumentType.DanhMucCongTyBhtn,
            SecurityOperation: SecurityOperation.View
        },
        canActivate: [PermisssionGuard]
    },
    {
        path: 'them',
        component: CongTyBhtnCreateComponent,
        data: {
            title: 'Thêm công ty bảo hiểm tư nhân',
            DocumentType: DocumentType.DanhMucCongTyBhtn,
            SecurityOperation: SecurityOperation.Add
        },
        canActivate: [PermisssionGuard]
    },
    {
        path: 'chinh-sua/:id',
        component: CongTyBhtnUpdateComponent,
        data: {
            title: 'Chỉnh sửa công ty bảo hiểm tư nhân',
            DocumentType: DocumentType.DanhMucCongTyBhtn,
            SecurityOperation: SecurityOperation.Update
        },
        canActivate: [PermisssionGuard]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class CongTyBhtnRoutingModule { }
