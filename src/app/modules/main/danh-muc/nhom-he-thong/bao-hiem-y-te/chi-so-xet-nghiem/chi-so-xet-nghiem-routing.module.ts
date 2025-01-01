import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import { SecurityOperation } from 'src/app/shared/enum/security-operation.enum';
import { PermisssionGuard } from 'src/app/core/guards/permission-guard.service';
import { ChiSoXetNghiemListComponent } from './chi-so-xet-nghiem-list/chi-so-xet-nghiem-list.component';
import { ChiSoXetNghiemCreateComponent } from './chi-so-xet-nghiem-create/chi-so-xet-nghiem-create.component';
import { ChiSoXetNghiemUpdateComponent } from './chi-so-xet-nghiem-update/chi-so-xet-nghiem-update.component';
const routes: Routes = 
[ 
   {
    path: '',
    component: ChiSoXetNghiemListComponent,
    data: {
      title: 'Danh mục chỉ số xét nghiệm',
      DocumentType: DocumentType.DanhMucChiSoXetNghiem,
      SecurityOperation: SecurityOperation.View
    },
    canActivate: [PermisssionGuard]
  },
  {
    path: 'them',
    component: ChiSoXetNghiemCreateComponent,
    data: {
      title: 'Thêm chỉ số xét nghiệm',
      DocumentType: DocumentType.DanhMucChiSoXetNghiem,
      SecurityOperation: SecurityOperation.Add
    },
    canActivate: [PermisssionGuard]
  },
  {
    path: 'chinh-sua/:id',
    component: ChiSoXetNghiemUpdateComponent,
    data: {
      title: 'Cập chỉ số xét nghiệm',
      DocumentType: DocumentType.DanhMucChiSoXetNghiem,
      SecurityOperation: SecurityOperation.Update
    },
    canActivate: [PermisssionGuard]
   },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChiSoXetNghiemRoutingModule { }
