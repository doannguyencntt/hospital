import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import { SecurityOperation } from 'src/app/shared/enum/security-operation.enum';
import { PermisssionGuard } from 'src/app/core/guards/permission-guard.service';
import { MarketingNhapKhoListComponent } from './marketing-nhap-kho-list/marketing-nhap-kho-list.component';
import { MarketingNhapKhoChiTietComponent } from './marketing-nhap-kho-chi-tiet/marketing-nhap-kho-chi-tiet.component';
import { MarketingNhapKhoCreateComponent } from './marketing-nhap-kho-create/marketing-nhap-kho-create.component';
import { MarketingNhapKhoUpdateComponent } from './marketing-nhap-kho-update/marketing-nhap-kho-update.component';

const routes: Routes =  [
  {
    path: '',
    component: MarketingNhapKhoListComponent,
    data: {
      title: 'Danh Sách Nhập Kho Marketing',
      DocumentType: DocumentType.NhapKhoMarketing,
      SecurityOperation: SecurityOperation.View
    },
    canActivate: [PermisssionGuard]
  },
  // {
  //   path: 'chi-tiet/:id',
  //   component: MarketingNhapKhoChiTietComponent,
  //   data: {
  //     title: "Nhập Kho Marketing Chi Tiết",
  //     DocumentType: DocumentType.NhapKhoMarketing,
  //     SecurityOperation: SecurityOperation.View
  //   },
  //   canActivate: [PermisssionGuard]
  // },
  {
    path: 'them',
    component: MarketingNhapKhoCreateComponent,
    data: {
      title: 'Thêm nhập kho quà tặng',
      DocumentType: DocumentType.NhapKhoMarketing,
      SecurityOperation: SecurityOperation.Add
    },
    canActivate: [PermisssionGuard]
  },
  {
    path: 'chinh-sua/:id',
    component: MarketingNhapKhoUpdateComponent,
    data: {
      title: 'Chỉnh sửa nhập kho quà tặng',
      DocumentType: DocumentType.NhapKhoMarketing,
      SecurityOperation: SecurityOperation.Update
    },
    canActivate: [PermisssionGuard]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MarketingNhapKhoRoutingModule { }
