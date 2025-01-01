import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CongTyUuDaiListComponent } from './cong-ty-uu-dai-list/cong-ty-uu-dai-list.component';
import { CongTyUuDaiCreateComponent } from './cong-ty-uu-dai-create/cong-ty-uu-dai-create.component';
import { CongTyUuDaiUpdateComponent } from './cong-ty-uu-dai-update/cong-ty-uu-dai-update.component';
import { SecurityOperation } from 'src/app/shared/enum/security-operation.enum';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import { PermisssionGuard } from 'src/app/core/guards/permission-guard.service';

const routes: Routes = [
    {
        path: '',
        component: CongTyUuDaiListComponent,
        data: {
            title: 'Danh mục công ty ưu đãi',
            DocumentType: DocumentType.DanhMucCongTyUuDai,
            SecurityOperation: SecurityOperation.View
        },
        canActivate: [PermisssionGuard]
    },
    {
        path: 'them',
        component: CongTyUuDaiCreateComponent,
        data: {
            title: 'Thêm công ty ưu đãi',
            DocumentType: DocumentType.DanhMucCongTyUuDai,
            SecurityOperation: SecurityOperation.Add
        },
        canActivate: [PermisssionGuard]
    },
    {
        path: 'chinh-sua/:id',
        component: CongTyUuDaiUpdateComponent,
        data: {
            title: 'Chỉnh sửa công ty ưu đãi',
            DocumentType: DocumentType.DanhMucCongTyUuDai,
            SecurityOperation: SecurityOperation.Update
        },
        canActivate: [PermisssionGuard]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class CongTyUuDaiRoutingModule { }
