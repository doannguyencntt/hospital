import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import { SecurityOperation } from 'src/app/shared/enum/security-operation.enum';
import { PermisssionGuard } from 'src/app/core/guards/permission-guard.service';
import { MarketingListComponent } from './marketing-list/marketing-list.component';
import { MarketingCreateComponent } from './marketing-create/marketing-create.component';
import { MarketingUpdateComponent } from './marketing-update/marketing-update.component';
import { MarketingDetailComponent } from './marketing-detail/marketing-detail.component';

const routes: Routes = [
  {
  path: '',
    component: MarketingListComponent,
    data: {
      title: 'Marketing',      
      DocumentType: DocumentType.DanhSachMarketing,
      SecurityOperation:SecurityOperation.View
    },
    canActivate: [PermisssionGuard]
  },
  {
    path: 'them',
    component: MarketingCreateComponent,
    data: {
      title: 'Thêm Marketing',      
      DocumentType: DocumentType.DanhSachMarketing,
      SecurityOperation:SecurityOperation.Add
    },
    canActivate: [PermisssionGuard]
  },
  {
    path: 'chinh-sua/:id',
    component: MarketingUpdateComponent,
    data: {
      title: 'Chỉnh Sửa Marketing',      
      DocumentType: DocumentType.DanhSachMarketing,
      SecurityOperation:SecurityOperation.Update
    },
    canActivate: [PermisssionGuard]
  },
  {
    path: 'xem-chi-tiet/:id',
    component: MarketingDetailComponent,
    data: {
      title: 'Xem Marketing',      
      DocumentType: DocumentType.DanhSachMarketing,
      SecurityOperation:SecurityOperation.View
    },

    canActivate: [PermisssionGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MarketingRoutingModule { }
