import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PermisssionGuard } from 'src/app/core/guards/permission-guard.service';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import { SecurityOperation } from 'src/app/shared/enum/security-operation.enum';
// import { ThongKeCacDichChuaLayLenBienLaiComponent } from './ds-thong-ke-cac-dich-vu-chua-lay-len-bien-lai-thu-tien/ds-thong-ke-cac-dich-vu-chua-lay-len-bien-lai-thu-tien.component';

const routes: Routes = [
  {
    path: '',
    // component: ThongKeCacDichChuaLayLenBienLaiComponent,
    data: {
      title: 'Bảng thống kê các dịch vụ chưa lấy lên biên lai thu tiền',
      DocumentType: DocumentType.ThongKeCacDichVuChuaLayLenBienLaiThuTien,
      SecurityOperation: SecurityOperation.View
    },    
    canActivate: [PermisssionGuard]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class ThongKeCacDVChuaLayLenBienLaiRoutingModule { }
