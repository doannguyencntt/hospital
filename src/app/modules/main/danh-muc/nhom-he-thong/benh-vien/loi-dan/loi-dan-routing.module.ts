import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoiDanListComponent } from './loi-dan-list/loi-dan-list.component';
import { LoiDanCreateComponent } from './loi-dan-create/loi-dan-create.component';
import { LoiDanUpdateComponent } from './loi-dan-update/loi-dan-update.component';
import { SecurityOperation } from 'src/app/shared/enum/security-operation.enum';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import { PermisssionGuard } from 'src/app/core/guards/permission-guard.service';

const routes: Routes = [
    {
        path: '',
        component: LoiDanListComponent,
        data: {
            title: 'Danh mục lời dặn',
            DocumentType: DocumentType.LoiDan,
            SecurityOperation: SecurityOperation.View
        },
        canActivate: [PermisssionGuard]
    },
    {
        path: 'them',
        component: LoiDanCreateComponent,
        data: {
            title: 'Thêm lời dặn',
            DocumentType: DocumentType.LoiDan,
            SecurityOperation: SecurityOperation.Add
        },
        canActivate: [PermisssionGuard]
    },
    {
        path: 'chinh-sua/:id',
        component: LoiDanUpdateComponent,
        data: {
            title: 'Chỉnh sửa lời dặn',
            DocumentType: DocumentType.LoiDan,
            SecurityOperation: SecurityOperation.Update
        },
        canActivate: [PermisssionGuard]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LoiDanRoutingModule { }
