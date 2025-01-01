import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import { SecurityOperation } from 'src/app/shared/enum/security-operation.enum';
import { KhamBenhDangKhamListComponent } from './kham-benh-dang-kham-list/kham-benh-dang-kham-list.component';
import { KhamBenhDangKhamTheoPhongKhamChiTietComponent } from './kham-benh-dang-kham-theo-phong-kham-chi-tiet/kham-benh-dang-kham-theo-phong-kham-chi-tiet.component';
import { KhamBenhDangKhamTheoPhongKhamComponent } from './kham-benh-dang-kham-theo-phong-kham/kham-benh-dang-kham-theo-phong-kham.component';


const routes: Routes = [
  {
    path: '',
    component: KhamBenhDangKhamListComponent,
    data: {
      title: "Khám bệnh đang khám",
      DocumentType: DocumentType.KhamBenhDangKham,
      SecurityOperation: SecurityOperation.View
    }
  },
  {
    path: 'danh-sach-dang-kham/:id',
    component: KhamBenhDangKhamTheoPhongKhamComponent,
    data: {
      title: "Danh sách đang khám theo phòng khám",
      DocumentType: DocumentType.KhamBenhDangKham,
      SecurityOperation: SecurityOperation.View
    }
  },
  {
    path: 'danh-sach-dang-kham/benh-nhan-dang-kham/:id',
    component: KhamBenhDangKhamTheoPhongKhamChiTietComponent,
    data: {
      title: "Người bệnh đang khám",
      DocumentType: DocumentType.KhamBenhDangKham,
      SecurityOperation: SecurityOperation.View
    }
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class KhamBenhDangKhamRoutingModule { }
