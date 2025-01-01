import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SecurityOperation } from 'src/app/shared/enum/security-operation.enum';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import { PermisssionGuard } from 'src/app/core/guards/permission-guard.service';
import { BaoCaoBangKeXuatThuocTheoBenhNhanListComponent } from './bao-cao-bang-ke-xuat-thuoc-theo-benh-nhan-list/bao-cao-bang-ke-xuat-thuoc-theo-benh-nhan-list.component';


const routes: Routes = [
  {
    path: '',
    component: BaoCaoBangKeXuatThuocTheoBenhNhanListComponent,
    data: {
      title: 'Báo cáo bảng kê xuất thuốc theo bệnh nhân',
      DocumentType: DocumentType.BaoCaoBangKeXuatThuocTheoBenhNhan,
      SecurityOperation: SecurityOperation.View
    },
    canActivate: [PermisssionGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BaoCaoBangKeXuatThuocTheoBenhNhanRoutingModule { }
