import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import { SecurityOperation } from 'src/app/shared/enum/security-operation.enum';
import { PermisssionGuard } from 'src/app/core/guards/permission-guard.service';
import { KyDuTruListComponent } from './ky-du-tru-list/ky-du-tru-list.component';
import { KyDuTruCreateComponent } from './ky-du-tru-create/ky-du-tru-create.component';
import { KyDuTruUpdateComponent } from './ky-du-tru-update/ky-du-tru-update.component';

const routes: Routes = [
    {
        path: '',
        component: KyDuTruListComponent,
        data: {
          title: 'Danh sách kỳ dự trù',      
          DocumentType: DocumentType.KyDuTru,
          SecurityOperation:SecurityOperation.View
        },
        canActivate: [PermisssionGuard]
    },
    {
        path: 'them',
        component: KyDuTruCreateComponent,
        data: {
          title: 'Thêm quà tặng',      
          DocumentType: DocumentType.KyDuTru,
          SecurityOperation:SecurityOperation.Add
        },
        canActivate: [PermisssionGuard]
    },
    {
        path: 'chinh-sua/:id',
        component: KyDuTruUpdateComponent,
        data: {
          title: 'Chỉnh sửa quà tặng',      
          DocumentType: DocumentType.KyDuTru,
          SecurityOperation:SecurityOperation.Update
        },
        canActivate: [PermisssionGuard]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class KyDuTruRoutingModule { }