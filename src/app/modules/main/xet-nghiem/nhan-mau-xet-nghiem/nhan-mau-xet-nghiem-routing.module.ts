import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PermisssionGuard } from 'src/app/core/guards/permission-guard.service';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import { SecurityOperation } from 'src/app/shared/enum/security-operation.enum';
import { NhanMauXetNghiemChiTietComponent } from './nhan-mau-xet-nghiem-chi-tiet/nhan-mau-xet-nghiem-chi-tiet.component';
import { NhanMauXetNghiemListComponent } from './nhan-mau-xet-nghiem-list/nhan-mau-xet-nghiem-list.component';

const routes: Routes = [
    {
        path: '',
        component: NhanMauXetNghiemListComponent,
        data: {
        title: 'Danh sách nhận mẫu xét nghiệm',      
            DocumentType: DocumentType.NhanMauXetNghiem,
            SecurityOperation:SecurityOperation.View
        },
        canActivate: [PermisssionGuard]
    },
    {
        path: 'chi-tiet/:id',
        component: NhanMauXetNghiemChiTietComponent,
        data: {
        title: 'Chi tiết phiếu nhận mẫu',      
            DocumentType: DocumentType.NhanMauXetNghiem,
            SecurityOperation:SecurityOperation.Update
        },
        canActivate: [PermisssionGuard]
    },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class NhanMauXetNghiemRoutingModule { }