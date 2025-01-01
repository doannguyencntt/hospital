import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PermisssionGuard } from 'src/app/core/guards/permission-guard.service';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import { SecurityOperation } from 'src/app/shared/enum/security-operation.enum';
import { YeuCauTraThuocTuBenhNhanCreateComponent } from './yeu-cau-tra-thuoc-tu-benh-nhan-create/yeu-cau-tra-thuoc-tu-benh-nhan-create.component';
import { YeuCauTraThuocTuBenhNhanListComponent } from './yeu-cau-tra-thuoc-tu-benh-nhan-list/yeu-cau-tra-thuoc-tu-benh-nhan-list.component';
import { YeuCauTraThuocTuBenhNhanUpdateComponent } from './yeu-cau-tra-thuoc-tu-benh-nhan-update/yeu-cau-tra-thuoc-tu-benh-nhan-update.component';

const routes: Routes = [
  {
    path: '',
    component: YeuCauTraThuocTuBenhNhanListComponent,
    data: {
      title: 'Phiếu Trả Thuốc Từ Người Bệnh Nội Trú',
      DocumentType: DocumentType.TraThuocTuBenhNhan,
      SecurityOperation: SecurityOperation.View
    },
    canActivate: [PermisssionGuard]
  },
  {
    path: 'them',
    component: YeuCauTraThuocTuBenhNhanCreateComponent,
    data: {
      title: 'Tạo Phiếu Trả Thuốc Từ Người Bệnh Nội Trú',
      DocumentType: DocumentType.TraThuocTuBenhNhan,
      SecurityOperation: SecurityOperation.Add
    },
    canActivate: [PermisssionGuard]
  },
  {
    path: 'chi-tiet/:id',
    component: YeuCauTraThuocTuBenhNhanUpdateComponent,
    data: {
      title: 'Chi Tiết Phiếu Trả Thuốc Từ Người Bệnh Nội Trú',
      DocumentType: DocumentType.TraThuocTuBenhNhan,
      SecurityOperation: SecurityOperation.Update
    },
    canActivate: [PermisssionGuard]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class YeuCauTraThuocTuBenhNhanRoutingModule { }
