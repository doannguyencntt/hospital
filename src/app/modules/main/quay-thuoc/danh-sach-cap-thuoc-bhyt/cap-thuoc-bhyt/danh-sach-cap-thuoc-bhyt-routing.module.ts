import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import { SecurityOperation } from 'src/app/shared/enum/security-operation.enum';
import { PermisssionGuard } from 'src/app/core/guards/permission-guard.service';
import { DanhSachDonThuocChoCapThuocComponent } from './danh-sach-don-thuoc-cho-cap-thuoc/danh-sach-don-thuoc-cho-cap-thuoc.component';
import { ChoCapThuocBHYTChiTietComponent } from './don-thuoc-cap-thuoc-chi-tiet/don-thuoc-cap-thuoc-chi-tiet.component';

const routes: Routes = [
    {
        path: '',
        component: DanhSachDonThuocChoCapThuocComponent,
        data: {
            title: 'Danh sách đơn thuốc chờ cấp thuốc',
            DocumentType: DocumentType.DanhSachDonThuocChoCapThuocBHYT,
            SecurityOperation: SecurityOperation.View
        },
        canActivate: [PermisssionGuard]
    } , 
    {
        path: 'cho-cap-thuoc-bhyt/:id/:idsub/:tt',
        component: ChoCapThuocBHYTChiTietComponent,
        data: {
            title: 'Chờ cấp thuốc chi tiết bhyt',
            DocumentType: DocumentType.DanhSachDonThuocChoCapThuocBHYT,
            SecurityOperation: SecurityOperation.View
        },
        canActivate: [PermisssionGuard]
    }   
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class DanhSachCapThuocBHYTRoutingModule { }
