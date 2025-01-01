import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PermisssionGuard } from 'src/app/core/guards/permission-guard.service';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import { SecurityOperation } from 'src/app/shared/enum/security-operation.enum';
import { KhamDoanCongTyDetailPopupComponent } from './kham-doan-cong-ty-detail-popup/kham-doan-cong-ty-detail-popup.component';
import { KhamDoanCongTyListComponent } from './kham-doan-cong-ty-list/kham-doan-cong-ty-list.component';


const routes: Routes = [
    {
        path: '',
        component: KhamDoanCongTyListComponent,
        data: {
            title: 'Công ty',
            DocumentType: DocumentType.KhamDoanCongTy,
            SecurityOperation: SecurityOperation.View
        },
        canActivate: [PermisssionGuard]
    },
    {
        path: 'them',
        component: KhamDoanCongTyDetailPopupComponent,
        data: {
            title: 'Thêm công ty',
            DocumentType: DocumentType.KhamDoanCongTy,
            SecurityOperation: SecurityOperation.Update
        },
        canActivate: [PermisssionGuard]
    },
    {
        path: 'chi-tiet/:id',
        component: KhamDoanCongTyDetailPopupComponent,
        data: {
            title: 'Chi tiết công ty',
            DocumentType: DocumentType.KhamDoanCongTy,
            SecurityOperation: SecurityOperation.Update
        },
        canActivate: [PermisssionGuard]
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class KhamDoanCongTyRoutingModule { }
