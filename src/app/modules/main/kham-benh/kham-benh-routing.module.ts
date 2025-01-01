import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { KhamBenhComponent } from './kham-benh/kham-benh.component';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import { SecurityOperation } from 'src/app/shared/enum/security-operation.enum';

const routes: Routes = [
  {
    path: '',
    component: KhamBenhComponent,
    data: {
      title: "Khám bệnh",
      DocumentType: DocumentType.KhamBenh,
      SecurityOperation: SecurityOperation.View
    }
  },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class KhamBenhRoutingModule { }
