import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PermisssionGuard } from 'src/app/core/guards/permission-guard.service';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import { SecurityOperation } from 'src/app/shared/enum/security-operation.enum';
import { KhamDoanChiSoSinhTonDetailedComponent } from './kham-doan-chi-so-sinh-ton-detailed/kham-doan-chi-so-sinh-ton-detailed.component';
import { KhamDoanChiSoSinhTonListComponent } from './kham-doan-chi-so-sinh-ton-list/kham-doan-chi-so-sinh-ton-list.component';


const routes: Routes = [
    {
        path: '',
        component: KhamDoanChiSoSinhTonListComponent,
        data: {
            title: 'Danh sách đo chỉ số sinh tồn khám sức khỏe đoàn',
            DocumentType: DocumentType.KhamDoanChiSoSinhTon,
            SecurityOperation: SecurityOperation.View
        },
        canActivate: [PermisssionGuard]
    },
    {
        path: 'chi-tiet/:id',
        component: KhamDoanChiSoSinhTonDetailedComponent,
        data: {
            title: 'đo chỉ số sinh tồn khám sức khỏe đoàn',
            DocumentType: DocumentType.KhamDoanChiSoSinhTon,
            SecurityOperation: SecurityOperation.Update
        },
        canActivate: [PermisssionGuard]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class KhamDoanChiSoSinhTonRoutingModule { }
