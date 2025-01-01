import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PermisssionGuard } from 'src/app/core/guards/permission-guard.service';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import { SecurityOperation } from 'src/app/shared/enum/security-operation.enum';
import { DuyetDuTruMuaKSNKUpdateComponent } from './duyet-du-tru-mua-ksnk-update/duyet-du-tru-mua-ksnk-update.component';
import { GoiGiamDocDuTruMuaKSNKUpdateComponent } from './goi-giam-doc-du-tru-mua-ksnk-update/goi-giam-doc-du-tru-mua-ksnk-update.component';
// import { TongHopDuTruMuaKSNKTaiKhoaDuocListComponent } from './tong-hop-du-tru-mua-ksnk-tai-khoa-duoc-list/tong-hop-du-tru-mua-ksnk-tai-khoa-duoc-list.component';

const routes: Routes = [
  {
    path: '',
    // component: TongHopDuTruMuaKSNKTaiKhoaDuocListComponent,
    data: {
      title: 'Danh sách tổng hợp dự trù mua tại khoa kiểm soát nhiễm khuẩn',
      DocumentType: DocumentType.THDTMuaTaiHanhChinh ,
      SecurityOperation: SecurityOperation.View
    },
    canActivate: [PermisssionGuard]
  },
  {
    path: 'xem-chi-tiet/:id',
    component: DuyetDuTruMuaKSNKUpdateComponent,
    data: {
      title: 'Chi tiết duyệt dự trù mua kiểm soát nhiễm khuẩn',
      DocumentType: DocumentType.THDTMuaTaiHanhChinh ,
      SecurityOperation: SecurityOperation.View
    },
    canActivate: [PermisssionGuard]
  }
  ,
  {
    path: 'xem-chi-tiet-tu-choi/:id/:khoThuocId',
    component: DuyetDuTruMuaKSNKUpdateComponent,
    data: {
      title: 'Xem dự trù mua kiểm soát nhiễm khuẩn theo khoa',
      DocumentType: DocumentType.THDTMuaTaiHanhChinh ,
      SecurityOperation: SecurityOperation.View
    },
    canActivate: [PermisssionGuard]
  },
  {
    path: 'xem-chi-tiet-tu-da-xu-ly/:id/:khoThuocId',
    component: DuyetDuTruMuaKSNKUpdateComponent,
    data: {
      title: 'Xem dự trù mua kiểm soát nhiễm khuẩn theo khoa',
      DocumentType: DocumentType.THDTMuaTaiHanhChinh ,
      SecurityOperation: SecurityOperation.View
    },
    canActivate: [PermisssionGuard]
  },
  {
    path: 'duyet/:id/:khoThuocId/:trangThai',
    component: DuyetDuTruMuaKSNKUpdateComponent,
    data: {
      title: 'Duyệt dự trù mua kiểm soát nhiễm khuẩn',
      DocumentType: DocumentType.THDTMuaTaiHanhChinh ,
      SecurityOperation: SecurityOperation.Update
    },
    canActivate: [PermisssionGuard]
  },
  {
    path: 'gui/:id',
    component: GoiGiamDocDuTruMuaKSNKUpdateComponent,
    data: {
      title: 'Gửi dự trù mua kiểm soát nhiễm khuẩn',
      DocumentType: DocumentType.THDTMuaTaiHanhChinh ,
      SecurityOperation: SecurityOperation.Update
    },
    canActivate: [PermisssionGuard]
  },
  {
    path: 'gui/:id/:tinhTrang',
    component: GoiGiamDocDuTruMuaKSNKUpdateComponent,
    data: {
      title: 'Xem dự trù mua kiểm soát nhiễm khuẩn',
      DocumentType: DocumentType.THDTMuaTaiHanhChinh ,
      SecurityOperation: SecurityOperation.Update
    },
    canActivate: [PermisssionGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class TongHopDuTruMuaKSNKTaiKhoaDuocRoutingModule { }
