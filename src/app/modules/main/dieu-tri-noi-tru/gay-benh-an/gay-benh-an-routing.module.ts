import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PermisssionGuard } from 'src/app/core/guards/permission-guard.service';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import { SecurityOperation } from 'src/app/shared/enum/security-operation.enum';
import { GayBenhAnCreateComponent } from './gay-benh-an-create/gay-benh-an-create.component';
import { GayBenhAnListComponent } from './gay-benh-an-list/gay-benh-an-list.component';
import { GayBenhAnUpdateComponent } from './gay-benh-an-update/gay-benh-an-update.component';

const routes: Routes = [
  {
    path: '',
    component: GayBenhAnListComponent,
    data: {
      title: "Gáy bệnh án",
      DocumentType: DocumentType.DanhMucGayBenhAn,
      SecurityOperation: SecurityOperation.View
    }
  },
  {
    path: 'them',
    component: GayBenhAnCreateComponent,
    data: {
      title: 'Thêm Gáy bệnh án',
      DocumentType: DocumentType.DanhMucGayBenhAn,
      SecurityOperation: SecurityOperation.Add
    },
    canActivate: [PermisssionGuard]
  },
  {
    path: 'chinh-sua/:id',
    component: GayBenhAnUpdateComponent,
    data: {
      title: 'Chỉnh sửa Gáy bệnh án',
      DocumentType: DocumentType.DanhMucGayBenhAn,
      SecurityOperation: SecurityOperation.Update
    },
    canActivate: [PermisssionGuard]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GayBenhAnRoutingModule { }
