import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PermisssionGuard } from 'src/app/core/guards/permission-guard.service';
import { SecurityOperation } from 'src/app/shared/enum/security-operation.enum';
import { DuocPhamTonKhoListComponent } from './duoc-pham-ton-kho-list/duoc-pham-ton-kho-list.component';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';

const routes: Routes = [{
  path: '',
  component: DuocPhamTonKhoListComponent,
  data: {
    title: 'Danh sách tồn kho dược phẩm',
    DocumentType: DocumentType.DuocPhamTonKho,
    SecurityOperation: SecurityOperation.View
  },
  canActivate: [PermisssionGuard]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DuocPhamRoutingModule { }
