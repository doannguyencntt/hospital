import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import { SecurityOperation } from 'src/app/shared/enum/security-operation.enum';
import { PermisssionGuard } from 'src/app/core/guards/permission-guard.service';
import { AdrPhanUngCoHaiCuaThuocListComponent } from './adr-phan-ung-co-hai-cua-thuoc-list/adr-phan-ung-co-hai-cua-thuoc-list.component';
import { AdrPhanUngCoHaiCuaThuocCreateComponent } from './adr-phan-ung-co-hai-cua-thuoc-create/adr-phan-ung-co-hai-cua-thuoc-create.component';
import { AdrPhanUngCoHaiCuaThuocUpdateComponent } from './adr-phan-ung-co-hai-cua-thuoc-update/adr-phan-ung-co-hai-cua-thuoc-update.component';

const routes: Routes = [
  {
    path: '',
    component: AdrPhanUngCoHaiCuaThuocListComponent,
    data: {
      title: 'Danh mục ADR',
      DocumentType: DocumentType.DanhMucAdrPhanUngCoHaiCuaThuoc,
      SecurityOperation: SecurityOperation.View
    },
    canActivate: [PermisssionGuard]
  },
  {
    path: 'them',
    component: AdrPhanUngCoHaiCuaThuocCreateComponent,
    data: {
      title: 'Thêm ADR',
      DocumentType: DocumentType.DanhMucAdrPhanUngCoHaiCuaThuoc,
      SecurityOperation: SecurityOperation.Add
    },
    canActivate: [PermisssionGuard]
  },
  {
    path: 'chinh-sua/:id',
    component: AdrPhanUngCoHaiCuaThuocUpdateComponent,
    data: {
      title: 'Chỉnh sửa ADR',
      DocumentType: DocumentType.DanhMucAdrPhanUngCoHaiCuaThuoc,
      SecurityOperation: SecurityOperation.Update
    },
    canActivate: [PermisssionGuard]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdrPhanUngCoHaiCuaThuocRoutingModule { }
