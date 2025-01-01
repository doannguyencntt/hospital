import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import { SecurityOperation } from 'src/app/shared/enum/security-operation.enum';
import { PermisssionGuard } from 'src/app/core/guards/permission-guard.service';
import { NguoiGioiThieuListComponent } from './nguoi-gioi-thieu-list/nguoi-gioi-thieu-list.component';
import { NguoiGioiThieuCreateComponent } from './nguoi-gioi-thieu-create/nguoi-gioi-thieu-create.component';
import { NguoiGioiThieuUpdateComponent } from './nguoi-gioi-thieu-update/nguoi-gioi-thieu-update.component';

const routes: Routes = [
  {
    path: '',
    component: NguoiGioiThieuListComponent,
    data: {
      title: 'Danh mục người giới thiệu',
      //DocumentType: DocumentType.DanhMucNguoiGioiThieu,
      SecurityOperation: SecurityOperation.View
    },
    canActivate: [PermisssionGuard]
  },
  {
    path: 'them',
    component: NguoiGioiThieuCreateComponent,
    data: {
      title: 'Thêm người giới thiệu',
      //DocumentType: DocumentType.DanhMucNguoiGioiThieu,
      SecurityOperation: SecurityOperation.Add
    },
    canActivate: [PermisssionGuard]
  },
  {
    path: 'chinh-sua/:id',
    component: NguoiGioiThieuUpdateComponent,
    data: {
      title: 'Chỉnh sửa người giới thiệu',
      //DocumentType: DocumentType.DanhMucNguoiGioiThieu,
      SecurityOperation: SecurityOperation.Update
    },
    canActivate: [PermisssionGuard]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NguoiGioiThieuRoutingModule { }
