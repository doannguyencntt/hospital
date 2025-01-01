import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PermisssionGuard } from 'src/app/core/guards/permission-guard.service';
import { SecurityOperation } from 'src/app/shared/enum/security-operation.enum';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import { BenhNhanListComponent } from './benh-nhan-list/benh-nhan-list.component';
import { BenhNhanCreateComponent } from './benh-nhan-create/benh-nhan-create.component';
import { BenhNhanUpdateComponent } from './benh-nhan-update/benh-nhan-update.component';


const routes: Routes = [
  {
    path: '',
    component: BenhNhanListComponent,
    data: {
      title: 'Danh Mục Người Bệnh',      
      DocumentType: DocumentType.BenhNhan,
      SecurityOperation:SecurityOperation.View
    },
    canActivate: [PermisssionGuard]
  },
  {
    path: 'them',
    component: BenhNhanCreateComponent,
    data: {
      title: 'Thêm Người Bệnh',      
      DocumentType: DocumentType.BenhNhan,
      SecurityOperation:SecurityOperation.View
    },
    canActivate: [PermisssionGuard]
  },
  {
    path: 'chinh-sua/:id',
    component: BenhNhanUpdateComponent,
    data: {
      title: 'Chỉnh Sửa Người Bệnh',      
      DocumentType: DocumentType.BenhNhan,
      SecurityOperation:SecurityOperation.View
    },
    canActivate: [PermisssionGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BenhNhanRoutingModule { }
