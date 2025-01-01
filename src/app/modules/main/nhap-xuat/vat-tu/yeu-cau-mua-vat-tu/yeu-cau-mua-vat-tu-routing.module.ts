import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import { SecurityOperation } from 'src/app/shared/enum/security-operation.enum';
import { PermisssionGuard } from 'src/app/core/guards/permission-guard.service';
import { DanhSachDuTruMuaVatTuComponent } from './danh-sach-du-tru-mua-vat-tu/danh-sach-du-tru-mua-vat-tu.component';
import { LapPhieuMuaVatTuComponent } from './lap-phieu-mua-vat-tu/lap-phieu-mua-vat-tu.component';
import { LapPhieuMuaVatTuGuiLaiComponent } from './lap-phieu-mua-vat-tu-gui-lai/lap-phieu-mua-vat-tu-gui-lai.component';
const routes: Routes = [
  {
    path: '',
    // pathMatch: 'full',
    component: DanhSachDuTruMuaVatTuComponent,
    data: {
      title: 'Danh Sách Yêu Cầu Mua Dược Phẩm',
      DocumentType: DocumentType.DanhSachYeuCauDuTruMuaVatTu,
      SecurityOperation: SecurityOperation.View
    },
    canActivate: [PermisssionGuard]
  },
  {
    path: 'lap-phieu-mua-vat-tu/them',
    component: LapPhieuMuaVatTuComponent,
    data: {
      title: 'Lập Dự Trù Mua Vật Tư',
      DocumentType: DocumentType.DanhSachYeuCauDuTruMuaVatTu,
      SecurityOperation: SecurityOperation.Add
    },
    canActivate: [PermisssionGuard]
  },
  {
    path: 'lap-phieu-mua-vat-tu-gui-lai/:id',
    component: LapPhieuMuaVatTuGuiLaiComponent,
    data: {
      title: 'Lập Dự Trù Mua Vật Tư',
      DocumentType: DocumentType.DanhSachYeuCauDuTruMuaVatTu,
      SecurityOperation: SecurityOperation.Update
    },
    canActivate: [PermisssionGuard]
  },
 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class YeuCauMuaVatTuRoutingModule { }
