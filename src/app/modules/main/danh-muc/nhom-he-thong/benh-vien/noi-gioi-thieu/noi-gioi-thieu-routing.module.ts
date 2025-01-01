import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import { SecurityOperation } from 'src/app/shared/enum/security-operation.enum';
import { PermisssionGuard } from 'src/app/core/guards/permission-guard.service';
import { NoiGioiThieuListComponent } from './noi-gioi-thieu-list/noi-gioi-thieu-list.component';
import { NoiGioiThieuCreateComponent } from './noi-gioi-thieu-create/noi-gioi-thieu-create.component';
import { NoiGioiThieuUpdateComponent } from './noi-gioi-thieu-update/noi-gioi-thieu-update.component';


const routes: Routes = [
  {
    path: '',
    component: NoiGioiThieuListComponent,
    data: {
      title: 'Danh mục nơi giới thiệu',
      DocumentType: DocumentType.DanhMucNoiGioiThieu,
      SecurityOperation: SecurityOperation.View
    },
    canActivate: [PermisssionGuard]
  },
  {
    path: 'them',
    component: NoiGioiThieuCreateComponent,
    data: {
      title: 'Thêm nơi giới thiệu',
      DocumentType: DocumentType.DanhMucNoiGioiThieu,
      SecurityOperation: SecurityOperation.Add
    },
    canActivate: [PermisssionGuard]
  },
  {
    path: 'chinh-sua/:id',
    component: NoiGioiThieuUpdateComponent,
    data: {
      title: 'Chỉnh sửa nơi giới thiệu',
      DocumentType: DocumentType.DanhMucNoiGioiThieu,
      SecurityOperation: SecurityOperation.Update
    },
    canActivate: [PermisssionGuard]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NoiGioiThieuRoutingModule { }
