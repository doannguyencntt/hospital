import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PermisssionGuard } from 'src/app/core/guards/permission-guard.service';
import { SecurityOperation } from 'src/app/shared/enum/security-operation.enum';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import { LyDoTiepNhanListComponent } from './ly-do-tiep-nhan-list/ly-do-tiep-nhan-list.component';
import { LyDoTiepNhanCreateComponent } from './ly-do-tiep-nhan-create/ly-do-tiep-nhan-create.component';
import { LyDoTiepNhanUpdateComponent } from './ly-do-tiep-nhan-update/ly-do-tiep-nhan-update.component';

const routes: Routes = [
  {
    path: '',
    component: LyDoTiepNhanListComponent,
    data: {
      title: 'Danh Mục Lý Do Tiếp Nhận',      
      DocumentType: DocumentType.DanhMucLyDoTiepNhan,
      SecurityOperation:SecurityOperation.View
    },
    canActivate: [PermisssionGuard]
  },
  {
    path: 'them',
    component: LyDoTiepNhanCreateComponent,
    data: {
      title: 'Thêm triệu chứng',
      DocumentType: DocumentType.DanhMucLyDoTiepNhan,
      SecurityOperation: SecurityOperation.Add
    },
    canActivate: [PermisssionGuard]
  },
  {
    path: 'them/:id/:isShowView',
    component: LyDoTiepNhanCreateComponent,
    data: {
      title: 'Thêm triệu chứng',
      DocumentType: DocumentType.DanhMucLyDoTiepNhan,
      SecurityOperation: SecurityOperation.Add
    },
    canActivate: [PermisssionGuard]
  },
  {
    path: 'chinh-sua/:id/:isShowView',
    component: LyDoTiepNhanUpdateComponent,
    data: {
      title: 'Chỉnh sửa triệu chứng',
      DocumentType: DocumentType.DanhMucLyDoTiepNhan,
      SecurityOperation: SecurityOperation.Update
    },
    canActivate: [PermisssionGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LyDoTiepNhanRoutingModule { }
