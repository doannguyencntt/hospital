import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { PermisssionGuard } from 'src/app/core/guards/permission-guard.service';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import { SecurityOperation } from 'src/app/shared/enum/security-operation.enum';
import {
    TongHopDuTruMuaTaiKhoaDuocListComponent
} from './tong-hop-du-tru-mua-vat-tu-tai-khoa-duoc-list/tong-hop-du-tru-mua-vat-tu-tai-khoa-duoc-list.component';
import {
    DuyetDuTruMuaVatTuUpdateComponent
} from './duyet-du-tru-mua-vat-tu-update/duyet-du-tru-mua-vat-tu-update.component';
import {
    TongHopDuTruMuaTaiKhoaDuocUpdateComponent
} from './tong-hop-du-tru-mua-vat-tu-tai-khoa-duoc-update/tong-hop-du-tru-mua-vat-tu-tai-khoa-duoc-update.component';
import {
    GoiGiamDocDuTruMuaVatTuSharedComponent
} from './goi-giam-doc-du-tru-mua-vat-tu-shared/goi-giam-doc-du-tru-mua-vat-tu-shared.component';
import {
    GoiGiamDocDuTruMuaVatTuUpdateComponent
} from './goi-giam-doc-du-tru-mua-vat-tu-update/goi-giam-doc-du-tru-mua-vat-tu-update.component';

const routes: Routes = [
    {
      path: '',
      component: TongHopDuTruMuaTaiKhoaDuocListComponent,
      data: {
        title: 'Danh sách tổng hợp dự trù mua tại khoa vật tư',
        DocumentType: DocumentType.DanhSachTongHopDuTruMuaVatTuTaiKhoaDuoc,
        SecurityOperation: SecurityOperation.View
      },
      canActivate: [PermisssionGuard]
    },
    {
      path: 'xem-chi-tiet/:id',
      component: DuyetDuTruMuaVatTuUpdateComponent,
      data: {
        title: 'Chi tiết duyệt dự trù mua vật tư',      
        DocumentType: DocumentType.DanhSachTongHopDuTruMuaVatTuTaiKhoaDuoc,
        SecurityOperation:SecurityOperation.View
      },
      canActivate: [PermisssionGuard]
    }
    ,
    {
      path: 'xem-chi-tiet-tu-choi/:id/:khoThuocId',
      component: DuyetDuTruMuaVatTuUpdateComponent,
      data: {
        title: 'Xem dự trù mua vật tưtheo khoa',      
        DocumentType: DocumentType.DanhSachTongHopDuTruMuaVatTuTaiKhoaDuoc,
        SecurityOperation:SecurityOperation.View
      },
      canActivate: [PermisssionGuard]
    },
    {
      path: 'xem-chi-tiet-tu-da-xu-ly/:id/:khoThuocId',
      component: DuyetDuTruMuaVatTuUpdateComponent,
      data: {
        title: 'Xem dự trù mua vật tưtheo khoa',      
        DocumentType: DocumentType.DanhSachTongHopDuTruMuaVatTuTaiKhoaDuoc,
        SecurityOperation:SecurityOperation.View
      },
      canActivate: [PermisssionGuard]
    },
    {
      path: 'duyet/:id/:khoThuocId/:trangThai',
      component: DuyetDuTruMuaVatTuUpdateComponent,
      data: {
        title: 'Duyệt dự trù mua vật tư',      
        DocumentType: DocumentType.DanhSachTongHopDuTruMuaVatTuTaiKhoaDuoc,
        SecurityOperation:SecurityOperation.Update
      },
      canActivate: [PermisssionGuard]
    },
    {
      path: 'gui/:id',
      component: GoiGiamDocDuTruMuaVatTuUpdateComponent,
      data: {
        title: 'Gửi dự trù mua vật tư',      
        DocumentType: DocumentType.DanhSachTongHopDuTruMuaVatTuTaiKhoaDuoc,
        SecurityOperation:SecurityOperation.Update
      },
      canActivate: [PermisssionGuard]
    }
    ,
    {
      path: 'gui/:id/:tinhTrang',
      component: GoiGiamDocDuTruMuaVatTuUpdateComponent,
      data: {
        title: 'Xem dự trù mua vật tư',      
        DocumentType: DocumentType.DanhSachTongHopDuTruMuaVatTuTaiKhoaDuoc,
        SecurityOperation:SecurityOperation.Update
      },
      canActivate: [PermisssionGuard]
    }
  ];
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class TongHopDuTruMuaTaiKhoaDuocRoutingModule { }
