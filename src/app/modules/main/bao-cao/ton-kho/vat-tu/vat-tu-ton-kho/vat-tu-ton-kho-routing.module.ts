import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PermisssionGuard } from 'src/app/core/guards/permission-guard.service';
import { SecurityOperation } from 'src/app/shared/enum/security-operation.enum';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import { VatTuTonKhoListComponent } from './vat-tu-ton-kho-list/vat-tu-ton-kho-list.component';

const routes: Routes = [{
    path: '',
    component: VatTuTonKhoListComponent,
    data: {
        title: 'Danh sách vật tư tồn kho',
        DocumentType: DocumentType.VatTuTonKho,
        SecurityOperation: SecurityOperation.View
    },
    canActivate: [PermisssionGuard]
}];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class VatTuTonKhoRoutingModule { }