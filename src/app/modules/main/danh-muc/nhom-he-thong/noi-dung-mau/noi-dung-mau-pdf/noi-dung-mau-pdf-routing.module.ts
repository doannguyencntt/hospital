import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SecurityOperation } from '../../../../../../shared/enum/security-operation.enum';
import { DocumentType } from '../../../../../../shared/enum/document-type.enum';
import { PermisssionGuard } from '../../../../../../core/guards/permission-guard.service';
import { NoiDungMauPdfListComponent } from './noi-dung-mau-pdf-list/noi-dung-mau-pdf-list.component';
import { NoiDungMauPdfUpdateComponent } from './noi-dung-mau-pdf-update/noi-dung-mau-pdf-update.component';

const routes: Routes = [ 
  {
  path: '',
  component: NoiDungMauPdfListComponent,
  data: {
    title: 'Danh sách nội dung xuất ra pdf',
    DocumentType: DocumentType.QuanLyNoiDungMauXuatRaPdf,
    SecurityOperation: SecurityOperation.View
  },
  canActivate: [PermisssionGuard]
},
{
  path: 'chinh-sua/:id',
  component: NoiDungMauPdfUpdateComponent,
  data: {
    title: 'Chỉnh sửa nội dung xuất ra pdf',
    DocumentType: DocumentType.QuanLyNoiDungMauXuatRaPdf,
    SecurityOperation: SecurityOperation.Update
  },
  canActivate: [PermisssionGuard]
},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NoiDungMauPdfRoutingModule { }

