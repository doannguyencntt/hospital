import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoaiPhongBenhNoiTruListComponent } from './loai-phong-benh-noi-tru-list/loai-phong-benh-noi-tru-list.component';
import { LoaiPhongBenhNoiTruCreateComponent } from './loai-phong-benh-noi-tru-create/loai-phong-benh-noi-tru-create.component';
import { LoaiPhongBenhNoiTruUpdateComponent } from './loai-phong-benh-noi-tru-update/loai-phong-benh-noi-tru-update.component';
import { SecurityOperation } from 'src/app/shared/enum/security-operation.enum';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import { PermisssionGuard } from 'src/app/core/guards/permission-guard.service';

const routes: Routes = [
  {
    path: '',
    component: LoaiPhongBenhNoiTruListComponent,
    data: {
      title: 'Danh mục loại phòng bệnh nội trú',
      DocumentType: DocumentType.DanhMucLoaiPhongBenh,
      SecurityOperation: SecurityOperation.View
    },
    canActivate: [PermisssionGuard]
  },
  {
    path: 'them',
    component: LoaiPhongBenhNoiTruCreateComponent,
    data: {
      title: 'Thêm loại phòng bệnh nội trú',
      DocumentType: DocumentType.DanhMucLoaiPhongBenh,
      SecurityOperation: SecurityOperation.Add
    },
    canActivate: [PermisssionGuard]
  },
  {
    path: 'chinh-sua/:id',
    component: LoaiPhongBenhNoiTruUpdateComponent,
    data: {
      title: 'Chỉnh sửa loại phòng bệnh nội trú',
      DocumentType: DocumentType.DanhMucLoaiPhongBenh,
      SecurityOperation: SecurityOperation.Update
    },
    canActivate: [PermisssionGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoaiPhongBenhNoiTruRoutingModule { }
