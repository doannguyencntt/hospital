import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import { SecurityOperation } from 'src/app/shared/enum/security-operation.enum';
import { PermisssionGuard } from 'src/app/core/guards/permission-guard.service';
import { QuaTangListComponent } from './qua-tang-list/qua-tang-list.component';
import { QuaTangCreateComponent } from './qua-tang-create/qua-tang-create.component';
import { QuaTangUpdateComponent } from './qua-tang-update/qua-tang-update.component';

const routes: Routes = [
    {
        path: '',
        component: QuaTangListComponent,
        data: {
          title: 'Danh sách quà tặng',      
          DocumentType: DocumentType.QuaTangMarketing,
          SecurityOperation:SecurityOperation.View
        },
        canActivate: [PermisssionGuard]
    },
    {
        path: 'them',
        component: QuaTangCreateComponent,
        data: {
          title: 'Thêm quà tặng',      
          DocumentType: DocumentType.QuaTangMarketing,
          SecurityOperation:SecurityOperation.Add
        },
        canActivate: [PermisssionGuard]
    },
    {
        path: 'chinh-sua/:id',
        component: QuaTangUpdateComponent,
        data: {
          title: 'Chỉnh sửa quà tặng',      
          DocumentType: DocumentType.QuaTangMarketing,
          SecurityOperation:SecurityOperation.Update
        },
        canActivate: [PermisssionGuard]
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class QuaTangRoutingModule { }