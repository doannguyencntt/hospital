import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import { SecurityOperation } from 'src/app/shared/enum/security-operation.enum';
import { TaoBenhAnSoSinhComponent } from './tao-benh-an-so-sinh.component';


const routes: Routes = [
  {
    path: '',
    component: TaoBenhAnSoSinhComponent,
    data: {
      title: "Tao bệnh án sơ sinh",
      DocumentType: DocumentType.TaoBenhAnSoSinh,
      SecurityOperation: SecurityOperation.View
    }
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TaoBenhAnSoSinhRoutingModule { }
