import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SecurityOperation } from 'src/app/shared/enum/security-operation.enum';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import { PermisssionGuard } from 'src/app/core/guards/permission-guard.service';
import { VanBangChuyenMonListComponent } from './van-bang-chuyen-mon-list/van-bang-chuyen-mon-list.component';
import { VanBangChuyenMonCreateComponent } from './van-bang-chuyen-mon-create/van-bang-chuyen-mon-create.component';
import { VanBangChuyenMonUpdateComponent } from './van-bang-chuyen-mon-update/van-bang-chuyen-mon-update.component';



const routes: Routes = [
  {
    path: '',
    component: VanBangChuyenMonListComponent,
    data: {
      title: 'Danh sách văn bằng chuyên môn',
      DocumentType: DocumentType.DanhMucVanBangChuyenMon,
      SecurityOperation: SecurityOperation.View
    },
    canActivate: [PermisssionGuard]
  },
  {
    path: 'them',
    component: VanBangChuyenMonCreateComponent,
    data: {
      title: 'Thêm văn bằng chuyên môn',
      DocumentType: DocumentType.DanhMucVanBangChuyenMon,
      SecurityOperation: SecurityOperation.Add
    },
    canActivate: [PermisssionGuard]
  },
  {
    path: 'chinh-sua/:id',
    component: VanBangChuyenMonUpdateComponent,
    data: {
      title: 'Cập nhật văn bằng chuyên môn',
      DocumentType: DocumentType.DanhMucVanBangChuyenMon,
      SecurityOperation: SecurityOperation.Update
    },
    canActivate: [PermisssionGuard]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VanBangChuyenMonRoutingModule { }
