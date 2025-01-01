import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import { SecurityOperation } from 'src/app/shared/enum/security-operation.enum';
import { PermisssionGuard } from 'src/app/core/guards/permission-guard.service';
import { DanhSachDuTruMuaThuocComponent } from './danh-sach-du-tru-mua-thuoc/danh-sach-du-tru-mua-thuoc.component';
import { LapPhieuMuaDuocPhamComponent } from './lap-phieu-mua-duoc-pham/lap-phieu-mua-duoc-pham.component';
import { LapPhieuMuaDuocPhamGuiLaiComponent } from './lap-phieu-mua-duoc-pham-gui-lai/lap-phieu-mua-duoc-pham-gui-lai.component';

const routes: Routes = [
  {
    path: '',
    // pathMatch: 'full',
    component: DanhSachDuTruMuaThuocComponent,
    data: {
      title: 'Danh Sách Yêu Cầu Mua Dược Phẩm',
      DocumentType: DocumentType.DanhSachYeuCauDuTruMuaDuocPham,
      SecurityOperation: SecurityOperation.View
    },
    canActivate: [PermisssionGuard]
  },
  {
    path: 'lap-phieu-mua-duoc-pham/them',
    component: LapPhieuMuaDuocPhamComponent,
    data: {
      title: 'Lập Dự Trù Mua Dược Phẩm',
      DocumentType: DocumentType.DanhSachYeuCauDuTruMuaDuocPham,
      SecurityOperation: SecurityOperation.Add
    },
    canActivate: [PermisssionGuard]
  },
  {
    path: 'lap-phieu-mua-duoc-pham-gui-lai/:id',
    component: LapPhieuMuaDuocPhamGuiLaiComponent,
    data: {
      title: 'Lập Dự Trù Mua Dược Phẩm',
      DocumentType: DocumentType.DanhSachYeuCauDuTruMuaDuocPham,
      SecurityOperation: SecurityOperation.Update
    },
    canActivate: [PermisssionGuard]
  },
 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class YeuCauMuaThuocRoutingModule { }
