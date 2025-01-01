import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import { SecurityOperation } from 'src/app/shared/enum/security-operation.enum';
import { PermisssionGuard } from 'src/app/core/guards/permission-guard.service';
import { ToaThuocMauListComponent } from './toa-thuoc-mau-list/toa-thuoc-mau-list.component';
import { ToaThuocMauCreateComponent } from './toa-thuoc-mau-create/toa-thuoc-mau-create.component';
import { ToaThuocMauUpdateComponent } from './toa-thuoc-mau-update/toa-thuoc-mau-update.component';


const routes: Routes = [
  {
    path: '',
    component: ToaThuocMauListComponent,
    data: {
      title: 'Danh mục toa thuốc mẫu',
      DocumentType: DocumentType.ToaThuocMau,
      SecurityOperation: SecurityOperation.View
    },
    canActivate: [PermisssionGuard]
  },
  {
    path: 'them',
    component: ToaThuocMauCreateComponent,
    data: {
      title: 'Thêm toa thuốc mẫu',
      DocumentType: DocumentType.ToaThuocMau,
      SecurityOperation: SecurityOperation.Add
    },
    canActivate: [PermisssionGuard]
  },
  {
    path: 'chinh-sua/:id',
    component: ToaThuocMauUpdateComponent,
    data: {
      title: 'Chỉnh sửa toa thuốc mẫu',
      DocumentType: DocumentType.ToaThuocMau,
      SecurityOperation: SecurityOperation.Update
    },
    canActivate: [PermisssionGuard]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ToaThuocMauRoutingModule { }
