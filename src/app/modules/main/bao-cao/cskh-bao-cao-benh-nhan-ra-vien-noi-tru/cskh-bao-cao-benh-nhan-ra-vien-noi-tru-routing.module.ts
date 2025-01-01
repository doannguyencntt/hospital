import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PermisssionGuard } from 'src/app/core/guards/permission-guard.service';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import { SecurityOperation } from 'src/app/shared/enum/security-operation.enum';
import { CSKHBaoCaoBenhNhanRaVienNoiTruComponent } from './cskh-danh-sach-bao-cao-benh-nhan-ra-vien-noi-tru/cskh-danh-sach-bao-cao-benh-nhan-ra-vien-noi-tru.component';

const routes: Routes = [
  {
    path: '',
    component: CSKHBaoCaoBenhNhanRaVienNoiTruComponent,
    data: {
      title: 'BÁO CÁO BỆNH NHÂN RA VIỆN NỘI TRÚ',
      DocumentType: DocumentType.BaoCaoBenhNhanRaVienNoiTru,
      SecurityOperation: SecurityOperation.View
    },
    canActivate: [PermisssionGuard]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CSKHBaoCaoBenhNhanRaVienNoiTruRoutingModule { }
