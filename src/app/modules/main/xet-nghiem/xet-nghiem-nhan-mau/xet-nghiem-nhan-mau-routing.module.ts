import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PermisssionGuard } from 'src/app/core/guards/permission-guard.service';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import { SecurityOperation } from 'src/app/shared/enum/security-operation.enum';
import { XetNghiemNhanMauListComponent } from './xet-nghiem-nhan-mau-list/xet-nghiem-nhan-mau-list.component';


const routes: Routes = [
  {
    path: '',
    component: XetNghiemNhanMauListComponent,
    data: {
      title: 'DS nhận mẫu',      
      DocumentType: DocumentType.NhanMauXetNghiem,
      SecurityOperation:SecurityOperation.View
    },
    canActivate: [PermisssionGuard]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class XetNghiemNhanMauRoutingModule { }
