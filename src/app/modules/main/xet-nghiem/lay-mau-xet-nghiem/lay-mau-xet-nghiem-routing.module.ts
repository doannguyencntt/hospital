import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PermisssionGuard } from 'src/app/core/guards/permission-guard.service';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import { SecurityOperation } from 'src/app/shared/enum/security-operation.enum';
import { LayMauXetNghiemCreateComponent } from './lay-mau-xet-nghiem-create/lay-mau-xet-nghiem-create.component';
import { LayMauXetNghiemDetailComponent } from './lay-mau-xet-nghiem-detail/lay-mau-xet-nghiem-detail.component';
import { LayMauXetNghiemListComponent } from './lay-mau-xet-nghiem-list/lay-mau-xet-nghiem-list.component';


const routes: Routes = [
  {
    path: '',
    component: LayMauXetNghiemListComponent,
    data: {
      title: 'Danh sách lấy mẫu xét nghiệm',      
      DocumentType: DocumentType.LayMauXetNghiem,
      SecurityOperation:SecurityOperation.View
    },
    canActivate: [PermisssionGuard]
  },
  {
    path: 'chi-tiet/:id',
    component: LayMauXetNghiemDetailComponent,
    data: {
      title: 'Chi tiết lấy mẫu xét nghiệm',      
      DocumentType: DocumentType.LayMauXetNghiem,
      SecurityOperation:SecurityOperation.Update
    },
    canActivate: [PermisssionGuard]
  },
  {
    path: 'them',
    component: LayMauXetNghiemCreateComponent,
    data: {
      title: 'Tạo phiếu gửi mẫu',      
      DocumentType: DocumentType.LayMauXetNghiem,
      SecurityOperation:SecurityOperation.Add
    },
    canActivate: [PermisssionGuard]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayMauXetNghiemRoutingModule { }
