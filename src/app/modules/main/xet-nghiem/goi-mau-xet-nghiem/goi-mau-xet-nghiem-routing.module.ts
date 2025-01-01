import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PermisssionGuard } from 'src/app/core/guards/permission-guard.service';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import { SecurityOperation } from 'src/app/shared/enum/security-operation.enum';
import { GoiMauXetNghiemChiTietComponent } from './goi-mau-xet-nghiem-chi-tiet/goi-mau-xet-nghiem-chi-tiet.component';
import { GoiMauXetNghiemListComponent } from './goi-mau-xet-nghiem-list/goi-mau-xet-nghiem-list.component';


const routes: Routes = [
    {
        path: '',
        component: GoiMauXetNghiemListComponent,
        data: {
        title: 'Danh sách gửi mẫu xét nghiệm',      
            DocumentType: DocumentType.GoiMauXetNghiem,
            SecurityOperation:SecurityOperation.View
        },
        canActivate: [PermisssionGuard]
    },
    {
        path: 'chi-tiet/:id',
        component: GoiMauXetNghiemChiTietComponent,
        data: {
        title: 'Chi tiết phiếu gửi mẫu',      
            DocumentType: DocumentType.GoiMauXetNghiem,
            SecurityOperation:SecurityOperation.Update
        },
        canActivate: [PermisssionGuard]
    },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class GoiMauXetNghiemRoutingModule { }