import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NhaThauListComponent } from './nha-thau-list/nha-thau-list.component';
import { NhaThauCreateComponent } from './nha-thau-create/nha-thau-create.component';
import { NhaThauUpdateComponent } from './nha-thau-update/nha-thau-update.component';
import { SecurityOperation } from 'src/app/shared/enum/security-operation.enum';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import { PermisssionGuard } from 'src/app/core/guards/permission-guard.service';

const routes: Routes = [
    {
        path: '',
        component: NhaThauListComponent,
        data: {
            title: 'Danh Mục Nhà Cung Cấp',
            DocumentType: DocumentType.DanhMucNhaThau,
            SecurityOperation: SecurityOperation.View
        },
        canActivate: [PermisssionGuard]
    },
    {
        path: 'them',
        component: NhaThauCreateComponent,
        data: {
            title: 'Thêm Nhà Cung Cấp',
            DocumentType: DocumentType.DanhMucNhaThau,
            SecurityOperation: SecurityOperation.Add
        },
        canActivate: [PermisssionGuard]
    },
    {
        path: 'chinh-sua/:id',
        component: NhaThauUpdateComponent,
        data: {
            title: 'Chỉnh Sửa Nhà Cung Cấp',
            DocumentType: DocumentType.DanhMucNhaThau,
            SecurityOperation: SecurityOperation.Update
        },
        canActivate: [PermisssionGuard]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class NhaThauRoutingModule { }
