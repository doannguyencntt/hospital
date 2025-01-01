import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import { SecurityOperation } from 'src/app/shared/enum/security-operation.enum';
import { PermisssionGuard } from 'src/app/core/guards/permission-guard.service';
import { DanhSachDuTruMuaKSNKComponent } from './danh-sach-du-tru-mua-ksnk/danh-sach-du-tru-mua-ksnk.component';
import { LapPhieuMuaKSNKComponent } from './lap-phieu-mua-ksnk/lap-phieu-mua-ksnk.component';
import { LapPhieuMuaKSNKGuiLaiComponent } from './lap-phieu-mua-ksnk-gui-lai/lap-phieu-mua-ksnk-gui-lai.component';

const routes: Routes = [
  {
    path: '',   
    component: DanhSachDuTruMuaKSNKComponent,
    data: {
      title: 'Danh Sách Yêu Cầu Mua Kiểm Soát Nhiễm Khuẩn',
      DocumentType: DocumentType.YeuCauDuTruMuaNhomKSNK,
      SecurityOperation: SecurityOperation.View
    },
    canActivate: [PermisssionGuard]
  },
  {
    path: 'lap-phieu-mua-ksnk/them',
    component: LapPhieuMuaKSNKComponent,
    data: {
      title: 'Lập Dự Trù Mua Kiểm Soát Nhiễm Khuẩn',
      DocumentType: DocumentType.YeuCauDuTruMuaNhomKSNK,
      SecurityOperation: SecurityOperation.Add
    },
    canActivate: [PermisssionGuard]
  },
  {
    path: 'lap-phieu-mua-ksnk-gui-lai/:id',
    component: LapPhieuMuaKSNKGuiLaiComponent,
    data: {
      title: 'Lập Dự Trù Mua Kiểm Soát Nhiễm Khuẩn',
      DocumentType: DocumentType.YeuCauDuTruMuaNhomKSNK,
      SecurityOperation: SecurityOperation.Update
    },
    canActivate: [PermisssionGuard]
  },
 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class YeuCauMuaKSNKRoutingModule { }
