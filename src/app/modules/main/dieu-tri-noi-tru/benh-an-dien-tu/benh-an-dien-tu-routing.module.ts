import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import { SecurityOperation } from 'src/app/shared/enum/security-operation.enum';
import { BenhAnDienTuListComponent } from './benh-an-dien-tu-list/benh-an-dien-tu-list.component';


const routes: Routes = [
  {
    path: '',
    component: BenhAnDienTuListComponent,
    data: {
      title: "Bệnh án điện tử",
      DocumentType: DocumentType.BenhAnDienTu,
      SecurityOperation: SecurityOperation.View
    }
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BenhAnDienTuRoutingModule { }
