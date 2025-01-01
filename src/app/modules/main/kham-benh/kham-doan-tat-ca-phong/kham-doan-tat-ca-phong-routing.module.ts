import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import { SecurityOperation } from 'src/app/shared/enum/security-operation.enum';
import { KhamDoanTatCaPhongDetailComponent } from './kham-doan-tat-ca-phong-detail/kham-doan-tat-ca-phong-detail.component';


const routes: Routes = [
  {
    path: '',
    component: KhamDoanTatCaPhongDetailComponent,
    data: {
      title: "Khám bệnh",
      DocumentType: DocumentType.KhamDoanKhamBenhTatCaPhong,
      SecurityOperation: SecurityOperation.View
    }
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class KhamDoanTatCaPhongRoutingModule { }
