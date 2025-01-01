import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PhuongPhapVoCamListComponent } from './phuong-phap-vo-cam-list/phuong-phap-vo-cam-list.component';
import { PhuongPhapVoCamCreateComponent } from './phuong-phap-vo-cam-create/phuong-phap-vo-cam-create.component';
import { PhuongPhapVoCamUpdateComponent } from './phuong-phap-vo-cam-update/phuong-phap-vo-cam-update.component';
import { SecurityOperation } from 'src/app/shared/enum/security-operation.enum';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import { PermisssionGuard } from 'src/app/core/guards/permission-guard.service';

const routes: Routes = [
    {
        path: '',
        component: PhuongPhapVoCamListComponent,
        data: {
            title: 'Danh mục phương pháp vô cảm',
            DocumentType: DocumentType.DanhMucPhuongPhapVoCam,
            SecurityOperation: SecurityOperation.View
        },
        canActivate: [PermisssionGuard]
    },
    {
        path: 'them',
        component: PhuongPhapVoCamCreateComponent,
        data: {
            title: 'Thêm phương pháp vô cảm',
            DocumentType: DocumentType.DanhMucPhuongPhapVoCam,
            SecurityOperation: SecurityOperation.Add
        },
        canActivate: [PermisssionGuard]
    },
    {
        path: 'chinh-sua/:id',
        component: PhuongPhapVoCamUpdateComponent,
        data: {
            title: 'Chỉnh sửa phương pháp vô cảm',
            DocumentType: DocumentType.DanhMucPhuongPhapVoCam,
            SecurityOperation: SecurityOperation.Update
        },
        canActivate: [PermisssionGuard]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PhuongPhapVoCamRoutingModule { }
