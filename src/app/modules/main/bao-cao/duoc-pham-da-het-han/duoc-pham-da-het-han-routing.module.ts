import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import { DuocPhamDaHetHanListComponent } from './duoc-pham-da-het-han-list/duoc-pham-da-het-han-list.component';
import { SecurityOperation } from 'src/app/shared/enum/security-operation.enum';

const routes: Routes = [
    {
        path: '',
        component: DuocPhamDaHetHanListComponent,
        data: {
            title: 'Dược phẩm đã hết hạn',
            DocumentType: DocumentType.DuocPhamDaHetHan,
            SecurityOperation: SecurityOperation.View
        }
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class DuocPhamDaHetHanRoutingModule { }
