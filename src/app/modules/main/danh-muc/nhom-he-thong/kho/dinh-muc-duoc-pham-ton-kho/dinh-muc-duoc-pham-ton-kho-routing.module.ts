import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import { SecurityOperation } from 'src/app/shared/enum/security-operation.enum';
import { PermisssionGuard } from 'src/app/core/guards/permission-guard.service';
import { DinhMucDuocPhamTonKhoListComponent } from './dinh-muc-duoc-pham-ton-kho-list/dinh-muc-duoc-pham-ton-kho-list.component';
import { DinhMucDuocPhamTonKhoCreateComponent } from './dinh-muc-duoc-pham-ton-kho-create/dinh-muc-duoc-pham-ton-kho-create.component';
import { DinhMucDuocPhamTonKhoUpdateComponent } from './dinh-muc-duoc-pham-ton-kho-update/dinh-muc-duoc-pham-ton-kho-update.component';


const routes: Routes = [
  {
    path: '',
    component: DinhMucDuocPhamTonKhoListComponent,
    data: {
      title: 'Danh mục định mức dược phẩm tồn kho',
      DocumentType: DocumentType.DanhMucDinhMucDuocPhamTonKho,
      SecurityOperation: SecurityOperation.View
    },
    canActivate: [PermisssionGuard]
  },
  {
    path: 'them',
    component: DinhMucDuocPhamTonKhoCreateComponent,
    data: {
      title: 'Thêm định mức dược phẩm tồn kho',
      DocumentType: DocumentType.DanhMucDinhMucDuocPhamTonKho,
      SecurityOperation: SecurityOperation.Add
    },
    canActivate: [PermisssionGuard]
  },
  {
    path: 'chinh-sua/:id',
    component: DinhMucDuocPhamTonKhoUpdateComponent,
    data: {
      title: 'Chỉnh sửa định mức dược phẩm tồn kho',
      DocumentType: DocumentType.DanhMucDinhMucDuocPhamTonKho,
      SecurityOperation: SecurityOperation.Update
    },
    canActivate: [PermisssionGuard]
  },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DinhMucDuocPhamTonKhoRoutingModule { }
