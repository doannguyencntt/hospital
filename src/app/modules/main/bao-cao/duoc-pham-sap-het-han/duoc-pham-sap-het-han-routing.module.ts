import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PermisssionGuard } from 'src/app/core/guards/permission-guard.service';
import { SecurityOperation } from 'src/app/shared/enum/security-operation.enum';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import { DuocPhamSapHetHanListComponent } from './duoc-pham-sap-het-han-list/duoc-pham-sap-het-han-list.component';

const routes: Routes = [{
  path: '',
  component: DuocPhamSapHetHanListComponent,
  data: {
    title: 'Danh sách dược phẩm sắp hết hạn',
    DocumentType: DocumentType.DuocPhamSapHetHan,
    SecurityOperation: SecurityOperation.View
  },
  canActivate: [PermisssionGuard]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DuocPhamSapHetHanRoutingModule { }
