import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PermisssionGuard } from 'src/app/core/guards/permission-guard.service';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import { SecurityOperation } from 'src/app/shared/enum/security-operation.enum';
import { KhamBenhComponent } from '../../kham-benh/kham-benh/kham-benh.component';
import { KhamDoanTiepNhanDetailPopupComponent } from './kham-doan-tiep-nhan-detail-popup/kham-doan-tiep-nhan-detail-popup.component';
import { KhamDoanTiepNhanListComponent } from './kham-doan-tiep-nhan-list/kham-doan-tiep-nhan-list.component';
import { KhamDoanTiepNhanNhanVienDetailPopupComponent } from './kham-doan-tiep-nhan-nhan-vien-detail-popup/kham-doan-tiep-nhan-nhan-vien-detail-popup.component';


const routes: Routes = [
  // {
  //   path: '',
  //   component: KhamDoanTiepNhanListComponent,
  //   data: {
  //     title: "Tiếp nhận",
  //     DocumentType: DocumentType.User, // cần cập nhật lại
  //     SecurityOperation: SecurityOperation.View
  //   },
  //   canActivate: [PermisssionGuard]
  // },
  {
    path: '',
    component: KhamDoanTiepNhanDetailPopupComponent,
    data: {
      title: 'Tiếp nhận khám sức khỏe đoàn',
      DocumentType: DocumentType.KhamDoanTiepNhan,
      SecurityOperation: SecurityOperation.Update
    },
    canActivate: [PermisssionGuard]
   },
   {
    path: 'nhan-vien/:id',
    component: KhamDoanTiepNhanNhanVienDetailPopupComponent,
    data: {
      title: 'Chi tiết khám sức khỏe của nhân viên',
      DocumentType: DocumentType.KhamDoanTiepNhan,
      SecurityOperation: SecurityOperation.Update
    },
    canActivate: [PermisssionGuard]
   },
   {
    path: 'kham-benh',
    component: KhamBenhComponent,
    data: {
      title: "Khám bệnh",
      DocumentType: DocumentType.KhamDoanKhamBenh,
      SecurityOperation: SecurityOperation.View
    },
    canActivate: [PermisssionGuard]
   }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class KhamDoanTiepNhanRoutingModule { }
