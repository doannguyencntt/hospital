import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PermisssionGuard } from 'src/app/core/guards/permission-guard.service';
import { SecurityOperation } from 'src/app/shared/enum/security-operation.enum';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import { BaoHiemYTeSharedComponent } from './bao-hiem-y-te-shared/bao-hiem-y-te-shared.component';
import { BaoHiemYTeXemComponent } from './bao-hiem-y-te-xem/bao-hiem-y-te-xem.component';

const routes: Routes = [
  {
    path: '',
    component: BaoHiemYTeSharedComponent,
    data: {
      title: 'Danh Mục BHYT',      
      DocumentType: DocumentType.User,
      SecurityOperation:SecurityOperation.View
    },
    canActivate: [PermisssionGuard]
  },
  {
    path: 'gui-ho-so-giam-dinh',
    component: BaoHiemYTeXemComponent,
    data: {
      title: 'Gửi hồ sơ giám định',      
      DocumentType: DocumentType.User,
      SecurityOperation:SecurityOperation.View
    },
    canActivate: [PermisssionGuard]
  }
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BaoHiemYTeRoutingModule { }
