import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import { RouterModule, Routes } from '@angular/router';
import { BaoCaoCamKetSuDungThuocDvNgoaiBhytListComponent } from './bao-cao-cam-ket-su-dung-thuoc-dv-ngoai-bhyt-list/bao-cao-cam-ket-su-dung-thuoc-dv-ngoai-bhyt-list.component';
import { SecurityOperation } from 'src/app/shared/enum/security-operation.enum';
import { PermisssionGuard } from 'src/app/core/guards/permission-guard.service';


const routes: Routes = [
  {
    path: '',
    component: BaoCaoCamKetSuDungThuocDvNgoaiBhytListComponent,
    data: {
      title: 'Báo cáo cam kết tự nguyện sử dụng dịch vụ ngoài bhyt',
      DocumentType: DocumentType.BaoCaoCamKetSuDungThuocNgoaiBHYT,
      SecurityOperation: SecurityOperation.View
    },
    canActivate: [PermisssionGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BaoCaoCamKetSuDungThuocDvNgoaiBhytRoutingModule { }