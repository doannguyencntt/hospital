import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PermisssionGuard } from 'src/app/core/guards/permission-guard.service';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import { SecurityOperation } from 'src/app/shared/enum/security-operation.enum';
import { XetNghiemCapCodeListComponent } from './xet-nghiem-cap-code-list/xet-nghiem-cap-code-list.component';


const routes: Routes = [
  {
    path: '',
    component: XetNghiemCapCodeListComponent,
    data: {
      title: 'DS cấp code',      
      DocumentType: DocumentType.LayMauXetNghiem,
      SecurityOperation:SecurityOperation.View
    },
    canActivate: [PermisssionGuard]
  },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class XetNghiemCapCodeRoutingModule { }
