import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SecurityOperation } from 'src/app/shared/enum/security-operation.enum';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import { PermisssionGuard } from 'src/app/core/guards/permission-guard.service';
import { DuTruGiamDocListComponent } from './du-tru-giam-doc-list/du-tru-giam-doc-list.component';
import { DuTruGiamDocChiTietComponent } from './du-tru-giam-doc-chi-tiet/du-tru-giam-doc-chi-tiet.component';

const routes: Routes = [
    {
        path: '',
        component: DuTruGiamDocListComponent,
        data: {
            title: 'Danh Sách Nhập Kho Kiểm Soát Nhiễm Khuẩn',
            DocumentType: DocumentType.THDTMuaTaiGiamDoc ,
            SecurityOperation: SecurityOperation.View
        },
        canActivate: [PermisssionGuard]
    },
    {
        path: 'chi-tiet/:id',
        component: DuTruGiamDocChiTietComponent,
        data: {
            title: 'Chi Tiết Duyệt Dự Trù Kiểm Soát Nhiễm Khuẩn',
            DocumentType: DocumentType.THDTMuaTaiGiamDoc ,
            SecurityOperation: SecurityOperation.Update
        },
        canActivate: [PermisssionGuard]
    },
];
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class DuTruGiamDocRoutingModule { }
