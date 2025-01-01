import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PermisssionGuard } from 'src/app/core/guards/permission-guard.service';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import { SecurityOperation } from 'src/app/shared/enum/security-operation.enum';
import { YeuCauTraVatTuTuBenhNhanCreateComponent } from './yeu-cau-tra-vat-tu-tu-benh-nhan-create/yeu-cau-tra-vat-tu-tu-benh-nhan-create.component';
import { YeuCauTraVatTuTuBenhNhanListComponent } from './yeu-cau-tra-vat-tu-tu-benh-nhan-list/yeu-cau-tra-vat-tu-tu-benh-nhan-list.component';
import { YeuCauTraVatTuTuBenhNhanUpdateComponent } from './yeu-cau-tra-vat-tu-tu-benh-nhan-update/yeu-cau-tra-vat-tu-tu-benh-nhan-update.component';


const routes: Routes = [
  {
    path: '',
    component: YeuCauTraVatTuTuBenhNhanListComponent,
    data: {
      title: 'Phiếu Trả Vật Tư Từ Người Bệnh Nội Trú',
      DocumentType: DocumentType.TraVatTuTuBenhNhan,
      SecurityOperation: SecurityOperation.View
    },
    canActivate: [PermisssionGuard]
  },
  {
    path: 'them',
    component: YeuCauTraVatTuTuBenhNhanCreateComponent,
    data: {
      title: 'Tạo Phiếu Trả Vật Tư Từ Người Bệnh Nội Trú',
      DocumentType: DocumentType.TraVatTuTuBenhNhan,
      SecurityOperation: SecurityOperation.Add
    },
    canActivate: [PermisssionGuard]
  },
  {
    path: 'chi-tiet/:id',
    component: YeuCauTraVatTuTuBenhNhanUpdateComponent,
    data: {
      title: 'Chi Tiết Phiếu Trả Vật Tư Từ Người Bệnh Nội Trú',
      DocumentType: DocumentType.TraVatTuTuBenhNhan,
      SecurityOperation: SecurityOperation.Update
    },
    canActivate: [PermisssionGuard]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class YeuCauTraVatTuTuBenhNhanRoutingModule { }
